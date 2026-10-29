# Editorial photo concept test

Date: September 24, 2026

Status: private visual study only. Production website and real menu photography are unchanged.

## Purpose

Test whether Hikari's existing food subjects feel more appetizing when art-directed like the references Joel selected: larger scale, visible texture, natural restaurant context, varied framing, human action and an intentionally uneven editorial layout rather than a uniform catalog grid.

The images are AI-assisted transformations. They can guide a future photo shoot and page composition, but they must not be presented publicly as verified photographs of the food guests will receive.

## Concept assets

| Role | Original subject | Concept asset |
|---|---|---|
| Dominant editorial image | Flares of Hikari | `assets/images/concepts/flares-original-editorial.webp`, a deterministic derivative of the verified original photograph |
| Macro texture detail | Hikari sashimi selection | `assets/images/concepts/sashimi-macro-concept.png` plus optimized `.webp` derivative |
| Human action moment | Chicken karaage | `assets/images/concepts/karaage-action-concept.png` plus optimized `.webp` derivative |

Original source files remain unchanged. The private preview uses optimized WebP files. PNG outputs from the two remaining AI-assisted supporting concepts are retained as concept masters. The rejected generated Flares study remains only as documented concept provenance and is no longer displayed.

## Final prompt set

### Dominant roll — rejected generated attempt

The prompt asked the model to rephotograph the existing Flares of Hikari roll while preserving the dish. The output elongated the real plate and sushi row. Joel identified the inaccurate geometry from his original photograph. This approach failed the preservation requirement and the generated roll is no longer used. The preview now uses the untouched original photograph with only a deterministic WebP conversion, uniform CSS zoom and crop.

### Sashimi detail

Rephotograph the existing salmon, tuna and white-fish selection as a tight macro editorial image. Preserve the fish selection and daikon while emphasizing salmon marbling, moist cut surfaces and translucency. Use a close landscape crop, believable shallow depth, side light and minimal table context. Avoid new seafood, props, hands, artificial bokeh, text and logos.

### Karaage action

Rephotograph the existing karaage plate as a candid restaurant moment. Preserve the chicken, sesame, scallion, lemon and dipping sauce; add only one natural hand squeezing the existing lemon wedge, with believable droplets. Use a close landscape crop, diagonal movement, soft daylight and visible crisp texture. Avoid extra food, utensils, staged catalog backgrounds, text and logos.

## Layout test

- The verified original roll photograph is the dominant image, shown in a taller crop with a uniform zoom; its geometry is not regenerated or stretched.
- The sashimi overlaps as a smaller macro detail on desktop.
- The karaage sits lower and offset to create an action beat.
- Mobile stacks the three roles in sequence without overlap.
- The section explicitly labels the images as AI-assisted concepts.
- Ordering remains linked to Square; QR-only `/menu` remains absent.

## Verification

- Desktop `1440px` and mobile `390px` browser checks passed.
- All concept images loaded without horizontal overflow.
- Mobile navigation, sticky ordering, reduced-motion and no-JavaScript behavior passed.
- `/menu` and `/PROJECT-STATE.md` remained inaccessible through the private server.
- The header order action reached the real Hikari Square storefront; no cart or order was created.

See `docs/WEBSITE-PHOTO-SHOOT-GUIDE.md` for the real-photography plan derived from this concept test.
