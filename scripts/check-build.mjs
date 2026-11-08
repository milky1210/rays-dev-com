import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
const root = new URL('../dist/client/', import.meta.url);
for (const path of ['index.html','learn/logcal/index.html','learn/logcal/app.js','learn/logcal/core.js','learn/logcal/style.css','apps/select-cheaper/index.html','assets/rays-welcome.png','assets/rays-thinking.png','assets/rays-celebrate.png','favicon.svg','og-rays.png']) await access(new URL(path, root));
const home = await readFile(new URL('index.html', root), 'utf8');
assert.ok(home.includes('/learn/logcal/'), 'Portfolio must link to the learning site');
const {courses} = await import('../public/learn/logcal/core.js');
for (const file of courses.flatMap(c => c.files)) await access(new URL(`learn/logcal/data/${file}`, root));
console.log('Build verified: portfolio, existing app, learning site, and all course data.');
