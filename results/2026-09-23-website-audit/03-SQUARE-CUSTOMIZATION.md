# What can we change in Hikari’s Square ordering flow?

September 23, 2026 · Read-only follow-up · No settings changed

**Later update:** This document records the initial research stage. Hikari’s authenticated editor has since been inspected, Square Plus and Order Online confirmed, and Joel authorized native improvements that were published. See [the live changes and verification](04-SQUARE-LIVE-IMPROVEMENTS.md), which supersedes the plan/template and mobile-cart unknowns below. The mobile storefront has a native fixed View order button after adding an item.

**Conclusion: Square gives us meaningful control over the storefront, but not unrestricted control over checkout.** The large photo/menu transition that confused Joel is a sensible first target for the native editor. A faithful reproduction of Owner’s complete ordering interface is not something these controls guarantee.

This assessment combines Joel’s screenshots, the earlier live storefront inspection, and current Square documentation. It is **not an inspection of Hikari’s authenticated editor or subscription**. No Square Dashboard tab was available in the connected browser inventory; no login or setting change was attempted. “Documented” below means Square supports the capability; its exact availability on Hikari’s template still needs confirmation.

## Keep the two surfaces separate

- `hikarisojo.com`: the custom website; its ordering links and surrounding explanation are ours to redesign.
- `hikarisushi-online.square.site`: Square’s storefront, item selection, cart and checkout. These are controlled through Square, not this repository’s CSS.

The supplied `/s/cart?location=…` address is a cart route, not the right default destination for someone who has not chosen food. Preserve the distinction between entering the menu and reviewing an existing cart.

## Controls that matter for Hikari

