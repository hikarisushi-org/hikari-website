# Session Log

## 2026-10-11 — Menu-source cleanup documentation

Updated DEVELOPMENT.md and project records for the Ops generator retirement.
Website menu/index and print hashes remained unchanged. Local documentation only;
no commit, deployment, ordering-channel changes, or design edits. Ops records hold
the three passing no-write tests and byte-identical historical registry archive.

## 2026-09-25 — Approved bottom story photo

Owner approved the brighter existing sushi-finishing photograph after private preview, then explicitly authorized publication. Replaced only story-picture markup with responsive story-finishing derivatives; originals retained and all other markup/CSS matched live before release. Published deploy `6ab60e49d3ca5d99385c01ca`; rollback `6ab60bb601d7acd43b6d5942`.

## 2026-09-24 — Desserts, drinks and approved design publication

- Restored editorial section with distinct strawberry refresher lead, mochi texture detail and Ramune hand-selection moment. Built-in imagegen masters and responsive derivatives saved non-destructively under sweets-v1; prompts in28-SWEETS-RELEASE.md.
- Owner rejected first refresher as short/wide; corrected from original to tall/slim version, owner approved. Desktop/mobile layout preserves its proportions.
- Integrated approved ivory panels/shadows and full kitchen gallery into production source, leaving preview controls out. No repeated main photo sources; six gallery tiles retained. Originals untouched.
- Final draft passed four viewport release checks, review rotation, favorites interactions, fixed hero, all images, public-file exclusions and QR menu. Published `6ab60bb601d7acd43b6d5942`; live HTML matches build SHA256 `1d65513229e54957080f8e182805b5b24f53b115eb0737c7c6d670637fc89b81`. Previous deploy `6ab5fb346cdd2a260eefb4c9` retained for rollback. Hero launchagent disabled. Source not committed/pushed.

## 2026-09-24 — Bento serving moment selected

- Generated separate chopstick-lift and hands-setting-box-down concepts using built-in imagegen. Preserved existing still and meal layout; documented prompts in27-BENTO-ACTION-PREVIEW.md.
- Owner chose serving moment; set private gallery default accordingly, retained comparison controls. All three choices loaded at1440/390 without overflow; inspected serving image in grid. No push/deploy.

## 2026-09-24 — Varied kitchen images and gyoza correction

- Built five distinct photo edits using built-in imagegen; kept sashimi intact. Preserved sources and first variants. Two karaage candidates rejected for rice-like crust; final reframe used the existing craggy-crust action concept as reference.
- Joel liked the set, corrected gyoza plating to white tsuma and no purple garnish flower. Generated separate `gyoza-tsuma` master/derivatives; retained pink dipping bowl.
- Integrated only private preview generator. Desktop1440/mobile390 source loading, square aspect, no overflow and hover checks passed. Original source hashes unchanged. Prompts and roles saved in25/26-KITCHEN documents; production untouched.

## 2026-09-24 — Stronger shadow preview

- Increased ivory panel shadow opacity from approximately10%/20% to12%/24%, preserving color, blur, offset and spread. Private preview only; production untouched.

## 2026-09-24 — Softer ivory separation preview

- Removed rejected outlines/divider. Added shallow warm-gray panel shadows and a slightly deeper ivory footer. Only the isolated color preview changed; live site untouched. Desktop/mobile computed styling and overflow checked.

## 2026-09-24 — Ivory separation refinement (preview only)

- Added1px warm-gray inset outlines to the ivory food feature and desktop spotlight, plus a matching footer top divider. Kept spacing, pale-green backgrounds and mobile swipe cards unchanged. Only private preview generator/artifact changed; no push or deployment.

## 2026-09-24 — Private panel color comparison

- Built isolated switcher preview for current green, warm ivory, soft sand and muted clay with affected-section jump links. Retained current photos, mobile carousel, typography, pale backgrounds and red buttons. No production-file edit, push or deploy.
- Verified all four computed panel colors at1440/390 with no overflow; inspected desktop/mobile captures. Preview bound to Tailscale100.124.197.26:6423.

## 2026-09-24 — Fix mobile Most ordered UI

- Owner authorized mobile-only swipe cards after rejecting the name strip. Added native scroll-snap, next-card peek, captions below photographs, disabled boundary arrows and live counter. Kept desktop and original/derived image files unchanged.
- Visually inspected all five390px cards and desktop; targeted suite covers320/390/760/1440, arrow navigation, counter, keyboard Home, bounds, image loading/aspect, next-card visibility and no document overflow. Extended it with touch events and reduced-motion checks.
- Published production deploy `6ab5fb346cdd2a260eefb4c9`. Live CSS/JS hashes match local files. Full production regression suite passed, including reviews, QR menu, hero lock, analytics bootstrap and private-route exclusion. The targeted image check now waits for actual image decoding rather than a fixed250ms network assumption.

## 2026-09-24 — Publish approved homepage

- Joel explicitly approved publication of the tested release preview. Rebuilt production package without preview noindex headers and published Netlify deploy `6ab5f7d1aaaf04362f1dd92b` at https://hikarisojo.com .
- Live homepage hash exactly matches the approved preview. Homepage and `/menu` return200; only menu retains noindex. Hero LaunchAgent is still disabled. Previous production `6ab3ebb1b06606000894fa23` is the rollback reference.
- This was a direct deploy; existing dirty branch preserved without bulk staging or pushing unrelated experiments. Reconcile approved source before the next Git-triggered deployment.
- Live production browser suite passed at1440/390/320/768: selectors, images, review paging, seasonal hero lock, QR onboarding/filter and private-route exclusion. Production analytics bootstrap checked with Google requests intercepted to avoid synthetic visits; analytics unit tests5/5.

## 2026-09-24 — Prepare approved homepage release draft

- Integrated the approved preview into the production entrypoint locally, preserving the main hero, full-size food feature, five-roll Most ordered order, hover gallery and micro-motion. Added an existing-source Mango crop without modifying its source.
- Restored live daily review feed and controls; production-host-only analytics prevents draft events from entering GA. QR menu stays functional, outside navigation and noindexed. Legacy lunch page remains in the release package.
- Created allowlisted `dist/` build so project files and experimental pages are not deployed. Published only draft https://6ab5f5f5e4d26310af9e4f23--hikarisojo.netlify.app ; live domain unchanged.
- Confirmed local hero LaunchAgent disabled. Final publication remains owner-approval gated.
- Verification: live draft browser suite passed at 1440/390/320/768 px; all five selectors, lazy image loads, review paging, seasonal hero lock, analytics isolation, private routes returning404 and QR menu onboarding/filtering passed. Analytics unit tests5/5; theme validator111/111; git diff whitespace clean. Desktop/mobile and Mango screenshots inspected. Test harness initially used the wrong legacy menu selector and omitted onboarding dismissal; corrected the test, not the working menu.

## 2026-09-24 — Correct Most ordered composition variety and make the rule persistent

- Joel identified a second failure to carry the established texture, close-up and variation requirements into food-image editing. The first editorial set was polished but repeated the same centered full-plate formula.
- Created and validated the project-local `hikari-food-image-direction` skill, then made its use mandatory in `AGENTS.md`. The completion gate now requires image-role assignment, texture and crop checks, set-level variety, distortion review, untouched sources and desktop/mobile component verification.
- Generated a versioned second pass with five explicit roles: Firefly Fusion wide establishing, Citrus Mango Dream tight close-up, Playboy low three-quarter, Strawberry Blossom macro texture and Hot Cheetos chopstick action. Joel permits AI reconstruction for these concepts.
- Wired responsive 640/1280 WebP derivatives into the private Flavor Spotlight. Visually inspected all five selected desktop states. Automated 1440 px and 390 px checks passed every selector, v2 source, 16:10 presentation, page behavior, Square handoff and QR-menu isolation. Production remains unchanged.

