# Linked lists

## Backstory

Linked lists are not often directly used in your day-to-day coding, but you rely on them constantly under-the-hood. For example, a hashtable implementation that you rely on daily might well have a linked list built into it as part of its collision handling.

In an interview context, linked lists are a handy topic because they require very little code to set up, and they exercise recursive thinking, pointer (reference) management, and visualizing state.

Make sure you are comfortable with the following aspects related to linked lists.

## Singly- vs doubly-linked

Doubly-linked lists are too easy to work with, so they are hardly ever used in an interview setting.

Don't spend much time asking about it. You can just say in passing, "I'll assume this is a singly-linked list we're talking about here..." and move on.

## Concise literal expression

DO NOT make a big fat `LinkedList` class just to work on a linked list interview problem.

Generally, do NOT write a bunch of class boilerplate when doing a single-function problem. The extra writing will just slow you down, and you'll have more text to deal with.

### What to avoid

DO NOT start off a linked list problem by making a `LinkedList` class with methods this:

```javascript
class LinkedList {
   constructor() { /* constructor implementation */ }
  insert() { /* method implementation */ }
  delete() { /* method implementation */ }
  // etc...
}
```

In fact, don't even do this:

```javascript
const Node = function(val) {
  this.val = val;
  this.next = null;
};
```

### What to do instead

Just implement your list nodes in JavaScript as raw object literals.

Unless you are directed otherwise by the interviewer, the following is all you need (in an interview context) in order to represent a linked list:

```javascript
const root = {
  val: 5,
  next: null
};
```

You can construct the whole list inline, rapidly, this way:

```javascript
const root = {
  val: 5,
  next: {
    val: 3,
    next: {
      val: 7,
      next: null
    }
  }
};
```

Given a small number of nodes, it's even pretty readable to put this on one line:

```javascript
const root = { val: 5, next: { val: 3, next: { val: 7, next: null }}};
```


#### Comparison to alternative representations

You _could_ declare node objects individually and wire them together post-creation.

It's more writing though, and that means more time and more typos, which leads to even more time.

```javascript
const nodeA = { val: 5, next: null };
const nodeB = { val: 3, next: null };
const nodeC = { val: 7, next: null };

nodeA.next = nodeB;
nodeB.next = nodeC;
```

or...

```javascript
const Node = function(val) {
  this.val = val;
  this.next = null;
};

const nodeA = new Node(5);
const nodeB = new Node(3);
const nodeC = new Node(7);

nodeA.next = nodeB;
nodeB.next = nodeC;
```

You _could_ try to save a couple lines by adding `next` as a constructor parameter...

```javascript
const Node = function(val, nextNode) {
  this.val = val;
  this.next = nextNode;
};

const nodeC = new Node(7);
const nodeB = new Node(3, nodeC);
const nodeA = new Node(5, nodeB);
```

... but then you wind up writing things backwards, which is confusing and leads to mistakes when you are under live performance pressure.

So, unless your interviewer objects, or you really, really hate this style, try sticking with the simple rendering based on JavaScript's object literals:

```javascript
const root = {
  val: 5,
  next: {
    val: 3,
    next: {
      val: 7,
      next: null
    }
  }
};
```

or...

```javascript
const root = { val: 5, next: { val: 3, next: { val: 7, next: null }}};
```

Being able to read and write this style demonstrates your fluency with nested data structures, which is a common, important skill.

## Traversal

Linked lists do not afford random access to their contents. You must traverse them node by node, starting at the node you are given (typically the head node).

You traverse a linked list simply by visiting the `next` node until it is null.

This is true in both iterative and recursive traversal.

## Search

Search simply involves traversing until you find the target value or hit the end, represented by a null value for `next`. Since there is no random access, there is not much else you can do by default.

If you consider optimizing lookup by copying the data from the list nodes into some other data structure, generally that falls out of bounds of typical linked list problems.

## Insert and Delete

These two operations are at the heart of warming up to do linked list problems.

Both involve reshuffling where `next` pointers point to.

Consider the various cases:

* only 1 node
* only 2 nodes
* current node is the head or tail
* target node is the head or tail
