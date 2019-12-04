// Given an integer, return an integer that is the reverse ordering of numbers

//   reverseInt(15) === 51
//   reverseInt(500) === 5
//   reverseInt(-23) === -32
//   reverseInt(-10) === -1

//solution 1
function revInt(num) {
    const rev = num
      .toString()
      .split('')
      .reverse()
      .join('');

    //parseInt() function parses a string and returns an integer.
    //Math. sign() is a builtin function in JavaScript and is used to know the sign of a number, 
    //returns -1 if negative and 1 if postive.
    return parseInt(rev) * Math.sign(num);
  }

//solution 2 without builtin reverse method;
  function revInt(num) {
    const rev =  num.toString().split('').reduce((acc, next)=> next + acc, '');
    return parseInt(rev) * Math.sign(num);
  }
  
  module.exports = revInt;