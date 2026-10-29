const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({channel:'chrome'});
 const page=await browser.newPage();
 await page.route(/https:\/\/[^/]*(?:google-analytics|googletagmanager)\.com\//,r=>r.fulfill({body:''}));
 const base=process.argv[2]||'http://127.0.0.1:6432';
 const proof='results/2026-09-23-website-audit/mobile-carousel-proof';fs.mkdirSync(proof,{recursive:true});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const width of [320,390,760,1440]){
  await page.setViewportSize({width,height:900});await page.goto(base,{waitUntil:'networkidle'});
  const mobile=width<=760;
  assert.equal(await page.locator('.spotlight-menu').isVisible(),!mobile);
  assert.equal(await page.locator('.spotlight-controls').isVisible(),mobile);
  if(mobile){
   for(let i=0;i<5;i++){
    assert.equal(await page.locator('.spotlight-controls output').textContent(),`${i+1} of 5`);
    const img=page.locator('.spotlight-slide img').nth(i);
    await img.scrollIntoViewIfNeeded();await page.waitForTimeout(250);
    await img.evaluate(e=>e.decode());
    assert(await img.evaluate(e=>e.complete&&e.naturalWidth>0));
    const box=await img.boundingBox();assert(Math.abs(box.width/box.height-1.6)<.02);
    if(width===390)await page.locator('[data-spotlight]').screenshot({path:`${proof}/390-${i}.png`});
    if(i<4){await page.getByRole('button',{name:'Next sushi roll',exact:true}).click();await page.waitForTimeout(650);}
   }
   assert(await page.getByRole('button',{name:'Next sushi roll',exact:true}).isDisabled());
   await page.getByRole('button',{name:'Previous sushi roll',exact:true}).click();await page.waitForTimeout(600);
   assert.equal(await page.locator('.spotlight-controls output').textContent(),'4 of 5');
   await page.locator('.spotlight-stage').focus();await page.keyboard.press('Home');await page.waitForTimeout(650);
   assert.equal(await page.locator('.spotlight-controls output').textContent(),'1 of 5');
   const peek=await page.locator('.spotlight-slide').nth(1).boundingBox();const track=await page.locator('.spotlight-stage').boundingBox();
   assert(peek.x<track.x+track.width,'next card visible');
   if(width===390){
    await page.locator('.spotlight-stage').scrollIntoViewIfNeeded();
    const rect=await page.locator('.spotlight-stage').boundingBox();
    const client=await page.context().newCDPSession(page);
    await client.send('Emulation.setTouchEmulationEnabled',{enabled:true});
    const y=rect.y+80;
    await client.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:rect.x+260,y}]});
    for(let x=240;x>=50;x-=20){await client.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:rect.x+x,y}]});await page.waitForTimeout(25);}
    await client.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await page.waitForTimeout(900);
    assert.notEqual(await page.locator('.spotlight-controls output').textContent(),'1 of 5','real touch swipe advances');
    await client.detach();
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.locator('.spotlight-stage').focus();await page.keyboard.press('Home');await page.waitForTimeout(150);
    assert.equal(await page.locator('.spotlight-controls output').textContent(),'1 of 5');
    await page.emulateMedia({reducedMotion:'no-preference'});
   }
  }else{
   for(const button of await page.locator('.spotlight-menu button').all()){await button.click();await page.waitForTimeout(400);assert.equal(await page.locator('.spotlight-slide.is-active').count(),1);}
   await page.locator('[data-spotlight]').screenshot({path:`${proof}/desktop.png`});
  }
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 }
 assert.deepEqual(errors,[]);await browser.close();console.log('PASS mobile arrows/counter/keyboard/bounds/peek/photos and desktop selectors; no overflow or JS errors');
})().catch(e=>{console.error(e);process.exit(1)});
