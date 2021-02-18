var deliciousness = [1, 3, 5, 7, 9]

const countPairs = () => {
  let totalPairs = 0
  for (let i = 0; i < deliciousness.length; i++) {
    for (let ii = i + 1; ii < deliciousness.length; ii++) {
      let sumMeal = deliciousness[i] + deliciousness[ii]
      let rootSumMeal = Math.log(sumMeal) / Math.log(2)
      // console.log(deliciousness[i], deliciousness[ii], rootSumMeal)
      if (rootSumMeal % 1 === 0) {
        totalPairs++
      }
    }
  }
  return totalPairs
}

console.log(countPairs())
