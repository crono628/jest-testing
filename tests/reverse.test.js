const reverse = require('../code/reverse');

test('test 1', () => {
  expect(reverse('TaCo')).toBe('oCaT');
});

test('test 2', () => {
  expect(reverse('TaCo!')).toBe('!oCaT');
});
