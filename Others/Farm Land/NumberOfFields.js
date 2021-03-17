farm1 = [
  [1, 0, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
]

const checkAdjacent = (i, iLength, j, jLength, farm) => {
  if (i + 1 < iLength && farm[i + 1][j] === 1) {
    farm[i + 1][j] = 0
    checkAdjacent(i + 1, iLength, j, jLength, farm)
  }

  if (i - 1 >= 0 && farm[i - 1][j] === 1) {
    farm[i - 1][j] = 0
    checkAdjacent(i - 1, iLength, j, jLength, farm)
  }

  if (j + 1 < jLength && farm[i][j + 1] === 1) {
    farm[i][j + 1] = 0
    checkAdjacent(i, iLength, j + 1, jLength, farm)
  }

  if (j - 1 >= 0 && farm[i][j - 1] === 1) {
    farm[i][j - 1] = 0
    checkAdjacent(i, iLength, j - 1, jLength, farm)
  }
}

const getNumberOfFields = (farm = farm1) => {
  let numFields = 0
  let rowLength = farm.length
  farm.forEach((row, i) => {
    let fieldLength = row.length
    row.forEach((field, j) => {
      if (field === 1) {
        checkAdjacent(i, rowLength, j, fieldLength, farm)
        field = 0
        numFields++
      }
    })
  })

  return numFields
}

console.log(getNumberOfFields())
