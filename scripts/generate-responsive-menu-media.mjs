#!/usr/bin/env node

import { spawn } from 'node:child_process';
import { mkdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const menuScript = path.join(root, 'js/menu-page.js');
const force = process.argv.includes('--force');
const sourceText = await readFile(menuScript, 'utf8');
const sourcePaths = [...new Set(
  [...sourceText.matchAll(/assets\/images\/menu\/[^"']+\.(?:png|jpe?g)/gi)].map((match) => match[0])
)].sort();
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

if (sourcePaths.length === 0) {
  throw new Error('No active menu image paths were found in js/menu-page.js.');
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: root, stdio: ['ignore', 'ignore', 'pipe'] });
    let stderr = '';
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} failed (${code}): ${stderr.trim()}`));
    });
  });
}

async function isCurrent(source, output) {
  if (force) return false;
  try {
    const [sourceStat, outputStat] = await Promise.all([stat(source), stat(output)]);
    return outputStat.size > 0 && outputStat.mtimeMs >= sourceStat.mtimeMs;
  } catch {
    return false;
  }
}

function outputPath(spec, width, extension) {
  const relative = spec.group === 'menu'
    ? spec.sourcePath.replace(/^assets\/images\/menu\//, '').replace(/\.[^.]+$/, '')
    : path.basename(spec.sourcePath).replace(/\.[^.]+$/, '');
  return path.join(root, `assets/images/generated/${spec.group}`, `${relative}-${width}.${extension}`);
}

async function generateSource(spec) {
  const source = path.join(root, spec.sourcePath);
  await stat(source);

  for (const width of spec.widths) {
    const webp = outputPath(spec, width, 'webp');
    const avif = outputPath(spec, width, 'avif');
    await mkdir(path.dirname(webp), { recursive: true });

    if (!(await isCurrent(source, webp))) {
      await run('magick', [source, '-auto-orient', '-strip', '-resize', `${width}x${width}>`, '-quality', '78', webp]);
    }

    if (!(await isCurrent(source, avif))) {
      await run('ffmpeg', [
        '-y', '-hide_banner', '-loglevel', 'error', '-i', source,
        '-map_metadata', '-1', '-vf', `scale=w='min(${width},iw)':h=-2`,
        '-frames:v', '1', '-c:v', 'libaom-av1', '-crf', '35',
        '-still-picture', '1', '-pix_fmt', 'yuv420p', avif
      ]);
    }
  }
}

const queue = [...sourceSpecs];
const workerCount = Math.min(4, queue.length);
let completed = 0;

async function worker() {
  while (queue.length) {
    const spec = queue.shift();
    await generateSource(spec);
    completed += 1;
    process.stdout.write(`\rGenerated responsive variants for ${completed}/${sourceSpecs.length} active images`);
  }
}

await Promise.all(Array.from({ length: workerCount }, worker));
process.stdout.write('\n');
