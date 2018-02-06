// Part 1
const generatePyramidData = (pyramidHeight) => {
  let result = [];
  let rowLength = (2 * pyramidHeight) - 1;
  let rowMidpoint = Math.floor(rowLength / 2);

  for (let i = 0; i < pyramidHeight; i++) {
    let row = [];
    let currentRow = i;
    let midpointLeftOffset = rowMidpoint - currentRow;
    let midpointRightOffset = rowMidpoint + currentRow;
    for (let j = 0; j < rowLength; j++) {
      if (j >= midpointLeftOffset && j <= midpointRightOffset) {
        row.push(true);
      } else {
        row.push(false);
      }
    }
    result.push(row);
  }
  return result;
};

module.exports = generatePyramidData;

/*
Given an `n` of 3, then the *row length* is `(2 * n) - 1 => 5`.

The *midpoint-column* is `Math.floor(length / 2) => 2`

Now iterate each row, call it `i`.

`midpointLeftOffset = midpoint - currentRow`
`midpointRightOffset = midpoint + currentRow`


```javascript
const generatePyramidData = function(pyramidHeight) {
  // calculate rowLength
  // calculate rowMidpoint

  // iterate each row
    // calculate midpointLeftOffset
    // calculate midpointRightOffset
    // iterate each column
      // append TRUE if column >= midpointLeftOffset && column <= midpointRightOffset
      // ELSE append FALSE
};
```
*/

//es6