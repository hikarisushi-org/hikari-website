# Hikari website and ordering analytics

Implementation record — September 26, 2026, America/Denver.

The existing Hikari dashboard now has a **Website orders** implementation that combines GA4, Square orders/payments/refunds, Google Ads, and DoorDash merchant reporting. The collectors have been checked against live data. It separates public website visits, the restaurant's QR menu, Square Online checkout, and connected marketplace orders without adding GA purchases to Square sales a second time.

**Release status at this report snapshot:** The public analytics deployment is verified (Netlify `6ab76537d007357abec5c0ec`): live JavaScript matches the intended change, HTML/CSS are unchanged, and private paths return 404. Square's custom header and GA4 cross-domain rules/custom dimensions are saved. Live testing found that Square's separate payment page does not load the site header, so the marker does not automatically accompany its native purchase. The separate receipt evidence snippet is saved in Square's native Receipt tracking field and was verified by exact readback; its GA4 order-ID dimension is also persisted. Genuine-order execution remains unverified. The dashboard is deployed and verified using its actual runtime: copied files match their intended hashes, the service restarted, local health and the public dashboard returned success, and the deployed application passed automated UI checks. Browser control recovered after the Codex restart. The live dashboard passed final browser checks: this-month figures loaded, channel CSV downloaded and validated, and the embedded report opened correctly. The additional Uber funnel, ads/offers and Grubhub deposits imports are now deployed and verified in the live signed-in browser, including their explicit date coverage and rounding limits.

## What has been implemented

| Capability | Current result |
|---|---|
| Public website visitors, traffic sources, and order clicks | Live GA4 queries verified; QR menu and Square-hosted visits excluded from public visitor totals |
| Square add-to-cart, checkout, purchases, and drop-off | Live events and real same-session funnel queries verified |
| Pickup/delivery, ordering channel, paid/fulfilled/canceled status | Live Square records normalized and reconciled |
| Financial components, refunds, average order value | Explicit definitions; refunds and paid cancellations stay visible |
| Website-to-Square continuity | Three production domains configured; live `_gl` handoff and adopted GA client/session IDs verified in browser network traffic |
| Public website versus QR purchase evidence | Storefront/cart marker verified; receipt fallback saved/read back; genuine receipt-to-purchase match awaiting data |
| Google Ads | Existing credentials reused; live read-only query verified after repairing its slow runtime |
| DoorDash fees, payouts, sponsored listings and promotions | Official reporting API verified with current-period financial and campaign data |
| Uber Eats merchant financial reports | Official Payment Details/Payout Summary downloaded and imported; exact-period manual refresh available |
| Uber Eats store/menu/cart/order funnel, advertising and offers | Native CSVs imported and validated; additional dashboard controls await the final deployment pass |
| Grubhub merchant financial reports | Official transaction and deposit exports imported and verified with their separate date ranges |
| Grubhub customers and Smart Promotions | Native merchant-portal metrics verified manually; recurring dashboard extraction is not configured |
| Daily, weekly, monthly reporting and CSV exports | Actual runtime and live browser verified; channel CSV download and embedded report opened successfully |

The complete **40-row status table** is [COVERAGE.csv](COVERAGE.csv). It includes every measurement discussed, its source, evidence, and remaining limits. “Verified working” refers to the stated live data collection or calculation; it does not upgrade an unverified release step or purchase attribution claim.

## Actual baseline: September 1–25

Amounts are USD. Figures are a snapshot fetched early September 26 and may change as GA4 finishes processing or orders are refunded.

| Website/checkout measure | Observed result |
|---|---:|
| Public website users | 203 total; 198 active |
| Public website sessions / pageviews | 258 / 307 |
| People clicking Order Online / click events | 10 / 12 |
| QR-menu users / sessions / pageviews, reported separately | 83 / 106 / 112 |
| Square-hosted users | 98 |
| Square add-to-cart users / events | 20 / 79 |
| Square checkout users / events | 18 / 22 |
| Square purchase users / events | 13 / 13 |
| GA4 transaction IDs exactly matched to Square | 13 of 13 |
| GA4-reported purchase value for those 13 orders | $593.45 |
| Completed Square refund on those matched orders | $44.14 |
| Matched-order receipts after refunds | $549.31 |

