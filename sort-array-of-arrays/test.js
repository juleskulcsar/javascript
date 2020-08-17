const sortVersions = require("./index.js");

test("sortVersions function exists", () => {
  expect(typeof sortVersions).toEqual("function");
});

test("sortVersions", () => {
  expect(sortVersions(["0.2.0", "3.1.2", "0.1.6", "5.0.0"])).toEqual([
    "5.0.0",
    "3.1.2",
    "0.2.0",
    "0.1.6"
  ]);
});

test("sameFrequency", () => {
  expect(
    sortVersions([
      "1.3.0.9",
      "0.2.0",
      "3.1.2",
      "0.1.6",
      "5.0.0",
      "3.3.3.3",
      "3.3.3.3.3",
      "3.10",
      "0.2.0"
    ])
  ).toEqual([
    "5.0.0",
    "3.10",
    "3.3.3.3.3",
    "3.3.3.3",
    "3.1.2",
    "1.3.0.9",
    "0.2.0",
    "0.2.0",
    "0.1.6"
  ]);
});

test("sameFrequency", () => {
  expect(
    sortVersions([
      "1.3.0.9",
      "0.2.0",
      "3.1.2",
      "0.1.6",
      "5.0.0",
      "3.3.3.3",
      "3.3.3.3.3",
      "3.10",
      "3.3.3.3.10",
      "0.2.0"
    ])
  ).toEqual([
    "5.0.0",
    "3.10",
    "3.3.3.3.10",
    "3.3.3.3.3",
    "3.3.3.3",
    "3.1.2",
    "1.3.0.9",
    "0.2.0",
    "0.2.0",
    "0.1.6"
  ]);
});
