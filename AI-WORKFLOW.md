# 🤖 OpenClaw Workflow & Environment Memory

## 🔑 SSH & Git Configuration

- **Identity File:** `~/.ssh/openclaw_github_ed25519`
- **Host Handshake:** GitHub.com is verified in `known_hosts`.
- **SSH Config:** The `~/.ssh/config` is set to automatically use the openclaw key for all `github.com` requests.
- **Verification Command:** `ssh -T git@github.com`

## 🎨 Hikari Theme System

Themes auto-activate by date range — no manual switching needed.

- **Theme Loader:** `js/theme-loader.js` — resolves and applies themes on page load
- **Theme Registry:** `theme-config.json` — lists registered theme IDs + fallback
- **Theme Definitions:** `themes/*.json` — individual theme configs (colors, hero, logo, floating elements)
- **Theme CSS:** `css/style.css` — scoped styles via `[data-theme="<id>"]` selectors
- **Testing:** `?theme=<id>` query param to force a theme locally
- **Full docs:** See `DEVELOPMENT.md` → Theme System

## 📁 Project Paths

- **Local Path:** `/Users/samanthashiro/projects/hikari-website`
