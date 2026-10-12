# Kitchen gallery ordering

## October 12, 2026 — Kitchen gallery ordering prepared

Added named direct Square links below all six kitchen photos, retaining the existing grid and imagery. Exact item/variation IDs come from the live catalog; the existing menu identifies the sashimi photo as Sashimi Platter. Gallery uses placement `kitchen-gallery` and list `homepage_kitchen`, separate from Favorites. All six public destinations opened correctly through PiKVM. Desktop, 400px and 320px browser layouts passed; the 320px platter action opened the correct item. No purchase submitted.

Validation: 14 website unit checks, 111 theme checks, build; 36 dashboard backend/export checks and actual-data rendering. Live GA checked all five existing gallery dish/order pairs with no errors; none showed a gallery journey. First genuine post-release gallery purchase remains unobserved.

Publication pending: automatic approval review rejected production push, requiring explicit approval for public website and live dashboard deployment. Source and preview are ready.

Rollback: website release before this change is 033da13, Netlify 6acd0a149ae2261fa0b19fed. Favorites remain separate and unchanged. Gallery photo exposure is not collected as purchase evidence; named order clicks use the existing safe URL and linker handling.
