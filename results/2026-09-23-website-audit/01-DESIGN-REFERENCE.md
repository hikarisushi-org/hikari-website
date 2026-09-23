# Design reference

Observed live on September 23, 2026. Desktop viewport: 1280 × 720; mobile: 390 × 844. The browser uses a desktop-style scrollbar, leaving approximately 375 CSS pixels of mobile content width. These are responsive viewport inspections, not tests on a physical phone.

## Saffron’s visual recipe

| Element | Measured / observed treatment | Hikari adaptation |
|---|---|---|
| Palette | White `#FFFFFF`, black `#000000` sections, dark text around `#0D0D0D`, secondary text `#4D4D4D`, ochre order button `#CC842E` | Use similarly strong light/dark separation and one unmistakable ordering color. Palette can change in the redesign. |
| Display typography | **Lora**, weight 600; large desktop hero statement 56px / 67.2px line height | Lora is the closest match to the reference. Use a short food-focused statement with a controlled line break. |
| Semantic hero heading | Smaller sans-serif H1: cuisine + South Jordan, 28px desktop / 14px mobile | Keep the city and cuisine visible; make Hikari’s actual primary heading readable and meaningful. |
| Section headings | Lora 28px / 35px desktop in sampled split sections | Consistent serif headings, usually left aligned. |
| Body / navigation | System sans-serif; navigation 16px, about 22px line height | Keep supporting text easy to scan; avoid excessive decorative labels. |
| Desktop hero | Approximately 672px high; edge-to-edge video; left-aligned text near bottom; 32px side inset | Food fills the frame; text should explain the food and next action without hiding it. |
| Desktop navigation | Logo separate on left; white rounded navigation island on right; header remains available on scroll | Keep the main order action visually dominant and navigation short. |
| Buttons | Sampled CTA 48px high, 10px radius, 16px text | Broad touch area and restrained rounding. Secondary actions should compete less strongly. |
| Feature sections | Alternating image/text halves, roughly 50/50; sampled text column about 448px within a 632.5px half | Use one or two substantial food/story sections with Hikari photography. |
| Mobile | Stacked image/text; logo plus compact menu controls; persistent full-width bottom ordering strip | Keep safe space beneath content for the fixed action; avoid covering prices or controls. |
| Ordering menu | White interface, category navigation, search, popular items with images, price and plus control | Give item selection an obvious next step; use consistent food names/photos across menu and checkout. |

These are measured samples, not a complete export of every CSS rule or breakpoint. Raw samples are in `evidence/saffron-desktop.json` and `evidence/saffron-extra-styles.json`.

## What to carry over

The strongest combination is large appetizing food imagery, clear local positioning, simple typography, consistent action placement and a short connection from food to cart. Saffron’s product modal pairs required choices with relevant add-ons; the cart shows points earned. Each of these serves a distinct customer decision.

Hikari already has attractive food imagery and a recognizable teal/coral identity. Its current centered hero and three large buttons distribute attention across ordering, reservations and menu browsing. For an online-sales emphasis, ordering should lead; reservations remain easy to find as a secondary route.

## What to improve on

Saffron’s homepage runs through numerous overlapping food, buffet, lunch and story sections before its featured-item row. Its measured mobile document was about 11,307px tall. Hikari’s homepage was about 17,756px with the full menu expanded. Height alone is not a conversion metric, but both can give visitors a much shorter path to the most useful content.

The reference also uses a low-contrast logo over moving imagery in its hero. Its checkout includes phone verification and a guest service fee. Those are observed tradeoffs, not requirements to reproduce. The presence of rewards or an app does not establish that Hikari needs either in the first release.

## Proposed Hikari page structure

1. **Compact navigation:** menu, visit, reservations and a primary order action.
2. **Food-led hero:** visible South Jordan positioning, a specific Hikari promise, order action and concise pickup/delivery information using confirmed service details.
3. **Popular food:** four to six selected dishes with photos, prices and a direct path to ordering.
4. **Short trust section:** current review summary and a few relevant excerpts.
5. **One story/food section:** real Hikari detail with strong photography.
6. **Visit and useful questions:** hours, address, map/directions, ordering and reservation answers.
7. **Mobile order strip:** persistent while browsing; deliberate behavior on the menu and cart.

The complete menu belongs on its own useful page. Retain the permanent `/menu` address in any migration because existing QR codes and links may depend on it. A new layout or technology can still serve that same URL.

Recommended preview direction: Saffron-like Lora headings, simple sans-serif body, strong white/dark section contrast, Hikari food assets, and a deeper teal primary button whose text contrast is checked. This is a proposal for visual review, not an approved brand change. The frontend-design guidance informed the typography, hierarchy and restrained section count.

See the [screenshot guide](screenshots/README.md) for the actual reference at both sizes.
