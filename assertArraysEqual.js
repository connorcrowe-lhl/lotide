const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i+=1) {
    if (array1[i] === array2[i]) {
      return false
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// Two empty arrays
assertArraysEqual([1,2,3], [])
// One empty array
assertArraysEqual([1,2,3], [])

// Same integers
assertArraysEqual([1,2,3], [1,2,3])
// Diff integers
assertArraysEqual([1,2,3], [1,3])
// Same strings
assertArraysEqual(['a','b','c'], ['a','b','c'])
// Diff strings
assertArraysEqual(['a','b','c'], ['a','b'])