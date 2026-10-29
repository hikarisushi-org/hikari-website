# Project State

## 2026-10-11 — Menu ownership documentation

Resolved the local Ops/website source conflict: current digital content is the
website MENU-DATA block; Ops generation and hook installation are retired.
DEVELOPMENT.md now describes that release workflow. Website menu data matches
fetched origin/main bfc1517 and was not modified; no deployment occurred.
The existing dirty design checkout is preserved. Scoped changes are local and
uncommitted. See ../hikari-ops/menu-data/README.md for the archive and guard checks.

Latest private work (2026-10-01): three sunrise-and-waves variations of the owner-selected direction ready for comparison at port 6433, in `results/2026-10-01-hikari-motion/index.html`. Desktop and 390px browser review completed; next is owner selection among Quiet dawn, Morning tide and Painted morning. Production state below is unchanged.

Updated: 2026-09-28. Session closed (done).

## Current status

The approved customer QR menu is live at https://hikarisojo.com/menu. Production main is `af52b99`; Netlify deploy `6aba040f144ffe000820008b` is ready, published September 28 at 06:07 UTC. Homepage, QR-only visibility, analytics and canonical dish content are preserved. Previous production deployment for rollback: `6ab9b2f698c1960008494922` (`b7908a6`).

Live HTML and generated menu data matched the release build; all 60 photos returned valid image responses. Category navigation and full-width Small Tempura opening/return were checked in the live browser, including 390×844. Build, 9 analytics tests and 3 menu integration checks passed. Owner accepted the photo layout on an actual iPhone before publication; post-deploy physical-phone retest has not been reported.

## Local state and cautions

- Original checkout is `codex/website-improvements`, pushed through `0a88911` with no branch-local unpushed commits. Earlier unrelated homepage, analytics, assets and project-document edits remain dirty. Do not deploy this checkout as production.
- Production release checkout: `/Users/samanthashiro/.codex/worktrees/qr-menu-release/hikari-website`, branch `codex/qr-menu-release`, clean at `af52b99`; that commit is pushed to `origin/main` (no separate release-branch push).
- Preview servers are still listening: 6427 repository preview, 6428 temporary staged phone copy on 192.168.1.15, and 6431 release-build preview. These are session processes, not guaranteed restart-persistent services. Phone staging lives under `/var/folders/wp/d445_gz167b0yk33x3hs0w8c0000gn/T/hikari-phone-preview-dslenjl6`. Use the permanent public URL for customer access.
- No release/build job remains pending. Close-out documentation is local and uncommitted; no additional push/deployment is authorized by session-close.

**NEXT ACTION:** Resume only newly requested work from current `origin/main`, preferably the existing release checkout; do not re-release the older dirty preview branch.

## Other project context

Approved homepage design and original assets remain preserved; the seasonal hero automation was previously disabled. Historical homepage/review recovery details remain in SESSION-LOG.md and DECISION-LOG.md. Business/access follow-ups remain in ACTION-ITEMS.md.

## Ordering analytics handoff

Implemented the practical ordering measurement system in the existing dashboard. Live GA4, Square and Google Ads collectors, exact GA transaction-to-Square matching, day/week/month views, financial definitions, CSV downloads, DoorDash official financial/marketing reports, and manual Uber/Grubhub statement imports. Private caches retain only whitelisted reporting fields. No new roles, enterprise service, paid orders, campaigns or promotions.

Website production deploy `6ab76537d007357abec5c0ec` changes analytics links only. Live HTML/CSS preserved. GA cross-domain rules and three event dimensions saved; browser verified decorated links and adopted client/session IDs. Square storefront marker works, but /s/checkout does not include custom header. A receipt-only evidence event is saved and readable; a genuine receipt/native purchase/paid Square match remains awaiting data.

Square connected-channel totals and marketplace settlement stay separate. Grubhub's signed cancellation exposes a paid-canceled Square record; Uber pending adjustments and payout cohorts differ. Source, courier, fulfillment and payment are independent. Reports never equate a click or referral with causal sales.

Next: verify real receipt evidence; browser and supported merchant export work is complete. Detailed status table: results/2026-09-26-ordering-analytics/COVERAGE.csv. Keep the pre-existing dirty design tree intact.


## Latest analytics verification — September 26, 09:55 Denver

