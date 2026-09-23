# SPECS

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
- Main-site rebuild/new technology remains an option for later work; preserve the permanent `/menu` address.

See [published change record](results/2026-09-23-website-audit/04-SQUARE-LIVE-IMPROVEMENTS.md) for exact observations and limits.
