const assertArraysEqua = require('../assertArraysEqual');

// Same arrays
assertArraysEqual([1, 2, 3], [1, 2, 3]);

// Diff arrays
assertArraysEqual([1, 2, 3], [3, 2, 1]);