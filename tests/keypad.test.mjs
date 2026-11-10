import test from 'node:test';
import assert from 'node:assert/strict';
import { editAnswer } from '../public/learn/logcal/keypad.js';
import { gradeAnswer } from '../public/learn/logcal/core.js';

const enter = keys => keys.reduce(editAnswer, '');

test('decimal keypad entry can be graded without a software keyboard', () => {
  assert.equal(enter(['1', '.', '7', '7', '8']), '1.778');
  assert.equal(gradeAnswer(enter(['1', '.', '7', '7', '8']), Math.log10(60)).correct, true);
  assert.equal(enter(['.', '3', '.', '0', '1']), '0.301');
});

test('negative values, editing, and leading zeroes behave consistently', () => {
  assert.equal(enter(['sign', '.', '3', '0', '1']), '-0.301');
  assert.equal(enter(['sign', 'sign', '2']), '2');
  assert.equal(enter(['0', '0', '2', '.', '5', 'delete', '4']), '2.4');
  assert.equal(enter(['1', '2', 'clear', '3']), '3');
  assert.equal(enter(['delete']), '');
  assert.equal(gradeAnswer(enter(['sign']), 0), null);
  assert.equal(gradeAnswer(enter(['clear']), 0), null);
});

test('long key sequences remain bounded and can still be corrected', () => {
  const value = enter(Array(30).fill('9'));
  assert.equal(value.length, 15);
  assert.equal(editAnswer(value, 'delete').length, 14);
  assert.equal(editAnswer(value, 'clear'), '');
});
