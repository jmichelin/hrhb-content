const hasPathSum = require('../../problems/path-sum/path-sum.js');

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
    expect(hasPathSum(root, 10)).toBe(true);
  });

});