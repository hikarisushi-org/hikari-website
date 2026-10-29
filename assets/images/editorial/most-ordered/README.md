# Most ordered editorial concepts

Status: private design-preview concepts only. Do not use these as customer-facing proof of the exact dishes sold at Hikari without owner review and explicit production approval.

The original menu photographs remain unchanged under `assets/images/menu/sushi/` and their existing optimized derivatives under `assets/images/generated/menu/sushi/`.

## Source mapping

| Editorial master | Existing source subject |
|---|---|
| `firefly-fusion-editorial.png` | Firefly Fusion |
| `citrus-mango-dream-editorial.png` | Citrus Mango Dream |
| `playboy-editorial.png` | Playboy |
| `strawberry-blossom-editorial.png` | Strawberry Blossom |
| `hot-cheetos-editorial.png` | Hot Cheetos Roll |

## Treatment

Created with the built-in image-generation edit workflow. The shared prompt requested a centered 16:10 editorial presentation, warm golden restaurant bokeh, teal tabletop, natural appetizing contrast, and preservation of each roll's recognizable ingredients and arrangement.

These concepts meet the private preview's consistency goals: common landscape framing, warm light, clear focal food, visible texture, and a unified background. They do not meet every requirement in `docs/WEBSITE-PHOTO-SHOOT-GUIDE.md`: the bokeh is artificial, the model may recreate food or plate details, all five use a similar hero treatment, and the set does not provide real Hikari context, macro, action, or service moments.

## Varied-composition revision

The `-v2` masters correct the repeated centered-plate treatment while retaining a shared 16:10 canvas, warm lighting and teal surface:

| Dish | Assigned photographic role |
|---|---|
| Firefly Fusion | Wide establishing view |
| Citrus Mango Dream | Tight cropped food close-up |
| Playboy | Low three-quarter layered view |
| Strawberry Blossom | True macro texture detail |
| Hot Cheetos Roll | Chopstick-lift action moment |

The owner explicitly accepted AI reconstruction within these private concepts. The original photographs and the first editorial concept set remain untouched. The design preview uses the responsive `-v2-640.webp` and `-v2-1280.webp` derivatives.

Optimized 1280x800 and 640x400 WebP derivatives are stored in `assets/images/generated/editorial/most-ordered/`.
