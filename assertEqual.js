const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`); // print out if they match
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`); // print out if they don't match
  }

};

module.exports = assertEqual;