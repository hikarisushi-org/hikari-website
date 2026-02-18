# 🤖 OpenClaw Workflow & Environment Memory

## 🔑 SSH & Git Configuration

- **Identity File:** `~/.ssh/openclaw_github_ed25519`
- **Host Handshake:** GitHub.com is verified in `known_hosts`.
- **SSH Config:** The `~/.ssh/config` is set to automatically use the openclaw key for all `github.com` requests.
- **Verification Command:** `ssh -T git@github.com`

## 🎨 Hikari Theme System

This project uses a custom automated theme system.

- **Config File:** `theme-config.json`
- **Management Script:** `scripts/theme.js`
- **Key Commands:**
  - `node scripts/theme.js get` — Check current theme
  - `node scripts/theme.js list` — See all available themes
  - `node scripts/theme.js switch [theme-name]` — Change site branding

## 📁 Project Paths

- **Local Path:** `/Users/samanthashiro/projects/hikari-website`
