# Theme Management Scripts

Utility scripts for managing Hikari Sushi holiday themes.

## Scripts

### `switch-theme.js`

Quick theme switching from command line.

**Usage:**
```bash
# List all available themes
node scripts/switch-theme.js

# Switch to a specific theme
node scripts/switch-theme.js <theme-id>
```

**Examples:**
```bash
node scripts/switch-theme.js valentines
node scripts/switch-theme.js presidents-day
node scripts/switch-theme.js default
```

**What it does:**
- Validates theme exists
- Updates `theme-config.json`
- Shows before/after confirmation

---

### `snapshot-theme.js`

Captures current site theme and saves as JSON.

**Usage:**
```bash
node scripts/snapshot-theme.js
```

**Interactive prompts:**
1. Theme name (display name)
2. Theme ID (filesystem-safe name)
3. Description
4. Active date range (month, start day, end day)
5. Banner configuration (if applicable)
6. Floating elements (if applicable)
7. Quote generator (if applicable)
8. Theme-specific images

**What it does:**
- Reads current CSS custom properties
- Extracts colors, typography, hero settings
- Captures banner configuration
- Generates complete theme JSON file
- Saves to `themes/{theme-id}.json`

**When to use:**
- After manually styling a new holiday theme
- To preserve a theme for next year
- Creating a variation of an existing theme

---

## Requirements

- Node.js (v14 or higher)
- Write access to project directory

## Workflow

### Creating a New Theme

1. **Design it manually** - Style your site how you want it
2. **Snapshot it** - Run `node scripts/snapshot-theme.js`
3. **Review the JSON** - Edit `themes/your-theme.json` if needed
4. **Activate it** - Run `node scripts/switch-theme.js your-theme`

### Switching Between Themes

```bash
# Before holiday
node scripts/switch-theme.js valentines

# After holiday
node scripts/switch-theme.js default
```

## Tips

- **Test locally first**: Switch themes and open `index.html` to verify
- **Git commit changes**: Always commit `theme-config.json` changes
- **Automate with cron**: Schedule theme switches (future enhancement)
- **Document in JSON**: Add notes to theme metadata for future reference

## Troubleshooting

### "Theme not found" error
- Check that `themes/{theme-id}.json` exists
- Verify theme ID matches exactly (case-sensitive)
- Run without arguments to list available themes

### Colors not applying
- Check that CSS uses `var(--color-name)` custom properties
- Verify theme JSON has `colors` object with correct keys
- Check browser console for theme loader errors

### Theme snapshot incomplete
- Manually edit the generated JSON file
- Add any missing quotes, images, or configuration
- Re-run snapshot with different answers if needed

## Future Enhancements

Ideas for additional scripts:

- `validate-theme.js` - Validate theme JSON structure
- `schedule-themes.js` - Auto-schedule themes by date
- `preview-theme.js` - Preview theme without activating
- `backup-themes.js` - Backup all themes to archive

---

For full documentation, see `../THEME-SYSTEM.md`