## 2026-09-24 — Adopt Flavor Spotlight as Most ordered

- Built five simultaneous favorites concepts for direct review: expanding lineup, bento composition, stacked photo deck, chef's counter and Flavor Spotlight. Joel selected Flavor Spotlight.
- Replaced the visible favorites layout with one immersive photo and a five-roll selector; desktop uses a side list and mobile uses a horizontal list below the image. Corrected the selected image stage to preserve aspect ratio with `object-fit: cover` after visual proof exposed intrinsic-dimension squeezing.
- Joel chose the heading `Most ordered`, then supplied the exact order: Firefly Fusion, Citrus Mango Dream, Playboy, Strawberry Blossom and Hot Cheetos Roll. Replaced the earlier candidate set with these five and their matching current website photos. Production remains unchanged.
- Normalized every selected image to identical rendered dimensions, `object-fit: cover` and no transform. Shifted only Citrus Mango Dream's optical focal point vertically to center its lower-positioned source composition without changing zoom.
- Generated a unified warm-bokeh/teal-surface editorial concept for each of the five rolls, preserved all original files, created 640/1280 WebP derivatives, and wired only the private preview. After checking the documented photo brief, classified the set as concept-only: it meets consistency, framing and appetite goals but not exact-dish fidelity, natural-background, real-context, macro or action requirements.
- Verified the single visible spotlight, selector state changes, 1440 px and 390 px rendering, image load, preserved aspect fit, zero document overflow and whitespace.

## 2026-09-24 — Elevate Customer Favorites design

- Replaced the visually flat compact five-roll strip with taller 4:5 editorial cards, names over a dark image gradient, an alternating desktop baseline and a larger mobile native-scroll treatment that exposes part of the next card.
- Added restrained pointer hover lift and image zoom while preserving a static reduced-motion experience. Kept the same five sushi rolls, one general Square CTA and all ranking/link boundaries; no production deployment.
- Verified exact captions, image loading, 1440 px and 390 px geometry, desktop hover transforms, reduced-motion overrides, mobile overflow and whitespace. Saved fresh section proof images in `results/2026-09-23-website-audit/customer-favorites-proof/`.

## 2026-09-24 — Add Customer Favorites

- Added the requested Customer Favorites section without inventing a ranking. It initially reflected all six dishes in the website's existing Most Popular set; Joel then narrowed it to sushi only. The final strip contains Flares of Hikari, Misty Harbor, Island Heatwave, Fire Cracker and Naruto Roll; Gyoza is excluded.
- Kept the addition compact to preserve the approved page length: one six-card row on desktop and a native horizontally scrolling strip on mobile with partial next-card visibility. Cards identify dishes but are not individual links; one general Square action avoids guessing direct item URLs that have not been separately proven.
- Updated the preview verifier to reset horizontal favorites scrolling before screenshots, preventing image-load traversal from producing a misleading scrolled proof. Targeted 1440/390 suite passed for the original six-card implementation; the final five-roll correction was checked separately for exact captions, image loading and layout. Production unchanged.

## 2026-09-24 — Purposeful micro-animation pass

- Added motion only where it explains interaction or state: 2 px button lift and press response; expanding underlines for desktop navigation and important text links; a 220 ms mobile sticky-order entrance when the hero leaves view; retained the existing one-time Hikari light drawing and photo-grid hover enlargement.
- Deliberately omitted looping ambience, automatic section fades, pulsing CTAs and moving food photography. Layout, content, imagery, ordering destinations and approved 60/40 feature remain unchanged.
- Targeted 1440/390 browser suite passed after a broad repeated-image run encountered the preview server's known intermittent connection resets. Direct Playwright checks confirmed button transform 0→-2 px, navigation underline scale 0→1, text-link underline scale .28→1 and mobile order animation `hikari-order-in` at 0.22 s. Reduced-motion returned no button transform and zero-second transitions. Static full-page screenshot inspected; production unchanged.

## 2026-09-24 — Enlarge the food-and-copy feature

- After design pushback, implemented the recommended version of Joel's Saffron reference rather than a direct match: the existing `Find your next favorite` section is now a framed, near-full-width Hikari composition with a 60% image and 40% deep-teal text panel.
- Kept concise copy, Playfair/Inter typography and the cranberry ordering action. Avoided black, full-screen height and extra decoration so the feature remains consistent with Hikari's light-positive direction and does not compete with the hero or editorial study.
- Generated an 85 KiB 1280×800 WebP from the original 1600×1000 Island Heatwave photograph. Browser measurement confirmed a 1325×580 desktop section with 795/530 px columns and the 1280 WebP selected; mobile measured 350 px wide, stacked cleanly and selected the existing 640 px AVIF.
- Full browser suite passed at 1440/1024/768/390/320; desktop and mobile full-page screenshots inspected. Hero, six-photo hover grid, editorial study, Square handoff and QR isolation remained intact. Production unchanged.

## 2026-09-24 — Restore the six-photo grid and simplify interaction

- Joel approved restoring the earlier six-image gallery while keeping the editorial concept as a separate experiment. Restored Flares of Hikari, gyoza, sashimi, karaage, Salmon Sunrise and salmon bento using existing responsive Hikari assets.
- Removed all four-arrow overlays and the related photo-dialog code. Added the requested desktop pointer behavior: a hovered gallery image grows smoothly to 1.075× and shrinks back when the cursor leaves. Touch/mobile uses a stable two-column grid; reduced-motion disables the transform.
- Kept the corrected `sushi_eight` hero and warm bokeh layer unchanged. Full browser suite passed at 1440/1024/768/390/320, full-page desktop/mobile screenshots were inspected, and a direct Playwright check confirmed six grid images, zero arrow buttons, three separate editorial images, and transform reset from 1.075× to 1×. Production unchanged.

## 2026-09-24 — Restore Hikari light behind corrected hero

- Joel approved the unaltered `sushi_eight` dish and plate but preferred the prior orange/yellow bokeh mood because it communicates Hikari's light and positivity.
- Preserved the original photo pixels and geometry. Added a separate masked CSS layer of warm light and soft bokeh over the open right-side background only; no generative foreground edit. Raised photo-detail control above the decorative layer.
- Desktop1440/mobile390 screenshots inspected; browser checks, focus/navigation, reduced motion, no-JS, protected routes and Square handoff passed. Production unchanged.

## 2026-09-24 — Correct the actual top hero image

- Joel clarified that the distorted plate was the main orange hero at the very top, not the gallery roll previously edited. Accepted the correction and visually reviewed the website photo library rather than relying on filenames.
- Found `assets/images/sushi_eight.webp`: the matching blossom plate and eight-piece roll with natural proportions and a warm real background. Replaced the altered square `sushi_row` hero only in the private preview, using existing responsive derivatives and nondistorting object-fit cropping.
- Browser suite passed at1440 and390; hero screenshots inspected, all images loaded, and mobile navigation, no-JS, reduced motion, protected routes and Square handoff remained intact. Production unchanged. Next: Joel checks the corrected hero.

## 2026-09-24 — Correct distorted generated roll

- Joel correctly identified that the generated Flares concept elongated the actual plate and dish; the canvas was not the problem. Removed that image from the private preview and recorded the preservation failure.
- Restored the verified1600×1000 original Flares photograph as an optimized WebP derivative. Used a taller frame plus uniform CSS scale/crop only; no aspect distortion or generative change. Supporting AI concepts remain labeled. Next: Joel reviews the corrected dominant image.

## 2026-09-24 — Editorial photo concepts and shooting guide

