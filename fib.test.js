const fib = require('./fib');

test('fibonacci for 0 returns empty array', () => {
  expect(fib(0)).toEqual([]);
});

test('fibonacci for 1 returns [0]', () => {
  expect(fib(1)).toEqual([0]);
});

test('fibonacci for 5 returns [0, 1, 1, 2, 3]', () => {
  expect(fib(5)).toEqual([0, 1, 1, 2, 3]);
});

test('fibonacci for -1 returns empty array', () => {
  expect(fib(-1)).toEqual([]);
});

test('fibonacci for 1478 returns array with the last element equal to infinity', () => {
  let resultArray = fib(1478);
  expect(resultArray[resultArray.length-1]).toBe(Number.POSITIVE_INFINITY);
});

test('fibonacci for 1477 returns array with no infinity elements', () => {
  let resultArray = fib(1477);
  expect(resultArray[resultArray.length-1]).not.toBe(Number.POSITIVE_INFINITY);
});