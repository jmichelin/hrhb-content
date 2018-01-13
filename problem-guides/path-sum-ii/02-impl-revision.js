const pathSumII = (root, sum) => {
  if (!root) return [];
  let paths = [];
  let queue = [];
  return pathBuilder(root, sum, paths, queue);
};

const pathBuilder = (root, sum, paths, queue) => {
  if (!root) return;
  queue.push(root.val);
  pathBuilder(root.left, sum, paths, queue);
  if (!root.left && !root.right) {
    let queueSum = queue.reduce((a, b) => a + b);
    if (queueSum === sum) paths.push(queue.slice());
  }
  pathBuilder(root.right, sum, paths, queue);
  queue.pop();
  return paths;
};

module.exports = pathSumII;