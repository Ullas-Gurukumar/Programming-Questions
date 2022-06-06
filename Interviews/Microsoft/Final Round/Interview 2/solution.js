//  Olivia Siu
const solution = (arr, k) => {
  result = []

  for (let i = 0; i <= arr.length - k; i++) {
    curr_array = arr.slice(i, i + k)
    let maxValue = Math.max(...curr_array)
    result.push(maxValue)
  }

  return result
}

const solution2 = (arr, k) => {
  result = []

  for (let i = 0; i <= arr.length - k; i++) {
    let maxValue = 0
    for (let j = 0; j < k; j++) {
      maxValue = Math.max(maxValue, arr[i + j])
    }
    result.push(maxValue)
  }

  return result
}

// {
//  (0,2) => 3
//  (1,2) => 3
//  (1,3) => 3
// }
math.max(map((1, 2), arr[3]))
console.log(solution([1, 3, -1, -3, 5, 3, 6, 7], 3))
console.log(solution([1, 3, -1, -3, 5, 3, 6, 7], 1))
