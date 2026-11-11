# Discovery and guest information released — November 11, 2026

Published `3e719b0` to origin/main, Netlify `6af4d37282c56de49918754e`, at 1:43 PM MST. Visitor/lunch/story and Firefly Fusion/Citrus Mango Dream pages, menu navigation, review page and sitemap are live. Twelve public HTML/style/menu-data responses returned 200 and matched the tested build byte-for-byte. Existing menu and data bytes stayed unchanged. Live review function returned five valid reviews and the same total as public Maps. Full build, 17 protected checks, six content/context checks and narrow/tablet/desktop browser review passed. [Release detail](docs/reports/2026-11-11-discovery-release.md).

Google profile Menu and website fields were updated and read back; public Maps verified the HTTPS website. Public menu-field propagation remains unverified. Staff [review materials](docs/reports/2026-11-11-review-process.md) and [local outreach/correction packet](docs/reports/2026-11-11-local-outreach.md) are ready. Joel subsequently authorized the two directory fixes: EatOutMap accepted the public correction report and RestaurantJump correction email was verified in Hikari Sent at 2:29 PM MST. Both listings still showed old fields immediately afterward; public changes await their action. Other editorial outreach, review replies and ownership claims remain unsent. Joel confirmed review placards already exist on every table; keep those in use and do not require new printing. The newly prepared card remains unused.

Current Google/GA4 and Square snapshots are retained outside this public repository in the main checkout's ignored `.ai/context-logger/evidence/discovery-20261111/`. Search Console's API is disabled and the existing credential cannot administer it. Property access/index coverage, paid same-session attribution and ranking improvements remain unverified. `/menu` now has mixed public/QR use; path alone is not scan evidence. [Measurement rules](docs/discovery-measurement.md).

NEXT ACTION: resolve Google project-admin/API access before checking Search Console; retain the existing table review placards and confirm planned lunch-special details and entrance directions before adding them (Joel confirmed no separate lunch specials yet; planned this week). No recurring polling or new paid service was installed. Temporary review server/tabs are task-owned and closed at handoff.

# Existing menu search eligibility — November 11, 2026

Published the authorized change to the existing [public/QR menu](https://hikarisojo.com/menu) from `main` commit `9f40f5d`, Netlify deploy `6af4c7765f58f0230134fa50` (12:52 PM MST). Production HTML and HTTP headers allow indexing; canonical `/menu` is now in the sitemap. Preview builds retain global noindex. Public `/menu`, `/menu.html`, sitemap, robots, homepage and menu JSON returned 200 and matched the tested build. Menu body and homepage matched their pre-change live bytes; dish/photo/ordering code was preserved. Full build, 17 protected checks and three search-eligibility checks passed. No UI redesign or new ordering flow occurred.

Google indexing and ranking improvement remain unverified. No Search Console indexing request was submitted. NEXT ACTION: check indexing and search performance at a later meaningful checkpoint; avoid repeated unchanged ranking scans.

The earlier eight-page [research report](output/pdf/hikari-website-improvement-report-2026-11-11.pdf) and [editable source](docs/reports/2026-11-11-hikari-website-improvement-report.md) remain a historical pre-change baseline. Joel's later decision to reuse `/menu` supersedes its separate `/food` proposal. Other proposals remain unimplemented. Owner's failed scan and unverified score methodology still limit its ranking/customer claims; no reviewed evidence establishes an automatic ranking penalty for a legitimate Square order click.

# Winter homepage refresh — November 10, 2026

Homepage now features the winter menu: Pink Lotus hero and Cowboy Crunch feature with NEW-seal name badges, a "New this winter" callout, a NEW link to /menu under the hero, and a gallery of Coco Nirvana, Teriyaki Chicken Don, Jalapeño Kampachi, Tempura Don, Teriyaki Chicken Bento Box and Beef Don with verified Square item links. Joel approved the Tailnet preview before release. Published from `main` and verified live on 2026-11-10: homepage HTML and CSS match the build byte-for-byte, and all new images and `/menu` return 200. The temporary preview route (Tailnet port 9462) was removed. Source dish photos for new items live in hikari-ops `printable-menu/` (not the Drive Food Photos folder).

NEXT ACTION: add homepage photos for Red Ruby, Kiwi Minaj, Shrimp Shady and Spider Roll once real photos exist.

# Winter QR menu — November 7, 2026

The winter table-menu release uses the approved whole- and half-dollar prices and dishes. The existing permanent URL remains `/menu`. Mochi is offered on the table menu. The 12 retired dishes still present online were removed from the menu data and featured duplicates. Garlic Shrimp was already absent. Build, menu and analytics checks, and phone/tablet/desktop interaction checks passed. The remaining photo items are listed in ACTION-ITEMS.md.

# Mail research pages live — October 14, 2026

Joel approved the existing Hikari domain and `hello@hikarisojo.com` contact for the private Gmail mailbox tool. On October 14, the published privacy and terms pages were updated for read, send, draft, label, archive, and recoverable Trash actions; permanent message deletion is excluded. The updated live pages returned 200 and matched the tested text. The `/mail-research/` homepage, privacy, and terms pages are published from `main` commit `beaf8ce`. All three routes and the stylesheet return HTTP 200 from Netlify; published page text matches the approved build. Netlify rewrites links to its pretty URL form, so HTML bytes differ while content is unchanged. The restaurant homepage and `/menu` exactly match the tested build and return HTTP 200. Build, 12 existing website checks, and local narrow-browser review passed. The separate Google OAuth project now uses these live URLs.

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
