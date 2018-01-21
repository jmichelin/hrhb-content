const addIntegerLists = require('./submission');

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
    const expected = { val: 7, next: { val: 0, next: { val: 8, next: null } } };

    expect(addIntegerLists(listA, listB)).toEqual(expected);
  });

  it('given two lists, 5->5->4 and 5->4->5 will return 0->0->0->1', () => {
    const listA = {
      val: 5,
      next: {
        val: 5,
        next: {
          val: 4,
          next: null,
        },
      },
    };

    const listB = {
      val: 5,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    };
    const expected = { val: 0, next: { val: 0, next: { val: 0, next: { val: 1, next: null} } } };

    expect(addIntegerLists(listA, listB)).toEqual(expected);
  });

  it('given two lists, 2->1 and 1->2->3 will return 3->3->3', () => {
    const listA = {
      val: 2,
      next: {
        val: 1,
        next: null,
      },
    };

    const listB = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null,
        },
      },
    };
    const expected = { val: 3, next: { val: 3, next: { val: 3, next: null } } };

    expect(addIntegerLists(listA, listB)).toEqual(expected);
  });
});
