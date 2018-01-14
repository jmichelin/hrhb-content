// Path Sums:
// 12: 5->3->4
// 10: 5->3->2
// 12: 5->7

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
    val: 7,
    left: null,
    right: null
  },
};

const pathSum = function(node, sum) {
  // base condition: if no node, return empty array
  // recursively traverse left and right pushing nodes value into array
    // if at leaf node and the sum of the array equals target sum push into result array
  // return result array
};

// Big-O
// Traverses all nodes in order to capture every matching path.
// Possible to short-circuit if node.val or current running total is greater than target sum.
// O(n)