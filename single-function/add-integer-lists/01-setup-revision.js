/*
// Strategy: iterate both number-lists pairwise, summing each pair of digits plus any carry from the previous pair, building a new number-list as we go.
// Big O is of course O(n), have to visit all nodes in both lists.

// Transformation steps (list A value + list B value + carry over)
  Input: (2 -> 4 -> 3), (5 -> 6 -> 4)
  Output: (7 -> 0 -> 8)

Expressed as regular arithmetic:
 342
+465
 ---
 807

We sum each pair of nodes, starting with 0 carry...

2 + 5 (+ 0 carry) = 7; sum is 7, new carry is 0
4 + 6 (+ 0 carry) = 10; sum is 0, new carry is 1
3 + 4 (+ 1 carry) = 8; sum is 8, new carry is 0

Output should be:
{ val: 7, next: { val: 0, next: { val: 8, next: null, }}}


const addIntegerLists = (listA, listB) => {
  // while either list has nodes, or there's any carryover
      // sum the values of each pair of nodes + carryover
      // calculate the current sum and the new carryover
      // append current sum to return list
};
*/