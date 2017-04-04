// Minimum
function min(num1, num2) {
  if (num1 < num2) {
    return num1
  }
  return num2
}

// Recursion
function isEven(number) {
  if (number === 0) {
    return true
  } else if (number === 1) {
    return false
  }
  if (number < 0) {
    return isEven(number + 2)
  } else {
    return isEven(number - 2)
  }
}

// Bean Counting
function countBs(str) {
  var bCounter = 0
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === "B") {
      bCounter += 1
    }
  }
  return bCounter
}

function countChar(str, char) {
  var charCounter = 0
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      charCounter += 1
    }
  }
  return charCounter
}
