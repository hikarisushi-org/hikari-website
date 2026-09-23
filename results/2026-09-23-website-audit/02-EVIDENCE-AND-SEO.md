# Evidence, SEO and measurement notes

September 23, 2026. Findings labeled “observed” were inspected in the live UI, public response or repository. Recommendations and likely benefits are judgments, not measured revenue lifts.

## Owner’s claims and how much weight to give them

| Source | Claim / evidence | Assessment |
|---|---|---|
| [Owner pricing](https://www.owner.com/pricing) | 20% more SEO traffic within 30 days; up to 80% higher visitor conversion; app users reorder around twice as often | Vendor claims. The viewed page does not provide enough study design, sample selection or controls to independently reproduce them. |
| [Owner Series C memo](https://www.owner.com/c) | Standardized templates permit repeated split testing of action placement and ordering. Reports 100% more conversions and 30% SEO growth in 28 days | Plausible testing capability, but vendor-reported results. Different figures across marketing pages should not be combined into a forecast for Hikari. |
| [Owner SEO guide](https://www.owner.com/blog/seo-for-restaurants) | Emphasizes local content, readable menus, speed, clear actions and integrated ordering | Useful hypotheses. Its claim that leaving for an external ordering site makes Google see a poor experience is not established by the Google guidance reviewed. |
| [Capterra reviews](https://www.capterra.com/p/10002488/Owner/reviews/) and [restaurant-owner discussion](https://www.reddit.com/r/restaurantowners/comments/1jc4zmw/anyone_using_ownercom/) | Mixed reports of sales, marketing, cost and integration experience | Customer anecdotes, with selection and attribution limits; not controlled experiments. Capterra search excerpts were available, but full-page retrieval failed. |
| [OrderingSpace comparison](https://orderingspace.com/compare/owner-com/) | Presents negative before/after restaurant examples and a search screenshot | Published by a competing provider. Raw data and controls were not supplied; its conjecture about Google filtering a site is not verified. |
| [Genesys Growth case study](https://genesysgrowth.com/case-studies/owner-com) | Describes growth of Owner’s own marketing website | Not evidence that Owner-built restaurant websites increase restaurant sales. |

**Research conclusion:** this bounded search found no published independent controlled study validating Owner’s general conversion or restaurant sales uplift. That does not show its claims are false. It means the actual Saffron implementation, primary Google guidance and Hikari’s own future results deserve more weight than testimonial percentages.

App customers may already be unusually loyal, and direct sales can rise by moving existing orders from another channel. Neither effect, by itself, proves incremental restaurant revenue or profit. Evaluate total sales, retained margin and repeat behavior separately.

## SEO: observed comparison

| Check | Hikari | Saffron | Recommendation |
|---|---|---|---|
| Homepage title and description | Includes sushi/Japanese food and South Jordan | Explicit Indian-food and South Jordan wording | Hikari already has a reasonable baseline. Improve customer-facing specificity, not keyword repetition. |
| Menu discoverability | `/menu` returns 200 and has a canonical; homepage links to `#menu`; sitemap lists only `/` | Header links directly to `/menu`; rendered menu has its own title, canonical and H1 | Put Hikari’s menu in normal navigation and the sitemap. |
| Initial menu HTML | No actual item names/content in initial response; JavaScript renders 67 cards, including repeated popular items | Items present in rendered DOM; initial response unavailable to our HTTP collector | Prefer initial HTML for Hikari’s core menu text. This is a robustness improvement, not proof that its current menu cannot be indexed. |
| H1 on `/menu` | None observed after rendering | Menu H1 observed | Add a clear “Hikari Sushi Menu” heading and useful local page title. |
| Restaurant structured data | Address, phone, cuisine, hours, geo and image already present; menu points at `/#menu` | Restaurant data includes menu URL, served areas and order action; FAQ data also present | Keep facts accurate and align Hikari’s menu URL with the intended canonical route. Additional schema alone does not guarantee rankings or special results. |
| Canonical on homepage | Missing in live HTML | Present in rendered DOM | Add a self-canonical as URL hygiene. |
| `robots.txt` | 404 | HTTP inspection challenged; browser resource request blocked | Hikari’s 404 is not a crawl block. A simple file can advertise its sitemap. Saffron’s crawl rules are unknown here. |

Google can render JavaScript, but recommends server or pre-rendering because it helps users and crawlers and some bots cannot execute JS. [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)

Local visibility depends on relevance, distance and prominence, including accurate business information and reviews. A design copy cannot neutralize location or reputation differences. [Google local ranking guidance](https://support.google.com/business/answer/7091)

Create pages for useful, real offerings: menu, location/visit and confirmed lunch or takeaway services. Avoid large sets of near-duplicate city/dish pages created only to funnel visitors to the same destination. [Google doorway-abuse guidance](https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse)

Use accurate restaurant markup and validate it; do not promise a rich result from the presence of an order action or FAQ block. [Google LocalBusiness guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business)

Both homepages scored 100 for basic Lighthouse SEO. Those checks do not measure local rankings, keyword demand, backlinks, search visibility or sales.

## Performance evidence

The [main report](README.md#measured-performance) contains the comparable lab metrics. Raw rendered reports are saved in `evidence/*pagespeed*.txt`.

- Hikari mobile transferred **13,142 KiB**, with estimated image savings of **6,517 KiB**. Saffron transferred **9,031 KiB**, with **700 KiB** estimated image savings. These are run-specific totals, not a fixed byte budget for every visitor.
- Hikari’s biggest sampled images: `island_heatwave.png` **2,180.3 KiB**, `flares_of_hikari.png` **1,992.3 KiB**, `gyoza.png` **1,423.0 KiB**. The repository’s older “all images converted to WebP” overview no longer describes these current menu assets.
- Public HEAD responses: Hikari landscape video **2,520,975 bytes**, portrait **3,696,566 bytes**; Saffron video **2,632,987 bytes**. On a fresh mobile Hikari load, the hidden landscape video was playing. This confirms unnecessary media activity, not the exact number of duplicate bytes downloaded in every session.
- Hikari’s mobile accessibility audit flags contrast, touch targets and heading order. Fix these during visual implementation. A 100 score on Saffron is not a complete accessibility certification.
- Saffron’s mobile **origin-level** Chrome field data displayed a passed Core Web Vitals assessment, LCP **1.1s**, CLS **0**, INP **N/A** for the latest 28-day period. URL-level data was unavailable. Hikari showed **No Data**; absence of field data is not a failed assessment. Keep these field values separate from the lab comparison.

The direct PageSpeed API returned quota errors. The normal PageSpeed web UI successfully produced both reports; there is no remaining performance-test blocker. Google also cautions against chasing perfect scores instead of improving user experience. [Google page-experience guidance](https://developers.google.com/search/docs/appearance/page-experience)

## Ordering observations

Saffron: menu → pickup schedule → butter-chicken options → add item → cart → checkout. Required choices and suggested desserts were visible. An $18 item produced a **$0.90 service fee**, **$1.58 tax**, and a preselected **$3.60 tip**, totaling **$24.08**. Checkout requested a mobile number with text verification, name/email and payment; no personal information was entered. The fee is 5% of the item subtotal in this example, matching the guest-fee disclosure on [Owner pricing](https://www.owner.com/pricing).

Hikari: homepage order link → Square → fulfillment/location selection → promotional overlay → item → cart. The $15 Flares item became **$12 after the existing 20% discount**; the displayed estimated total with tax and selected tip was **$14.39**. These are different products and tip selections, not a price comparison. The payment transition encountered automated security verification, so payment completion and final fees remain unverified. Treat this as an audit-session limit, not proof ordinary customers are blocked.

Square already advertises common wallet/card payment methods. Its promo overlay and unnecessary choices are configuration/flow issues to evaluate before deciding the entire commerce backend must change. No customer account was needed to reach either test cart.

The homepage’s order-click mismatch was confirmed in both live HTML and `index.html:109`. Fix the condition and verify the named event on a real click, then check provider-side attribution before claiming complete sales tracking.

## Follow-up: who actually delivers Owner orders?

**Owner supplies the ordering technology; outside couriers or the restaurant's own drivers deliver the food.** A restaurant-branded checkout does not mean an in-house delivery fleet. [Owner platform terms, section 3](https://www.owner.com/platform-terms)

Owner's help center identifies **Uber Eats ($6.45, up to 8 miles)** and **DoorDash ($7, up to 5 miles)** as delivery providers. Restaurants can cover part of the charge, so the customer-visible fee may differ. These are published provider rates checked September 23, 2026, not a quote for Saffron or Hikari. [Owner delivery-fee documentation](https://help.owner.com/en/articles/14502948-how-do-i-cover-a-portion-of-the-delivery-fee-for-my-guests)

Owner explicitly documents automatic driver assignment when an eligible order is converted to delivery. Owner Support can track/contact drivers and handle delivery problems. [Automatic assignment](https://help.owner.com/en/articles/11833192-how-do-i-change-an-order-from-pickup-to-delivery) · [Delivery support](https://help.owner.com/en/articles/11832793-how-do-i-deal-with-delivery-driver-issues)

In practical terms: restaurant-branded checkout → delivery request through Owner → courier network assigns a driver → restaurant pickup → customer delivery. This is fulfillment for a direct restaurant sale, distinct from acquiring an order through the DoorDash/Uber marketplace. It is not evidence that Owner compares all networks on every order. Grubhub fulfillment and Saffron's specific provider/routing settings were not established. No delivery order was submitted to find out.

For Hikari, treat branded checkout and driver dispatch as two connected requirements. Copying the visual design alone supplies neither the payment nor delivery integration.

## Boundaries and verification

No production edits, accounts, marketing subscriptions, checkout submissions or payments were made. One temporary item was added to each guest cart and then removed; both empty states were confirmed. No analytics, Search Console or private sales accounts were queried. Search snippets were not treated as reliable local rank measurements.

Saffron’s pages loaded normally in the browser, but the standalone HTTP collector received Cloudflare 403 challenge documents. Their challenge titles/robots tags in `http-evidence.json` are **not the restaurant pages’ SEO metadata**. No assumptions about deindexing or Googlebot blocking follow from that result. A complete sitemap crawl, server-rendering comparison and delivery-address-specific checkout are outside this evidence set.
