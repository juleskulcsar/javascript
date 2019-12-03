//palindrome is a word that forms the same word if reversed.
//function takes one str argument and returns true if string is palindrome
//and false if not

//solution 1
function isPalindrome(str) {
    return str.split('').every((char, index) => {
      return char.toLowerCase() === str[str.length - index - 1].toLowerCase();
    });
  }

//solution 2
function isPalindrome(string) {
    let revStr = '';
  
    for (let i=0; i<string.length; i++) {
      revStr = string[i] + revStr;
    }
  
    return revStr.toLowerCase() === string.toLowerCase();
}

module.exports = isPalindrome;