| Current friction | Documented control | Practical recommendation / qualification |
|---|---|---|
| Huge slideshow between delivery selection and food | Main-banner/slideshow editing; section removal and rearrangement where the section permits it. [Banner](https://squareup.com/help/us/en/article/6995-galleries-and-slideshows) · [Sections](https://squareup.com/help/us/en/article/6860-adding-sections-to-your-pages-in-square-online-store) | First inspect whether this is the main banner or an image-gallery section. Remove it from the ordering page, or use a compact treatment if removal is unavailable. Exact toggle/height control is unverified. |
| Food choices start too far down | The restaurant-oriented **Order Online** template supports menu order, popular items, recent orders and related-item suggestions. [Ordering pages](https://squareup.com/help/us/en/article/6861-create-an-order-online-page-with-square-online-store) | Put purchasable food first. Check the current template before switching anything; do not assume the screenshots prove which template variant is enabled. |
| Storefront feels different from Hikari | Preset styles and individual colors/fonts/shapes; expanded controls for buttons, spacing and icons. [Styles](https://squareup.com/help/us/en/article/7820-choose-themes-for-your-square-online-site) · [Elements](https://squareup.com/help/us/en/article/7797-design-and-customize-your-square-online-website) | Match branding, improve text/button contrast and reduce empty space. Expanded element controls are listed for Plus/Premium plans. |
| Discount interrupts entry | Promotional pop-ups can be edited or removed. [Pop-ups](https://squareup.com/help/us/en/article/6956-add-a-pop-up-or-banner) | Prefer a compact offer message if the active layout permits it. Removing an announcement is separate from changing the discount itself. This does **not** establish control over the pickup/delivery selection dialog. |
| Pickup/delivery choice feels like a dead end | Default fulfillment is configurable. Pickup and delivery also have hours, preparation and scheduling settings. [Checkout options](https://squareup.com/help/us/en/article/6859-checkout-options-with-square-online-store) · [Delivery setup](https://squareup.com/help/us/en/article/8438-set-up-delivery-options-with-square-online) | Check defaults and accurate times. A documented default is not proof we can skip the first dialog, change its wording, or automatically scroll after closing it. “Tomorrow” in the screenshots is not by itself a scheduling defect. |
| “Shipping” appears beside prepared-food delivery | Item-level shipping, pickup and local-delivery eligibility can be changed. [Item fulfillment](https://squareup.com/help/us/en/article/7982-manage-square-online-item-settings-from-your-item-library) | If nothing should ship, audit item eligibility and shipping setup. Verify whether the tab disappears afterward; do not promise that outcome or disable legitimate shipped products. |
| Customer feels they left Hikari | A custom branded subdomain can host the Square ordering page. [Ordering pages](https://squareup.com/help/us/en/article/6861-create-an-order-online-page-with-square-online-store) · [Domain eligibility](https://squareup.com/help/us/en/article/6916-connect-your-domain-with-square-online-store) | `order.hikarisojo.com` is a possible future address. It remains a separate Square-hosted site, not a way to move checkout into `/menu`. Paid-plan eligibility and DNS must be checked; do not move the main website’s domain. |
| Checkout has extra fields, tips and fees | Customer-input options, default fulfillment and tipping settings exist; delivery charges also have configuration. [Checkout options](https://squareup.com/help/us/en/article/6859-checkout-options-with-square-online-store) · [Delivery setup](https://squareup.com/help/us/en/article/8438-set-up-delivery-options-with-square-online) | Avoid unnecessary optional fields. Important exception: on-demand-delivery tipping is always available and its default comes from the courier provider, not the normal merchant tipping setting. Do not change commercial terms without Joel’s decision. |

## Limits we should not disguise as easy settings

**Checkout styling is partial.** Background/text/button colors and shapes follow site styling, but Square fixes the checkout font. The documentation does not establish a freely rearrangeable checkout layout. [Square styles](https://squareup.com/help/us/en/article/7820-choose-themes-for-your-square-online-site)

**A persistent “View cart · $XX” bar remains unverified.** Icon/button styling is not the same as adding a new live cart component. No supported native control was found for that exact behavior, a custom step indicator, automatic post-delivery scrolling, or rewriting the fulfillment bar. These require inspection or a focused feasibility check, not a promise.

**Custom code is not a universal escape hatch.** Square’s Snippets API can add HTML/CSS/JavaScript to storefront pages, but explicitly excludes checkout. A supported injection mechanism does not guarantee stable hooks into Square’s cart. Avoid building a brittle interface on undocumented page structure. [Snippets reference](https://developer.squareup.com/reference/square/snippets-api)

**A custom checkout does not automatically preserve delivery dispatch.** Square’s developer documentation restricts API delivery fulfillments to a partner beta; a successful API response alone does not establish seller/POS visibility. A Square developer-support response also states that API-created orders do not trigger the built-in courier connection. A replacement would need its own supported delivery integration or an ordering provider that handles it. [Formal fulfillment limits](https://developer.squareup.com/docs/orders-api/fulfillments) · [Square support response, February 2026](https://developer.squareup.com/forums/t/delivery-integration/25251)

## Recommended next step: one focused editor inspection

Inspect **Channels → Square Online → Website → Editor**, without publishing or changing settings:

1. Identify the selected site, plan, template and whether Personalized order screen is enabled. That optional screen is plan-gated; it adds recommendations/reordering, not unlimited layout freedom. Do not confuse Square Online with the separately configured **Online Ordering Profile** product. [Square ordering pages](https://squareup.com/help/us/en/article/6861-create-an-order-online-page-with-square-online-store) · [Ordering profiles](https://squareup.com/help/us/en/article/8566-set-up-an-online-ordering-profile)
2. Check the slideshow’s actual controls, menu placement, available layouts, and cart behavior on desktop/mobile preview. Merely opening an editor does not prove a feature is available.
3. Read fulfillment, checkout and offer settings. **Do not click Edit on an active promotional pop-up just to inspect it:** Square says editing temporarily disables that pop-up, and publishing it also publishes the website. Use the listing/read-only information first.

Then propose a small, approval-gated change set: compact ordering header, food immediately visible, matching branding, less intrusive promotion, and accurate pickup/delivery choices. Keep existing payments and fulfillment intact while testing whether the resulting flow is good enough. This is a bounded evaluation, **not a commitment to retain Square**.

If the available layout still cannot make the next action obvious, that is the decision point for an alternate storefront—not a reason to accumulate custom scripts around Square’s checkout. Rebuild/new technology remains allowed.

After authorized changes, check one pickup and one delivery journey through the payment-entry stage, on mobile and desktop. Confirm item options, timing, charges and cart visibility; do not place a paid test order without authorization. No broad test framework is needed.

## Evidence limits

The screenshots establish the large banner, shipping option, delivery selection and cart summary—not backend configuration or courier identity. They also show an $8.49 earlier delivery quote versus $7.75 delivery plus $1 service charge in the later cart. Different quotes/states may explain this; reconcile it during a single controlled journey rather than declaring a billing bug. No private delivery address has been copied into this report.

Square’s current documents reference both Square Online and newer Square plan names. Hikari’s actual subscription and any legacy entitlements remain unknown. No upgrade price, feature entitlement, revenue lift or exact Owner-style rebuild is promised by this analysis.
