//write a function which accepts an array of integers and a number n
//the function should calculate the max sum of n consecutive elements in the array

//sliding window pattern. O(n) complexity
function maxSubarraySum(arr, n) {
  let maxSum = 0;
  let temp = 0;
  if (arr.length < n) return null;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  temp = maxSum;
  for (let i = n; i < arr.length; i++) {
    temp = temp - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, temp);
  }
  return maxSum;
}

//O(n^2) complexity (nested loops)
function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

module.exports = maxSubarraySum;

//maxSubarraySum([3, 5, 11, 3, 7, 1, 4, 12, 5], 3);
