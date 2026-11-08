import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { courses, gradeAnswer, parseAnswer, selectQuestions } from '../public/learn/logcal/core.js';

test('accepts signed decimal answers, including full-width input; rejects empty or nonnumeric input', () => {
  assert.equal(parseAnswer(' −０．３０１ '), -0.301);
  assert.equal(parseAnswer('0'), 0);
  for (const input of ['', ' ', 'Infinity', 'NaN', '2abc', '1,000', '1+2']) assert.equal(parseAnswer(input), null);
});

test('grades in log space, including zero, negative values and tolerance boundaries', () => {
  assert.equal(gradeAnswer('0.1', 0).correct, true);
  assert.equal(gradeAnswer('0.10001', 0).correct, false);
  assert.equal(gradeAnswer('-2.05', -2).correct, true);
  assert.equal(gradeAnswer('2', Math.log10(100)).correct, true);
  assert.equal(gradeAnswer('', 0), null);
  assert.equal(gradeAnswer('0', NaN), null);
});

test('all published courses load valid finite-answer quizzes and support a distinct ten-question session', async () => {
  for (const course of courses) {
    const sets = await Promise.all(course.files.map(file => readFile(new URL(`../public/learn/logcal/data/${file}`, import.meta.url), 'utf8').then(JSON.parse)));
    const pool = sets.flat();
    assert.ok(pool.length > 0, course.id);
    for (const q of pool) {
      assert.equal(typeof q.question, 'string', course.id);
      assert.ok(Number.isFinite(q.answer), `${course.id}: ${q.question}`);
    }
    const selected = selectQuestions(pool);
    assert.equal(selected.length, Math.min(10, pool.length));
    assert.equal(new Set(selected).size, selected.length);
  }
});

test('review selection supports a short course and does not mutate its source', () => {
  const pool = [{question:'a',answer:0},{question:'b',answer:-1}];
  assert.equal(selectQuestions(pool).length, 2);
  assert.deepEqual(pool.map(q => q.question), ['a','b']);
  assert.deepEqual(selectQuestions([{question:'invalid',answer:null}]), []);
});
