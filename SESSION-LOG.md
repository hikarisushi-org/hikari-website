

## October 12, 2026 — Favorites to paid roll

Implemented the authorized end-to-end item flow using an isolated production checkout. Verified all five public item links, desktop Mango through payment entry, and phone-viewport swipe/button routing; no order placed. Dashboard checks three real item/order pairs and distinguishes unobserved paths. Unit/build and actual-data rendering checks passed. First genuine new-button purchase remains unobserved. Details: docs/favorites-ordering.md.

### 2026-09-28 — Approved customer QR menu release
Owner explicitly approved replacing the live /menu with the reviewed continuous menu. Promoted approved UI from preview commit 0a88911 onto current production main, preserving existing site analytics, QR URL and canonical menu content. Build derives data/customer-menu.json from the existing js/menu-page.js menu block, enriching photo presentation from data/menu-presentation.json. Existing homepage unchanged. Build, 9 analytics tests, 3 menu integration checks, all photo paths, 60-row rendering, rapid category jumps and full-width detail/return verified locally. Deployment verification follows publication.

## 2026-10-01 — Approved animated hero sunrise

Replaced the small static hero sunrise with the approved Quiet dawn SVG: sequential rays, a gentle staggered wave swell, and a two-unit raised sun. Increased stroke width from 3 to 3.75 for clarity at hero size. Plays once in under four seconds; reduced-motion users see the finished mark. Hero copy, photography, ordering, reviews and QR menu preserved. Owner explicitly authorized commit, push and production publication.

Release verification: a9a1e63 pushed to origin/main; hikarisojo.com serves exact built HTML and CSS. Desktop/390px rendering,3.75px strokes, active wave CSS, hero image and order destination checked; all12 existing analytics/menu tests passed. No physical-device or OS reduced-motion retest.


## October 3, 2026 — Favorites tracking
Added favorites tracking at owner request. Twelve existing tests and focused desktop/mobile browser checks pass. Verified GA item-name/interaction reporting query compatibility (HTTP 200). Publishing from clean production-derived checkout; canonical dirty preview remains isolated.

## October 12, 2026 — Kitchen gallery ordering prepared

Added named direct Square links below all six kitchen photos, retaining the existing grid and imagery. Exact item/variation IDs come from the live catalog; the existing menu identifies the sashimi photo as Sashimi Platter. Gallery uses placement `kitchen-gallery` and list `homepage_kitchen`, separate from Favorites. All six public destinations opened correctly through PiKVM. Desktop, 400px and 320px browser layouts passed; the 320px platter action opened the correct item. No purchase submitted.

Validation: 14 website unit checks, 111 theme checks, build; 36 dashboard backend/export checks and actual-data rendering. Live GA checked all five existing gallery dish/order pairs with no errors; none showed a gallery journey. First genuine post-release gallery purchase remains unobserved.

Publication pending: automatic approval review rejected production push, requiring explicit approval for public website and live dashboard deployment. Source and preview are ready.

## October 12, 2026 — Kitchen gallery released

Joel explicitly approved publishing the website and dashboard after the automatic approval gate. Website code 46b6552 deployed as Netlify 6acd0f3adae81820fc9f17a7; live HTML/CSS and unchanged Favorites scripts/QR menu match built files. Six named dish-order links retain the gallery photos and grid. All six Square public items were verified, including the Sashimi Platter identity from the existing menu. Desktop, 400px and 320px browser views passed; narrow preview platter action opened the exact item. Published narrow gallery rendered successfully. Physical iPhone testing was not performed.

Dashboard deploy scoped to lib/website_favorites.py, lib/website_ga.py, tabs/website_orders.py and current-month GA cache. Backup: /private/tmp/hikari-gallery-runtime-backup-20261012. Source/runtime hashes match; restarted service health 200; deployed actual-data rendering passes. Live GA checked five gallery dish/order pairs, zero verified gallery journeys, no query errors. Favorites kept separate. Checks: 14 website unit checks, 111 theme checks, 36 backend/export checks.

Next: observe the first genuine post-release gallery-link purchase and exact paid Square item. No test order was placed, and no completed gallery conversion is claimed.

## 2026-10-14 — Draft Hikari-hosted OAuth pages

Created a clean review checkout from current origin/main and added three draft pages under `/mail-research/`. Site build includes the pages; all relative links and CSS targets exist. Twelve existing menu/analytics checks pass. The Hikari homepage and navigation are unchanged. The pages have not been published, and the placeholder contact address remains unresolved.

Recommended the existing Hikari domain and hello@hikarisojo.com as the public contact; filled the local page draft. This is a proposal, not publication or an owner-approved contact selection.

Joel then approved the Hikari domain, `hello@hikarisojo.com` contact, and production OAuth setup. Updated the page copy to describe the now-active macOS Keychain grant store. Rebuilt the site and retained the isolated review branch pending publication.

