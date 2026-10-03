# SPECS

No formal specification yet.

See `README.md` for overview. Measurements, APIs, schemas, or design rules go here when this project needs a source of truth.



## Favorites interaction measurement — October 3, 2026
Production-host-only GA4 tracking in js/homepage.js. favorites_view fires once per page after 60% of the photo stage is visible for one uninterrupted second in an active tab. view_item_list reports each roll once per page after the same visibility threshold, with item_id, item_name, index, quantity=1, item_list_id=homepage_favorites and item_list_name=Most ordered. select_item records intentional settled exploration, with existing customEvent:cta_placement distinguishing favorites_swipe, favorites_arrow, favorites_keyboard and favorites_roll_selector. Swipes report the final roll after 200ms scroll settling; default display, resize and programmatic layout sync are not selections. A roll selection means photo exploration, not adding to cart or ordering that roll. View/interaction counts cannot establish purchases of individual rolls.

Reporting: query eventName=favorites_view with totalUsers/eventCount for section reach; itemListId=homepage_favorites with itemName, customEvent:cta_placement and itemsViewedInList/itemsClickedInList for per-roll engagement. This exact Data API dimension/metric combination returned HTTP 200 before release. No new custom dimensions needed. Use totalUsers for unique people; event/item counts include repeat actions. Data starts with release and cannot backfill historical browsing. Normal GA consent/blocking/processing limits apply.

Validation: node --test scripts/analytics.test.js scripts/customer-menu.test.mjs; browser integration scripts/favorites-tracking.test.cjs (Playwright dependency required). Tests block Google collection so synthetic interactions do not pollute production reports. --live runs against the published script; without it, only homepage.js is replaced with the local candidate while exercising live HTML. Browser checks cover visibility, deduplication, default/resize exclusion, named selectors, arrows and native mobile touch swipes.
