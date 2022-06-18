const stringLength = require('./stringLength.js');

test("String character counter", () => {
  expect(stringLength("Ashe")).toEqual(4);
})

// Test fails and throws an error
test("String character counter", () => {
  expect(stringLength("Ashecvxcvxcvv")).toBe(13);
})