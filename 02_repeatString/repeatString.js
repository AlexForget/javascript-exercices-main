const repeatString = (string, num) => {
  let stringRetour = "";

  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 1; i <= num; i++) {
      stringRetour += string;
    }
    return stringRetour;
  }
};

// Do not edit below this line
module.exports = repeatString;
