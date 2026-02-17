# Theme System Quick Start Guide

Get up and running with the Hikari Sushi theme system in 5 minutes!

## ✅ Setup Complete!

Your theme system is already installed and ready to use. Here's what's been set up:

```
✓ Theme configuration files
✓ Theme loader script
✓ Snapshot utility
✓ Switch helper
✓ Documentation
```

## 🚀 Switching Themes (2 Minutes)

### Option 1: CLI (Recommended)

```bash
cd /Users/jediOne/Projects/hikarisojo

# See available themes
node scripts/switch-theme.js

# Switch to a theme
node scripts/switch-theme.js valentines
```

### Option 2: Manual

Edit `theme-config.json`:
```json
{
  "activeTheme": "valentines"
}
```

Reload your browser - done!

## 🎨 Available Themes

| Theme ID         | Name                 | Colors        | When to Use       |
|------------------|----------------------|---------------|-------------------|
| `default`        | Standard Theme       | Teal/Gold     | Year-round        |
| `presidents-day` | Presidents' Day      | Red/White/Blue| Feb 14-18         |
| `valentines`     | Valentine's Day      | Pink/Red      | Feb 10-15         |

## 📸 Creating a New Theme (5 Minutes)

### After you've designed your theme manually:

```bash
node scripts/snapshot-theme.js
```

Answer the prompts:
- **Theme name**: "St. Patrick's Day"
- **Theme ID**: "st-patricks"
- **Month**: 3
- **Start day**: 15
- **End day**: 18

The tool captures everything automatically!

## 🔄 Typical Workflow

### Preparing for a Holiday

**Week before:**
1. Design theme manually (or reuse last year's)
2. If new: `node scripts/snapshot-theme.js`
3. Review `themes/your-theme.json`

**Day before holiday:**
```bash
node scripts/switch-theme.js your-theme
git add -A
git commit -m "Activate [holiday] theme"
git push
```

**Day after holiday:**
```bash
node scripts/switch-theme.js default
git add -A
git commit -m "Revert to default theme"
git push
```

## 📝 Common Tasks

### See what theme is active
```bash
cat theme-config.json
```

### List all themes
```bash
node scripts/switch-theme.js
```

### Test a theme locally
1. Switch theme
2. Open `index.html` in browser
3. Check browser console for errors

### Edit a theme
```bash
# Just edit the JSON file directly
code themes/valentines.json
```

### Deploy theme change
```bash
git add theme-config.json themes/
git commit -m "Switch to [theme name]"
git push
# Netlify auto-deploys
```

## 🎯 Next Steps

1. **Try switching themes** to see how it works
2. **Read THEME-SYSTEM.md** for detailed documentation
3. **Plan your holiday themes** for the year
4. **Snapshot the current Presidents' Day theme** for reuse next year

## 💡 Pro Tips

- **Keep it simple**: Don't overdo themes. 3-5 per year is plenty.
- **Test first**: Always test theme switches locally before deploying.
- **Reuse themes**: Save each year's themes - reuse them next year!
- **Document dates**: Note when each theme should be active in the JSON.
- **Git commit themes**: Version control your themes for rollback safety.

## 📚 More Help

- **Full docs**: See `THEME-SYSTEM.md`
- **Theme structure**: Look at `themes/presidents-day.json` as example
- **Troubleshooting**: Check browser console for theme loader errors

---

**You're all set!** 🎉

Try switching to the `valentines` theme to see it in action:

```bash
node scripts/switch-theme.js valentines
```

Then reload your browser and watch the magic happen!
