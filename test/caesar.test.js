const caesar = require('../src/caesar');

test('properly wraps from z to a', () => {
  expect(caesar('zorro', 2)).toBe('bqttq')
})

test('keeps the same case', () => {
  expect(caesar('TeSt', 2)).toBe('VgUv')
})

test('does not touch punctuation', () => {
  expect(caesar('Hola, amigos!', 3)).toBe('Krod, dpljrv!')
})