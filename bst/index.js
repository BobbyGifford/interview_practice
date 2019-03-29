class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    } else if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return true;
    }

    if (data > this.data && this.right) {
      return this.right.contains(data);
    } else if (data < this.data && this.left) {
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

let list = new Node(10);
list.insert(11);
list.insert(2);
list.insert(1);
list.insert(4);
list.insert(22);

console.log(list.contains(16));
