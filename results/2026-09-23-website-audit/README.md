# Hikari × Saffron Valley website audit

September 23, 2026 · Analysis only · Start here

**Latest follow-up:** Joel authorized native Square improvements, a website-photo sync, and online-menu parity across Square Online, DoorDash, Uber Eats, and Grubhub. The oversized ordering banner and blocking promotion are hidden, the menu is more compact, and pickup/delivery were checked through payment entry. [Published flow changes](04-SQUARE-LIVE-IMPROVEMENTS.md), [full website menu versus Square Online](06-MENU-RECONCILIATION.md), and [delivery-app item parity](07-DELIVERY-APP-MENU-PARITY.md) record the later work. The original comparison below remains a pre-change snapshot; the main website has not been rebuilt.

**Recommendation: redesign Hikari’s public homepage and menu around a faster, more direct ordering experience.** Saffron provides a useful visual and interaction reference. Its measurable mobile speed advantage is real in this test; its sales advantage cannot be established without transaction data.

A substantial rebuild is a reasonable option. Choose the ordering experience first, then the technology that supports it. The current framework, layout, and hosting are not requirements. This audit does not authorize or implement a rebuild.

## What the comparison shows

| Area | Hikari today | Saffron / Owner today | Implication |
|---|---|---|---|
| First impression | Attractive food video, large restaurant name, three similarly prominent actions | Food video, local cuisine positioning, distinctive food promise, one main ordering action | Make Hikari’s food/location/ordering proposition immediately clear. |
| Mobile ordering | Hero order button; mobile navigation hides its order link inside the hamburger | Persistent bottom order button on the homepage | Keep ordering within reach while people browse. |
| Choosing food | Homepage item opens an informational modal. `/menu` has a server-facing “My Picks” list and no order link | Item links open configuration and add directly to a cart | Let a customer move from a selected dish toward buying that dish. |
| Ordering handoff | New tab on Square; this session encountered fulfillment selection and a full-screen discount promotion | Same-domain menu, scheduling, item modifiers, cart and checkout | Reduce repeated decisions and visual changes. A different domain by itself is not proof of an SEO problem. |
| Upsells/retention | Square already has a working discount and payment options | Item suggestions, rewards points, app and marketing prompts | Add useful commercial features selectively; these do not require copying every account/app feature. |

Sources: inspected [Hikari](https://hikarisojo.com/), [Hikari menu](https://hikarisojo.com/menu), [Square ordering](https://hikarisushi-online.square.site/), [Saffron](https://saffronvalleysouthjordan.com/) and [Saffron menu](https://saffronvalleysouthjordan.com/menu). Screenshots and technical evidence are included below.

## Measured performance

| Homepage metric | Hikari | Saffron |
|---|---:|---:|
| Mobile performance | **61/100** | **93/100** |
| Mobile largest-content load (LCP) | **9.9 seconds** | **2.8 seconds** |
| Mobile total blocking time | 200 ms | 0 ms |
| Mobile layout shift | 0 | 0 |
| Mobile accessibility checks | 90/100 | 100/100 |
| Basic SEO checks | 100/100 | 100/100 |
| Desktop performance | 99/100 | 100/100 |

One PageSpeed Insights run per homepage, September 23 around 12:54–12:55 AM MDT. Mobile used the same simulated Moto G Power / slow 4G conditions. Scores fluctuate and are not sales results. The desktop score masks Hikari’s mobile weakness. [Hikari report](https://pagespeed.web.dev/analysis/https-hikarisojo-com/i7f7fsx0rc?form_factor=mobile) · [Saffron report](https://pagespeed.web.dev/analysis/https-saffronvalleysouthjordan-com/29rletwyp7?form_factor=mobile)

## Do these first

1. **Repair order-click measurement.** The live homepage’s `click_order_online` event recognizes `order.online` and `cash.app/order/`, but all four order links point to `hikarisushi-online.square.site`. The custom event condition misses them. Generic GA outbound clicks may still exist; account reporting was not inspected.
2. **Fix image delivery.** Lighthouse found approximately 6.4 MiB of potential mobile image savings. Island Heatwave alone transfers about 2.13 MiB; Flares of Hikari about 1.95 MiB. Generate appropriately sized WebP/AVIF variants and responsive sources. Audit which hero video loads on mobile: a fresh mobile visit had the hidden landscape video playing.
3. **Build one clear online customer journey.** Promote selected dishes near the top, give them ordering actions, and keep a mobile order control visible. Preserve a deliberate dine-in use for `/menu` if desired, with clear access to online ordering. Do not silently turn diners’ existing picks into an online cart.
4. **Resolve the ordering connection before choosing a stack.** Prototype one real item from the new menu through the chosen provider’s cart. Evaluate item linking, modifiers, availability, payment handoff and sale attribution. Square can already add an item and apply the existing discount; whether it supports the desired seamless connection still needs a focused integration check.
5. **Strengthen discoverable content.** Link the standalone menu from normal navigation and the sitemap, give it a clear page heading and useful local title, and make core menu content available in initial HTML. Start with a few useful pages tied to actual services; additional pages should answer real customer questions.
6. **Reconcile website and ordering content.** Square currently promotes 20% off and applied it to the test item; the main website does not communicate it. Confirm the intended offer before promoting it. Also correct the observed Square chicken-bento description that currently describes salmon.

## Sensible implementation scope

The first release can be a redesigned homepage, an effective menu-to-order path, necessary local information pages, optimized media, and order measurement. A small static-generated site with shared components is a strong fit for this content; a more interactive stack becomes worthwhile if the chosen ordering integration needs it. Rebuild options remain open.

Keep the work bounded to one reviewable mobile/desktop design and one representative ordering flow before expanding. Verification should cover visual layout, keyboard use, links, factual menu/hours content, ordering and analytics. A custom account system, app, or extensive test framework has no demonstrated need from this audit.

## How to judge success

Record four comparable weeks before launch and four after: organic visits, unique order-link clicks, completed online orders, net sales and average order value. Compare the same weekdays and note promotions, closures and traffic changes. Use checkout conversion only when sessions and orders can be attributed across the provider boundary; an order-link click is not a completed sale. At low volume, extend the observation window instead of running elaborate split tests.

**Next deliverable:** a mobile-first Hikari homepage/menu design preview using the reference details below, plus a one-item ordering proof. No production website, Square settings, or deployment was changed during this audit.

## Supporting files

- [Plan for all remaining website improvements](08-REMAINING-IMPLEMENTATION-PLAN.md)
- [Delivery-app item parity and live verification](07-DELIVERY-APP-MENU-PARITY.md)
- [Full website menu and Square Online reconciliation](06-MENU-RECONCILIATION.md)
- [Website-photo sync and catalog thumbnail inventory](05-SQUARE-PHOTO-SYNC.md)
- [Published Square ordering improvements and verification](04-SQUARE-LIVE-IMPROVEMENTS.md)
- [Follow-up: what Square lets us customize in the ordering flow](03-SQUARE-CUSTOMIZATION.md)
- [Visual design reference and proposed page structure](01-DESIGN-REFERENCE.md)
- [Owner claims, independent evidence, SEO and technical findings](02-EVIDENCE-AND-SEO.md)
- [Screenshot guide](screenshots/README.md)
- [Recorded public HTTP evidence](evidence/http-evidence.json)
