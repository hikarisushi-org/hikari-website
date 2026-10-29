const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const b=await chromium.launch({channel:'chrome'});
 const proof='results/2026-09-23-website-audit/kitchen-v1-proof';fs.mkdirSync(proof,{recursive:true});
 for(const width of [1440,390]){
  const p=await b.newPage({viewport:{width,height:1000}});await p.goto(process.argv[2]||'http://100.124.197.26:6423/preview?panel=ivory',{waitUntil:'networkidle'});
  await p.addStyleTag({content:'html{scroll-behavior:auto!important}'});
  const imgs=p.locator('.photo-grid img');assert.equal(await imgs.count(),6);
  assert.equal(await p.locator('#bento-comparison, [data-bento]').count(),0);
  assert.equal(await p.locator('.sweets-story img').count(),3);
  const sources=await p.locator('main img').evaluateAll(images=>images.map(img=>img.getAttribute('src')));
  assert.equal(sources.length,17,'Expected hero, feature, five favorites, six gallery photos, three sweets photos and story photo');
  assert.equal(new Set(sources).size,sources.length,'Food photographs must not repeat across the page');
  for(let i=0;i<6;i++){
   const img=imgs.nth(i);await img.scrollIntoViewIfNeeded();await p.waitForFunction(i=>{const e=document.querySelectorAll('.photo-grid img')[i];return e.complete&&e.naturalWidth>0},i);
   const src=await img.evaluate(e=>e.currentSrc);assert(src.includes(i===2?'sashimi_new':'kitchen-v1'));
   const rect=await img.boundingBox();assert(Math.abs(rect.width/rect.height-1)<.01);
  }
  await p.mouse.move(0,0);await p.waitForTimeout(400);
  assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await p.locator('.photo-grid').screenshot({path:`${proof}/${width}.png`});
  if(width===1440){const tile=p.locator('.photo-grid picture').first();await tile.hover();await p.waitForTimeout(350);assert.notEqual(await tile.evaluate(e=>getComputedStyle(e).transform),'none');}
  await p.close();
 }
 await b.close();console.log('PASS: six gallery images and three distinct sweets images, no repeated photo sources or comparison controls, correct responsive sources, square geometry, no overflow and retained desktop hover');
})().catch(e=>{console.error(e);process.exit(1)});
