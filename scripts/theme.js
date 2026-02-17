#!/usr/bin/env node

/* ========================================
   Hikari Sushi — AI Theme Manager
   Simplified theme operations for automation
   ======================================== */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];
const themeId = args[1];

const configPath = path.join(__dirname, '..', 'theme-config.json');
const themesDir = path.join(__dirname, '..', 'themes');

// Helper: Get current theme
function getCurrentTheme() {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  return config.activeTheme;
}

// Helper: Set theme
function setTheme(id) {
  const themePath = path.join(themesDir, `${id}.json`);
  if (!fs.existsSync(themePath)) {
    throw new Error(`Theme "${id}" not found`);
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  config.activeTheme = id;
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  return id;
}

// Helper: List themes
function listThemes() {
  return fs.readdirSync(themesDir)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''));
}

// Main command handler
switch (command) {
  case 'switch':
  case 'set':
    if (!themeId) {
      console.error('Usage: node scripts/theme.js switch <theme-id>');
      process.exit(1);
    }
    setTheme(themeId);
    console.log(`✓ Theme set to: ${themeId}`);
    break;

  case 'get':
  case 'current':
    console.log(getCurrentTheme());
    break;

  case 'list':
    listThemes().forEach(t => console.log(t));
    break;

  case 'info':
    if (!themeId) {
      console.error('Usage: node scripts/theme.js info <theme-id>');
      process.exit(1);
    }
    const theme = JSON.parse(fs.readFileSync(path.join(themesDir, `${themeId}.json`), 'utf8'));
    console.log(JSON.stringify(theme.metadata, null, 2));
    break;

  default:
    console.log('AI Theme Manager - Quick Commands\n');
    console.log('Usage: node scripts/theme.js <command> [args]\n');
    console.log('Commands:');
    console.log('  switch <id>    - Switch to theme');
    console.log('  get            - Show current theme');
    console.log('  list           - List all themes');
    console.log('  info <id>      - Show theme metadata');
    console.log('\nExamples:');
    console.log('  node scripts/theme.js switch valentines');
    console.log('  node scripts/theme.js get');
    console.log('  node scripts/theme.js list');
    process.exit(command ? 1 : 0);
}
