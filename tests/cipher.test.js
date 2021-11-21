const cipher = require('../code/cipher');

test('test 1', () => {
  expect(cipher('abcde')).toBe('bcdef');
});

test('test 2', () => {
  expect(cipher('az')).toBe('ba');
});

test('test 3', () => {
  expect(cipher('aAzZ')).toBe('bBaA');
});

test('test 4', () => {
  expect(cipher('AA!!ZzZ?.')).toBe('BB!!AaA?.');
});
