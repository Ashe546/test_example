const reverseString = require('./reverseString.js');

test("string reverses", () => {
  expect(reverseString("ashe")).toEqual("ehsa");
})