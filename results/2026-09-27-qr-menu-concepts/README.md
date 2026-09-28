# Approved QR menu preview checkpoint

Owner approved this checkpoint after reviewing the thumbnail transitions and browser-toolbar sizing correction on September 27, 2026. This is a private prototype, not a production release.

## Current version

- `continuous.html`: continuous 60-dish menu; all eight main categories remain visible, with Sushi subsection jumps.
- `mobile-preview.html`: interactive phone-width preview. `index.html` and `sample.html` preserve earlier comparisons.
- Approved large type: 20px dish names, 18px descriptions, 19px prices. Compact 28px photo thumbnails sit beside titles.
- Full-screen details open from and return directly to the thumbnail in 300ms. Swipe down, tap the readable return hint, or press Escape to dismiss; menu position is preserved. No row morph or delayed landing effects.
- Search is removed; My picks is disabled behind its flag.
- Photos fill the detail width at their intrinsic proportions, without a viewport-height cap or side margins. Browser-toolbar height changes cannot resize the photo. Intrinsic dimensions reserve space during loading; slow and failed loads have status messages.

## September 28 finishing checkpoint

Stronger selected and pressed category states; latest-tap navigation retargeting; aligned title/price columns; thumbnail placeholders; shortened Bento labels; full-width details with readable return hint. Browser checks found no overflow or title/price collision in all 60 rows at narrow width. Long-description spacing and loading/error state checks passed; owner approved the full-width photo on iPhone. No production changes are included.

## Run and verify

From repository root: `python3 -m http.server 6427 --bind 127.0.0.1`, then open `/results/2026-09-27-qr-menu-concepts/mobile-preview.html`.

The phone server used during review is a temporary staged copy on port 6428. Its LAN address and QR code are session-specific; recheck the Mac address and restart/synchronize the staged server when resuming.

`viewport-resize-check.html` is a manual regression fixture: open Small Tempura, then select “Simulate expanded browser bars.” Its iframe shrinks from 800px to 600px while the image dimensions remain stable. Browser checks also covered short-pull cancellation, dismissal, cleanup, repeated opening, menu scroll restoration and narrow layouts. Owner responded “perfect” after the final correction. Broader customer usability testing remains useful before production implementation.

Existing photo files are reused without modification. Every snapshot image dependency is tracked in this repository. Earlier experiments and screenshot evidence are retained for comparison. Future production work must start from current main and preserve unrelated work in this checkout.

---

## Earlier exploration (historical)

# QR menu concept comparison

Private preview, created September 27, 2026. No public menu or production code changed.

Open http://127.0.0.1:6427/results/2026-09-27-qr-menu-concepts/index.html on this Mac. If stopped, from the repository root run `python3 -m http.server 6427 --bind 127.0.0.1`.

Three samples: continuous compact menu; category directory and focused section; list/photo toggle. All have dish details, original existing photo derivatives, search, and temporary saved picks. These are design prototypes, not ordering software. Saved picks reset on refresh.

Menu snapshot: extracted from the live public js/menu-page.js on September 27; 12 categories and 60 unique dishes. All referenced image files exist locally. Prices, descriptions and flags preserved as supplied; no new dietary claims. Images use contain fitting and unchanged existing derivatives. No photography was generated or edited.

Browser checked: category entry/back, section jump, search including no results and deduplication, photo/list toggle, Gyoza photo/details, save and shortlist display. Desktop comparison and narrow embedded layouts visually inspected; representative inner body width 317px had equal client and scroll widths. The browser viewport override did not reliably match requested dimensions; no claim of exact 390px device verification. Physical phone and restaurant network testing remain for a selected implementation.

Next: owner review of the three options. Production implementation must start from current origin/main, not the older dirty checkout. This directory is excluded by the existing public build allowlist.


### 2026-09-27 — Continuous Sushi navigation
Option 2 Sushi now uses a continuous list with sticky Classic / Premium / Tempura-Fried / Nigiri & Sashimi / Hand Rolls section jumps. Buttons highlight the section reached by scrolling. All dishes remain present. Prior filter version preserved in sample-before-sushi-jumps.html.


Continuous alternative: [continuous.html](continuous.html). Original category-first option remains at sample.html?mode=2. Browser-verified 60 unique dishes, navigation/search/details, narrow layout; guest testing pending.
