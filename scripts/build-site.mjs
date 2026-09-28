import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
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
for (const file of ['index.html', 'menu.html', 'lunch-specials.html', 'sitemap.xml', 'theme-config.json', 'themes', 'css', 'js', 'assets/fonts', 'assets/images/menu', 'assets/images/generated/menu']) copy(file);
fs.writeFileSync(path.join(out, '_redirects'), '/menu /menu.html 200\n');
const preview = process.argv.includes('--preview') || process.env.CONTEXT === 'deploy-preview';
fs.writeFileSync(path.join(out, '_headers'), `${preview ? '/*\n  X-Robots-Tag: noindex, nofollow\n' : ''}/menu\n  X-Robots-Tag: noindex, nofollow\n/menu.html\n  X-Robots-Tag: noindex, nofollow\n`);
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
    Object.assign(item, presentation[item.img] || {previewImage: '/' + item.img});
    const photoPath = item.previewImage.replace(/^\//, '');
    if (!fs.existsSync(path.join(root, photoPath))) throw new Error('Missing menu photo: ' + photoPath);
    copy(photoPath);
  }
}
fs.mkdirSync(path.join(out, 'data'), {recursive: true});
fs.writeFileSync(path.join(out, 'data/customer-menu.json'), JSON.stringify(customerMenu));
