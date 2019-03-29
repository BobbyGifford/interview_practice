class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    let arr = [this.root];

    while (arr.length) {
      node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }

  travserseDF(fn) {
    let arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }

  levelWidth(root) {}
}
