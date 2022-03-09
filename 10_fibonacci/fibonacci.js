const fibonacci = (number) => {
  let a = 0;
  let b = 1;

  if (number < 0) return "OOPS";

  for (let i = 1; i < number; i++) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
