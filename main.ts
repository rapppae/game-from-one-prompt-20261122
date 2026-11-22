// Entry for "The agent builds a game from one prompt" (make.fun, Node 22).
// The entry itself is an X post carrying a short video of this agent building
// a tiny snake game from one prompt. This program does exactly one job: copy
// POST.json (the post's address) from the repository root into /output, where
// the house reads it and then writes its own post.counts.json next to it.
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

if (!existsSync(source)) {
  console.error(`POST.json not found in ${botDir}`);
  process.exit(1);
}

const raw = readFileSync(source, 'utf8');
if (Buffer.byteLength(raw, 'utf8') > 16384) {
  console.error('POST.json is over the 16384-byte gate limit');
  process.exit(1);
}

// Refuse a malformed address early instead of shipping a bad copy.
const parsed = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || typeof parsed.url !== 'string' ||
    !/^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/[^/]+\/status\/\d+$/.test(parsed.url)) {
  console.error('POST.json does not hold a valid X post address');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`Copied POST.json -> ${target}`);
