# Hikari overnight design — September 24, 2026

## Brief and authorization

Joel authorized creative implementation of a private redesign after detailed visual discovery. This is not production approval. Preserve the operational QR-only menu, Square operations, analytics and existing source capabilities. Category shortcuts and Customer Favorites are optional. No unverified popularity claims or invented menu facts.

## Design thesis

A little light at the table: a bright, contemporary Japanese kitchen, anchored by Hikari's existing sun-and-wave emblem and close food photography. The food supplies color; the interface supplies calm and an easy route to order.

- Porcelain `#FFFEFA`: main canvas.
- Celadon `#ECF3EF`: hero and gathering section, informed by the existing teal logo and plate photography.
- Sea ink `#183B37`: text and footer.
- Cranberry `#AB3439`: ordering action, restrained and distinct from the food's orange tones.
- Quiet gray `#596762`: secondary copy.
- Pale line `#D6E1DA`: functional separators.
- Self-hosted Inter: navigation, practical information, confident modern hero heading. Existing Playfair Display: only section headlines and short brand statement; no walls of serif copy.

## Layout plan

```text
logo + Hikari        Food / Our story / Visit       Order online
short light-led headline + action | large plated-sushi photograph
       South Jordan / Pickup & delivery / Reservations
large roll photograph            | short invitation + order
                  From our kitchen
       three photos, three photos, no catalog text
short Hikari story + reserve      | preparation photograph
                 brief genuine guest excerpts
hours + address + directions      | dine-in / ordering actions
```

Mobile: heading/action first, then image; no horizontal carousels; native collapsed navigation, persistent ordering action only after hero scrolls away. All actions reachable without JavaScript. Photos have intrinsic dimensions and responsive formats. No autoplay video download. One small sun/wave line illustration plays once, respects reduced motion; no repeated reveal effects.

## Self-critique before build

The old preview is an overlong succession of dark/light panels with repeated claims and cutout images. Reduce to one food invitation and one story panel, a dense gallery, reviews and practical visit information. Avoid the generic cream/terracotta/serif-only combination by retaining a clear sea-green identity, using sans-serif for the primary message and a purposeful dark red action. The distinctive motif comes from Hikari's actual emblem, not imported flowers or generic Japanese characters. No decorative badges or invented rankings. Do not turn all exploratory ideas into required sections.

## Photo selection evidence

Visually inspected the actual files before selecting. Existing `sushi_row`, `sushi_eight` are plated food with a setting. `sushi_platter_1` is actual preparation footage still; `sushi_making` is a sashimi bowl despite its misleading filename. The existing `sushi_platter_ai` is explicitly AI-labelled and not used. Reject `firecracker_roll` and `misty_harbor_zoom`: transparent cutouts. Existing prepared imagery `flares_of_hikari`, `island_heatwave`, `gyoza`, `chicken-karaage__square`, `sashimi_new`, `bento_salmon` includes settings and is usable without inventing new imagery. Some pre-existing menu imagery appears enhanced/composited; no new photo generation or authenticity claims are made. Source photos and QR menu remain untouched.

## Delivery boundary

Replace the private preview artifact served at port 6421; do not replace production index or deploy. Preserve earlier draft in Git history. Keep all existing main-site scripts, themes and menu files unchanged. The preview is an interactive design candidate, not a claim of production integration. Verify it independently and document any remaining integration work.