- Joel authorized a private test transforming existing gallery subjects to explore what stronger art direction could look like. Created three AI-assisted concepts: large table-level Flares of Hikari, macro sashimi texture and karaage with a lemon-squeeze action moment. Preserved original source assets and labeled the new images as concepts rather than verified menu photography.
- Replaced the uniform six-tile private gallery with a three-role editorial composition: dominant, overlapping detail and offset action. Mobile stacks the sequence. Optimized concept derivatives to WebP while retaining PNG masters. Production, Square and QR-only menu remain unchanged.
- Added `docs/WEBSITE-PHOTO-SHOOT-GUIDE.md` with a minimum shot list, phone/camera setup, lighting, composition, styling, four-frame-per-dish recipe, file handling and shoot-end checklist. Saved concept provenance and prompt summaries in `23-EDITORIAL-PHOTO-CONCEPT.md`.
- Browser suite passed at1440 and390: image loading, overflow, mobile navigation/focus, sticky order, reduced motion, no-JS behavior, protected-route404s and real Square handoff. Screenshots inspected. Next: Joel evaluates whether the concept solves the missing visual quality.

## 2026-09-24 — Texture-focused crops from existing photos

- Joel clarified that the existing photos are acceptable but the preview's supposed close-ups still looked like medium catalog shots. Retained every source asset and the approved original composition; tightened four gallery crops to foreground roll toppings, sashimi grain, karaage crust and salmon texture while leaving gyoza and bento wider for context.
- Verified the live Tailscale preview at1440 and390: images loaded, no overflow, mobile navigation/focus and sticky order worked, no-JS/reduced-motion behavior passed, protected routes remained404 and the header reached the real Hikari Square storefront. Saved `texture-closeup-proof/`; one superseded responsive-image request aborted during source selection but the final selected images loaded. No production change.

## 2026-09-24 — Correct imperceptible refinements

- Joel rejected the prior pass as effectively unchanged. Applied visible editorial hero typography, sunrise emblem, larger story artwork, fiber texture and nine food-photo close-up controls. Kept original composition and images; no suitable authentic video added.
- Browser suite passed1440/390/320 including Square handoff and QR isolation; modal keyboard open, image loading, Escape and focus restoration verified separately. Screenshots inspected. Updated image test to exclude intentionally empty closed-dialog image from page-load checks after its first run timed out. No production changes.

## 2026-09-24 — Original detail polish

- Applied authorized refinements to original only: story-section texture, refined light drawing, once-on-view animation, heading wrapping and press/hover feedback. Preserved composition and imagery; no unverified video added.
- Existing preview suite passed1440/390/320, actual Square handoff, mobile controls, no-JS ordering and QR isolation. Detail suite passed finite on-view behavior, reduced motion, even8px mobile corners, keyboard focus and zero video loading. Analytics5/5 pass. Desktop full-page and mobile hero/story screenshots inspected. One desktop image request was aborted; all final image loads passed. No new Lighthouse score claimed.
- Updated tracker; production, alternatives, Square, servers and unrelated July4 asset untouched. Next: Joel reviews original6421.

## 2026-09-24 — Current design trend research

- Investigated Adobe, Canva, Webflow and Figma 2026 forecasts; checked motion/contrast against NN/g, web.dev and W3C guidance. Saved sources, Hikari-specific proposals and evidence limitations in22-CURRENT-DESIGN-RESEARCH.md.
- Recommended retaining original with selective sensory imagery, custom brand illustration and purposeful interaction polish. Trend forecasts are not proof of online-sales uplift. No code, production, Square, preview servers or unrelated assets changed.
- Next: Joel selects proposals to prototype; do not apply the full trend list automatically.

## 2026-09-24 — Original photo-corner refinement

- Recorded Joel's original-design preference and rejection of asymmetric image framing. Changed only original image-container rounding to12px desktop/8px mobile; alternate styles/compositions, content and production unchanged.

## 2026-09-24 — Two genuinely new homepage designs

- Corrected styling-only misinterpretation and acknowledgment-without-execution failure. Built independent At the table and Find your flavor HTML pages, with different content hierarchy, image composition and section sequence. Added keyboard-operable category photo showcase to the latter.
- Started existing allowlisted preview handler on Tailscale6422/6423; original6421 and tracker6420 unchanged. Added comparison links. No production/Square/QR-menu changes; preserved unrelated assets and working-tree edits.
- Six desktop/mobile/narrow-phone runs passed with all images, no overflow, valid anchors, keyboard category controls, sticky ordering, no-JS ordering and QR route isolation. Visually inspected screenshots. Analytics5/5 and whitespace check pass. No new Lighthouse or sales claims. Proof and limitations saved in19-NEW-DESIGN-OPTIONS.md.
- Next: Joel compares the actual new designs and chooses/refines a direction. No automatic deployment.

## 2026-09-24 — Two additional styling variations

- Created Warm linen and Porcelain blue as query-selected private alternatives with a three-way comparison bar. Original content/photos/actions remain shared and default styling preserved. Used frontend-design planning and screenshot critique to vary composition, type and shape rather than only color.
- Both styles passed desktop1440/mobile390 browser checks, image loading, mobile controls, diagnostic events, Square handoff and QR isolation. Inspected screenshots. Earlier larger test batches hit known private-server socket errors; final targeted runs passed. No new Lighthouse scores or production changes.
- Updated tracker and handoff. Next: Joel compares the three links and selects/refines a direction. Preview/tracker servers remain unchanged.

## 2026-09-24 — Overnight creative redesign

- Built one private responsive candidate from Joel's journal and explicit overnight authorization. Used restrained celadon/porcelain, red CTAs, existing plated-food imagery, concise split sections, gallery and short genuine review excerpts. No compulsory favorites/category cards, unverified popularity claims or copied reference text.
- Visually reviewed desktop and mobile screenshots, corrected photo sizing, and verified five widths (320–1440), image loading, navigation/focus, sticky ordering, reduced motion, no-JavaScript controls, diagnostic CTA classification, Square handoff and private-server route isolation. Existing analytics 5/5, themes 111/111 and media260 checks pass.
- First three mobile Lighthouse runs: performance99/98/99, accessibility100, median LCP2.25s, CLS0 and TBT0. Private HTTP hosting and intermittent connection-reset during repeated test bursts are documented limitations; no server replacement. See `17-OVERNIGHT-VERIFICATION.md` for final evidence.
- Saved preview, tracker, rationale, proof and project handoff. Production index, analytics/review/theme integrations, QR menu, Square settings and unrelated July4 asset untouched. Next: Joel reviews http://100.124.197.26:6421/preview; integrate approved design later, not an automatic deployment.

## 2026-09-24 — Capture visual discovery feedback

- At Joel's request, recorded this conversation's design preferences, reference reactions and collaborative interpretations in `15-VISUAL-DIRECTION-JOURNAL.md`. Preserved the distinction between explicit feedback and assistant hypotheses, including Pokeworks' perceived ordering ease versus untested checkout behavior.
- Linked journal from SPECS, PROJECT-STATE and ACTION-ITEMS; labeled previous fixed-layout preview assumptions superseded. No website or Square changes, no deployment. Next: use the journal for continued discovery and future design review.

## 2026-09-23 — Owner comparison and conversion assessment

- Coordinated three read-only restaurant comparisons: Sushi Me Roll'n, Doo-Dah Diner, and Metro Pizza. Saved claims, arithmetic discrepancies, observed conversion patterns, economics, and a testable recommendation in `results/2026-09-23-website-audit/14-OWNER-COMPARISON.md`.
- Corrected prior interpretation: Joel wanted analysis of Saffron's sales effectiveness, not immediate copying. Preview remains unapproved; implementation paused. Updated tracker without advancing 20/34 completion.
- Verified official Owner pricing/Square connectivity and Square marketing documentation. No new performance scores, conversion uplift, or ROI claimed. No production or Square changes; next is agreement on the conversion brief and GA4 access.

## 2026-09-23 — Refine the homepage’s food-first story

