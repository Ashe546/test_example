const stringLength = require('./main.js'); 

test("String character counter", () => {
  expect(stringLength("Abby")).toEqual(4);
})

// Test fails and throws an error
test("String character counter", () => {
  expect(stringLength("Asheashenafi")).toBe(12);
})