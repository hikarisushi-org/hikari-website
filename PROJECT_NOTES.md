# Hikari Sushi — Website Project Notes

## Overview
- **Business**: Hikari Sushi — Modern Japanese Kitchen
- **Location**: 10468 South Redwood Road, South Jordan, UT 84095
- **Phone**: (385) 866-3746
- **Hours**: Mon 4:30–9pm | Tue–Fri 11am–3pm & 4:30–9pm | Sat 11am–9pm | Sun Closed
- **Online Ordering**: DoorDash — https://order.online/store/-35091901?hideModal=true
- **Current live site**: www.hikarisojo.com (hosted on Carrd — to be replaced)

## What We Built
Built a complete static website from scratch to replace the existing Carrd site. The project lives at `~/Projects/hikarisojo/`.

### Tech Stack
- Static HTML/CSS/JS (no framework, no build step)
- Google Fonts (Inter + Playfair Display)
- Fully responsive (mobile, tablet, desktop)
- Intended to be hosted on **Netlify** (free tier)

### Site Sections
1. **Navigation** — Fixed top nav with smooth scroll links + DoorDash order button
2. **Video Hero** — Looping landscape video (`Sandwich_Video_Generation_Request.mp4`) with overlay text
3. **About** — "Where Light Meets Flavor" section with chef photo
4. **Promo Banner** — 20% off pickup orders
5. **Menu** — Full interactive menu with category filter buttons and food photos
   - Most Popular, Appetizers, Traditional Rolls, Premium Rolls, Sushi Heroes, Tempura Fried, Maki, Nigiri, Sashimi, Entrees, Bento Boxes, Kids, Beverages
6. **Gallery** — Photo grid with hover zoom
7. **Location** — Address, hours, phone, Google Maps embed
8. **Footer** — Quick links, contact info, DoorDash button

