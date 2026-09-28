# Changelog

All notable changes to this repo will be documented here.

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

## 2026-09-27 — Approved design recovery

Restored the approved homepage and committed its complete public source/build configuration to main so scheduled review syncs preserve the design.


### 2026-09-28 — Approved customer QR menu release
Owner explicitly approved replacing the live /menu with the reviewed continuous menu. Promoted approved UI from preview commit 0a88911 onto current production main, preserving existing site analytics, QR URL and canonical menu content. Build derives data/customer-menu.json from the existing js/menu-page.js menu block, enriching photo presentation from data/menu-presentation.json. Existing homepage unchanged. Build, 9 analytics tests, 3 menu integration checks, all photo paths, 60-row rendering, rapid category jumps and full-width detail/return verified locally. Deployment verification follows publication.
