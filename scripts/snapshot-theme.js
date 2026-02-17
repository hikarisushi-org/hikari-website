#!/usr/bin/env node

/* ========================================
   Hikari Sushi — Theme Snapshot Tool
   Captures current theme state and saves as JSON
   Usage: node scripts/snapshot-theme.js <theme-name>
   ======================================== */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function captureTheme() {
  console.log('='.repeat(60));
  console.log('Hikari Sushi Theme Snapshot Tool');
  console.log('='.repeat(60));
  console.log('\nThis tool will help you save the current theme configuration.');
  console.log('Make sure you\'ve already styled the site how you want it.\n');

  // Get theme information
  const themeName = await question('Theme name (e.g., "Valentine\'s Day", "St Patrick\'s Day"): ');
  const themeId = (await question(`Theme ID (e.g., "valentines", "st-patricks") [${themeName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}]: `)) ||
                  themeName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const description = await question('Brief description: ');

  // Date range
  console.log('\nWhen should this theme be active?');
  const month = parseInt(await question('Month (1-12): '));
  const dayStart = parseInt(await question('Start day: '));
  const dayEnd = parseInt(await question('End day: '));

  // Read current CSS to extract colors
  const cssPath = path.join(__dirname, '..', 'css', 'style.css');
  const css = fs.readFileSync(cssPath, 'utf8');

  // Extract CSS custom properties from :root
  const rootMatch = css.match(/:root\s*{([^}]+)}/);
  const colors = {};
  const typography = {};

  if (rootMatch) {
    const rootContent = rootMatch[1];
    const colorPattern = /--color-([a-z-]+):\s*([^;]+);/g;
    let match;
    while ((match = colorPattern.exec(rootContent)) !== null) {
      colors[match[1]] = match[2].trim();
    }

    const fontPattern = /--(font-[a-z-]+):\s*([^;]+);/g;
    while ((match = fontPattern.exec(rootContent)) !== null) {
      typography[match[1]] = match[2].trim();
    }
  }

  // Extract hero overlay
  const overlayMatch = css.match(/\.hero-overlay\s*{[^}]*background:\s*([^;]+);/);
  const overlayGradient = overlayMatch ? overlayMatch[1].trim() : null;

  // Check for banner configuration
  console.log('\nDoes this theme have a special banner section? (y/n): ');
  const hasBanner = (await question('')).toLowerCase() === 'y';

  let banner = { enabled: false };
  if (hasBanner) {
    const sectionClass = await question('Banner section class (e.g., "presidents-banner", "valentines-banner"): ');
    const title = await question('Banner title text: ');
    const subtitle = await question('Banner subtitle text: ');
    const celebrationText = await question('Celebration badge text (e.g., "Happy Presidents\' Day!"): ');

    banner = {
      enabled: true,
      sectionClass,
      title,
      subtitle,
      celebrationText,
      celebrationSubtext: await question('Celebration subtext: '),
      inviteTitle: await question('Invite section title: '),
      inviteSub: await question('Invite section subtitle: '),
      inviteNote: await question('Invite section note: ')
    };
  }

  // Check for floating elements
  console.log('\nDoes this theme have floating animated elements? (y/n): ');
  const hasFloating = (await question('')).toLowerCase() === 'y';

  let floatingElements = { enabled: false };
  if (hasFloating) {
    const containerClass = await question('Floating elements container class: ');
    const elementClass = await question('Individual element class: ');
    const chars = await question('Characters (comma-separated, e.g., "★,☆,⭐"): ');
    const colors = await question('Colors (comma-separated, e.g., "rgba(26,77,143,0.3),rgba(198,40,40,0.25)"): ');
    const animation = await question('Animation name: ');
    const interval = parseInt(await question('Spawn interval (ms) [700]: ') || '700');

    floatingElements = {
      enabled: true,
      containerClass,
      elementClass,
      characters: chars.split(',').map(c => c.trim()),
      colors: colors.split(',').map(c => c.trim()),
      animation,
      interval
    };
  }

  // Check for quote generator
  console.log('\nDoes this theme have a quote/message generator? (y/n): ');
  const hasQuotes = (await question('')).toLowerCase() === 'y';

  let quoteGenerator = { enabled: false };
  if (hasQuotes) {
    const type = await question('Quote type (e.g., "presidential", "romantic"): ');
    const interval = parseInt(await question('Rotation interval (ms) [4000]: ') || '4000');

    console.log('\nNote: Add quotes manually to the generated JSON file.');
    quoteGenerator = {
      enabled: true,
      type,
      interval,
      quotes: []
    };
  }

  // Theme asset images
  console.log('\nList any theme-specific images (comma-separated paths, or press Enter to skip): ');
  const assetsInput = await question('');
  const themeImages = assetsInput ? assetsInput.split(',').map(p => p.trim()) : [];

  // Build theme object
  const theme = {
    metadata: {
      name: themeName,
      id: themeId,
      description,
      dateCreated: new Date().toISOString().split('T')[0],
      activeRange: {
        month,
        dayStart,
        dayEnd,
        note: `${themeName} period`
      }
    },
    colors,
    typography,
    hero: {
      videoPath: "assets/video/hero.mp4",
      overlayGradient: overlayGradient || "linear-gradient(to bottom, rgba(26,60,40,0.4) 0%, rgba(20,50,35,0.3) 50%, rgba(15,35,25,0.5) 100%)"
    },
    banner,
    floatingElements,
    quoteGenerator,
    assets: {
      themeImages
    }
  };

  // Save theme file
  const themesDir = path.join(__dirname, '..', 'themes');
  if (!fs.existsSync(themesDir)) {
    fs.mkdirSync(themesDir, { recursive: true });
  }

  const themeFilePath = path.join(themesDir, `${themeId}.json`);
  fs.writeFileSync(themeFilePath, JSON.stringify(theme, null, 2));

  console.log('\n' + '='.repeat(60));
  console.log(`✅ Theme saved to: themes/${themeId}.json`);
  console.log('='.repeat(60));
  console.log('\nNext steps:');
  console.log(`1. Review and edit themes/${themeId}.json if needed`);
  console.log(`2. Add quotes to quoteGenerator.quotes[] if applicable`);
  console.log(`3. Update theme-config.json to set activeTheme to "${themeId}"`);
  console.log('\nTo activate this theme:');
  console.log(`   Edit theme-config.json and set "activeTheme": "${themeId}"`);
  console.log('\n');

  rl.close();
}

// Run
captureTheme().catch(error => {
  console.error('Error capturing theme:', error);
  rl.close();
  process.exit(1);
});
