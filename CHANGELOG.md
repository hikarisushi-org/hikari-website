# Changelog

## 2026-10-11 — Menu workflow documentation

Corrected DEVELOPMENT.md to use the website MENU-DATA source and release build,
replacing obsolete instructions to generate from Ops. No website content changed.

## 2026-09-25

- Published owner-approved brighter bottom story image; no other design changes.

## 2026-09-24 — Approved design refinement

- Published as production deploy `6ab60bb601d7acd43b6d5942` after explicit owner authorization and final tall-glass approval.

- Integrated ivory panels and warm shadows, corrected white-tsuma gyoza and bento serving moment, and the full approved editorial kitchen gallery.
- Restored the editorial section with distinct mochi, tall strawberry refresher and Ramune photographs. Preserved originals and removed completed comparison controls.

## 2026-09-24

- Rebuilt mobile Most ordered interaction as native swipe cards with names below images, next-card peek, previous/next buttons and position counter. Desktop and image assets unchanged.

- Published Joel-approved homepage to https://hikarisojo.com using production deploy `6ab5f7d1aaaf04362f1dd92b`. Removed draft-wide noindex while retaining QR menu noindex. Hero automation remains disabled.

- Prepared an unpublished Netlify release draft from the approved design; extracted homepage styling/interactions, connected daily reviews, gated analytics to production hosts and preserved QR menu behavior with noindex.
- Added allowlisted release build and responsive browser verification. Retained source images and replaced only Mango Dream's release derivative with a crop of the existing asset.
- Disabled the local automated hero generator and protected the new homepage hero against theme media swaps.

- Added the project-local `hikari-food-image-direction` skill and mandatory AGENTS routing. Future Hikari dish-image work must check visible texture, tight framing, set-level compositional variety, distortion, responsive presentation and untouched originals before completion.
- Rebuilt the five private `Most ordered` editorial concepts as a deliberately varied set: Firefly wide establishing, Citrus Mango Dream close-up, Playboy low three-quarter, Strawberry Blossom macro and Hot Cheetos chopstick action. Added versioned masters plus 640/1280 WebP derivatives and strengthened the preview verifier to exercise every carousel state at desktop and mobile sizes.

- Added a sushi-only favorites feature to the private preview. After comparing five creative treatments, adopted Flavor Spotlight as the single visible layout: one immersive image with a selectable five-roll list and a mobile horizontal selector. Joel supplied the `Most ordered` sequence as Firefly Fusion, Citrus Mango Dream, Playboy, Strawberry Blossom and Hot Cheetos Roll; wired each to its matching current website photo. One general Square action preserves unverified direct-item-link boundaries.
- Normalized the five spotlight images to the same rendered dimensions, `cover` behavior and zero transform. Corrected Citrus Mango Dream's optical focal point from center to 68% vertically so the dish reads centered at the same zoom level.
- Added five non-destructive 16:10 AI-assisted editorial masters under `assets/images/editorial/most-ordered/` plus 640/1280 WebP derivatives under `assets/images/generated/editorial/most-ordered/`; wired only the private preview to them. Added an asset README documenting sources, treatment and the production-fidelity limitations.

- Added restrained interaction micro-motion to the private preview: button lift/press feedback, animated navigation and text-link underlines, and a short mobile sticky-order entrance. Preserved one-time light drawing and grid hover behavior; reduced-motion disables the new effects and nothing loops.

- Enlarged the private preview's `Find your next favorite` section into a framed 60/40 desktop food-and-copy feature with Hikari teal/cranberry styling and a stacked mobile layout. Added an optimized 1280 px WebP for the larger image treatment; production unchanged.

- Restored the six-photo Hikari kitchen grid, moved the editorial photo study into a separate section, removed the four-arrow photo controls/dialog, and added desktop hover enlargement with pointer-exit reset, touch stability and reduced-motion support. Private preview only.

- Added a nondestructive orange/yellow bokeh light layer to the corrected private hero, masked to the open background so the verified dish and plate pixels remain unchanged.

