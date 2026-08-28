# Hikari Sushi Website

## Pick up here

> **For AI:** Read this section when the user says **"pick up here"**. Update when pausing or finishing a checkpoint.

**Last updated:** 2026-06-07
**Phase:** —

### Done
- (none yet)

### Next
- (none yet)

### Blocked
- (none)

---


Modern Japanese Kitchen | South Jordan, Utah

**Live Site**: [hikarisojo.com](https://hikarisojo.com)
**Location**: 10468 South Redwood Road, South Jordan, UT 84095
**Phone**: (385) 866-3746

## Current Restaurant Hours

These are the public hours that should be reflected anywhere the website, metadata, or promotional content mentions availability:

| Day | Hours |
|-----|-------|
| Monday | 4:30 PM - 9:00 PM |
| Tuesday-Friday | 11:00 AM - 3:00 PM; 4:30 PM - 9:00 PM |
| Saturday | 11:00 AM - 9:00 PM |
| Sunday | Closed |

Important: do not publish Sunday or holiday-specific open messaging unless ownership explicitly confirms special hours. This includes Mother's Day, Father's Day, Super Bowl Sunday, and any other Sunday event.

---

## 🏗️ Tech Stack

- Static HTML/CSS/JavaScript (no framework)
- Google Fonts (Inter + Playfair Display)
- Swiper.js for mobile carousels
- Netlify serverless functions (Google Reviews API proxy)
- Hosted on **Netlify** with auto-deploy from GitHub

---

## Brand Source

Hikari's single style guide lives at:

```text
/Users/samanthashiro/projects/hikari-visual-design/BRAND.md
```

Website CSS and theme JSON files apply that guide; they are not separate brand
sources.

---

## 📁 Project Structure

```
hikarisojo/
├── index.html              # Main website
├── css/
│   ├── style.css          # Main styles
│   ├── theme-default.css  # Default theme backup
│   └── presidents.css     # Presidents' Day theme
├── js/
│   ├── main.js           # Core functionality
│   ├── theme.js          # Theme switching logic
│   └── swiper-init.js    # Mobile carousel initialization
├── assets/
│   ├── images/           # All images (logo, food photos, presidents)
│   └── video/            # Hero videos (gitignored, hosted on Cloudinary)
├── themes/               # Theme configuration JSON files
│   ├── default.json
│   ├── valentines.json
│   └── presidents-day.json
├── scripts/
│   ├── theme.js          # CLI theme management tool
│   └── snapshot-theme.js # Theme snapshot creation tool
├── netlify/
│   └── functions/
│       └── reviews.js    # Daily review rotation endpoint
```

---

## 🎨 Theme System

Themes auto-activate based on date ranges — no manual switching needed. Just create the theme JSON, register it, and deploy.

### Available Themes

| Theme | Dates | File |
|-------|-------|------|
| **default** | Always (fallback) | `themes/default.json` |
| **spring-loading-2026** | Mar 1–13 | `themes/spring-loading-2026.json` |
| **memorial-day** | May 23–26 | `themes/memorial-day.json` |
| **st-patricks-day** | Mar 15–18 | `themes/st-patricks-day.json` |

### Quick Start — New Theme

1. Create `themes/<id>.json` (see [DEVELOPMENT.md](./DEVELOPMENT.md) for full schema)
2. Add the ID to `theme-config.json` → `themes` array
3. Add theme-scoped CSS in `style.css` via `[data-theme="<id>"]`
4. Test locally: `python3 -m http.server 8080` → `?theme=<id>`
5. Push — it auto-activates/deactivates by date

### Theme Features

Themes can customize: CSS tokens (colors, overlays), hero image (replaces video), logo (nav + footer), floating elements (emoji + images), badge text, and scoped CSS accents.

See [DEVELOPMENT.md](./DEVELOPMENT.md) for the full theme JSON schema and architecture details.

---

## 🚀 Deployment

Automatic deployment via Netlify:

1. Push to `main` branch → Auto-deploy
2. Netlify builds and deploys to `hikarisojo.com`
3. DNS is managed in Cloudflare; the registrar is Porkbun

### Domain and SSL Notes

`hikarisojo.com` and `www.hikarisojo.com` are served by Netlify with a Let's Encrypt certificate managed in Netlify. Cloudflare should be used for DNS only unless proxying is intentionally re-enabled and tested.

Known incident: on May 19, 2026, visitors saw Cloudflare `525 SSL handshake failed`. Netlify's certificate was valid, but Cloudflare's proxied orange-cloud path failed the TLS handshake to the Netlify origin. The fix was:

- Set Cloudflare SSL/TLS mode to `Full (strict)`.
- Change the apex `A` record for `hikarisojo.com` pointing to `75.2.60.5` from proxied to DNS only.
- Change the `www` CNAME pointing to `hikarisojo.netlify.app` from proxied to DNS only.
- Verify `https://hikarisojo.com` returns `HTTP/2 200` from `server: Netlify`.

If a 525 appears again, check Cloudflare DNS proxy status before changing site code.

### Environment Variables (Netlify)

- `GBP_CLIENT_ID` - Google Business Profile OAuth client ID
- `GBP_CLIENT_SECRET` - Google Business Profile OAuth client secret
- `GBP_REFRESH_TOKEN` - Google Business Profile OAuth refresh token
- `GBP_LOCATION_ID` - Google Business Profile location ID
- `GBP_ACCOUNT_ID` - Google Business Profile account ID

---

## 📊 Performance Optimizations

- **Images**: All converted to WebP, resized to display dimensions (97.6% size reduction)
- **Video**: Hero video re-encoded at 1Mbps, audio stripped, faststart enabled (62% reduction)
- **Reviews**: Daily server-side rotation from the synced Google Business Profile review pool, with 15-minute HTTP and 1-hour browser caching
- **Mobile**: Swiper carousels reduce scroll length on category-heavy menu sections

---

## 🎯 Features

✅ **Current**
- Responsive design (mobile, tablet, desktop)
- Video hero with Cloudinary hosting
- Full menu with 100+ items
- Google Reviews carousel (5-star only, auto-updating)
- Mobile menu carousels (Swiper.js)
- DoorDash integration
- SEO optimized (sitemap, Schema.org structured data)
- Google Analytics (G-SH54LFXHJ3)
- Automated theme system
- Public hours messaging across homepage, menu, lunch specials, and Schema.org structured data

📋 **Planned** (see [DEVELOPMENT.md](./DEVELOPMENT.md))
- Social media links (Facebook + Instagram)
- Sake/drinks menu
- Chef profile section
- Private events page
- Instagram feed embed
- Email newsletter signup

---

## 📝 Documentation

- **README.md** (this file) - Project overview and quick start
- **DEVELOPMENT.md** - Detailed development guide, theme creation, deployment workflows
- **RECOMMENDATIONS.md** - Feature roadmap based on competitor research

---

## 🛠️ Development

### Local Development

1. Clone the repo:
```bash
git clone git@github.com:hikarisushi/hikari-website.git
cd hikari-website
```

2. Open `index.html` in a browser or use a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server
```

3. Make changes and test locally

4. Deploy:
```bash
git add -A
git commit -m "Description of changes"
git push
```

### Working with Claude

Claude has access to this project and can:
- Switch themes for holidays
- Create new theme configurations
- Update menu items and content
- Optimize images and assets
- Deploy changes via git

See `AI-WORKFLOW.md` for Claude's quick reference guide.

---

## 📞 Support

For website issues or feature requests, contact the development team or open an issue on GitHub.

---

**Last Updated**: May 2026

## Reusable components

- **Hero notice banner** — [`components/notice-banner.html`](./components/notice-banner.html). Frosted dark-glass pill with a gold pulsing dot for short-lived hero announcements (lunch closed, holiday hours, one-off events). Self-contained style + markup + optional timezone-proof auto-hide script, with paste-in instructions at the top of the file. First used 2026-06-12.

## Project files

| File | Purpose |
|------|---------|
| [README.md](./README.md) | Overview · § Pick up here |
| [CHANGELOG.md](./CHANGELOG.md) | What changed |
| [DECISION-LOG.md](./DECISION-LOG.md) | Why |
| [SPECS.md](./SPECS.md) | Specs & measurements |
