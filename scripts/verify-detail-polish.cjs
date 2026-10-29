const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const out='results/2026-09-23-website-audit/detail-polish-proof';
(async()=>{
  fs.mkdirSync(out,{recursive:true});
  const browser=await chromium.launch({channel:'chrome',headless:true});
  try{
    for(const reducedMotion of ['no-preference','reduce']){
      const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion});
      await page.goto('http://100.124.197.26:6421/preview',{waitUntil:'networkidle'});
      const initialResources=await page.evaluate(()=>performance.getEntriesByType('resource').map(r=>r.name));
      assert(!initialResources.some(u=>/\.(mp4|webm)/.test(u)));
      const drawing=page.locator('.light-drawing');
      assert.equal(await drawing.evaluate(e=>e.classList.contains('illuminate')),false);
      await drawing.scrollIntoViewIfNeeded();
      if(reducedMotion==='no-preference')await page.waitForFunction(()=>document.querySelector('.light-drawing').classList.contains('illuminate'));
      else assert.equal(await drawing.locator('.rays').evaluate(e=>getComputedStyle(e).animationName),'none');
      const corners=await page.locator('.hero-photo,.food-story figure,.gather-photo,.photo-grid picture').evaluateAll(es=>es.map(e=>{const s=getComputedStyle(e);return [s.borderTopLeftRadius,s.borderTopRightRadius,s.borderBottomLeftRadius,s.borderBottomRightRadius];}));
      assert(corners.every(r=>r.every(v=>v==='8px')));
      assert.equal(await page.locator('.gather-shell').evaluate(e=>getComputedStyle(e,'::before').pointerEvents),'none');
      await page.waitForTimeout(2300);
      await page.locator('.gather').screenshot({path:`${out}/story-${reducedMotion}.png`});
      await page.locator('.header-order').focus();
      assert.equal(await page.locator('.header-order').evaluate(e=>getComputedStyle(e).outlineStyle),'solid');
      await page.close();
    }
    console.log('PASS: viewport-triggered finite illustration, reduced motion, unchanged even corners, keyboard focus, noninteractive texture, no video loading.');
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
