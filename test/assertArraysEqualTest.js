const assertArraysEqual = require('../assertArraysEqual');

// Two empty
assertArraysEqual([], []);

// One empty
assertArraysEqual([1, 2, 3], []);

// Same arrays
assertArraysEqual([1, 2, 3], [1, 2, 3]);

// Diff arrays
assertArraysEqual([1, 2, 3], [3, 2, 1]);

// Same arrays
assertArraysEqual(['a','b','c'], ['a','b','c']);

// Diff arrays
assertArraysEqual(['a','b','c'], ['a','b']);