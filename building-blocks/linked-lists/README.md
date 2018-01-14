# Linked lists

## Backstory

Linked lists are not often directly used in your day-to-day coding, but you rely on them constantly under-the-hood. For example, a hashtable implementation that you rely on daily might well have a linked list built into it as part of its collision handling.

In an interview context, linked lists are a handy topic because they require very little code to set up, and they exercise recursive thinking, pointer (reference) management, and visualizing state.

Make sure you are comfortable with the following topics.

## Single vs double

Doubly-linked lists are too easy to work with, so they are hardly ever used in an interview setting.

Don't spend much time asking about it. You can just say in passing, "I'll assume this is a singly-linked list we're talking about here..." and move on.

## Concise literal expression

DO NOT make a big fat `LinkedList` class or even a littler `ListNode` class just to work on a linked list interview problem.

Remember -- most interview problems are old questions, or variations of old questions, and as such they DO NOT need object-oriented machinery in order to be solved. Specifically, they are solvable with the C language, which is simple indeed. It does not even have classes.

Do not write a bunch of class boilerplate when doing a problem. It will just slow you down and make more text you have to manage.

### What to avoid
DO NOT start off a linked list problem by doing this:

```javascript
class LinkedList {
   constructor() {} // blah
  insert() {} // blah
  delete() {} // blah
}
```

And don't even do this:

```javascript
const Node = function(val) {
  this.val = val;
  this.next = null;
};
```

### What to do instead

Rather, unless you are directed otherwise by the interviewer, the following is all you need (in an interview context) in order to represent a linked list:

```javascript
const root = {
  val: 5,
  left: null,
  right: null
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

It's pretty readable to put this one on line, for a small number of nodes:

```javascript
const root = { val: 5, next: { val: 3, next: { val: 7, next: null }}};
```


#### Comparison to alternatives

Note, you _could_ declare node objects individually and wire them together post-creation. It's more writing though, and that means more time and more typos, which leads to even more time.

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

You can try to save a couple lines by adding `next` as a constructor parameter...

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


## Traversal

Linked lists do not afford random access to their contents. You must traverse them node by node, starting at the node you are given (typically the head node).

You traverse a linked list simply by visiting the `next` node until it is null.

This is true in both iterative and recursive traversal.

## Search

Search simply involves traversing until you find the target value or hit the end. Since there is no random access, there is not much else you can do by default.

If you consider optimizing lookup by copying the data from the list nodes into some other data structure, generally that falls out of bounds of typical problems.

## Insert and Delete

These two operations are at the heart of warming up to do linked list problems.

Both involve reshuffling where `next` pointers point to.

Consider the various cases:

* only 1 node
* only 2 nodes
* current node is the head or tail
* target node is the head or tail
