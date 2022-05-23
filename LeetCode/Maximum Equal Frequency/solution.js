const maxEqualFreq = (nums) => {
  frequency = {}
  result = 0
  nums.forEach((num, index) => {
    if (frequency[num]) {
      frequency[num] = frequency[num] + 1
    } else {
      frequency[num] = 1
    }
    if (verifyFrequency(frequency)) {
      result = index + 1
    }
  })

  return result
}

const verifyFrequency = (freq) => {
  set = new Set()
  freqToNum = {}

  Object.keys(freq).forEach((num) => {
    set.add(freq[num])
    if (freqToNum[freq[num]]) {
      lol = freqToNum[freq[num]]
      lol.push(num)
    } else {
      freqToNum[freq[num]] = [num]
    }
  })
  values = Array.from(set.values())

  nums = Object.values(freqToNum)

  y = nums.length === 2 && (nums[0].length === 1 || nums[1].length === 1)
  x = values.length === 2 && (values[0] === 1 || values[1] === 1 || Math.abs(values[0] - values[1] === 1))
  // console.log(freq, values, x, y)
  return x && y
}

// console.log(maxEqualFreq([2, 2, 1, 1, 5, 3, 3, 5]))
// console.log(maxEqualFreq([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5]))
// console.log(maxEqualFreq([1, 1, 1, 2, 2, 2]))
console.log(maxEqualFreq([[1, 2, 3, 1, 2, 3, 4, 4, 4, 4, 1, 2, 3, 5, 6]]))
