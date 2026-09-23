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
    'https://hikarisushi-online.square.site/product/flares-of-hikari/1',
    'featured_dish',
    'Flares of Hikari'
  );

  assert.deepEqual(analytics.buildEventParameters(link, { pathname: '/menu' }), {
    page_path: '/menu',
    cta_placement: 'featured_dish',
    link_url: link.href,
    item_name: 'Flares of Hikari'
  });
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
