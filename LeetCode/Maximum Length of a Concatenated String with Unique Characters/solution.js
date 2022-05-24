const maxLength = (arr) => {
  let result = 0
  const backtrack = (index, curr_string) => {
    let set = new Set(curr_string)
    if (curr_string.length === set.size) {
      result = Math.max(result, curr_string.length)
    }

    if (index >= arr.length) {
      return
    }

    backtrack(index + 1, curr_string + arr[index])
    backtrack(index + 1, curr_string)
  }

  backtrack(0, '')

  return result
}

// maxLength(['un', 'iq', 'ue'])

console.log(maxLength(['cha', 'r', 'act', 'ers']))
