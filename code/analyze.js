function analyze(array) {
  const average = array.reduce((prev, curr) => prev + curr, 0) / array.length;
  const sort = [...array].sort((a, b) => (a < b ? -1 : a > b ? +1 : 0));
  const min = sort[0];
  const max = sort[array.length - 1];
  const length = array.length;
  return { average, min, max, length };
}

module.exports = analyze;
