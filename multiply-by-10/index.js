//write a function that takes on integer as argument
//and multiply it by 10 and print the max result less than 10000000.
//if argument is negative integer or NaN return error
//if number higher than 1000000, return the number

function count(num) {
    if (num <= 0 || isNaN(num) == true) {
        return "ERROR";
    } else if (num >= 1000000) {
        return num;
    } else {
        num = num * 10;
        if (num < 1000000) {
            return count(num);
        } 
    }
  return num;
}

module.exports = count;