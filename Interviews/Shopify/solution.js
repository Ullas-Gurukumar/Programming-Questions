// Canadian postal codes are in the form "A1A 1A1", where "A" is an upper case letter
// and "1" is a digit. Here is a subset of provinces and territories along with their
// unique set of postal code prefixes:

// Province Code | Prefixes      | Province/Territory Name
// ------------- | ------------- | -----------------------
// ON            | K, L, M, N, P | Ontario
// MB            | R             | Manitoba
// NU            | X0A, X0B, X0C | Nunavut
// NT            | X0E, X0G, X1A | Northwest Territories

// Using that subset:
// 1) Write a `province_for` method which, given a postal code, returns the
//    province code that corresponds, or null if none is found to match
// e.g. province_for("K1P 1K9") => "ON"
//      province_for("R3L 0T9") => "MB"
//      province_for("Q1Q 1Q1") => null # no postal codes start with "Q"
//      province_for("X0C 0E0") => "NU"

// 2) Write a `valid_for` method which, given a postal code and a province code,
//    returns true if the postal code is valid for the province, or false otherwise
// e.g. valid_for("M5W 1E6", "ON") => true
//      valid_for("Z0M 1G2", "ON") => false # no province matches the postal code
//      valid_for("X0E 0T0", "NT") => true
//      valid_for("X0A 0H0", "MB") => false # X0A 0H0 is in NU

ontarioSet = new Set(['K', 'L', 'M', 'N', 'P'])
nunavutSet = new Set(['X0A', 'X0B', 'X0C'])
nwtSet = new Set(['X0E', 'X0G', 'X1A'])
mbSet = new Set(['R'])

console.log(ontarioSet, nunavutSet, nwtSet)

const provinceFor = (postalCode) => {
  firstChar = postalCode.charAt(0)
  if (firstChar === 'R') {
    return 'MB'
  } else if (ontarioSet.has(firstChar)) {
    return 'ON'
  } else if (firstChar === 'X') {
    splitPostalCode = postalCode.split(' ')
    if (nunavutSet.has(splitPostalCode[0])) {
      return 'NU'
    } else if (nwtSet.has(splitPostalCode[0])) {
      return 'NT'
    }
  }

  return null
}

// console.log(provinceFor('R3T 2T9'))

// console.log(provinceFor('M2N 2T9'))

// console.log(provinceFor('X0A 2T9'))

// console.log(provinceFor('X0G 2T9'))

// console.log(provinceFor('F0G 2T9'))

// console.log(provinceFor('K1P 1K9'))
// console.log(provinceFor('R3L 0T9'))
// console.log(provinceFor('Q1Q 1Q1'))
// console.log(provinceFor('X0C 0E0'))

const validFor = (postalCode, prov) => {
  if (prov === 'MB') {
    return postalCode.charAt(0) === 'R'
  } else if (prov === 'ON') {
    return ontarioSet.has(postalCode.charAt(0))
  } else if (prov === 'NU') {
    splitPostalCode = postalCode.split(' ')
    return nunavutSet.has(splitPostalCode[0])
  } else if (prov === 'NT') {
    splitPostalCode = postalCode.split(' ')
    return nwtSet.has(splitPostalCode[0])
  }

  return false
}

//  use provinceFor  coz x, y and z
const validFor2 = (postalCode, prov) => {
  let result = provinceFor(postalCode)

  return result === prov
}

// console.log(validFor('M5W 1E6', 'ON'))
// console.log(validFor('Z0M 1G2', 'ON'))
// console.log(validFor('X0E 0T0', 'NT'))
// console.log(validFor('X0A 0H0', 'MB'))
console.log(validFor2('M5W 1E6', 'ON'))
console.log(validFor2('Z0M 1G2', 'ON'))
console.log(validFor2('X0E 0T0', 'NT'))
console.log(validFor2('X0A 0H0', 'MB'))
