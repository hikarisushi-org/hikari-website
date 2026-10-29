# Sweets and drinks release

Published production deploy `6ab60bb601d7acd43b6d5942`. Four-viewport LIVE release test passed: all images loaded, favorites navigation, rotating reviews, fixed hero, analytics bootstrap, no overflow, private files excluded, QR menu functional/noindexed. Live HTML equals local build byte-for-byte. Desktop/mobile sweets composition inspected; user approved corrected tall refresher. Rollback: `6ab5fb346cdd2a260eefb4c9`.

Owner authorized completing and publishing all approved refinements. Preserve original menu photos. Built-in image generation used for three reference-based edits, masters in assets/images/editorial/sweets-v1 and responsive WebP derivatives in assets/images/generated/editorial/sweets-v1.

Roles: strawberry lead establishing/close drink, mochi macro texture, Ramune human selection moment. Approved ivory palette, existing typography and asymmetrical editorial layout retained. No repeated gallery images.

## Prompts

### mochi

Edit the supplied Hikari mochi photograph into a photorealistic square editorial texture close-up. Preserve the actual four pink/orange mochi, cream and strawberry garnish, white rectangular plate and green leaf. Low three-quarter close framing: nearest pink mochi fills most of foreground, other pieces recede naturally and may crop at edges. Show fine powder, soft mochi skin, cream ridges and real strawberry seeds distinctly. Warm light wooden restaurant table, soft directional window light, quiet ivory background. Food fills 75-85 percent. No new toppings, no invented filling, no stretched plate, no plastic surfaces. No text.

### strawberry

Edit supplied strawberry drink photo for a Hikari restaurant editorial lead image. Preserve the identical pink strawberry iced drink, straight glass shape, strawberry rim slice and mint garnish. Landscape 3:2 composition, glass prominent at left-center with full rim and base visible; close enough to see ice facets, natural bubbles, strawberry seeds and tiny condensation. Quiet light wood tabletop and softly out of focus warm ivory restaurant backdrop, warm side light. Keep recognizable drink and true glass proportions. No extra drinks, no additional garnishes, no text, no artificial giant bokeh.

### ramune

Edit supplied Hikari Ramune photograph into a square natural restaurant service moment. Preserve the three exact recognizable Kimura Ramune bottles and their labels, colors, bottle geometry, sizes, and caps. A single anatomically natural adult hand enters from upper right and gently reaches around the shoulder of the front strawberry bottle, as if selecting it; do not obscure the front label. Other two bottles behind, slightly softer focus. Warm light wood tabletop, quiet muted teal and ivory background, soft directional window light. Show crisp real condensation droplets and glass reflections, restrained natural contrast. Do not pour a sealed bottle or invent an opening mechanism. No changed label text, no extra fingers, no distortion.

## Image inspection

Owner rejected the first refresher as short and chubby. Re-edited from ORIGINAL reference with explicit tall/slim glass, full base and rim, portrait 4:5 framing, unchanged pink drink/ice/strawberries/mint, warm wood and ivory setting. Final `strawberry-tall-v2.png` approved by owner (“looks good”). First candidate preserved but not used. Section now uses portrait lead alongside two square supporting images, stacking on mobile without stretching. Full desktop/mobile component inspected.

Verification prevention: image tests use fresh browser pages per viewport and instant scroll to avoid responsive lazy-source cancellation while a smooth scroll is still moving. Original menu assets have no git diff. Hero launchagent verified disabled.

All outputs inspected: distinct mochi powder, cream and seeds; drink bubbles, ice and condensation; legible recognizable Ramune label and natural hand. No stretched dishes or glassware. Originals retained; no new menu ingredients introduced. Editorial AI-assisted images are not exact menu proof.
