# Hikari Website — Decision Log

Captures the **reasoning, findings, and decisions** from work sessions — the "why" behind the work.
`CHANGELOG.md` records what changed; this file records discussions and conclusions so context isn't lost between sessions.

Format: newest first. Link measurements to `SPECS.md`; link resume state to `README.md` § Pick up here.

---

## 2026-09-23 — Let food photography replace an on-page catalog

**Decision:** Shape the public homepage around alternating food-and-story panels, a six-photo `From our kitchen` gallery with no visible item names, prices, descriptions, or per-photo links, and a second set of panels describing Hikari's restaurant experience.

**Why:** Joel identified these patterns on Saffron Valley as more enticing than a conventional menu grid. The page should create appetite and explain why to visit Hikari; current availability, selection, and checkout belong to Square.

**Hikari translation:** Keep the existing mist, teal, coral, Playfair, and Inter direction rather than copying Saffron Valley's black/orange treatment. Use the verified Fire Cracker location-aware Square URL for its feature and the general Square storefront for other order actions. Reservations remain distinct. The QR-only restaurant menu remains absent from navigation, copy, CTAs, and discovery surfaces.

---

## 2026-09-23 — Exclude the restaurant menu from the website redesign

**Decision:** Treat `https://hikarisojo.com/menu` as a QR-only operational restaurant menu used in place of paper menus. Preserve direct access and existing behavior, but keep it completely isolated from the public website: no link, mention, CTA, sitemap entry, structured-data reference, or search indexing.

**Why:** Joel clarified the product boundary after reviewing the combined preview. Restaurant-menu browsing and online ordering solve different jobs: `/menu` supports guests in the dining room, while Square handles pickup, delivery, cart, and payment.

**Design consequence:** The private preview is homepage-only and contains no `/menu` path. **Order online** goes to Square. Phase 5 removes website-originated menu discovery; Phase 6 applies QR-only discovery controls while regression-checking direct menu access.

---

## 2026-09-23 — Keep Square and use verified location-aware item links

**Decision:** Keep Square as Hikari's ordering provider. A featured dish may link directly only after its live URL is verified with both the Square location and item identifiers. General order actions continue to open the Square menu.

**Why:** Fire Cracker opened reliably in clean desktop and mobile sessions at `?location=LMCJ08MMKDHCA&item=A5BIIXCE5ILZWRZCDTY7A4KY`. The item-only form lost store context during clean-session fulfillment selection. The explicit location-aware form preserved the correct item, photo, price, Regular variation, 20% discount, pickup/delivery availability, fees, cart, and payment entry without DOM scripting or checkout injection.

**Boundary:** Do not guess or reuse item IDs for the other featured dishes. Fire Cracker has no optional modifiers configured, so the site must not imply choices Square does not offer. No production link is wired until the Phase 3 design is approved.

[Detailed Phase 4 proof](results/2026-09-23-website-audit/13-SQUARE-ITEM-PATH-PROOF.md).

---

## 2026-09-23 — Advance performance work while GA4 access is blocked

**Decision:** Use August 26 through September 22 as the comparable 28-day pre-launch window. Record only authenticated provider values: Square shows 15 completed online-store orders, $602.90 net online sales, and $40.19 average order value.

**GA4 boundary:** The signed-in Google account has no accessible Hikari Analytics property and opens the “Start measuring” setup screen. Do not create a new property or infer historical traffic from the page tag. Leave the Phase 1 baseline item open, preserve the exact access dependency, and proceed with Phase 2 work that does not depend on GA4.

---

## 2026-09-23 — Treat Hikari CTA clicks and Square sales as separate measures

**Decision:** Track current Square, Carbonara reservation, and Google directions links through one first-party module. Every tracked event includes its page and placement; featured-item support may add the verified item name later. A Hikari-to-Square click is not a completed order or a sale.

**Verification rule:** Keep the module under a neutral first-party filename and use the site's proven bottom-of-page loading pattern. During browser testing, tracking-like filenames and the deferred head position were not observable even though focused tests passed. Completion therefore requires browser-observable event proof, not just unit tests.

**Evidence:** Five focused tests and browser diagnostics passed for `click_order_online`, `click_reservations`, and `click_directions`. Business baseline values remain open until authenticated GA4/Square reporting is queried. [Measurement record](results/2026-09-23-website-audit/09-MEASUREMENT-BASELINE.md).

