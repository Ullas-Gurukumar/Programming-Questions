// https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/

const uniqueLetterString = (s) => {
  let allCombo = new Set([s])
  let list = [s]

  const backtrack = (start, curr_string) => {
    if (curr_string.length > 0) {
      allCombo.add(curr_string)
      list.push(curr_string)
    }

    if (start === s.length) {
      return
    }

    for (let i = start; i < s.length; i++) {
      backtrack(i + 1, curr_string + s.charAt(i))
    }
  }

  // backtrack(0, '')

  // let pointer1 = 0
  // let pointer2 = s.length
  // while (pointer1 < pointer2) {
  //   for (let i = pointer1 + 1; i < s.length; i++) {
  //     allCombo.add(s.substring(pointer1, pointer1 + i))
  //     allCombo.add(s.substring(i, pointer2))
  //   }

  //   pointer1++
  //   pointer2--
  // }

  for (let len = 1; len < s.length; len++) {
    for (let start = 0; start < s.length - len; start++) {
      substring = s.substring(start, start + len)
      allCombo.add(substring)
    }
  }
  console.log(allCombo)
}

uniqueLetterString('abc')