- Corrected the private preview's actual top hero after visual source matching: replaced the altered square `sushi_row` image with the unaltered `sushi_eight` website photograph and nondistorting responsive cropping. Production unchanged.

- Removed the geometrically inaccurate generated Flares image from the private preview. Restored the verified original photo with deterministic WebP conversion and nondistorting CSS crop/zoom; documented the failed preservation approach.

- Added a private editorial photo experiment using three clearly labeled AI-assisted transformations of existing Hikari subjects; changed the preview gallery from equal tiles to dominant/detail/action hierarchy. Added the real-photo shooting guide and concept provenance. Production imagery unchanged.

- Reframed four existing gallery photos as true texture-focused close-ups without generating or substituting food imagery. Preserved the original page layout and kept two wider food shots for context; private preview only.

- Visible original-preview refinements: editorial hero type, sunrise emblem, larger illustration, fiber texture and accessible photo close-ups with direct ordering. Same layout/palette; no production release.

- Polished original private design without changing composition: subtle story texture, light drawing accent, on-view finite animation, balanced heading wraps and accessible interaction feedback. Added detail-polish browser checks; production unchanged.

- Refined preferred original preview: replaced asymmetric photo masks with uniform12px desktop/8px mobile corners. No other design or production changes.

- Built two independent homepage compositions following Joel's correction: At the table and Find your flavor. Added a keyboard-operable food-photo category showcase, standalone allowlisted preview servers6422/6423 and comparison links. Original preview and production untouched except comparison navigation in private original.

- Added two scoped private styling alternatives and comparison links: Warm linen and Porcelain blue. Original remains default; content, ordering and QR isolation preserved.

- Rebuilt the private homepage preview from the full visual journal: bright celadon/porcelain, cranberry CTAs, responsive food-led layout, six-image gallery, concise story/review/visit sections and accessible native mobile navigation. Production files and Square settings remain unchanged. Added isolated browser verification and saved screenshots/Lighthouse evidence.

- Documented visual discovery feedback and interpretations; corrected SPECS to distinguish the earlier unapproved preview from confirmed preferences. Linked the living journal into project handoff files.

All notable changes to this repo will be documented here.

## 2026-09-23

- Added the three-restaurant Owner comparison and business recommendation; corrected tracker/project handoff to show design implementation paused and preview unapproved. No production changes.

### Changed

