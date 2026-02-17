# Theme System - Owner Reference

## What This Is

An automated theme system that Claude manages for you. You just tell me what theme you want, and I handle it.

## How to Use

Just tell me things like:

- "Switch to Valentine's theme"
- "Turn on Christmas theme"
- "Back to normal"
- "Create an Easter theme"

I'll handle all the technical stuff.

## What Themes Exist

Check anytime:
```bash
node scripts/theme.js list
```

Currently:
- **default** - Standard theme (year-round)
- **presidents-day** - Blue/red patriotic (currently active)
- **valentines** - Pink/red romantic

## My Workflow (Claude)

When you ask me to switch themes, I run:

```bash
node scripts/theme.js switch <theme-name>
git add theme-config.json
git commit -m "Switch to <theme> theme"
git push
```

That's it! Netlify auto-deploys.

## Creating New Themes

When you want a new holiday theme, just tell me. I'll:

1. Create the theme JSON file
2. Set the colors, banner text, animations
3. Activate it
4. Deploy it

Example: "Create a Halloween theme with orange/black colors and floating pumpkins"

I handle everything.

## Current Theme

Check what's active:
```bash
node scripts/theme.js get
```

## Files to Know

- `theme-config.json` - Which theme is active
- `themes/*.json` - Theme configurations
- `AI-WORKFLOW.md` - My reference guide

## That's It!

You don't need to know the details. Just tell me what you want, and I'll manage the themes.

---

**Current Theme**: Presidents' Day
**System Status**: Ready
**Last Updated**: Feb 2026
