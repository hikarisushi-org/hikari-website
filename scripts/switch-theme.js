#!/usr/bin/env node

/* ========================================
   Hikari Sushi — Theme Switcher CLI
   Quick theme switching helper
   Usage: node scripts/switch-theme.js <theme-id>
   ======================================== */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('\n📋 Available themes:');
  console.log('==================\n');

  const themesDir = path.join(__dirname, '..', 'themes');
  const themes = fs.readdirSync(themesDir)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''));

  themes.forEach(themeId => {
    const themePath = path.join(themesDir, `${themeId}.json`);
    const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'));
    console.log(`  ${themeId.padEnd(20)} - ${theme.metadata.name}`);
    if (theme.metadata.activeRange) {
      const { month, dayStart, dayEnd } = theme.metadata.activeRange;
      console.log(`${''.padEnd(22)} (${month}/${dayStart} - ${month}/${dayEnd})`);
    }
  });

  console.log('\n🔧 Usage:');
  console.log('  node scripts/switch-theme.js <theme-id>\n');
  console.log('Example:');
  console.log('  node scripts/switch-theme.js presidents-day\n');

  process.exit(0);
}

const themeId = args[0];
const configPath = path.join(__dirname, '..', 'theme-config.json');
const themePath = path.join(__dirname, '..', 'themes', `${themeId}.json`);

// Verify theme exists
if (!fs.existsSync(themePath)) {
  console.error(`❌ Error: Theme "${themeId}" not found.`);
  console.error(`   Looking for: themes/${themeId}.json\n`);
  console.log('Run without arguments to see available themes.');
  process.exit(1);
}

// Load current config
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'));

// Update config
const previousTheme = config.activeTheme;
config.activeTheme = themeId;

// Save config
fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

console.log('\n' + '='.repeat(60));
console.log('✅ Theme switched successfully!');
console.log('='.repeat(60));
console.log(`\n  From: ${previousTheme}`);
console.log(`  To:   ${themeId} (${theme.metadata.name})`);
console.log('\nChanges will apply on next page load.');
console.log('If using a dev server, it may auto-reload.\n');
