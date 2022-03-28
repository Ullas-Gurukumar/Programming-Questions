const ans = (s) => {
  if (s.length === 1) {
    return s
  }
  let chars = [...s]
  const dict = {}
  let longestPal = {
    char: null,
    indexes: [],
    length: 0,
  }
  chars.forEach((char, index) => {
    if (dict[char]) {
      ;[count, is] = dict[char]
      count++
      is.push(index)
      dict[char] = [count, is]
      for (let i = 0; i < is.length / 2; i++) {
        checkPalindrome(s, chars, is[i], is[is.length - i])
      }
    } else {
      dict[char] = [1, [index]]
    }
  })
  console.log(dict)
}

const checkPalindrome = (s, chars, start, end) => {
  if (start > end) return false

  if (start === end) return true

  const distance = end - start
  if (distance === 1) return chars[start] === chars[end]
  for (let i = 0; i < distance; i++) {
    if (start + i === end - i) return true

    if (chars[start + i] !== chars[end - i - 1]) {
      // console.log(chars[start + i], chars[end - i - 1])
      return false
    }
  }
  return true
}

// console.log(ans('aacabdkacaa'))
// console.log(ans('aa'))
// console.log(ans('a'))
// console.log(ans('babad'))
// console.log(checkPalindrome('aaa', [...'aaa'], 0, 3))
// console.log(checkPalindrome('aba', [...'aba'], 0, 3))
// console.log(checkPalindrome('aaba', [...'aaba'], 0, 4))
// console.log(checkPalindrome('a', [...'a'], 0, 1))
// console.log(checkPalindrome('aa', [...'aa'], 0, 2))