### Key Design Decisions
- **Color palette**: Warm earth tones (#FAF7F2 background), teal accent (#1A7A6D), gold highlights (#D4A853)
- **DoorDash buttons**: Red (#FF3008) with white DoorDash logo, links to DoorDash ordering page
- **Menu images**: Sourced from Google Drive `Media/Final/Final Make Ignore/1x1/` folders
- **Scroll animations**: Fade-in reveal on scroll using IntersectionObserver

## What Changed From Original Carrd Site
- Replaced all placeholder/lorem ipsum text with real content
- Added full menu with actual prices (synced with DoorDash as of Feb 2025)
- Added food photography to menu items
- Video hero instead of static image
- Correct business hours, address, phone
- Proper SEO meta tags
- DoorDash integration (was previously Toast)
- Fixed copyright from "Untitled" to "Hikari Sushi"

## Asset Sources
- **Logo**: `~/Downloads/Hikari/logo_con_letras-removebg-preview.png`
- **Food photos**: Google Drive `Media/Final/Final Make Ignore/1x1/` (Appetizers, Bowls, Desserts, Food, Sushi subfolders)
- **Hero video**: `~/Downloads/Sandwich_Video_Generation_Request.mp4`
- **DoorDash logo**: Google Drive `Media/Design Assets/Logos/doordash_logo_1.png`
- **Gallery photos**: `~/Downloads/Hikari/Food/` + `~/Downloads/` sushi photos
- **Menu data**: `~/Downloads/Hikari/Menu/menu_1.json` + `~/Downloads/hikari_full_menu.pdf`

## Themes

### Default Hikari Theme
- **Location**: `css/theme-default.css`
- Warm earth tones (#FAF7F2 background), teal accent (#1A7A6D), gold highlights (#D4A853)
- To restore: copy `css/theme-default.css` over `css/style.css`

### Valentine's Day Theme (Feb 2026)
- **Location**: `css/style.css` (currently active)
- Deep reds (#C62828), soft pink background (#FFF5F5), rose pink accents (#E8A0BF)
- Includes Valentine's banner with reservation CTA, countdown, love message generator
- **Remove after**: Feb 15, 2026 — swap back to default theme

## Still To Do

### Deployment
- [x] Create Netlify account
- [x] Deploy to Netlify (hikarisojo.netlify.app)
- [x] Point hikarisojo.com domain to Netlify (Porkbun DNS)
- [x] Cancel Carrd subscription

### Content & Design
- [x] Add descriptions for premium rolls (Strawberry Blossom, Diamond Roll, Forbidden Roll, Firefly Fusion, Red Lantern, Avocado King, Cowboy Roll)
- [x] Google Maps embed verified — correct pin location
- [x] Added favicon (using new circular logo)
- [x] Removed 20% off promo banner (no longer active)
- [x] Updated nav logo to new circular sun/wave design
- [x] Added Reservations button (Carbonara)

### Performance
- [x] Optimize images (Feb 7, 2026) — converted all PNG/JPG to WebP, resized to display dimensions (800px menu, 1400px gallery), removed 29 unused images. **192MB → 4.6MB (97.6% reduction)**
- [x] Optimize hero video (Feb 7, 2026) — stripped unused audio track, re-encoded at 1Mbps with faststart. **2.6MB → 992KB (62% reduction)**

### SEO & Analytics
- [x] Add Google Analytics (G-SH54LFXHJ3)
- [x] Submit sitemap to Google Search Console
- [x] Add Schema.org structured data for restaurant (hours, address, menu)

### Mobile UX
- [x] Mobile menu swiper carousels (Feb 7, 2026) — see details below
- [x] Fixed mobile nav bar — always visible with solid background, GPU-composited to prevent scroll jank

### Future Enhancements
- [x] Add reservations button (Carbonara)
- [ ] Instagram feed embed
- [x] Google Reviews carousel (Feb 7, 2026) — see details below
- [ ] Desserts section (photos already in assets: mochi, tiramisu)
- [ ] Lunch specials section (if applicable)

## Google Reviews Carousel (Feb 7, 2026)

### Architecture
- **Netlify serverless function** (`netlify/functions/reviews.js`) proxies Google Places API (New)
- API key stored as Netlify env var — never exposed client-side
- Place ID: `ChIJZV0qzpqHUocR4SuU3IlrTsg`

### Google Cloud
- **Project**: Hikari Sushi (`hikari-sushi-486804`)
- **API**: Places API (New) enabled
- **API Key**: Restricted to Places API (New) only
- **Billing**: Free trial — $300 credit, 91 days remaining as of Feb 7

### Caching
- Server-side: 1-hour in-memory cache in the serverless function
- Client-side: 24-hour localStorage cache (`hikari_reviews` key)
- HTTP Cache-Control: `public, max-age=3600`

### Filtering & Sorting
- Only 5-star reviews are shown (lower ratings filtered out server-side)
- Sorted newest first

### Carousel Behavior
- Desktop: 3 cards visible, arrow navigation
- Tablet (<=1024px): 2 cards visible
- Mobile (<=768px): 1 card, swipe/drag navigation, arrows hidden
- Dots indicator synced with position

### Netlify Environment Variables
- `GOOGLE_PLACES_API_KEY` — API key for Places API
- `GOOGLE_PLACE_ID` — `ChIJZV0qzpqHUocR4SuU3IlrTsg`

## Mobile Menu Swiper Carousels (Feb 7, 2026)

### Overview
Menu categories display as horizontal swipeable carousels on mobile (768px and below), reducing scroll length. Desktop 2-column grid layout is unchanged.

### Implementation
- **Library**: Swiper.js v11 via jsDelivr CDN (CSS + JS bundle)
- **Dynamic init/destroy**: JS wraps menu items into Swiper markup on mobile, unwraps back to grid on desktop
- **Breakpoint**: 768px — debounced resize listener handles crossing
- **Minimum items**: Categories with < 3 items skip carousel (Heroes, Entrees, Bento, Kids, Beverages stay stacked)
- **Slide layout**: `slidesPerView: 'auto'`, 85% width per slide (1 card + peek of next), 12px gap
- **Pagination**: Clickable dots styled with `--color-accent`

### Integration
- **Filter buttons**: Swipers destroy and re-init when category visibility changes
- **Scroll reveal**: Swipers update after reveal animation completes (850ms delay)

### Mobile Nav Fixes
- Nav always shows solid background on mobile (no transparent-to-opaque toggle)
- `transition: background, box-shadow` instead of `transition: all` to prevent jank
- `transform: translateZ(0)` forces GPU compositing layer, prevents disappearing during scroll momentum
- Hamburger menu lines always dark on mobile
