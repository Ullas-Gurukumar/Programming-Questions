var checkPossibility = (nums = [5, 7, 1, 8]) => {
  var isNonDecreasing = true

  var index = 0
  var wrongIndex = []

  while (index < nums.length - 1) {
    if (nums[index] > nums[index + 1]) {
      isNonDecreasing = false
      wrongIndex.push(index)
    }
    index++
  }

  if (wrongIndex.length === 1) {
    wrongIndex = wrongIndex[0]

    if (wrongIndex < nums.length - 2) {
      if (nums[wrongIndex] < nums[wrongIndex + 2]) {
        wrongIndex = wrongIndex + 1
      }
    } else if (wrongIndex + 1 > 1) {
      if (nums[wrongIndex - 1] > nums[wrongIndex + 1]) {
        wrongIndex = wrongIndex + 1
      }
    }

    console.log(nums)
    if (wrongIndex > 0 && wrongIndex < nums.length - 1) {
      nums[wrongIndex] = nums[wrongIndex + 1]
      isNonDecreasing = nums[wrongIndex - 1] <= nums[wrongIndex] && nums[wrongIndex] <= nums[wrongIndex + 1]
    } else if (wrongIndex === 0) {
      nums[wrongIndex] = nums[wrongIndex + 1]
      isNonDecreasing = nums[wrongIndex] <= nums[wrongIndex + 1]
    } else if (wrongIndex === nums.length - 1) {
      nums[wrongIndex] = nums[wrongIndex - 1]
      isNonDecreasing = nums[wrongIndex - 1] <= nums[wrongIndex]
    }
    console.log(nums)
  }

  return isNonDecreasing
}

console.log(checkPossibility())
console.log(checkPossibility([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(checkPossibility([1, 2, 3, 4, 3, 6, 7, 8]))
console.log(checkPossibility([1, 2, 3, 4, 5, 6, 7, 1]))
console.log(checkPossibility([1, 2, 3, 4, 5, 6, 7, 1]))
console.log(checkPossibility([1, 2, 3, 4, 5, 6, 7, 1]))
console.log(checkPossibility([1, 2, 3, 24, 5, 6, 7, 8]))
console.log(checkPossibility([1, 2, 3, 2, 5, 6, 7, 1]))
