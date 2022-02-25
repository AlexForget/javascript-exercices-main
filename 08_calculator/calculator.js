const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const sum = (array) => {
  return array.reduce((a, b) => a + b, 0);
};

const multiply = (array) => {
  return array.reduce((a, b) => a * b);
};

const power = (num, power) => {
  return Math.pow(num, power);
};

const factorial = (num) => {
  if (num === 0) return 1;
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
