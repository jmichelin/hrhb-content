## Prompt

> Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

## Example of "path sums"

```
    10
   /  \
  5    20
 / \     \
4   8     30
```

There are 3 path-sums in this example:

* 19 (`10->5->4`)
* 23 (`10->5->8`)
* 60 (`10->20->30`)

## Example of a target path sum

```
            5
           / \
          4   8
         /   / \
        11  13  4
       /  \      \
      7    2      1
```

Given the above binary tree, `hasPathSum(root, 22)` should return `true`, as there exist a root-to-leaf path `5->4->11->2` whose sum is 22.
