function capitalize(str) {
  let newStr = str.toUpperCase();
  return newStr[0] + str.slice(1).toLowerCase();
}

function reverse(str) {
  return capitalize(str.split('').reverse().join(''));
}

function calculator(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = b === 0 ? 'false' : a / b;
  return { add, subtract, multiply, divide };
}

function cipher(str) {
  let hold = [];
  [...str].forEach((letter) => hold.push(letter.charCodeAt()));
  let newArr = hold.map((x) =>
    x === 90 || x === 122 ? x - 25 : x < 64 ? x : x + 1
  );
  return (newHold = String.fromCharCode(...newArr));
}

function analyze(array) {
  const average = array.reduce((prev, curr) => prev + curr, 0) / array.length;
  const sort = [...array].sort((a, b) => (a < b ? -1 : a > b ? +1 : 0));
  const min = sort[0];
  const max = sort[array.length - 1];
  const length = array.length;
  return { average, min, max, length };
}

module.exports = {
  analyze,
  cipher,
  calculator,
  reverse,
  capitalize,
};
