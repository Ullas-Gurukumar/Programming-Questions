var divide = (dividend, divisor) => {
  var negativeDividend = dividend < 0
  var negativeDivisor = divisor < 0
  var maxVal = Math.pow(2, 31)

  if (negativeDividend == negativeDivisor) {
    maxVal = maxVal - 1
  }

  var myDividend = Math.abs(dividend)
  var myDivisor = Math.abs(divisor)

  var retVal = 0

  while (myDividend >= myDivisor && retVal < maxVal) {
    myDividend = myDividend - myDivisor
    retVal++
  }

  if (negativeDividend == negativeDivisor) {
    return retVal
  } else {
    return -1 * retVal
  }
}

var ans = divide(10, 3)
console.log(`divide(10, 3) = ${ans}`, ans == 3)

ans = divide(-2147483648, -3)
console.log(`divide(10, 3) = ${ans}`, ans == 715827882)

ans = divide(-2147483648, -1)
console.log(`divide(-2147483648, -1) = ${ans}`, ans == 2147483647)
