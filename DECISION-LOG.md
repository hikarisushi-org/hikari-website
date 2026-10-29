# Hikari Website — Decision Log

## 2026-10-11 — Retire competing Ops menu authority

Current local menu data equals fetched origin/main bfc1517. Preserve that approved
source and keep printed/ordering channels separate. Ops archived its stale registry
unchanged and disabled cross-repository generation/staging. Corrected this checkout's
DEVELOPMENT.md without switching branches or disturbing pending design work.
See ../hikari-ops/DECISION-LOG.md for verification and historical differences.

## 2026-09-24 — Keep the section, replace repeated subjects

Removing the entire editorial section overreached the request to avoid duplicate photos. Owner directed desserts and drinks instead: strawberry refresher lead, mochi texture close-up, Ramune hand-selection moment. Preserve the gallery and restore section value with distinct subjects. First drink edit was too short/wide; owner approved the taller reference-based revision. Owner explicitly authorized finishing and publishing all approved ivory/gallery refinements before bed.

## 2026-09-24 — Mobile favorites need visible browsing affordances

Owner rejected the horizontal text selector on mobile. Technical no-overflow/selector checks had missed discoverability. Mobile now shows a real adjacent photo-card peek and explicit44px-plus controls/counter, with native touch scrolling rather than custom gesture interception. Keep desktop's approved side-list interaction and all approved photo compositions. Future carousel validation must exercise actual touch movement, discoverability, first/last boundaries, keyboard controls and reduced motion, not just hidden-selector state changes.

## 2026-09-24 — Owner approved production publication

Joel's explicit “approve” authorizes publishing the exact tested release preview, superseding its approval gate. Rebuild without draft-wide noindex, preserve QR noindex and disabled hero automation. Publish the allowlisted artifact directly to the established Netlify site without bulk-pushing the dirty research/design branch. Preserve the previous production deploy for rollback.

## 2026-09-24 — Stage release separately and pin the approved hero

Owner authorized release preparation and requested disabling automated hero changes. Keep production unchanged until the concrete release draft receives final approval. Deploy only allowlisted public files because the repository root contains private research, proof images and source masters. Draft analytics must not contaminate production measurement. Retain daily review rotation and seasonal accent support but prohibit theme-driven hero media substitution. Mango Dream uses an existing-source crop rather than another generative texture pass; this cannot invent missing source detail and remains subject to owner review.

## 2026-09-24 — Food-image sets require texture and deliberate compositional variety

Joel accepts AI reconstruction of food in the private editorial concepts, superseding the earlier restriction against generative rephotography for this specific owner-approved use. That does not remove the photographic-direction requirements: food texture must read clearly, close and macro frames must actually fill the canvas, and a multi-dish set must not repeat one centered plate at one distance. Assign each image a role before editing and verify the group in the real desktop/mobile component. Preserve original source files and reject stretched geometry. This requirement is now enforced by `.codex/skills/hikari-food-image-direction/SKILL.md` and linked from `AGENTS.md`.

## 2026-09-24 — Flavor Spotlight selected for owner-supplied `Most ordered` sequence

Joel requested Customer Favorites, explicitly limited it to sushi, reviewed five creative alternatives and selected Flavor Spotlight. The final visible preview uses one immersive image plus a five-name selector and removes the comparison lab from the rendered page. Joel then supplied the `Most ordered` sequence: Firefly Fusion, Citrus Mango Dream, Playboy, Strawberry Blossom and Hot Cheetos Roll. Treat that owner-supplied business order as authoritative for the preview. Individual selections remain informational because direct Square item URLs for these five have not been separately proven; one general Square action avoids guessing destinations.

## 2026-09-24 — Motion must explain an interaction or state

Use micro-animation for direct feedback: buttons respond to hover/press, navigational underlines indicate interactive text, the mobile order bar announces its newly relevant state, the grid responds to pointer position, and the Hikari light drawing plays once when encountered. Do not add looping ambience, scroll hijacking, automatic section reveals, pulsing CTAs or moving food solely to appear trendy. Keep interaction durations between 140 and 260 ms, preserve content without JavaScript, and remove nonessential motion under `prefers-reduced-motion`.

