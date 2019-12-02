const reverseString = require('./index');

test('Reverse function exists', () => {
  expect(reverseString).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverseString('babbel')).toEqual('lebbab');
});

test('Reverse reverses a string', () => {
  expect(reverseString('  babbel')).toEqual('lebbab  ');
});
