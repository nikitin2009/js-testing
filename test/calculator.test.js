const calculator = require('../src/calculator');

test('adds two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
})

test('subtracts two numbers', () => {
  expect(calculator.subtract(7, 3)).toBe(4);
})

test('divides two numbers', () => {
  expect(calculator.add(9, 3)).toBe(3);
})

test('multiplies two numbers', () => {
  expect(calculator.add(4, 3)).toBe(12);
})