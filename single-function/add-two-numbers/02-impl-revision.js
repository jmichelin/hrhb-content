const addTwoNumbers = (l1, l2) => {
  let carryOver = 0;
  const dummyHead = { val: 0, next: null };
  let curr = dummyHead;

  while (l1 !== null || l2 !== null) {
    const list1Value = l1 !== null ? l1.val : 0;
    const list2Value = l2 !== null ? l2.val : 0;
    const sum = list1Value + list2Value + carryOver;
    carryOver = Math.floor(sum / 10);
    curr.next = { val: sum % 10, next: null };
    curr = curr.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carryOver > 0) {
    curr.next = { val: carryOver, next: null };
  }

  return dummyHead.next;
};

module.exports = addTwoNumbers;