## 2026-09-24 — Borrow the split-section scale, not Saffron's visual identity

The Saffron reference demonstrates useful food scale and a clear 50/50 hierarchy, but matching its full-screen black block would make Hikari heavier, more generic and repetitive alongside the existing hero, grid and editorial study. Adopt the useful principle as one controlled food moment: a near-full-width framed section, 60/40 image-to-copy division, 520–580 px desktop height, Hikari deep teal and cranberry, and a stacked mobile layout. Preserve the page's breathing room and light-positive identity rather than copying the reference literally.

## 2026-09-24 — Keep the six-photo gallery and make enlargement direct

Joel prefers the original six-image grid and wants the experimental editorial photography to remain additive rather than replace it. The grid is again the main `From our kitchen` presentation; the three concept images live in a clearly separate study below. The four-arrow control and modal added unnecessary interface chrome, so they were removed completely. On pointer devices, hovering the photograph itself is now the whole interaction: it enlarges in place and resets as soon as the pointer leaves. Touch layouts do not simulate hover, and reduced-motion preferences suppress the transform.

## 2026-09-24 — Separate brand atmosphere from verified food geometry

Joel likes the orange/yellow bokeh atmosphere because it conveys Hikari's light and positivity, while requiring the photographed plate and food to retain real proportions. Preserve the verified `sushi_eight` image as the foreground truth and apply the light effect as a separate CSS layer masked to open background space. This keeps brand mood adjustable without generatively redrawing the dish.

## 2026-09-24 — Identify visual assets by comparison, not filename

Joel's distortion report referred to the main top hero, but the first correction targeted the similarly colored gallery roll. The repository already contained the correct matching original as `sushi_eight.webp`; `sushi_row.webp` was an altered square presentation. For future visual corrections, inspect the displayed slot and compare candidate source pixels before editing. The private hero now uses `sushi_eight` with nondistorting crop behavior.

## 2026-09-24 — Do not generatively rephotograph verified dishes for layout tests

The generated Flares concept changed the physical proportions of Joel's real plate and sushi row despite a preservation prompt. A plausible-looking image is not accurate preservation. Removed it from the preview and restored the verified original photograph using only deterministic format conversion and uniform CSS crop/zoom. For dish-faithful layout testing, do not use generative reconstruction; use original pixels, nondistorting crops and ordinary color/exposure adjustments.

## 2026-09-24 — AI photo edits are composition studies, not menu evidence

Joel authorized AI-assisted modification of existing food images only to test a potential photographic and layout direction. Preserve real source photos, label concepts visibly and never publish the transformed images as proof of the exact dish sold. The test should answer whether dominant scale, macro texture, natural context, human action and asymmetric hierarchy close the visual gap. A real photo shoot remains the path to customer-facing assets; `docs/WEBSITE-PHOTO-SHOOT-GUIDE.md` is the capture contract.

## 2026-09-24 — Existing photos are acceptable; crop for texture

Joel explicitly accepted the current source photography and corrected the implementation issue: the displayed frames were not close enough to demonstrate the recommended sensory texture. Preserve the original files and use deliberate crop scale/position in selected gallery tiles. Keep a minority of wider photographs for visual context, and do not misrepresent a full-photo modal as an on-page close-up.

## 2026-09-24 — Visible change must be visually demonstrated

Joel rejected the subtle polish as visually identical. Preserving design means retain composition and identity, not restrict authorized improvements to imperceptible changes. For visual work, compare screenshots and name visible differences before claiming implementation complete. Added expressive hero typography, a light emblem and accessible full-photo exploration without changing section order or the Square path. Video remains omitted pending authentic footage.

## 2026-09-24 — Apply refinements, preserve original

