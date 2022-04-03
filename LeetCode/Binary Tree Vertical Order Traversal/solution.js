class Tree {
  constructor(root) {
    this.root = root
  }
}

class Node {
  constructor(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const printNode = (tree, index) => {
  if (index >= tree.length) return
  console.log(tree[index])
  ;[_, leftIndex] = getLeftNode(tree, index)
  printNode(tree, leftIndex)
  ;[_, rightIndex] = getRightNode(tree, index)
  printNode(tree, rightIndex)
}

const verticalOrder = (tree) => {
  if (tree === null) {
    return
  }
  let map = {}
  verticalOrderTraversal(tree, 0, map, 0)

  orderedKeys = Object.keys(map).sort(compareTo)

  return orderedKeys.map((key) => map[key])
}

const compareTo = (a, b) => {
  const numA = Number(a)
  const numB = Number(b)
  if (numA < numB) {
    return -1
  }

  if (numA > numB) {
    return 1
  }

  return 0
}

const verticalOrderTraversal = (tree, index, map, currentOrder) => {
  if (index >= tree.length || tree[index] === null) return
  if (map[currentOrder]) {
    map[currentOrder].push(tree[index])
  } else {
    map[currentOrder] = [tree[index]]
  }
  ;[_, leftIndex, leftOrder] = getLeftNode(tree, index, currentOrder)
  verticalOrderTraversal(tree, leftIndex, map, leftOrder)
  ;[_, rightIndex, rightOrder] = getRightNode(tree, index, currentOrder)
  verticalOrderTraversal(tree, rightIndex, map, rightOrder)
}

const getLeftNode = (tree, index, currentOrder) => {
  const leftNodeIndex = index * 2 + 1
  return [tree[leftNodeIndex], leftNodeIndex, --currentOrder]
}

const getRightNode = (tree, index, currentOrder) => {
  const rightNodeIndex = index * 2 + 2
  return [tree[rightNodeIndex], rightNodeIndex, ++currentOrder]
}

console.log(verticalOrder([3, 9, 20, null, null, 15, 7]))
console.log(verticalOrder([3, 9, 8, 4, 0, 1, 7]))
console.log(verticalOrder([3, 9, 8, 4, 0, 1, 7, null, null, null, 2, 5]))
// console.log(verticalOrder([3, 9, 20, null, null, 15, 7]))
