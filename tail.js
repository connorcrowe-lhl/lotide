const assertEqual = function(actual, expected) {

};

const tail = function(array) {

};

const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2)

const words = ['Yo yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);