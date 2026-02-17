# Hikari Sushi - Development Guide

Complete guide for developing, maintaining, and deploying the Hikari Sushi website.

---

## 📋 Table of Contents

1. [Theme System](#theme-system)
2. [Deployment](#deployment)
3. [Menu Management](#menu-management)
4. [Google Reviews](#google-reviews)
5. [Mobile Optimization](#mobile-optimization)
6. [Asset Management](#asset-management)
7. [Planned Features](#planned-features)

---

## 🎨 Theme System

### Overview

The theme system allows quick switching between seasonal/holiday themes without manual CSS editing. Themes are defined in JSON files and applied automatically based on date ranges.

### Architecture

- **Theme Definitions**: `themes/*.json` - JSON configurations
- **Theme Logic**: `js/theme.js` - Client-side theme application
- **Theme CLI**: `scripts/theme.js` - Command-line theme management
- **Active Theme**: `theme-config.json` - Currently active theme ID

### Theme Configuration Structure

```json
{
  "metadata": {
    "name": "Valentine's Day Theme",
    "id": "valentines",
    "activeRange": {
      "month": 2,
      "dayStart": 10,
      "dayEnd": 15
    }
  },
  "colors": {
    "bg": "#FFF5F5",
    "accent": "#C62828",
    "accentLight": "#E8A0BF",
    "text": "#2C2C2C",
    "heroOverlay": "rgba(198, 40, 40, 0.4)"
  },
  "banner": {
    "enabled": true,
    "sectionClass": "valentines-banner",
    "title": "Love is in the Air",
    "subtitle": "Valentine's Day Special",
    "description": "Celebrate with your loved ones...",
    "cta": {
      "text": "Reserve Now",
      "url": "https://reserve.hikarisojo.com"
    }
  },
  "floatingElements": {
    "enabled": true,
    "characters": ["❤️", "💕", "🌹"],
    "colors": ["rgba(198, 40, 40, 0.3)", "rgba(232, 160, 191, 0.3)"]
  },
  "videoPath": "assets/video/hero.mp4"
}
```

### CLI Commands

```bash
# Get current active theme
node scripts/theme.js get

# Switch to a different theme
node scripts/theme.js switch <theme-id>

# List all available themes
node scripts/theme.js list

# Get detailed info about a theme
node scripts/theme.js info <theme-id>
```

### Creating a New Theme

#### Method 1: Copy and Modify

1. Copy an existing theme as a template:
```bash
cp themes/valentines.json themes/st-patricks.json
```

2. Edit the new file:
```json
{
  "metadata": {
    "name": "St. Patrick's Day Theme",
    "id": "st-patricks",
    "activeRange": { "month": 3, "dayStart": 14, "dayEnd": 17 }
  },
  "colors": {
    "bg": "#F0FFF0",
    "accent": "#2E7D32",
    "accentLight": "#66BB6A"
  },
  "banner": {
    "enabled": true,
    "title": "Luck of the Irish Sushi",
    "subtitle": "St. Patrick's Day Special"
  },
  "floatingElements": {
    "enabled": true,
    "characters": ["☘️", "🍀"],
    "colors": ["rgba(46, 125, 50, 0.3)"]
  }
}
```

3. Activate the theme:
```bash
node scripts/theme.js switch st-patricks
git add -A
git commit -m "Add St. Patrick's Day theme"
git push
```

#### Method 2: Snapshot Tool (Advanced)

Create a theme from current live CSS:

```bash
node scripts/snapshot-theme.js
# Follow prompts to generate JSON from current styles
```

### Theme Deployment Workflow

#### Holiday Preparation (1 week before)

1. Create/update theme JSON file
2. Test locally
3. Commit to git (but don't activate yet)

```bash
git add themes/new-theme.json
git commit -m "Add [Holiday] theme"
git push
```

#### Activation (day of event)

```bash
node scripts/theme.js switch new-theme
git add theme-config.json
git commit -m "Activate [Holiday] theme"
git push
```

#### Revert to Default (day after event)

```bash
node scripts/theme.js switch default
git add theme-config.json
git commit -m "Revert to default theme"
git push
```

### Automated Theme Switching

Themes can auto-activate based on date ranges (future enhancement):

```javascript
// Example: Auto-switch on page load
const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();

// Check if current date falls within any theme's activeRange
// Apply that theme automatically
```

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
   - Cloudflare CDN cache invalidates

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
- **DNS**: Cloudflare (proxied through Netlify)
- **SSL**: Automatic via Netlify (Let's Encrypt)

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

1. Add the HTML structure in the appropriate category section
2. Add the item image to `assets/images/menu/[category]/` (or use Cloudinary)
3. Update DoorDash menu if applicable
4. Commit and deploy

### Updating Prices

Prices are synced with DoorDash. To update:

1. Search for the item name in `index.html`
2. Update the `<span class="menu-item-price">` value
3. Verify DoorDash menu matches
4. Deploy

### Menu Images

**Current Status**: Menu images were moved to Google Drive. Images are referenced but files don't exist locally.

**Options**:
- Upload to Cloudinary for CDN delivery (recommended)
- Reference Google Drive directly
- Keep text-only menu

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

**Last Updated**: February 2026
