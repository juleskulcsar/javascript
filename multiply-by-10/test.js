const count = require('./index');

test('count function exists', () => {
  expect(count).toBeDefined();
});

test('count multiplies by 10', () => {
  expect(count(17)).toEqual(1700000);
});

test('count multiplies by 10', () => {
  expect(count(5)).toEqual(5000000);
});

test('count returns argument', () => {
    expect(count(1000001)).toEqual(1000001);
});

test('count returns "ERROR"', () => {
    expect(count(-10)).toEqual("ERROR");
});

test('count returns "ERROR"', () => {
    expect(count(NaN)).toEqual("ERROR");
});