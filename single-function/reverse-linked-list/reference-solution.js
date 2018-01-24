const reverseLinkedList = (head) => { // iterative
  let cur = head;
  let next;
  let temporaryHead = null;

  while(cur) {
    next = cur.next;
    cur.next = temporaryHead;

    if (next) {
      temporaryHead = cur;
      cur = next;
    } else {
      return cur;
    }
  }

  return null;
};

module.exports = reverseLinkedList;

/*
Input: { val: 1, next: { val: 2, next: { val: 3, next: null } } }
Output: { val: 3, next: { val: 2, next: { val: 1, next: null  } } }

Strategy
  Create a place holder and pop each linked list node off starting at the head of the given linked
  list and put it in as the head. Continue until the last item as been placed at the front of the
  new list.

Given: { val: 1, next: { val: 2, next: { val: 3, next: null } } }
Step 1: (1)->(2)->(3) = (1) and (2)->(3)
Step 2: (2)->(1) and (3)
Step 3: (3)->(2)->(1) and done

const reverseLinkedList = (head) => { // iterative
  // Set head as current and create a temporary head

  // Iterate through list until at the end
    // save current nodes next value and point at the head
    // if not at the end of the list
      // set head to current and current to next
   // else return linked list
};

//

Step 2:
  next = { val: 2, next: { val: 3, next: null } }
  cur.next = { val: 1, next: null }
  head = (1)
  cur = { val: 2, next: { val: 3, next: null } }
Step 3:
  cur = { val: 2, next: { val: 3, next: null } }
  next = { val: 3, next: null }
  cur.next = { val: 1, next: null }
  cur = { val: 2, next: { val: 1, next: null } }
  head = { val: 2, next: { val: 1, next: null } }
  cur = { val: 3, next: null }
Step 4:
  next = null
  cur.next = { val: 2, next: { val: 1, next: null } }
  return cur = { val: 3, next: { val: 2, next: { val: 1, next: null } } }
 */
