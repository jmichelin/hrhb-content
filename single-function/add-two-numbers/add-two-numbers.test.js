const addTwoNumbers = require('./02-impl-revision.js');

describe('addTwoNumbers', () => {
  it('will do the thing', () => {
    const listOne = {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 3,
          next: null,
        },
      },
    };

    const listTwo = {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 4,
          next: null,
        },
      },
    };
    let expected = { val: 7, next: { val: 0, next: { val: 8, next: null } } };

    expect(addTwoNumbers(listOne, listTwo)).toEqual(expected);
  });
});