- Reworked the private homepage preview around Joel's food-first reference: two alternating feature panels, a six-photo kitchen gallery without names/prices/descriptions, and three restaurant-character panels. Ordering CTAs use Square, including the proven Fire Cracker deep link; the QR-only restaurant menu remains completely absent. No production deployment.
- Tightened the restaurant-menu boundary: removed all `/menu` links and references from the private homepage preview and specified QR-only access with no website navigation, CTA, sitemap, or structured-data discovery path.
- Corrected the redesign boundary after owner clarification: `/menu` remains the separate restaurant menu used instead of paper menus. Removed its obsolete redesign from the private preview and changed homepage actions to label and link it as Restaurant menu, distinct from Square ordering.
- Proved a stable location-aware Square deep link for Fire Cracker, verified pickup and delivery carts on desktop and mobile through payment entry, and updated the featured-dish analytics test to use the live URL and item name. No order, Square setting, deployment, or production page changed.
- Added a prominent “Working now” panel to the roadmap tracker with the exact active gate, waiting party, next phase, independent blocker, last-updated time, and a direct link to the current preview.
- Replaced multi-megabyte menu image delivery with 260 generated AVIF/WebP variants, responsive picture selection, intrinsic dimensions, and intentional lazy loading across the shared menu and homepage food imagery. Replaced two simultaneous hero videos with one orientation-aware source that respects reduced motion and data saver; added cache-busted asset URLs and repeatable media validation.
- Re-encoded the current hero reels to 297 KiB landscape and 406 KiB portrait H.264 sources, self-hosted and preloaded critical Inter/Playfair Display fonts, disabled stale theme-JSON caching, and limited the homepage's initial menu render to six featured dishes while preserving the full `/menu` catalog. The final optimized build passed three mobile Lighthouse runs at a median 88 performance, 3.83-second LCP, zero CLS, and 1.13 MiB transferred.
- Repaired CTA measurement for the current Square ordering domain while preserving reservation and directions events. Added page/placement/destination parameters, a browser diagnostic mode, and focused tests; no production deployment yet.
- Aligned item visibility across Square Online, DoorDash, Uber Eats, and Grubhub: 14 website-matched items enabled on all delivery apps, nine non-menu items disabled there, and six stray Square website-channel settings removed. Preserved POS records and prices. [Live verification and limits](results/2026-09-23-website-audit/07-DELIVERY-APP-MENU-PARITY.md).
- Reconciled Square Online ordering with the current website menu: enabled 11 missing dishes using the previously synced website photos, hid six Square-only dishes from the website channel, corrected Mango Sticky Rice's shipping-only fulfillment and -26 stock count, and verified public visibility/orderability. Kept salads and mochi off Square Online per Joel; left website salad listings unchanged at his request. [Menu inventory and verification](results/2026-09-23-website-audit/06-MENU-RECONCILIATION.md).
- Removed Garlic Shrimp from the live Hikari website menu and deselected only its Square `Online – Website & Profile` channel, preserving POS and delivery-app channels. Switched Crab Rangoon (6pcs) from stock-count tracking (-25) to availability tracking so it is orderable. Verified both public menus; no price or recipe changes.
- Corrected the live Square `Teriyaki Chicken Bento Box` customer-facing description to say chicken rather than salmon; verified the saved text after reopening the item. No price, modifier, photo, availability, menu, or channel setting changed.
- Synced current website menu photos into matching live Square items, replaced older item primaries where needed, and audited catalog thumbnail coverage. All 60 matchable website menu entries now have images; Square-only missing-photo gaps are documented separately. No pricing, menu assignment, modifiers, availability, channels, or integrations changed. See [photo inventory](results/2026-09-23-website-audit/05-SQUARE-PHOTO-SYNC.md).
- Published native Square Online ordering improvements after Joel’s approval: hid the oversized main banner, selected compact photo-and-description item cards, and deactivated the blocking 20% announcement without changing the discount.
- Verified live pickup and delivery through payment entry, mobile fixed View order behavior, and desktop layout; removed the temporary cart item. Restored the original header setting after a sticky-header experiment did not improve cart access. Saved [results and limitations](results/2026-09-23-website-audit/04-SQUARE-LIVE-IMPROVEMENTS.md).

### Added

- Approval-gated responsive homepage and `/menu` design preview with real Hikari photos, current popular-dish names/prices, a shortened ordering-first hierarchy, dine-in menu/search/advisory treatment, and a private Tailscale-only review server. No production publication.
- Active media inventory separating the 60 current menu sources and homepage/hero media from unreferenced historical assets, with source weights, largest offenders, and the responsive-delivery boundary.
- Authenticated four-week Square baseline for the website roadmap: 15 completed online orders, $602.90 net online sales, and $40.19 average order value for August 26–September 22. GA4 remains explicitly access-blocked rather than estimated.
- Tracker-only private Tailscale server helper so the progress board can stay rendered in a remote computer's Codex Browser panel without exposing the repository or publishing the tracker publicly.
- Right-panel HTML implementation tracker with 34 proof-gated roadmap items; 13 are currently complete.
- Measurement record separating GA4 link behavior from Square orders/sales and preserving the September 23 mobile performance baseline.
- Phased implementation plan for every unfinished website-audit recommendation: analytics, mobile performance, design, a one-item Square proof, static-first implementation, SEO/accessibility, release verification, and post-launch measurement. The plan explicitly excludes already-completed Square, catalog, menu-parity, and review-rotation work.
- Square-hosted ordering customization follow-up: supported controls, checkout limits, account-specific unknowns, and a bounded editor inspection recommendation. No settings changed.
- Bounded Hikari / Saffron Valley / Owner comparison in `results/2026-09-23-website-audit/`: recommendation, measured design reference, SEO/vendor-evidence notes, screenshots and PageSpeed evidence. Analysis only; live website and ordering configuration unchanged.

