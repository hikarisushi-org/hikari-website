

### 2026-09-28 — Approved customer QR menu release
Owner explicitly approved replacing the live /menu with the reviewed continuous menu. Promoted approved UI from preview commit 0a88911 onto current production main, preserving existing site analytics, QR URL and canonical menu content. Build derives data/customer-menu.json from the existing js/menu-page.js menu block, enriching photo presentation from data/menu-presentation.json. Existing homepage unchanged. Build, 9 analytics tests, 3 menu integration checks, all photo paths, 60-row rendering, rapid category jumps and full-width detail/return verified locally. Deployment verification follows publication.

## 2026-10-01 — Approved animated hero sunrise

Replaced the small static hero sunrise with the approved Quiet dawn SVG: sequential rays, a gentle staggered wave swell, and a two-unit raised sun. Increased stroke width from 3 to 3.75 for clarity at hero size. Plays once in under four seconds; reduced-motion users see the finished mark. Hero copy, photography, ordering, reviews and QR menu preserved. Owner explicitly authorized commit, push and production publication.

Release verification: a9a1e63 pushed to origin/main; hikarisojo.com serves exact built HTML and CSS. Desktop/390px rendering,3.75px strokes, active wave CSS, hero image and order destination checked; all12 existing analytics/menu tests passed. No physical-device or OS reduced-motion retest.


## October 3, 2026 — Favorites tracking
Added favorites tracking at owner request. Twelve existing tests and focused desktop/mobile browser checks pass. Verified GA item-name/interaction reporting query compatibility (HTTP 200). Publishing from clean production-derived checkout; canonical dirty preview remains isolated.
