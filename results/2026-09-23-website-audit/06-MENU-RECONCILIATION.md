# Website menu and Square Online reconciliation — September 23, 2026

Source for item names and website prices: the current `js/menu-page.js` menu data, checked against the live `/menu` page. Square comparison is the public `hikarisushi-online.square.site` ordering menu, not every item in Square's internal catalog. The website has **60 unique menu items**; its six-item “Most Popular” section repeats items listed below.

## Full website menu

| Category | Items and website prices |
| --- | --- |
| Most Popular (repeats) | Gyoza $8; Flares of Hikari $15; Misty Harbor $15; Island Heatwave $15; Fire Cracker $15; Naruto Roll $15 |
| Appetizers | Edamame (Salted) $4; Edamame (Spicy) $5; Edamame (Parmesan) $5; Small Tempura $6; Large Tempura $12; Gyoza $8; Jalapeño Bomb $6; Sushi Nachos $10; Crab Rangoons $8; Chicken Karaage $8; Miso Soup $4 |
| Salads | Sunrise Salad $6; Sweet Summer Salad $7 |
| Classic Rolls | California Roll $8.50; Alaskan Roll $8.50; Spicy Tuna Roll $8.50; Spicy Salmon Roll $8.50; Philly Roll $8.50; Shrimp Tempura Roll $8.50; Spicy Hamachi Roll $8.50; Forest Roll $8.50; Veggie Roll $8.50; Sweet Potato Roll $8.50 |
| Premium Rolls | Flares of Hikari $15; Misty Harbor $15; Island Heatwave $15; Fire Cracker $15; Naruto Roll $15; Hot Cheetos Roll $13; Hikari Delight Roll $14.50; Emerald Dragon Roll $15; Strawberry Blossom $15; Illuminated Fire Tuna $15; Citrus Mango Dream $15; Avocado King $14; The Forbidden Roll $14; Cowboy Roll $16; Salmon Sunrise Roll $14; Playboy $14; Yaki Maguro Roll $14; Firefly Fusion $15 |
| Tempura Fried Rolls | Fire Spicy Tuna Roll $12; Monument Roll $12; Sunfire Crunch $12; Sunburst $13; Vegas Roll $13 |
| Nigiri & Sashimi | Nigiri or Sashimi $7; Sashimi Platter $20; Hand Rolls $10 |
| Fresh Bowls | Poke $10; Chirashi $14 |
| Rice Bowls | Teriyaki Chicken $12; Teriyaki Salmon $14 |
| Bento Boxes | Teriyaki Salmon Bento Box $16; Teriyaki Chicken Bento Box $15 |
| Desserts | Mochi (4 pcs) $8; Mango Sticky Rice $8 |
| Beverages | Strawberry Spritz $5; Canned Soda $2.50; Ramune Soda $3.50 |

## Owner-confirmed exceptions

- Sunrise Salad and Sweet Summer Salad are **not offered** and must **not** be added to Square Online. Joel asked to leave their website listings in place for now, so the website is not literally current for those two entries.
- Mochi ice cream remains on the website but must **not** be sold online because it will melt.
- These three exceptions supersede a mechanical website-to-Square sync.

## Mapping and live actions

Square uses some shorter names: “Spicy Tuna” = Spicy Tuna Roll; “Philly” = Philly Roll; “Cowboy” = Cowboy Roll; “Sashimi Platter” is exact. Its six branded sodas (Coca-Cola, Coca-Cola Zero Sugar, Diet Coke, Dr Pepper, Fanta, Sprite) represent the website's one Canned Soda entry. Square's separate Nigiri and Sashimi items represent the website's combined “Nigiri or Sashimi” entry. These are not extras to remove.

| Website item missing from public Square at baseline | Square catalog photo | Status |
| --- | --- | --- |
| Spicy Tuna Roll | `spicy_tuna_roll.jpg` | Added to Classic Rolls; verified public |
| Spicy Salmon Roll | `spicy_salmon.jpg` | Added to Classic Rolls; verified public |
| Philly Roll | `philly.png` | Added to Classic Rolls; verified public |
| Spicy Hamachi Roll | `spicy_hamachi.jpg` | Added to Classic Rolls; verified public |
| Veggie Roll | `veggie_roll.png` | Added to Classic Rolls; verified public |
| Sweet Potato Roll | `sweet_potato_roll.png` | Added to Classic Rolls; verified public |
| Sashimi Platter | `sashimi_new.png` | Added to Sashimi menu group; verified public |
| Jalapeño Bomb | `jalapeno_bomb.png` | Added to Appetizers; verified public |
| Cowboy Roll | `cowboy_roll.png` | Added to Premium Rolls; verified public |
| Mango Sticky Rice | `mango_sticky_rice.png` | Enabled website channel, changed shipping-only to pickup and local delivery, and switched erroneous -26 stock count to prepared-food availability tracking. Verified public at $8 without an out-of-stock label after Square refreshed. |
| Strawberry Spritz | `strawberry_spritz.png` | Enabled website channel, changed shipping-only to pickup and local delivery; verified public and no out-of-stock label |
| Sunrise Salad; Sweet Summer Salad | Photos present | Owner excluded from Square; leave website unchanged |
| Mochi (4 pcs) | `mochi.png` | Owner excluded from Square; leave website unchanged |

Square-only dishes visible on the public ordering menu at baseline: **Diamond, Lava Volcano Roll, Mt Fuji Roll, Rainbow Roll, Cali Mex Roll, Hikari Fire Crunch.** Their `Online – Website & Profile` channel was disabled; Square catalog, POS, and delivery-app channels were preserved. The public ordering menu was reloaded and all six were absent. None of their catalog records was deleted.

No website or Square prices were changed as part of this item-presence reconciliation. Square's item photos listed above were previously synced from the website and confirmed as primary images in the catalog. A final public-storefront check confirmed all 11 online additions visible, all six Square-only dishes absent, salads and mochi absent, and Mango Sticky Rice no longer marked out of stock. This checks menu display and availability, not a paid order or KDS/courier handoff.

**Later follow-up:** Joel requested the same orderable items on the three delivery apps. Their channels were then reconciled; the earlier statements about preserving delivery-app visibility describe this initial Square Online pass, not the current setting. See [delivery-app parity](07-DELIVERY-APP-MENU-PARITY.md).