The Square same-session funnel was **20 cart users → 18 checkout users → 13 purchase users**. Five checkout users did not progress to purchase in the observed session: **27.78%**. This describes observed browser behavior, not a recoverable customer contact list.

The public-site same-session sequence was **198 active visitors → 9 qualifying order clickers → no matched downstream cart/checkout/purchase**. That is a historical measurement gap, **not evidence that the website produced no sales**. Cross-domain configuration was missing before this work. Click tracking was added recently, so the monthly click total is not a full-month behavioral baseline. Ten unique clickers and nine sequential funnel clickers differ because the funnel requires the ordered events in the same session.

Google organic search accounted for **97 public-site users / 125 sessions**; direct traffic for **92 / 115**. Source-user totals overlap across people and must not be summed. Source rows are displayed as returned, including unknown classifications. These traffic figures do not alone establish the source of an order.

| Square ordering channel | Paid orders | Original order total | Fulfillment detail |
|---|---:|---:|---|
| Square Online pickup | 14 | $679.33 | 11 fulfilled; 3 prepared |
| Square Online delivery | 0 | $0.00 | Six draft/canceled/unpaid records are not paid sales |
| DoorDash Marketplace | 8 | $479.37 | Seven delivery; one pickup |
| DoorDash Storefront | 2 | $74.12 | Pickup; reported separately from Marketplace |
| Uber Eats | 4 | $134.68 | Three delivery; one pickup |
| Grubhub | 3 | $98.21 | Two fulfilled; one fulfillment canceled but recorded paid |
| **All connected online channels** | **31** | **$1,465.71** | **27 fulfilled; paid cancellations explicitly included and flagged** |

The connected online cohort has **$44.14 in completed refunds**, leaving **$1,421.57 in receipts after refunds**. One additional paid Square Online pickup order, **$85.88 on September 5**, has no recorded GA4 purchase. Square remains the order-count source even when GA4 misses a purchase.

Two matched orders carried a Hikari-domain referral, totaling **$69.07**; one was fully refunded for **$44.14**. Historical referrers do not distinguish the public site from the QR menu. Neither order is relabeled as a proven public-website sale.

**Correction to the earlier delivery-app interpretation:** app channel orders can be pickup orders too. The 17 recorded-paid app-channel orders include five pickups; one Grubhub delivery has canceled fulfillment. Counting only completed fulfillments gives 16 / $757.69, but silently dropping its recorded payment would conceal the cancellation/payment discrepancy. The new report shows both states.

## Google Ads: September 1–26

The authenticated Google Ads query succeeded with **zero campaign-day rows: $0 spend, 0 clicks, 0 impressions, 0 recorded conversions/value** in this date range. The account reports **USD and America/Denver**. This was a successful empty response, not an access failure. September 26 was only just beginning when checked.

The existing Ads environment stalled while reading dependencies from the external drive. The same official `google-ads==30.0.0` dependency was installed in the existing internal dashboard environment; the original client and credentials were retained. Dependency checks pass. No ads, budgets, campaigns, or conversion settings were changed.

Google Ads conversions can include actions such as calls or directions. The report therefore does not call them restaurant orders or invent purchase-only ROAS. Zero spend also leaves cost-per-order/ROAS undefined.

## DoorDash financial and marketing reporting: September 1–26

Existing DoorDash API credentials now provide exact merchant reports; no campaigns, budgets, promotions, or fee rates were changed.

| Financial view | Observed result |
|---|---:|
| Payouts completed in the selected period | 4, totaling **$427.84** |
| Commission within that payout cohort | $129.29 |
| Payout-cohort marketing / merchant-discount adjustments, reported signs | −$15.84 / −$13.13 |
| Transactions dated in the selected period | 8 |
| Transaction-cohort subtotal / commission | $442.01 / $120.84 |
| Transaction-cohort marketing adjustments, reported sign | −$39.37 |
| Transaction-cohort net credit | $317.68; not all rows have a payout date |

**These cohorts differ.** The September 3 payout includes August 26–30 orders. The payout total must not be compared as if it were the proceeds of September-created Square orders. The commission/adjustment fields are components already reflected in reported net payout; do not subtract them again. This is provider-reported settlement, not an independent bank-deposit reconciliation.

