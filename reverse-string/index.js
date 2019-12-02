//solution 1
function reverseString(string) {
    let revStr = '';
  
    for (let i=0; i<string.length; i++) {
      revStr = string[i] + revStr;
    }
  
    return revStr;
}

//solution 2
function reverseString(string) {
    return string.split('').reduce((acc, char) => char + acc, '');
}

module.exports = reverseString;