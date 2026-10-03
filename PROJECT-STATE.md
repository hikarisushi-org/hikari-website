# Latest release — 2026-10-01

Approved hero sunrise published via main commit a9a1e63. Live HTML/CSS exactly match the build. Desktop and390px live browser checks passed, including stroke width, active animation, loaded hero photo and no mobile overflow. Build and12 analytics/menu tests passed. Physical-phone and OS reduced-motion retests not performed. Previous production source af52b99 is the rollback reference.



### 2026-09-28 — Approved customer QR menu release
Owner explicitly approved replacing the live /menu with the reviewed continuous menu. Promoted approved UI from preview commit 0a88911 onto current production main, preserving existing site analytics, QR URL and canonical menu content. Build derives data/customer-menu.json from the existing js/menu-page.js menu block, enriching photo presentation from data/menu-presentation.json. Existing homepage unchanged. Build, 9 analytics tests, 3 menu integration checks, all photo paths, 60-row rendering, rapid category jumps and full-width detail/return verified locally. Deployment verification follows publication.


## October 3, 2026 — Favorites tracking
Favorites tracking implemented and pre-release browser verified; publication/live verification in progress on codex/favorites-tracking. See SPECS.md for definitions. Existing website design preserved.
