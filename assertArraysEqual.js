const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return true;
  for (let i = 0; i < array1.length; i+=1) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};

// Two empty arrays
assertArraysEqual([], [])
// One empty array
assertArraysEqual([1,2,3], [])
// Same integers
assertArraysEqual([1,2,3], [1,2,3])