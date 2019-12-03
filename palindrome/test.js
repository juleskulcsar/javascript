const isPalindrome = require('./index');

test('palindrome function is defined', () => {
  expect(typeof isPalindrome).toEqual('function');
});

test('"cdc" is a palindrome', () => {
  expect(isPalindrome('cdc')).toBeTruthy();
});

test('" cdc" is not a palindrome', () => {
  expect(isPalindrome(' cdc')).toBeFalsy();
});

test('"101" a palindrome', () => {
  expect(isPalindrome('101')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(isPalindrome('Fish hsif')).toBeTruthy();
});
