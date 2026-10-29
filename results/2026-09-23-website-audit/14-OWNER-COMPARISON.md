# Owner customer comparison: what Hikari should borrow

Research date: September 23, 2026. Three delegated read-only comparisons, synthesized against Hikari's measured baseline and official product documentation. This is a recommendation, not approval to redesign or deploy.

## Decision summary

**Borrow the conversion strategy; retain the custom website and Square while measuring the actual bottleneck.** Owner's value proposition extends beyond design: acquisition, ordering, merchandising, retention, and managed execution. A capable bundle can be valuable even when its public case studies do not prove causation. Recreating every feature ourselves would also have maintenance and labor costs.

The Saffron-style food/story panels can make dishes desirable, explain why to choose Hikari, and place an ordering action beside that motivation. A gallery can reinforce appetite and trust. These are plausible conversion mechanisms, not demonstrated sales lifts. There is no evidence here that six photographs, alternating cards, or omitting homepage prices is the winning formula. A long page can serve undecided visitors if ready-to-order guests have an immediate route to checkout.

The previous preview was changed prematurely when Joel requested an opinion. Its layout and photography remain unapproved; implementation is paused. `/menu` remains the isolated table-QR restaurant menu, with no public website discovery path. Public Order Online actions lead to Square's separate ordering storefront.

## Three cases: observations versus claims

