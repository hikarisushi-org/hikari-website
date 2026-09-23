# Square item-path proof

Date: September 23, 2026  
Status: Pass  
Production changes: None

## Decision

Keep Square as the ordering provider. A stable item-level handoff exists when the URL includes both the Square location and item identifiers. Use this pattern only after each featured item's live ID is verified:

```text
https://hikarisushi-online.square.site/?location=LMCJ08MMKDHCA&item=A5BIIXCE5ILZWRZCDTY7A4KY#Y7DXG5VB4X6CYFEBQ6ZUD7DX
```

That verified URL opens **Fire Cracker** directly. The location parameter is required for a clean browser session; the item-only URL can fall into Square's fulfillment prompt and temporarily show an empty catalog after the location changes.

## Representative item

- Item: Fire Cracker
- Current price: $15.00
- Square variation: Regular
- Item-level modifiers: none configured
- Promotion: Online Order - 20% off
- Discounted item price: $12.00
- Photo and description: matched the current live Hikari listing
- Availability: available for both pickup and local delivery during the test

Fire Cracker is one of the six current popular dishes in the private design preview. Because it has no optional modifiers, the proof confirms Square's actual `Regular` variation rather than inventing customer choices that are not configured.

## Live proof

The location-aware URL was opened in a fresh Square guest tab and again at a 390 x 844 mobile viewport. Both opened the Fire Cracker item panel with the correct photo, name, price, description, promotion, quantity control, and Add to order action.

Pickup:

- Cart retained Fire Cracker, Regular, $15.00 reduced to $12.00.
- Pickup location and current time window were visible.
- Subtotal $15.00, discount -$3.00, estimated Utah tax $0.89, default 10% tip $1.50, estimated total $14.39.
- The path reached Square's contact/payment entry; Place order remained disabled and no personal or payment information was entered.

Delivery:

- The same item remained available after switching fulfillment.
- Delivery address used the restaurant's public address for a bounded test.
- Delivery cart showed the current time window, $4.25 delivery, $1.00 service charge, $0.89 estimated Utah tax, default 15% courier tip $2.25, and estimated total $20.39.
- Square displayed free delivery over $50 and correctly showed $38 remaining for this $12 discounted cart.
- Desktop and 390 x 844 mobile layouts kept the cart and Continue to payment action visible. Earlier live verification in `04-SQUARE-LIVE-IMPROVEMENTS.md` already proved both fulfillment paths through payment entry without submitting an order.

No order was placed, no payment or contact data was submitted, and no Square settings changed.

## Measurement proof

The existing first-party CTA module classifies the location-aware Square URL as `click_order_online`. Its focused test now uses the verified Fire Cracker URL and confirms these non-personal parameters:

- `page_path`
- `cta_placement: featured_dish`
- `link_url`
- `item_name: Fire Cracker`

This keeps the Hikari-to-Square click measurable while Square remains the source of truth for the completed sale.

## Implementation boundary

- Fire Cracker may use the verified direct item URL after the Phase 3 design is approved.
- Other featured dishes must not reuse or guess this item ID; verify each live Square item URL before wiring it.
- General Order online actions should continue to open the location-aware Square menu.
- Do not script Square's storefront DOM, inject checkout state, or build a custom checkout as a shortcut.
