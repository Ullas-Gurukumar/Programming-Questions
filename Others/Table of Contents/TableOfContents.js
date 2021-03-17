let arr = [
  { id: 1, name: 'US History', parent_id: null },
  { id: 2, name: 'Third Assignment', parent_id: 3 },
  { id: 3, name: 'First Chapter', parent_id: 1 },
  { id: 4, name: 'Second Assignment', parent_id: 1 },
  { id: 5, name: 'First Assignment', parent_id: 6 },
  { id: 6, name: 'Canadian History', parent_id: null },
]

let dict = {}

const getLevelAndSetChild = (i, childId) => {
  var temp = arr[i - 1]
  let childArray = temp['children'] ?? []

  if (childArray.findIndex((x) => x === childId) === -1) childArray.push(childId)

  temp['children'] = childArray

  if (temp.parent_id === null) {
    return 1
  }

  return getLevelAndSetChild(temp.parent_id, temp.id) + 1
}

arr.forEach((obj) => {
  obj['level'] = obj.parent_id === null ? 0 : getLevelAndSetChild(obj.parent_id, obj.id)
  dict[obj.id] = obj
})

const printChildren = (children = []) => {
  children.forEach((childId) => {
    let child = dict[childId]
    console.log(`${'-'.repeat(child.level)}${child.name}`)
    if (child.children !== undefined) {
      printChildren(child.children)
    }
  })
}

Object.values(dict).forEach((obj) => {
  if (obj.parent_id === null) {
    console.log(obj.name)
    printChildren(obj.children)
  }
})
