const {chromium}=require('playwright');
const fs=require('node:fs');
const assert=require('node:assert/strict');
const path=require('node:path');
const out=path.resolve('results/2026-09-23-website-audit/new-design-proof');
(async()=>{
fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const report=[];
try{
for(const [name,port] of [['table',6422],['flavor',6423]]){
 for(const width of [1440,390,320]){
  const page=await browser.newPage({viewport:{width,height:900}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('requestfailed',r=>errors.push(r.url()+': '+r.failure().errorText));
  await page.goto(`http://100.124.197.26:${port}/preview`,{waitUntil:'networkidle'});
  await page.evaluate(()=>document.fonts.ready);
  for(const img of await page.locator('img').all()){
   await img.scrollIntoViewIfNeeded();
   await page.waitForFunction(i=>i.complete&&i.naturalWidth>0,await img.elementHandle());
  }
  if(name==='flavor'){
   for(const key of ['sashimi','bento','starters','rolls']){
    const b=page.locator(`[data-dish="${key}"]`);await b.focus();await page.keyboard.press('Enter');
    assert.equal(await b.getAttribute('aria-pressed'),'true');
    await page.waitForFunction(()=>{const i=document.querySelector('.featured-photo img');return i.complete&&i.naturalWidth>0;});
   }
  }
  const audit=await page.evaluate(()=>({width:innerWidth,documentWidth:document.documentElement.scrollWidth,h1:document.querySelectorAll('h1').length,qr:[...document.links].filter(a=>new URL(a.href).pathname==='/menu').length,broken:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.querySelector(a.hash)).length,orders:[...document.querySelectorAll('[data-cta]')].map(a=>a.href),external:performance.getEntriesByType('resource').filter(r=>!r.name.startsWith(location.origin)).map(r=>r.name)}));
  assert.equal(audit.width,audit.documentWidth);assert.equal(audit.h1,1);assert.equal(audit.qr,0);assert.equal(audit.broken,0);assert.deepEqual(audit.external,[]);assert(audit.orders.every(u=>u==='https://hikarisushi-online.square.site/'));
  await page.locator('#visit').scrollIntoViewIfNeeded();
  if(width<700)await page.waitForFunction(()=>!document.querySelector('.mobilebar').hidden);
  await page.evaluate(()=>{document.activeElement?.blur();scrollTo(0,0);});await page.waitForFunction(()=>scrollY===0);
  if(width!==320){await page.screenshot({path:path.join(out,`${name}-${width}-hero.png`)});await page.screenshot({path:path.join(out,`${name}-${width}-full.png`),fullPage:true});}
  assert.deepEqual(errors,[]);report.push({name,...audit,errors});await page.close();await new Promise(r=>setTimeout(r,1500));
 }
 const nojs=await browser.newPage({javaScriptEnabled:false,viewport:{width:390,height:844}});await nojs.goto(`http://100.124.197.26:${port}/preview`);assert(await nojs.locator('.nav .btn').isVisible());await nojs.close();
 for(const route of ['/menu','/PROJECT-STATE.md'])assert.equal((await fetch(`http://100.124.197.26:${port}${route}`)).status,404);
}
fs.writeFileSync(path.join(out,'checks.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({ok:true,runs:report.map(r=>[r.name,r.width]),categoryKeyboard:true,noJSOrdering:true,qrIsolation:true}));
}finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
