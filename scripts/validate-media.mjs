#!/usr/bin/env node

import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const sourceText = await readFile(path.join(root, 'js/menu-page.js'), 'utf8');
const indexText = await readFile(path.join(root, 'index.html'), 'utf8');
const mainText = await readFile(path.join(root, 'js/main.js'), 'utf8');
const sourcePaths = [...new Set(
  [...sourceText.matchAll(/assets\/images\/menu\/[^"']+\.(?:png|jpe?g)/gi)].map((match) => match[0])
)].sort();
const formats = ['webp', 'avif'];
const homeSourcePaths = [
  'assets/images/sushi_row.webp',
  'assets/images/sushi_platter_1.webp',
  'assets/images/sushi_making.webp',
  'assets/images/sushi_eight.webp',
  'assets/images/sushi_platter_ai.webp'
];
const sourceSpecs = [
  ...sourcePaths.map((sourcePath) => ({ sourcePath, widths: [320, 640], group: 'menu' })),
  ...homeSourcePaths.map((sourcePath) => ({ sourcePath, widths: [640, 1280], group: 'home' }))
];
const errors = [];
let originalBytes = 0;
let generatedBytes = 0;
let generatedCount = 0;

const heroVideos = indexText.match(/<video\b[^>]*class="[^"]*hero-video[^"]*"[^>]*>/g) || [];
const heroVideoElement = indexText.match(/<video\b[^>]*class="[^"]*hero-video[^"]*"[^>]*>[\s\S]*?<\/video>/i)?.[0] || '';
if (heroVideos.length !== 1) {
  errors.push(`Expected one responsive hero video, found ${heroVideos.length}.`);
}
if (/<source\b/i.test(heroVideoElement)) {
  errors.push('Hero video must not contain source children that preload both orientations.');
}
if (!/data-landscape-src=/.test(heroVideos[0] || '') || !/data-portrait-src=/.test(heroVideos[0] || '')) {
  errors.push('Hero video is missing its landscape or portrait source data attribute.');
}
if (!/prefers-reduced-motion:\s*reduce/.test(mainText) || !/saveData/.test(mainText)) {
  errors.push('Hero controller must respect reduced motion and data saver preferences.');
}

function outputPath(spec, width, extension) {
  const relative = spec.group === 'menu'
    ? spec.sourcePath.replace(/^assets\/images\/menu\//, '').replace(/\.[^.]+$/, '')
    : path.basename(spec.sourcePath).replace(/\.[^.]+$/, '');
  return path.join(root, `assets/images/generated/${spec.group}`, `${relative}-${width}.${extension}`);
}

for (const spec of sourceSpecs) {
  const source = path.join(root, spec.sourcePath);
  let sourceStat;
  try {
    sourceStat = await stat(source);
    originalBytes += sourceStat.size;
  } catch {
    errors.push(`Missing active source: ${spec.sourcePath}`);
    continue;
  }

  for (const width of spec.widths) {
    for (const format of formats) {
      const output = outputPath(spec, width, format);
      try {
        const outputStat = await stat(output);
        generatedCount += 1;
        generatedBytes += outputStat.size;
        if (outputStat.size >= sourceStat.size) {
          errors.push(`Variant is not smaller than its source: ${path.relative(root, output)}`);
        }
        const header = await readFile(output);
        if (format === 'webp' && (header.subarray(0, 4).toString() !== 'RIFF' || header.subarray(8, 12).toString() !== 'WEBP')) {
          errors.push(`Invalid WebP signature: ${path.relative(root, output)}`);
        }
        if (format === 'avif' && !header.subarray(0, 32).includes(Buffer.from('ftypavif'))) {
          errors.push(`Invalid AVIF signature: ${path.relative(root, output)}`);
        }
      } catch {
        errors.push(`Missing variant: ${path.relative(root, output)}`);
      }
    }
  }
}

const expectedCount = sourceSpecs.reduce((sum, spec) => sum + (spec.widths.length * formats.length), 0);
if (generatedCount !== expectedCount) {
  errors.push(`Expected ${expectedCount} variants, found ${generatedCount}.`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Active sources: ${sourceSpecs.length} (${sourcePaths.length} menu + ${homeSourcePaths.length} homepage)`);
console.log(`Responsive variants: ${generatedCount}`);
console.log(`Original source weight: ${(originalBytes / 1048576).toFixed(2)} MiB`);
console.log(`Generated variant weight: ${(generatedBytes / 1048576).toFixed(2)} MiB`);
console.log('Hero delivery: one orientation-aware video with reduced-motion and data-saver guards');
