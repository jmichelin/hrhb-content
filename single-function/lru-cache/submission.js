class Node {
  constructor (key, value) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache {
  constructor (capacity) {
    this.capacity = capacity;
    this.cache = {};
    let head = new Node(0, 0);
    let tail = new Node(0, 0);
    head.next = tail;
    tail.prev = head;
    this.head = head;
    this.tail = tail;
    this.count = 0;
  }

  deleteNode (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addNodeToHead (node) {
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }

  get (key) {
    if (this.cache[key]) {
      let node = this.cache[key]
      this.deleteNode(node);
      this.addNodeToHead(node);
      return node.value;
    } else {
      return -1;
    }
  }

  set (key, value) {
    if (this.cache[key]) {
      let node = this.cache[key]
      node.value = value;
      this.deleteNode(node);
      this.addNodeToHead(node);
    } else {
      let node = new Node(key, value);
      this.addNodeToHead(node);
      this.cache[key] = node;
      if (this.count < this.capacity) {
        this.count++;
      } else {
        delete this.cache[this.tail.prev.key];
        this.deleteNode(this.tail.prev);
      }
    }
  }
}

module.exports = LRUCache;

