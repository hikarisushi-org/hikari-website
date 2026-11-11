# SPECS

## Discovery and conversion improvements — November 11, 2026

Joel authorized all six remaining workstreams: listing audit, mobile Square handoff, current measurement baseline, helpful dining information, neutral review materials, and local/dish/story content. Keep approved dishes, prices, photos, homepage composition, Square destinations and existing event semantics. New dish-page names/descriptions/prices must derive from canonical menu data at build time. Use verified restaurant hours/contact details; exclude unconfirmed parking, founder biography and promotions. Do not send outreach or customer messages, create paid orders, buy memberships, or claim Google indexing/ranking results. Prepare correction/outreach material for destinations that need owner-controlled access.

## Existing menu search eligibility - November 11, 2026

Joel authorized making the existing `/menu` discoverable in Google search. Reuse this menu and its approved data; do not create a second menu, change dishes/prices/photos, alter the browse/detail interactions, or add ordering requirements. Production HTML and HTTP headers must allow indexing, `/menu` must appear in the sitemap, and previews must remain excluded. Google indexing and ranking are external outcomes, distinct from removing the blocking settings.

```toolkit-requirements
[
  {
    "id": "MENU-AND-ORDER-PRESERVATION",
    "status": "approved",
    "statement": "Keep the approved menu data, photos, QR route and ordering measurement intact while enabling search eligibility for the existing menu.",
    "evidence": "Joel's November 11, 2026 instruction to make the existing menu discoverable; September 28 QR-menu approval in DECISION-LOG.md and measurement requirements below.",
    "scope": ["menu.html", "scripts/build-site.mjs", "sitemap.xml", "js/*", "data/*"],
    "artifacts": ["menu.html", "scripts/build-site.mjs", "js/menu-page.js", "data/menu-presentation.json", "js/homepage.js", "js/site-actions.js"],
    "check": {
      "argv": ["python3", "-c", "import subprocess,json,re; r=subprocess.run(['node','--test','--test-reporter=tap','scripts/analytics.test.js','scripts/customer-menu.test.mjs','scripts/favorites-order.test.cjs','scripts/gallery-order.test.cjs'],capture_output=True,text=True); n=re.search(r'# tests (\\d+)',r.stdout); print(json.dumps({'status':'pass' if r.returncode==0 and n else 'fail','checks':int(n[1]) if n else 0,'details':r.stdout[-1800:]})); raise SystemExit(r.returncode)"],
      "files": ["scripts/analytics.test.js", "scripts/customer-menu.test.mjs", "scripts/favorites-order.test.cjs", "scripts/gallery-order.test.cjs"]
    }
  }
]
```

No formal specification yet.

See `README.md` for overview. Measurements, APIs, schemas, or design rules go here when this project needs a source of truth.



## Favorites interaction measurement — October 3, 2026
Production-host-only GA4 tracking in js/homepage.js. favorites_view fires once per page after 60% of the photo stage is visible for one uninterrupted second in an active tab. view_item_list reports each roll once per page after the same visibility threshold, with item_id, item_name, index, quantity=1, item_list_id=homepage_favorites and item_list_name=Most ordered. select_item records intentional settled exploration, with existing customEvent:cta_placement distinguishing favorites_swipe, favorites_arrow, favorites_keyboard and favorites_roll_selector. Swipes report the final roll after 200ms scroll settling; default display, resize and programmatic layout sync are not selections. A roll selection means photo exploration, not adding to cart or ordering that roll. View/interaction counts cannot establish purchases of individual rolls.

Reporting: query eventName=favorites_view with totalUsers/eventCount for section reach; itemListId=homepage_favorites with itemName, customEvent:cta_placement and itemsViewedInList/itemsClickedInList for per-roll engagement. This exact Data API dimension/metric combination returned HTTP 200 before release. No new custom dimensions needed. Use totalUsers for unique people; event/item counts include repeat actions. Data starts with release and cannot backfill historical browsing. Normal GA consent/blocking/processing limits apply.

Validation: node --test scripts/analytics.test.js scripts/customer-menu.test.mjs; browser integration scripts/favorites-tracking.test.cjs (Playwright dependency required). Tests block Google collection so synthetic interactions do not pollute production reports. --live runs against the published script; without it, only homepage.js is replaced with the local candidate while exercising live HTML. Browser checks cover visibility, deduplication, default/resize exclusion, named selectors, arrows and native mobile touch swipes.