## 2026-10-14 — Mail research pages released

Joel approved the Hikari domain, contact address, and separate production OAuth
setup. Updated the privacy copy after moving Gmail grants into macOS Keychain,
then pushed the tested review branch to `main` as `beaf8ce`. Netlify served the
three routes and stylesheet with HTTP 200. Their published text matches the
build; Netlify rewrites relative links to pretty URLs. The restaurant homepage
and menu return 200 and match the tested build byte for byte. The separate
Google project uses these live URLs for its branding.

## 2026-10-14 — Expanded mail utility disclosure

Updated the isolated `/mail-research/` pages for the full routine mailbox tool, built the site, passed the 12 existing checks, and visually reviewed all three narrow pages and links. Published from `main` commit `b9d2197`; each live route returned 200 with matching updated copy. Restaurant homepage and menu remained available.

## 2026-11-07 — Winter table menu release

Updated the canonical QR menu data, incorporated eleven approved dish photos, and tested pictured and text-only details at mobile, tablet and desktop widths. Existing menu and analytics tests passed. The homepage build and QR index controls matched the baseline.

## 2026-11-10 — Winter homepage refresh

Swapped homepage hero, feature and gallery to winter dishes, added NEW badges and announcement copy, reviewed on a private Tailnet preview with Joel, and published after his approval. 17 existing tests and theme validation passed. Live homepage HTML/CSS matched the build exactly; new images and `/menu` returned 200; preview route removed.

## 2026-11-11 - Owner review and website improvement report

Reviewed the full public Loom transcript and six sampled recording frames; compared Nami Lily, Maru, and Arigato, including Joel's corrected Maru address. Checked live Hikari homepage/menu/sitemap source and existing menu/measurement requirements. Researched the exact outbound-ordering claim through Google documentation, a public 2025 trial exhibit, Owner/independent articles, Reddit, Stack Exchange, and Square staff guidance. Sources, access failures and limits are recorded in the report.

Created the editable research report, eight-page PDF, and renderer. Rendered all pages, inspected layout including the research, action table, chart and sources, and checked PDF text/links. At report creation the recommendations were proposed and no production changes had occurred.

Joel subsequently clarified that the existing `/menu` should be discoverable and explicitly authorized the work. Captured a passing preservation baseline, removed HTML and HTTP search exclusions, added the menu to the sitemap and improved its title/description. Kept global preview exclusions and the existing menu UI/data/photos/homepage/order measurement. Full production build, 17 preservation checks and three eligibility checks passed. Published `9f40f5d` to `main`; Netlify `6af4c7765f58f0230134fa50` published at 12:52 PM MST. Six live routes returned 200 and matched the built files; menu body/homepage matched pre-change live bytes. No fresh browser interaction, paid order, Search Console inspection or Google indexing confirmation is claimed. Updated current project records to supersede the earlier separate-menu proposal; report/PDF remain the dated research baseline. Next: observe indexing and later comparable search results.

### November 11 follow-up — Six authorized discovery workstreams

Joel approved all six remaining workstreams. Captured a live 28-day Google/GA4 baseline and current read-only Square snapshot; found old GBP source cache and used fresh API data instead. Verified profile identity/hours/contact/parking. Corrected only Google Menu and website URL fields; merchant read-back passed and public Maps verified HTTPS website, while menu propagation is unverified. Third-party errors and exact unsent corrections/outreach are documented. Search Console returned SERVICE_DISABLED; a bounded Service Usage read returned AUTH_PERMISSION_DENIED, so no API/admin/identity setting was changed.

Added canonical-menu-generated visitor/lunch/story/dish and neutral review pages, menu navigation, sitemap/structured-data links, staff process, a 300-DPI card with digitally decoded QR and reusable bounded baseline collector. Retained the previous lunch source as a non-published archive. Existing menu, photos and ordering/tracking scripts were preserved. The isolated mobile Square journey reached correct pickup/cart totals; no payment was submitted. The browser context disappeared before payment-form verification; no physical-device or paid-purchase acceptance is claimed.

Full build, 17 protected checks, six generated-content/context checks and link/media/JSON-LD checks passed. Browser checks at 320/390/768/1280/1440px where relevant found no horizontal overflow; the mobile menu link opened the loaded existing menu. Taste probe had no failures; inherited brand warnings retained. Published `3e719b0` as Netlify `6af4d37282c56de49918754e`; twelve public responses match the build and live reviews return five valid rows. Private data/receipts/protection evidence were retained in the main checkout's ignored evidence directory. No raw traffic/order data enters the public Git repository. Staff review use, exact entrance/lunch offer facts, external submissions and Search Console access remain separate follow-ups.
