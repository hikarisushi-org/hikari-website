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
