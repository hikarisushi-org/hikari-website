

### 2026-09-28 — Approved customer QR menu release
Owner explicitly approved replacing the live /menu with the reviewed continuous menu. Promoted approved UI from preview commit 0a88911 onto current production main, preserving existing site analytics, QR URL and canonical menu content. Build derives data/customer-menu.json from the existing js/menu-page.js menu block, enriching photo presentation from data/menu-presentation.json. Existing homepage unchanged. Build, 9 analytics tests, 3 menu integration checks, all photo paths, 60-row rendering, rapid category jumps and full-width detail/return verified locally. Deployment verification follows publication.
