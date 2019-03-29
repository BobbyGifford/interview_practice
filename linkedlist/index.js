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
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (!currentNode.next) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      return null;
    }

    let previous = this.head;
    let currentNode = this.head.next;

    while (currentNode.next) {
      previous = currentNode;
      currentNode = currentNode.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    let currentLastNode = this.getLast();

    if (currentLastNode) {
      currentLastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
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
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    }
    // Gets index before removed index
    let previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    // Gets index after removed index and saves it as next.
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
list.insertAt(3, 50);
console.log(midpoint(list));

// console.log(list);

// 70 30 20 10 50
