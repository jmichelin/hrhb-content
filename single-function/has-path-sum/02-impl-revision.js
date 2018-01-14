const hasPathSum = function(node, targetSum) {
  if (!node) return targetSum === 0;
  targetSum -= node.val;
  return hasPathSum(node.left, targetSum) || hasPathSum(node.right, targetSum);
};

module.exports = hasPathSum;