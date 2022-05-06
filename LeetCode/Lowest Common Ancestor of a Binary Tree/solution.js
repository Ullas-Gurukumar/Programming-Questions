const lowestCommonAncestor = (root, p, q) => {
  console.log(p, DFS(root, p, 0))
  console.log(q, DFS(root, q, 0))
}

const DFS = (tree, value, index) => {
  if (tree[index] === value) {
    return [index]
  }

  if (index >= tree.length || tree[index] === null) return []

  //   let leftResult = DFS(tree, value, getLeftNode(index))
  //   let rightResult = DFS(tree, value, getRightNode(index))

  //   if (leftResult.length > 0) console.log(`left ${leftResult}`)
  //   if (rightResult.length > 0) console.log(`right ${rightResult}`)

  //   return [...leftResult, ...rightResult]
  return DFS(tree, value, getLeftNode(index)).concat(DFS(tree, value, getRightNode(index)))
}

const getLeftNode = (index) => index * 2 + 1

const getRightNode = (index) => index * 2 + 2

lowestCommonAncestor([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1)
