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

const test2 = tail([]);
assertEqual(test2.length, 0);

const test3 = tail([1]);
assertEqual(test3.length, 0);

const test4 = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(test4.length, 2);

const words = ['Yo yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);

const words2 = ['New', 'Lighthouse', 'Labs'];
assertEqual(tail(words2)[0], 'Lighthouse');

const words3 = ['Woo', 'Lighthouse', 'Labs'];
assertEqual(tail(words3).length, words3.length -1);