- Joel identified the strongest parts of the Saffron Valley homepage: alternating dish-and-copy panels, a text-free six-photo kitchen gallery, and additional restaurant-character panels instead of an on-page catalog.
- Rebuilt the private Hikari preview around those patterns while retaining Hikari’s own mist, teal, coral, Playfair, and Inter direction. Added two food/story features, six unlabelled kitchen photographs, and three restaurant-character panels.
- Routed the Fire Cracker feature through its proven location-aware Square URL; all general ordering actions continue to Square, reservations continue to Carbonara, and the QR-only restaurant menu remains absent.
- Updated the right-panel tracker’s current-work summary and verified the revised preview at 1280 × 720 and 390 × 844. Five analytics tests and 111 theme checks pass; no production deployment occurred.
- Next: Joel reviews the refreshed preview and approves or revises the copy and selected photographs before Phase 5 implementation.

## 2026-09-23 — Make the restaurant menu QR-only

- Joel clarified that `/menu` must be completely isolated: guests access it only through QR codes on restaurant tables.
- Removed the Restaurant menu navigation link, featured-section CTA, explanatory copy, and FAQ reference from the private homepage preview.
- Updated the roadmap and project records to remove `/menu` from website navigation, CTAs, sitemap, structured data, and search indexing while preserving direct QR access.
- Next: Joel reviews the corrected homepage preview; Phase 5 implements the public website without any route to the restaurant menu.

## 2026-09-23 — Correct the restaurant-menu boundary

- Joel clarified that `/menu` replaces paper menus in the restaurant and is not part of the website redesign.
- Removed the menu-direction switch and mockup from the private preview; the artifact now reviews only the homepage.
- Relabeled homepage links as Restaurant menu and kept Square's Order online path distinct.
- Updated the roadmap, tracker, preview notes, current state, and decision record so Phase 5 preserves `/menu` as a separate operational tool rather than rebuilding it.
- Next: Joel reviews the corrected homepage-only preview and approves or revises its design direction.

## 2026-09-23 — Prove one Square item path

- Selected Fire Cracker from the approved popular-dish set and captured its live Square item ID.
- Found that an item-only URL can lose store context in a clean session; the explicit location + item URL reliably opens the product on desktop and at 390 x 844 mobile.
- Verified current identity, photo, $15 price, Regular variation, 20% discount, pickup and delivery availability, current fees/totals, cart visibility, mobile checkout action, and payment entry without entering personal/payment data or submitting an order.
- Updated the analytics parameter test to use the proven URL and `item_name: Fire Cracker`; all focused analytics tests pass.
- Recorded the Square decision as Pass. Next: Joel approves or revises the Phase 3 design, then Phase 5 can implement the approved site and reuse verified item links.

## 2026-09-23 — Create the Phase 3 design preview

- Improved the tracker so one page now shows the exact current work, what it is waiting on, what comes next, the independent GA4 blocker, and a direct preview link. Completed and blocked phase badges were corrected.
- Used the frontend-design workflow to define a Hikari-specific direction around the meaning of light: mist-white space, deep teal structure, coral reserved for ordering, real food photography, and restrained Playfair/Inter typography.
- Built one switchable responsive artifact for the homepage and `/menu`. It uses the six current Most Popular dishes with verified photos/prices, shortens the homepage path, keeps the menu dine-in-first, and does not imply unproven Square item deep links.
- Visually inspected the desktop homepage at 1280×720, mobile homepage at the target breakpoint, and both menu layouts. Browser-tested the view switcher at the private Tailscale URL.
- Started a scoped preview server at `http://100.124.197.26:6421/preview`; it serves only the preview and `/assets/*`. No production deployment occurred. Next: Joel approves or revises the preview before Phase 4.

## 2026-09-23 — Implement responsive media delivery

- Completed the Phase 2 performance gate after the image checkpoint: re-encoded the hero reels to 297 KiB landscape and 406 KiB portrait files, self-hosted critical fonts, made theme JSON fetch without stale cache, and reduced the homepage's initial menu from the full catalog to six featured cards. The final three mobile Lighthouse runs scored 77/89/88; median performance 88, LCP 3.83 seconds, CLS 0, and transfer 1.13 MiB. Saved proof in `11-MOBILE-PERFORMANCE-VERIFICATION.md`.
- Generated 320/640 px AVIF and WebP variants for all 60 active menu images and 640/1280 px variants for five homepage food images. All 260 outputs validate and total 4.26 MiB versus 115.86 MiB of source material.
- Wired responsive `<picture>` markup, `srcset`, `sizes`, intrinsic dimensions, lazy loading, and asynchronous decoding into the shared menu renderer and homepage shell. Browser proof selected 320 px AVIF menu cards and 1280 px AVIF homepage imagery while preserving layout.
- Replaced the two simultaneous hero videos with one orientation-aware element. Desktop browser proof loaded only the landscape MP4; reduced-motion and data-saver guards are enforced by the media validator. Added asset versioning after browser caching initially retained an older script.
- Verification: media validator passes, five analytics tests pass, all 111 theme tests pass, JavaScript syntax checks pass, and `git diff --check` passes. No production deployment occurred. Next: run three mobile performance tests and record the median.

## 2026-09-23 — Record the Square business baseline

- Used the last 28 complete days, August 26 through September 22, and filtered Square's Sales summary to the `Hikari Sushi` online-store channel.
- Verified 15 completed online orders and $602.90 net online sales; calculated $40.19 average order value from the same period. A September 18 return is reflected in net sales and was not treated as another completed sale.
- The signed-in Google account opened the Analytics “Start measuring” screen and had no accessible Hikari property. No account/property was created and no GA4 values were inferred. Phase 1 remains 4/5 while work advances to the non-dependent Phase 2 media inventory.
- Completed the Phase 2 source inventory: the 60 active menu images weigh 115.30 MiB, and the shared renderer currently places all of them on both homepage and `/menu`. Documented the six homepage shell images, two hero video sources, 42 unreferenced menu assets, and the exact optimization boundary.

## 2026-09-23 — Start Phase 1 with a live right-panel tracker

- Created a persistent HTML checklist for all 34 roadmap proof items, opened it in the Codex right panel, and checked only completed work. The board currently shows 8 of 34 complete and Phase 1 active.
- Because Joel is viewing the Codex task from another computer, replaced the host-only localhost view with a dedicated tracker-only HTTP server bound to the Mac mini's private Tailscale IP. Verified `http://100.124.197.26:6420/tracker` returns the rendered tracker; no other project route is served.
- Replaced the stale URL condition with a testable first-party CTA module covering current Square, Carbonara reservations, and Google directions destinations. Added page, placement, destination, and optional item parameters to separate Hikari link clicks from Square sales.
- Five focused tests pass. Browser diagnostic proof observed `click_order_online` from `hero`, `click_reservations` from `visit`, and `click_directions` from `visit`. All 111 theme tests still pass.
- Browser verification exposed that tracking-like script filenames and the deferred head position were not observable in the test surface. Kept a neutral `site-actions.js` filename, used the site's proven bottom-script pattern, and recorded a rule not to treat unit tests alone as analytics completion.
- Saved the event contract, technical baseline, and open four-week business baseline in `09-MEASUREMENT-BASELINE.md`. No production deployment occurred. Next: obtain authenticated GA4/Square baseline values, then start Phase 2.

## 2026-09-23 — Plan all remaining website improvements

- Reviewed the audit against the current static HTML/CSS/JavaScript implementation and separated completed Square/menu/review work from unfinished website work.
- Created a seven-phase implementation roadmap covering measurement, mobile media performance, an approval-gated design preview, a one-item Square handoff proof, static-first implementation, SEO/accessibility, and release measurement.
- Added explicit proof gates, operational boundaries, and repository-safety handling for the dirty checkout that is nine commits behind `origin/main`. No website code, Square setting, deployment, or production content was changed.
- Next: review the plan, then safely establish the implementation branch/worktree and begin measurement plus performance foundations.

