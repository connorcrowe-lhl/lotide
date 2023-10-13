const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array1)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`); // print out if they match
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`); // print out if they don't match
  }
};

module.exports = assertArraysEqual;