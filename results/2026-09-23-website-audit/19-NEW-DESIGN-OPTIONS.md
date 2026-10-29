# Two genuinely new homepage designs

Joel corrected the styling-only interpretation. These are new independent HTML compositions, not CSS skins of the old layout. Original and its variants remain intact. No deployment, Square change, or QR-menu link.

## Plan and review

At the table: white #FFFEFA, rice #F1F0E8, ink #234039, pine #315C4C, muted #52675D. Inter controls; Playfair large centered headline. A full-width food panorama and an inset ordering panel lead to an asymmetric photographic editorial, a compact guest quote and an open visit section. Boldness is the panoramic image, not decorative UI. Avoid repetitive split cards and walls of copy.

Find your flavor: white #FFFFFF, mist #EDF3F4, ink #163D42, teal #176568, red #A9363D, muted #56696B. Inter throughout. A compact introductory headline precedes a vertical category chooser paired with a large changing food image; horizontal snack-photo band and two distinct order/visit paths follow. The interaction previews representative food, not an embedded menu or cart. Category controls do not claim unverified Square category deep links.

```text
At the table
       centered headline
       panoramic photograph + order panel
       big photo | two smaller photo stories
       guest quote
       open address / hours / visit

Find your flavor
       title + order action
       category chooser | interactive photo + short caption
       three snack photos
       take-home panel | dine-in panel
       compact practical footer
```

Both use existing visually reviewed plated-food photography, real venue information, short copy, responsive images, keyboard-operable actions and no remote dependencies. Original private servers remain untouched; each standalone HTML is served with the existing allowlisted preview server on a separate Tailscale port.

## Delivered and verified

- At the table: http://100.124.197.26:6422/preview (`20-AT-THE-TABLE.html`).
- Find your flavor: http://100.124.197.26:6423/preview (`21-FIND-YOUR-FLAVOR.html`).
- Original: http://100.124.197.26:6421/preview; only comparison links updated, old styles remain accessible through their prior query URLs.
- Six isolated Chrome runs passed: both pages at1440,390,320 pixels. No horizontal overflow, broken anchors, failed image requests or JS errors; one H1; no third-party preview assets; every ordering CTA resolves to the existing Square storefront URL.
- All four category controls exercised through Enter keyboard activation. Mobile sticky ordering and no-JavaScript header ordering verified. Both servers reject `/menu` and `/PROJECT-STATE.md` with404.
- Desktop hero/full-page and mobile full-page screenshots visually reviewed, saved under `new-design-proof/`; machine evidence in `checks.json`. Existing analytics tests5/5 pass and diff whitespace check clean. No fresh Lighthouse scores or conversion uplift claimed. No new payment flow test; generic Square destination already verified in the preceding pass.
- Limitations remain: static saved review excerpt, diagnostic-only preview analytics, pre-existing enhanced food imagery and no production/theme/SEO integration. A real photo shoot may improve fidelity of enlarged photographs. No Square settings, production files, prices or July4 asset changed.

Run `scripts/verify-new-designs.cjs` with Playwright on NODE_PATH to repeat. Existing allowlisted servers started on6422/6423; original6421 and tracker6420 remain running. Next: Joel chooses or refines the genuinely different compositions.