## 2026-09-23 — Close-out for immediate continuation of the website analysis

- Summarized the original Hikari-versus-Saffron audit for Joel and pointed him to its summary, design reference, and SEO/performance/Owner-claims evidence. No redesign decision or new implementation authorization was made.
- Corrected current-state wording that still described Garlic Shrimp and six Square-only dishes as delivery-app-visible after the later parity pass. The older dated decision/change entries remain as history.
- Work stops at discussion of the original audit. Next: continue from the three audit files, settle the scope of a bounded homepage/menu preview if Joel wants to proceed, and do not assume a Square replacement. The exact dirty-worktree file list and branch state are in `PROJECT-STATE.md`; no files were committed or published by this close-out.

## 2026-09-23 — Align delivery-app menus with Square Online

- Joel clarified that Square Online, DoorDash, Uber Eats, and Grubhub should sell the same items, subject to the salad and mochi exclusions. Audited the Square catalog item channels, enabled 14 website-matched items on all three apps, disabled nine extras there, and cleared six stray Square website-channel settings. No catalog deletions, price changes, or POS-channel removals.
- Confirmed fresh Square integration sync timestamps and live representative items: DoorDash additions and retired-item absence; Uber Eats Dessert/Mango Sticky Rice; Grubhub Mango Sticky Rice, Playboy, Hikari Delight, Cowboy, and a zero-result Diamond search. No paid order, KDS or courier test. [Full change record](results/2026-09-23-website-audit/07-DELIVERY-APP-MENU-PARITY.md).

## 2026-09-23 — Reconcile Square Online menu to Hikari website

- Inventoried the current website menu (60 unique entries) and compared it to the public Square ordering menu. [Full menu and item-by-item differences](results/2026-09-23-website-audit/06-MENU-RECONCILIATION.md).
- Enabled 11 website dishes missing from Square Online, using their previously verified website-synced catalog photos. Nine needed Dine-In Menu assignment; Mango Sticky Rice and Strawberry Spritz needed channel and fulfillment adjustments. Hiding the six Square-only dishes was limited to `Online – Website & Profile`; their Square catalog/POS/delivery-app records remain.
- Square's fast save clicks were not completion: waited for each item editor to close and checked the public storefront. Mango Sticky Rice required changing shipping-only fulfillment to pickup/local delivery and switching a spurious -26 stock count to availability tracking. A later live refresh displayed it without Out of stock.
- Confirmed all 11 additions displayed, all six removals absent, and the owner-excluded salads and mochi absent. Joel asked to leave the website salad listings unchanged despite not offering them. No price changes, order, or payment.

## 2026-09-23 — Correct live appetizer menus

- Removed the Garlic Shrimp entry from `js/menu-page.js`, pushed only that file from an isolated worktree based on current `origin/main` (`fe657b4`), and verified `https://hikarisojo.com/menu` no longer shows it. Unrelated dirty main-worktree files were not published.
- In Square, deselected `Online – Website & Profile` for `Butterflied Garlic Shrimp (6)` while preserving Points of sale, DoorDash, Grubhub, and Uber Eats. Reopened the item to verify 4 of 5 channels remained.
- Crab Rangoon (6pcs) had tracked stock -25. Changed only its tracking mode to prepared-food availability; verified catalog status Available after reload and the public Square Appetizers section showing Crab Rangoon without Garlic Shrimp. No order was placed.

## 2026-09-23 — Correct Square chicken-bento description

- At Joel's request, replaced the salmon wording on `Teriyaki Chicken Bento Box` with “Teriyaki chicken served with fresh salad, California roll, steamed rice, and gyoza.” Reopened the Square item and verified the saved description. Other item fields were not changed.

## 2026-09-23 — Sync website menu photos into Square

- Used the 61 unique `js/menu-page.js` image mappings and actual local files as the current website source. Matched Square aliases by item name/description, uploaded or replaced matching item photos, and left already-current photos in place. The generic Canned Soda category image was not assigned to individual branded cans.
- Audited all 79 visible Square catalog rows after the sync: 69 have thumbnails; the 10 missing are Square-only dishes or utility/generic items with no current website menu mapping. All 60 individually matchable website entries have photos. [Detailed inventory](results/2026-09-23-website-audit/05-SQUARE-PHOTO-SYNC.md).
- Preserved Square pricing, descriptions, menus, modifiers, availability, channels, and integrations. Noted but did not alter a chicken-bento description that says salmon. No order or payment was created.
- Remaining six Square-only food-photo gaps require current, item-verified photos from Joel; unused local candidate files were not presumed current.

## 2026-09-23 — Authenticated Square review and approved improvements

- Confirmed Hikari’s Square Plus subscription, Order Online template, banner/menu/header controls and checkout settings in the existing logged-in Chrome session.
- Joel changed the task from read-only inspection to explicitly authorized improvements. Published the hidden slideshow, compact item layout and inactive announcement; preserved the actual 20% discount and all operational settings/integrations.
- Checked mobile and desktop previews, then the live guest storefront in a separate browser. Pickup and delivery both reached real contact/payment entry. Native mobile View order remained reachable; its total updated with delivery. No personal/payment details or orders submitted.
- Sticky-header setting did not yield the expected cart visibility; restored the original Reveal on scroll up and republished. Square preview does not support adding items to cart, so functional checks used the live storefront after publishing.
- Removed the single temporary Firefly Fusion item. Saved [change record, screenshots, rollback guidance and remaining limits](results/2026-09-23-website-audit/04-SQUARE-LIVE-IMPROVEMENTS.md). Next: Joel’s physical-phone review; delivery quote consistency is a separate Square question.

## 2026-09-23 — Square ordering customization follow-up

- Researched current Square Online documentation against Joel’s observed delivery-to-menu confusion. Saved [supported controls, limits and next inspection](results/2026-09-23-website-audit/03-SQUARE-CUSTOMIZATION.md).
- Distinguished the custom Hikari site from Square’s storefront and from Square’s separate Ordering Profile product. No authenticated Dashboard/editor tab was available; actual plan, template and control availability remain unverified.
- Identified partial checkout styling, checkout-excluded snippets, courier dispatch/API constraints, and the live side effect of editing an active promotional pop-up.
- No settings changed, no publication, no paid order, no new implementation framework. Next: focused read-only editor inspection, then Joel approves a small change set or an alternative direction.

## 2026-09-23 — Website comparison audit

- Inspected both live websites, responsive layouts and guest ordering paths; captured screenshots and metadata. Removed both temporary cart items without submitting orders or personal information.
- Recorded PageSpeed mobile/desktop reports: Hikari mobile 61 / LCP 9.9s; Saffron 93 / LCP 2.8s. Confirmed the stale order-click URL condition and menu discoverability gaps.
- Researched Owner's claims and independent discussions; no independent controlled validation found in this bounded search. Saved the main recommendation, measured design reference and evidence in [results](results/2026-09-23-website-audit/README.md).
- Scope stayed analysis-only. Rebuild/new technology may be considered; no account system, app or broad test infrastructure is implied. No production files or deployments changed.
- Follow-up delivery research confirmed Owner's documented DoorDash/Uber courier options and automatic driver assignment; Saffron's specific provider remains unverified. Added primary help-center sources to the evidence report.
- Next: Joel reviews the audit; a visual preview and one-item ordering proof require a subsequent implementation request.
# September 24, 2026 — Private preview image deduplication

Removed the redundant Flares/sashimi/karaage editorial reprise and completed bento comparison from the private generator. Six approved gallery tiles remain unchanged. Fourteen distinct main-content image sources; desktop/mobile loading, geometry, overflow and hover checks pass. Inspected gallery-to-story transition. No source assets deleted, no production changes or publication.
# 2026-09-25 — Session close: done

