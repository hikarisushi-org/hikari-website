# 🤖 Workflow & Environment Memory

## 🔑 SSH & Git Configuration

- **Identity File:** `~/.ssh/arcos33_github_ed25519`
- **Host Handshake:** GitHub.com is verified in `known_hosts`.
- **SSH Config:** The `~/.ssh/config` is set to use the `arcos33` key for all `github.com` requests.
- **Verification Command:** `ssh -T git@github.com`

## 🎨 Hikari Theme System

Themes auto-activate by date range — no manual switching needed.

- **Theme Loader:** `js/theme-loader.js` — resolves and applies themes on page load
- **Theme Registry:** `theme-config.json` — lists registered theme IDs + fallback
- **Theme Definitions:** `themes/*.json` — individual theme configs (colors, hero, logo, floating elements)
- **Theme CSS:** `css/style.css` — scoped styles via `[data-theme="<id>"]` selectors
- **Testing:** `?theme=<id>` query param to force a theme locally
- **Full docs:** See `DEVELOPMENT.md` → Theme System

## 🕒 Hours Source of Truth

Current public hours:

- Monday: 4:30 PM - 9:00 PM
- Tuesday-Friday: 11:00 AM - 3:00 PM; 4:30 PM - 9:00 PM
- Saturday: 11:00 AM - 9:00 PM
- Sunday: Closed

Do not add Sunday or holiday-specific open messaging unless ownership explicitly confirms special hours. Avoid "We're open today" and "special holiday hours" in seasonal themes by default, especially for Mother's Day, Father's Day, Easter, and Super Bowl Sunday.

## 🌐 Domain and SSL Incident Memory

Cloudflare DNS manages `hikarisojo.com`; Netlify serves the site and owns the Let's Encrypt certificate for `hikarisojo.com` and `www.hikarisojo.com`.

Current working setup after the May 19, 2026 Cloudflare 525 incident:

- Cloudflare SSL/TLS mode: `Full (strict)`
- `hikarisojo.com` / `@`: `A` record to `75.2.60.5`, DNS only / gray cloud
- `www`: `CNAME` to `hikarisojo.netlify.app`, DNS only / gray cloud

Incident summary: visitors saw `SSL handshake failed`, Cloudflare error `525`. Netlify's certificate was valid; the failure was Cloudflare's proxied TLS handshake to Netlify. Bypassing the Cloudflare proxy fixed it, and direct Netlify responses returned `HTTP/2 200`.

Future troubleshooting:

- Check DNS/proxy/certificate settings before changing repo code.
- Verify with `dig +short hikarisojo.com`, `dig +short www.hikarisojo.com`, and `curl -L -I https://hikarisojo.com`.
- Renew the Netlify certificate only if Netlify reports the cert is out of sync with domain settings.

## 📁 Project Paths

- **Local Path:** `/Users/samanthashiro/projects/hikari-website`
