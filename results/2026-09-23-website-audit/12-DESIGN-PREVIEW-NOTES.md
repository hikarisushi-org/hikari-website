# Mobile-first design preview

September 23, 2026 · Phase 3 review artifact

Private review URL: `http://100.124.197.26:6421/preview`

The preview now covers the public-facing homepage only. It is not published and does not change the production site.

Joel clarified that `/menu` is the operational restaurant menu used in place of paper menus and must be completely isolated from the public website. Guests reach it only through the QR codes on restaurant tables. The redesign therefore contains no navigation, CTA, FAQ, schema, sitemap, or other discoverability path to `/menu`.

## Direction

- **Visual idea:** Hikari means light. Luminous mist-white space and food photography carry that idea; deep teal provides structure and coral is reserved for ordering.
- **Palette:** ink `#173330`, Hikari teal `#216F68`, deep teal `#0F4844`, coral `#E6675A`, mist `#EDF5F1`, white `#FFFFFF`.
- **Type:** self-hosted Playfair Display for the expressive food-led headlines; Inter for navigation, prices, and practical information.
- **Layout:** an asymmetric split hero on desktop; food first, then message on mobile. Content stays left aligned and the path is shortened to hero, six dishes, trust, one story, and visit information.
- **Restraint:** the coral action and the hero split are the memorable treatments. Repeated decorative labels, generic rounded-card grids, and scattered entrance animation are omitted.

## Real content used

The six preview dishes are the current `Most Popular` set from the website, with existing verified photos and prices: Gyoza, Flares of Hikari, Misty Harbor, Island Heatwave, Fire Cracker, and Naruto Roll.

The preview uses the current address, phone, hours, reservation destination, Square ordering destination, 5.0 rating display, and 160+ review count. The sample review sentence is explicitly labeled as placement copy; production continues to use the live daily review feed.

## Restaurant-menu boundary

The existing `/menu` experience remains a separate QR-only restaurant tool for in-house guests. The homepage does not mention or link to it. Square remains the public website's only menu-like action for online availability, pickup, delivery, and checkout.

## Verification

- Desktop homepage visually inspected at the requested 1280×720 viewport.
- Mobile homepage rendered with Lighthouse mobile emulation at 412×823, covering the requested 390×844 breakpoint behavior.
- The obsolete `/menu` redesign and homepage/menu switcher were removed after the product boundary was clarified.
- The homepage contains no link or reference to `/menu`; the preview's popular-dish action goes to Square ordering.
- The preview server exposes only `/preview` and `/assets/*`; a repository document request returns 404.

## Approval needed

Joel should approve or revise the homepage hierarchy, headline/supporting copy, the six featured dishes, coral order treatment, and the teal/mist visual direction before production redesign work proceeds.
