class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;

    while (currentNode) {
      if (!currentNode.next) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    let previous = this.head;
    let currentNode = this.head.next;

    while (currentNode.next) {
      previous = previous.next;
      currentNode = currentNode.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    let lastNode = this.getLast;
    lastNode.next = new Node(data);
  }

  getAt(index) {
    let counter = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }
    return null;
  }

  removeAt(index) {
    let previous = this.getAt(index - 1);

    previous.next = previous.next.next;
  }

  insertAt(index, data) {
    let previous = this.getAt(index - 1);

    previous.next = new Node(data, previous.next);
  }
}

midpoint = list => {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

isLoop = list => {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

fromEnd = (list, n) => {
  let slow = list.head;
  let fast = list.head;

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};

const firstNode = new Node(10);
const list = new LinkedList();

list.head = firstNode;

list.insertFirst(20);
list.insertFirst(30);
list.insertFirst(70);
list.insertAt(1, 77);
list.removeFirst();
list.insertFirst(80);

console.log(midpoint(list));

// 80 77 30 20 10
