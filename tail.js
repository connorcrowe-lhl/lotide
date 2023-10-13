const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array[array.length];
};

const test1 = tail(['a', 'b']);
assertEqual(test1, 'b')

const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2);

const empty = tail([1]);
assertEqual(empty, 0);

const words = ['Yo yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);