| Restaurant | Useful observed pattern | Owner's before/after direct sales | Evidence limitation |
|---|---|---|---|
| [Sushi Me Roll'n](https://sushimerolln.com/) | Repeated order actions, featured dishes, food/restaurant positioning, first-order offer, rewards and app | $1,000 to $10,000/month | Arithmetic is +900%; headline +47% uses an undefined metric. Closest food-category comparator, but AYCE/value positioning and market differ. |
| [Doo-Dah Diner](https://doodahdiner.com/) | Direct-order value message, popular items, pickup/delivery, loyalty and reordering | $3,000 to $7,000/month | Arithmetic is +133%; headline +54% and +$72,000 do not specify comparable periods. |
| [Metro Pizza](https://metropizza.com/) | Location-aware ordering, featured items, app/rewards and quick reorder | $95,000 to $112,000/month | Arithmetic is +17.9%, versus +54% badge and +$10,000/month headline. Multi-location context cannot forecast Hikari's results. |

Sources: Owner's [Sushi case](https://www.owner.com/case-studies/sushi-me-rollin), [Doo-Dah case](https://www.owner.com/case-studies/doo-dah-diner), and [Metro case](https://www.owner.com/case-studies/metro-pizza). Figures are vendor-published, not audited results. Different snapshots could explain discrepancies; the pages do not reconcile them.

Sushi's case also reports $43 to $52 average check, 300+ app downloads in 30 days, and $1,500+ monthly marketing-attributed sales. Doo-Dah reports $45 to $52 checks, 500+ downloads in 30 days, and $2,000+ monthly delivery business; delivery can overlap direct sales. Metro reports $60 to $68 checks and 11,000 downloads in 90 days. Downloads are not active buyers or incremental orders. Metro's check increase alone means revenue growth cannot be read as equivalent order growth.

All three combine ordering with repeat-customer mechanisms. Their publicly available pages do not isolate homepage layout from traffic, pricing, promotions, apps, marketing, or channel migration. They do not provide comparable all-channel restaurant revenue, discount-adjusted profit, controlled conversion tests, or retention cohorts. Moving a marketplace order to direct can improve margin without increasing total restaurant sales—still valuable, but a different outcome.

The earlier Saffron case-study reference concerns Saffron Indian Kitchen in Pennsylvania, not Saffron Valley South Jordan. Do not attach its sales claims to the Utah visual reference.

## What to adapt—and what not to assume

| Candidate | Why it might help Hikari | Test / guardrail |
|---|---|---|
| Immediate, consistent Order Online action | Serves guests who already know what they want | Verify mobile visibility and Square continuation; no competing QR-menu link |
| A small selection of compelling dish photos with useful copy and adjacent order actions | Reduces choice effort and gives undecided visitors a reason to order | Use Joel-approved real food photos; only verified item links; measure completed orders, not clicks alone |
| Text-free gallery | Appetite and credibility without forcing full catalog browsing | Optional supporting section, not a proven six-image requirement; responsive images and deferred below-fold loading |
| Short restaurant-character sections | Explains distinctive reasons to choose Hikari | Real, specific benefits; avoid generic filler and repeated photos |
| Retention messaging and easy reorder | Can turn a first direct purchase into repeat business | Consented contacts; track 30/60-day repeat and contribution after offers |
| Genuine local search content | May attract qualified local intent | Useful South Jordan information, not mass generic city pages; QR menu remains excluded |

No fresh comparable Lighthouse tests were run for these three restaurants in this research pass. Therefore no speed ranking is claimed. The original Hikari/Saffron lab comparison and subsequent Hikari optimization are separate evidence, not proof that Owner's card layout is faster. Any chosen preview needs its own repeat mobile performance verification before release.

## Owner versus the existing Square setup

[Owner pricing](https://www.owner.com/pricing) currently lists $249/month plus a 5% restaurant order fee, or $499/month without that restaurant fee. Both plans charge guests a 5% support fee. The restaurant-plan crossover is $5,000 monthly order volume, before other costs. Confirm fee bases, payment processing, delivery, promotions, migration, and cancellation terms in a written quote.

[Owner advertises Square POS connectivity](https://www.owner.com/pos-integrations), included in its offering. Do not assume a POS replacement is necessary. Equally, this marketing page is not proof of Hikari's modifiers, availability, refunds, KDS routing, discounts, or dispatch working end to end; require a demonstration against the actual setup.

[Square Email Marketing](https://squareup.com/us/en/software/marketing/email) already supports customer groups and automated campaigns. [Square documents abandoned-cart emails](https://squareup.com/help/us/en/article/6958-abandoned-cart-emails). Feature availability, eligibility, cost, and Hikari's configuration must be checked before promising parity or enabling anything. A managed bundle may save Joel time even where features overlap.

Hikari's authenticated baseline is **15 completed direct online orders and $602.90 net direct sales across Aug. 26–Sept. 22 (28 days), $40.19 AOV**. This is not all-channel revenue or a monthly forecast. GA4 access is still missing, so we cannot determine whether the main problem is low qualified traffic or weak conversion.

At this direct volume, subscription cost deserves scrutiny. But low direct volume alone does not disqualify Owner: a large profitable migration opportunity from third-party orders could change the economics. That opportunity has not been quantified here.

Use this decision equation: incremental contribution from genuinely new orders + retained margin from channel shifts + defensible labor savings − added platform/marketing/discount costs − migration cost. For illustration only, a net $300 monthly fixed cost and $10 contribution per genuinely additional order require 30 extra monthly orders; neither assumption is a Hikari forecast. Channel-shift orders contribute only their incremental margin savings, not their entire order margin.

## Recommended next step

Agree on the conversion brief before further design work: immediate ordering, a few compelling dishes, concise reasons to choose Hikari, and supporting photography that stays within mobile performance limits. Keep existing preview as an unapproved sketch; do not automatically rebuild it again.

Then recover GA4 access, verify deployed measurement after an approved release, and reconcile weekly qualified visits, order starts, completed Square orders, net sales, discounts, and channel mix. Cross-provider attribution must be demonstrated; a website order click is not a purchase. At 15 direct orders per four weeks, a short split test is unlikely to resolve modest effects. Use usability proof first and a longer matched-period comparison, disclosing promotions, seasonality and other changes.

Before buying Owner, ask the salesperson for:

1. Saffron Valley South Jordan's actual dated, same-location results and owner reference—not the Pennsylvania Saffron case.
2. Total restaurant sales and order counts alongside direct growth, third-party decline, promotions and advertising spend.
3. Net contribution after all fees and incentives; definitions and periods behind the headline percentages.
4. A Hikari-specific Square/KDS/dispatch demonstration, full written fee schedule, data export/domain ownership and exit plan.

No website, Square setting, customer campaign, paid order, or production deployment was changed during this comparison.
