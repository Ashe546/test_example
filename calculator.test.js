const { multiply } = require('./calculator.js');
const calculator = require('./calculator.js')

// Use the describe method.
describe("test calculator", () => {

  // Test the add function
  test("4+5 is equal to 9", ()=> {
    expect(calculator.add(4, 5)).toEqual(9);
  });

  // Test the subtraction
  test("4-6 is equal -2", ()=> {
    expect(calculator.subtract(4, 6)).toBe(-2);
  });

  // Test the multiplication
  test("0 x 0 to be equal 0", ()=> {
    expect(calculator.multiply(0, 0)).toBe(0);
  });
})