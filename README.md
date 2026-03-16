# Hikari Sushi Website

Modern Japanese Kitchen | South Jordan, Utah

**Live Site**: [hikarisojo.com](https://hikarisojo.com)
**Location**: 10468 South Redwood Road, South Jordan, UT 84095
**Phone**: (385) 866-3746

---

## 🏗️ Tech Stack

- Static HTML/CSS/JavaScript (no framework)
- Google Fonts (Inter + Playfair Display)
- Swiper.js for mobile carousels
- Netlify serverless functions (Google Reviews API proxy)
- Hosted on **Netlify** with auto-deploy from GitHub

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
│       └── reviews.js    # Google Places API proxy
```

---

## 🎨 Theme System

Themes auto-activate based on date ranges — no manual switching needed. Just create the theme JSON, register it, and deploy.

### Available Themes

| Theme | Dates | File |
|-------|-------|------|
| **default** | Always (fallback) | `themes/default.json` |
| **spring-loading-2026** | Mar 1–13 | `themes/spring-loading-2026.json` |
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
3. Cloudflare DNS managed via Porkbun

### Environment Variables (Netlify)

- `GOOGLE_PLACES_API_KEY` - Google Places API key for reviews
- `GOOGLE_PLACE_ID` - `ChIJZV0qzpqHUocR4SuU3IlrTsg`

---

## 📊 Performance Optimizations

- **Images**: All converted to WebP, resized to display dimensions (97.6% size reduction)
- **Video**: Hero video re-encoded at 1Mbps, audio stripped, faststart enabled (62% reduction)
- **Reviews**: Server-side + client-side caching (1hr + 24hr)
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

**Last Updated**: February 2026
