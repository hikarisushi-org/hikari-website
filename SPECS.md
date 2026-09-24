# SPECS

## Homepage design direction — September 23, 2026

- Keep the homepage food-first: an asymmetric hero, alternating food-and-copy panels, a six-photo `From our kitchen` gallery, restaurant-character panels, reviews, and visit information.
- The kitchen gallery contains photography only beneath its heading: no visible item names, prices, descriptions, or per-photo actions.
- Restaurant-character panels may explain real Hikari experiences such as sharing sushi, weekday lunch, and reservations; do not invent promotions, buffet service, prices, or unverified restaurant claims.
- General ordering CTAs open the Square storefront. A dish-specific CTA may use a Square deep link only after its location and item identifiers pass the existing clean-session proof gate.
- Preserve Hikari's mist, teal, coral, Playfair, and Inter visual identity; Saffron Valley is a structural reference, not a brand or layout to copy.
- Keep the QR-only restaurant menu completely absent from homepage navigation, copy, CTAs, metadata, and discovery surfaces.

## Website measurement contract — September 23, 2026

- `click_order_online` means a customer clicked from Hikari to `hikarisushi-online.square.site`; it is not a completed order or sale.
- `click_reservations` tracks the Carbonara reservation destination. `click_directions` tracks the Google Maps directions destination.
- Each event includes `page_path`, `cta_placement`, and `link_url`. A future featured-dish CTA may also include `item_name`.
- Current placements are `navigation`, `hero`, `visit`, and `footer`.
- Completed orders, net online sales, and average order value come from Square. Organic visits and unique order-link clickers come from GA4.
- Keep the first-party module under the neutral `js/site-actions.js` filename and load it with the existing bottom-of-page script pattern. Browser verification showed tracking-like filenames and the deferred head placement were not observable in the test surface; do not claim analytics completion from unit tests alone.

See [measurement boundary and baseline](results/2026-09-23-website-audit/09-MEASUREMENT-BASELINE.md).

## Menu content policy — September 23, 2026

- Use the current Hikari website menu as the item-presence baseline for Square Online, DoorDash, Uber Eats, and Grubhub, except for Joel's explicit exclusions.
- Do not offer Sunrise Salad or Sweet Summer Salad on any online ordering channel because Hikari does not offer them. Leave their website listings unchanged until Joel requests a website edit.
- Do not offer mochi ice cream on any online ordering channel because it would melt; its website listing remains.
- Current website food photos are the photo source for matching Square items. Preserve Square catalog/POS records when changing online visibility; set the delivery-app channels to match the approved online item list.
- Square Online items that are offered must have a Dine-In Menu group, the `Online – Website & Profile` channel, pickup/local-delivery eligibility, a correct photo, and Available status. No Square or website price updates were authorized by this item-presence pass.

See [full menu and Square reconciliation](results/2026-09-23-website-audit/06-MENU-RECONCILIATION.md).

- Align item visibility across the four online channels while preserving Square catalog/POS records, prices, modifiers, and existing app integrations. [Delivery-app parity record](results/2026-09-23-website-audit/07-DELIVERY-APP-MENU-PARITY.md).

## Ordering-flow constraints — September 23, 2026

- Primary goal: make selecting pickup/delivery, choosing food and reaching payment clear and easy; avoid enterprise-scale implementation.
- `hikarisojo.com` remains the custom website. Online ordering is Square-hosted at `hikarisushi-online.square.site` using Square Plus and the Order Online template (authenticated confirmation).
- Preserve working Square POS/KDS/provider integrations. The approved presentation pass does not change prices, discounts, fees, hours, payment connections or fulfillment eligibility.
- Final native configuration: main banner hidden; compact list-style item cards; announcement pop-up inactive; original Reveal on scroll up header behavior retained.
- Preserve the existing 20% discount. Native mobile View order appears after adding food; no custom checkout/API delivery implementation is in scope for this pass.
- Verification: mobile 390 × 844 and desktop 1365 × 900 browser views; representative pickup and delivery through payment entry only. A completed order, driver dispatch and KDS receipt require separately authorized operational testing.
- Main-site rebuild/new technology remains an option for later work. The permanent `/menu` route is a QR-only operational restaurant menu used instead of paper menus. Preserve direct access and existing behavior, but do not link, mention, index, include in a sitemap, or reference it in public-site structured data.

See [published change record](results/2026-09-23-website-audit/04-SQUARE-LIVE-IMPROVEMENTS.md) for exact observations and limits.
