# Hikari Sushi Theme System

A flexible theme management system for easily switching between holiday and seasonal themes.

## 📁 Directory Structure

```
hikarisojo/
├── themes/                          # Theme configuration files
│   ├── default.json                 # Standard theme (fallback)
│   ├── presidents-day.json          # Presidents' Day theme
│   └── valentines.json              # Valentine's Day theme (example)
├── theme-config.json                # Active theme configuration
├── js/
│   └── theme-loader.js              # Theme loading script
├── scripts/
│   └── snapshot-theme.js            # Theme snapshot tool
└── assets/
    └── images/
        └── themes/                  # Theme-specific images
            ├── presidents/
            ├── valentines/
            └── stpatricks/
```

## 🚀 Quick Start

### Switching Themes

Edit `theme-config.json`:

```json
{
  "activeTheme": "presidents-day",  // ← Change this to switch themes
  "autoSwitch": false,
  "fallbackTheme": "default"
}
```

Themes switch instantly on page reload. No build step needed!

### Available Themes

- `default` - Standard Hikari Sushi theme (teal/gold)
- `presidents-day` - Patriotic red/white/blue with stars
- (Add more as you create them)

## 📝 Creating a New Theme

### Method 1: Manual Creation

1. Copy `themes/default.json` to `themes/your-theme-name.json`
2. Edit the JSON file with your theme settings
3. Update `theme-config.json` to activate it

### Method 2: Snapshot Current State

After styling your site manually:

```bash
cd /Users/jediOne/Projects/hikarisojo
node scripts/snapshot-theme.js
```

Follow the prompts to:
- Name your theme
- Set the date range when it should be active
- Capture current colors, banners, floating elements, etc.

The tool will generate a complete theme JSON file for you!

## 🎨 Theme Structure

Each theme JSON contains:

### Metadata
```json
{
  "metadata": {
    "name": "Presidents' Day Theme",
    "id": "presidents-day",
    "description": "Patriotic red, white, and blue theme",
    "dateCreated": "2026-02-16",
    "activeRange": {
      "month": 2,
      "dayStart": 14,
      "dayEnd": 18
    }
  }
}
```

### Colors (CSS Custom Properties)
```json
{
  "colors": {
    "bg": "#F5F7FA",
    "accent": "#1A4D8F",
    "gold": "#B8956A"
  }
}
```

### Hero Section
```json
{
  "hero": {
    "videoPath": "assets/video/hero.mp4",
    "overlayGradient": "linear-gradient(...)"
  }
}
```

### Holiday Banner
```json
{
  "banner": {
    "enabled": true,
    "sectionClass": "presidents-banner",
    "title": "Celebrate Presidents' Day",
    "subtitle": "Honor great leaders..."
  }
}
```

### Floating Elements (Stars, Hearts, etc.)
```json
{
  "floatingElements": {
    "enabled": true,
    "containerClass": "floating-stars",
    "characters": ["★", "☆"],
    "colors": ["rgba(26,77,143,0.3)"],
    "interval": 700
  }
}
```

### Quote/Message Generator
```json
{
  "quoteGenerator": {
    "enabled": true,
    "interval": 4000,
    "quotes": [
      {
        "text": "Quote text here",
        "author": "Author Name",
        "photo": "assets/images/theme/photo.jpg"
      }
    ]
  }
}
```

## 🔧 How It Works

1. **Page loads** → `theme-loader.js` runs automatically
2. **Reads** `theme-config.json` to get active theme ID
3. **Loads** theme JSON from `/themes/{id}.json`
4. **Applies** theme by:
   - Setting CSS custom properties
   - Updating hero overlay
   - Showing/hiding banner section
   - Starting floating elements animation
   - Activating quote rotator

## 📅 Scheduling Themes

### Manual Scheduling

Update `theme-config.json` when you want to switch:

```json
{
  "activeTheme": "valentines",  // Feb 10-15
  "fallbackTheme": "default"
}
```

### Future: Auto-Scheduling

The `activeRange` in each theme can be used for automatic scheduling:

```json
{
  "activeRange": {
    "month": 2,      // February
    "dayStart": 14,  // Valentine's Day
    "dayEnd": 15
  }
}
```

*(Not yet implemented - requires server-side logic or build script)*

## 🛠️ Maintenance

### Adding a New Holiday Theme

1. **Design the theme** manually in your site:
   - Update colors in CSS
   - Add holiday banner section
   - Add floating elements
   - Style everything

2. **Snapshot it**:
   ```bash
   node scripts/snapshot-theme.js
   ```

3. **Review the generated JSON** in `themes/your-theme.json`

4. **Activate it**:
   - Edit `theme-config.json`
   - Set `"activeTheme": "your-theme"`

### Updating an Existing Theme

1. Activate the theme you want to update
2. Make visual changes to the site
3. Run `node scripts/snapshot-theme.js` with a new name (or overwrite)
4. Or manually edit the theme JSON file

### Reverting to Default

```json
{
  "activeTheme": "default",
  "fallbackTheme": "default"
}
```

## 📦 Theme Assets

Store theme-specific images in organized folders:

```
assets/images/themes/
├── presidents/
│   ├── washington.jpg
│   ├── lincoln.jpg
│   └── roosevelt.jpg
├── valentines/
│   ├── hearts-bg.png
│   └── couple-dining.jpg
└── stpatricks/
    └── shamrock.svg
```

Reference them in your theme JSON:

```json
{
  "assets": {
    "themeImages": [
      "assets/images/themes/presidents/washington.jpg"
    ]
  }
}
```

## ⚠️ Important Notes

- **CSS Specificity**: Theme loader sets inline CSS custom properties, which override stylesheet values
- **Fallback**: If a theme fails to load, it falls back to `default.json`
- **No Build Required**: Themes switch instantly on page reload
- **Backward Compatible**: The system layers on top of existing CSS - won't break your site

## 🐛 Troubleshooting

### Theme not applying?

1. Check browser console for errors
2. Verify `theme-config.json` exists and is valid JSON
3. Verify theme file exists in `/themes/`
4. Make sure `theme-loader.js` is included in your HTML

### Colors not changing?

- Check that color keys match CSS custom properties
- Verify `:root` variables in your CSS use `var(--color-name)`

### Banner not showing?

- Ensure HTML has the section with matching `sectionClass`
- Check that `banner.enabled` is `true`
- Verify the section isn't hidden by other CSS

## 📞 Support

For issues or questions about the theme system, check:
- This documentation
- Theme JSON structure in existing themes
- Browser console for error messages
- `theme-loader.js` source code for how themes are applied

## 🎯 Example Workflow

### Preparing for Valentine's Day 2027

1. **January 15**: Design Valentine's theme on test site
2. **Save it**: `node scripts/snapshot-theme.js`
   - Name: "Valentine's Day 2027"
   - ID: "valentines-2027"
3. **February 10**: Update `theme-config.json`:
   ```json
   { "activeTheme": "valentines-2027" }
   ```
4. **Deploy**: Git commit & push (Netlify deploys automatically)
5. **February 16**: Switch back to default
   ```json
   { "activeTheme": "default" }
   ```
6. **Next year**: Reuse the same theme!

---

**Version**: 1.0.0
**Last Updated**: February 2026
**Created by**: Claude with Hikari Sushi
