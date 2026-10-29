# Overnight redesign — morning handoff

September 24, 2026. Private candidate ready for Joel's design review, not deployed.

- Preview: http://100.124.197.26:6421/preview
- Tracker: http://100.124.197.26:6420/tracker
- Design rationale: [16-OVERNIGHT-DESIGN.md](16-OVERNIGHT-DESIGN.md)
- Visual feedback source: [15-VISUAL-DIRECTION-JOURNAL.md](15-VISUAL-DIRECTION-JOURNAL.md)

## What changed

One cohesive light/modern direction with celadon, porcelain, sea-green type and cranberry ordering buttons. Large plated-food hero; concise photo/copy/action sections; six-photo kitchen gallery without catalog text; short Hikari story; genuine saved review excerpts; easy-to-find hours and address. A quiet sun/wave drawing nods to the existing logo. No floating food cutouts or autoplay video. Customer Favorites and category browsing were optional and are not included.

## Verified

- Isolated Chrome/Playwright at 1440, 1024, 768, 390 and 320 pixels: no horizontal overflow, all ten images load, one H1, valid internal anchors, no QR-menu links, no external preview resources or runtime errors on the completed run.
- Mobile menu open/close, Escape focus restoration, section selection, sticky ordering after hero; native menu and ordering without JavaScript; reduced-motion animation disabled.
- Order, reservation and directions diagnostic events are classified. Private preview does not send production GA events.
- Actual header order click reaches Hikari's live Square pickup/delivery screen. No cart modification, personal data entry or order submission. No unverified item/category deep links used. This pass does not re-prove checkout/payment/fulfillment.
- Preview server returns404 for `/menu` and `/PROJECT-STATE.md`. Production QR/menu files unchanged.
- Existing tests: analytics5/5; themes111/111; media260 responsive variants. `git diff --check` clean.
- Full-page desktop and mobile screenshots inspected; corrected oversized preparation photo and test capture races before saving final proof.

## Performance evidence

Lighthouse13.5 mobile simulation on the private Tailscale HTTP URL. First three runs: performance99/98/99; accessibility100 in all; median LCP2.25s; CLS0; TBT0; about341KiB initial transfer. These are lab results for the private concept, not live field data, sales uplift or a production performance guarantee. The previous production candidate had different content, so this is not a controlled A/B comparison.

Best Practices initially78, primarily HTTP/no HTTPS redirect and back-forward-cache limitations. A later burst run scored74 with an asset connection reset; repeated browser runs also encountered transient image-load failures. The final full browser run passed without resource failures. Existing servers and settings were preserved. A failed image-decode wait was replaced with explicit complete/natural-width checks; tests do not silently reload broken images. Keep load bursts sequential; investigate server/network if failures recur in normal use.

## Review and integration boundaries

Final sequential Lighthouse recheck after the accessible-brand-label correction: performance100, accessibility100, Best Practices78, LCP1.7s, CLS0, TBT0,341KiB. No console resource errors; label-in-name warning cleared. Evidence: `overnight-proof/lighthouse-mobile-recheck.json`. Earlier failures are retained above rather than hidden.

- This is a private HTML design candidate. Production index, theme system, GA modules, live review rotation, QR-menu source, Square operations/catalog/prices and unrelated `assets/images/july-4-hero.png` remain unchanged. Neither push nor production deployment performed.
- Reviews are static excerpts from the saved feed; production live rotation must be integrated after design approval. Preview analytics are diagnostic only. SEO/structured data and seasonal themes also need production integration and revalidation after approval.
- Existing food assets were visually checked. Some prepared assets appear enhanced/composited; no new photo generation occurred. Joel should review their food fidelity; do not describe this as newly commissioned authentic photography.
- Lighthouse is not a complete accessibility audit. Screen reader and physical iPhone/Safari testing remain unperformed. Square handoff is verified, not a new payment-flow test.
- Existing preview/tracker services remain at their original addresses; both computers need the existing Tailscale connection.

## Evidence

`overnight-proof/preview-checks.json`, desktop/mobile hero and full-page PNGs, `square-handoff.png`, and Lighthouse JSON runs. Re-run browser checks with Playwright available via `NODE_PATH` using `node scripts/verify-design-preview.cjs`.

Next: Joel reviews the candidate. Record refinements in the visual journal; do not treat overnight completion as approval to publish.
