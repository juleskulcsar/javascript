const countLetters = require('./index');

test('countLetters function exists', () => {
  expect(countLetters).toBeDefined();
});

test('removeVowels removes vowels', () => {
  expect(countLetters(['s', 'a','b','r','a'], 'a')).toEqual(2);
});

test('removeVowels removes vowels', () => {
  expect(countLetters(["a","a","b","c","A"], "a")).toEqual(3);
});