# Session Log

## 2026-09-23 — Record the Square business baseline

- Used the last 28 complete days, August 26 through September 22, and filtered Square's Sales summary to the `Hikari Sushi` online-store channel.
- Verified 15 completed online orders and $602.90 net online sales; calculated $40.19 average order value from the same period. A September 18 return is reflected in net sales and was not treated as another completed sale.
- The signed-in Google account opened the Analytics “Start measuring” screen and had no accessible Hikari property. No account/property was created and no GA4 values were inferred. Phase 1 remains 4/5 while work advances to the non-dependent Phase 2 media inventory.

## 2026-09-23 — Start Phase 1 with a live right-panel tracker

- Created a persistent HTML checklist for all 34 roadmap proof items, opened it in the Codex right panel, and checked only completed work. The board currently shows 8 of 34 complete and Phase 1 active.
- Because Joel is viewing the Codex task from another computer, replaced the host-only localhost view with a dedicated tracker-only HTTP server bound to the Mac mini's private Tailscale IP. Verified `http://100.124.197.26:6420/tracker` returns the rendered tracker; no other project route is served.
- Replaced the stale URL condition with a testable first-party CTA module covering current Square, Carbonara reservations, and Google directions destinations. Added page, placement, destination, and optional item parameters to separate Hikari link clicks from Square sales.
- Five focused tests pass. Browser diagnostic proof observed `click_order_online` from `hero`, `click_reservations` from `visit`, and `click_directions` from `visit`. All 111 theme tests still pass.
- Browser verification exposed that tracking-like script filenames and the deferred head position were not observable in the test surface. Kept a neutral `site-actions.js` filename, used the site's proven bottom-script pattern, and recorded a rule not to treat unit tests alone as analytics completion.
- Saved the event contract, technical baseline, and open four-week business baseline in `09-MEASUREMENT-BASELINE.md`. No production deployment occurred. Next: obtain authenticated GA4/Square baseline values, then start Phase 2.

## 2026-09-23 — Plan all remaining website improvements

- Reviewed the audit against the current static HTML/CSS/JavaScript implementation and separated completed Square/menu/review work from unfinished website work.
- Created a seven-phase implementation roadmap covering measurement, mobile media performance, an approval-gated design preview, a one-item Square handoff proof, static-first implementation, SEO/accessibility, and release measurement.
- Added explicit proof gates, operational boundaries, and repository-safety handling for the dirty checkout that is nine commits behind `origin/main`. No website code, Square setting, deployment, or production content was changed.
- Next: review the plan, then safely establish the implementation branch/worktree and begin measurement plus performance foundations.

## 2026-09-23 — Close-out for immediate continuation of the website analysis

- Summarized the original Hikari-versus-Saffron audit for Joel and pointed him to its summary, design reference, and SEO/performance/Owner-claims evidence. No redesign decision or new implementation authorization was made.
- Corrected current-state wording that still described Garlic Shrimp and six Square-only dishes as delivery-app-visible after the later parity pass. The older dated decision/change entries remain as history.
- Work stops at discussion of the original audit. Next: continue from the three audit files, settle the scope of a bounded homepage/menu preview if Joel wants to proceed, and do not assume a Square replacement. The exact dirty-worktree file list and branch state are in `PROJECT-STATE.md`; no files were committed or published by this close-out.

## 2026-09-23 — Align delivery-app menus with Square Online

- Joel clarified that Square Online, DoorDash, Uber Eats, and Grubhub should sell the same items, subject to the salad and mochi exclusions. Audited the Square catalog item channels, enabled 14 website-matched items on all three apps, disabled nine extras there, and cleared six stray Square website-channel settings. No catalog deletions, price changes, or POS-channel removals.
- Confirmed fresh Square integration sync timestamps and live representative items: DoorDash additions and retired-item absence; Uber Eats Dessert/Mango Sticky Rice; Grubhub Mango Sticky Rice, Playboy, Hikari Delight, Cowboy, and a zero-result Diamond search. No paid order, KDS or courier test. [Full change record](results/2026-09-23-website-audit/07-DELIVERY-APP-MENU-PARITY.md).

## 2026-09-23 — Reconcile Square Online menu to Hikari website

- Inventoried the current website menu (60 unique entries) and compared it to the public Square ordering menu. [Full menu and item-by-item differences](results/2026-09-23-website-audit/06-MENU-RECONCILIATION.md).
- Enabled 11 website dishes missing from Square Online, using their previously verified website-synced catalog photos. Nine needed Dine-In Menu assignment; Mango Sticky Rice and Strawberry Spritz needed channel and fulfillment adjustments. Hiding the six Square-only dishes was limited to `Online – Website & Profile`; their Square catalog/POS/delivery-app records remain.
- Square's fast save clicks were not completion: waited for each item editor to close and checked the public storefront. Mango Sticky Rice required changing shipping-only fulfillment to pickup/local delivery and switching a spurious -26 stock count to availability tracking. A later live refresh displayed it without Out of stock.
- Confirmed all 11 additions displayed, all six removals absent, and the owner-excluded salads and mochi absent. Joel asked to leave the website salad listings unchanged despite not offering them. No price changes, order, or payment.

