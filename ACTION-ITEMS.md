# Website improvement report - proposed work

- [x] Consolidate Owner, competitor, and offsite-ordering research into the [dated report](docs/reports/2026-11-11-hikari-website-improvement-report.md) and verified PDF.
- [x] A0/A3/A4: captured live Google/GA4 and current Square baseline; audited listing fields and mobile Square pickup/cart. Search Console and paid same-session attribution remain separately limited.
- [ ] Enable Search Console API through an authorized Google project administrator, then test property access and index coverage. Existing credential gets SERVICE_DISABLED / AUTH_PERMISSION_DENIED.
- [ ] Submit prepared directory corrections/outreach only after explicit sending/claim authorization; Apple/Bing owner fields remain unverified.
- [x] A1/A2: Joel approved reusing `/menu`; removed production search exclusions, retained its canonical/homepage links, added sitemap entry and verified publication. This supersedes the separate-menu proposal.
- [ ] Observe actual Google indexing and later comparable search performance; eligibility is live, indexing/ranking is not yet verified.
- [x] A5-A8: prepared visitor/lunch/story and two canonical-menu-driven dish pages, neutral review page/card/staff process, and researched local outreach packet.
- [ ] Add separate lunch specials after their dishes, prices and launch details are confirmed. Joel confirmed November 11 that none are offered yet; they are planned for this week. Current lunch page uses regular menu prices/hours.
- [ ] Confirm exact entrance directions before adding them. Free on-site parking is verified in the existing Google profile.
- [ ] Staff: print/use the prepared review card and verify a physical phone scan; digital QR decoding passed.
- [ ] Observe public Maps menu-field propagation; merchant API saved state is verified, public website link is verified.
- [ ] A9: evaluate comparable search/local-grid and paid-order outcomes after an approved release. Request Owner's successful scan and raw methodology before relying on its scores.

# Winter homepage

- [x] Feature winter dishes on the homepage with NEW badges and announcement; publish after Joel's approval.
- [ ] Add homepage photos for Red Ruby, Kiwi Minaj, Shrimp Shady and Spider Roll when real photos exist.

# Winter QR menu

- [x] Apply the approved winter menu, remove retired listings, and retain Mochi on the table menu.
- [ ] Add matching photos as approved for winter dishes still using the photo placeholder, including the salmon bento with its revised sides.

# Mail research information pages

- [x] Publish the full mailbox-action disclosure and verify the three live routes before expanding the production OAuth grant.

- [x] Prepare isolated Hikari route and verify it builds without changing restaurant navigation.
- [x] Confirm `hello@hikarisojo.com` and the model-provider disclosure; Joel approved the Hikari domain and separate production OAuth setup.
- [x] Publish the pages from current `main`; verify live routes and unchanged restaurant homepage/menu.
- [x] Create the separate production Google OAuth project and reauthorize both accounts with its client.

# Kitchen gallery

- [x] Publish six verified dish links and deploy independent gallery purchase reporting with explicit approval.
- [ ] Observe first genuine gallery purchase; same-session and exact paid-item proof required.

# Kitchen gallery ordering

- [x] Verify all six catalog destinations and narrow layout.
- [x] Publish after explicit approval.
- [ ] Observe first genuine gallery-link purchase and exact paid-item match.



## October 12, 2026 — Favorites flow

- [x] Verify all five Square catalog IDs and public item links.
- [x] Keep the desktop/phone order action tied to the visible roll and preserve measurement.
- [x] Add exact paid-item evidence to Website orders and validate against genuine records.
- [ ] Observe the first genuine purchase through the new direct Favorites button; refresh Website orders and require the exact paid order/catalog-item match. No paid test order authorized or created.

### 2026-09-28 — Approved customer QR menu release
Owner explicitly approved replacing the live /menu with the reviewed continuous menu. Promoted approved UI from preview commit 0a88911 onto current production main, preserving existing site analytics, QR URL and canonical menu content. Build derives data/customer-menu.json from the existing js/menu-page.js menu block, enriching photo presentation from data/menu-presentation.json. Existing homepage unchanged. Build, 9 analytics tests, 3 menu integration checks, all photo paths, 60-row rendering, rapid category jumps and full-width detail/return verified locally. Deployment verification follows publication.

- [x] Integrate owner-approved Quiet dawn hero animation with 25% stronger strokes.
- [x] Verified production publication: exact live HTML/CSS match and desktop/mobile browser checks.


## October 3, 2026 — Favorites tracking
- [x] Implement and browser-test favorites visibility/swipes/named selections.
- [ ] Verify published tracking and later inspect genuine GA data; historical engagement cannot be recovered.