Joel authorized all fitting researched refinements but explicitly required keeping the current design. Retained layout, palette, fonts, photo assets and even corners; refined the existing sun/wave illustration rather than adding competing decoration. Added quiet material texture only to story section. Motion is once on view, under three seconds, disabled for reduced-motion preferences; all content is visible without JS. Existing food closeups and chef photo already meet the photographic direction. Inspected video candidates had stylized backgrounds and one Runway watermark, so no claim of authentic footage or video inclusion. No additional media/font/network dependencies; no new Lighthouse measurement or conversion claim.

## 2026-09-24 — Original preferred; remove asymmetric framing

Joel likes the original best but dislikes mixed square/rounded image corners. Retained the original composition and replaced image-container corner treatment with subtle equal radii. This is a scoped visual refinement, not permission to deploy or redesign other components.

## 2026-09-24 — Correct styling-only response with actual new designs

Joel explicitly meant two new website compositions, not alternate palettes and fonts. Previous acknowledgment-only replies also failed to start authorized work. Created independent HTML documents with distinct hierarchies: panoramic/editorial versus interactive discovery/order paths. Preview category selection changes representative photography and caption only; generic Square CTA avoids unverified category deep links and never exposes QR `/menu`. Existing original/servers and production remain intact. New servers reuse the existing allowlisted handler on dedicated Tailscale ports6422 and6423.

## 2026-09-24 — Compare styling without changing content

Joel requested two additional styling variations. Used query-selected scoped CSS in the private preview so all three share identical content and actions, eliminating copy/photo differences from the styling comparison. Original remains default. Warm linen changes typography, palette, hero composition and image shape; Porcelain blue uses stronger sans typography, white space, wider food image and round CTAs. No production or server changes.

## 2026-09-24 — Authorized private creative redesign

Joel explicitly granted creative implementation freedom overnight. Built one cohesive candidate rather than copying every reference idea: bright calm brand colors, real-setting food imagery, clear ordering and short text. Omitted popularity claims and category deep links because neither was required and neither should be invented. Preserved production source, QR-only menu, Square operations and servers. Kept preview analytics diagnostic-only and reviews static to avoid polluting live measurement or claiming production integration. Fixed screenshot capture races by disabling smooth scrolling in tests and waiting for the top position; fixed intrinsic-height photo distortion using bounded picture containers. Existing prepared photos may be enhanced; no new photo generation occurred.

## 2026-09-24 — Preserve visual feedback and distinguish interpretations

Joel explicitly requested durable documentation of his comments and the assistant's emerging understanding. Created a visual discovery journal with reference-by-reference reactions, direct statements, and separately labeled hypotheses. Bright means light/uncluttered, not neon; the identity must remain modern Japanese, positive, tranquil and gently feminine. Maman and Pokeworks are positive references. Unrated examples remain unrated. Prior fixed-layout SPECS were labeled superseded so a future session cannot mistake the premature Saffron preview for approved requirements. No website implementation authorized by this documentation request.

## 2026-09-23 — Correction: comparison is not design approval

Joel's Saffron observations requested an opinion about profitable online-order growth. Implementing those observations as layout requirements was premature. The existing preview remains unapproved and implementation is paused. This supersedes earlier entries implying adoption of the alternating-card/six-photo direction.

Research recommendation, not an adopted purchase/design decision: borrow clear ordering, useful food merchandising, and retention mechanisms; keep Square while measuring the bottleneck. Three Owner case studies do not separate incremental demand from channel shift or establish layout causality. Owner advertises Square connectivity, so POS replacement must not be assumed. [Evidence and next decision](results/2026-09-23-website-audit/14-OWNER-COMPARISON.md).

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
# September 24, 2026 — One placement per food image

Owner requested no gallery imagery repeated elsewhere on the page. Removed the private preview's redundant editorial reprise and bento comparison rather than adding replacement imagery; retained unique hero, feature, favorites and story photos. Production is unchanged.

## 2026-09-26 — Ordering analytics

