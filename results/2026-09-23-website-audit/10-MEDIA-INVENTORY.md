# Active media inventory

September 23, 2026 · Phase 2 source inventory

## Baseline delivery boundary

The homepage and `/menu` share `js/menu-page.js`. On both pages, `renderMenu()` creates an `<img>` for every image-backed menu item before filters are applied. The images are marked lazy, but the homepage still owns the entire 60-image menu DOM and can request far more media than the proposed four-to-six-item featured section needs.

| Surface | Active sources | Source weight | Current behavior |
|---|---:|---:|---|
| Shared menu renderer | 60 unique menu images | 115.30 MiB | Every source is added to both homepage and `/menu`; cards have no responsive variants or intrinsic dimensions. |
| Homepage shell | Logo plus five unique food/gallery WebP files | 576 KiB | Gallery images are lazy, but the about image is not; no `srcset`, `sizes`, width, or height attributes. |
| Hero video | 2 remote MP4 files | 2.40 MiB landscape + 3.53 MiB portrait | Two autoplaying `<video>` elements exist simultaneously; CSS only hides one visually. Both use the same 112 KiB poster. |
| Repository media | 129 files | 244.51 MiB | Includes current, alternate, seasonal, and historical assets. |
| `assets/images/menu` | 102 files | 225.08 MiB | 60 are referenced by current menu data; 42 are unused or historical variants and must not be optimized or substituted automatically. |

The unrelated untracked `assets/images/july-4-hero.png` is not referenced by the current site and remains outside this work.

## Largest active menu sources

| Source | Dimensions | Bytes |
|---|---:|---:|
| `menu/sushi/sweet_potato_roll.png` | 1904×1904 | 4,942,429 |
| `menu/sushi/citrus_mango_dream.png` | 1904×1904 | 4,922,048 |
| `menu/sushi/emerald_dragon.png` | 1666×2232 | 4,909,586 |
| `menu/sushi/naruto.png` | 1925×1925 | 4,878,792 |
| `menu/sushi/yaki_maguro.png` | 1884×1884 | 4,871,308 |
| `menu/sushi/veggie_roll.png` | 1904×1904 | 4,861,467 |
| `menu/sushi/strawberry_blossom.png` | 1648×2208 | 4,854,037 |
| `menu/sushi/fire_spicy_tuna.png` | 1904×1904 | 4,820,504 |
| `menu/sushi/monument.png` | 1792×1792 | 4,107,448 |
| `menu/sushi/firecracker_roll.png` | 2753×1679 | 3,286,610 |
| `menu/desserts/mango_sticky_rice.png` | 3942×2295 | 3,013,186 |

Paths above are relative to `assets/images/`. These eleven sources alone weigh 47.18 MiB and are all currently referenced.

## Active homepage shell files

- `assets/images/logo.webp` — 1024×1024, 83,156 bytes; reused in navigation/footer and twice on `/menu`.
- `assets/images/sushi_platter_1.webp` — 1400×1866, 114,206 bytes; hero poster and gallery.
- `assets/images/sushi_making.webp` — 1400×1866, 209,300 bytes; about section and gallery.
- `assets/images/sushi_row.webp` — 1400×1400, 64,900 bytes; social image and gallery.
- `assets/images/sushi_eight.webp` — 1400×2100, 99,094 bytes; gallery.
- `assets/images/sushi_platter_ai.webp` — 1400×1400, 102,498 bytes; gallery.

## Implementation consequence

Only the 60 exact paths referenced by `menuData`, plus the six homepage shell sources and the current remote hero sources, are active inputs. Alternate filenames, unused seasonal files, and unreferenced menu photos are historical inventory—not candidates for automatic replacement.

Phase 2 should therefore:

1. Generate 320 px and 640 px WebP/AVIF card variants from the 60 active menu sources while keeping originals as fallbacks.
2. Give menu cards intrinsic dimensions and responsive source selection.
3. Split homepage featured rendering from the full `/menu` renderer so the homepage has only approved featured media.
4. Replace the two-video DOM with a single source selected before playback, plus poster-only behavior for reduced motion or data saver.
5. Enforce the active-source budget with a repeatable script rather than optimizing unused historical files.

## Implemented delivery result

- Generated 260 AVIF/WebP variants for 65 active food-image sources: 320/640 px for the 60 menu sources and 640/1280 px for five homepage sources.
- The generated variants total 4.26 MiB; the corresponding original sources total 115.86 MiB. Originals remain fallbacks.
- The shared menu renderer now emits responsive `<picture>` markup with `srcset`, `sizes`, 640×640 intrinsic dimensions, lazy loading, and asynchronous decoding.
- Homepage about/gallery imagery now uses responsive AVIF/WebP sources, intrinsic dimensions, and intentional lazy loading.
- The two simultaneous hero video elements were replaced by one orientation-aware video. It loads one landscape or portrait MP4 and stays poster-only for reduced-motion or data-saver users.
- `node scripts/validate-media.mjs` verifies all active variants, signatures, source-relative file weight, the single hero element, and its preference guards.

Browser proof on the local build selected 320 px AVIF menu cards, 1280 px AVIF homepage images, and only the landscape hero MP4 at desktop width. The mobile performance gate remains separate and requires three runs.
