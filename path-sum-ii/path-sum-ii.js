const pathSumII = (root, sum) => {
  let matchingPathsArray = [];

  if (!root) {
    return matchingPathsArray;
  }

  matchingPathsArray = generatePath(matchingPathsArray, root, [], 0, sum)

  return matchingPathsArray;
};

const generatePath = (matchingPathsArray, root, currentPathArray, currentSum, target) => {
  currentPathArray.push(root.val);
  currentSum += root.val;

  if ((currentSum === target) && !root.left && !root.right) {
    matchingPathsArray.push(currentPathArray);
    return matchingPathsArray
  }

  if (root.left) {
    generatePath(matchingPathsArray, root.left, currentPathArray.concat(), currentSum, target);
  }

  if (root.right) {
    generatePath(matchingPathsArray, root.right, currentPathArray.concat(), currentSum, target);
  }
}


module.exports = pathSumII;