Browser restored. Grubhub deposits and Uber funnel/ads/offers imports are implemented, deployed and live-browser verified. Forty-metric report includes portal-only Grubhub customer/promotions and exact unsupported fields. Runtime AppTest passed. Receipt execution remains awaiting genuine data; two-hour follow-up continues only for that evidence. No customer purchase was created.


## 2026-10-01 — Keep Tailscale motion preview running

Preview failure was confirmed: no listener on 6433, and local/Tailscale HTTP requests failed. Installed user LaunchAgent `com.hikari.motion-preview` with KeepAlive, bound only to `100.124.197.26:6433`. Direct external-volume serving under launchd returned 404; serving an identical copy at `~/.local/share/hikari-motion-preview` restored HTTP 200. Browser freshly loaded all three concepts via Tailscale. Future source edits MUST sync the concept folder to that serving directory. The Mac must remain awake, logged in, and connected to Tailscale; access from the other computer remains user-unverified.

Latest refinement: Quiet dawn rays animate sequentially; served copy synced and verified. Next: owner reviews motion.

Current selection: Quiet dawn with sequential rays, now the only concept displayed at the Tailscale preview. Owner approved this direction; no live deployment requested.

Wave research completed (2026-10-01): recommend improved curve spacing and one subtle swell after the rays, then rest. Research only; preview unchanged.

Latest preview: smoother wave spacing and one finite staggered swell implemented and synced to persistent Tailscale service; next owner reviews motion.

Independent motion review: retain current animation; no material defects. Optional sun/wave spacing refinement and preview status cleanup noted. No changes applied.

Latest: private current-homepage hero integration ready at http://100.124.197.26:6433/homepage.html; desktop/mobile browser checked. Source in motion preview folder, serving copy synchronized; production unchanged. Await owner review.

2026-10-01 release: owner-approved hero sunrise with25% stronger strokes published from clean managed worktree /Users/samanthashiro/.codex/worktrees/hikari-hero-sunrise/hikari-website at a9a1e63; exact live HTML/CSS and desktop/mobile browser verified. Original dirty checkout remains unreleased.

## 2026-10-03 — Teriyaki chicken photo release

Owner-approved photo published to the website/QR menu in `431f4f0` on main. Live `/menu.html` was verified in desktop (1440px) and mobile (390px) Chromium; the fetched 640px WebP SHA-256 matches the release file. The canonical menu photo now uses a dated filename with square dimensions. Original working-copy unrelated changes were preserved.

Approved master, upload JPEG and both untouched original angles: `assets/images/source/2026-10-03-teriyaki-chicken/`. Release worktree: `/Users/samanthashiro/.codex/worktrees/hikari-teriyaki-photo/hikari-website`.

Square Online now displays the approved photo on the public exact rice-bowl item; old image association detached without deleting the asset. DoorDash accepted the 1600x900 landscape derivative and reports Photo pending review. Grubhub's POS-managed merchant menu has automatically synced the approved photo from Square; customer-view verification is still pending. Uber saved password was rejected and email verification is required; no direct Uber change verified. Records are in results/2026-10-03-teriyaki-photo/. The landscape derivative is archived alongside the approved square master and both originals.

Next: complete Uber account verification, then verify customer-facing marketplace photos after sync/moderation. Existing dish description mentions steamed vegetables while the photo shows salad/cucumber; wording unchanged pending owner clarification.


## 2026-10-03 — Approved description release

Approved rice-bowl description released in 9a780f9: Tender chicken glazed in sweet-savory teriyaki sauce over white rice, served with a fresh side salad. Live website JS and Uber public menu verified; Square catalog readback verified with all non-description fields unchanged; DoorDash saved/reloaded item and Grubhub synced merchant item verified. User also confirmed photos look correct across delivery apps. Customer-facing DoorDash/Grubhub description checks remain distinct from merchant verification.


## 2026-10-03 — Salmon bowl release

Published owner-approved jasmine-rice salmon image and fresh-side-salad description in 398764d. Website desktop1440/mobile390 detail inspected; build and 9 analytics tests passed. Square exact rice-bowl item CNJNTCWWEUNX4VDSQACF2A2N updated with image B62ZRFHCZZORZF2AE2D5F7BC; public detail visually verified; unrelated fields preserved. Uber public image/description verified. Grubhub merchant image/description sync visually verified. DoorDash description synced from Square; photo now reports visible, subject to later review. DoorDash manual-description override was declined to preserve POS synchronization. Approved master, landscape derivative and original references archived in assets/images/source/2026-10-03-teriyaki-salmon. No bento changes.
