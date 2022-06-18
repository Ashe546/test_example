const capitalize = require('./captalizer')

test("The first letter to be uppercase", () => {
  expect(capitalize("ashe")).toEqual("Ashe");
});