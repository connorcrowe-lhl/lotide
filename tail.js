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

// Empty array
const empty = tail([]);
assertEqual(empty.length, 0);

// Arr len 1
const len1 = tail([1]);
assertEqual(len1.length, 0);

// Arr len 2
const len2 = tail(['a', 'b']);
assertEqual(len2[0], 'b');
assertEqual(len2.length, 1);

// Arr len 3
const len3 = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(len3[0], 'Lighthouse');
assertEqual(len3.length, 2);

// Orignial array unmodified
const words = ['Yo yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);
assertEqual(words[0], 'Yo yo');