---

## 2026-09-23 — Plan all unfinished website-audit improvements as one gated roadmap

**Direction:** Joel wants to tackle every unfinished audit recommendation while excluding work already completed in Square, menu parity, catalog photos, availability corrections, and daily review rotation.

**Plan:** Execute measurement and mobile performance first; approve one mobile/desktop design direction; prove one item through the existing Square path; then build the static-first homepage/menu experience with SEO and accessibility improvements. Production remains approval-gated. Square stays the operational checkout unless the bounded one-item proof establishes a material blocker.

**Repository safety:** The current checkout is dirty and nine commits behind `origin/main`. Implementation must begin from current remote state in an isolated `codex/` branch or worktree while preserving the uncommitted audit artifacts; do not destructively pull or merge over this checkout.

[Full implementation plan](results/2026-09-23-website-audit/08-REMAINING-IMPLEMENTATION-PLAN.md).

---

## 2026-09-23 — Align all orderable channels by item, not price

**Direction:** Joel clarified that Square Online and all delivery-app menus should offer the same items. The website menu remains the item baseline, with the previously approved salad and mochi exclusions. The earlier decision to preserve delivery-app visibility for Square-only dishes was superseded by this parity request.

**Boundary:** Use Square item-channel visibility, not catalog deletion. Keep Points of sale records, existing app connections, modifiers and platform-specific prices. Same items does not imply the same platform prices or an identical checkout experience.

**Evidence:** Fourteen website-matched items lacked delivery-app visibility; nine extras were enabled on at least one app. Changes saved in Square, all three integrations then showed fresh sync timestamps, and representative items were seen or absent on each app's public menu. [Details](results/2026-09-23-website-audit/07-DELIVERY-APP-MENU-PARITY.md).

---

## 2026-09-23 — Reconcile online offerings, preserving owner exceptions

**Direction:** Use the current Hikari website menu as the item-presence baseline for Square Online, with three explicit owner exceptions: Sunrise Salad and Sweet Summer Salad are not offered and must not be added to Square; mochi ice cream must remain off online ordering because it melts. Joel asked to leave the salad listings on the website for now, so they are a known website-menu inconsistency rather than a reason to add them to Square.

**Implementation boundary:** Hide Square-only dishes by deselecting `Online – Website & Profile`, not deleting catalog records or removing POS/delivery-app channels. Add existing Square catalog items to the current Dine-In Menu group when the website channel is already on. Check pickup/local-delivery eligibility and prepared-food availability separately: being in the menu and having a photo does not make an item orderable. Website prices and Square prices were left unchanged.

**Verification:** All 11 intended additions and all six removals were checked on the public Square storefront. Mango Sticky Rice initially surfaced as Out of stock due to a tracked -26 count; after switching to availability tracking, a later storefront refresh showed it without the out-of-stock label. [Full inventory](results/2026-09-23-website-audit/06-MENU-RECONCILIATION.md).

---

## 2026-09-23 — Keep Garlic Shrimp in operations, remove it from owned online menus

**Direction:** Joel requested Garlic Shrimp removed from the website and Square online menu, and Crab Rangoons made available.

**Boundary:** The Square item `Butterflied Garlic Shrimp (6)` remains in the catalog, POS, and delivery-app channels. Only `Online – Website & Profile` was deselected; Square's channel editor explicitly identifies that as the way to remove an item from the website. The website's `Garlic Shrimp` menu entry was removed and deployed in an isolated commit so unrelated local changes were not published.

**Availability correction:** Crab Rangoon (6pcs) was sold out because Square tracked stock at -25, not because the item lacked a menu/photo. Square recommends `Track by availability` for prepared food; switching to that mode restored Available without inventing a positive inventory count. The public Square Appetizers section showed Crab Rangoon and no Garlic Shrimp after the changes.

---

## 2026-09-23 — Use only verified current photos for Square items

**Direction:** Joel identified the website project’s currently used menu photos as the most up-to-date source and authorized completing the Square photo sync.

**Result:** All 60 current website entries with individual Square counterparts have catalog thumbnails. The website’s `Canned Soda` image represents a generic category, so it was not applied to Square’s individually photographed brands. A separate Square `Sashimi` item received the same website sashimi image.

