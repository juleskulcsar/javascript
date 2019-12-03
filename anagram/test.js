const isAnagram = require('./index.js');

test('anagrams function exists', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('"hello" is an anagram of "llohe"', () => {
  expect(isAnagram('hello', 'llohe')).toBeTruthy();
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(isAnagram('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});

test('"One One" is not an anagram of "Two two two"', () => {
  expect(isAnagram('One One', 'Two two two')).toBeFalsy();
});

test('"One one" is not an anagram of "One one c"', () => {
  expect(isAnagram('One one', 'One one c')).toBeFalsy();
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(
    isAnagram('A tree, a life, a bench', 'A tree, a fence, a yard')
  ).toBeFalsy();
});