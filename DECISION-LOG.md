# Hikari Website — Decision Log

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
