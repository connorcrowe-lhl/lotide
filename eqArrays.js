const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      // console.log(array1[i], array2[i]);
      if (array1[i] !== array2[i]) {
        result = false;
      }
    }
  }
  return result;
};

module.exports = eqArrays;