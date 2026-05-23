# Hikari Sushi - Development Guide

Complete guide for developing, maintaining, and deploying the Hikari Sushi website.

---

## 📋 Table of Contents

1. [Theme System](#theme-system)
2. [Deployment](#deployment)
3. [Menu Management](#menu-management)
4. [Hours and Holiday Messaging](#hours-and-holiday-messaging)
5. [Google Reviews](#google-reviews)
6. [Mobile Optimization](#mobile-optimization)
7. [Asset Management](#asset-management)
8. [Planned Features](#planned-features)

---

## 🎨 Theme System

### Overview

The theme system automatically switches between seasonal/holiday themes based on date ranges. Themes are JSON files that control colors, hero images, logos, floating elements, and CSS custom properties. No manual activation needed — just set `startDate`/`endDate` and deploy.

### Architecture

- **Theme Loader**: `js/theme-loader.js` — resolves and applies the active theme on page load
- **Theme Definitions**: `themes/*.json` — individual theme configurations
- **Theme Registry**: `theme-config.json` — lists all registered theme IDs
- **Theme CSS**: `css/style.css` — theme-scoped styles via `[data-theme="<id>"]` selectors
- **Animations**: `css/theme-animations.css` — floating element keyframes and shared animations

### How Theme Resolution Works

The theme loader resolves which theme to apply using this priority:

1. `?theme=<id>` query param (if theme has `allowManualOverride: true`)
2. `manualOverride` in `theme-config.json` (for testing — normally `null`)
3. Date-based: filters themes where today falls within `startDate`–`endDate`, picks highest `priority`
4. Fallback: uses `fallbackTheme` from config (typically `"default"`)

### theme-config.json

```json
{
  "themes": ["default", "spring-loading-2026", "memorial-day", "st-patricks-day"],
  "fallbackTheme": "default",
  "manualOverride": null
}
```

- `themes`: array of theme IDs — each must have a matching `themes/<id>.json`
- `manualOverride`: set to a theme ID to force it regardless of date (useful for testing, set back to `null` for production)

### Theme JSON Structure

```json
{
  "id": "st-patricks-day",
  "name": "St. Patrick's Day",
  "startDate": "2026-03-15",
  "endDate": "2026-03-18",
  "priority": 15,
  "level": "light",
  "tokens": {
    "--color-bg": "#F4F8F4",
    "--color-bg-alt": "#E8F0E8",
    "--color-text": "#2C2C2C",
    "--color-text-light": "#5A6B5A",
    "--color-accent": "#1B7A3D",
    "--color-accent-light": "#28A55B",
    "--color-gold": "#FFD700",
    "--color-white": "#FFFFFF",
    "--color-dark": "#1A1A1A",
    "--hero-overlay": "linear-gradient(...)",
    "--hero-glow-color": "rgba(255, 215, 0, 0.20)",
    "--hero-glow-opacity": "1",
    "--theme-badge-display": "none"
  },
  "content": {
    "headline": "Luck meets flavor.",
    "subheadline": "Celebrate St. Patrick's Day with fresh sushi & good company.",
    "badgeText": null,
    "heroImageKey": "assets/images/hero-st-patricks-day.png",
    "logoImageKey": "assets/images/logo-st-patricks-day.png"
  },
  "floatingElements": {
    "enabled": true,
    "containerClass": "floating-elements",
    "elementClass": "floating-element",
    "characters": ["☘️", "🍀"],
    "images": ["assets/images/gold-coin.svg"],
    "colors": [
      "rgba(27, 122, 61, 0.45)",
      "rgba(40, 165, 91, 0.35)"
    ],
    "interval": 800
  },
  "rules": {
    "enabled": true,
    "allowManualOverride": true
  }
}
```

#### Key fields

| Field | Description |
|-------|-------------|
| `id` | Unique identifier, must match filename |
| `startDate` / `endDate` | ISO date strings — theme is active during this range (inclusive) |
| `priority` | Higher number wins when date ranges overlap |
| `tokens` | CSS custom properties applied to `:root` |
| `content.heroImageKey` | Path to a static image that replaces the hero video |
| `content.logoImageKey` | Path to a themed logo that replaces nav + footer logos |
| `content.badgeText` | Text shown in the hero badge pill (set `--theme-badge-display` to `inline-block` to show) |
| `floatingElements.characters` | Emoji/text characters that float up from the bottom |
| `floatingElements.images` | Image paths (e.g. SVGs) that float alongside characters |
| `floatingElements.interval` | Milliseconds between spawning new elements |
| `rules.allowManualOverride` | Whether `?theme=<id>` query param can activate this theme |

### Holiday Hours Guardrail

Seasonal themes should not imply the restaurant is open outside regular hours. Avoid copy such as "We're open today", "special holiday hours", or "come in this Sunday" unless ownership has explicitly confirmed that day's hours.

Sunday holidays need extra care because the restaurant is normally closed Sundays. This includes Mother's Day, Father's Day, Easter, Super Bowl Sunday, and any other Sunday event.

Use neutral theme copy by default:

- "Celebrate with fresh sushi and handcrafted rolls."
- "Regular hours apply."
- "Check our current hours before visiting."

Do not add a Sunday `openingHoursSpecification` entry or update Schema.org hours unless special Sunday hours are confirmed.

### Creating a New Theme

1. Create `themes/<id>.json` using the structure above
2. Add the ID to the `themes` array in `theme-config.json`
3. Add any theme-specific CSS in `style.css` scoped with `[data-theme="<id>"]`
4. Add theme assets (hero image, logo, SVGs) to `assets/images/`
5. Test locally with `?theme=<id>` query param
6. Commit and push — theme auto-activates when the date range hits

### Theme-Scoped CSS

Add visual accents in `style.css` scoped to the theme's data attribute:

```css
/* Only applies when St. Patrick's Day theme is active */
[data-theme="st-patricks-day"] .section-tag::before {
  content: '☘ ';
}

[data-theme="st-patricks-day"] .menu-page-item:hover {
  box-shadow: 0 6px 24px rgba(27, 122, 61, 0.4);
}
```

### Testing Locally

```bash
# Serve from the website directory
python3 -m http.server 8080

# Force a specific theme via query param
open "http://localhost:8080?theme=st-patricks-day"

# Or set manualOverride in theme-config.json temporarily
```

### Deployment

Themes auto-activate and deactivate based on dates — just push and forget:

```bash
git add themes/new-theme.json theme-config.json assets/images/...
git commit -m "Add [Holiday] theme (Month DD-DD)"
git push
```

No manual switching or reverting needed. When the `endDate` passes, the theme loader falls back to default automatically.

---

## 🚀 Deployment

### Netlify Continuous Deployment

Every push to `main` branch triggers automatic deployment:

1. **Local Changes**
```bash
git add -A
git commit -m "Description of changes"
git push origin main
```

2. **Netlify Build**
   - Detects push to GitHub
   - Runs build (no build step needed for static site)
   - Deploys to production

3. **Live in ~30 seconds**
   - Site updates at `hikarisojo.com`
   - Netlify serves the production site

### Manual Deploy (Netlify Dashboard)

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Select `hikarisojo` site
3. Click "Trigger deploy" → "Deploy site"

### Environment Variables

Set in Netlify Dashboard → Site Settings → Environment Variables:

- `GOOGLE_PLACES_API_KEY` - API key for Google Places (reviews)
- `GOOGLE_PLACE_ID` - `ChIJZV0qzpqHUocR4SuU3IlrTsg`

### Domain Configuration

- **Registrar**: Porkbun
- **DNS**: Cloudflare DNS only for web records
- **SSL**: Automatic via Netlify (Let's Encrypt)

Current public web records:

| Host | Type | Target | Cloudflare proxy |
|------|------|--------|------------------|
| `hikarisojo.com` / `@` | `A` | `75.2.60.5` | DNS only |
| `www` | `CNAME` | `hikarisojo.netlify.app` | DNS only |

Netlify certificate:

- Provider: Let's Encrypt
- Domains: `hikarisojo.com`, `www.hikarisojo.com`

### Cloudflare 525 Troubleshooting

On May 19, 2026, the live site showed `SSL handshake failed`, Cloudflare error `525`, for some visitors.

What it meant:

- Browser traffic reached Cloudflare.
- Cloudflare tried to connect to Netlify over HTTPS.
- The Cloudflare-to-Netlify TLS handshake failed.
- The website code was not the cause.

What was found:

- Netlify had HTTPS enabled with a valid Let's Encrypt certificate for both `hikarisojo.com` and `www.hikarisojo.com`.
- Cloudflare was proxying both the apex and `www` records with orange-cloud status.
- After bypassing the proxy, requests returned `HTTP/2 200` directly from Netlify.

Fix applied:

1. In Cloudflare SSL/TLS Overview, set encryption mode to `Full (strict)`.
2. In Cloudflare DNS, set the apex `A` record for `hikarisojo.com` pointing to `75.2.60.5` to DNS only.
3. In Cloudflare DNS, set the `www` CNAME pointing to `hikarisojo.netlify.app` to DNS only.
4. Verified DNS and HTTPS:
   - `dig +short hikarisojo.com` -> `75.2.60.5`
   - `dig +short www.hikarisojo.com` -> `hikarisojo.netlify.app`
   - `curl -L -I https://hikarisojo.com` -> `HTTP/2 200`, `server: Netlify`
   - `curl -L -I https://www.hikarisojo.com` -> `301` to apex, then `HTTP/2 200`

Why it can happen without code changes:

- Cloudflare-to-origin TLS depends on Cloudflare edge routing, SNI, origin certificate handling, and Netlify edge behavior.
- Netlify or Cloudflare can rotate certificates or edge infrastructure.
- A proxied Netlify target may work for a while and then fail if origin routing or certificate expectations change.

Next time:

- Do not start by editing site files.
- Check Netlify Domain management -> HTTPS certificate status.
- Check Cloudflare DNS records and proxy status.
- Temporarily gray-cloud the web records to confirm direct Netlify HTTPS works.
- Only renew the Netlify certificate if the Netlify dashboard reports a certificate/domain mismatch.

---

## 🍱 Menu Management

### Menu Structure

Menu items are hardcoded in `index.html` within category sections:

```html
<div class="menu-category" data-category="sushi">
  <div class="menu-item">
    <div class="menu-item-image">
      <img src="assets/images/menu/sushi/firefly_fusion.webp"
           alt="Firefly Fusion Roll">
    </div>
    <div class="menu-item-content">
      <div class="menu-item-header">
        <h3>Firefly Fusion</h3>
        <span class="menu-item-price">$16.95</span>
      </div>
      <p class="menu-item-description">
        Spicy tuna, cucumber, topped with seared salmon,
        jalapeño, and firefly sauce
      </p>
    </div>
  </div>
</div>
```

### Adding a New Menu Item

The public website menu section and the in-store QR menu page both use generated data from `../hikari-ops/menu-data/hikari-menu.json`.

1. Add or update the item in `hikari-ops/menu-data/hikari-menu.json`
2. Add the digital-menu-ready image to `assets/images/menu/[category]/`
3. Run `node scripts/generate-menu.js` from `../hikari-ops`
4. Verify `js/menu-page.js` was regenerated
5. Update DoorDash menu if applicable
6. Commit and deploy both repos as needed

### Updating Prices

Prices shown on the public website menu and QR menu come from `../hikari-ops/menu-data/hikari-menu.json`, then generate into `js/menu-page.js`.

1. Update the price in `hikari-ops/menu-data/hikari-menu.json`
2. Run `node scripts/generate-menu.js` from `../hikari-ops`
3. Verify DoorDash menu matches
4. Commit and deploy

### Menu Images

Google Drive is the master media archive, but digital menus must use deployable local assets.

For public website and QR menu items:

- `hikari-menu.json` should reference paths like `assets/images/menu/sushi/rainbow.png`
- the referenced file must exist inside this repo under `assets/images/menu/...`
- do not reference `/Users/.../GoogleDrive/...` paths from digital menu data
- print-only optimized assets belong in `../hikari-ops/printable-menu/assets/...`, not in website menu data
- name new images by dish and use, such as `edamame-salted__qr-1x1.png`, instead of numbered names like `edamame_2.png`

See `../hikari-ops/menu-data/README.md` for the full data and image workflow.

That workflow doc also contains the future Google Drive media cleanup plan. Do not move or rename the Drive media library in bulk without following that migration checklist.

---

## Hours and Holiday Messaging

### Current Public Hours

These hours are the source of truth for website copy, metadata, structured data, and promotional content:

| Day | Hours |
|-----|-------|
| Monday | 4:30 PM - 9:00 PM |
| Tuesday-Friday | 11:00 AM - 3:00 PM; 4:30 PM - 9:00 PM |
| Saturday | 11:00 AM - 9:00 PM |
| Sunday | Closed |

### Where Hours Appear

- `index.html`: visible Visit section and Schema.org `openingHoursSpecification`
- `index.html`: meta description and footer note
- `menu.html`: footer note
- `lunch-specials.html`: lunch availability and footer note
- `sitemap.xml`: update `lastmod` when public-facing hours content changes

### Sunday and Holiday Rules

The restaurant is closed Sundays by default. Do not publish Sunday or holiday-specific open messaging unless ownership explicitly confirms special hours.

Avoid phrases such as:

- "We're open today"
- "Special holiday hours"
- "Come in this Sunday"

This is especially important for Mother's Day, Father's Day, Easter, Super Bowl Sunday, and any other Sunday event.

When special hours are confirmed, update all visible copy and Schema.org structured data together so search engines and customers see the same schedule.

---

## ⭐ Google Reviews

### Architecture

- **Netlify Function**: `netlify/functions/reviews.js`
- **API**: Google Places API (New)
- **Caching**:
  - Server-side: 1-hour in-memory cache
  - Client-side: 24-hour localStorage cache
  - HTTP: `Cache-Control: public, max-age=3600`

### Google Cloud Configuration

- **Project**: Hikari Sushi (`hikari-sushi-486804`)
- **API**: Places API (New) enabled
- **Place ID**: `ChIJZV0qzpqHUocR4SuU3IlrTsg`
- **Billing**: Free trial ($300 credit, expires ~May 2026)

### Filtering

- Only 5-star reviews are displayed
- Sorted by newest first
- Server-side filtering prevents exposing lower ratings

### Carousel Behavior

- **Desktop** (>1024px): 3 cards visible, arrow navigation
- **Tablet** (768-1024px): 2 cards visible
- **Mobile** (<768px): 1 card, swipe navigation, dots indicator

---

## 📱 Mobile Optimization

### Swiper Carousels

Menu categories with 3+ items display as horizontal swipeable carousels on mobile (≤768px).

**Implementation**:
- Library: Swiper.js v11 via CDN
- Dynamic init/destroy on viewport resize (debounced)
- Categories with <3 items remain stacked

**Configuration**:
```javascript
{
  slidesPerView: 'auto',
  spaceBetween: 12,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}
```

### Mobile Nav Fixes

- Always shows solid background on mobile (no transparent fade)
- GPU compositing (`transform: translateZ(0)`) prevents disappearing during scroll
- Optimized transitions (background, box-shadow only)

---

## 📦 Asset Management

### Images

**Location**: `assets/images/`

**Optimization**:
- Format: WebP (converted from PNG/JPG)
- Menu images: 800px width
- Gallery images: 1400px width
- Result: 192MB → 4.6MB (97.6% reduction)

### Videos

**Location**: `assets/video/` (gitignored)

**Hosting**: Cloudinary CDN

**Optimization**:
- Re-encoded at 1Mbps
- Audio track stripped
- Faststart enabled
- Result: 2.6MB → 992KB (62% reduction)

### Google Drive Media Folder

Master source for all media assets:

```
Google Drive/Media/
├── Source Files/          # PSD, PXD design files
├── Food Photos/
│   ├── originals/        # High-res originals
│   └── cutouts/          # Transparent backgrounds
├── Branding/
│   ├── logos/
│   ├── backgrounds/
│   └── overlays/
├── Ready to Post/
│   ├── 1x1/              # Instagram/Facebook
│   ├── 4x5/              # Instagram vertical
│   ├── 9x16/             # Stories/Reels
│   ├── 16x9/             # YouTube
│   └── video/
├── DoorDash/             # DoorDash-specific images
├── Print/                # Menus, table tents
├── Website/              # Website-specific assets
└── Archive/              # Old content by year
```

---

## 🎯 Planned Features

Based on competitor research of 15+ upscale sushi restaurants. See [RECOMMENDATIONS.md](./RECOMMENDATIONS.md) for full details.

### High Priority (Easy Wins)

1. **Social Media Links** - Footer icons for Facebook + Instagram
2. **Desserts Section** - Photos already exist (mochi, tiramisu)
3. **Email Newsletter Signup** - "Join our guest list" form
4. **Lunch Specials** - Dedicated section for weekday specials

### Medium Priority

5. **Sake/Drinks Menu** - Japanese whisky, cocktails, wine list
6. **Chef Profile** - Head chef bio, photo, philosophy
7. **Private Events Section** - Party accommodations, inquiry form
8. **Instagram Feed Embed** - Live feed from @hikarisojo
9. **Gift Cards** - Link to purchase portal

### Lower Priority

10. **Press/Awards** - Display accolades and media mentions
11. **FAQ Page** - Hours, parking, dress code, allergies
12. **Omakase Experience** - Chef's tasting menu section
13. **Virtual Tour** - Interior/ambiance photos
14. **Catering Menu** - Sushi platters for events

---

## 🧪 Testing

### Before Deploying

1. **Cross-browser testing** - Chrome, Safari, Firefox, Edge
2. **Mobile testing** - iOS Safari, Android Chrome
3. **Responsive breakpoints** - 320px, 768px, 1024px, 1440px+
4. **Theme switching** - Verify all themes work correctly
5. **Performance** - Lighthouse score (aim for 90+ on all metrics)

### Post-Deploy Checks

1. Verify live site loads correctly
2. Test DoorDash button links
3. Check Google Reviews carousel
4. Confirm theme is correct for current date
5. Validate sitemap at `hikarisojo.com/sitemap.xml`

---

## 📚 Additional Resources

- [Swiper.js Documentation](https://swiperjs.com/)
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [Schema.org Restaurant](https://schema.org/Restaurant)

---

**Last Updated**: May 2026