## 2026-08-20

### Changed
- Updated the documented GitHub SSH identity from the retired automation key to the active `arcos33` key.

## 2026-06-12

### Added
- **Hero notice banner** (`components/notice-banner.html`): reusable, documented temporary-announcement component — frosted dark-glass pill with a gold pulsing status dot, designed to sit in the hero over the video. Self-contained style + markup + optional timezone-proof auto-hide script. First deployed as a "Closed for lunch today / dinner resumes at 4:30 PM" notice, set to auto-hide at 3:00 PM MDT.

## 2026-05-27

### Fixed
- **Memorial Day hero cleanup**: Restored the default homepage hero video sources (the Memorial Day clip was still hardcoded in `index.html` after the theme’s date range ended).
- **Theme loader correctness**:
  - Clears the `.theme-badge` text when a theme doesn’t define `badgeText`.
  - Improves hero handling so “default” reliably restores the standard hero reels.
  - Ensures themed floating containers (e.g. `.floating-stars`) are hidden/cleared when a theme disables floaters.

### Added
- **Hamburger Day (2026) theme** (`themes/hamburger-day-2026.json`):
  - One-day auto theme for **2026-05-28**.
  - Desktop hero uses `assets/images/hamburger_day.png`.
  - Mobile hero uses `assets/images/hamburger_day_portrait.png`.
- **Hero image source switching**: Added support for `content.heroImageSources` so a theme can supply separate landscape/portrait hero images.

### Changed
- **Hamburger Day hero layout**: Hides the standard hero badge/tagline/title/subtitle for this theme so the promo artwork isn’t covered; keeps CTA buttons visible.
# September 24, 2026 — Private preview

- Removed repeated food-photo sections and completed bento comparison; approved gallery and source assets preserved.

## 2026-09-26 — Ordering analytics

Implemented the practical ordering measurement system in the existing dashboard. Live GA4, Square and Google Ads collectors, exact GA transaction-to-Square matching, day/week/month views, financial definitions, CSV downloads, DoorDash official financial/marketing reports, and manual Uber/Grubhub statement imports. Private caches retain only whitelisted reporting fields. No new roles, enterprise service, paid orders, campaigns or promotions.

Website production deploy `6ab76537d007357abec5c0ec` changes analytics links only. Live HTML/CSS preserved. GA cross-domain rules and three event dimensions saved; browser verified decorated links and adopted client/session IDs. Square storefront marker works, but /s/checkout does not include custom header. A receipt-only evidence event is saved and readable; a genuine receipt/native purchase/paid Square match remains awaiting data.

Square connected-channel totals and marketplace settlement stay separate. Grubhub's signed cancellation exposes a paid-canceled Square record; Uber pending adjustments and payout cohorts differ. Source, courier, fulfillment and payment are independent. Reports never equate a click or referral with causal sales.


## 2026-09-26 — Browser recovery and merchant exports

Deployed Uber conversion and campaign CSV imports and Grubhub deposits with independent coverage dates; updated bundled 40-metric evidence report.

## 2026-09-27 — Production design recovery

Restored the approved production design and published its complete public source/build configuration to main (b7908a6; Netlify 6ab9b2f698c1960008494922). Scheduled Google review commits now build the approved website.

## 2026-09-27 — Private QR menu comparison

Added three interactive menu prototypes under results/2026-09-27-qr-menu-concepts with current menu snapshot, search, details, photo toggle and temporary saved picks. Public files untouched.

### QR menu option 2 refinement — 2026-09-27

