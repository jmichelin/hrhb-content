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