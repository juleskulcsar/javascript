const rotate = require('./index');

test('Rotate function exists', () => {
  expect(rotate).toBeDefined();
});

test('Rotate rotates elements', () => {
  expect(rotate([1,2,3,4,5], 7)).toEqual([4, 5, 1, 2, 3]);
});

test('Rotate rotates elements', () => {
  expect(rotate(["a","b","c","d","e","f"], 3)).toEqual(["d","e","f","a","b","c"]);
});