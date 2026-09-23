# Measurement boundary and baseline

September 23, 2026 · Phase 1 working record

## What each system proves

| Measure | Source | Meaning |
|---|---|---|
| Organic visits | GA4 acquisition reporting | Visits attributed to organic search; not orders or sales. |
| Unique order-link clickers | GA4 `click_order_online` users | People who left Hikari for Square; not completed orders. |
| Completed online orders | Square | Submitted orders recorded by the ordering system. |
| Net online sales | Square | Sales after Square's reporting adjustments; use one consistent Square definition before and after launch. |
| Average order value | Square | Net online sales divided by completed online orders for the same period. |

Do not label an order-link click as a conversion or sale. Cross-provider checkout conversion may be calculated only when the Hikari session and Square order can be attributed reliably.

## Website event contract

| Event | Trigger | Parameters |
|---|---|---|
| `click_order_online` | A current `hikarisushi-online.square.site` link is clicked | `page_path`, `cta_placement`, `link_url`, optional `item_name` |
| `click_reservations` | The Carbonara reservation link is clicked | `page_path`, `cta_placement`, `link_url` |
| `click_directions` | The Google Maps directions link is clicked | `page_path`, `cta_placement`, `link_url` |

Current CTA placements are `navigation`, `hero`, `visit`, and `footer`. The featured-dish implementation can add `item_name` without changing the event contract.

## Verification completed

- Five focused Node tests pass: destination classification, tracker bootstrap, lookalike-domain rejection, event parameters, and one-event-per-click behavior.
- Browser diagnostic mode observed `click_order_online` with placement `hero`.
- Browser diagnostic mode observed `click_reservations` with placement `visit`.
- Browser diagnostic mode observed `click_directions` with placement `visit`.
- The event module is loaded at the bottom of both `index.html` and `menu.html`, matching the proven loading pattern used by the existing site scripts.

## Technical pre-change baseline

One comparable PageSpeed run from September 23, 2026:

| Homepage metric | Baseline |
|---|---:|
| Mobile performance | 61/100 |
| Mobile LCP | 9.9 seconds |
| Mobile total blocking time | 200 ms |
| Mobile CLS | 0 |
| Mobile transferred bytes | 13,142 KiB |
| Estimated mobile image savings | 6,517 KiB |
| Desktop performance | 99/100 |

This is the implementation baseline, not a sales result. Phase 2 should record the median of three comparable mobile runs after media changes.

## Business baseline status

The comparable pre-launch window is the last 28 complete days before this work: **August 26 through September 22, 2026**. Authenticated Square reporting was queried on September 23 with the report filtered to the `Hikari Sushi` online-store channel (`hikarisushi-online.square.site`).

| Metric | Baseline period | Value |
|---|---|---:|
| Organic visits | Aug. 26–Sept. 22, 2026 | Blocked — the signed-in Google account opens Analytics setup and has no accessible Hikari property |
| Unique order-link clickers | Aug. 26–Sept. 22, 2026 | Blocked — the signed-in Google account opens Analytics setup and has no accessible Hikari property |
| Completed online orders | Aug. 26–Sept. 22, 2026 | 15 |
| Net online sales | Aug. 26–Sept. 22, 2026 | $602.90 |
| Average order value | Aug. 26–Sept. 22, 2026 | $40.19 |

Square order count is the sum of the closed-order drilldown counts in the filtered Gross sales row. Average order value is `$602.90 / 15`, rounded to cents. The one September 18 return is reflected in net sales and was not counted as an additional completed sale.

GA4 remains the only missing source. The authenticated `joel.arcos@gmail.com` session showed the Google Analytics “Start measuring” setup screen rather than a Hikari property. No analytics account or property was created, and no value was inferred from the page tag. Complete those two rows after the account that owns or can access property `G-SH54LFXHJ3` is available.

Use the same weekdays for the post-launch comparison and annotate promotions, closures, menu changes, or unusual traffic. If volume is low, extend the observation window instead of claiming a lift from a small sample.
