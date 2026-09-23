# Remaining website implementation plan

September 23, 2026 · Planning only · No production changes

## Outcome

Improve Hikari's mobile website speed, make ordering the clearest customer action, connect featured food to the existing Square ordering flow, repair measurement, and strengthen menu discoverability and accessibility. Keep the work reviewable and preserve the working restaurant operations behind Square.

This plan covers only unfinished findings from the audit. It does not repeat the Square presentation, photo, availability, or menu-parity work already completed.

## Already complete and excluded

- Square's oversized storefront banner is hidden, the blocking promotion is inactive, and the menu uses the compact layout.
- Pickup and delivery have been checked through payment entry; the existing 20% discount remained applied.
- Current website menu photos were synced to every individually matchable Square item.
- Square Online, DoorDash, Uber Eats, and Grubhub item availability was aligned, subject to the approved salad and mochi exclusions.
- Garlic Shrimp was removed from the website and online channels, Crab Rangoon availability was corrected, Mango Sticky Rice availability was corrected, and the chicken-bento description was fixed.
- Google reviews already use a deterministic daily rotation, 15-minute HTTP caching, and one-hour browser caching. The redesign must preserve that behavior rather than rebuild it.

## Working constraints

- Keep Square as the ordering, cart, payment, fulfillment, POS, KDS, and delivery-integration system unless the one-item proof establishes a material blocker.
- Preserve the permanent `/menu` URL because existing QR codes and links may use it.
- Do not replace the dine-in `My Picks` behavior with an online cart without an explicit product decision.
- Do not change prices, discounts, fees, hours, menu facts, fulfillment, or provider integrations as part of the website build.
- Use confirmed Hikari photos and facts. Do not infer item identity from filenames.
- Stage the redesign for review. Production publishing requires Joel's approval after mobile, desktop, analytics, and ordering verification.
- The current checkout is dirty and nine commits behind `origin/main`. Before implementation, preserve the uncommitted audit work and start a `codex/` implementation branch or worktree from current `origin/main`; do not pull or merge destructively over the dirty checkout.

## Phase 1 — Measurement foundation

### Work

1. Repair the homepage order-click rule so every current `hikarisushi-online.square.site` link emits `click_order_online`.
2. Send useful parameters with the event: source page, CTA placement, destination URL, and item name when the click came from a featured dish.
3. Keep reservation and directions events intact and verify they still fire once per intentional click.
4. Define the measurement boundary plainly:
   - GA4 order-link click = customer left Hikari for Square.
   - Square completed order = sale.
   - Do not label clicks as conversions or sales without provider-side attribution.
5. Capture a pre-launch baseline when the accounts are available: organic visits, unique order-link clickers, completed online orders, net sales, and average order value, using comparable weekdays.

### Proof gate

- GA4 DebugView or an equivalent live event view shows one correctly named event for each homepage, menu, and featured-item order action.
- Event parameters distinguish CTA placement without collecting personal information.
- A short measurement note records which metrics come from GA4 and which come from Square.

## Phase 2 — Mobile performance and media delivery

### Work

1. Inventory images actually used by the homepage and `/menu`; separate them from unused or historical assets.
2. Generate display-sized WebP and AVIF variants for current food images, including responsive widths rather than one multi-megabyte source per card.
3. Add `srcset`, `sizes`, width, and height to images. Eager-load only the true above-the-fold visual; lazy-load lower content.
4. Replace the two-autoplay-video setup with one viewport-appropriate hero source so the hidden landscape video cannot play on mobile.
5. Use a lightweight poster and conservative preload behavior. Respect reduced-motion and data-saver preferences with a static image experience.
6. Avoid loading the full menu image set on the homepage. The homepage should load only the four to six approved featured dishes; the full catalog remains on `/menu`.
7. Add a repeatable asset-size check or report so future menu-photo updates do not restore multi-megabyte card images.

### Proof gate

- On a fresh mobile load, only one hero media source is requested and hidden video does not play.
- No homepage card uses the current multi-megabyte PNG as its delivered mobile source.
- Median of three mobile Lighthouse/PageSpeed runs targets performance at least 85 and LCP at most 4.0 seconds, with zero layout shift. If network variance prevents the target, record the median, transferred bytes, and remaining largest request rather than claiming success.
- Desktop appearance and seasonal theme behavior remain intact.

## Phase 3 — Mobile-first design preview

### Work

Create one reviewable homepage and `/menu` direction at the audit viewports: 390 × 844 mobile and 1280 × 720 desktop.

The homepage preview should include:

1. Compact navigation: Menu, Visit, Reservations, and one primary Order Online action.
2. Food-led hero: a specific Modern Japanese Kitchen / South Jordan message, concise confirmed pickup/delivery copy, and one dominant order action.
3. Four to six owner-approved popular dishes with verified photos, current names/prices, and an obvious ordering action.
4. A shorter review section that uses the existing daily review feed.
5. One concise Hikari story/food section rather than the current long gallery-plus-menu sequence.
6. Visit information: current hours, address, phone, directions, reservations, and useful ordering questions.
7. A persistent mobile order strip that does not cover content and is hidden or adapted appropriately when it would duplicate Square's own cart control.

The `/menu` preview should keep the dine-in browsing purpose clear, retain filters/search/advisories, expose online ordering, and add a real page heading.

