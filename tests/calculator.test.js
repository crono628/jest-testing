const calculator = require('../code/calculator');

test('add', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('subtract', () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test('multiply', () => {
  expect(calculator.multiply(5, 10)).toBe(50);
});

test('divide', () => {
  expect(calculator.divide(100, 5)).toBe(20);
});
