const test = require('node:test');
const assert = require('node:assert/strict');

const analytics = require('../js/site-actions.js');

function makeLink(href, placement, orderItem) {
  return {
    href,
    dataset: {
      analyticsPlacement: placement,
      ...(orderItem ? { orderItem } : {})
    }
  };
}

test('classifies every current tracked destination', () => {
  assert.equal(
    analytics.classifyDestination('https://hikarisushi-online.square.site/'),
    'click_order_online'
  );
  assert.equal(
    analytics.classifyDestination('https://reservation.carbonaraapp.com/United-States/South-Jordan/Hikari-Sushi'),
    'click_reservations'
  );
  assert.equal(
    analytics.classifyDestination('https://www.google.com/maps/dir/?api=1&destination=Hikari+Sushi'),
    'click_directions'
  );
});

test('bootstraps the Google Analytics queue from the external module', () => {
  const scope = {};
  const gtag = analytics.bootstrap(scope, 'G-TEST123');

  assert.equal(typeof gtag, 'function');
  assert.equal(scope.dataLayer.length, 2);
  assert.equal(scope.dataLayer[0][0], 'js');
  assert.deepEqual(Array.from(scope.dataLayer[1]), ['config', 'G-TEST123']);
});

test('ignores unrelated and lookalike destinations', () => {
  assert.equal(analytics.classifyDestination('https://example.com/'), null);
  assert.equal(analytics.classifyDestination('https://hikarisushi-online.square.site.example.com/'), null);
  assert.equal(analytics.classifyDestination('not a valid url'), null);
});

test('builds useful non-personal event parameters', () => {
  const link = makeLink(
    'https://hikarisushi-online.square.site/?location=LMCJ08MMKDHCA&item=A5BIIXCE5ILZWRZCDTY7A4KY#Y7DXG5VB4X6CYFEBQ6ZUD7DX',
    'featured_dish',
    'Fire Cracker'
  );

  assert.deepEqual(analytics.buildEventParameters(link, { pathname: '/menu' }), {
    page_path: '/menu',
    cta_placement: 'featured_dish',
    link_url: link.href.split('#')[0],
    item_name: 'Fire Cracker'
  });
});

test('handoff preserves Square destination and separates QR traffic while reporting only safe URL fields', () => {
  for (const [pathname, entry] of [['/', 'public_website'], ['/menu', 'qr_menu'], ['/menu.html', 'qr_menu']]) {
    const calls = [];
    const link = makeLink('https://hikarisushi-online.square.site/?location=L1&item=I1&_gl=opaque&email=private#category', 'hero');
    analytics.handleClick({ target: { closest: () => link } }, (...args) => calls.push(args), { pathname });
    const destination = new URL(link.href);
    assert.equal(destination.searchParams.get('hikari_entry'), entry);
    assert.equal(destination.searchParams.get('_gl'), 'opaque');
    assert.equal(destination.searchParams.get('location'), 'L1');
    assert.equal(destination.searchParams.get('item'), 'I1');
    assert.equal(destination.hash, '#category');
    assert.equal(calls[0][2].link_url, 'https://hikarisushi-online.square.site/?location=L1&item=I1');
    assert.equal(calls.length, 1);
  }
});

const fs = require('node:fs');
const vm = require('node:vm');
const markerScript = fs.readFileSync(require('node:path').join(__dirname, 'fixtures/', process.env.HIKARI_MARKER_TEST_FILE || 'square-journey-header.html'), 'utf8').replace(/<\/?script>/g, '');

function runMarker({ entry = 'public_website', referrer = 'https://hikarisojo.com/', navigationType = 'navigate', storage = new Map(), start = 1000000, nativeTag = true } = {}) {
  let now = start;
  let timer;
  const calls = [];
  const handlers = {};
  const existingGtag = (...args) => calls.push(args);
  const window = {
    ...(nativeTag ? { gtag: existingGtag } : {}),
    addEventListener: (name, fn) => { handlers[name] = fn; }
  };
  vm.runInNewContext(markerScript, {
    window, URL, Number,
    location: new URL('https://hikarisushi-online.square.site/?hikari_entry=' + entry),
    document: { referrer, addEventListener: (name, fn) => { handlers[name] = fn; } },
    performance: { getEntriesByType: () => [{ type: navigationType }] },
    sessionStorage: { getItem: key => storage.get(key) || null, setItem: (key, value) => storage.set(key, value), removeItem: key => storage.delete(key) },
    Date: { now: () => now },
    setTimeout: fn => { timer = fn; return 1; },
    clearTimeout: () => { timer = null; }
  });
  return { calls, window, storage, handlers, advance: ms => { now += ms; if (timer) timer(); }, existingGtag };
}

test('Square marker expires in the SPA, remains separate for QR, and never replaces or emits native events', () => {
  for (const entry of ['public_website', 'qr_menu']) {
    const result = runMarker({ entry });
    assert.equal(result.calls[0][1].hikari_journey, entry);
    assert.equal(result.window.gtag, result.existingGtag);
    result.advance(30 * 60 * 1000);
    assert.equal(result.calls.at(-1)[1].hikari_journey, 'unknown');
    assert.equal(result.storage.size, 0);
    result.handlers.pageshow();
    assert.equal(result.calls.length, 2);
    assert.ok(result.calls.every(call => call[0] === 'set'));
  }
  const queued = runMarker({ nativeTag: false });
  assert.equal(queued.window.gtag, undefined);
  assert.equal(queued.window.dataLayer[0][0], 'set');
});

test('Square requires a real Hikari navigation and cannot renew expired markers by refresh', () => {
  const first = runMarker();
  const saved = first.storage.get('hikari_journey_v1');
  const reload = runMarker({ storage: first.storage, navigationType: 'reload', start: 1100000 });
  assert.equal(reload.calls[0][1].hikari_journey, 'public_website');
  assert.equal(reload.storage.get('hikari_journey_v1'), saved);
  const expiredReload = runMarker({ storage: first.storage, navigationType: 'reload', start: 2800000 });
  assert.equal(expiredReload.calls[0][1].hikari_journey, 'unknown');
  for (const options of [
    { referrer: '' }, { referrer: 'https://hikarisojo.com.evil.example/' },
    { referrer: 'https://google.com/' }, { entry: 'invented' }
  ]) {
    const stored = runMarker().storage;
    const result = runMarker({ ...options, storage: stored });
    assert.equal(result.calls[0][1].hikari_journey, 'unknown');
    assert.equal(result.storage.size, 0);
  }
});

test('emits one event for one intentional click', () => {
  const calls = [];
  const link = makeLink('https://hikarisushi-online.square.site/', 'hero');
  const event = {
    target: {
      closest: () => link
    }
  };

  const result = analytics.handleClick(event, (...args) => calls.push(args), { pathname: '/' });

  assert.deepEqual(calls, [[
    'event',
    'click_order_online',
    {
      page_path: '/',
      cta_placement: 'hero',
      link_url: 'https://hikarisushi-online.square.site/'
    }
  ]]);
  assert.deepEqual(result, {
    eventName: 'click_order_online',
    placement: 'hero'
  });
});

test('decorates anchors before context-menu or new-tab navigation without sending a click', () => {
  const link = makeLink('https://hikarisushi-online.square.site/?location=L1#menu', 'hero');
  const calls = [];
  analytics.install({ querySelectorAll: () => [link], addEventListener() {} }, (...a) => calls.push(a), { pathname: '/', search: '' });
  assert.equal(new URL(link.href).searchParams.get('hikari_entry'), 'public_website');
  assert.equal(new URL(link.href).hash, '#menu');
  assert.equal(calls.length, 0);
});
