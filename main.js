function capitalize(string) {
  return !string
    ? ''
    : string.trimStart().charAt(0).toUpperCase() + string.trimStart().slice(1)
}

function reverseString(string) {
  return !string ? '' : string.split('').reverse().join('')
}

const calculator = {
  add(a, b) {
    return a + b
  },
  subtract(a, b) {
    return a - b
  },
  multiply(a, b) {
    return a * b
  },
  divide(a, b) {
    return a / b
  },
}

function caesarCipher(string, shiftFactor) {
  return string
    .split('')
    .map((char) => {
      if (isNonAlpha(char)) return char
      let shift = handleOverZ(char, shiftFactor)
      return String.fromCharCode(char.charCodeAt(0) + shift)
    })
    .join('')
}

function handleOverZ(char, shiftFactor) {
  let shift = shiftFactor
  while (char.charCodeAt(0) + shift > 122) {
    shift -= 26
  }
  return shift
}

function isNonAlpha(char) {
  if (
    !(
      (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
    )
  )
    return true
}

function analyzeArray(array) {
  return {
    average: array.reduce((arr, curr) => arr + curr, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }
