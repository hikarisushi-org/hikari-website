import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const source = fs.readFileSync('js/menu-page.js', 'utf8');
const canonical = JSON.parse(source.match(/const menuData = ([\s\S]*?);\s*\/\/ MENU-DATA:END/)[1]);
const built = JSON.parse(fs.readFileSync('dist/data/customer-menu.json', 'utf8'));
test('published menu preserves canonical names, prices, descriptions and warnings', () => {
  const cleaned = structuredClone(built);
  for (const group of Object.values(cleaned)) for (const item of group.items) {
    delete item.previewImage; delete item.imageWidth; delete item.imageHeight;
  }
  assert.deepEqual(cleaned, canonical);
});
test('every published menu photo exists and uses a root-relative production path', () => {
  for (const group of Object.values(built)) for (const item of group.items) {
    assert.ok(item.previewImage.startsWith('/assets/'));
    assert.ok(fs.existsSync(path.join('dist', item.previewImage)));
  }
});
test('customer page retains QR route, analytics and production identity', () => {
  const html = fs.readFileSync('dist/menu.html', 'utf8');
  assert.ok(html.includes('fetch(\'/data/customer-menu.json\')'));
  assert.ok(html.includes('/js/production-measurement.js'));
  assert.ok(html.includes('https://hikarisojo.com/menu'));
  assert.ok(!html.includes('menu-snapshot.json'));
  assert.ok(!html.includes('Private concept'));
  assert.match(fs.readFileSync('dist/_redirects', 'utf8'), /\/menu \/menu.html 200/);
});
