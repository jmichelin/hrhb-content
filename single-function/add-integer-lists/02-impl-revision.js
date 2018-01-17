const addIntegerLists = (listA, listB) => {
  let carryOver = 0;
  const dummyHead = { val: 0, next: null };
  let curr = dummyHead;

  while (listA || listB ) {
    const listAVal = listA !== null ? listA.val : 0;
    const listBVal = listB !== null ? listB.val : 0;
    const sum = listAVal + listBVal + carryOver;
    carryOver = Math.floor(sum / 10);
    curr.next = { val: sum % 10, next: null };
    curr = curr.next;
    if (listA !== null) listA = listA.next;
    if (listB !== null) listB = listB.next;
  }

  if (carryOver > 0) {
    curr.next = { val: carryOver, next: null };
  }

  return dummyHead.next;
};

module.exports = addIntegerLists;
