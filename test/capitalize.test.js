const capitalize = require('../src/capitalize');

test('makes the first character capitalized', () => {
  expect(capitalize('string')).toBe('String')
})