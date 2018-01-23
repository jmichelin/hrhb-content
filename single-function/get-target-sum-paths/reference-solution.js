const buildPath = (root, sum, paths, queue) => {
  if (!root) return [];
  queue.push(root.val);
  buildPath(root.left, sum, paths, queue);
  if (!root.left && !root.right) {
    const queueSum = queue.reduce((a, b) => a + b);
    if (queueSum === sum) paths.push(queue.slice());
  }
  buildPath(root.right, sum, paths, queue);
  queue.pop();
  return paths;
};

const getTargetSumPaths = (root, sum) => {
  if (!root) return [];
  const paths = [];
  const queue = [];
  return buildPath(root, sum, paths, queue);
};

module.exports = getTargetSumPaths;

/*
Path Sums:
Given 12 as sum:
  Step 1: 5->3->4 = 12 matches push
  Step 2: 5->3->2 = 10
  Step 3: 5->7 = 12 matches push
  Step 4: Return [[5,3,4],[5,7]]

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
*/
