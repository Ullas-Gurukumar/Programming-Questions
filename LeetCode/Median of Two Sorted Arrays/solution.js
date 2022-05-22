const findMedianSortedArrays = (nums1, nums2) => {
  total = nums1.length + nums2.length
  mediumIndexes = []
  if (total % 2 === 0) {
    half_total = total / 2
    mediumIndexes = [half_total - 1, half_total]
  } else {
    mediumIndexes = [(total / 2) | 0]
  }

  let pointer1 = 0
  let pointer2 = 0
  let result = 0

  for (let i = 0; i <= mediumIndexes[mediumIndexes.length - 1]; i++) {
    if ((pointer1 <= nums1.length && nums1[pointer1] <= nums2[pointer2]) || pointer2 >= nums2.length) {
      if (mediumIndexes.indexOf(i) !== -1) {
        result += nums1[pointer1]
      }
      pointer1++
    } else {
      if (mediumIndexes.indexOf(i) !== -1) {
        result += nums2[pointer2]
      }
      pointer2++
    }
  }

  return mediumIndexes.length === 2 ? result / 2 : result
}

// const pickNumber = ()

// console.log(findMedianSortedArrays([1, 2], [3]))

console.log(findMedianSortedArrays([], [1]))
