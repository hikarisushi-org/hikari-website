# Mail research pages live — October 14, 2026

Joel approved the existing Hikari domain and `hello@hikarisojo.com` contact for the private read-only Gmail tool. The `/mail-research/` homepage, privacy, and terms pages are published from `main` commit `beaf8ce`. All three routes and the stylesheet return HTTP 200 from Netlify; published page text matches the approved build. Netlify rewrites links to its pretty URL form, so HTML bytes differ while content is unchanged. The restaurant homepage and `/menu` exactly match the tested build and return HTTP 200. Build, 12 existing website checks, and local narrow-browser review passed. The separate Google OAuth project now uses these live URLs.

# Kitchen gallery live — October 12, 2026

Six named gallery links and separate exact paid-dish tracking are deployed and verified. First genuine gallery purchase remains unobserved. Next: check its exact paid Square item when it occurs.

# Current gallery update — October 12, 2026

Six dish-specific gallery links verified in preview and prepared for publication. Dashboard independently checks gallery clicks against exact paid items. Publication completed after explicit confirmation. Next: observe first genuine gallery purchase.

# Latest release — 2026-10-01

## October 12, 2026 — Favorites ordering

Favorites direct links and paid-item measurement are deployed. Website release e1f4ce0 / Netlify 6acd0a149ae2261fa0b19fed; live bytes and fresh published phone-view routing verified. All five Square item links verified; desktop Mango path reached payment entry; phone viewport swipe and named order button opened Mango. See docs/favorites-ordering.md. First genuine purchase through the new button remains the only end-to-end payment evidence gate; no test purchase was created.

Approved hero sunrise published via main commit a9a1e63. Live HTML/CSS exactly match the build. Desktop and390px live browser checks passed, including stroke width, active animation, loaded hero photo and no mobile overflow. Build and12 analytics/menu tests passed. Physical-phone and OS reduced-motion retests not performed. Previous production source af52b99 is the rollback reference.



### 2026-09-28 — Approved customer QR menu release
Owner explicitly approved replacing the live /menu with the reviewed continuous menu. Promoted approved UI from preview commit 0a88911 onto current production main, preserving existing site analytics, QR URL and canonical menu content. Build derives data/customer-menu.json from the existing js/menu-page.js menu block, enriching photo presentation from data/menu-presentation.json. Existing homepage unchanged. Build, 9 analytics tests, 3 menu integration checks, all photo paths, 60-row rendering, rapid category jumps and full-width detail/return verified locally. Deployment verification follows publication.


## October 3, 2026 — Favorites tracking
Favorites tracking implemented and pre-release browser verified; publication/live verification in progress on codex/favorites-tracking. See SPECS.md for definitions. Existing website design preserved.
