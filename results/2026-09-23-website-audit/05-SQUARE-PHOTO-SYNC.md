# Square menu photo sync — 2026-09-23

Source of truth: the 61 image mappings in `js/menu-page.js`, backed by files in `assets/images/menu/`. This is a live Square catalog change. Prices, descriptions, modifiers, availability, and channels are outside the photo update.

## Completed website-to-Square changes

| Square item | Website image | Result |
| --- | --- | --- |
| Crab Rangoon (6pcs) | `crab_rangoons.png` | Uploaded; saved |
| Cowboy | `cowboy_roll.png` | Uploaded; saved; matched Wagyu/asparagus/crab description |
| Edamame (Steamed W/ Salt) | `edamame_salted.png` | Uploaded; saved |
| Edamame Parmesan | `parmesan_edamame.png` | Uploaded; saved |
| Edamame Spicy | `edamame_spicy.png` | Uploaded; saved |
| Fire Cracker | `firecracker_roll.png` | Uploaded; saved |
| Gyoza (6 Pcs) | `gyoza.png` | Uploaded; saved |
| Flares Of Hikari | `flares_of_hikari.png` | Uploaded; saved |
| Chicken Karaage | `chicken-karaage__square.png` | Replaced older primary; detached old image; saved |
| Citrus Mango Dream | `citrus_mango_dream.png` | Replaced older primary; detached old image; saved |
| Emerald Dragon Roll | `emerald_dragon.png` | Uploaded; saved |
| Fire Spicy Tuna | `fire_spicy_tuna.png` | Uploaded; catalog thumbnail verified |
| Firefly Fusion | `firefly_fussion_2.png` | Replaced older primary; detached old image; saved |
| Forest Roll | `forest_roll.png` | Uploaded; saved |
| Hot Cheetos Roll | `hot_cheetos.png` | Replaced older primary; detached old image; saved |
| Illuminated Fire Tuna Roll | `illuminated_fire_tuna.png` | Replaced older primary; detached old image; saved |
| Island Heatwave | `island_heatwave.png` | Uploaded; saved |
| Jalapeño Bomb | `jalapeno_bomb.png` | Uploaded; catalog thumbnail verified |
| Large Shrimp & Vegetable Tempura | `shrimp_&_veggie_tempura.png` | Uploaded; saved |
| Las Vegas Roll | `las_vegas_close_up.jpg` | Uploaded; saved |
| Mango Sticky Rice | `mango_sticky_rice.png` | Uploaded; saved |
| Miso Soup | `miso.png` | Uploaded; saved |
| MIsty Harbor | `misty_harbor_zoom.png` | Uploaded; saved |
| Mochi (4 Pcs) | `mochi.png` | Uploaded; saved |
| Monument Roll | `monument.png` | Uploaded; saved |
| Naruto | `naruto.png` | Uploaded; saved |
| Nigiri | `nigiri.png` | Uploaded; saved |
| Philly | `philly.png` | Uploaded; catalog thumbnail verified |
| Playboy | `playboy.png` | Replaced older primary; detached old image; saved |
| Poke Bowl | `poke_bowl.png` | Uploaded; saved |
| Ramune Soda | `ramune.png` | Replaced older primary; detached old image; saved |
| Salmon Bento Box | `bento_salmon.png` | Uploaded; saved |
| Sashimi | `sashimi_new.png` | Uploaded; saved |
| Sashimi Platter | `sashimi_new.png` | Uploaded; saved |
| Shrimp Tempura Roll | `tempura_shrimp_roll.png` | Uploaded; saved |
| Small Shrimp & Vegetable Tempura | `small_shrimp_&_veggie_tempura.png` | Uploaded; saved |
| Sushi Nachos | `sushi_nachos.png` | Uploaded; catalog thumbnail verified |
| Sunrise Salad | `sunrise_salad.png` | Uploaded; saved |
| Sweet Summer Salad | `sweet_summer_salad.png` | Uploaded; saved |
| Spicy Tuna | `spicy_tuna_roll.jpg` | Uploaded; catalog thumbnail verified |
| Spicy Salmon | `spicy_salmon.jpg` | Uploaded; saved |
| Spicy Hamachi | `spicy_hamachi.jpg` | Uploaded; saved |
| Veggie Roll | `veggie_roll.png` | Uploaded; saved |
| Sweet Potato Roll | `sweet_potato_roll.png` | Uploaded; saved |
| Strawberry Blossom | `strawberry_blossom.png` | Replaced older primary; detached old image; saved |
| Yaki Maguro Roll | `yaki_maguro.png` | Uploaded; saved |
| Sunfire Crunch | `sunfire_crunch.png` | Uploaded; saved |
| Sunburst | `sunburst__square.png` | Uploaded; saved |
| Handrolls | `hand_rolls_2_16x9_print.jpg` | Uploaded; saved |
| Teriyaki Chicken Rice Bowl | `teriyaki_chicken.png` | Uploaded; saved |
| Teriyaki Salmon Rice Bowl | `teriyaki_salmon.png` | Uploaded; saved |
| Teriyaki Chicken Bento Box | `bento-teriyaki-chicken__square.png` | Uploaded; saved |
| Strawberry Spritz | `strawberry_spritz.png` | Uploaded; catalog thumbnail verified |

