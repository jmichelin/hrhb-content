## Prompt

Given an array `a` that contains only numbers in the range from `1` to `a.length`, find the first duplicate number. (See examples below to see what we mean here by the "first" duplicate).

If there are no such elements, return -1.

Note: Your solution should be O(n) runtime and O(1) space.

## Examples

**Example #1**

For `[2, 3, 3, 1, 5, 2]`, the output should be `3`.

There are 2 duplicates: numbers 2 and 3.

The 2nd occurrence of 3 has a smaller index than the 2nd occurrence of 2, so the answer is 3.

**Example #2**

For `[2, 4, 3, 5, 1]`, the output should be `-1`.

---

## Reference solution

```
Strategy: Values are all positive in range, so can use array index along with the negative sign to flag a given number as "seen".

Sample:
[3, 3, 1, 2]
i | a | curr | a[curr] | note
0 | [3, 3, 1, 2] | 3 |
0 | [3, 3, 1, 2] | 3 | check if a[curr] is negative
0 | [3, 3, 1, -2] | 3 | flag a[curr] as seen
1 | [3, 3, 1, -2] | 3 |
1 | [3, 3, 1, -2] | 3 | check if a[curr] is negative >> TRUE
```

```
const firstDuplicate = function(a) {
  // iterate numbers
    // calculate the array index corresponding to the current value
    // check if the value at that array index is flagged seen, i.e., is negative
    // if so, return the current value (which itself might have been flagged/negative, so return its absolute value)
    // otherwise, flag the value at the array index as seen, i.e., make it negative
}
```


```javascript
const firstDuplicate = function(a) {
  for (var i = 0; i < a.length; i++) {
    var currVal = a[i];
    var origCurrVal = Math.abs(currVal); // get real val (might have been flagged as seen)
    var flagIdx = origCurrVal - 1; // adjust flag-index for zero-indexing
    if (a[flagIdx] < 0) return origCurrVal; // check if seen
    a[flagIdx] = a[flagIdx] * -1; // flag as seen
  }
  return -1;
}
```