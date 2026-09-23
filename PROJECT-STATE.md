# Project State

## Current status

Completed a bounded live comparison of Hikari and Saffron Valley / Owner on September 23, 2026. [Start with the audit](results/2026-09-23-website-audit/README.md); design measurements, screenshots and source evidence are included.

Follow-up: inspected Hikari’s authenticated Square Plus / Order Online editor. Joel then explicitly authorized practical ordering-flow improvements. Published: main banner hidden, compact mobile/desktop item layout, announcement pop-up inactive (discount unchanged). [Change record and verification](results/2026-09-23-website-audit/04-SQUARE-LIVE-IMPROVEMENTS.md).

Square presentation changes are live. The custom website menu was later changed only to remove Garlic Shrimp; its hosting, prices, discounts, fees, fulfillment and Square POS/KDS/provider integrations were not changed. Existing unrelated work is preserved. A sticky-header experiment was reverted because it did not provide the expected cart access on the ordering template; the original Reveal on scroll up setting is restored and published.

The Square photo sync covered all 60 individually matchable website entries at the time of the audit. Garlic Shrimp was subsequently removed from the website menu and Square's `Online – Website & Profile` channel; its Square catalog/POS record remains, but its delivery-app visibility was later disabled for menu parity. The current website menu therefore has 59 individually matchable items plus the generic Canned Soda category image. Crab Rangoon was switched from stock-count tracking at -25 to Square's prepared-food availability tracking and now appears as Available on the public ordering menu. Both live menus were checked. Ten Square-only/utility catalog rows still lack authoritative current-website images. [Photo-sync inventory](results/2026-09-23-website-audit/05-SQUARE-PHOTO-SYNC.md).

The current website menu was inventoried (60 unique entries) and reconciled with the public Square Online menu. Eleven missing online dishes were enabled using the already-synced website photos; six Square-only dishes were hidden from the website channel without deleting their catalog/POS records. Their delivery-app visibility was disabled in the later parity pass. Square Online now displays all eleven and none of the six. Mango Sticky Rice required correcting shipping-only fulfillment and an erroneous -26 stock count; the public listing now appears without an out-of-stock label. Joel excluded both salads and mochi from Square Online; he explicitly asked to leave the two no-longer-offered salad listings on the website for now. [Full menu and change record](results/2026-09-23-website-audit/06-MENU-RECONCILIATION.md).

Follow-up item parity is now configured across Square Online, DoorDash, Uber Eats, and Grubhub: 14 website-matched items were enabled on all delivery apps; nine extras, including Garlic Shrimp, were disabled there. Stray Square Online visibility was also cleared from six catalog/exception items. Square showed fresh sync timestamps for all three apps, and representative changes appeared on each live app menu. POS records and platform-specific prices were preserved. [Delivery-app change record and verification](results/2026-09-23-website-audit/07-DELIVERY-APP-MENU-PARITY.md).

Verified real pickup and delivery carts through payment entry without submitting an order. Both retained the 20% discount. The native mobile View order button stays visible after adding food. The temporary test item was removed. Physical KDS/courier dispatch was not exercised. Initial delivery quote versus cart fees remains inconsistent and needs Square clarification if pursued.

Key findings: mobile lab performance 61 vs 93; oversized menu images; standalone /menu is a dine-in picks experience, not an online cart. Owner's uplift figures remain vendor claims, not an established result for Hikari. On branch `codex/website-improvements`, Square order-click detection and the existing reservation/directions events are repaired and browser-verified but not published.

Audit limits: the signed-in Google account has no accessible Hikari Analytics property, so organic visits and historical order-click users remain unavailable. Square payment continuation met automated verification; no complete Saffron crawl because direct HTTP requests were challenged.

Phase 4 is complete. A clean browser session reliably opens Fire Cracker when the Square URL includes both `location=LMCJ08MMKDHCA` and `item=A5BIIXCE5ILZWRZCDTY7A4KY`. Desktop and 390 x 844 mobile proof covered the current photo, $15 price, Regular variation, 20% discount, pickup and delivery availability, cart fees/totals, sticky mobile checkout action, and payment entry without submitting an order. [Square item-path proof](results/2026-09-23-website-audit/13-SQUARE-ITEM-PATH-PROOF.md).

## Next action

NEXT ACTION: Joel reviews the private Phase 3 preview at `http://100.124.197.26:6421/preview` and approves or revises the hierarchy, exact six featured dishes, headline/supporting copy, coral order treatment, and teal/mist direction. [Preview notes](results/2026-09-23-website-audit/12-DESIGN-PREVIEW-NOTES.md). The [right-panel tracker](results/2026-09-23-website-audit/website-improvement-tracker.html) shows 20 of 34 complete. Phase 5 production implementation remains approval-gated; GA4 remains access-blocked.

### Current implementation handoff — September 23, 2026

