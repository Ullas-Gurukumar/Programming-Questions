// https://leetcode.com/problems/longest-increasing-subsequence/

const lengthOfLIS = (nums) => {
  let pointer1 = 0
  let longest = 0

  while (pointer1 < nums.length) {
    let prev_num1 = null
    let curr_length1 = 0

    for (let i = pointer1; i < nums.length; i++) {
      if (prev_num1 === null || prev_num1 < nums[i]) {
        curr_length1++
        prev_num1 = nums[i]
      }
    }
    longest = Math.max(longest, curr_length1)
    pointer1++
  }

  return longest
}

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]))
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))
