const addIntegerLists = require('./02-impl-revision.js');

describe('addIntegerLists', () => {
  it('given two lists, 2->4->3 and 5->6->4 will return 7->0->8', () => {
    const listA = {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 3,
          next: null,
        },
      },
    };

    const listB = {
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

    expect(addIntegerLists(listA, listB)).toEqual(expected);
  });
});
