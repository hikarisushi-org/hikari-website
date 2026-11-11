import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Exercise the real build in each release context without copying hundreds of MB
// of food photos. Existing customer-menu tests cover the full canonical dataset.
function build(t, context, args = []) {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'hikari-menu-search-'));
  t.after(() => fs.rmSync(fixture, {recursive:true, force:true}));
  fs.mkdirSync(path.join(fixture, 'scripts'));
  fs.mkdirSync(path.join(fixture, 'js'));
  fs.mkdirSync(path.join(fixture, 'data'));
  for (const file of ['scripts/build-site.mjs', 'scripts/build-discovery.mjs', 'index.html', 'menu.html', 'sitemap.xml']) {
    fs.copyFileSync(path.join(root, file), path.join(fixture, file));
  }
  const source = fs.readFileSync(path.join(root, 'js/menu-page.js'), 'utf8');
  fs.writeFileSync(path.join(fixture, 'js/menu-page.js'), source);
  fs.writeFileSync(path.join(fixture, 'data/menu-presentation.json'), '{}');
  const menu = JSON.parse(source.match(/const menuData = ([\s\S]*?);\s*\/\/ MENU-DATA:END/)[1]);
  for (const group of Object.values(menu)) for (const item of group.items) {
    if (!item.img) continue;
    const photo = path.join(fixture, item.img);
    fs.mkdirSync(path.dirname(photo), {recursive:true});
    fs.writeFileSync(photo, 'fixture image');
  }
  const result = spawnSync(process.execPath, ['scripts/build-site.mjs', ...args], {
    cwd:fixture, env:{...process.env, CONTEXT:context}, encoding:'utf8',
  });
  assert.equal(result.status, 0, result.stderr);
  return name => fs.readFileSync(path.join(fixture, 'dist', name), 'utf8');
}

test('production publishes the existing canonical menu without search exclusion', t => {
  const output = build(t, 'production');
  const html = output('menu.html');
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)[1];
  assert.doesNotMatch(robots, /noindex|nofollow/i);
  assert.match(html, /<title>.*South Jordan.*<\/title>/);
  assert.match(html, /rel="canonical" href="https:\/\/hikarisojo.com\/menu"/);
  assert.doesNotMatch(output('_headers'), /noindex|nofollow/i);
  assert.match(output('_redirects'), /^\/menu \/menu.html 200/m);
  assert.match(output('sitemap.xml'), /<loc>https:\/\/hikarisojo.com\/menu<\/loc>/);
  assert.match(output('robots.txt'), /Allow: \/\nSitemap: https:\/\/hikarisojo.com\/sitemap.xml/);
});

for (const [label, context, args] of [
  ['Netlify deploy preview', 'deploy-preview', []],
  ['explicit preview build', 'production', ['--preview']],
]) {
  test(`${label} still excludes every page, including the menu`, t => {
    const output = build(t, context, args);
    assert.match(output('_headers'), /^\/\*\n  X-Robots-Tag: noindex, nofollow\n$/);
    assert.doesNotMatch(output('_headers'), /X-Robots-Tag: index/i);
  });
}
