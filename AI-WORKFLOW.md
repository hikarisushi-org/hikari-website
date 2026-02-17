# AI Theme Workflow (For Claude)

Quick reference for when I (Claude) need to manage themes.

## 🎯 Common Tasks

### User says: "Switch to Valentine's theme"

```bash
cd /Users/jediOne/Projects/hikarisojo
node scripts/theme.js switch valentines
git add theme-config.json
git commit -m "Switch to Valentine's Day theme"
git push
```

### User says: "Back to normal theme" or "Turn off holiday theme"

```bash
node scripts/theme.js switch default
git add theme-config.json
git commit -m "Revert to default theme"
git push
```

### User says: "What theme is active?"

```bash
node scripts/theme.js get
```

### User says: "Create a St. Patrick's Day theme"

1. **Edit the HTML/CSS** to design it
2. **Create theme JSON** directly:

```bash
# Copy existing theme as template
cp themes/valentines.json themes/st-patricks.json

# Edit it directly
# Update: colors (green), banner text, floating elements (shamrocks), dates
```

3. **Activate it:**

```bash
node scripts/theme.js switch st-patricks
git add -A
git commit -m "Add and activate St. Patrick's Day theme"
git push
```

## 📋 Quick Commands

```bash
# Switch theme
node scripts/theme.js switch <theme-id>

# Current theme
node scripts/theme.js get

# List all themes
node scripts/theme.js list

# Theme info
node scripts/theme.js info valentines
```

## 🎨 Creating New Themes

### Method 1: Direct JSON Creation

Just create `themes/new-theme.json` directly:

```json
{
  "metadata": {
    "name": "Halloween Theme",
    "id": "halloween",
    "activeRange": { "month": 10, "dayStart": 25, "dayEnd": 31 }
  },
  "colors": {
    "bg": "#1A1A1A",
    "accent": "#FF6B00"
  },
  "banner": {
    "enabled": true,
    "sectionClass": "halloween-banner",
    "title": "Spooky Sushi Special"
  },
  "floatingElements": {
    "enabled": true,
    "characters": ["🎃", "👻"],
    "colors": ["rgba(255,107,0,0.3)"]
  }
}
```

### Method 2: Copy & Modify

```bash
# Copy existing theme
cp themes/valentines.json themes/new-theme.json

# Edit colors, text, dates
# Use Write or Edit tools to modify
```

## 🔧 Typical Workflow

### Holiday Preparation

1. **Week before**: Create/update theme JSON
2. **Day before**: Switch theme + deploy
3. **Day after**: Revert to default

### Example: Valentine's Day 2027

```bash
# Feb 10, 2027 - Activate
node scripts/theme.js switch valentines
git add theme-config.json
git commit -m "Activate Valentine's Day theme"
git push

# Feb 16, 2027 - Revert
node scripts/theme.js switch default
git add theme-config.json
git commit -m "Revert to default theme"
git push
```

## 📝 Theme JSON Quick Edits

Common edits I'll make:

### Update Banner Text

```bash
# Edit themes/valentines.json
# Change: banner.title, banner.subtitle, etc.
```

### Update Colors

```bash
# Edit themes/theme-name.json
# Change: colors.accent, colors.bg, etc.
```

### Update Date Range

```bash
# Edit themes/theme-name.json
# Change: metadata.activeRange
```

## 🚀 Deployment Pattern

Every theme change:

```bash
# 1. Make change (switch theme or edit JSON)
# 2. Commit
git add -A
git commit -m "Theme change: <description>"

# 3. Deploy
git push
```

Netlify auto-deploys.

## 💡 Optimization Tips

- **Keep theme.js commands short** - optimized for speed
- **Edit JSON directly** - faster than snapshot tool
- **Copy similar themes** - reuse structure
- **Standard commit messages** - easy to track

## 🎯 Theme IDs

Quick reference:

- `default` - Standard theme
- `valentines` - Valentine's Day (Feb 10-15)
- `presidents-day` - Presidents' Day (Feb 14-18)
- `st-patricks` - (create when needed)
- `halloween` - (create when needed)
- `christmas` - (create when needed)

## ⚡ Speed Commands

Ultra-fast theme operations:

```bash
# Check current
node scripts/theme.js get

# Switch + deploy in one command
node scripts/theme.js switch valentines && git add -A && git commit -m "Activate Valentine's theme" && git push

# Revert + deploy
node scripts/theme.js switch default && git add -A && git commit -m "Revert to default" && git push
```

---

**This is my reference for efficient theme management.**
