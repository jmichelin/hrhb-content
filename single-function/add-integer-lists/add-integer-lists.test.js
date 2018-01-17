const addIntegerLists = require('./02-impl-revision.js');

describe('addIntegerLists', () => {
  it('adds two same-length numbers with no final carry', () => {
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
    let expected = { val: 7, next: { val: 0, next: { val: 8, next: null }}};

    expect(addIntegerLists(listA, listB)).toEqual(expected);
  });


  it('adds two same-length numbers with a final carry', () => {
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
          val: 9,
          next: null,
        },
      },
    };
    let expected = { val: 7, next: { val: 0, next: { val: 3, next: { val: 1, next: null }}}};

    expect(addIntegerLists(listA, listB)).toEqual(expected);
  });

  it('adds two different-length numbers with no final carry', () => {
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
      val: 6,
      next: {
        val: 9,
        next: null,
      },
    };
    let expected = { val: 8, next: { val: 3, next: { val: 4, next: null }}};

    expect(addIntegerLists(listA, listB)).toEqual(expected);
  });
});