- Branch: `codex/website-improvements`, based on current `origin/main`. Latest committed checkpoint before the current media work: `a57a756`.
- Phase 1 analytics implementation is committed. Five focused tests and 111 theme tests pass; browser diagnostic proof passed for order, reservation, and directions events. The Square business baseline is recorded; GA4 needs the account that can access property `G-SH54LFXHJ3`.
- Phase 2 is complete locally: 260 generated AVIF/WebP variants, 297/406 KiB optimized hero videos, self-hosted fonts, single-source hero selection, and a six-card homepage initial menu while `/menu` retains the full catalog. The final three mobile Lighthouse runs scored 77/89/88 with median performance 88, LCP 3.83 seconds, CLS 0, and 1.13 MiB transferred. Media validation, five analytics tests, 111 theme tests, syntax checks, and browser proof pass.
- Phase 3 preview work is complete pending Joel's approval: a responsive switchable homepage and menu direction is served privately on Tailscale port 6421. Desktop and mobile visual checks pass; the switcher works in the remote browser. Preview server session `31095` must remain running during review.
- Phase 4 is complete: Fire Cracker's location-aware Square item URL passed clean-session desktop/mobile, pickup/delivery cart, fee/discount, payment-entry, and click-measurement proof. Other featured dishes still require their own verified Square item IDs before direct links are wired.
- The only unrelated working-tree item remains untracked `assets/images/july-4-hero.png`; leave it untouched.
- The checklist is served only on the Mac mini's Tailscale interface at `http://100.124.197.26:6420/tracker` so Joel's other tailnet computer can keep it open in the right Browser panel. The dedicated server exposes only the tracker file; background session `18818` must remain running.

### Previous immediate-continuation handoff — before branch setup

- Branch: `main`, with no local commits ahead of `origin/main`. No background agents or in-flight browser transactions. The seven-file close-out does not commit or publish anything.
- Uncommitted paths (exact `git status --short --untracked-files=all` list before this close-out):

```text
 M CHANGELOG.md
 M DECISION-LOG.md
 M SPECS.md
 M js/menu-page.js
?? ACTION-ITEMS.md
?? PROJECT-STATE.md
?? SESSION-LOG.md
?? assets/images/july-4-hero.png
?? results/2026-09-23-website-audit/01-DESIGN-REFERENCE.md
?? results/2026-09-23-website-audit/02-EVIDENCE-AND-SEO.md
?? results/2026-09-23-website-audit/03-SQUARE-CUSTOMIZATION.md
?? results/2026-09-23-website-audit/04-SQUARE-LIVE-IMPROVEMENTS.md
?? results/2026-09-23-website-audit/05-SQUARE-PHOTO-SYNC.md
?? results/2026-09-23-website-audit/06-MENU-RECONCILIATION.md
?? results/2026-09-23-website-audit/07-DELIVERY-APP-MENU-PARITY.md
?? results/2026-09-23-website-audit/README.md
?? results/2026-09-23-website-audit/evidence/collect-http.mjs
?? results/2026-09-23-website-audit/evidence/hikari-mobile.json
?? results/2026-09-23-website-audit/evidence/hikari-pagespeed-desktop.txt
?? results/2026-09-23-website-audit/evidence/hikari-pagespeed-mobile.txt
?? results/2026-09-23-website-audit/evidence/hikari-square-cart.txt
?? results/2026-09-23-website-audit/evidence/http-evidence.json
?? results/2026-09-23-website-audit/evidence/saffron-checkout.txt
?? results/2026-09-23-website-audit/evidence/saffron-desktop.json
?? results/2026-09-23-website-audit/evidence/saffron-extra-styles.json
?? results/2026-09-23-website-audit/evidence/saffron-pagespeed-desktop.txt
?? results/2026-09-23-website-audit/evidence/saffron-pagespeed-mobile.txt
?? results/2026-09-23-website-audit/screenshots/README.md
?? results/2026-09-23-website-audit/screenshots/hikari-desktop-hero.jpg
?? results/2026-09-23-website-audit/screenshots/hikari-mobile-hero.jpg
?? results/2026-09-23-website-audit/screenshots/hikari-mobile-menu.jpg
?? results/2026-09-23-website-audit/screenshots/hikari-square-cart.jpg
?? results/2026-09-23-website-audit/screenshots/hikari-square-entry.jpg
?? results/2026-09-23-website-audit/screenshots/hikari-square-promotion.jpg
?? results/2026-09-23-website-audit/screenshots/saffron-checkout.jpg
?? results/2026-09-23-website-audit/screenshots/saffron-desktop-full.jpg
?? results/2026-09-23-website-audit/screenshots/saffron-desktop-hero.jpg
?? results/2026-09-23-website-audit/screenshots/saffron-desktop-menu.jpg
?? results/2026-09-23-website-audit/screenshots/saffron-desktop-sections.jpg
?? results/2026-09-23-website-audit/screenshots/saffron-item-upsells.jpg
?? results/2026-09-23-website-audit/screenshots/saffron-mobile-hero.jpg
?? results/2026-09-23-website-audit/screenshots/saffron-mobile-menu.jpg
?? results/2026-09-23-website-audit/screenshots/square-after-desktop-delivery.png
?? results/2026-09-23-website-audit/screenshots/square-after-mobile-delivery.png
```