| DoorDash marketing report | Observed result |
|---|---|
| Sponsored listings | 1,083 impressions; 43 clicks; 3 platform-attributed orders; $213.43 attributed sales; $30.87 fees |
| Promotions | 2 platform-attributed orders; $69.00 attributed sales; $8.50 fees and $1.48 merchant-funded discounts |
| Per campaign/day details | Provider-reported ROAS, average CPA/AOV, and new/existing customer counts where supplied |

Promotions and sponsored listings can claim the same orders. Their sales and order totals are **not added together or added to Square sales**. These figures describe DoorDash's attribution, not Hikari website influence or incremental lift. Customer counts and daily ratios are not summed or averaged into invented period-level rates. Financial-report negative adjustments and marketing-report positive fees retain their respective provider definitions. [DoorDash Reporting API](https://developer.doordash.com/en-US/api/reporting/) · [Marketplace report definitions](https://developer.doordash.com/en-US/docs/reporting/overview/reports/marketplace_merchant_pick/)

## Uber Eats financial exports: September 1–26

The correct Hikari merchant account's official **Payment Details** and **Payout Summary** files have been downloaded and imported. This is a reusable manual CSV import, not continuous API synchronization. Reimporting the same period replaces its prior snapshot rather than adding sales again.

| Uber report measure | Observed result |
|---|---:|
| Payment-detail rows | 36: four completed orders and 32 miscellaneous adjustments |
| Sales excluding tax | $142.72 |
| Marketplace fees, reported sign | −$28.97 |
| Offers including tax / offer redemption fees | −$20.13 / −$3.96 |
| Advertising charges / credits | −$59.14 / +$25.37 |
| Signed payment-detail payout total | $67.96 |
| Detail rows without assigned payout date | Five miscellaneous rows, totaling −$8.83 |
| Payout-summary total | Two payout rows, **$76.79**, reporting four orders and 29 miscellaneous payments |

Payment details use order/adjustment dates; the payout summary uses payout initiation dates. Here, the −$8.83 unassigned detail balance explains the difference between $67.96 and $76.79, but those differently dated views are not forced to match generally. Advertising adjustments are not extra customer orders. Neither financial total is added to Square sales or treated as a bank-confirmed deposit.