Saved owner-approved documentation close-out. Replaced stale accumulated preview status with concise live release handoff; resolved obsolete design-review tasks while retaining business/access follow-ups; aligned README build guidance and SPECS with approved production. Existing decisions and changelog already cover implementation, so no duplicate entries added there.

Live release at close: 6ab60e49d3ca5d99385c01ca; rollback 6ab60bb601d7acd43b6d5942. Latest live HTML equality and desktop/mobile story-photo checks passed earlier this session; full preceding release passed four-viewport interactions and loading checks. No further website edits or deployment during close-out. Branch codex/website-improvements has uncommitted work and local-only commits; reconcile approved source before future Git-triggered deployment. No preview/test/deploy processes found at close. Done for now; no pending design work.

## 2026-09-26 — Ordering analytics implementation

Implemented and deployed the authorized small-business measurement system. Website analytics-only Netlify deploy 6ab76537d007357abec5c0ec preserves HTML/CSS. Configured GA cross-domain and receipt evidence; actual storefront handoff/browser IDs verified, genuine receipt execution remains awaiting data. Existing dashboard now includes Website orders, live Square/GA/Ads collectors, exact transaction matching, source and financial definitions, DoorDash official reports, Uber statement import, Grubhub signed cancellation import, and seven downloads including report/coverage.

Verified 28 targeted backend tests; deployed app.py AppTest with real September data has no exceptions and reproduces 31 paid online orders/$1,465.71, DoorDash $427.84 payout, Uber $76.79 payout initiations, Grubhub $42.14 transaction merchant net (separate cohorts). Targeted runtime copies hash-match; SQLite backup consistent; local health ok/public HTTP200. No paid order or campaign/price change.

Computer Use stopped initializing after repeated resets, preventing final desktop-browser pass and download of the already-requested Grubhub Sep1–25 deposits. Receipt code is configured, not genuinely purchase-verified. Two-hour thread follow-up automation finish-hikari-analytics-verification is active for remaining feasible work and genuine-order evidence, quiet on unchanged state. Dirty pre-existing changes preserved.


## 2026-09-26 — Browser recovery and merchant exports

Browser recovery completed remaining merchant exports. Actual Grubhub deposits and Uber conversion/ads/offers imports passed parser review, runtime AppTest and live signed-in browser verification. Forty-metric report bundled. Genuine receipt match remains awaiting data.

## 2026-09-27 — Restore approved website and repair automatic deployment

Restored saved approved deploy, reconciled complete public source into current main from an isolated worktree, and pushed b7908a6. Netlify automatically published 6ab9b2f698c1960008494922. Main keeps newest review data/functions; unrelated dirty local work remains intact. Manual review workflow 36361920996 succeeded and found no changed reviews. Verified live homepage equality on apex/www, deployed file hashes, 9 analytics tests, 111 theme checks, and full browser release checks at 1440/390/320/768 (loaded images, review pagination, carousel, fixed hero, QR menu, analytics bootstrap, overflow and private-file exclusion). Browser proofs and verification JSON: results/2026-09-27-deployment-recovery/. No remaining production-recovery blocker. Future releases must start from current main, not the preserved older dirty checkout.

## 2026-09-27 — Three private QR menu concepts

Built results/2026-09-27-qr-menu-concepts: comparison, three interactive modes, current live 60-item snapshot and existing image references. Checked category/back, search/empty results, jump, photo mode, details and saved picks in browser. Narrow embedded layout inspected. Physical phone/network testing not performed; viewport override was inconsistent, so exact requested viewport dimensions are not claimed. Local server on 127.0.0.1:6427 remains for owner review. No production changes or pushes; unrelated dirty work preserved. Next: owner feedback and selection.

## 2026-09-27 — Session close (done)

Production recovery and verification are already recorded above; no further release was needed. Corrected stale README release guidance and retained the dirty codex/website-improvements checkout, its local-only commits, and the separate QR-menu work. Recovery commit b7908a6 is pushed to main; its managed worktree retains browser evidence. Outside the website, updated agent-toolkit/skills/session-close-personal/SKILL.md to save documentation without routine approval prompts or review summaries, default to done, and finish with a brief confirmation; skill validation passed. That skill edit remains uncommitted alongside pre-existing toolkit changes. No commit, push, deployment, or process shutdown performed during close-out. This chat has no running deployment/test work; separate QR-menu preview and review state remain as recorded by their owning task. Next: resume requested work from current origin/main, preserving private drafts and pending QR-menu review.

### QR menu option 2 refinement — 2026-09-27

Refined option 2 only in private prototypes. Browser verified Classic Rolls selection, California Roll details and return to the directory. Screenshot: results/2026-09-27-qr-menu-concepts/option-2-refined.png. Existing food photos/data unchanged; no push or deployment.


### 2026-09-27 — Sushi preview filters
Updated private option 2 Sushi grouping. Verified filter counts 36/10/18/5/1/2/1 and California Roll details via browser keyboard interaction; pointer automation did not activate filter buttons. Physical phone not tested; no production changes.


### 2026-09-27 — Continuous Sushi navigation
Implemented and browser-verified continuous Sushi navigation, automatic active-section highlighting, up/down jumps and last-section heading clearance with all 36 dishes retained. Narrow browser layout fits buttons in two rows. Screenshot sushi-sticky-sections.png; viewport restored. No deployment.


### 2026-09-27 — Persistent Menu control
Added a persistent ‹ Menu button alongside Sushi section navigation in the private preview. Verified return from Tempura/Fried to all categories with focus on Sushi. Main category layout is now under discussion; no landing-page changes or deployment.


### 2026-09-27 — Continuous full-menu comparison
Created separate continuous.html comparison: all 60 unique dishes on one page, initial category shortcuts, sticky Categories/current-section/Search bar, contextual Sushi section jumps. Preserved sample.html. Browser verified category/subsection jumps, heading clearance, search, photo details, and narrow layout without horizontal overflow. Fixed focus-induced hiding of Sushi controls during keyboard activation. Physical phone and guest usability still untested; no production changes.


### 2026-09-27 — Stable main category navigation
Replaced changing navigation in continuous.html with eight permanently visible categories in two fixed rows. Removed duplicate initial shortcuts and sticky Categories/current/Search row. Sushi subsection controls remain below primary categories. Verified Salads and Sushi/subsection jumps, manual scroll highlight from Salads into Sushi, 60 retained dishes, narrow layout without horizontal overflow and heading clearance. Physical-phone guest testing pending; private preview only.


### 2026-09-27 — Remove preview search row
Removed search input and search rendering from continuous.html at owner request to prioritize screen space. Browser confirmed categories and dishes render without search. Live menu unchanged.


### 2026-09-27 — Readable menu typography
Increased continuous preview typography for older guests: dish names 18px, descriptions 16px, prices 17px, category labels 14px and Sushi shortcuts 13px; buttons at least 52px tall. Descriptions now show fully. Verified 375px frame without horizontal overflow and jump heading clearance; synced iPhone preview. Owner physical-phone readability review pending; no deployment.


### 2026-09-27 — Disable My picks
Owner approved typography: names 20px, descriptions 18px, prices 19px, main categories 15px, Sushi shortcuts 14px. Disabled My picks behind PICKS_ENABLED=false, retaining code. Preview detail dialog verified without save button/hint; iPhone copy synced. Meaning of owner phrase flip it around remains pending clarification. No deployment.


### 2026-09-27 — Swipe-down dish details
Removed visible X from continuous preview details at owner request. Bottom sheet supports top-of-content touch pull-down, handle pointer drag, handle activation, backdrop and Escape dismissal; My picks remains disabled. Browser drag verified closed panel, iPhone copy synced; actual touch swipe awaits phone verification. Discussing immediate swipe hint and a gentle animation after two seconds; hint not implemented.


