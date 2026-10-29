// Run with Playwright available in NODE_PATH. Uses an isolated headless browser.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base = process.env.HIKARI_PREVIEW_URL || 'http://100.124.197.26:6421/preview';
const out = path.resolve(process.env.HIKARI_PROOF_DIR || 'results/2026-09-23-website-audit/overnight-proof');

(async () => {
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const report = { url: base, timestamp: new Date().toISOString(), viewports: [], assertions: [] };
  try {
    for (const width of (process.env.HIKARI_TEST_WIDTHS || '1440,1024,768,390,320').split(',').map(Number)) {
      const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('requestfailed',r=>console.error(`Failed at ${width}: ${r.url()} ${r.failure()?.errorText}`));
      page.on('response', r => { if(r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
      await page.goto(base, { waitUntil: 'networkidle' });
      await page.addStyleTag({content:'html,body{scroll-behavior:auto!important}'});
      await page.evaluate(() => document.fonts.ready);
      // Visit each section to trigger native lazy images, then inspect the full page.
      for (const photo of await page.locator('img:not(dialog img)').all()) {
        console.log(`Checking ${width}: ${await photo.getAttribute('src')}`);
        await photo.scrollIntoViewIfNeeded();
        await page.waitForFunction(i => i.complete && i.naturalWidth > 0, await photo.elementHandle());
      }
      await page.waitForFunction(() => [...document.images].filter(i=>!i.closest('dialog')).every(i => i.complete && i.naturalWidth > 0));
      const favoritesSpotlight = page.locator('.favorites [data-spotlight]');
      const favoritesButtons = favoritesSpotlight.locator('.spotlight-menu button');
      assert.equal(await favoritesButtons.count(), 5, 'Most ordered must expose five selectable rolls');
      const expectedRoles = ['Wide editorial', 'Close editorial', 'Low-angle editorial', 'Macro texture', 'Chopsticks lifting'];
      for (let index = 0; index < 5; index += 1) {
        const button = favoritesButtons.nth(index);
        await button.click();
        const roll = await button.getAttribute('data-roll');
        const activeSlide = favoritesSpotlight.locator(`.spotlight-slide[data-roll="${roll}"]`);
        await page.waitForFunction(({ roll }) => document.querySelector(`.favorites .spotlight-slide[data-roll="${roll}"]`)?.classList.contains('is-active'), { roll });
        assert.equal(await button.getAttribute('aria-pressed'), 'true');
        const image = activeSlide.locator('img');
        assert.match(await image.evaluate(element => element.currentSrc), /\/most-ordered\/.*-v2-(640|1280)\.webp$/);
        assert.match(await image.getAttribute('alt'), new RegExp(`^${expectedRoles[index]}`));
        // Width-descriptor srcsets may expose density-corrected natural sizes with pixel rounding.
        // Keep the browser assertion tolerant while the generated files are checked separately at exact dimensions.
        const naturalRatio = await image.evaluate(element => element.naturalWidth / element.naturalHeight);
        assert(Math.abs(naturalRatio - 1.6) < 0.01, `Expected a 16:10 image for ${roll}, received ratio ${naturalRatio}`);
        if (width === 1440 || width === 390) {
          await page.waitForTimeout(450); // Capture the settled state after the 380 ms spotlight cross-fade.
          await favoritesSpotlight.screenshot({ path: path.join(out, `most-ordered-${width}-${index + 1}-${roll}.png`) });
        }
      }
      report.assertions.push(`Most ordered loads five distinct v2 editorial roles with 16:10 responsive assets at ${width}px.`);
      const audit = await page.evaluate(() => ({
        width: innerWidth, documentWidth: document.documentElement.scrollWidth,
        images: [...document.images].map(i => ({src:i.currentSrc,width:i.naturalWidth,alt:i.alt})),
        headings: [...document.querySelectorAll('h1')].length,
        brokenAnchors: [...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.querySelector(a.getAttribute('href'))).map(a=>a.outerHTML),
        forbiddenLinks: [...document.querySelectorAll('a')].filter(a=>new URL(a.href).pathname === '/menu').map(a=>a.href),
        unlabelledActions: [...document.querySelectorAll('a[data-analytics-placement]')].filter(a=>!a.textContent.trim()).length,
        externalResources: performance.getEntriesByType('resource').filter(e=>!e.name.startsWith(location.origin)).map(e=>e.name)
      }));
      assert.equal(audit.width, audit.documentWidth, `Overflow at ${width}`);
      assert.equal(audit.headings,1); assert.deepEqual(audit.brokenAnchors,[]); assert.deepEqual(audit.forbiddenLinks,[]);
      assert.deepEqual(audit.externalResources,[], 'Private preview must not send GA or load third-party assets');
      assert.deepEqual(errors,[]);
      if(width === 390) {
        await page.evaluate(()=>scrollTo(0,0));
        await page.locator('.hero').waitFor();
        await page.waitForFunction(()=>document.querySelector('.mobile-order').hidden);
        await page.locator('.mobile-nav summary').click();
        assert.equal(await page.locator('.mobile-nav').getAttribute('open'),'');
        await page.keyboard.press('Escape');
        assert.equal(await page.locator('.mobile-nav').getAttribute('open'),null);
        assert(await page.locator('.mobile-nav summary').evaluate(el=>el===document.activeElement));
        await page.locator('.mobile-nav summary').click();
        await page.locator('.mobile-nav a[href="#kitchen"]').click();
        assert.equal(await page.locator('.mobile-nav').getAttribute('open'),null);
        await page.waitForFunction(()=>!document.querySelector('.mobile-order').hidden);
        assert(await page.locator('.mobile-order .button').isVisible());
        // Observe click metadata without opening a purchase flow during this test.
        await page.evaluate(()=>document.addEventListener('click',e=>{if(e.target.closest('a[data-analytics-placement]'))e.preventDefault();},{capture:true}));
        await page.locator('.mobile-order .button').click();
        assert.equal(await page.evaluate(()=>hikariPreviewEvents.at(-1).cta_placement),'mobile-sticky');
        await page.locator('a[data-analytics-placement="story"]').click();
        assert.equal(await page.evaluate(()=>hikariPreviewEvents.at(-1).event),'click_reservations');
        await page.locator('a[href*="/maps/dir"]').click();
        assert.equal(await page.evaluate(()=>hikariPreviewEvents.at(-1).event),'click_directions');
        report.assertions.push('Mobile navigation opens, Escape closes and restores focus; section selection closes; sticky order appears after hero; click metadata classified for order, reserve, directions.');
      }
      await page.evaluate(()=>{document.activeElement?.blur();document.querySelectorAll('.favorites-grid').forEach(grid=>grid.scrollLeft=0);scrollTo({top:0,behavior:'instant'});});
      await page.waitForFunction(()=>scrollY===0);
      await page.waitForTimeout(200);
      if(width===1440 || width===390) {
        await page.screenshot({path:path.join(out,`preview-${width}-full.png`),fullPage:true});
        await page.screenshot({path:path.join(out,`preview-${width}-hero.png`)});
      }
      report.viewports.push(audit);
      await page.close();
      // Leave the private preview server time to drain connections between contexts.
      await new Promise(resolve=>setTimeout(resolve,1500));
    }
    const accessible = await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce',javaScriptEnabled:false});
    await accessible.goto(base);
    assert(await accessible.locator('.header-order').isVisible());
    await accessible.locator('.mobile-nav summary').click();
    assert(await accessible.locator('.mobile-nav a[href="#visit"]').isVisible());
    assert.equal(await accessible.locator('.rays').evaluate(el=>getComputedStyle(el).animationName),'none');
    report.assertions.push('No-JavaScript order links and native mobile navigation work; reduced motion disables drawing animation.');
    await accessible.close();
    for (const route of ['/menu','/PROJECT-STATE.md']) {
      const response = await fetch(new URL(route,base));
      assert.equal(response.status,404, `Private server unexpectedly exposed ${route}`);
    }
    report.assertions.push('Private preview server does not expose QR menu or project documents.');
    // Prove the header action actually hands off to the live Square storefront, without cart mutations.
    const order = await browser.newPage({viewport:{width:390,height:844}});
    await order.goto(base);
    await order.locator('.header-order').click();
    await order.waitForURL('https://hikarisushi-online.square.site/**', {timeout:30000});
    await order.waitForLoadState('domcontentloaded');
    await order.waitForTimeout(6000);
    report.orderHandoff = {url:order.url(),title:await order.title()};
    await order.screenshot({path:path.join(out,'square-handoff.png')});
    await order.close();
    fs.writeFileSync(path.join(out,'preview-checks.json'), JSON.stringify(report,null,2));
    console.log(JSON.stringify({ok:true,viewports:report.viewports.map(v=>v.width),assertions:report.assertions,order:report.orderHandoff},null,2));
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exitCode=1;});
