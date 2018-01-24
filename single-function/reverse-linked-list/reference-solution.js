const reverseLinkedList = (head) => { // iterative
  let previous = null;
  let current = head;
  let next = null;

  while(current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};

module.exports = reverseLinkedList;

/*
Input: { val: 1, next: { val: 2, next: { val: 3, next: null } } }
Output: { val: 3, next: { val: 2, next: { val: 1, next: null  } } }

Strategy
Iterate each node and update its "next" pointer to point at the previous node.

Example

Given: 1 -> 2 -> 3 -> null

Loop 1:
prev | curr | curr.next | next | note
null | 1    | 2         | null | initial state
null | 1    | 2         | 2    | update next
null | 1    | null      | 2    | point curr.next at previous
1    | 1    | null      | 2    | update previous
1    | 2    | 3         | 2    | update current

Loop 2:
1    | 2    | 3         | 2 | initial state
... repeat above steps...


const reverseLinkedList = (head) => {
  let previous = null;
  let current = head;
  let next = null;

  while(current) {
    // update next
    // update current to point at previous
    // update previous to be current
    // update current to be next
  }

  return previous;
};
*/
