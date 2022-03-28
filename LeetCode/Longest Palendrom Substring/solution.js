const findLongestPalindrome = (s) => {
  if (s.length === 1) {
    return s
  }
  let pointer1 = 0
  let pointer2 = s.length - 1
  let longest = {
    str: '',
    index: [],
  }
  while (pointer1 < pointer2) {
    for (let i = pointer1; i < s.length; i++) {
      let start = pointer1
      let end = s.length - 1 - i
      if (start < end && checkPalindrome(s, start, end) && end - start > longest.str.length - 1) {
        longest.str = s.substring(start, end + 1)
        longest.index = [start, end + 1]
      }

      start = pointer1 + i
      end = pointer2
      if (start < end && checkPalindrome(s, start, end) && end - start > longest.str.length - 1) {
        longest.str = s.substring(start, end)
        longest.index = [start, end]
      }
    }

    pointer1++
    pointer2--
  }

  return longest
}

const checkPalindrome = (s, start, end) => {
  if (start === end || start > end) {
    return true
  }

  if (s[start] === s[end]) {
    return checkPalindrome(s, ++start, --end)
  }
  return false
}

console.log(findLongestPalindrome('aa'))
console.log(findLongestPalindrome('a'))
console.log(findLongestPalindrome('babad'))
console.log(findLongestPalindrome('aacabdkacaa'))
