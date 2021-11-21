const capitalize = require('../code/capitalize');

test('test 1', () => {
  expect(capitalize('wooHoO!')).toBe('WooHoO!');
});
