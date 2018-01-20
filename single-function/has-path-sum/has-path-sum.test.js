const hasPathSum = require('./02-impl-revision.js');

describe('hasPathSum', () => {

  it('finds an existing path sum', () => {
    const root = {
      val: 5,
      left: {
        val: 3,
        left: {
          val: 4,
          left: null,
          right: null
        },
        right: {
          val: 2,
          right: null,
          left: null
        }
      },
      right: {
        val: 8,
        left: null,
        right: null
      },
    };
    expect(hasPathSum(root, 12)).toBe(true);
  });

  it('finds an existing path sum, ignoring an en route "hit" on the right', () => {
    const root = {
      val: 5,
      left: {
        val: 3,
        left: {
          val: 4,
          left: null,
          right: {
            val: 1,
            left: null,
            right: null,
          }
        },
        right: {
          val: 2,
          right: null,
          left: null
        }
      },
      right: {
        val: 8,
        left: null,
        right: null
      },
    };
    expect(hasPathSum(root, 12)).toBe(false);
    expect(hasPathSum(root, 13)).toBe(true);
  });

  it('finds an existing path sum, ignoring an en route "hit" on the left', () => {
    const root = {
      val: 5,
      left: {
        val: 3,
        left: {
          val: 4,
          left: {
            val: 1,
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          val: 2,
          right: null,
          left: null
        }
      },
      right: {
        val: 8,
        left: null,
        right: null
      },
    };
    expect(hasPathSum(root, 12)).toBe(false);
    expect(hasPathSum(root, 13)).toBe(true);
  });

  it('does not find a non-existing path sum', () => {
    const root = {
      val: 5,
      left: {
        val: 3,
        left: {
          val: 4,
          left: {
            val: 1,
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          val: 2,
          right: null,
          left: null
        }
      },
      right: {
        val: 8,
        left: null,
        right: null
      },
    };

    expect(hasPathSum(root, 5)).toBe(false);
    expect(hasPathSum(root, 8)).toBe(false);
    expect(hasPathSum(root, 12)).toBe(false);
  });

});