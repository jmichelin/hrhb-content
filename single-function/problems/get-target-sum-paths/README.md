## Prompt

> Given a binary tree and a sum, find every root-to-leaf path such that adding up all the values along the path equals the given sum.

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
```

Given the above binary tree, `hasPathSum(root, 22)` should return `[ [5,4,11,2], [5,8,4,5] ]`, as there exist 2 root-to-leaf paths `5->4->11->2` & `5->8->4->5` whose sum is 22.
