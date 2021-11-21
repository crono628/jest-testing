function capitalize(str) {
  let newStr = str.toUpperCase();
  return newStr[0] + str.slice(1);
}

module.exports = capitalize;
