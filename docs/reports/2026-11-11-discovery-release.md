# Hikari discovery improvements — November 11, 2026

Joel authorized all six remaining workstreams after the existing menu's search exclusions were removed. This record follows the earlier Owner research report; it is a record of this release, not a promise of rankings or additional sales.

## Website changes

- Added a direct full-menu link to desktop/mobile navigation and useful links from the footer.
- Added `/visit/` for address, verified hours, free on-site parking, reservations, pickup/delivery instructions, cooked-dish options and preparation questions. Exact entrance directions remain unconfirmed.
- Replaced the old lunch page's separate, outdated price list with `/lunch-specials` content generated from current menu data. Prices are clearly described as regular dine-in prices. Separate promotional lunch offers remain unconfirmed and are not invented.
- Added Firefly Fusion and Citrus Mango Dream pages, chosen using recent item demand. Their primary descriptions/prices derive from the existing menu source; links preserve the already-approved Square catalog IDs. Menu edits propagate through the normal build.
- Expanded Hikari's existing light/food/welcome story at `/our-story/`, using verified restaurant and menu facts. No founder biography, award, family ownership or service claim was invented.
- Added a neutral `/review/` page and homepage review link. The review page is excluded from search and the sitemap; it is available equally to guests with any feedback.

Existing menu UI/content/photos and homepage ordering/gallery/Favorites behavior were preserved. The current page design and images remain the visual baseline.

## Google and directory audit

Hikari's authenticated Google Business Profile matches the approved website for hours, phone and address. Its attributes confirm dine-in, takeout/delivery, lunch and free on-site parking. Its Menu URL had pointed to an ordering marketplace. The Menu field was updated to `https://hikarisojo.com/menu`, and website field to `https://hikarisojo.com/`; both were read back successfully. Public Google Maps showed the corrected HTTPS website. The limited public Maps view did not expose the menu field, so public propagation of that field remains unverified.

EatOutMap has incorrect Monday/Saturday hours. RestaurantJump has an unsupported brunch label and a marketplace menu link. Exact corrections and verified listing copy are in [the local discovery packet](2026-11-11-local-outreach.md). At the website release those external changes were prepared, not submitted. Joel later authorized both requests: EatOutMap acknowledged the report and RestaurantJump email was verified in Hikari Sent; public changes remain pending. Yelp blocked automated access; a specific South Jordan Restaurantji/Tripadvisor listing was not established. Apple/Bing owner fields and Google place-action ordering links remain unverified. Do not interpret inaccessible fields as errors or absence.

## Ordering and measurement

An isolated 414px browser visit followed the actual homepage-to-Square link, changed fulfillment to pickup at the correct address, selected Citrus Mango Dream, and reached cart totals with the correct dish, discount and tip display. No payment or order was submitted. The browser context disappeared before payment-form verification. Physical iPhone behavior remains untested. The visitor page reminds guests to check fulfillment time, tip and final total; provider prices, discounts, default tips and fees were not changed.

A live Google/GA4 baseline was captured for October 14–November 10, together with a current read-only Square cache snapshot. Private aggregates/receipts are outside this public repository. No paid sales are attributed from click or cart counts alone. See [measurement definitions and the repeatable collector](../discovery-measurement.md).

Search Console's API is disabled in the existing Google project. A Service Usage read also returned `AUTH_PERMISSION_DENIED`; the existing credential cannot administer that service. An authorized Google project administrator must enable the API before property access/index coverage can be checked. No new auth client, scope grant, API setting or property verification was created.

The public `/menu` route now has mixed public/QR use. Its path alone cannot establish a QR scan. This limitation is recorded for future reporting; existing tracking definitions were preserved.

## Staff materials and local content

[Review process](2026-11-11-review-process.md), a 5×7-inch / 300-DPI PNG card, and a standalone QR are ready. Both PNG QR payloads decode to the stable first-party review URL. Joel subsequently confirmed existing review placards on every table; keep those in use, with no new printing required. The new card has not been physically printed/phone-scanned. No customer requests or replies were sent.

[Local outreach packet](2026-11-11-local-outreach.md) contains a researched shortlist, exact corrections, verified listing description and the exact Salt & Seek editorial email. Salt & Seek is an editorial opportunity; U of U Health has stated radius/rating criteria to verify; Visit Salt Lake's membership route is lower priority. At the website release no outreach had occurred. With Joel's later authorization, the Salt & Seek request was sent and verified in Hikari Sent at 2:40 PM MST; response/inclusion remain unverified. No ownership claim, membership purchase or new service signup occurred.

## Validation

Full production build, 17 protected menu/analytics checks and six generated-content/production/preview checks passed. Internal links, media references and JSON-LD passed across eight routes. Browser checks covered 320, 390, 768, 1280 and 1440px where relevant; no horizontal overflow or missing tested images was observed. Mobile navigation reached the existing loaded menu. Taste's browser probe found no failures; its warnings concern the existing brand's cream/serif/header rule, muted secondary text, small logo tagline and price typography. Those inherited choices were retained. The complete legacy browser release script remains obsolete and was not claimed to pass.

Protection baseline: `discovery-improvements-before-20261111`, SHA-256 `3bef138017cbc430238abc0de712b19c6710edf9b590d31b8bede3a91c7149d8`. Original menu/analytics test oracles and protected data/scripts were unchanged. The search-build fixture was extended for the new generator dependency; production/preview assertions were retained.

Published from `3e719b0`, Netlify `6af4d37282c56de49918754e`, at 1:43 PM MST. Twelve public HTML/style/menu-data responses returned 200 and matched the tested build byte-for-byte. The existing menu and menu JSON are unchanged. Live review function returned five valid reviews. Detailed receipts are retained privately; project records name the release. Google indexing, ranking changes, paid conversion improvement and printed-card acceptance remain distinct external outcomes.
