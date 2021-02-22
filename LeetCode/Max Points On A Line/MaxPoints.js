const maxPoints = (
  points = [
    [1, 1],
    [2, 2],
    [3, 3],
  ],
) => {
  if (points.length === 0) return 0
  let maxPoints = 0
  let dict = {}
  let startX, endX, maxLines

  points.forEach((point) => {
    let currList = dict[point[0]] ?? []
    currList.push(point[1])

    if (startX === undefined || startX > point[0]) startX = point[0]

    if (endX === undefined || endX < point[0]) endX = point[0]

    if (maxLines === undefined || maxLines < currList.length) maxLines = currList.length

    dict[point[0]] = currList
  })

  console.log(dict)
  // console.log(start, end, maxLines, maxLines > Object.keys(dict).length)

  let keys = Object.keys(dict)

  // Vertical line
  if (maxLines > keys.length) {
    keys.forEach((key) => {
      if (dict[key].length > maxPoints) {
        maxPoints = dict[key].length
      }
    })
  } else {
    let lines = {}
    while (maxLines > 0) {
      for (let i = startX; i <= endX; i++) {
        if (dict[i] === undefined) break
      }
      maxLines--
    }
  }

  return maxPoints
}

console.log(maxPoints())
console.log(
  maxPoints([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4],
  ]),
)
console.log(
  maxPoints([
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
  ]),
)