### 2026-09-27 — Smooth sheet motion
Added 420ms slide-up and 340ms slide-down detail animations including drag dismissal; reduced-motion preference respected. Replaced golden full-width handle focus outline with localized green handle focus highlight. Browser verified delayed close, complete close and drag dismissal. Phone preview synced; actual iPhone animation feel pending owner check.


### 2026-09-27 — Lock background under dish sheet
Fixed background scrolling during dish-sheet dismissal: save scroll position, lock body and root while modal is open, block backdrop touchmove, restore inline styles and exact position on close, and avoid scroll tracking updates while locked. Browser verified background scroll attempt leaves offset unchanged and drag close restores 6330.45px within subpixel rounding. iPhone copy synced; actual intermittent iOS swipe issue requires owner retest.


### 2026-09-27 — Connected dish-detail motion

Inspected owner screen recording using extracted frames. Implemented connected-motion in continuous.html and synced staged LAN phone preview; bumped mobile wrapper cache key. node --check passed. Browser: 16px handle drag returned to rest without closing; 192px drag closed and restored scroll to 1922.727px (saved 1922.73px); category bar stayed at top=0 while locked and after dismissal; Escape closed. LAN HTTP contents matched workspace. iPhone touch, momentum, and Safari behavior are not physically verified. Production unchanged.


### 2026-09-27 — Full-screen return to source correction

Corrected private preview to full-screen/source-return. Geometry check passed for source rows at top/middle/bottom; syntax check passed. Browser verified detail top=0, height=744px in 744px iframe; downward drag closed and unlocked menu. Captured fullscreen-detail-preview.png and fullscreen-return-motion.png. Phone staged copy synced; physical Safari verification pending.


### 2026-09-27 — Independent whole-photo return

Implemented whole-photo-return in private preview; staged phone HTTP bytes matched local file. Browser: 17px pull stays open at full 744px height with photo visible and no ghost residue; 192px pull closes, removes ghost and restores menu at 74.0909px. Screenshot whole-photo-return.png captures proportional shrinking photo. Actual iPhone touch not verified; production untouched.


### 2026-09-27 — Photo-to-row landing

Implemented photo-to-row landing. Syntax and LAN byte equality verified. Browser swipe and Escape close; no hidden original rows, temporary photos or body lock remain. Reopened same dish successfully. Captured intermediate photo and row reveal stages. iPhone touch feel remains owner-review pending; no live deployment.


### 2026-09-27 — Populated row return

Implemented real-row-return. Syntax checked; LAN HTTP matched file. Intermediate screenshots show name, price and description within the growing row. Browser Escape and drag dismissal tested; no temporary rows, hidden originals or scroll lock after completion; same row reopened successfully. Actual iPhone touch review pending.


### 2026-09-27 — Row overlap correction

Adjusted overlap without changing layout or gesture handling. Syntax and LAN equality passed; captured readable row beneath intact photo. No hidden rows, temporary rows or remaining scroll lock after browser dismissal. iPhone touch feel pending.


### 2026-09-27 — Tiny thumbnail experiment

Applied existing Hikari image guidance; reused original preview assets without edits. Browser saw 60 lazy thumbnails, no failed images among completed loads; appetizer/sushi samples recognizable and proportional. Narrow preview has no horizontal overflow. Photo return reaches matching left thumbnail; no ghost residue. LAN copy matches; physical Safari test pending. No production changes.


### 2026-09-27 — Direct thumbnail transition

Removed row transition implementation; syntax check and phone HTTP equality passed. Browser Escape cleanup showed no ghost or scroll lock; same dish reopened and swipe dismissal tested. Physical iPhone feel pending. Production unchanged.


### 2026-09-27 — Stable Small Tempura opening

Syntax check passed. Small Tempura measured 390x390 throughout opening and after ghost removal at 390px. At 430px, image element stayed 430x401.804 and contained painted photo/ghost 401.804 square with 14.098px side inset. Phone HTTP matches. Saved small-tempura-stable-open.png; physical Safari validation pending.


### 2026-09-27 — Browser toolbar resize correction

Frame-by-frame review of 1s recording confirms second size jump during toolbar expansion. Changed photo sizing. Controlled 430px-wide iframe height 800->600 initially exposed 430->416.364 width change from scrollbar; stable gutter fixed it. Repeated test preserves 416.364x416.364 and cap432px. Source syntax and LAN equality verified. Screenshot browser-bars-stable-photo.png. Actual iPhone/browser-toolbar behavior still pending owner retest; no production change.


## 2026-09-27 — Owner-approved QR menu checkpoint

Saved owner-approved QR menu checkpoint after iterative phone review. Browser tests covered photo handoff geometry, simulated viewport height reduction, close cleanup, repeat opening, narrow layouts and menu position preservation. All 60 snapshot image dependencies are tracked; inline script syntax checked. Stage only preview artifacts and this checkpoint note in project records; leave unrelated homepage, analytics, deployment and earlier mixed documentation edits outside the commit.


### 2026-09-27 — Detail presentation refinement

Committed scoped preview + checkpoint notes as 719bb1d, leaving unrelated changes out. Then applied frontend-design skill for requested detail polish; design plan DETAIL-DESIGN.md. Browser reviewed Small Tempura and long Teriyaki Salmon Bento Box name, verified no horizontal overflow and successful drag dismissal. Saved detail-refinement.png; staged LAN file matches. Existing source photos untouched, contain fit retained; no new image generation. New polish uncommitted for review.


### 2026-09-27 — Swipe hint and Sushi navigation fix

Verified Sushi entry at <1px target error, Premium to Desserts with correct category and hidden subnav, Sushi Tempura Fried third button at <1px error, and exit to Appetizers. Enlarged hint reviewed in narrow phone preview; Menu button gone. Syntax check passed; staged phone file matches. New changes uncommitted after 719bb1d; production untouched.


### 2026-09-27 — QR preview reliability and photo edges
Private QR reliability and full-width photo update. Verified rapid Sushi/Desserts/Sushi/Bento navigation ends at Bento (within 1px); shortened Bento labels; full-width Small Tempura photo geometry; slow/failed/cached load-handler checks; phone HTML/JSON equality. No deployment. iPhone gesture/network verification remains with owner.


### 2026-09-27 — Remove phone photo letterboxing
The remaining 54svh maximum height shrank contained photos inside a full-width box on shorter phone viewports. Removed that cap: intrinsic proportions and width now determine photo height. Browser confirms Small Tempura is square and exactly view width; phone copy synced. Owner iPhone verification pending.


### 2026-09-27 — Preview finishing polish
Strengthened selected/pressed category styles; aligned title, thumbnail and price columns; added quiet thumbnail placeholder icons; preserved description/return-hint breathing room. Narrow browser preview checks: all 60 rows have no horizontal overflow or title/price collisions; long Flares of Hikari detail fits horizontally and return hint has 36px top padding. Phone copy synced; no deployment.


### 2026-09-28 — Approved QR preview push checkpoint
Approved full-width dish detail, readable return hint, robust category jumps, photo-loading fallbacks, shortened Bento labels, and finishing polish saved on codex/website-improvements. Narrow layout checks covered all 60 rows; owner accepted full-width photos on iPhone. Preview only; production files excluded.


## 2026-09-28 — Session close: approved menu live

Finished customer QR menu iteration and publication. Owner accepted full-width photos on iPhone; completed category/row/placeholder/detail-spacing polish and pushed preview commit `0a88911`. After clarifying that a preview branch push did not update the public menu, owner explicitly approved production replacement.