### Approval gate

- Joel approves the mobile and desktop hierarchy, exact featured dishes, primary copy, CTA treatment, and use of the current Hikari teal/coral identity before production implementation.
- The preview does not imply that an item can deep-link into Square until Phase 4 proves it.

## Phase 4 — One-item Square ordering proof

### Work

1. Select one approved popular item that is live in Square and has representative modifiers or choices.
2. Test the most direct stable Square destination available for that item. Prefer a documented product/menu URL; do not depend on brittle DOM scripts or checkout injection.
3. Test both pickup and delivery through payment entry on mobile and desktop without submitting an order.
4. Verify item identity, photo, price, modifiers, availability, the existing discount, timing, fees shown, cart visibility, and the analytics event at the Hikari-to-Square handoff.
5. Record the exact limitation if Square cannot deep-link reliably. Use that evidence to choose between a category/menu handoff and evaluation of another storefront; do not build a custom checkout as a shortcut.

### Decision gate

- **Pass:** a stable, understandable Hikari-to-Square path exists. Continue with Square and reuse the pattern for featured dishes.
- **Limited:** Square supports only a menu/category entry. Use honest “Order Online” actions and avoid pretending they add a specific item.
- **Fail:** a material ordering requirement cannot be met. Pause expansion and produce a separate storefront/fulfillment decision; preserve current Square operations meanwhile.

## Phase 5 — Build the approved website experience

### Work

1. Implement the approved homepage hierarchy and persistent mobile order action.
2. Remove the full catalog from the homepage; show only approved featured dishes and link normal navigation to `/menu`.
3. Keep menu content in one canonical data source and generate or pre-render core item names, categories, descriptions, and prices into initial HTML. JavaScript may enhance filters, search, modals, and `My Picks`, but should not be the only source of menu text.
4. Preserve the theme system, current review rotation, reservations, directions, hours, consumer advisory, and existing operational links.
5. Apply the proven Phase 4 Square handoff consistently. Do not claim item-level ordering where the proof found only menu-level support.
6. Keep the implementation static-first. Introduce a framework only if the proven ordering requirement needs it; visual preference alone is not enough reason.

### Proof gate

- A Netlify deploy preview works at mobile and desktop sizes before any production push.
- Homepage, `/menu`, reservations, directions, reviews, seasonal themes, and every ordering CTA pass regression checks.
- No Square, POS, fulfillment, KDS, price, discount, or delivery-app setting changes are part of the deploy.

## Phase 6 — SEO, local content, and accessibility

### Work

1. Add a homepage self-canonical.
2. Make `/menu` a normal navigation link and include it in `sitemap.xml`.
3. Add a clear “Hikari Sushi Menu” H1 and a useful South Jordan page title/description.
4. Update restaurant structured data so `hasMenu` points to `/menu`; retain only accurate restaurant facts and validate the result.
5. Add a simple `robots.txt` that permits crawling and advertises the sitemap.
6. Ensure useful location, hours, pickup/delivery, reservation, and confirmed lunch information is accessible in normal page content. Do not generate thin city or dish pages.
7. Fix heading order, text/button contrast, touch-target sizing, keyboard navigation, visible focus, modal semantics/focus handling, carousel controls, alt text, and reduced-motion behavior.

### Proof gate

- Core menu names exist in the initial `/menu` HTML with JavaScript disabled.
- Canonical, sitemap, robots, title, H1, and structured-data URLs agree on `/menu`.
- Automated accessibility checks have no critical violations, and keyboard-only review completes navigation, filters, menu modal, reviews, and all CTAs.
- No confirmed restaurant fact differs among visible content and structured data.

## Phase 7 — Release and measurement

### Pre-release checks

- Run the repository's theme validator and any new asset/content validators.
- Check HTML, broken links, console errors, mobile/desktop layout, responsive images, and Netlify function behavior.
- Verify fresh and cached review behavior without changing the already-completed daily rotation.
- Repeat the Phase 4 pickup/delivery path on the deploy preview or final candidate.
- Joel completes a physical-phone review and explicitly approves production publication.

### Release

1. Publish through the existing Netlify/GitHub workflow with rollback identified.
2. Verify the live homepage, `/menu`, analytics events, review feed, ordering links, structured data, sitemap, and `robots.txt`.
3. Record the deployed commit and live verification results.

### Post-release evaluation

- Compare four comparable weeks before launch with four after: organic visits, unique order-link clickers, completed online orders, net sales, and average order value.
- Match weekdays and annotate promotions, closures, menu changes, or traffic anomalies.
- Extend the window if volume is too low. Do not convert correlation into a sales-uplift claim.

## Recommended execution order

1. Preserve/synchronize the repository safely.
2. Complete Phase 1 measurement and Phase 2 performance foundations.
3. Produce and approve the Phase 3 preview.
4. Complete the Phase 4 one-item proof before wiring featured-dish CTAs broadly.
5. Build Phases 5 and 6 together on a deploy preview.
6. Run Phase 7 verification, obtain approval, publish, and measure.

The first implementation checkpoint should therefore be: **a safely based implementation branch with repaired order-click tracking, a repeatable mobile performance baseline, and optimized delivery for the current hero plus the featured images chosen for the preview.**
