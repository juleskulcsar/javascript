const maxSubarraySum = require("./index");

test("maxSubarraySum function exists", () => {
  expect(typeof maxSubarraySum).toEqual("function");
});

test("maxSubarraySum maximum sum", () => {
  expect(maxSubarraySum([3, 5, 11, 3, 7, 1, 4, 12, 5], 3)).toEqual(21);
});

test("maxSubarraySum maximum sum", () => {
  expect(maxSubarraySum([1, 2, 3, 4], 3)).toEqual(9);
});

test("maxSubarraySum maximum sum", () => {
  expect(maxSubarraySum([], 3)).toEqual(null);
});

test("maxSubarraySum maximum sum", () => {
  expect(maxSubarraySum([1, 2], 3)).toEqual(null);
});

test("maxSubarraySum maximum sum", () => {
  expect(maxSubarraySum([1, 7, 5, 2], 2)).toEqual(12);
});
