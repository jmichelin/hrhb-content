class DoublyLinkedList {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    let head = new DoublyLinkedList(0, 0);
    let tail = new DoublyLinkedList(0, 0);
    head.next = tail;
    tail.prev = head;
    this.head = head;
    this.tail = tail;
    this.count = 0;
  }

  deleteDoublyLinkedList(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addNodeBeforeHead(node) {
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }

  get(key) {
    if (this.cache[key]) {
      const { value } = this.cacheReturnNode(this.cache[key]);
      return value;
    } else {
      return -1;
    }
  }

  set(key, value) {
    if (this.cache[key]) {
      const node = this.cacheReturnNode(this.cache[key]);
      node.value = value;
    } else {
      this.cache[key] = new DoublyLinkedList(key, value);
      this.addNodeBeforeHead(this.cache[key]);
      if (this.count < this.capacity) {
        this.count++;
      } else {
        delete this.cache[this.tail.prev.key];
        this.deleteDoublyLinkedList(this.tail.prev);
      }
    }
  }

  cacheReturnNode(node) {
    const currentNode = node;
    this.deleteDoublyLinkedList(currentNode);
    this.addNodeBeforeHead(currentNode);
    return currentNode;
  }
}

module.exports = LRUCache;

/*
  Create a cache of a given storage capacity, allow for setting and getting of data where the least
  recently used node is ejected when the cache is full and a new node is inserted. Adding a new node
  to the front and update the node pointers. O(logn)

  Steps
    1.  new cache of size 2
    2.  set 1 = (1)
    3.  set 2 = (1)->(2)
    4.  get 1 = set access flag and return 1
    5.  set 3 = (1)->(3) (2) gets ejected
    6.  get 2 = returns not found
    7.  set 4 = (4)->(3) (1) gets ejected
    8.  get 1 = returns not found
    9.  get 3 = set access flag and return 3
    10. get 4 = set access flag and return 4

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    // set head and tail to new doubly linked list
    this.count = 0;
  }

  deleteDoublyLinkedList(node) {
    // swap next and prev
  }

  addNodeBeforeHead(node) {
    // swap next and head
  }

  get(key) {
    // return key if found
  }

  set(key, value) {
    // if key found in cache return value
    // else insert new key value pair and handle collisions
  }

  cacheReturnNode(node) {
    // move node up in the list and return it
  }
}

 */
