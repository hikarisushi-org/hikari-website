# Favorites ordering and purchase evidence

Verified October 12, 2026. The Favorites action follows the visible roll. Desktop uses “Order this roll”; the phone carousel has a named order button below its browse controls. General Order online links continue to open the menu. The initial HTML names Firefly Fusion explicitly for the no-JavaScript fallback.

## Verified Square destinations

Location: `LMCJ08MMKDHCA`. Use `https://hikarisushi-online.square.site/?location=LMCJ08MMKDHCA&item=ITEM_ID`.

| Roll | Item ID | Regular variation ID |
| --- | --- | --- |
| Firefly Fusion | 6CUX3EPJBT6OWBYLJBCHKWY6 | IUR77MJLBCCQF6HOY66IF7SP |
| Citrus Mango Dream | 6NNRTH56UWVBT3ZPGTQUQJAN | VUFBG6523O43ZRGQFS2XA6MN |
| Playboy | U3GSBD5J7FKYQD53JPC5H76F | DQBR2HGU53CMKKC6OT2A3OSA |
| Strawberry Blossom | T3HTL25YFL2DEN7JPYJNWUJG | DW25DLR3T4IPDHDH6LLO7MEH |
| Hot Cheetos Roll | K6LF4OVX3I37JH3OTDRN5IH4 | SMWQ4GHXRI5KHDVZLVK7Y6XZ |

IDs and visibility were read from the live catalog. Every item link opened the correct public item through PiKVM. A fresh guest session prompted for pickup/delivery; after pickup selection Square retained the requested roll. Location-aware URLs do not remove that first-time fulfillment prompt.

The actual preview path was tested: desktop Mango selector → order link → Mango item → cart → contact/payment entry. No order was submitted or payment/contact information entered. In Chrome's phone viewport, a touch-emulated swipe changed the button to “Order Citrus Mango Dream”; pressing it opened Mango in Square. An actual iPhone was not used.

## Measurement

`click_order_online` keeps its existing placement and safe link URL, and adds the destination item ID, display name and list ID. Changing rolls preserves the cross-domain linker/journey URL parameters. Browsing remains `select_item` with the existing roll slugs; no cart or purchase event is fabricated.

The dashboard's `lib/website_ga.py` checks an exact transaction/item pair in one GA session. Direct order evidence uses the existing `linkUrl` and registered `cta_placement` dimensions because this property's custom-event `item_list_id` parameter was rejected by the API. Older browse evidence checks the ecommerce `select_item` item slug and list, then an order click, then the exact item purchase. Both modes require the same-event transaction and item conditions at purchase. A real Square paid order must independently contain that item's verified catalog variation. Names alone never prove a match. Sampled/thresholded results and incomplete coverage stay unverified.

Live controls passed: real transaction/correct item = 1; same transaction/wrong item = 0; existing Mango selection = 17 users; existing general order link = 30 users (October 3–11). All three native Favorite item/order pairs in that period were checked successfully; none showed the entire earlier Favorites sequence. This is not a claim that those guests never browsed Favorites. The first genuine purchase through the new direct button still needs observation; a non-purchase test cannot prove payment attribution.

Checks: `node --test scripts/analytics.test.js scripts/favorites-order.test.cjs`, `node scripts/build-site.mjs`; dashboard backend and actual-data rendering checks. The original dirty website checkout is preserved. Release uses the isolated production-based checkout, with baseline live HTML/JS/CSS equality checked first. Prior production rollback deployment: `6acbb40daef43d000841748e`.
