const combine = (n, k, start = 1, combination = [], output = []) => {
  if (combination.length === k) {
    output.push(combination.slice())
    return output
  }

  for (let i = start; i <= n; i++) {
    combination.push(i)
    combine(n, k, i + 1, combination, output)
    combination.pop()
  }

  return output
}

console.log(combine(4, 2))
