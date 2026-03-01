#!/usr/bin/env node

/* ========================================
   Hikari Sushi — Theme Validator
   Validates theme JSON files and tests resolver logic
   Usage: node scripts/validate-themes.js
   ======================================== */

const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'theme-config.json');
const themesDir = path.join(__dirname, '..', 'themes');

let errors = 0;
let passed = 0;

function assert(condition, msg) {
  if (condition) {
    passed++;
  } else {
    errors++;
    console.error(`  FAIL: ${msg}`);
  }
}

/* ---- Resolve function (mirrors theme-loader.js) ---- */

function resolve(themes, today, queryOverride, manualOverride, fallbackId) {
  if (queryOverride) {
    const match = themes.find(t => t.id === queryOverride && t.rules && t.rules.allowManualOverride);
    if (match) return match;
  }
  if (manualOverride) {
    const match = themes.find(t => t.id === manualOverride);
    if (match) return match;
  }
  const active = themes.filter(t => {
    if (!t.rules || !t.rules.enabled) return false;
    if (!t.startDate || !t.endDate) return false;
    return today >= t.startDate && today <= t.endDate;
  });
  active.sort((a, b) => {
    if (b.priority !== a.priority) return b.priority - a.priority;
    return b.startDate.localeCompare(a.startDate);
  });
  if (active.length > 0) return active[0];
  return themes.find(t => t.id === fallbackId) || themes[0];
}

/* ---- Load config and themes ---- */

console.log('\nTheme Validation\n' + '='.repeat(40) + '\n');

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const validLevels = ['light', 'moderate', 'full'];
const requiredTokens = ['--color-accent', '--color-bg', '--color-gold'];

// Load registered themes
const themes = [];
const seenIds = new Set();

for (const id of config.themes) {
  const filePath = path.join(themesDir, `${id}.json`);
  assert(fs.existsSync(filePath), `Registered theme "${id}" file exists`);
  if (!fs.existsSync(filePath)) continue;

  const theme = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  themes.push(theme);

  console.log(`\nValidating: ${id}`);

  // id checks
  assert(typeof theme.id === 'string' && theme.id.length > 0, `${id}: id is non-empty string`);
  assert(theme.id === id, `${id}: id matches registered name ("${theme.id}" vs "${id}")`);

  // Uniqueness
  assert(!seenIds.has(theme.id), `${id}: id is unique`);
  seenIds.add(theme.id);

  // Date checks
  if (theme.startDate !== null) {
    assert(dateRegex.test(theme.startDate), `${id}: startDate format YYYY-MM-DD`);
  }
  if (theme.endDate !== null) {
    assert(dateRegex.test(theme.endDate), `${id}: endDate format YYYY-MM-DD`);
  }
  if (theme.startDate && theme.endDate) {
    assert(theme.endDate >= theme.startDate, `${id}: endDate >= startDate`);
  }

  // Priority
  assert(typeof theme.priority === 'number', `${id}: priority is a number`);

  // Level
  assert(validLevels.includes(theme.level), `${id}: level is one of ${validLevels.join(', ')}`);

  // Tokens
  assert(theme.tokens && typeof theme.tokens === 'object', `${id}: tokens object exists`);
  if (theme.tokens) {
    for (const tok of requiredTokens) {
      assert(tok in theme.tokens, `${id}: token ${tok} present`);
    }
  }

  // Rules
  assert(theme.rules && typeof theme.rules.enabled === 'boolean', `${id}: rules.enabled is boolean`);
  assert(theme.rules && typeof theme.rules.allowManualOverride === 'boolean', `${id}: rules.allowManualOverride is boolean`);
}

// Fallback exists
assert(themes.some(t => t.id === config.fallbackTheme), `fallbackTheme "${config.fallbackTheme}" exists in registry`);

/* ---- Resolver tests ---- */

console.log('\n\nResolver Tests\n' + '='.repeat(40));

const defaultTheme = themes.find(t => t.id === 'default');
const springTheme = themes.find(t => t.id === 'spring-loading-2026');

// Test 1: No active themes -> default
console.log('\n  Test: date outside all ranges -> fallback');
const r1 = resolve(themes, '2026-06-15', null, null, 'default');
assert(r1.id === 'default', 'Returns default for June 15');

// Test 2: Date within spring range -> spring
console.log('  Test: date within spring range -> spring');
const r2 = resolve(themes, '2026-03-05', null, null, 'default');
assert(r2.id === 'spring-loading-2026', 'Returns spring for March 5');

// Test 3: Date on start boundary
console.log('  Test: date on start boundary');
const r3 = resolve(themes, '2026-03-01', null, null, 'default');
assert(r3.id === 'spring-loading-2026', 'Returns spring for March 1 (start)');

// Test 4: Date on end boundary
console.log('  Test: date on end boundary');
const r4 = resolve(themes, '2026-03-13', null, null, 'default');
assert(r4.id === 'spring-loading-2026', 'Returns spring for March 13 (end)');

// Test 5: Date after end
console.log('  Test: date after spring end -> fallback');
const r5 = resolve(themes, '2026-03-14', null, null, 'default');
assert(r5.id === 'default', 'Returns default for March 14');

// Test 6: Invalid ?theme= override -> falls back correctly
console.log('  Test: invalid query override -> date-based');
const r6 = resolve(themes, '2026-03-05', 'nonexistent', null, 'default');
assert(r6.id === 'spring-loading-2026', 'Invalid override falls back to spring (in range)');

// Test 7: ?theme=default rejected (allowManualOverride: false)
console.log('  Test: override rejected when allowManualOverride=false');
const r7 = resolve(themes, '2026-03-05', 'default', null, 'default');
assert(r7.id === 'spring-loading-2026', 'Default override ignored, spring active by date');

// Test 8: ?theme=spring-loading-2026 accepted
console.log('  Test: override accepted when allowManualOverride=true');
const r8 = resolve(themes, '2026-06-15', 'spring-loading-2026', null, 'default');
assert(r8.id === 'spring-loading-2026', 'Spring override accepted outside date range');

// Test 9: manualOverride in config
console.log('  Test: config manualOverride');
const r9 = resolve(themes, '2026-06-15', null, 'spring-loading-2026', 'default');
assert(r9.id === 'spring-loading-2026', 'Config manual override returns spring');

// Test 10: Higher priority wins
console.log('  Test: higher priority wins overlap');
const fakeThemes = [
  defaultTheme,
  springTheme,
  { id: 'overlap', startDate: '2026-03-01', endDate: '2026-03-13', priority: 5, level: 'light', tokens: {}, rules: { enabled: true, allowManualOverride: true } }
];
const r10 = resolve(fakeThemes, '2026-03-05', null, null, 'default');
assert(r10.id === 'spring-loading-2026', 'Priority 10 beats priority 5');

/* ---- Summary ---- */

console.log('\n' + '='.repeat(40));
console.log(`\nResults: ${passed} passed, ${errors} failed\n`);

process.exit(errors > 0 ? 1 : 0);
