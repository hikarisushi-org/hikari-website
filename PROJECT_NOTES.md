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
- [ ] Cancel Carrd subscription once new site is live

### Content & Design
- [x] Add descriptions for premium rolls (Strawberry Blossom, Diamond Roll, Forbidden Roll, Firefly Fusion, Red Lantern, Avocado King, Cowboy Roll)
- [ ] Google Maps embed currently uses approximate coordinates — verify it shows the correct pin
- [x] Added favicon (using new circular logo)
- [x] Removed 20% off promo banner (no longer active)
- [x] Updated nav logo to new circular sun/wave design
- [x] Added Reservations button (Carbonara)

### Performance
- [ ] Optimize images (compress PNGs, convert to WebP where possible) — total site is ~194MB, mostly from uncompressed food photos
- [ ] Consider lazy loading the hero video on mobile to save bandwidth

### SEO & Analytics
- [ ] Add Google Analytics or Plausible tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Add Schema.org structured data for restaurant (hours, address, menu)

### Future Enhancements
- [ ] Add a reservation/contact form (Formspree or similar)
- [ ] Instagram feed embed
- [ ] Google Reviews widget
- [ ] Desserts section (photos already in assets: mochi, tiramisu)
- [ ] Lunch specials section (if applicable)