Reuse the existing single-owner dashboard and credentials, with a small private cache. Prefer official APIs and verified merchant CSV schemas over new browser scraping. New GA evidence event carries only an opaque order ID and journey; native purchase remains the sole browser purchase event. Exact-ID match is required; unsupported receipt token substitutions remain unknown. Historical gaps cannot be backfilled.

Live testing disproved the assumption that Square's custom header persists to its server-rendered payment route. Installed the supported receipt tracking fallback instead. Do not mark it verified until a real order supplies all three records.

Computer Use later failed initialization repeatedly, including after reset. Final desktop-browser verification and download of the requested Grubhub Sep1–25 deposit report remain pending. Do not bypass signed-in browser controls or claim those steps passed.


## 2026-09-26 — Browser recovery and merchant exports

Keep Uber September 22 funnel availability separate from the September 26 selected export end; preserve rounded offers and ad-spend differences. Grubhub customer/promotions remain manual portal evidence because no repeatable export was found. Do not call pending genuine receipt evidence zero website sales.

## 2026-09-27 — Production design recovery

Root cause: direct design releases were not reconciled with main, so the September 26 review-sync commit deployed the older source. Recovery used the saved approved deploy, then byte-verified public files in an isolated worktree based on current main. Preserved latest review data and functions. Future production must be reproducible from main; do not redeploy the older dirty source checkout.

## 2026-09-27 — QR menu exploration before implementation

Freddie’s concern is the time required to scan many menu items. Owner requested three visual options before implementation, then chose an interactive HTML comparison instead of generated images. Compare distinct browsing structures using identical actual content; preserve existing photos and keep all work private. Do not interpret this prototype request as approval to publish a redesigned /menu.

### QR menu option 2 refinement — 2026-09-27

Owner rejected option 1 because the Jump to dropdown was not discoverable, and preferred option 2. Keep category selection explicit; refine personality without sacrificing navigation clarity.


### 2026-09-27 — Sushi preview filters
Owner selected Sushi as parent with All and type filters. Goal is customer ease of exploration and finding dishes, not sales. Shared Nigiri or Sashimi item appears in both relevant filters, only once in All.


### 2026-09-27 — Continuous Sushi navigation
Owner approved continuous Sushi browsing with sticky jump buttons, preserving all dishes while navigating. Removed All because nothing is filtered; search scrolls away in Sushi so only section navigation remains sticky.


### 2026-09-27 — Continuous menu alternative
Owner approved a separate full continuous-menu preview for customer exploration and findability. Categories are shortcuts rather than gates. Sushi subsection navigation appears contextually to limit persistent navigation height. All 60 unique items appear once; Most Popular duplicates are omitted.


### 2026-09-27 — Stable main category navigation
Replaced changing navigation in continuous.html with eight permanently visible categories in two fixed rows. Removed duplicate initial shortcuts and sticky Categories/current/Search row. Sushi subsection controls remain below primary categories. Verified Salads and Sushi/subsection jumps, manual scroll highlight from Salads into Sushi, 60 retained dishes, narrow layout without horizontal overflow and heading clearance. Physical-phone guest testing pending; private preview only.


### 2026-09-27 — Readable menu typography
Increased continuous preview typography for older guests: dish names 18px, descriptions 16px, prices 17px, category labels 14px and Sushi shortcuts 13px; buttons at least 52px tall. Descriptions now show fully. Verified 375px frame without horizontal overflow and jump heading clearance; synced iPhone preview. Owner physical-phone readability review pending; no deployment.


### 2026-09-27 — Disable My picks
Owner approved typography: names 20px, descriptions 18px, prices 19px, main categories 15px, Sushi shortcuts 14px. Disabled My picks behind PICKS_ENABLED=false, retaining code. Preview detail dialog verified without save button/hint; iPhone copy synced. Meaning of owner phrase flip it around remains pending clarification. No deployment.


### 2026-09-27 — Lock background under dish sheet
Fixed background scrolling during dish-sheet dismissal: save scroll position, lock body and root while modal is open, block backdrop touchmove, restore inline styles and exact position on close, and avoid scroll tracking updates while locked. Browser verified background scroll attempt leaves offset unchanged and drag close restores 6330.45px within subpixel rounding. iPhone copy synced; actual intermittent iOS swipe issue requires owner retest.


