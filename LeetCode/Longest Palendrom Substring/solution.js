const findLongestPalindrome = (s) => {
  if (s.length === 0 || s === null) {
    return ''
  }

  let pointer1 = 0
  let pointer2 = s.length - 1
  if (checkPalindrome(s, pointer1, pointer2)) return s
  let longest = {
    str: s[0],
    index: [],
  }
  while (pointer1 < pointer2) {
    for (let i = 0; i < s.length; i++) {
      let start = pointer1
      let end = s.length - 1 - i
      if (start < end && checkPalindrome(s, start, end) && end - start > longest.str.length - 1) {
        longest.str = s.substring(start, end + 1)
        longest.index = [start, end + 1]
      }

      start = i
      end = pointer2
      if (start < end && checkPalindrome(s, start, end) && end - start > longest.str.length - 1) {
        longest.str = s.substring(start, end + 1)
        longest.index = [start, end + 1]
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

console.log(findLongestPalindrome('ac'))
console.log(findLongestPalindrome('zrakcqahaqetwl'))
console.log(
  findLongestPalindrome(
    'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ),
)
// console.log(findLongestPalindrome('babad'))
// console.log(findLongestPalindrome('aacabdkacaa'))
