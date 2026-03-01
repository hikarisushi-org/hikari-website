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

function getConfig() {
  return JSON.parse(fs.readFileSync(configPath, 'utf8'));
}

function saveConfig(config) {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
}

function listThemes() {
  return fs.readdirSync(themesDir)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''));
}

switch (command) {
  case 'switch':
  case 'set': {
    if (!themeId) {
      console.error('Usage: node scripts/theme.js switch <theme-id>');
      process.exit(1);
    }
    const themePath = path.join(themesDir, `${themeId}.json`);
    if (!fs.existsSync(themePath)) {
      console.error(`Theme "${themeId}" not found`);
      process.exit(1);
    }
    const config = getConfig();
    config.manualOverride = themeId;
    saveConfig(config);
    console.log(`\u2713 Manual override set to: ${themeId}`);
    break;
  }

  case 'auto':
  case 'clear': {
    const config = getConfig();
    config.manualOverride = null;
    saveConfig(config);
    console.log('\u2713 Manual override cleared — auto-resolve by date');
    break;
  }

  case 'get':
  case 'current': {
    const config = getConfig();
    console.log(config.manualOverride || 'auto');
    break;
  }

  case 'list':
    listThemes().forEach(t => console.log(t));
    break;

  case 'info': {
    if (!themeId) {
      console.error('Usage: node scripts/theme.js info <theme-id>');
      process.exit(1);
    }
    const theme = JSON.parse(fs.readFileSync(path.join(themesDir, `${themeId}.json`), 'utf8'));
    console.log(JSON.stringify({
      id: theme.id,
      name: theme.name,
      startDate: theme.startDate,
      endDate: theme.endDate,
      priority: theme.priority,
      level: theme.level,
      enabled: theme.rules && theme.rules.enabled
    }, null, 2));
    break;
  }

  default:
    console.log('AI Theme Manager - Quick Commands\n');
    console.log('Usage: node scripts/theme.js <command> [args]\n');
    console.log('Commands:');
    console.log('  switch <id>    - Set manual override to theme');
    console.log('  auto           - Clear override, auto-resolve by date');
    console.log('  get            - Show current override (or "auto")');
    console.log('  list           - List all themes');
    console.log('  info <id>      - Show theme details');
    console.log('\nExamples:');
    console.log('  node scripts/theme.js switch spring-loading-2026');
    console.log('  node scripts/theme.js auto');
    console.log('  node scripts/theme.js get');
    process.exit(command ? 1 : 0);
}
