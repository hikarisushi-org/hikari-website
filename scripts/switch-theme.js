#!/usr/bin/env node

/* ========================================
   Hikari Sushi — Theme Switcher CLI
   Quick theme switching helper
   Usage: node scripts/switch-theme.js <theme-id>
          node scripts/switch-theme.js auto
   ======================================== */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const configPath = path.join(__dirname, '..', 'theme-config.json');
const themesDir = path.join(__dirname, '..', 'themes');

if (args.length === 0) {
  console.log('\nAvailable themes:');
  console.log('==================\n');

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const themes = fs.readdirSync(themesDir)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''));

  themes.forEach(id => {
    const theme = JSON.parse(fs.readFileSync(path.join(themesDir, `${id}.json`), 'utf8'));
    const registered = config.themes.includes(id) ? '' : ' (not registered)';
    const dates = theme.startDate ? ` (${theme.startDate} to ${theme.endDate})` : '';
    console.log(`  ${id.padEnd(28)} - ${theme.name}${dates}${registered}`);
  });

  console.log('\n  Current override:', config.manualOverride || 'auto (date-based)');
  console.log('\nUsage:');
  console.log('  node scripts/switch-theme.js <theme-id>   # set manual override');
  console.log('  node scripts/switch-theme.js auto          # clear override\n');

  process.exit(0);
}

const input = args[0];

// Handle "auto" / "clear"
if (input === 'auto' || input === 'clear') {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const previous = config.manualOverride;
  config.manualOverride = null;
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');

  console.log('\n' + '='.repeat(60));
  console.log('Manual override cleared');
  console.log('='.repeat(60));
  console.log(`\n  From: ${previous || 'auto'}`);
  console.log('  To:   auto (date-based resolution)');
  console.log('\nTheme will auto-resolve on next page load.\n');
  process.exit(0);
}

// Set manual override
const themeId = input;
const themePath = path.join(themesDir, `${themeId}.json`);

if (!fs.existsSync(themePath)) {
  console.error(`Error: Theme "${themeId}" not found.`);
  console.error(`   Looking for: themes/${themeId}.json\n`);
  console.log('Run without arguments to see available themes.');
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'));

const previous = config.manualOverride || 'auto';
config.manualOverride = themeId;

fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');

console.log('\n' + '='.repeat(60));
console.log('Theme override set!');
console.log('='.repeat(60));
console.log(`\n  From: ${previous}`);
console.log(`  To:   ${themeId} (${theme.name})`);
console.log('\nChanges will apply on next page load.');
console.log('Run "node scripts/switch-theme.js auto" to clear override.\n');
