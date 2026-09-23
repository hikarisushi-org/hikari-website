# Changelog

All notable changes to this repo will be documented here.

## 2026-09-23

### Changed

- Replaced multi-megabyte menu image delivery with 260 generated AVIF/WebP variants, responsive picture selection, intrinsic dimensions, and intentional lazy loading across the shared menu and homepage food imagery. Replaced two simultaneous hero videos with one orientation-aware source that respects reduced motion and data saver; added cache-busted asset URLs and repeatable media validation.
- Re-encoded the current hero reels to 297 KiB landscape and 406 KiB portrait H.264 sources, self-hosted and preloaded critical Inter/Playfair Display fonts, disabled stale theme-JSON caching, and limited the homepage's initial menu render to six featured dishes while preserving the full `/menu` catalog. The final optimized build passed three mobile Lighthouse runs at a median 88 performance, 3.83-second LCP, zero CLS, and 1.13 MiB transferred.
- Repaired CTA measurement for the current Square ordering domain while preserving reservation and directions events. Added page/placement/destination parameters, a browser diagnostic mode, and focused tests; no production deployment yet.
- Aligned item visibility across Square Online, DoorDash, Uber Eats, and Grubhub: 14 website-matched items enabled on all delivery apps, nine non-menu items disabled there, and six stray Square website-channel settings removed. Preserved POS records and prices. [Live verification and limits](results/2026-09-23-website-audit/07-DELIVERY-APP-MENU-PARITY.md).
- Reconciled Square Online ordering with the current website menu: enabled 11 missing dishes using the previously synced website photos, hid six Square-only dishes from the website channel, corrected Mango Sticky Rice's shipping-only fulfillment and -26 stock count, and verified public visibility/orderability. Kept salads and mochi off Square Online per Joel; left website salad listings unchanged at his request. [Menu inventory and verification](results/2026-09-23-website-audit/06-MENU-RECONCILIATION.md).
- Removed Garlic Shrimp from the live Hikari website menu and deselected only its Square `Online – Website & Profile` channel, preserving POS and delivery-app channels. Switched Crab Rangoon (6pcs) from stock-count tracking (-25) to availability tracking so it is orderable. Verified both public menus; no price or recipe changes.
- Corrected the live Square `Teriyaki Chicken Bento Box` customer-facing description to say chicken rather than salmon; verified the saved text after reopening the item. No price, modifier, photo, availability, menu, or channel setting changed.
- Synced current website menu photos into matching live Square items, replaced older item primaries where needed, and audited catalog thumbnail coverage. All 60 matchable website menu entries now have images; Square-only missing-photo gaps are documented separately. No pricing, menu assignment, modifiers, availability, channels, or integrations changed. See [photo inventory](results/2026-09-23-website-audit/05-SQUARE-PHOTO-SYNC.md).
- Published native Square Online ordering improvements after Joel’s approval: hid the oversized main banner, selected compact photo-and-description item cards, and deactivated the blocking 20% announcement without changing the discount.
- Verified live pickup and delivery through payment entry, mobile fixed View order behavior, and desktop layout; removed the temporary cart item. Restored the original header setting after a sticky-header experiment did not improve cart access. Saved [results and limitations](results/2026-09-23-website-audit/04-SQUARE-LIVE-IMPROVEMENTS.md).

### Added

- Approval-gated responsive homepage and `/menu` design preview with real Hikari photos, current popular-dish names/prices, a shortened ordering-first hierarchy, dine-in menu/search/advisory treatment, and a private Tailscale-only review server. No production publication.
- Active media inventory separating the 60 current menu sources and homepage/hero media from unreferenced historical assets, with source weights, largest offenders, and the responsive-delivery boundary.
- Authenticated four-week Square baseline for the website roadmap: 15 completed online orders, $602.90 net online sales, and $40.19 average order value for August 26–September 22. GA4 remains explicitly access-blocked rather than estimated.
- Tracker-only private Tailscale server helper so the progress board can stay rendered in a remote computer's Codex Browser panel without exposing the repository or publishing the tracker publicly.
- Right-panel HTML implementation tracker with 34 proof-gated roadmap items; 13 are currently complete.
- Measurement record separating GA4 link behavior from Square orders/sales and preserving the September 23 mobile performance baseline.
- Phased implementation plan for every unfinished website-audit recommendation: analytics, mobile performance, design, a one-item Square proof, static-first implementation, SEO/accessibility, release verification, and post-launch measurement. The plan explicitly excludes already-completed Square, catalog, menu-parity, and review-rotation work.
- Square-hosted ordering customization follow-up: supported controls, checkout limits, account-specific unknowns, and a bounded editor inspection recommendation. No settings changed.
- Bounded Hikari / Saffron Valley / Owner comparison in `results/2026-09-23-website-audit/`: recommendation, measured design reference, SEO/vendor-evidence notes, screenshots and PageSpeed evidence. Analysis only; live website and ordering configuration unchanged.

## 2026-08-20

### Changed
- Updated the documented GitHub SSH identity from the retired automation key to the active `arcos33` key.

## 2026-06-12

### Added
- **Hero notice banner** (`components/notice-banner.html`): reusable, documented temporary-announcement component — frosted dark-glass pill with a gold pulsing status dot, designed to sit in the hero over the video. Self-contained style + markup + optional timezone-proof auto-hide script. First deployed as a "Closed for lunch today / dinner resumes at 4:30 PM" notice, set to auto-hide at 3:00 PM MDT.

## 2026-05-27

### Fixed
- **Memorial Day hero cleanup**: Restored the default homepage hero video sources (the Memorial Day clip was still hardcoded in `index.html` after the theme’s date range ended).
- **Theme loader correctness**:
  - Clears the `.theme-badge` text when a theme doesn’t define `badgeText`.
  - Improves hero handling so “default” reliably restores the standard hero reels.
  - Ensures themed floating containers (e.g. `.floating-stars`) are hidden/cleared when a theme disables floaters.

### Added
- **Hamburger Day (2026) theme** (`themes/hamburger-day-2026.json`):
  - One-day auto theme for **2026-05-28**.
  - Desktop hero uses `assets/images/hamburger_day.png`.
  - Mobile hero uses `assets/images/hamburger_day_portrait.png`.
- **Hero image source switching**: Added support for `content.heroImageSources` so a theme can supply separate landscape/portrait hero images.

### Changed
- **Hamburger Day hero layout**: Hides the standard hero badge/tagline/title/subtitle for this theme so the promo artwork isn’t covered; keeps CTA buttons visible.
