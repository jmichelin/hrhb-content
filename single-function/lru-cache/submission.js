class DoubleLinkedList {
  constructor (key, value) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache {
  constructor (capacity) {
    this.capacity = capacity;
    this.cache = {};
    let head = new DoubleLinkedList(0, 0);
    let tail = new DoubleLinkedList(0, 0);
    head.next = tail;
    tail.prev = head;
    this.head = head;
    this.tail = tail;
    this.count = 0;
  }

  deleteDoubleLinkedList (node) {
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
      return this.ejectLinkedList(this.cache[key])
    } else {
      return -1;
    }
  }

  set (key, value) {
    if (this.cache[key]) {
      this.ejectLinkedList(this.cache[key]);
      node.value = value;
    } else {
      const node = new DoubleLinkedList(key, value);
      this.addNodeToHead(node);
      this.cache[key] = node;
      if (this.count < this.capacity) {
        this.count++;
      } else {
        delete this.cache[this.tail.prev.key];
        this.deleteDoubleLinkedList(this.tail.prev);
      }
    }
  }

  ejectLinkedList ( item ) {
    const node = item;
    this.deleteDoubleLinkedList(node);
    this.addNodeToHead(node);
    return node.value
  }
}

module.exports = LRUCache;

