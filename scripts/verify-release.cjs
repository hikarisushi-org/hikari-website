const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const base = process.argv[2];
const production = process.argv.includes('--production');
if (!base) throw Error('Pass draft URL');
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 const page=await browser.newPage();
 // Exercise production bootstrap without sending synthetic visits to Google.
 if(production) await page.route(/https:\/\/[^/]*(?:google-analytics|googletagmanager)\.com\//,route=>route.fulfill({status:200,body:''}));
 const errors=[]; const missing=[]; const ga=[];
 page.on('pageerror', e=>errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400 && r.url().startsWith(base)) missing.push(r.url());});
 page.on('request',r=>{if(r.url().includes('googletagmanager.com')) ga.push(r.url());});
 const proof=process.env.HIKARI_PROOF_DIR || 'results/deployment-recovery-proof'; fs.mkdirSync(proof,{recursive:true});
 for(const width of [1440,390,320,768]) {
  await page.setViewportSize({width,height:950});
  await page.goto(base,{waitUntil:'networkidle'});
  await page.locator('.review-controls button').first().waitFor();
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`overflow ${width}`);
  assert.equal(await page.locator('a[href="/menu"]').count(),0);
  const hero=await page.locator('[data-fixed-hero] img').getAttribute('src');
  assert.match(hero,/sushi_eight/);
  const choices=await page.locator('.spotlight-menu button').all();
  for(let i=0;i<choices.length;i++) {
   if(width>760) await choices[i].click();
   else if(i>0) await page.getByRole('button',{name:'Next sushi roll',exact:true}).click();
   await page.waitForTimeout(650);
   assert.equal(await page.locator('.spotlight-slide.is-active').count(),1);
   assert(await page.locator('.spotlight-slide.is-active img').evaluate(img=>img.complete&&img.naturalWidth>0));
  }
  assert.equal(await page.locator('[data-fixed-hero] img').getAttribute('src'),hero);
  const before=await page.locator('#guest-reviews').innerText();
  await page.getByRole('button',{name:'Next reviews'}).click();
  assert.notEqual(await page.locator('#guest-reviews').innerText(),before);
  // Load lazy assets through a real page scroll before checking and capturing.
  for(let y=0;y<await page.evaluate(()=>document.body.scrollHeight);y+=700){await page.evaluate(y=>scrollTo(0,y),y);await page.waitForTimeout(80);}
  await page.waitForTimeout(400);
  assert.deepEqual(await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src)),[]);
  await page.evaluate(()=>{document.activeElement?.blur();scrollTo({top:0,behavior:'instant'});});
  await page.waitForTimeout(450);
  if(width===1440||width===390) await page.screenshot({path:`${proof}/${width}.png`,fullPage:true});
 }
 await page.evaluate(()=>themeLoader._apply(themeLoader.allThemes.find(t=>t.id==='july-4-2026')));
 assert.match(await page.locator('[data-fixed-hero] img').getAttribute('src'),/sushi_eight/);
 assert.equal(await page.locator('.hero-video').count(),0);
 assert.deepEqual(errors,[]); assert.deepEqual(missing,[]);
 if(production) {
  assert(ga.length>0,'production measurement bootstrap');
  const response=await page.request.get(base);
  assert(!/noindex/i.test(response.headers()['x-robots-tag']||''),'production homepage indexable');
 } else assert.deepEqual(ga,[]);
 for(const route of ['/results/2026-09-23-website-audit/12-DESIGN-PREVIEW.html','/PROJECT-STATE.md','/data/reviews.json']) assert.equal((await page.request.get(base+route)).status(),404);
 const menu=await page.goto(base+'/menu',{waitUntil:'networkidle'}); assert.equal(menu.status(),200);
 assert.match(await page.locator('meta[name="robots"]').getAttribute('content'),/noindex/);
 assert((await page.locator('.menu-page-item').count())>0);
 await page.locator('#onboarding-dismiss').click();
 const filter=page.locator('[data-filter="premium-rolls"]'); await filter.click();
 assert(await filter.evaluate(el=>el.classList.contains('active')));
 await page.screenshot({path:`${proof}/menu.png`});
 await browser.close(); console.log('PASS: responsive layouts, five selectors, loaded images, rotating reviews, fixed hero, draft analytics isolation, private-file exclusion and QR menu.');
})().catch(e=>{console.error(e);process.exit(1);});
