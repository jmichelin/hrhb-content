## Prompt

Given a linked list of integers, determine whether or not it's a palindrome.

Reminder: unless otherwise specified, linked list problems are always _singly_ linked list problems.

## Time to solve

30 minutes.


## Examples

### Example #1

* Input: `0 -> 1 -> 0`
* Output: `true`

### Example #2

* Input: `1 -> 2 -> 2 -> 3`
* Output: `false`


## Reference solution

Strategy: Use a stack to reverse the order of the list, then compare each element to its reverse. Two passes through the list, one to populate the stack, and one to compare.

Big-O: O(n) time (2n devolves to n), and O(n) additional space due to the stack.

Note: This is mildly time-inefficient because it doesn't stop in the middle, which palindrome solutions can usefully do. More interestingly, it's space-inefficient because of copying all values to a different structure. It's possible to manipulate the list in-place and still solve this. However, this solution is fine for a 30-minute time span, and the "reverse a sequence of values by dumping them into a stack" is a standard technique you should be familiar with.

### Sample data / transformation

```
Example #1
List: 0 -> 1 -> 0
Stack: 0, 1, 0 [top of stack is rightmost]

curr list | popped stack | note
0 | 0 | OK!
1 | 1 | OK!
0 | 0 | OK!

Output: true

Example #2
List: 1 -> 2 -> 2 -> 3
Stack: 1, 2, 2, 3 [top of stack is rightmost]

curr list | popped stack | note
1 | 3 | MISMATCH

Output: false
```


### Skeleton

```javascript
const isListPalindrome = function(list) {
  // set up stack
  // iterate list to push nodes into stack
  
  // iterate list again 
    // pop from stack
    // check if current node value equal's popped node's value

  // return whether all nodes matched
};
```

### Sample implementation

```javascript
const isListPalindrome = function(list) {
  const stack = [];
  
  let curr = list;
  while(curr) {
    stack.push(curr);
    curr = curr.next;
  }
  
  isPalindrome = true;
  curr = list;
  while(curr) {
    if (curr.value !== stack.pop().value) {
      isPalindrome = false;
    }
    curr = curr.next;
  }
  
  return isPalindrome;
};
```