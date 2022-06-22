// a = [1, 3, 5]
// b = [2, 6, 8, 9]
// limit = 3

// => [1, 2, 3]



const mergeLists = (a, b, limit) => {
  let result = []

  let pointer1 = 0
  let pointer2 = 0
  let i = 0
  while (i < limit) {
    if (pointer1 >= a.length && pointer2 >= b.length) {
      return result
    }

    if (pointer1 < a.length && (pointer2 >= b.length || a[pointer1] <= b[pointer2])) {
      result.push(a[pointer1])
      pointer1++
    } else if (pointer2 < b.length && (pointer1 >= a.length || a[pointer1] > b[pointer2])) {
      result.push(b[pointer2])
      pointer2++
    }
    i++
  }

  return result
}

console.log(mergeLists([1, 3, 5], [2, 6, 8, 9], 10)) // 1, 2, 3, 5, 6, 8, 9
console.log(mergeLists([1, 3, 5], [], 3)) // [ 1, 3, 5 ]
console.log(mergeLists([], [2, 6, 8, 9], 3)) // [ 2, 6, 8 ]

// sorted(a+b)[:limit]
// [1, 3, 5, 2, 6, 8, 9]

// limit = n
// 1 : time complexity (O(n*k))  space complexity O(n+k)
// using tree 
// 1 : time complexity (O(n*log(k)))  space complexity O(n+k)