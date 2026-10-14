

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
