## Prompt

Given a linked list and a target value, remove all elements from the list that have a value equal to the target value.

Reminder: unless otherwise specified, linked list problems are always _singly_ linked list problems.

Solve in O(n) time and O(1) additional space.

## Time to solve

30 minutes

## Examples

### Example #1

* Input:
  * `3 -> 1 -> 2 -> 3 -> 4 -> 5`
  * target value of `3`
* Output:
  * `1 -> 2 -> 4 ->  5`.

### Example #2

* Input:
  * `1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7`
  * target value of `10`
* Output:
  * `1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7`.


## Reference solution

Strategy: Scan each node and skip the next node if the next node's value is equal to the target.
Use a dummy head to simplify processing so we don't have to special-case the actual head.

Big-O: O(n) time with one pass through the list. No additional space needed, just redirecting pointers.

### Sample data / transformation

```
3 -> 1 -> 2 -> 3 -> 4 -> 5, target: 3

current | current.next | current.next.next | note
null | 3 | 1 | set up, with dummy head
null | 1 | 2 | skip next because next === target
1 | 2 | 3 | update current
1 | 2 | 3 | no-op since next !== target
2 | 3 | 4 | update current
2 | 4 | 5 | skip next because next === target
4 | 5 | null | update current
4 | 5 | null | no-op since next !== target
5 | null | n/a | do nothing since next is null
null | n/a | n/a | STOP since current is null

Final result: skipped first node and fourth node
1 -> 2 -> 4 -> 5
```

### Skeleton

```javascript
const removeValueFromList = function(list, targetValue) {
  // set up dummy head
  // while current
    // while next
      // while the next value is targetValue
        // skip next
  // return the real head
};
```

### Sample implementation

```javascript
const removeValueFromList = function(list, targetValue) {
  const dummyHead = { value: null, next: null };
  dummyHead.next = list;
  let current = dummyHead;
  while (current) {
    while (current.next && current.next.value === targetValue) {
        current.next = current.next.next;
    }        
    current = current.next;
  }
  return dummyHead.next;
};
```