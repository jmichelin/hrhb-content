const addIntegerLists = (listA, listB) => {
  const dummyHead = { val: null, next: null };
  let curr = dummyHead;
  let carry = 0;

  while (listA || listB || carry) {
    const valA = listA ? listA.val : 0;
    const valB = listB ? listB.val : 0;

    const sum = valA + valB + carry;
    carry = Math.floor(sum / 10);
    curr.next = { val: sum % 10, next: null };

    curr = curr.next;
    if (listA) listA = listA.next;
    if (listB) listB = listB.next;
  }

  return dummyHead.next;
};

module.exports = addIntegerLists;
