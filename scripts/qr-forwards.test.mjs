import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Run after `node scripts/build-site.mjs`, like the customer-menu checks.
const rules = fs.readFileSync('dist/_redirects', 'utf8').trim().split('\n').map(line => line.split(' '));
const forwards = rules.filter(([, , status]) => status === '302');

test('printed QR addresses forward where the register says', () => {
  assert.deepEqual(forwards, [
    ['/order', 'https://hikarisushi-online.square.site/?utm_source=togo-bag&utm_medium=qr&utm_campaign=togo-bag', '302'],
    ['/promo', '/?utm_source=promo&utm_medium=qr&utm_campaign=promo-default', '302'],
  ]);
  const register = fs.readFileSync('docs/qr-codes.md', 'utf8');
  for (const [from, to] of forwards) {
    assert.ok(register.includes(`hikarisojo.com${from}`), `${from} missing from docs/qr-codes.md`);
    assert.ok(register.includes(to), `${from} destination missing from docs/qr-codes.md`);
  }
});

test('forwards stay changeable, first-party and clear of existing pages', () => {
  for (const [from, to] of forwards) {
    assert.match(from, /^\/[a-z0-9-]+$/);
    // A real file at the same path would win over the forward on Netlify.
    for (const file of [from.slice(1), `${from.slice(1)}.html`, `${from.slice(1)}/index.html`]) {
      assert.ok(!fs.existsSync(path.join('dist', file)), `${file} shadows ${from}`);
    }
    const url = new URL(to, 'https://hikarisojo.com');
    assert.ok(['hikarisojo.com', 'hikarisushi-online.square.site'].includes(url.hostname));
    assert.equal(url.protocol, 'https:');
    assert.equal(url.searchParams.get('utm_medium'), 'qr');
    // hikari_entry belongs to the website's own order links and the dashboard that reads it.
    assert.ok(!url.searchParams.has('hikari_entry'));
  }
});

test('the existing menu rewrite is untouched and still first', () => {
  assert.deepEqual(rules[0], ['/menu', '/menu.html', '200']);
});
