const palindromes = (oldString) => {
  oldString = oldString.replace(/[^a-zA-Z]/g, "").toLowerCase();

  var newString = "";
  for (var i = oldString.length - 1; i >= 0; i--) {
    newString += oldString[i];
  }

  return newString !== oldString ? false : true;
};

// Do not edit below this line
module.exports = palindromes;
