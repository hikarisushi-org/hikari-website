# Action Items

## Open

- [ ] Use `docs/WEBSITE-PHOTO-SHOOT-GUIDE.md` for the next Hikari shoot; preserve original full-resolution files and verify every dish name before public use.

- [ ] Reassess remaining roadmap work before starting another task; design implementation and approval-gated release are complete. Retain separate unresolved measurement and ordering-channel follow-ups below.
- [ ] Finish the GA4 half of the Phase 1 business baseline after obtaining access to the Hikari Analytics property. Square is complete for Aug. 26–Sept. 22: 15 completed online orders, $602.90 net online sales, and $40.19 average order value. [Measurement record](results/2026-09-23-website-audit/09-MEASUREMENT-BASELINE.md).
- [ ] If those POS-only dishes are to be sold online again, obtain current, item-verified photos for Cowboy Crunch, Diamond, Hikari Fire Crunch, Lava Volcano Roll, Rainbow Roll, and Red Ruby. Do not substitute unused local assets without item confirmation. See [photo inventory](results/2026-09-23-website-audit/05-SQUARE-PHOTO-SYNC.md).
- [ ] Joel spot-checks the [published Square ordering flow](https://hikarisushi-online.square.site/) and matching DoorDash, Uber Eats, and Grubhub menus on his phone.
- [ ] If prioritized, ask Square why the initial delivery quote differs from delivery plus service charge in the cart; no fee settings changed during this work.

## Resolved

- [x] 2026-10-11: Correct local DEVELOPMENT.md menu ownership; retire Ops overwrite route. Source save remains local; no website deployment.

- [x] Reconcile approved production source with main; restored and published b7908a6 via automatic Netlify build on September 27.

- [x] Preview and publish approved bottom story photo replacement; retain originals.
- [x] Publish ivory panels, approved kitchen gallery and distinct dessert/drink section; production deploy `6ab60bb601d7acd43b6d5942`.
- [x] Remove duplicate gallery imagery elsewhere in private preview, including completed bento comparison; preserve all source assets and production.
- [x] Owner approved final kitchen grid, ivory panels and corrected tall refresher; explicitly authorized publication of all approved refinements.
- [x] Joel selected warm ivory with the stronger soft shadow; publish approved choice, not the comparison controls.
- [x] Replace poor mobile Most ordered strip with swipeable photo cards, arrows, counter and visible next-card preview; preserve desktop.
- [x] Joel approved the release preview; published production deploy `6ab5f7d1aaaf04362f1dd92b` at https://hikarisojo.com .
- [x] Disable and unload `com.hikari-social.hero`; keep approved homepage hero independent of seasonal media replacement.
- [x] Integrate approved homepage with daily reviews, production-host analytics, SEO and a public-file-only release build.
- [x] Joel approved `Most ordered` in the final release, including the existing-source Mango close crop; now live.
- [x] Joel reviews the purposeful micro-animation pass: button lift/press, navigation and text-link underline movement, mobile order-bar entrance, existing one-time light drawing, and grid hover enlargement. No looping motion; production unchanged. Superseded/resolved by owner-approved September 24–25 production release; historical preview wording is no longer current.
- [x] Joel reviews the enlarged 60/40 `Find your next favorite` feature in the private preview. It intentionally retains outer margins and Hikari colors instead of matching Saffron's full-screen black block. Production remains unchanged. Superseded/resolved by owner-approved September 24–25 production release; historical preview wording is no longer current.
- [x] Joel reviews the restored six-photo grid, hover-to-grow behavior, and separate editorial study in the private preview. Production remains unchanged. Superseded/resolved by owner-approved September 24–25 production release; historical preview wording is no longer current.
- [x] Joel reviews the corrected main hero using the unaltered `sushi_eight` photo plus the separate orange/yellow bokeh background layer. No production release yet. Superseded/resolved by owner-approved September 24–25 production release; historical preview wording is no longer current.
- [x] Joel reviews the corrected private editorial concept: verified original Flares photograph as the dominant image, with AI-assisted sashimi/karaage supporting studies. Identify which qualities should guide the real shoot; do not publish concept images as menu photography. Superseded/resolved by owner-approved September 24–25 production release; historical preview wording is no longer current.
- [x] Tested texture-focused CSS crops from existing photos; Joel's broader photo-direction question led to the newer editorial concept study. No production release.
- [x] Apply authorized research refinements without replacing original design: story texture/light accent, finite motion, balanced type and interaction feedback. Verified private preview. Existing photo composition retained; authentic video needs suitable footage.
- [x] Joel reviews polished original6421; any food video requires verified authentic source footage. No production release yet. Superseded/resolved by owner-approved September 24–25 production release; historical preview wording is no longer current.
- [x] Review original preview's even photo corners. Original is Joel's preferred direction; alternate designs are no longer the active direction. Production release remains approval-gated. Superseded/resolved by owner-approved September 24–25 production release; historical preview wording is no longer current.
- [x] Compare Original (6421), At the table (6422), and Find your flavor (6423). The latter two are new compositions, replacing the styling-only interpretation. Choose/refine a design before production integration. Superseded/resolved by owner-approved September 24–25 production release; historical preview wording is no longer current.
- [x] Joel reviews the overnight private homepage at http://100.124.197.26:6421/preview. Capture revisions in the living feedback journal. The private implementation is authorized and built; production approval is still outstanding. Superseded/resolved by owner-approved September 24–25 production release; historical preview wording is no longer current.
- [x] After design approval, integrate the selected design with production analytics, live review rotation, seasonal themes and SEO; repeat release tests. Preserve isolated QR-only `/menu`. No deployment or vendor purchase is authorized by preview completion. Superseded/resolved by owner-approved September 24–25 production release; historical preview wording is no longer current.


- [x] Added the project-local `hikari-food-image-direction` skill and mandatory AGENTS routing after the second uniform-food-image miss. It requires texture, close framing, compositional variety, distortion checks, untouched originals and actual desktop/mobile component verification. September 24, 2026.
- [x] Reworked all five `Most ordered` concepts into distinct photographic roles while retaining shared 16:10 presentation and warm Hikari direction. Saved versioned masters and responsive derivatives; desktop and mobile carousel tests passed. September 24, 2026.

- [x] Added a responsive Customer Favorites strip, refined it to five sushi rolls, then elevated the visually flat compact row into tall editorial cards with overlaid names, alternating desktop rhythm, stronger mobile swipe presence, and reduced-motion-safe hover feedback. September 24, 2026.

- [x] Added interaction/state micro-animations to the private preview and verified normal plus reduced-motion behavior. Buttons, navigation, text links and the mobile sticky order bar now provide short feedback without automatic section reveals or moving food. September 24, 2026.

- [x] Enlarged the existing food/text feature to a framed 60/40 desktop split with a stacked mobile layout, Hikari teal/cranberry styling, and an optimized 1280 px WebP. Verified exact proportions, responsive source selection, five widths, and full-page screenshots. September 24, 2026.

- [x] Restored the six original Hikari photos to `From our kitchen`, separated the three editorial concepts below, removed the four-arrow overlays and photo-dialog code, and added desktop hover enlargement that resets on pointer exit. Verified at five widths plus direct computed hover-state checks. September 24, 2026.

- [x] Proved Fire Cracker through a stable location-aware Square item URL in clean desktop and mobile sessions. Verified the correct photo, $15 price, Regular variation, 20% discount, pickup and delivery availability, cart totals/fees, payment entry, and the Hikari click-measurement parameters without submitting an order. [Proof](results/2026-09-23-website-audit/13-SQUARE-ITEM-PATH-PROOF.md). September 23, 2026.
- [x] Created and visually checked the responsive Phase 3 homepage direction at desktop and mobile breakpoints. Removed the obsolete `/menu` redesign and every menu link/reference from the preview after Joel clarified that the restaurant menu is QR-only. [Preview notes](results/2026-09-23-website-audit/12-DESIGN-PREVIEW-NOTES.md). September 23, 2026.
- [x] Passed the Phase 2 mobile performance gate on the optimized local build: three Lighthouse runs scored 87/88/88, with median LCP 3.83 seconds, CLS 0, and 0.97 MiB transferred. Optimized both hero videos and self-hosted critical fonts to remove the remaining media and external-font delays. [Verification](results/2026-09-23-website-audit/11-MOBILE-PERFORMANCE-VERIFICATION.md). September 23, 2026.
- [x] Generated and validated 260 responsive AVIF/WebP variants for all 60 active menu images and five homepage food images (4.26 MiB combined), wired responsive picture selection and intrinsic dimensions, and replaced the dual autoplay hero videos with one orientation-aware source that respects reduced motion and data saver. Browser proof selected 320 px AVIF menu cards, 1280 px AVIF homepage images, and one landscape hero source on desktop. September 23, 2026.
- [x] Inventoried active homepage and `/menu` media: 60 current menu sources total 115.30 MiB; the shared renderer adds all 60 to both pages; six homepage shell images and two remote hero videos are also documented. Separated 42 unreferenced menu assets and other seasonal/history files from optimization scope. [Media inventory](results/2026-09-23-website-audit/10-MEDIA-INVENTORY.md). September 23, 2026.
- [x] Reviewed the audit and approved a gated plan for every unfinished recommendation. Created a right-panel HTML tracker and completed/browser-verified the Phase 1 CTA event implementation for Square ordering, reservations, and directions. Business reporting baseline remains separately open. September 23, 2026.
- [x] Aligned Square Online and delivery-app item selection: enabled 14 website-matched items on DoorDash, Uber Eats, and Grubhub; disabled nine extras; cleared six stray website-channel settings. All three Square delivery channels resynced, and representative adds/removals were checked on the live app menus. Catalog/POS records and prices preserved. [Change record](results/2026-09-23-website-audit/07-DELIVERY-APP-MENU-PARITY.md). September 23, 2026.
- [x] Inventoried all 60 unique current website menu entries and reconciled Square Online: enabled 11 missing orderable dishes with their website photos, hid six Square-only dishes from the website channel while preserving catalog/POS/delivery-app records, and verified public visibility. Corrected Mango Sticky Rice fulfillment and erroneous -26 stock count; final public listing no longer showed Out of stock. Joel excluded salads and mochi from Square Online and asked to leave salad listings on the website. [Full menu and change record](results/2026-09-23-website-audit/06-MENU-RECONCILIATION.md). September 23, 2026.
- [x] Removed Garlic Shrimp from the live website menu and Square online ordering only; preserved its Square catalog/POS/delivery-app channels. Verified both public menus. September 23, 2026.
- [x] Made Crab Rangoon (6pcs) available in Square by switching from the erroneous -25 stock count to availability tracking; verified Available after reload and visible on the public Square menu. September 23, 2026.
- [x] Corrected the Square `Teriyaki Chicken Bento Box` customer-facing description from salmon to chicken and verified the saved wording by reopening the item. September 23, 2026.
- [x] Sync current website menu photos to matching Square items and audit all 79 catalog rows. All 60 matchable website menu entries have Square thumbnails; the generic Canned Soda category image was intentionally not placed on individual cans. See [photo inventory](results/2026-09-23-website-audit/05-SQUARE-PHOTO-SYNC.md).
- [x] Inspect authenticated Square Plus / Order Online controls; after Joel’s explicit approval, publish banner/popup/menu improvements and verify pickup and delivery through payment entry. Temporary guest item removed; no paid order or operational integration changes. See [live change record](results/2026-09-23-website-audit/04-SQUARE-LIVE-IMPROVEMENTS.md).
- [x] Research Square Online storefront versus checkout customization, including plan gates and custom-delivery integration limits. September 23, 2026; no Square changes.
- [x] Compare Hikari and Saffron Valley / Owner: desktop/mobile design, ordering, SEO, performance, and vendor versus independent evidence. Saved September 23, 2026; no production changes.

## 2026-09-26 — Ordering analytics

- [x] Publish analytics-only link marking and configure GA cross-domain continuity.
- [x] Implement real-data reporting in the existing dashboard, including marketplace fees and cancellations.
- [x] Save receipt evidence code and verify GA custom dimension/query.
- [ ] Verify a genuine receipt event joins native GA purchase and a paid Square order.
- [x] Complete final live dashboard browser check when Computer Use initializes again. Completed September 26: supported exports deployed and browser verified; unsupported organic metrics remain explicitly unavailable.
- [x] Download requested Grubhub deposits Sep1–25 and implement its actual export schema; inspect remaining marketplace internal-funnel/advertising exports where supported. Completed September 26: supported exports deployed and browser verified; unsupported organic metrics remain explicitly unavailable.
- [x] Reconciled approved public source and build configuration in main; private drafts and unrelated local edits remain preserved.

## QR menu — resolved September 28, 2026

- [x] Compare concepts and complete owner-approved continuous menu, persistent category navigation, readable type and thumbnail transitions. Earlier filter, row-morph and sheet experiments are superseded by the final design; historical iterations remain in SESSION-LOG.md and DECISION-LOG.md.
- [x] Remove search and disable My picks; use full-screen details without X/Menu buttons and a readable, tappable swipe-return hint.
- [x] Resolve Small Tempura opening/letterboxing and obtain owner iPhone acceptance; finish category states, rapid jumps, row alignment and image fallbacks.
- [x] Commit and push approved preview as `0a88911` on `codex/website-improvements`.
- [x] Obtain explicit live-publication approval, reconcile against production menu data, publish `af52b99` to main, and verify live `/menu`, 60 photos and mobile-sized detail interaction.

No QR implementation task remains open. Post-deploy physical iPhone confirmation is not yet reported; browser verification is recorded in PROJECT-STATE.md.

- [x] Created and browser-reviewed three private Hikari animation concepts with comparison/replay controls (2026-10-01).
- [x] Owner selected the sunrise-and-waves direction; three variations created on the same Tailscale preview.
- [x] Owner selected Quiet dawn with sequential rays; preview now focuses on that single concept. No production publication requested.

- [x] Restored motion preview on Tailscale port 6433 using persistent LaunchAgent and local serving copy; HTTP and fresh browser load verified. Future edits must sync to ~/.local/share/hikari-motion-preview.

- [x] Animate Quiet dawn rays one at a time; synced and browser-verified on Tailscale.

- [x] Worker researched primary-source line-art motion guidance.
- [x] Implemented Quiet dawn wave spacing and finite staggered swell; approved rays preserved and Tailscale browser verified.

- [x] Independent agent reviewed rendered Quiet dawn motion and controls; verdict already good, with minor optional polish.

- [x] Integrate Quiet dawn in private current-homepage hero preview; verify desktop/mobile via Tailscale.
- [ ] Owner reviews hero placement; no release authorized yet.

- [x] Publish approved animated hero sunrise with stronger strokes; verified live2026-10-01.

## 2026-10-03 — Teriyaki chicken photograph
- [x] Archive approved master, upload JPEG and both untouched original angles.
- [x] Publish approved rice-bowl photo to website/QR menu; verify live desktop/mobile and image hash.
- [x] Update Square catalog and verify approved rice-bowl photo on public Square Online detail.
- [x] Submit DoorDash landscape photo; portal confirms pending review.
- [x] Verify approved photo automatically synced to Grubhub merchant rice-bowl item.
- [ ] Verify customer-facing Grubhub and DoorDash photos after sync/moderation.
- [ ] Complete Uber email verification; inspect/update and verify the exact item.
- [x] Replace chicken rice-bowl steamed-vegetable wording with approved fresh side salad description on website and connected delivery menus.

- [x] Verified new description: website release, Square catalog, Uber public menu, DoorDash reloaded item, Grubhub synced merchant menu.

- [x] Publish approved salmon bowl photo and fresh-side-salad description to website/QR and Square; verify Uber public sync, Grubhub merchant sync, DoorDash visibility status.