### 2026-09-27 — Connected dish-detail motion

The Facebook reference expands a selected listing and reveals the unchanged list as the detail is pulled down. Since the Hikari list uses text rows rather than photo thumbnails, the preview adapts the expansion origin to the selected row without claiming an exact native Facebook reproduction. Keep the existing no-X choice and tappable accessible handle. Gesture cancellation must not synthesize a close-button tap.


### 2026-09-27 — Full-screen return to source correction

Owner corrected the prior Facebook interpretation: essential behavior is full-screen detail collapsing into the source tile, not a bottom sheet sliding offscreen. Hikari uses the source text row as the destination. Prevention: inspect both transition endpoints and final detail geometry in supplied reference before choosing animation. No production change.


### 2026-09-27 — Independent whole-photo return

Frame-by-frame Facebook inspection showed details fading while the intact photo shrinks and travels into its original thumbnail. Owner approved adapting this to text rows: intact photo scales toward its row and fades at arrival. Do not crop the complete detail page into a row.


### 2026-09-27 — Photo-to-row landing

Owner approved morphing the shrinking photo into its text row. Animate only the landing background dimensions; retain uniform photo scale and unscaled text. Delay text reveal until the background is almost expanded, then restore the original interactive row.


### 2026-09-27 — Populated row return

Owner requested the populated row itself during the transition. Use a proportional visual clone of the original row, then restore the original button at matching final bounds; hide duplicate contents from assistive technology.


### 2026-09-27 — Row overlap correction

Avoid blank landing intervals by completing the populated row transition before fading the photo; verify intermediate frames, not just final state.


### 2026-09-27 — Tiny thumbnail experiment

Owner requested small thumbnails solely as a test and concrete photo-animation anchors. Preserve existing source images and typography; use contain fit to avoid stretching/cropping. At 28px these serve as location cues rather than detailed food photography. Keep pre-experiment continuous-before-tiny-thumbnails.html.


### 2026-09-27 — Direct thumbnail transition

Owner approved thumbnails and asked to undo adaptations made for a text-only origin/destination. Keep the thumbnail as sole photo anchor; finish dismissal upon arrival rather than holding for obsolete row effects.


### 2026-09-27 — Stable Small Tempura opening

Owner identified Small Tempura as showing a second size adjustment on opening. Isolate the animation layer from scroll layout and reserve loaded image proportions. Updated browser measurements agree before/after handoff; exact original iPhone symptom is not independently reproduced.


### 2026-09-27 — Browser toolbar resize correction

