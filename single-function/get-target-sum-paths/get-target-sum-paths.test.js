const getTargetSumPaths = require('../../problems/get-target-sum-paths/get-target-sum-paths');

describe('getTargetSumPaths', () => {
  it('will return empty array if passed in empty root node', () => {
    expect(getTargetSumPaths()).toEqual([]);
  });

  it('will return array of matching paths', () => {
    const root = {
      val: 5,
      left: {
        val: 4,
        left: {
          val: 11,
          left: {
            val: 7,
            left: null,
            right: null
          },
          right: {
            val: 2,
            left: null,
            right: null
          }
        },
        right: null
      },
      right: {
        val: 8,
        left: {
          val: 13,
          left: null,
          right: null
        },
        right: {
          val: 4,
          left: {
            val: 5,
            left: null,
            right: null
          },
          right: {
            val: 1,
            left: null,
            right: null
          }
        }
      }
    };
    const expected = [[5, 4, 11, 2], [5, 8, 4, 5]];
    expect(getTargetSumPaths(root, 22)).toEqual(expected);
  });
});
