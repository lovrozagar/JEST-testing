// CAPITALIZE

function capitalize(string) {
  return !string
    ? ''
    : string.trimStart().charAt(0).toUpperCase() + string.trimStart().slice(1)
}

// REVERSE STRING

function reverseString(string) {
  return !string ? '' : string.split('').reverse().join('')
}

// CALCULATOR

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

// CAESAR CIPHER

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

// ANALYZE ARRAY

function analyzeArray(array) {
  return {
    average: average(array),
    min: min(array),
    max: max(array),
    length: length(array),
  }
}

function average(array) {
  return array.reduce((arr, curr) => arr + curr, 0) / array.length
}

function min(array) {
  return Math.min(...array)
}

function max(array) {
  return Math.max(...array)
}

function length(array) {
  return array.length
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }
