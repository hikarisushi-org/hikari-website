# Discovery and conversion measurement

## Keep the sources separate

- **Business Profile Performance:** daily Search/Maps profile impressions and calls, directions and website clicks. These are profile interactions, not restaurant visits or paid orders. Monthly keyword counts concern searches that surfaced the profile; low-volume values can be thresholded and the first 100 results are a bounded sample, not an exhaustive demand estimate.
- **GA4:** website reach, pages, existing order/reservation/directions clicks and Square events. Users overlap across event rows and channels, so do not sum users. Cross-host/channel rows are not a sequential funnel. Current-period data can settle later; consent and blockers create gaps.
- **Square:** authority for paid orders and money. Existing dashboard `lib/website_orders.py` and `lib/website_ga.py` define paid/order/refund states and exact same-session transaction matching. An order click is not a sale; Square Online orders are not all attributable to the website. COMPLETED order state alone is not independent payment evidence.
- **Search Console:** source for actual web indexing and branded/non-branded search clicks/impressions. The existing Google project returned HTTP 403 on November 11 with SERVICE_DISABLED / accessNotConfigured for the Search Console API. A bounded Service Usage check also returned AUTH_PERMISSION_DENIED, confirming this existing credential cannot administer that service; property access has not yet been tested. No API setting, property access or verification was changed. Resolve this before claiming index coverage or web-query baselines.

## Repeatable baseline capture

Use the existing Hikari Google integration interpreter; do not create another auth client or copy credentials:

```sh
/Users/samanthashiro/projects/hikari-tools/mcp/ga/.venv/bin/python scripts/capture-discovery-baseline.py \
  --start 2026-11-12 --end 2026-12-09 \
  --output /Volumes/ToshibaHD/projects/hikari-website/.ai/context-logger/evidence/discovery-2026-12-09.json
```

The collector reads the existing Hikari profile, one daily Performance window and up to 100 keyword rows from its first month, then one GA4 batch of three reports. It checks Hikari's title/address and expected GA property. `--search-console` makes one optional access probe. It refuses an existing output unless `--refresh` is deliberately supplied. It does not call Square or match paid orders; use the existing dashboard for that. Do not put raw aggregates, confirmation URLs or revenue in this public repository.

November 11's pre-change window was October 14–November 10. The private snapshot and receipts are retained under the main checkout's ignored `.ai/context-logger/evidence/discovery-20261111/`. Compare a meaningful later 28-day period; allow for the winter menu, weekdays/holidays, operating changes and small samples. A later checkpoint does not establish causation or a promised ranking increase. No recurring external polling or paid service was installed.

## Menu traffic after indexing changes

`/menu` is now both a public search destination and the table QR destination. Its path alone no longer proves the guest scanned a QR code. Treat post-release `/menu` visits as **menu visits with unknown entry method** unless an explicit trustworthy source is present. Older dashboard labels based only on the menu path must not be presented as confirmed QR acquisition. This release preserves existing event definitions; changing historical attribution or adding markers requires a separate consistent change across website, Square marker and dashboard.

## Synthetic checks

The November 11 browser check used an isolated incognito context and exercised one known roll through cart totals, without paying. Record the test date; it lies outside the pre-change baseline. Do not interpret this test cart as a genuine customer order. The original shared browser context disappeared before payment-form verification, so payment entry, a paid purchase and physical-iPhone behavior remain unverified. No default tips, prices, discounts, fees or provider settings were changed.