## Already using the website-named image

Alaskan (`alaskan__square.png`), Avocado King (`avocado_king.png`), Butterflied Garlic Shrimp (6) (`garlic_shrimp.png`), California Roll (`california_roll.png`), Chirashi Bowl (`chirashi_bowl.png`), Salmon Sunrise Roll (`salmon_sunrise.png`), and The Forbidden Roll (`forbidden_roll.png`). Hikari Delight uses the same visible website photo under a different Square filename; Square declined to add the duplicate. Alaskan was re-uploaded once; Square retained one image with the same filename, consistent with deduplication.

## Final catalog audit

The current website menu defines 61 unique item-image mappings. The generic `Canned Soda` image is a category photo, not an individual Square item; the individual soda products already have branded can photos, so that generic image was not assigned to them. All 60 other website menu entries have a matching Square item with a catalog thumbnail. Square also has a separate `Sashimi` item; the same website sashimi photo was added to it as well.

Across the 79 Square item-library rows inspected, 69 have a thumbnail and 10 do not. None of the 10 is one of the 60 current website menu matches:

| Square item without photo | Current website source? | Disposition |
| --- | --- | --- |
| Cowboy Crunch, Diamond, Hikari Fire Crunch, Lava Volcano Roll, Rainbow Roll, Red Ruby | No current `js/menu-page.js` mapping | Need current, item-verified food photos before assignment |
| Extra fish, Hot Tea, Maki, Misc. Item | No current menu mapping | Utility/generic entries; no current item photo assigned |

The project contains unused `diamond.png`, `rainbow.png`, and `maki.png` files. They are **not** part of the current website menu mapping, so they were not treated as authoritative replacements. No unrelated photo was substituted for the other Square-only dishes.

Separate catalog-data issue resolved on September 23: the `Teriyaki Chicken Bento Box` Square item had a salmon description. At Joel's request, its customer-facing text was corrected to: “Teriyaki chicken served with fresh salad, California roll, steamed rice, and gyoza.” The saved copy was verified by reopening the item.

## Operational note

For an item with an older image, upload the website image, set it primary, detach the old image, then save. Square image-tile controls can be visually hidden; keyboard Enter on the accessible `Set primary image` and `Remove image` buttons worked. Verify the new image is marked primary before saving. A Square warning to add an existing item to a menu can be bypassed with `Save and close` so the photo change does not alter menu assignment.

The website-photo sync and catalog-thumbnail audit are complete. Square-only missing images require verified current photos. During the photo sync, pricing, descriptions, availability, modifiers, menus, channels, and integrations were left unchanged; the chicken-bento description was corrected afterward at Joel's explicit request.

Later on September 23, Joel requested two menu changes: Garlic Shrimp was removed from the current website menu and the Square website channel (but retained in Square's POS/delivery-app catalog), and Crab Rangoon was made Available. The counts above describe the catalog at photo-sync time; the current website now has 59 individually matchable items plus generic Canned Soda.