Refined private option 2 typography, category tiles, icons and section navigation. Preserved original as sample-before-category-refresh.html.


### 2026-09-27 — Sushi preview filters
Updated option 2 HTML preview with Sushi grouping and optional filters; preserved original dish data.


### 2026-09-27 — Continuous Sushi navigation
Replaced private option 2 Sushi filters with sticky section jumps. Combined Nigiri & Sashimi; kept Hand Rolls as its own section.


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

Private QR preview: connected dish-detail opening, interactive scale/backdrop dismissal, velocity-aware release, cancelled gesture snap-back, prevention of drag-generated handle clicks, and stable category navigation while the background is locked.


### 2026-09-27 — Full-screen return to source correction

Private menu: full-height detail page, square corners, downward chevron instead of sheet grabber; expansion and dismissal use the selected row rectangle. Return uses uniform image scaling and clipping to avoid photo distortion.


### 2026-09-27 — Independent whole-photo return

QR preview: removed clip-based page collapse; added independent whole-photo scale/translation and separate detail fade. Preserve scroll lock and cancelled-swipe return; hide transitional overflow.


### 2026-09-27 — Photo-to-row landing

Private menu photo return now lands in a white surface that expands to row bounds; original typography fades in at normal size. Temporary row/animation nodes are cleaned up and original visibility restored.


### 2026-09-27 — Populated row return

Private QR preview: row contents now grow together as the shrinking photo fades; removed separate blank surface and late text reveal.


### 2026-09-27 — Row overlap correction

Row landing starts at 60ms and completes at 360ms; photo fade starts at 403ms, ensuring populated row is ready first.


### 2026-09-27 — Tiny thumbnail experiment

Private preview: 28x28 contain-fit, lazy-loaded thumbnails beside dish names; uniform photo transitions target thumbnail bounds; row morph bypassed for this experiment.


### 2026-09-27 — Direct thumbnail transition

Removed row landing code and fallback row geometry. Photo now grows from and shrinks into thumbnail in a single 300ms transition, without delayed hold/fade stages.


### 2026-09-27 — Stable Small Tempura opening

Detail surface now owns scrolling inside a fixed-size dialog; moving photo cannot change content scrollbars. Reset/focus before measuring and reserve image aspect ratio from loaded thumbnail.


### 2026-09-27 — Browser toolbar resize correction

Photo height uses 54svh frozen in pixels for each opening. Width changes (e.g. rotation) recalculate it. Stable scrollbar gutter prevents narrowing when available height shrinks. Added viewport-resize-check.html regression fixture.


## 2026-09-27 — Owner-approved QR menu checkpoint

Checkpoint private customer QR-menu exploration: continuous category navigation, approved readable type, tiny thumbnails, full-screen dish details, direct photo transitions, scroll locking and stable photo sizing across mobile browser toolbar changes. Preserved comparison versions, snapshots and verification evidence.


### 2026-09-27 — Detail presentation refinement

Private detail refinement after checkpoint: inset contain-fit photo with modest corners, explicit Menu return action and category context, stronger title/price hierarchy, consistent spacing and swipe discoverability hint.


### 2026-09-27 — Swipe hint and Sushi navigation fix

Private preview: larger darker swipe instruction, no top Menu button. Added navigation-jump state and final alignment so scrollspy cannot toggle Sushi subnav mid-scroll and disrupt destinations.


### 2026-09-27 — QR preview reliability and photo edges
Private QR preview: shortened redundant Bento Box dish labels; made detail photos full width; canceled superseded navigation and stale completion callbacks; reserved image dimensions and added loading/error feedback.


### 2026-09-27 — Remove phone photo letterboxing
The remaining 54svh maximum height shrank contained photos inside a full-width box on shorter phone viewports. Removed that cap: intrinsic proportions and width now determine photo height. Browser confirms Small Tempura is square and exactly view width; phone copy synced. Owner iPhone verification pending.


