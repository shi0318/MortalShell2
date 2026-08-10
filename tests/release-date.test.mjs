import assert from 'node:assert/strict';
import test from 'node:test';
import { formatReleaseDate, getReleaseState } from '../src/utils/release-date.js';

test('counts calendar days from the visitor local date', () => {
  const result = getReleaseState('2026-08-20', new Date(2026, 7, 10, 23, 59));
  assert.deepEqual(result, { kind: 'upcoming', days: 10 });
});

test('identifies launch day and dates after launch', () => {
  assert.deepEqual(getReleaseState('2026-08-20', new Date(2026, 7, 20, 9)), {
    kind: 'today',
    days: 0,
  });
  assert.deepEqual(getReleaseState('2026-08-20', new Date(2026, 7, 21, 9)), {
    kind: 'released',
    days: -1,
  });
});

test('formats release dates for US English readers', () => {
  assert.equal(formatReleaseDate('2026-08-20'), 'August 20, 2026');
});
