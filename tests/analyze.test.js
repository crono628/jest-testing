const analyze = require('../code/analyze');

test('average', () => {
  expect(analyze([1, 2, 3, 4])).toStrictEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

test('bigger', () => {
  expect(analyze([10, 20, 300, 4])).toStrictEqual({
    average: 83.5,
    min: 4,
    max: 300,
    length: 4,
  });
});

test('negative', () => {
  expect(analyze([-8, -8, -50])).toStrictEqual({
    average: -22,
    min: -50,
    max: -8,
    length: 3,
  });
});