Owner 23:21:57 recording shows toolbars expanding while animated photo stays larger than the settled image. Prior overflow-only fix missed dynamic viewport sizing. Prevention: verify geometry while viewport height changes, not only with a fixed iframe. WebKit distinguishes dynamic dvh from minimum svh (https://webkit.org/blog/12445/new-webkit-features-in-safari-15-4/).


## 2026-09-27 — Owner-approved QR menu checkpoint

Owner accepted the current private menu design and requested a commit. Keep compact text rows with thumbnail anchors; remove row morph effects. Preserve full-screen details and 300ms direct image transitions. Browser-toolbar-driven viewport changes require a frozen small-viewport photo cap and stable scrollbar space. This checkpoint does not authorize pushing or deploying.


### 2026-09-27 — Detail presentation refinement

Refine only the detail screen after owner request. Use existing Hikari colors/type/assets and original food images. Replace isolated arrow with Menu action; preserve full-screen behavior, thumbnail transition, stable viewport photo cap and main menu layout. New polish remains reviewable separately from committed checkpoint.


### 2026-09-27 — Swipe hint and Sushi navigation fix

User prefers swipe instruction alone over labeled top return control. Keep accessible dismissal via the instruction itself and Escape. Reproduced Sushi jump landing in Salads with Sushi heading ~127px below intended position: dynamic subnav changes during smooth scrolling changed destination geometry. Pin destination layout until scroll settles, then resume scrollspy; touch/wheel cancels navigation lock.


### 2026-09-27 — QR preview reliability and photo edges
Hide the detail scrollbar instead of reserving its gutter: keeps photo width stable while allowing true edge-to-edge presentation. Preserve original photos with contain fitting and intrinsic dimensions.


### 2026-09-27 — Remove phone photo letterboxing
The remaining 54svh maximum height shrank contained photos inside a full-width box on shorter phone viewports. Removed that cap: intrinsic proportions and width now determine photo height. Browser confirms Small Tempura is square and exactly view width; phone copy synced. Owner iPhone verification pending.


### 2026-09-28 — Approved QR preview push checkpoint
Approved full-width dish detail, readable return hint, robust category jumps, photo-loading fallbacks, shortened Bento labels, and finishing polish saved on codex/website-improvements. Narrow layout checks covered all 60 rows; owner accepted full-width photos on iPhone. Preview only; production files excluded.


## 2026-09-28 — Promote approved preview from production main

The owner explicitly authorized live `/menu` replacement after the preview branch push was mistaken for publication. Preview push and production publication are separate operations. Integrated onto current production main in an isolated checkout, preserving unrelated dirty work and homepage source.

Keep `js/menu-page.js`'s existing MENU-DATA block as the canonical content source. Generate public `data/customer-menu.json` during the build and enrich it using image-path keyed `data/menu-presentation.json`, instead of publishing the frozen concept snapshot. Verified canonical content equality before release. Future price/description edits must flow through the same source.

The final approved image geometry supersedes the earlier frozen 54svh-cap decision: use full width with intrinsic proportions and no height cap. The prior cap caused visible letterboxing on the owner's iPhone. Owner accepted the uncapped version before publication; preserve this when revisiting animations.

## 2026-10-01 — Sunrise variations

Owner chose the first sunrise-and-waves concept. Created Quiet dawn, Morning tide and Painted morning in the existing private comparison, preserving the prior three at `original-three.html`. Same verified Tailscale URL: http://100.124.197.26:6433/. Desktop and 390px browser layouts visually inspected; no phone-width overflow; replay, pause and still controls exercised. Live site unchanged. Next: owner chooses or refines a sunrise variation.

## 2026-10-01 — Keep Tailscale motion preview running

Preview failure was confirmed: no listener on 6433, and local/Tailscale HTTP requests failed. Installed user LaunchAgent `com.hikari.motion-preview` with KeepAlive, bound only to `100.124.197.26:6433`. Direct external-volume serving under launchd returned 404; serving an identical copy at `~/.local/share/hikari-motion-preview` restored HTTP 200. Browser freshly loaded all three concepts via Tailscale. Future source edits MUST sync the concept folder to that serving directory. The Mac must remain awake, logged in, and connected to Tailscale; access from the other computer remains user-unverified.

## 2026-10-01 — Focus preview on Quiet dawn

Owner approved the sequential ray treatment and requested only the selected concept. Removed the other two cards from the main preview, centered Quiet dawn, retained replay/pause/still controls, and preserved previous comparison in `sunrise-three.html`. Synced persistent serving copy; Tailscale HTTP and rendered browser verified. Production unchanged.

## 2026-10-01 — Wave-motion research

At owner request, a worker researched online primary sources; no artwork changed. Current waves use stroke reveal only. Recommended next prototype: refine right-side spacing and broad curves, preserve approved rays, then one restrained path-morph swell (~2–3 SVG units) with anchored endpoints and lower wave following 120–160ms later. Start about 2.15s and rest by ~3.7s; these timings are design judgment. Preserve finished static mark for reduced motion. Avoid perpetual loops and whole-line sliding.

Sources: https://www.ibm.com/design/language/animation/tips-and-techniques/ ; https://www.ibm.com/design/language/animation/classic-principles/ ; https://motion.dev/docs/react-svg-animation ; https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/ ; https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide .

## 2026-10-01 — Implement gentle wave swell

Refined Quiet dawn curves for consistent spacing and added finite CSS path morphs: upper starts 2.3s, lower follows 140ms later, each lasts 1.5s. Endpoints anchored; small internal displacement, no loop; approved rays preserved. Synced persistent Tailscale serving copy. Browser captured 120 distinct computed geometry frames returning to original geometry; pause and still mode verified. Finished rendering inspected. Live website unchanged.

## 2026-10-01 — Independent animation review

Separate agent reviewed Quiet dawn source and actual motion in native Chrome via CUA. Verdict: already good; no material motion/visual defect; retain restraint. Verified progressive rays, wave deformation and settling, replay, pause/resume, and still mode. Optional polish: raise sun 1–2 SVG units to improve right-side wave separation at small sizes. Preview-only issue: status text remains Playing when paused/finished, and Pause stays enabled in still mode. No changes made. Dark Reader altered colors during review, so color fidelity was not verified; OS reduced motion, mobile and Safari were not tested by reviewer.

## 2026-10-01 — Private homepage hero integration

Owner requested seeing Quiet dawn in the existing hero icon position. Created homepage.html and homepage/ CSS/JS in the motion preview from a fresh production HTML/CSS snapshot; replaced hero pseudo-icon with scoped decorative animated SVG (88px desktop,72px mobile). Preserves approved rays, raised sun and swell; static reduced-motion fallback. Uses existing production photos without edits. Preview excludes production measurement and remote theme/review refresh scripts; review excerpts remain snapshot content. Synced to persistent Tailscale service: http://100.124.197.26:6433/homepage.html. Desktop and390px browser appearance inspected, no mobile overflow; five ray elements, wave animations and hidden original icon checked; no console errors. Production unchanged. Next: owner reviews exact hero placement before any release.

## 2026-10-03 — Teriyaki photo preservation and release
Owner approved AI-edited first photograph, including visible rice and warmer lighting, and explicitly authorized website, QR-menu and delivery-platform updates. Kept original high and alternate angles unchanged alongside the approved master and provenance. Published from an isolated worktree based on current main to preserve unrelated dirty homepage changes. Used a dated image name to avoid stale photo caches. Menu recipe wording remains unchanged pending owner confirmation of the pictured side. Marketplace updates must be verified per platform; website deployment is not evidence of delivery-platform synchronization.


## 2026-10-03 — Delivery photo continuation

Grubhub menu is externally managed with disabled edits. Square is the source: its photo update propagated to the exact Grubhub merchant item. DoorDash needs landscape delivery imagery; extended tabletop around approved dish and submitted 1600x900 derivative. Do not equate pending moderation or merchant sync with customer-facing verification. Uber password rejected; email verification is the remaining access boundary.


## 2026-10-03 — Approved description release

Approved rice-bowl description released in 9a780f9: Tender chicken glazed in sweet-savory teriyaki sauce over white rice, served with a fresh side salad. Live website JS and Uber public menu verified; Square catalog readback verified with all non-description fields unchanged; DoorDash saved/reloaded item and Grubhub synced merchant item verified. User also confirmed photos look correct across delivery apps. Customer-facing DoorDash/Grubhub description checks remain distinct from merchant verification.


## 2026-10-03 — Salmon bowl release

Published owner-approved jasmine-rice salmon image and fresh-side-salad description in 398764d. Website desktop1440/mobile390 detail inspected; build and 9 analytics tests passed. Square exact rice-bowl item CNJNTCWWEUNX4VDSQACF2A2N updated with image B62ZRFHCZZORZF2AE2D5F7BC; public detail visually verified; unrelated fields preserved. Uber public image/description verified. Grubhub merchant image/description sync visually verified. DoorDash description synced from Square; photo now reports visible, subject to later review. DoorDash manual-description override was declined to preserve POS synchronization. Approved master, landscape derivative and original references archived in assets/images/source/2026-10-03-teriyaki-salmon. No bento changes.