The importer validates store, currency, schema, row dates, and the declared export period, preserves successful snapshots after rejected uploads, and keeps only selected financial fields. It cannot prove an uploaded file contains every record. Report freshness is the **import time**. Amounts retain Uber's signs and definitions; the $134.66 sales-after-adjustments value differs by two cents from Square's $134.68 connected-order total, so the report retains both provider values rather than silently forcing them equal. [Uber reporting guide](https://help.uber.com/merchants-and-restaurants/article/understanding-customer-and-order-data-in-uber-eats-manager-?nodeId=55f6059e-56a5-4ef0-86e1-9ad1d60a09cc)

## Uber Eats funnel, advertising, and offers

The native exports are now imported and verified with six focused export tests. **The new dashboard controls have not yet been confirmed deployed in this snapshot**; the figures below come from the validated import caches and live merchant portal.

| Uber native measure | Observed result and coverage |
|---|---|
| Viewed store → viewed menu → added to order → placed order | **1,819 → 77 → 20 → 5** native conversion-step counts |
| Funnel date coverage | September 1–26 selected; Uber showed data available only **through September 22** |
| Aggregate store-view → placed-order / added-to-order → placed-order rates | **0.27% / 25.00%**; native report user-count ratios, not same-session Hikari website conversion |
| Advertising | Five campaign rows; **3,021 impressions, 78 clicks, 3 attributed orders, $123.77 attributed sales** |
| Ad spend | **$67.94** sum of exported campaign rows; live aggregate displayed **$67.95** |
| Ad credits / native aggregate ROAS | Portal showed **$24.04 credits used / 1.82× ROAS**; credits recorded as a separate manual observation |
| Offers | Ten campaign rows; **4 campaign-attributed orders / $143 reported sales**, with sales rounded to whole dollars in the export |
| Offer customer and funding details | Per-campaign new-customer counts and Uber funding percentages retained; not summed into unique period customers |

The funnel's selected end date does **not** prove September 23–26 coverage. Its native “placed order” count is not substituted for completed financial orders or added to Square orders. The prior-period comparison is retained as exported (August 4–29: 1,786 → 80 → 26 → 4), but that comparison's actual availability cutoff is unknown.

Advertising and offer CSV dates describe **campaign schedules**, not the report's selected interval. The September 1–26 report selection is supplied separately during import; these files provide no independent availability cutoff. Ads validate Hikari's store name and Denver timezone. The offers export has a one-store count but no name/UUID, so the import requires explicit confirmation that the export came from Hikari alone.

Ad/offer attributed orders and sales can overlap and must not be added to each other, to financial exports, or to Square sales. The $143 offer total is the sum of rounded reported amounts, not cent-precise order revenue. Offer costs/profit are not supplied by that export. Campaign-native ROAS, CPC, cost per order, rates, and AOV remain per campaign rather than being averaged. The one-cent ad-spend difference is retained transparently; the separately observed $24.04 credit figure is not treated as cash paid or forced to reconcile with financial-period advertising adjustments. These are Uber attribution measures, **not proof of Hikari website influence**.

## Grubhub transaction export: September 1–26

The official transaction export for the verified Hikari merchant account was downloaded and imported. It has **three distinct prepaid orders plus one separate cancellation reversal**. Both the original payment and the signed reversal remain in the financial calculation.

| Grubhub transaction measure | Observed result |
|---|---:|
| Transaction rows / prepaid order IDs / canceled order IDs | 4 / 3 / 1 |
| Subtotal / tax after signed reversals | $82.22 / $5.30 |
| Merchant total | $87.52 |
| Commission / delivery commission | −$16.44 / −$8.22 |
| Processing fees / merchant-funded promotion | −$2.72 / −$18.00 |
| **Reported merchant net total** | **$42.14** |

Two prepaid order IDs have no cancellation in this export; that alone is not proof of fulfillment. The arithmetic balances: $87.52 − $16.44 − $8.22 − $2.72 − $18.00 = $42.14. This is a transaction-date merchant balance, **not a bank-confirmed deposit**.

This resolves a limitation of the Square-only view: Square retains a recorded payment for the canceled Grubhub fulfillment, while Grubhub's own report contains the reversal. Square's channel report and Grubhub's settlement view therefore remain separate rather than relabeling Square's amount as the final app proceeds.

The separate **September 1–25 deposit export** is now downloaded and imported. It reports **two ACH deposits: $15.01 on September 11 and $27.13 on September 18, totaling $42.14**. The deposit report shows $116.72 subtotal sales less a $34.50 cancellation reversal, yielding $82.22 payout subtotal; disbursed tax is $5.30. Its commission, delivery commission, processing fees, and promotions match the signed components above. The provider reports two prepaid orders and one cancellation within this settlement view.

The **September 1–25 payout-date** cache remains separate from the **September 1–26 transaction-date** cache. Their $42.14 totals happen to agree here; the importer does not force different cohorts to balance. These are Grubhub-reported deposits, not independently bank-verified receipts. The importers validate store and declared dates, retain signs and unavailable fields, deduplicate report identities, and exclude customer notes, addresses, and membership data.

### Grubhub native customer and promotion analytics

These figures were read from the verified Hikari merchant portal. They are **manual portal observations**, not automatically refreshed dashboard data.

| Native Grubhub measure | Period / observed result |
|---|---|
| New customers: orders / sales / AOV | September 1–25: 2 orders / $85 displayed rounded / $42.55 AOV |
| Returning customers: orders / sales / AOV | September 1–25: 1 order / $32 displayed rounded / $31.62 AOV |
| Customer report freshness | Portal shows September 25, 11:15 PM |
| Smart Promotions revenue / redemptions / spend | September 1–26: $64.22 / 2 / $18.00 |
| Native Smart Promotions ROI label | 357%, shown as $3.57 revenue per $1 spent |

The customer report counts prepaid orders, including the subsequently canceled order, and is therefore not a settlement or fulfilled-order total. Smart Promotions reflects two retained orders after cancellation. Its displayed ROI is the platform's revenue-to-promotion-spend measure, **not profit, incremental lift, or Hikari website attribution**. No obvious export control was established for these two portal views; repeatable extraction remains unconfigured. [Grubhub Customer Insights](https://restaurant.grubhub.com/insights/customer) · [Hikari Smart Promotions](https://restaurant.grubhub.com/loyalty/reporting/11973128/summary)

## How the website handoff works

Hikari's order links add an explicit **public website** marker; QR-menu links use a separate **QR menu** marker. On Square, the marker is accepted only on a fresh navigation with both the expected parameter and an HTTPS Hikari referrer. It lasts up to 30 minutes in that browser tab, expires, and does not renew just because the page is refreshed.

The Square header snippet sets `hikari_journey` on subsequent native storefront/cart analytics events. It does not load a second Google tag, send another purchase, replace checkout, read customer form details, or copy Square's customer-bearing DOM purchase payload. Actual purchase identity comes from matching the native GA4 transaction ID to Square's order ID. The public-site and Square tag both use the existing measurement ID.

The marker measures a recent handoff. It is not proof the website caused incremental sales. Referrer blocking, analytics blockers, consent, a purchase after the 30-minute window, a separate browser/device, or an alternative checkout path can leave the journey unknown. Unknown does not mean direct, zero sales, or an unsuccessful business outcome. Historical purchases cannot be backfilled with the new marker.

Live testing found that **Continue to payment performs a full navigation to `/s/checkout`, where Square does not load the custom site header**. Browser-tab storage survives, but JavaScript global parameters do not. The native `begin_checkout` still fires; the header alone cannot label a purchase on this payment path. This replaces the earlier assumption based on an older checkout bundle.

Square's live receipt-tracking settings expose an `{orderid}` placeholder. A small receipt-only snippet is saved in that native field, with an exact readback check, to read the still-valid tab marker and send **`hikari_order_handoff`**, an evidence event with an opaque order ID and `public_website` or `qr_menu`. It never sends `purchase`, revenue, item data, or customer data. Repeated receipt loads are suppressed per order in the tab. Reporting must match that evidence to a native GA4 purchase and a paid Square order before counting an associated sale; an unmatched receipt event is insufficient. The `hikari_order_id` custom dimension is persisted and the collector can join the evidence. Its live GA4 query succeeds with zero receipt-evidence rows so far; no test event or order was fabricated. Receipt execution and the actual substituted ID still require genuine-order evidence; three focused local tests validate the snippet's behavior but cannot prove Square executes it on a real receipt. The source inspection shows native purchase uses `order.id`; the supported receipt placeholder may also return a legacy order token, so exact matching is essential. [Square custom tracking documentation](https://squareup.com/help/us/en/article/6957-add-custom-tracking-code-to-your-website) · [Google tag parameter scope](https://developers.google.com/tag-platform/gtagjs/reference)

## Money and date definitions

- **Order date:** Square orders are grouped by creation date in America/Denver. GA4 purchases are grouped by the date the purchase event occurred; an order created earlier can therefore require an exact-ID lookup outside the selected creation-date range.
- **Paid:** a completed Square payment or qualifying recorded tender. Paid and fulfilled are independent. Paid cancellations remain visible.
- **Merchandise net:** merchandise after discounts, excluding tax, tips, service charges, and card surcharges. For the online baseline: **$1,306.16 merchandise net + $104.40 tax + $55.15 tips = $1,465.71**; service charges and card surcharges were zero.
- **Refunds:** completed refunds over the life of orders created in the selected period. This is not a report of refunds issued during that date range. Square data does not establish which portion of a refund was merchandise versus tax/tip.
- **Receipts after refunds:** paid receipts less completed refunds. They are not profit, net merchant settlement, or marketplace payouts; platform commissions/fees are not deducted.
- **AOV:** original total of paid orders divided by unique paid orders, including explicitly flagged paid cancellations. Square Online pickup AOV in the baseline is **$48.52**. It includes the financial components shown above, so it should not be compared to merchandise-only AOV without adjustment.
- **Conversion:** distinct people completing an ordered same-session funnel. It is not raw purchase events divided by unrelated visitor totals. Daily users and source users are not additive.

## What the current setup cannot establish

**Marketplace website attribution:** Square's connected order records identify DoorDash, Uber Eats, Grubhub, and Storefront sources, but the inspected integration does not supply a reliable earlier Hikari website journey for orders placed inside those apps. Their order totals remain separate from website-associated purchases. This is a limit of the verified setup, not a claim that no provider could ever offer a solution. A supported platform attribution feature or a redeemed website-only promotion could provide additional, imperfect evidence; no new promotion was launched.

**Marketplace internal analytics and payouts:** views, carts, marketplace ads, commissions, and settlement payouts need the respective merchant reporting data. DoorDash financial and marketing importers have succeeded against the official API with verified Hikari/USD reports. Uber Eats Manager access is verified for Hikari; its official Payment Details and Payout Summary exports for September 1–26 are downloaded, imported, and verified. Grubhub's signed transaction and deposit exports are imported and verified for the correct Hikari location; native customer and Smart Promotions views are also verified as manual portal observations. Uber's native store/menu/cart/order funnel and ad/offer exports are now verified with their coverage and attribution limitations. Remaining DoorDash/Grubhub listing/cart fields require separate evidence. Square order integration alone does not establish them. DoorDash documents separate Marketplace/Online Ordering integration and merchant reporting access. [Square integration](https://squareup.com/help/us/en/article/8518-integrate-doordash-with-square) · [DoorDash integration](https://help.doordash.com/merchants/s/article/Integrating-with-your-Square-POS) · [DoorDash Reporting API](https://help.doordash.com/en-ca/merchants/article/how-can-i-access-the-doordash-reporting-api)

**Causal lift and certain cross-device matching:** the report provides observational attribution. It cannot prove that those sales would not have happened without the website, or reliably identify anonymous customers who switch devices/apps.

## Owner usage and final checks

Open the existing Hikari dashboard, choose **Website orders**, then use the existing day/week/month picker. Use **Refresh ordering data** for a fresh read and the downloads for channel totals, purchase evidence, and measurement coverage. Collection preserves successful cached results when refresh fails and labels unavailable data rather than showing invented zeroes.

DoorDash uses its own report-request/check buttons because the provider prepares reports asynchronously. Uber financial sections use Payment Details/Payout Summary CSV uploads, with additional native funnel/ads/offers upload controls prepared. The funnel requires the separate data-availability cutoff; offers require confirming the source store. Grubhub supports transaction and deposit CSV uploads, each with its actual declared export interval; **Refresh ordering data does not download new Uber merchant exports**.

Expect recent GA4 data to change for **24–48 hours**; new custom dimensions also need processing time. Prefer completed periods when judging conversion/drop-off. The report displays source freshness and limitations. [GA4 data freshness](https://support.google.com/analytics/answer/11198161?hl=en) · [Custom dimension availability](https://support.google.com/analytics/answer/14240153?hl=en)

### Deployment and verification evidence

- The deployed runtime's 11 targeted application files were copied and hash-checked; private caches and the SQLite backup were preserved. The dashboard service restarted successfully.
- Local `:8501` health passed and the public dashboard returned HTTP 200.
- Automated UI checks ran against the **actual deployed `app.py`**, with **Website orders / this month** selected, without exceptions. They displayed 31 paid connected orders / $1,465.71, DoorDash payouts $427.84, Uber payout summary $76.79, and Grubhub transaction net $42.14. These remain separate money measures, not a combined total.
- **Live-browser verification passed after recovery:** This month (September 1–26) displayed 203 public visitors, 13 order clickers, 31 paid connected orders / $1,465.71, $44.14 refunds, and $1,421.57 receipts after refunds. The channel CSV downloaded with eight data rows and was validated; the embedded report opened correctly. Verification traffic contributes to the newer click count; the September 1–25 historical baseline remains unchanged.
- Seven download controls were present, including this report and its coverage table. Additional automated views covered the September 1–25 baseline, valid empty data, and missing data.
- All **28 backend tests passed**. The separate receipt snippet's three focused tests also passed.
- A fresh command-line month refresh at **06:58 UTC / 00:58 Denver on September 26** returned 194 Square orders, 13 GA4 transactions with no query errors, and a successful empty Google Ads result. Verification visits increased the September 1–26 order-clicker count to 11; this report deliberately keeps the separately dated **September 1–25 baseline of 10**.

### Remaining verification and automatic follow-up

1. Observe a genuine receipt handoff event, verify `{orderid}` substitution, and match it to a native GA4 purchase plus paid Square order. Until then, order-level website attribution is configured and awaiting evidence.
2. Grubhub customer and Smart Promotions metrics are verified manual portal observations. No repeatable export was found in the inspected views; they are documented in this report rather than falsely presented as an automatic feed. Its Ads page currently shows first-campaign onboarding, so no existing ad-performance report was available there. This does not prove historical ad spend was zero.
3. DoorDash/Grubhub organic listing/cart funnels remain unavailable from the verified feeds and inspected views. They are explicitly unverified, not zero. All supported downloaded Uber funnel and campaign exports are implemented and deployed.

A **two-hour thread follow-up**, `finish-hikari-analytics-verification`, is scheduled to continue these checks. It stays quiet when nothing changes and reports meaningful completion, failure, or required input. A future genuine marked order is still needed for receipt evidence. Browser recovery and deposit import are now verified; the follow-up should not continue reporting them as blocked.

No new account roles, departments, approval workflow, data warehouse, or separate enterprise application was introduced. The implementation uses the existing dashboard, accounts, and a small private cache. DoorDash financial access and both Uber/Grubhub merchant access are verified. DoorDash API collection and Uber/Grubhub transaction CSV imports are verified. Grubhub deposits and the additional Uber imports are now verified in the deployed dashboard. The remaining automated check is genuine receipt attribution evidence.


### Merchant reporting entry points

- **DoorDash:** [Merchant Portal](https://www.doordash.com/merchant), then Reports. Sales, financial, and marketing exports can include orders, payouts, and advertising fees. [Official report guide](https://help.doordash.com/en-us/merchants/article/merchant-portal-reports)
- **Uber Eats:** [Uber Eats Manager](https://merchants.ubereats.com/manager/), then Analytics or Reports. Payment Details and Order History are distinct exports. [Official analytics guide](https://help.uber.com/merchants-and-restaurants/article/understanding-customer-and-order-data-in-uber-eats-manager-?nodeId=55f6059e-56a5-4ef0-86e1-9ad1d60a09cc)
- **Grubhub:** [Grubhub for Restaurants](https://restaurant.grubhub.com/login), then Insights → Customer Insights. The documented view separates new/returning customers and shows prepaid orders, sales, and AOV. [Official customer-insights guide](https://get.grubhub.com/help-center/customer-insight-dashboard/)

These are available vendor reporting routes, not a claim that every listed field has been verified in Hikari's accounts or connected to the dashboard. Existing historical scraper jobs remain disabled.

### Latest automatic check

September 26, 09:05 Denver: one Computer Use retry still failed app-server initialization. Square/GA4 refresh succeeded with no collection errors; no orders created today, native purchases, or receipt evidence observed yet. Receipt query availability is verified; absence of evidence does not mean zero website-driven sales. Grubhub deposits and final browser/merchant checks remain blocked until the connection recovers. Status is unchanged; follow-up monitoring remains active. No production code or business settings changed.


### Follow-up update — September 26, 09:44 Denver

Browser control recovered after the Codex restart. Grubhub September 1–25 deposits were downloaded, imported, and independently checked at $42.14 across two ACH rows. Native Grubhub new/returning customer and Smart Promotions metrics were also inspected; they are labeled manual portal observations above. This supersedes the earlier browser/deposit blocker. Receipt execution still awaits a genuine order. Final browser verification subsequently passed, including the new merchant import controls.


### Deployment verification — September 26, 09:55 Denver

Targeted runtime copies matched source byte-for-byte. The runtime AppTest passed with no exceptions; the live signed-in Website orders tab independently displayed Uber funnel 1,819 → 77 → 20 → 5 with the September 22 cutoff, ads $123.77 sales / $67.94 CSV spend / 3,021 impressions / 78 clicks and separate $24.04 portal credits, offers $143 rounded reported sales, and two Grubhub deposits totaling $42.14 for September 1–25. The coverage report now contains 40 data points. Existing Square/GA caches and unrelated dirty work were preserved. Receipt execution and its exact three-way match still await genuine customer data.
