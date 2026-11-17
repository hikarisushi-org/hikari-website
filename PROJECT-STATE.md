# Latest release — 2026-10-01

Approved hero sunrise published via main commit a9a1e63. Live HTML/CSS exactly match the build. Desktop and390px live browser checks passed, including stroke width, active animation, loaded hero photo and no mobile overflow. Build and12 analytics/menu tests passed. Physical-phone and OS reduced-motion retests not performed. Previous production source af52b99 is the rollback reference.



### 2026-09-28 — Approved customer QR menu release
Owner explicitly approved replacing the live /menu with the reviewed continuous menu. Promoted approved UI from preview commit 0a88911 onto current production main, preserving existing site analytics, QR URL and canonical menu content. Build derives data/customer-menu.json from the existing js/menu-page.js menu block, enriching photo presentation from data/menu-presentation.json. Existing homepage unchanged. Build, 9 analytics tests, 3 menu integration checks, all photo paths, 60-row rendering, rapid category jumps and full-width detail/return verified locally. Deployment verification follows publication.


## October 3, 2026 — Favorites tracking
Published a3a4122 to origin/main; Netlify deploy 6ac09c606659fa0009c307dd ready. Live homepage.js bytes match release. Focused live desktop and native-touch mobile browser tests pass, and 12 existing tests pass. Google-tag-generated outgoing favorites_view, view_item_list and named select_item requests verified by intercepting collection before transmission; tests do not contaminate analytics. Normal batching required a longer transport wait. Genuine customer ingestion/report population remains pending; tracking begins October 3, 2026. See SPECS.md for reporting definitions. Next: inspect genuine section reach, per-roll views and swipe/selection reports after data arrives.