**Boundary:** Ten of 79 Square catalog entries still have no image, but none has a current website menu photo mapping. Six are distinct dishes; four are utility/generic entries. Unused local Diamond/Rainbow/Maki files may depict relevant food but are not evidence that they are current or the precise sold item. Do not use a plausible-looking, unverified substitute. The Square chicken-bento description mentions salmon; it was not edited during the photo task. [Photo inventory](results/2026-09-23-website-audit/05-SQUARE-PHOTO-SYNC.md).

---

## 2026-09-23 — Improve native ordering while preserving restaurant operations

**Authority/direction:** Following authenticated read-only inspection, Joel explicitly authorized all practical changes to make ordering clear and easy. Keep the work bounded; retain the working Square terminal/KDS/provider connections and avoid a custom checkout build for now.

**Implemented:** Hide the large slideshow, deactivate (not delete) the blocking discount announcement, and use compact menu cards. The existing discount stays on cards and in the cart. Native mobile ordering already supplies a fixed View order button once food is added; no custom cart component is needed to provide that behavior.

**Rejected experiment:** Sticky header was available and tested but did not keep the full cart header visible on the Order Online page; category navigation took the top position. Restored and republished the original Reveal on scroll up behavior. A listed setting is not proof of the requested customer-facing result.

**Proof/limits:** Pickup and delivery reached real payment entry with the 20% discount. No order/payment submitted, no courier or physical KDS verification, and no operational settings changed. Delivery quote-to-cart charges differed; document that without silently changing commercial terms. [Live record](results/2026-09-23-website-audit/04-SQUARE-LIVE-IMPROVEMENTS.md).

---

## 2026-09-23 — Separate Square storefront changes from a custom-site rebuild

**Direction:** Joel identified the online ordering flow as a main priority. The confusing banner/menu transition belongs to Square Online, not the custom Hikari website. Analyze native controls before deciding whether to replace that storefront; preserving current technology is not a constraint.

**Evidence:** Square documents banner/section and menu controls, branding, fulfillment defaults and selected checkout options. Checkout styling is partial and snippets exclude checkout. Square API delivery fulfillments have partner-beta restrictions; developer support says API-created orders do not trigger the built-in courier connection. A custom payment flow therefore cannot be assumed to preserve delivery operations.

**Safety/limit:** Exact Hikari editor/plan entitlements were not inspected. Active promotional pop-ups are temporarily disabled when opened for editing, according to Square, so that is not a read-only inspection action. No configuration, publication, purchase or architecture change was made.

[Detailed findings and primary sources](results/2026-09-23-website-audit/03-SQUARE-CUSTOMIZATION.md).

---

## 2026-09-23 — Audit first; ordering experience before technology

**Constraint:** Joel wants a practical visual/conversion/SEO comparison, without enterprise scope. A rebuild or new technology is allowed; reusing the current structure is not a requirement. This session authorizes analysis and saved findings, not implementation.

**Findings:** Saffron's mobile lab advantage was measurable (93 vs 61 performance; 2.8s vs 9.9s LCP), but sales uplift was not. Hikari has oversized images, an order-click condition targeting old providers, and a standalone dine-in picks menu with no order action. Owner's published uplift claims lacked independent controlled validation in the bounded research.

**Recommendation, not an adopted stack decision:** Review one mobile/desktop design and prove one item-to-order connection before choosing the technology or expanding scope. Preserve the permanent `/menu` address across any migration. Avoid custom accounts/app features without a demonstrated need.

Evidence and limitations: [audit](results/2026-09-23-website-audit/README.md).

---

## 2026-08-20 — Remove retired SSH identity documentation

**Decision:** Document only the active `arcos33` GitHub SSH identity.

**Why:** The prior automation-specific key was revoked and removed during the legacy-agent decommission, so retaining it in workflow documentation would direct future setup toward a nonexistent credential.

---

## 2026-06-07 — Project quartet adopted

**Decision:** Adopt workspace standard: README (+ § Pick up here), CHANGELOG, DECISION-LOG, SPECS.

**Why:** Uniform layout across Hikari/Lumen projects — no hunting for where why/what/now/specs live.


## 2026-09-27 — Owner-approved QR menu checkpoint

Owner accepted the current private menu design and requested a commit. Keep compact text rows with thumbnail anchors; remove row morph effects. Preserve full-screen details and 300ms direct image transitions. Browser-toolbar-driven viewport changes require a frozen small-viewport photo cap and stable scrollbar space. This checkpoint does not authorize pushing or deploying.
