# Mobile performance verification

September 23, 2026 · Phase 2 completion proof

## Result

The optimized local build passes the Phase 2 lab gate.

| Run | Performance | LCP | CLS | Transferred bytes |
|---:|---:|---:|---:|---:|
| 1 | 87 | 3.98 s | 0 | 1,185,994 |
| 2 | 88 | 3.83 s | 0 | 947,175 |
| 3 | 88 | 3.83 s | 0 | 1,012,614 |
| **Median** | **88** | **3.83 s** | **0** | **1,012,614** |

Gate: median performance at least 85, LCP at most 4.0 seconds, and CLS 0.

Method: Lighthouse 13.5.0 mobile preset, three fresh headless Chrome runs against the local static build. This is implementation proof, not production field data; the same test must be repeated after an approved deployment.

## Changes that cleared the gate

- Replaced the 3.53 MiB 1080×1920 remote portrait hero with a 406 KiB 540×960 H.264 version. The 2.40 MiB landscape source is now a 297 KiB 960×540 version.
- Kept one viewport-selected hero element rather than two simultaneous autoplay videos.
- Self-hosted the Latin Inter and Playfair Display WOFF2 files and preloaded the two initial fonts, removing the render-blocking Google Fonts stylesheet and its variable network delay.
- Retained the 260 responsive AVIF/WebP food-image variants, intrinsic sizing, and lazy loading from the media-delivery checkpoint.

In the median run, the largest single transfer was Google Analytics at 192,377 bytes. The selected portrait video transferred 131,260 bytes during the measured page load. Total transfer was down from the earlier 4.4 MiB local runs to a 0.97 MiB median.

## Verification boundary

- `node scripts/validate-media.mjs` checks generated images, optimized hero files, self-hosted fonts, the single-video contract, and reduced-motion/data-saver guards.
- Five analytics tests and all 111 theme tests remain green.
- Desktop browser proof selected the optimized local landscape hero and rendered the intended Inter and Playfair Display families.
- No production deployment occurred.
