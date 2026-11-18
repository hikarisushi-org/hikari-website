import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDiscovery } from './build-discovery.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist');
// Only this script's generated output may be removed.
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
const copied = new Set();
function copy(file) {
  if (copied.has(file)) return;
  const source = path.join(root, file);
  if (!fs.existsSync(source)) return;
  copied.add(file);
  if (fs.statSync(source).isDirectory()) {
    for (const child of fs.readdirSync(source)) copy(`${file}/${child}`);
    return;
  }
  const target = path.join(out, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
  if (/\.(html|css|js|json)$/.test(file)) {
    for (const match of fs.readFileSync(source, 'utf8').matchAll(/(?:\/?)(assets\/[^\s"'<>?)`]+\.(?:png|webp|avif|jpg|jpeg|svg|woff2|mp4))/g)) copy(match[1]);
  }
}
for (const file of ['index.html', 'menu.html', 'mail-research', 'sitemap.xml', 'theme-config.json', 'themes', 'css', 'js', 'assets/fonts', 'assets/images/menu', 'assets/images/generated/menu']) copy(file);
// Printed QR codes open these first-party addresses, never the destination itself, so a
// destination can change without reprinting. Once a code is printed, never remove or rename
// its address; change only where it points. 302 keeps browsers from caching an old destination.
// Register of codes and where each is printed: docs/qr-codes.md.
const qrForwards = [
  ['/order', 'https://hikarisushi-online.square.site/?utm_source=togo-bag&utm_medium=qr&utm_campaign=togo-bag'],
  ['/promo', '/?utm_source=promo&utm_medium=qr&utm_campaign=promo-default'],
];
fs.writeFileSync(path.join(out, '_redirects'), '/menu /menu.html 200\n' + qrForwards.map(([from, to]) => `${from} ${to} 302\n`).join(''));
const preview = process.argv.includes('--preview') || process.env.CONTEXT === 'deploy-preview';
// The existing menu is public and searchable; private previews stay excluded.
fs.writeFileSync(path.join(out, '_headers'), preview
  ? '/*\n  X-Robots-Tag: noindex, nofollow\n'
  : '/menu\n  X-Robots-Tag: index, follow\n/menu.html\n  X-Robots-Tag: index, follow\n');
fs.writeFileSync(path.join(out, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: https://hikarisojo.com/sitemap.xml\n');
console.log(`Built ${copied.size} public files/directories into ${out}; preview=${preview}`);

// Keep customer menu content in sync with the existing menu editor's source.
const sourceMenu = fs.readFileSync(path.join(root, 'js/menu-page.js'), 'utf8');
const menuMatch = sourceMenu.match(/const menuData = ([\s\S]*?);\s*\/\/ MENU-DATA:END/);
if (!menuMatch) throw new Error('Canonical menu data block missing');
const customerMenu = JSON.parse(menuMatch[1]);
const presentation = JSON.parse(fs.readFileSync(path.join(root, 'data/menu-presentation.json'), 'utf8'));
for (const group of Object.values(customerMenu)) {
  for (const item of group.items) {
    if (!item.img) continue;
    Object.assign(item, presentation[item.img] || {previewImage: '/' + item.img});
    const photoPath = item.previewImage.replace(/^\//, '');
    if (!fs.existsSync(path.join(root, photoPath))) throw new Error('Missing menu photo: ' + photoPath);
    copy(photoPath);
  }
}
fs.mkdirSync(path.join(out, 'data'), {recursive: true});
fs.writeFileSync(path.join(out, 'data/customer-menu.json'), JSON.stringify(customerMenu));

// Editorial pages share approved menu content rather than keeping a second price list.
buildDiscovery({root, out, menu:customerMenu, copy});
