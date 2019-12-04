const revInt = require('./index');

test('RevInt function exists', () => {
  expect(revInt).toBeDefined();
});

test('RevInt handles 0 as an input', () => {
  expect(revInt(0)).toEqual(0);
});

test('RevInt flips a positive number', () => {
  expect(revInt(5)).toEqual(5);
  expect(revInt(15)).toEqual(51);
  expect(revInt(90)).toEqual(9);
  expect(revInt(2359)).toEqual(9532);
});

test('RevInt flips a negative number', () => {
  expect(revInt(-5)).toEqual(-5);
  expect(revInt(-15)).toEqual(-51);
  expect(revInt(-90)).toEqual(-9);
  expect(revInt(-2359)).toEqual(-9532);
});