class Node {
  constructor(parent, val, left = null, right = null) {
    this.parent = parent
    this.val = val
    this.left = left
    this.right = right
  }

  isLeaf() {
    return this.left === null && this.right === null
  }

  insert(node) {
    if (node.val <= this.val) {
      if (this.left === null) {
        this.left = node
        node.parent = this
      } else {
        this.left.insert(node)
      }
    } else {
      if (this.right === null) {
        this.right = node
        node.parent = this
      } else {
        this.right.insert(node)
      }
    }
  }

  print(level) {
    if (this.left !== null) {
      this.left.print(level + 1)
    } else {
      // console.log(`level ${level}, Left : NULL`)
    }

    console.log(`level ${level}, ${this.val}`, `isLeaf: ${this.isLeaf()}`)

    if (this.right !== null) {
      this.right.print(level + 1)
    } else {
      // console.log(`level ${level}, Right : NULL`)
    }
  }

  reverse() {
    if (this.right !== null) {
      this.right.reverse()
    }
    if (this.left !== null) {
      this.left.reverse()
    }

    ;[this.right, this.left] = [this.left, this.right]
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root
  }

  insert(node) {
    this.root.insert(node)
  }

  print() {
    this.root.print(1)
  }

  reverse() {
    this.root.reverse()
  }
}

var random = Math.floor(Math.random() * 20)
var nodeList = []
var tree = new BinaryTree(new Node(null, Math.floor(Math.random() * 100)))

for (var i = 0; i < random; i++) {
  let newNode = new Node(null, Math.floor(Math.random() * 100))
  nodeList.push(newNode)
  tree.insert(newNode)
}

tree.print()

tree.reverse()
console.log('\nReversed!\n')
tree.print()
