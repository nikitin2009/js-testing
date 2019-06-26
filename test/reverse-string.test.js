const reverseString = require('../src/reverse-string');

test('returns reversed string', () => {
  expect(reverseString('string')).toBe('gnirts')
})