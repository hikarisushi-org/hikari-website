# Current design research — September 24, 2026

Status: research proposals only. Joel prefers the original preview; this research does not authorize replacing it or adding all the elements below. No website code changed in this pass.

## Evidence and interpretation

Reviewed current primary design-platform forecasts alongside usability and implementation guidance. Forecasts indicate creative directions, not controlled evidence of increased restaurant orders. Excluded unsubstantiated restaurant-agency sales-uplift claims. The following Hikari applications are our recommendations, not prescriptions from the sources.

| Direction and source | Possible Hikari application | Judgment |
|---|---|---|
| Sensory imagery and human/local connection — [Adobe 2026 forecast](https://business.adobe.com/resources/creative-trends-report.html) | Close-up real food texture, actual serving/plating moments and contextual restaurant photos. An optional short real-food clip could complement still photography. | Strong fit. Authentic appetite appeal comes before decorative effects; no invented dishes or synthetic food substitutes. |
| Distinctive brand craft and concise copy — [Webflow 2026 trends, updated January 8](https://webflow.com/blog/web-design-trends-2026) | One original Hikari sun/wave or recognizable food-line illustration; brief headings and short supporting text. | Strong fit as an accent, not a new theme. Joel liked Honeygrow's noodle animation but disliked unrecognizable food illustrations. |
| Tactile material styling — [Canva 2026 trends](https://www.canva.com/newsroom/news/design-trends-2026/) | Subtle paper or ceramic texture in one quiet section, or real texture within photos. | Optional. Keep small text and ordering controls on clear, solid surfaces. Do not turn the page into a scrapbook. |
| Expressive typography — [Figma 2026 web trends](https://www.figma.com/resource-library/web-design-trends/) | Refine the existing display/body contrast without adding long copy or hard-to-read lettering. | Original already addresses this; no new font required just to follow a trend. |

## Motion and contrast guardrails

- [NN/g's animation guidance](https://www.nngroup.com/articles/animation-purpose-ux/) is older usability guidance (2020), not a current trend forecast. It favors purposeful feedback and warns about distraction. For Hikari, brief button/menu feedback is a better starting point than pulsing CTAs, continuous animation, or scroll hijacking.
- [NN/g's Liquid Glass critique](https://www.nngroup.com/articles/liquid-glass/) concerns iOS 26, not a Hikari experiment. Its contrast concerns support our recommendation to avoid translucent ordering controls over busy food photos.
- If a food clip is explored, use an optimized video with a static poster and keep ordering immediately available. [web.dev video guidance](https://web.dev/articles/lazy-loading-video), updated July 2, 2026, explains deferred loading and video alternatives to heavy GIFs. Do not lazy-load the primary LCP hero indiscriminately.
- Provide reduced-motion behavior. Automatically moving content lasting more than five seconds alongside other content generally needs a pause/stop/hide mechanism under [WCAG 2.2 SC 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), unless essential.

## Recommended sequence, subject to Joel's choice

1. Preserve original layout, even image corners, light identity and obvious solid ordering CTA.
2. Prioritize a coherent, appetizing set of authentic photos; assess a small real-food video only if suitable source footage exists.
3. Prototype one original recognizable Hikari illustration, optionally with restrained motion, then evaluate whether it adds personality without competing with the food.
4. Add subtle interaction feedback only where useful. Texture and typography changes are lower priority, not required additions.

Avoid cutout food collages, experimental navigation, neon palettes, decorative 3D sushi, asymmetrical masks and dense copy. These either conflict with Joel's expressed preferences or add complexity without a demonstrated benefit here.

No reviewed source proves these changes increase Hikari sales. Any later implementation should be judged by mobile performance, accessibility, ease of reaching Square and available order/completion measurements—not fashion or scroll time alone. Preserve QR-only /menu isolation. Production, Square and preview servers remain unchanged.
