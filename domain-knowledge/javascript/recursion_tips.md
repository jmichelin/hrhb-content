Read me first
-------------

*   [The Three Laws of Recursion](http://interactivepython.org/runestone/static/pythonds/Recursion/TheThreeLawsofRecursion.html)

_Just read this one page (i.e., no need to read other pages in that same e-book) -- even just reading the 3 bullet points is enough._

Recommendation: Start your solution with the base case
------------------------------------------------------

The essence of recursive solutions is breaking the larger problem down into sub-problems. One of those sub-problems will be trivially easy to solve. As such, it represents the "stopping point" for recursion. There's no need to break down the problem further, because it's become so simple that there's nothing else to do.

**Start your solution with this base case.**

When someone glances at your recursive function, it should be dead-simple to spot what the base case / stop condition is.

Typically it will be **at the top of your recursive function**. Because -- if there's nothing else to do, why proceed, right?

### Example of an obvious base case

    const hasPathSum = function(node, targetSum) {
      if (!node) return targetSum === 0;
      // more
      // code
      // here
    };

If you find yourself scattering the base case(s) elsewhere in your function, and/or it's hard to discern what the base case(s) are, at a glance... reconsider your function structure.

Recommendation: avoid the pseudo-global anti-pattern
----------------------------------------------------

We have noticed that many people seem to be following this anti-pattern in recursive solutions:

![](https://i.imgur.com/8ycYXy9.png)

**Please avoid this "inner function" or "pseudo-global" style of doing recursion.**

A variable that is externally visible to all invocations of the function violates the spirit of how these problems are supposed to be solved. Much of the point of recursion is that it abstracts away state into the call stack. If you store your state instead in a global or pseudo-global variable... well, that smears your state around messily, which is hard to maintain.

Breaking the encapsulation of your functions (the clean "known-inputs, known-outputs" pattern) is a dangerous way to code. You'll get side effects for your functions that are harder to reason about.

### A better version

This is a much cleaner version of the above code. It doesn't rely on an inner helper function (or an outer helper function, for that matter).

    const hasPathSum = function(node, targetSum) {  if (!node) return false;  if (!node.left && !node.right) return targetSum === node.val;  return hasPathSum(node.left, targetSum - node.val) || hasPathSum(node.right, targetSum - node.val);};
