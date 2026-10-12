const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const analytics=require('../js/site-actions.js');
const html=fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
test('every gallery dish has one accessible exact-item link with safe measurement',()=>{
 const gallery=html.split('<div class="photo-grid">')[1].split('<div class="gallery-end">')[0];
 const links=[...gallery.matchAll(/<a class="text-link" href="([^"]+)" data-analytics-placement="([^"]+)" data-order-item="([^"]+)" data-item-list-id="([^"]+)" aria-label="([^"]+)"/g)];
 assert.equal(links.length,6); const ids=new Set();
 for(const [,href,placement,name,list,label] of links){
  const link={href:href.replaceAll('&amp;','&'),dataset:{analyticsPlacement:placement,orderItem:name,itemListId:list}};
  assert.equal(label,'Order '+name); assert.equal(placement,'kitchen-gallery');
  const calls=[]; analytics.handleClick({target:{closest:()=>link}},(...args)=>calls.push(args),{pathname:'/'});
  assert.equal(calls.length,1); const params=calls[0][2];
  assert.equal(params.item_list_id,'homepage_kitchen');assert.equal(params.item_name,name);
  assert.equal(new URL(link.href).searchParams.get('hikari_entry'),'public_website');
  assert.equal(params.item_id,new URL(link.href).searchParams.get('item'));ids.add(params.item_id);
 }
 assert.equal(ids.size,6);
});
