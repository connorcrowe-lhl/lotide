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
assertEqual(tail([]).length, 0);

// Arr len 1
assertEqual(tail([1]).length, 0);

// Arr len 2
assertEqual(tail(['a', 'b'])[0], 'b');
assertEqual(tail(['a', 'b']).length, 1);

// Arr len 3
assertEqual(tail(['Hello', 'Lighthouse', 'Labs'])[0], 'Lighthouse');
assertEqual(tail(['Hello', 'Lighthouse', 'Labs']).length, 2);

// Orignial array unmodified
const words = ['Yo yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);
assertEqual(words[0], 'Yo yo');