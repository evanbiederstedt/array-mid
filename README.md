[![<evanbiederstedt>](https://circleci.com/gh/evanbiederstedt/array-mid.svg?style=svg)](https://app.circleci.com/pipelines/github/evanbiederstedt/array-mid)
[![NPM version](https://img.shields.io/npm/v/array-mid.svg)](https://www.npmjs.com/package/array-mid)


# array-mid

Get middle element in an N-element array (either left, right, or both elements if N is even)


## Installation

```
npm install array-mid
```


## Usage

```
const mid = require('array-mid');

mid([1, 2, 3, 4, 5]);
//=> [3]

// array with an odd number of elements
let seven = [1, 2, 3, 4, 5, 6, 7];
mid(seven);
//=> [4]
mid(seven, 3, 'left');
//=> [1, 2, 3, 4]
mid(seven, 3, 'right');
//=> [4, 5, 6, 7]

// array with an even number of elements
let six = [1, 2, 3, 4, 5, 6];
mid(six);
//=> [3, 4]
mid(six, 3, 'left');
//=> [1, 2, 3]
mid(six, 3, 'right');
//=> [4, 5, 6]

```

## Background

To be honest, I just wanted to experiment with uploading something (potentially useful) to npm.

Based on [array-first](https://github.com/jonschlinkert/array-first).