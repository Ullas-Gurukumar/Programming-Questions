const solution = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let nextValue = null
    let firstStart = arr[i][0]
    let firstEnd = arr[i][1]
    let j
    for (j = i + 1; j < arr.length && nextValue === null; j++) {
      let nextStart = arr[j][0]
      let nextEnd = arr[j][1]
      if (firstEnd < nextStart) {
        nextValue = firstEnd
      } else if (firstEnd < nextEnd) {
        nextValue = nextEnd
      }
    }
    if (i + 1 < j - 1) {
      console.log(j - 1)
      i = j - 1
    }
    result.push([firstStart, nextValue])
  }

  console.log(result)
}

const solution2 = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let firstStart = arr[i][0]
    let firstEnd = arr[i][1]
    let nextStart = arr[i + 1][0]
    let nextEnd = arr[i + 1][1]

    if (result.length !== 0) {
    }
  }

  console.log(result)
}

const mySort = (arr) => {
  console.log(arr.sort((a, b) => a[0] - b[0]))
}

// solution([
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ])
// solution([
//   [1, 4],
//   [4, 5],
// ])

mySort([
  [1, 3],
  [8, 10],
  [2, 6],
  [15, 18],
])
