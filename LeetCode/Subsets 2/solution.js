// https://leetcode.com/problems/subsets-ii/

const subsetsWithDup = (nums) => {
  // let result = new Set()
  let result = {}

  let temp = []
  const backtrack = (count) => {
    if (count >= nums.length) {
      // if (!result.has(temp)) result.add([...temp])
      if (result[temp] === undefined) result[temp] = [...temp]
      // console.log(temp)
      return
    }
    for (let i = count; i < nums.length; i++) {
      // backtrack(i + 1)
      // result.add([...temp])
      result[temp] = [...temp]
      temp.push(nums[i])
      backtrack(i + 1)
      temp.pop()
    }
  }

  backtrack(0)
  return Object.values(result)
  // return [...result]
}
// console.log(subsetsWithDup([0]))

console.log(subsetsWithDup([1, 2, 2]))
