// Path sums:
// 12: 5->3->4
// 10: 5->3->2
// 13: 5->8
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

const hasPathSum = function(node, sum) {
  // base condition #1: if no node, return false.
  // base condition #2: if this is a leaf, return whether the sum matches the current value
  // recurse left and right, decrementing by current value. Return whether either branch is true.
};

// Big-O
// Traverses all nodes. Despite some short-circuiting due to the OR clause, algo is effectively O(n).
