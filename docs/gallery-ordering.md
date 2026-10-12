# Kitchen gallery ordering

## October 12, 2026 — Kitchen gallery ordering prepared

Added named direct Square links below all six kitchen photos, retaining the existing grid and imagery. Exact item/variation IDs come from the live catalog; the existing menu identifies the sashimi photo as Sashimi Platter. Gallery uses placement `kitchen-gallery` and list `homepage_kitchen`, separate from Favorites. All six public destinations opened correctly through PiKVM. Desktop, 400px and 320px browser layouts passed; the 320px platter action opened the correct item. No purchase submitted.

Validation: 14 website unit checks, 111 theme checks, build; 36 dashboard backend/export checks and actual-data rendering. Live GA checked all five existing gallery dish/order pairs with no errors; none showed a gallery journey. First genuine post-release gallery purchase remains unobserved.

Publication approved explicitly by Joel and completed; see release verification below.

Rollback: website release before this change is 033da13, Netlify 6acd0a149ae2261fa0b19fed. Favorites remain separate and unchanged. Gallery photo exposure is not collected as purchase evidence; named order clicks use the existing safe URL and linker handling.

## October 12, 2026 — Kitchen gallery released

Joel explicitly approved publishing the website and dashboard after the automatic approval gate. Website code 46b6552 deployed as Netlify 6acd0f3adae81820fc9f17a7; live HTML/CSS and unchanged Favorites scripts/QR menu match built files. Six named dish-order links retain the gallery photos and grid. All six Square public items were verified, including the Sashimi Platter identity from the existing menu. Desktop, 400px and 320px browser views passed; narrow preview platter action opened the exact item. Published narrow gallery rendered successfully. Physical iPhone testing was not performed.

Dashboard deploy scoped to lib/website_favorites.py, lib/website_ga.py, tabs/website_orders.py and current-month GA cache. Backup: /private/tmp/hikari-gallery-runtime-backup-20261012. Source/runtime hashes match; restarted service health 200; deployed actual-data rendering passes. Live GA checked five gallery dish/order pairs, zero verified gallery journeys, no query errors. Favorites kept separate. Checks: 14 website unit checks, 111 theme checks, 36 backend/export checks.

Next: observe the first genuine post-release gallery-link purchase and exact paid Square item. No test order was placed, and no completed gallery conversion is claimed.