## 2026-09-23 — Correct live appetizer menus

- Removed the Garlic Shrimp entry from `js/menu-page.js`, pushed only that file from an isolated worktree based on current `origin/main` (`fe657b4`), and verified `https://hikarisojo.com/menu` no longer shows it. Unrelated dirty main-worktree files were not published.
- In Square, deselected `Online – Website & Profile` for `Butterflied Garlic Shrimp (6)` while preserving Points of sale, DoorDash, Grubhub, and Uber Eats. Reopened the item to verify 4 of 5 channels remained.
- Crab Rangoon (6pcs) had tracked stock -25. Changed only its tracking mode to prepared-food availability; verified catalog status Available after reload and the public Square Appetizers section showing Crab Rangoon without Garlic Shrimp. No order was placed.

## 2026-09-23 — Correct Square chicken-bento description

- At Joel's request, replaced the salmon wording on `Teriyaki Chicken Bento Box` with “Teriyaki chicken served with fresh salad, California roll, steamed rice, and gyoza.” Reopened the Square item and verified the saved description. Other item fields were not changed.

## 2026-09-23 — Sync website menu photos into Square

- Used the 61 unique `js/menu-page.js` image mappings and actual local files as the current website source. Matched Square aliases by item name/description, uploaded or replaced matching item photos, and left already-current photos in place. The generic Canned Soda category image was not assigned to individual branded cans.
- Audited all 79 visible Square catalog rows after the sync: 69 have thumbnails; the 10 missing are Square-only dishes or utility/generic items with no current website menu mapping. All 60 individually matchable website entries have photos. [Detailed inventory](results/2026-09-23-website-audit/05-SQUARE-PHOTO-SYNC.md).
- Preserved Square pricing, descriptions, menus, modifiers, availability, channels, and integrations. Noted but did not alter a chicken-bento description that says salmon. No order or payment was created.
- Remaining six Square-only food-photo gaps require current, item-verified photos from Joel; unused local candidate files were not presumed current.

## 2026-09-23 — Authenticated Square review and approved improvements

- Confirmed Hikari’s Square Plus subscription, Order Online template, banner/menu/header controls and checkout settings in the existing logged-in Chrome session.
- Joel changed the task from read-only inspection to explicitly authorized improvements. Published the hidden slideshow, compact item layout and inactive announcement; preserved the actual 20% discount and all operational settings/integrations.
- Checked mobile and desktop previews, then the live guest storefront in a separate browser. Pickup and delivery both reached real contact/payment entry. Native mobile View order remained reachable; its total updated with delivery. No personal/payment details or orders submitted.
- Sticky-header setting did not yield the expected cart visibility; restored the original Reveal on scroll up and republished. Square preview does not support adding items to cart, so functional checks used the live storefront after publishing.
- Removed the single temporary Firefly Fusion item. Saved [change record, screenshots, rollback guidance and remaining limits](results/2026-09-23-website-audit/04-SQUARE-LIVE-IMPROVEMENTS.md). Next: Joel’s physical-phone review; delivery quote consistency is a separate Square question.

## 2026-09-23 — Square ordering customization follow-up

- Researched current Square Online documentation against Joel’s observed delivery-to-menu confusion. Saved [supported controls, limits and next inspection](results/2026-09-23-website-audit/03-SQUARE-CUSTOMIZATION.md).
- Distinguished the custom Hikari site from Square’s storefront and from Square’s separate Ordering Profile product. No authenticated Dashboard/editor tab was available; actual plan, template and control availability remain unverified.
- Identified partial checkout styling, checkout-excluded snippets, courier dispatch/API constraints, and the live side effect of editing an active promotional pop-up.
- No settings changed, no publication, no paid order, no new implementation framework. Next: focused read-only editor inspection, then Joel approves a small change set or an alternative direction.

## 2026-09-23 — Website comparison audit

- Inspected both live websites, responsive layouts and guest ordering paths; captured screenshots and metadata. Removed both temporary cart items without submitting orders or personal information.
- Recorded PageSpeed mobile/desktop reports: Hikari mobile 61 / LCP 9.9s; Saffron 93 / LCP 2.8s. Confirmed the stale order-click URL condition and menu discoverability gaps.
- Researched Owner's claims and independent discussions; no independent controlled validation found in this bounded search. Saved the main recommendation, measured design reference and evidence in [results](results/2026-09-23-website-audit/README.md).
- Scope stayed analysis-only. Rebuild/new technology may be considered; no account system, app or broad test infrastructure is implied. No production files or deployments changed.
- Follow-up delivery research confirmed Owner's documented DoorDash/Uber courier options and automatic driver assignment; Saffron's specific provider remains unverified. Added primary help-center sources to the evidence report.
- Next: Joel reviews the audit; a visual preview and one-item ordering proof require a subsequent implementation request.
