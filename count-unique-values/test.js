const countUniqueValues = require("./index");

test("maxSubarraySum function exists", () => {
  expect(typeof countUniqueValues).toEqual("function");
});

test("countUniqueValues", () => {
  expect(countUniqueValues([1, 1, 1, 2, 2, 4])).toEqual(3);
});

test("countUniqueValues", () => {
  expect(countUniqueValues([1, 2, 3, 4])).toEqual(4);
});

test("countUniqueValues", () => {
  expect(countUniqueValues([])).toEqual(0);
});

test("countUniqueValues", () => {
  expect(countUniqueValues([1, 2, 5, 5, 11, 11, 23])).toEqual(5);
});

test("countUniqueValues", () => {
  expect(countUniqueValues([1, 1, 1, 1])).toEqual(1);
});
