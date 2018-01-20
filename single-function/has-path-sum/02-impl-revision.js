const hasPathSum = function(node, targetSum) {
  if (!node) return false;
  if (!node.left && !node.right) return targetSum === node.val;
  return hasPathSum(node.left, targetSum - node.val) || hasPathSum(node.right, targetSum - node.val);
};

module.exports = hasPathSum;