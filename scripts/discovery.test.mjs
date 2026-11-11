import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {buildDiscovery} from './build-discovery.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const original=JSON.parse(fs.readFileSync(path.join(root,'js/menu-page.js'),'utf8').match(/const menuData = ([\s\S]*?);\s*\/\/ MENU-DATA:END/)[1]);
function build(t,menu=structuredClone(original)){
 const out=fs.mkdtempSync(path.join(os.tmpdir(),'hikari-discovery-'));
 t.after(()=>fs.rmSync(out,{recursive:true,force:true}));
 buildDiscovery({root,out,menu,copy:file=>assert(fs.existsSync(path.join(root,file)),'missing public photo '+file)});
 return file=>fs.readFileSync(path.join(out,file),'utf8');
}
test('dish and lunch pages follow a canonical menu edit without maintaining another price list',t=>{
 const menu=structuredClone(original);
 const roll=menu['premium-rolls'].items.find(x=>x.name==='Citrus Mango Dream');
 roll.price='$19';roll.desc='Tempura shrimp, mango & lemon.';
 const lunch=menu['rice-bowls'].items.find(x=>x.name==='Tempura Don');lunch.price='$17';
 const page=build(t,menu);
 assert.match(page('dishes/citrus-mango-dream/index.html'),/\$19/);
 assert.match(page('dishes/citrus-mango-dream/index.html'),/Tempura shrimp, mango &amp; lemon\./);
 assert.match(page('lunch-specials.html'),/\$17/);
});
test('public dish destinations preserve exact catalog IDs and honest preparation notes',t=>{
 const page=build(t);const home=fs.readFileSync(path.join(root,'index.html'),'utf8');
 for(const [slug,id,name] of [['firefly-fusion','6CUX3EPJBT6OWBYLJBCHKWY6','Firefly Fusion'],['citrus-mango-dream','6NNRTH56UWVBT3ZPGTQUQJAN','Citrus Mango Dream']]){
  const html=page(`dishes/${slug}/index.html`);
  assert(home.includes(id),'catalog ID must already exist in approved homepage');
  assert(html.includes(`item=${id}`));assert(html.includes(`data-order-item="${name}"`));
  assert(html.includes(`href="https://hikarisojo.com/dishes/${slug}/"`));
  assert(html.includes('/js/production-measurement.js'));assert(html.includes('Online availability')||html.includes('online availability'));
 }
 assert.match(page('dishes/firefly-fusion/index.html'),/includes raw tuna/);
 assert.match(page('dishes/citrus-mango-dream/index.html'),/not an allergen-free guarantee/);
});
test('visitor hours share the homepage source and review page is neutral and excluded from sitemap',t=>{
 const page=build(t);const home=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const hours=home.match(/<dl class="hours">([\s\S]*?)<\/dl>/)[1];assert(page('visit/index.html').includes(hours));
 assert.match(page('visit/index.html'),/10468 South Redwood Road/);
 const review=page('review/index.html');assert.match(review,/noindex,follow/);assert.match(review,/placeid=ChIJZV0qzpqHUocR4SuU3IlrTsg/);assert.match(review,/All honest feedback is welcome/);
 const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');assert(!sitemap.includes('/review/'));assert(sitemap.includes('/visit/'));assert(sitemap.includes('/dishes/firefly-fusion/'));
 assert.doesNotMatch(page('our-story/index.html'),/family.owned|founded in|award.winning/i);
});
