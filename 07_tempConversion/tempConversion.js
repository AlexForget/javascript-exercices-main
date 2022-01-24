const ftoc = function (fTemp) {
  cTemp = (fTemp - 32) * (5 / 9);

  if (cTemp % 1 === 0) {
    return parseInt(cTemp);
  } else {
    return Number(cTemp.toFixed(1));
  }
};

const ctof = function (cTemp) {
  fTemp = cTemp * (9 / 5) + 32;

  if (fTemp % 1 === 0) {
    return parseInt(fTemp);
  } else {
    return Number(fTemp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
