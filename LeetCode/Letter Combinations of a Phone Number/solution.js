// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const telephone_buttons = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}

const letterCombinations = (digits) => {
  let output = []

  if (digits.length === 0) {
    return output
  }

  const backtrack = (index, string) => {
    if (digits.length === index || string.length === digits.length) {
      output.push(string)
      return
    }

    let curr_options = telephone_buttons[digits[index]]
    for (let i = 0; i < curr_options.length; i++) {
      backtrack(index + 1, string + curr_options.charAt(i))
    }
  }

  backtrack(0, '')

  return output
}

console.log(letterCombinations(''))
