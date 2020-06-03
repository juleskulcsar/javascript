const sameFrequency = require("./index.js");

test("sameFrequency function exists", () => {
  expect(typeof sameFrequency).toEqual("function");
});

test("sameFrequency", () => {
  expect(sameFrequency(123, 321)).toBeTruthy();
});

test("sameFrequency", () => {
  expect(sameFrequency(23, 456)).toBeFalsy();
});

test("sameFrequency", () => {
  expect(sameFrequency(1, 52)).toBeFalsy();
});

test("sameFrequency", () => {
  expect(sameFrequency(1234, 2431)).toBeTruthy();
});

test("sameFrequency", () => {
  expect(sameFrequency(22, 453)).toBeFalsy();
});
