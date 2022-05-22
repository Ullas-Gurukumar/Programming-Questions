const minWindow = (s, t) => {
  let t_counts = {}

  for (let i = 0; i < t.length; i++) {
    t_counts[t[i]] = t_counts[t[i]] ? t_counts[t[i]] + 1 : 1
  }

  let minSubstring = null
  for (let start = 0; start <= s.length - t.length; start++) {
    let curr_counts = {}
    end = start + t.length

    for (let j = start; j < end; j++) {
      char = s[j]
      curr_counts[char] = curr_counts[char] ? curr_counts[char] + 1 : 1
    }

    if (isEqual(t_counts, curr_counts) && (minSubstring === null || minSubstring.length > end - start)) {
      minSubstring = s.substring(start, end)
    }

    while (end <= s.length) {
      char = s[end]
      curr_counts[char] = curr_counts[char] ? curr_counts[char] + 1 : 1

      if (isEqual(t_counts, curr_counts) && (minSubstring === null || minSubstring.length > end - start + 1)) {
        minSubstring = s.substring(start, end + 1)
      }

      end++
    }
  }
  return minSubstring ?? ''
}

const isEqual = (a, b) => {
  // console.log(a)
  for (key of Object.keys(a)) {
    if (!(!!b[key] && b[key] >= a[key])) {
      return false
    }
  }
  return true
}

// console.log(minWindow('ADOBECODEBANC', 'ABC'))
// console.log(minWindow('ab', 'a'))
console.log(minWindow('aaflslflsldkalskaaa', 'aaa'))
console.log(
  minWindow(
    'eccdmbeygbucwrqllyocfmnhartzdspkwrnksrjbvdftwyehwtkdhxkjqeiwyyguptfkmqnjvscrqjzoelrnkcwbgfxgffawyhimzvwuqaoilpxpaqcksznagmglrjhrssesncofeeqqtphvfkiylvatijgbsptmhxgvbxcfbsvxjdsppapcypxiydjssefablxckbkmufjfkdubgjfebcozfzuaezafmzkxaulwbwcozwrhizljbbijbcjfdlmskwrkscjwalmzjdhrcuagwlpxpaevlqnvpehhiqfidrjnxsebnhhluykjyoglgvivbsfjiktoedbbxfemomximjunzaygwjdzbijlvezzjachigtwuthhcbwedumzfrbgaksxqryauahciaafthoyikemgqnmhosjamgrggtaiaeraewwmkwwwakcsaozqjltxtkdaddifhbhozdclbahblmtncvdngwlbiobnumsbparpftahwkkhwguabzojwzmenouhcmlroegwajdwvpdtvztyahjwgwdwmxfolqfcvoyxzbtusynozgozqywywbuiycwlsdnprlmqohmhfzxeineyncwjdtrdvpoptehmrvfgdrpiropzdtxrvvayqudljrdcxkrphwvknmvgckfffewaczastdgewjhuvajcwgnlukswwzdbgcdib',
    'fawiiagr',
  ),
)
// console.log(minWindow('ABCA', 'ABCA'))
