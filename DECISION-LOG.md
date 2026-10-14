# Hikari Website — Decision Log

## October 12, 2026 — Favorites item identity

Use location plus exact catalog item for navigation, and native GA purchase transaction plus Square catalog variation for paid-item proof. The phone layout had hidden the Favorites CTA; show one named action below its carousel. Google rejected custom-event item_list_id in segment filters; the existing linkUrl plus registered placement provides a working direct-click identity without new visitor data or schema. Separate earlier browsing evidence from a direct roll-order click. See docs/favorites-ordering.md.

Captures the **reasoning, findings, and decisions** from work sessions — the "why" behind the work.
`CHANGELOG.md` records what changed; this file records discussions and conclusions so context isn't lost between sessions.

Format: newest first. Link measurements to `SPECS.md`; link resume state to `README.md` § Pick up here.

---

## 2026-08-20 — Remove retired SSH identity documentation

**Decision:** Document only the active `arcos33` GitHub SSH identity.

**Why:** The prior automation-specific key was revoked and removed during the legacy-agent decommission, so retaining it in workflow documentation would direct future setup toward a nonexistent credential.

---

## 2026-06-07 — Project quartet adopted

**Decision:** Adopt workspace standard: README (+ § Pick up here), CHANGELOG, DECISION-LOG, SPECS.

**Why:** Uniform layout across Hikari/Lumen projects — no hunting for where why/what/now/specs live.

## 2026-09-27 — Approved design recovery

The September 26 review-sync commit triggered a main-branch Netlify build containing the older site, replacing the direct approved release. Restore the saved approved deploy immediately, then reconcile byte-verified public files into current main while preserving the newest reviews and function code. Production must be reproducible from main; direct-only deployments are not a durable release.


### 2026-09-28 — Approved customer QR menu release
Owner explicitly approved replacing the live /menu with the reviewed continuous menu. Promoted approved UI from preview commit 0a88911 onto current production main, preserving existing site analytics, QR URL and canonical menu content. Build derives data/customer-menu.json from the existing js/menu-page.js menu block, enriching photo presentation from data/menu-presentation.json. Existing homepage unchanged. Build, 9 analytics tests, 3 menu integration checks, all photo paths, 60-row rendering, rapid category jumps and full-width detail/return verified locally. Deployment verification follows publication.

## 2026-10-01 — Approved animated hero sunrise

Replaced the small static hero sunrise with the approved Quiet dawn SVG: sequential rays, a gentle staggered wave swell, and a two-unit raised sun. Increased stroke width from 3 to 3.75 for clarity at hero size. Plays once in under four seconds; reduced-motion users see the finished mark. Hero copy, photography, ordering, reviews and QR menu preserved. Owner explicitly authorized commit, push and production publication.


## October 3, 2026 — Favorites tracking
Measure visibility after 60% of photo stage stays on-screen one second; deduplicate section and roll impressions per page. Use GA standard view_item_list/select_item with named items and existing cta_placement to distinguish swipe/selector/arrow/keyboard without new custom dimensions. Do not count automatic first display as intent or conflate exploration with cart/purchase.

## October 12, 2026 — Kitchen gallery ordering prepared

Added named direct Square links below all six kitchen photos, retaining the existing grid and imagery. Exact item/variation IDs come from the live catalog; the existing menu identifies the sashimi photo as Sashimi Platter. Gallery uses placement `kitchen-gallery` and list `homepage_kitchen`, separate from Favorites. All six public destinations opened correctly through PiKVM. Desktop, 400px and 320px browser layouts passed; the 320px platter action opened the correct item. No purchase submitted.

Validation: 14 website unit checks, 111 theme checks, build; 36 dashboard backend/export checks and actual-data rendering. Live GA checked all five existing gallery dish/order pairs with no errors; none showed a gallery journey. First genuine post-release gallery purchase remains unobserved.

Publication pending: automatic approval review rejected production push, requiring explicit approval for public website and live dashboard deployment. Source and preview are ready.

## October 12, 2026 — Kitchen gallery released

Joel explicitly approved publishing the website and dashboard after the automatic approval gate. Website code 46b6552 deployed as Netlify 6acd0f3adae81820fc9f17a7; live HTML/CSS and unchanged Favorites scripts/QR menu match built files. Six named dish-order links retain the gallery photos and grid. All six Square public items were verified, including the Sashimi Platter identity from the existing menu. Desktop, 400px and 320px browser views passed; narrow preview platter action opened the exact item. Published narrow gallery rendered successfully. Physical iPhone testing was not performed.

Dashboard deploy scoped to lib/website_favorites.py, lib/website_ga.py, tabs/website_orders.py and current-month GA cache. Backup: /private/tmp/hikari-gallery-runtime-backup-20261012. Source/runtime hashes match; restarted service health 200; deployed actual-data rendering passes. Live GA checked five gallery dish/order pairs, zero verified gallery journeys, no query errors. Favorites kept separate. Checks: 14 website unit checks, 111 theme checks, 36 backend/export checks.

Next: observe the first genuine post-release gallery-link purchase and exact paid Square item. No test order was placed, and no completed gallery conversion is claimed.

## 2026-10-14 — Isolate the mail-tool information pages

Prepared the private Gmail tool pages under a separate Hikari path with no restaurant navigation link. The pages explicitly say the tool runs separately from the website. This uses the existing owned domain for Google OAuth disclosure while making the public connection to Hikari clear. Publication awaits Joel’s contact choice and approval.

## 2026-10-14 — Hikari hosts the OAuth information pages

Joel approved `hikarisojo.com/mail-research/` and `hello@hikarisojo.com` for
the separate private mail utility's public homepage, privacy policy, and terms.
The pages say the utility runs on the operator's Mac and is separate from the
restaurant website. Keep them outside restaurant navigation; their purpose is
accurate Google OAuth disclosure and an owner-controlled public contact.

## 2026-10-14 — Disclose full mailbox actions

Joel expanded the private tool to routine Gmail mailbox actions. The public pages must describe send, draft, archive, labels, and Trash/restore before the stronger `gmail.modify` grant is authorized. Keep the mail utility separate from restaurant navigation and do not imply immediate permanent deletion.
