class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      // If data is less than current data and left exists continue
      this.left.insert(data);
    } else if (data < this.data) {
      // If left does not exist create new left node
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      // If data is less than current data and right exists continue
      this.right.insert(data);
    } else if (data > this.data && this.right) {
      // If left does not exist create new left node
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return false;
  }
}

const validate = (node, min = null, max = null) => {
  // If max exists and data is greater than it, the tree is invalid.
  if (max !== null && node.data > max) {
    return false;
  }

  // If min exists and data is less than it, tree is invalid.
  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }
  return true;
};

let firstNode = new Node(10);
firstNode.insert(11);
firstNode.insert(2);
firstNode.insert(1);
firstNode.insert(4);
firstNode.insert(22);

console.log(firstNode.contains(1));

console.log(validate(firstNode));
