function cipher(str) {
  let hold = [];
  [...str].forEach((letter) => hold.push(letter.charCodeAt()));
  let newArr = hold.map((x) =>
    x === 90 || x === 122 ? x - 25 : x < 64 ? x : x + 1
  );
  return (newHold = String.fromCharCode(...newArr));
}

module.exports = cipher;
