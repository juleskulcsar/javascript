const makeXOGrid = require('./index');

test('makeXOGrid function exists', () => {
  expect(makeXOGrid).toBeDefined();
});

test('makeXOGRid makes a grid', () => {
  expect(makeXOGrid(3, 5)).toEqual([["X", "O", "X", "O", "X"],
  ["O", "X", "O", "X", "O"],
  ["X", "O", "X", "O", "X"]]);
});

test('rmakeXOGRid makes a grid', () => {
  expect(makeXOGrid(5, 5)).toEqual([["X", "O", "X", "O", "X"],
  ["O", "X", "O", "X", "O"],
  ["X", "O", "X", "O", "X"],
  ["O", "X", "O", "X", "O"],
  ["X", "O", "X", "O", "X"]]);
});