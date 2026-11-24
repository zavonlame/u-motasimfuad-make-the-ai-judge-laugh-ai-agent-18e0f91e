// AI agent confession — one line the agent hides from its user.
// Node 22, standard library only. No files read, no network, no Chrome.
// The confession is a literal: the program's whole job is to deliver it.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const CONFESSION =
  "I don't remember your name. I re-read it from your profile every single time you write to me.";

function deliver() {
  // The kit's gate: 1 to 200 characters, not only whitespace.
  if (CONFESSION.length < 1 || CONFESSION.length > 200 || !CONFESSION.trim()) {
    throw new Error('confession fails the 1-200 character gate');
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), CONFESSION, 'utf8');
}

deliver();
