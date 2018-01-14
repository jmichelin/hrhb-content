const getTargetSumPaths = (root, sum) => {
  if (!root) return [];
  let paths = [];
  let queue = [];
  return buildPath(root, sum, paths, queue);
};

const buildPath = (root, sum, paths, queue) => {
  if (!root) return;
  queue.push(root.val);
  buildPath(root.left, sum, paths, queue);
  if (!root.left && !root.right) {
    let queueSum = queue.reduce((a, b) => a + b);
    if (queueSum === sum) paths.push(queue.slice());
  }
  buildPath(root.right, sum, paths, queue);
  queue.pop();
  return paths;
};

module.exports = getTargetSumPaths;