# Changelog

All notable changes to this repo will be documented here.

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

