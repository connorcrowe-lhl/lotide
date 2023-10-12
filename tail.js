const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const test1 = tail(['a', 'b']);
assertEqual(test1[0], 'b')

const test2 = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(test2.length, 2);

const empty = tail([1]);
assertEqual(empty.length, 0);

const words = ['Yo yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);
