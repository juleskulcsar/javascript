const countVowels = require('./index');

test('CountVowels is a function', () => {
  expect(typeof countVowels).toEqual('function');
});

test('returns the number of vowels used', () => {
  expect(countVowels('aeiou')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(countVowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(countVowels('bcdfghjkl')).toEqual(0);
});