Created `/Users/samanthashiro/.codex/worktrees/qr-menu-release/hikari-website` from current main. Preserved canonical content and analytics, generated production menu JSON, and published `af52b99` to main. Netlify `6aba040f144ffe000820008b` reached ready at 2026-09-28 06:07:37 UTC. Live HTML/JSON match release output; all 60 images served successfully. Browser exercised categories and Small Tempura detail open/return, including 390×844. Build, 9 analytics tests and 3 menu integration checks passed. Live mobile screenshot: `results/2026-09-27-qr-menu-concepts/live-release-proof.png`. Post-deploy physical iPhone confirmation remains unreported.

At close, original preview branch matches its remote commit but retains unrelated dirty work and local documentation; production release checkout is clean, its HEAD pushed to main. Servers 6427/6428/6431 remain running without a persistence guarantee. No deployment job remains pending. Updated the seven project files without committing or pushing close-out edits. Next: await requested work and resume from production main, not the older dirty preview branch.

## 2026-10-01 — Private animation comparison

Created `results/2026-10-01-hikari-motion/index.html`: three original animated SVG concepts (sunrise/waves, noodle lift, brushstroke sun), side by side on desktop and stacked on phones. Includes replay-all, individual replay, pause/resume and finished-artwork controls; reduced-motion CSS and preference handling included. Preview at port 6433 serves only this concept folder. Live website unchanged. Browser visually checked desktop and 390px phone layout, with no horizontal overflow; replay, pause/resume and still controls exercised. Physical-device and OS reduced-motion behavior not tested. Next: owner compares and selects a direction.

## 2026-10-01 — Sunrise variations

Owner chose the first sunrise-and-waves concept. Created Quiet dawn, Morning tide and Painted morning in the existing private comparison, preserving the prior three at `original-three.html`. Same verified Tailscale URL: http://100.124.197.26:6433/. Desktop and 390px browser layouts visually inspected; no phone-width overflow; replay, pause and still controls exercised. Live site unchanged. Next: owner chooses or refines a sunrise variation.

## 2026-10-01 — Keep Tailscale motion preview running

Preview failure was confirmed: no listener on 6433, and local/Tailscale HTTP requests failed. Installed user LaunchAgent `com.hikari.motion-preview` with KeepAlive, bound only to `100.124.197.26:6433`. Direct external-volume serving under launchd returned 404; serving an identical copy at `~/.local/share/hikari-motion-preview` restored HTTP 200. Browser freshly loaded all three concepts via Tailscale. Future source edits MUST sync the concept folder to that serving directory. The Mac must remain awake, logged in, and connected to Tailscale; access from the other computer remains user-unverified.

## 2026-10-01 — Sequential rays

Updated only Quiet dawn: its five rays now draw outward in a left-to-right sequence, staggered 190ms, starting 1.05s into the animation. Synced source to the persistent Tailscale serving copy. Fresh browser load, replay, computed stagger timings and finished artwork verified. Live site unchanged. Next: owner reviews ray motion.

## 2026-10-01 — Focus preview on Quiet dawn

Owner approved the sequential ray treatment and requested only the selected concept. Removed the other two cards from the main preview, centered Quiet dawn, retained replay/pause/still controls, and preserved previous comparison in `sunrise-three.html`. Synced persistent serving copy; Tailscale HTTP and rendered browser verified. Production unchanged.

## 2026-10-01 — Wave-motion research

At owner request, a worker researched online primary sources; no artwork changed. Current waves use stroke reveal only. Recommended next prototype: refine right-side spacing and broad curves, preserve approved rays, then one restrained path-morph swell (~2–3 SVG units) with anchored endpoints and lower wave following 120–160ms later. Start about 2.15s and rest by ~3.7s; these timings are design judgment. Preserve finished static mark for reduced motion. Avoid perpetual loops and whole-line sliding.

Sources: https://www.ibm.com/design/language/animation/tips-and-techniques/ ; https://www.ibm.com/design/language/animation/classic-principles/ ; https://motion.dev/docs/react-svg-animation ; https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/ ; https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide .

## 2026-10-01 — Implement gentle wave swell

Refined Quiet dawn curves for consistent spacing and added finite CSS path morphs: upper starts 2.3s, lower follows 140ms later, each lasts 1.5s. Endpoints anchored; small internal displacement, no loop; approved rays preserved. Synced persistent Tailscale serving copy. Browser captured 120 distinct computed geometry frames returning to original geometry; pause and still mode verified. Finished rendering inspected. Live website unchanged.

## 2026-10-01 — Independent animation review

Separate agent reviewed Quiet dawn source and actual motion in native Chrome via CUA. Verdict: already good; no material motion/visual defect; retain restraint. Verified progressive rays, wave deformation and settling, replay, pause/resume, and still mode. Optional polish: raise sun 1–2 SVG units to improve right-side wave separation at small sizes. Preview-only issue: status text remains Playing when paused/finished, and Pause stays enabled in still mode. No changes made. Dark Reader altered colors during review, so color fidelity was not verified; OS reduced motion, mobile and Safari were not tested by reviewer.

## 2026-10-01 — Private homepage hero integration

Owner requested seeing Quiet dawn in the existing hero icon position. Created homepage.html and homepage/ CSS/JS in the motion preview from a fresh production HTML/CSS snapshot; replaced hero pseudo-icon with scoped decorative animated SVG (88px desktop,72px mobile). Preserves approved rays, raised sun and swell; static reduced-motion fallback. Uses existing production photos without edits. Preview excludes production measurement and remote theme/review refresh scripts; review excerpts remain snapshot content. Synced to persistent Tailscale service: http://100.124.197.26:6433/homepage.html. Desktop and390px browser appearance inspected, no mobile overflow; five ray elements, wave animations and hidden original icon checked; no console errors. Production unchanged. Next: owner reviews exact hero placement before any release.

## 2026-10-03 — Teriyaki chicken photo publication
Archived the approved image and both original photographs; generated WebP/AVIF sizes and upload JPEG. Published commit `431f4f0` to main. Build and 12 menu/analytics tests passed. Actual live dish dialog verified at 1440px and 390px; production image hash matched. Browser CUA could not start due to old symlinked workspace configuration; PiKVM fallback confirmed Square sign-in wall. Existing dashboard merchant profiles opened for access checks; delivery updates remain pending and no delivery photo was changed.


## 2026-10-03 — Delivery photo continuation

Continued merchant release using 1Password credentials. Square API updated only rice-bowl image associations; public detail verified. DoorDash login succeeded and landscape photo is in review. Grubhub POS menu now shows approved image. Uber saved password failed; requested account verification from owner. Website/QR release remains verified; original dirty checkout preserved.


## 2026-10-03 — Approved description release

Approved rice-bowl description released in 9a780f9: Tender chicken glazed in sweet-savory teriyaki sauce over white rice, served with a fresh side salad. Live website JS and Uber public menu verified; Square catalog readback verified with all non-description fields unchanged; DoorDash saved/reloaded item and Grubhub synced merchant item verified. User also confirmed photos look correct across delivery apps. Customer-facing DoorDash/Grubhub description checks remain distinct from merchant verification.


## 2026-10-03 — Salmon bowl release

Published owner-approved jasmine-rice salmon image and fresh-side-salad description in 398764d. Website desktop1440/mobile390 detail inspected; build and 9 analytics tests passed. Square exact rice-bowl item CNJNTCWWEUNX4VDSQACF2A2N updated with image B62ZRFHCZZORZF2AE2D5F7BC; public detail visually verified; unrelated fields preserved. Uber public image/description verified. Grubhub merchant image/description sync visually verified. DoorDash description synced from Square; photo now reports visible, subject to later review. DoorDash manual-description override was declined to preserve POS synchronization. Approved master, landscape derivative and original references archived in assets/images/source/2026-10-03-teriyaki-salmon. No bento changes.
