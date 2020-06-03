//write a function which takes two positive integers
//the function should return true if the 2 integers have the same frequency pf digits

//frequency pattern. O(n) complexity
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    obj1[strNum1[i]] = (obj1[strNum1[i]] || 0) + 1;
  }

  for (let i = 0; i < strNum2.length; i++) {
    obj2[strNum2[i]] = (obj2[strNum2[i]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

module.exports = sameFrequency;
