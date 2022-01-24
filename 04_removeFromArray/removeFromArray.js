const removeFromArray = (...args) => {
  var arrayElements = args[0];

  var arrayArgs = [];

  var arrayReturn = [];

  args.forEach((element) => {
    arrayArgs.push(element);
  });

  arrayArgs.shift();

  for (let i = 0; i < arrayElements.length; i++) {
    if (!arrayArgs.includes(arrayElements[i])) {
      arrayReturn.push(arrayElements[i]);
    }
  }

  return arrayReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
