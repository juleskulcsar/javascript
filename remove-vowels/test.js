const removeVowels = require('./index');

test('RemoveVowels function exists', () => {
  expect(removeVowels).toBeDefined();
});

test('removeVowels removes vowels', () => {
  expect(removeVowels('babel')).toEqual('bbl');
});

test('removeVowels removes vowels', () => {
  expect(removeVowels('javascript is amazing')).toEqual("jvscrpt s mzng");
});