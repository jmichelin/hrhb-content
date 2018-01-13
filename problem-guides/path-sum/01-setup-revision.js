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
  // base condition: if no node, return whether the sum has decremented to exactly 0
  // subtract the current node value from the running sum
  // return whether recursively calling either the left branch OR the right branch resolves to true
};

// Big-O
// Traverses all nodes. Despite some short-circuiting due to the OR clause, algo is effectively O(n).
