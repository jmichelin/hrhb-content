/*
// * Setup
/*
  Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

  For example:
  Given the below binary tree and sum = 22,
                5
               / \
              4   8
             /   / \
            11  13  4
           /  \      \
          7    2      1
  return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/
// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = (this.right = null);
}

// * Parse
// input
// @param {TreeNode} root
// {
//   val: number,
//     left: null or node,
//   right: null or node
// }
// @param {number} sum

// output
// @return {boolean}

// Constraints
// path must be root to leaf

// Main Function Name
// hasPathSum(root,sum)

//Strategize
// Brute Force Strategy

// high level overview

// Starting at the root node, map path to each leaf summing values of each node to the leaf
// if the sum when reaching the leaf matches target sum return true otherwise return false

// low level description
/*
  create function hasPath
    return false if no root
    declare result variable
    create traverse() function with node and a total as params
      assign new total to passed in total and the node's value
        if node has a left child
          call traverse function on the left child and new total
        if node has a right child
          call traverse function on the right child and new total
        if node is a leaf
          if new total equals sum
          assign true to result
  call traverse function on the root node and zero as total
  if result equals true
    return true
  else return false
 */
/*
Initial Solution
*/
function hasPathInitial(root, sum) {
  if (!root || root.val === "undefined") return false; // return false if no root

  var result; // declare result variable

  var traverse = function(node, total) {
    // create traverse() function with node and a total as params
    var newTotal = total + node.val; // assign new total to passed in total and the node's value

    if (node.left) {
      // if node has a left child
      traverse(node.left, newTotal); // call traverse function on the left child and new total
    }

    if (node.right) {
      // if node has a right child
      traverse(node.right, newTotal); // call traverse function on the right child and new total
    }

    if (!node.right && !node.left) {
      // if node is a leaf
      if (newTotal == sum) {
        // if new total equals sum
        result = true; // assign true to result
      }
    }
  };

  traverse(root, 0); // call traverse function on the root node and zero as total
  if (result === true) {
    // if result equals true
    return true; // return true
  } else {
    return false;
  } // else return false
}

hasPathInitial(testTree, 11); // true
hasPathInitial(testTree, 200); // false

// Big O Analysis

// worst case we would have to go through every root to leaf path visiting every node O(n)

// Alternative Strategy

// alternative consideration

/*
  refactor helper functions to make it more functional style programing
  work on reducing the number of branches
  look at removing variables that are not needed
  modernize the use of js
*/

// high level overview

/*

Starting at the root node traverse along a path until you come to a leaf, summing node values along the way.
Once a leaf is reached check against the target value and return true if there is a match

*/

// low level description

/*
// function named hasPathSum with a root node and a target sum
    // if no root node return false
    // call function that looks for the sum of a specific path

// function named lookForTargetSum that takes in a node, target sum and the current sum in the stack
  // if no node return false
  // update the current sum with the current node value
  // if new current sum equals the target sum and current node is a leaf -- helper function?
    // return true
  //recurse on left and/or right children check for target sum value going down the left and right path
 */

// Big O Analysis

  // Looks like the best I can do is O(n) for time complexity.

// Implementation
// Plan the construction

// Skeleton
// stub out functions
// sketch out the transformation logic
// factor out helper functions
// Tests
// define some initial tests
// more sample data
// Finish the Implementation
// Main program Logic
// Tests
// Debuggingå

const testTree = {
  val: 5,
  right: {
    val: 8,
    right: {
      val: 12,
      right: {
        val: 13,
        right: null,
        left: null
      },
      left: {
        val: 13,
        right: null,
        left: null
      }
    },
    left: null
  },
  left: {
    val: 3,
    right: {
      val: 4,
      right: null,
      left: null
    },
    left: {
      val: 2,
      right: null,
      left: null
    }
  }
};

const hasPathSumRefactor = (root, sum) => {
  if (root === null) {
    return false;
  }

  return lookForTargetSum(root, sum, 0);
};

const lookForTargetSum = (node, targetSum, curSum) => {
  if (node === null) {
    return false;
  }

  curSum = node.val + curSum;

  if (curSum === targetSum && isLeafNode(node)) {
    return true;
  }

  return lookForTargetSum(node.left, targetSum, curSum) || lookForTargetSum(node.right, targetSum, curSum);
};

const isLeafNode = node => {
  return !node.left && !node.right;
};

hasPathSumRefactor(testTree, 11); // true
hasPathSumRefactor(testTree, 200); // false


*/


const foo = () => true;

module.exports = foo;
