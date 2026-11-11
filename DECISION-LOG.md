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

## 2026-11-07 — Winter menu scope and media

Joel confirmed that the table QR menu retains Mochi even though it is excluded from online ordering. Use the approved editable winter prices for the QR menu. Remove the confirmed seasonal retirements and any duplicate placements. Display the existing thumbnail placeholder and text-only details when a matching photo is unavailable.

## 2026-11-10 — Winter homepage photos

The only Pink Lotus photo is a soft phone-video still, and printed-menu cutouts looked like studio shots next to the site's table photos. New homepage images were made with Codex built-in image generation from the approved real and printed-menu dish photos, preserving servingware, ingredients and portions; masters and prompts are in hikari-ops `printable-menu/assets/generated/website-editorial-20261110/`. Joel chose Teriyaki Chicken Don over Tekka Don. Square names it "Teriyaki Chicken Rice Bowl"; the homepage keeps the menu name and links by item ID.

## 2026-11-11 - Owner analysis: findings and proposed response

The [research report](docs/reports/2026-11-11-hikari-website-improvement-report.md) distinguishes verified source behavior from reported scores and ranking hypotheses. Live table-menu noindex exists in both meta and HTTP headers; sitemap has only the homepage and a stale lastmod. The first website proposal is a separate searchable public menu generated from the approved existing menu source. This is a recommendation, not a change to the accepted QR menu or publication approval.

Owner's recorded scan shows an error; its Top 3 percentages, expected CTR, search geography, and customer estimate need raw data/methodology. Do not treat the percentages as market share, or searches as lost customers. Nami Lily uses SkyTab, Maru's working address supplied by Joel is `https://marusushitogout.menu11.com/`, and Arigato links to Toast. The corrected Maru address must be used in subsequent comparisons.

Requested follow-up research read current Google ranking/GA4 documentation, a 2025 public engineer-call exhibit, Owner's own article, independent articles, Reddit, Stack Exchange and Square Community. Google's interaction signals are real; an automatic penalty for a legitimate outbound order click is not established. Older Analytics denials must not be broadened to deny all behavioral signals, and older forum answers do not override newer primary evidence. The Google video linked by the 2022 article was throttled; its statement is attributed as reported, not watched. Keep the useful content and handoff recommendations separate from unproven ranking causation. No platform switch is justified by the evidence in this report alone.

## 2026-11-11 — Reuse the existing menu for search

After clarifying that `/menu` already lets guests browse without ordering, Joel explicitly authorized making that existing page discoverable. This supersedes the earlier report's separate `/food` proposal. Remove production HTML and HTTP noindex controls, retain the canonical `/menu`, add it to the sitemap, and describe the menu/location in its title and description. Keep preview-wide noindex. The existing JavaScript-rendered menu remains in place; this release does not add prerendering or guarantee indexing.

Menu body, canonical dish data, photo presentation, homepage, and ordering/measurement scripts were unchanged. The existing homepage already links to `/menu`. Full production build, 17 protected checks, and three production/preview eligibility checks passed. Protection baseline `menu-search-before-tap-20261111`, digest `d1983747420ef9e4dc7da12bff7d50b2677dc941172bcafd47d44961e5ded461`; original oracle files and requirement selection preserved. The first pre-change capture had a test-output parser mismatch; it was retained, corrected to explicit TAP, and a passing baseline was captured before implementation.

The legacy browser release script still contains unrelated obsolete homepage/menu UI assertions; its search-expectation assertion was updated, but the complete script was not claimed to pass. Preservation evidence is byte comparison plus the existing menu/analytics checks. Google Search Console indexing and improved rankings are unverified; no indexing request or paid order was submitted.

Release evidence: `9f40f5d` on origin/main, Netlify `6af4c7765f58f0230134fa50`, published November 11 at 12:52 PM MST. Six public route/build comparisons passed, including both menu URLs, sitemap/robots, unchanged homepage and customer-menu JSON. Menu body is byte-identical to the pre-change live version.

## 2026-11-11 — Complete the six discovery workstreams

Joel authorized the listings, mobile-ordering, measurement, dining-information, neutral review and local/dish/story workstreams. Reuse the current website design and approved menu. Generated editorial pages take primary descriptions/prices from canonical data and header/footer/hour-table from the homepage; preserve the old lunch source in a non-published archive rather than carrying an independent outdated price list. No separate lunch promotion or entrance instruction is claimed without confirmation. The existing Google profile verifies free on-site parking.

Authenticated Google reads exposed a marketplace Menu URL and HTTP website URL. Scoped API patches changed only those fields to the official menu and HTTPS homepage; read-back verified them. Public Maps verified the website; menu-field propagation remains unverified. Place Actions API access is unavailable, so provider ordering links were not modified. Exact third-party corrections and outreach are drafted, not sent.

Google/GA4 and Square records support a fresh baseline without a new integration. This repository is public: raw aggregates, order-confirmation paths and mutation receipts stay in the main checkout's ignored evidence directory, not Git or the site build. The Search Console API is disabled, and Service Usage read returns AUTH_PERMISSION_DENIED for the existing credential. Do not infer missing property permission before API enablement is resolved. No IAM/auth/API changes were made. `/menu` is now mixed public/QR traffic; path-only QR attribution is no longer proof of a scan.

The review QR uses the stable first-party `/review/` route and a Google-provided review URI. It invites all honest feedback, with no rewards or satisfaction gate. Staff remain responsible for real requests and physical print/scan acceptance. No recurring polling or external service purchase was installed. Repeated baseline captures require explicit refresh; existing capture files are reused by default.

Validation and limits are in docs/reports/2026-11-11-discovery-release.md. Taste was used as a checker through its browser probe in T3; no separate browser, direction dealer or motion quota was applied. Existing brand warnings were retained, not treated as a redesign request.

November 11 owner clarification: no separate lunch specials are currently offered; Joel plans to add something this week. Keep regular menu prices/hours on the lunch page until the actual offer and launch details are confirmed. This is a plan, not approval of invented promotional dishes, prices or dates.

## 2026-11-11 — Existing table review placards

Joel confirmed review placards already exist on every table. Keep those in use; the newly prepared card does not require printing, distribution or replacement of existing materials. No existing placard destination or physical scan was independently tested in this session.

## 2026-11-11 — Submit the two directory corrections

Joel explicitly authorized fixing EatOutMap and RestaurantJump. Use each site's published correction route, not a customer review: EatOutMap's public wrong-details form returned a review acknowledgment; RestaurantJump publishes an update email, and a single message from the verified Hikari mailbox was read back with SENT. No owner login or claim was required. Submission is distinct from public correction; both pages still showed old fields immediately afterward. Other editorial outreach is still unsent and not covered by this narrow request. Retain receipts privately and avoid unchanged-status polling.

## 2026-11-11 — Send Salt & Seek request

Joel pointed to existing hello@hikarisojo.com access and authorized sending the prepared Salt & Seek request. Verified restaurant mailbox identity and absence of a matching prior Sent message, reviewed the exact draft and sent it once to alex@saltandseek.com. Read-back confirms SENT and expected sender/recipient/body at 2:40 PM MST. Sent does not establish receipt, editorial acceptance or inclusion. No automated follow-up or other outreach initiated.