### 2026-09-27 — Preview finishing polish
Strengthened selected/pressed category styles; aligned title, thumbnail and price columns; added quiet thumbnail placeholder icons; preserved description/return-hint breathing room. Narrow browser preview checks: all 60 rows have no horizontal overflow or title/price collisions; long Flares of Hikari detail fits horizontally and return hint has 36px top padding. Phone copy synced; no deployment.


### 2026-09-28 — Approved QR preview push checkpoint
Approved full-width dish detail, readable return hint, robust category jumps, photo-loading fallbacks, shortened Bento labels, and finishing polish saved on codex/website-improvements. Narrow layout checks covered all 60 rows; owner accepted full-width photos on iPhone. Preview only; production files excluded.


## 2026-09-28 — Customer QR menu published

Published the approved continuous menu to `/menu` from main `af52b99`, Netlify `6aba040f144ffe000820008b`. The production build now derives customer menu JSON from existing canonical dish data and adds optimized photo metadata. Preserved homepage, analytics, prices/descriptions and the permanent QR route; removed private-preview labeling.

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

## 2026-10-01 — Implement gentle wave swell

Refined Quiet dawn curves for consistent spacing and added finite CSS path morphs: upper starts 2.3s, lower follows 140ms later, each lasts 1.5s. Endpoints anchored; small internal displacement, no loop; approved rays preserved. Synced persistent Tailscale serving copy. Browser captured 120 distinct computed geometry frames returning to original geometry; pause and still mode verified. Finished rendering inspected. Live website unchanged.

## 2026-10-01 — Private homepage hero integration

Owner requested seeing Quiet dawn in the existing hero icon position. Created homepage.html and homepage/ CSS/JS in the motion preview from a fresh production HTML/CSS snapshot; replaced hero pseudo-icon with scoped decorative animated SVG (88px desktop,72px mobile). Preserves approved rays, raised sun and swell; static reduced-motion fallback. Uses existing production photos without edits. Preview excludes production measurement and remote theme/review refresh scripts; review excerpts remain snapshot content. Synced to persistent Tailscale service: http://100.124.197.26:6433/homepage.html. Desktop and390px browser appearance inspected, no mobile overflow; five ray elements, wave animations and hidden original icon checked; no console errors. Production unchanged. Next: owner reviews exact hero placement before any release.

## 2026-10-03
- Published owner-approved teriyaki chicken rice bowl image with dated, cache-safe image paths and square presentation metadata (`431f4f0`). Archived approved master/upload JPEG and both original angles; no other menu fields changed.


## 2026-10-03 — Delivery photo continuation

Updated Square rice-bowl primary image and verified public detail. Submitted DoorDash landscape derivative for review. Grubhub merchant photo synced automatically from Square. Archived landscape assets and proof.


## 2026-10-03 — Approved description release

Approved rice-bowl description released in 9a780f9: Tender chicken glazed in sweet-savory teriyaki sauce over white rice, served with a fresh side salad. Live website JS and Uber public menu verified; Square catalog readback verified with all non-description fields unchanged; DoorDash saved/reloaded item and Grubhub synced merchant item verified. User also confirmed photos look correct across delivery apps. Customer-facing DoorDash/Grubhub description checks remain distinct from merchant verification.


## 2026-10-03 — Salmon bowl release

Published owner-approved jasmine-rice salmon image and fresh-side-salad description in 398764d. Website desktop1440/mobile390 detail inspected; build and 9 analytics tests passed. Square exact rice-bowl item CNJNTCWWEUNX4VDSQACF2A2N updated with image B62ZRFHCZZORZF2AE2D5F7BC; public detail visually verified; unrelated fields preserved. Uber public image/description verified. Grubhub merchant image/description sync visually verified. DoorDash description synced from Square; photo now reports visible, subject to later review. DoorDash manual-description override was declined to preserve POS synchronization. Approved master, landscape derivative and original references archived in assets/images/source/2026-10-03-teriyaki-salmon. No bento changes.
