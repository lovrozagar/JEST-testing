import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './main'

// CAPITALIZE

it('capitalize first', () => {
  expect(capitalize('lovro')).toMatch('Lovro')
})

it('capitalize first space first', () => {
  expect(capitalize(' lovro')).toMatch('Lovro')
})

it('capitalize first empty', () => {
  expect(capitalize('')).toMatch('')
})

// REVERSE STRING

it('reverse string', () => {
  expect(reverseString('lovro')).toMatch('orvol')
})

it('reverse string empty', () => {
  expect(reverseString('')).toMatch('')
})

// CALCULATOR

it('calculator add', () => {
  expect(calculator.add(2, 3)).toBe(5)
})

it('calculator subtract', () => {
  expect(calculator.subtract(2, 3)).toBe(-1)
  expect(calculator.subtract(6, 3)).toBe(3)
})

it('calculator multiply', () => {
  expect(calculator.multiply(2, 3)).toBe(6)
  expect(calculator.multiply(6, 3)).toBe(18)
})

it('calculator divide', () => {
  expect(calculator.divide(3, 3)).toBe(1)
  expect(calculator.divide(3, 14)).toBeCloseTo(0.21428)
  expect(calculator.divide(1, 0)).toBe(Infinity)
})

// CAESAR CIPHER

it('caesar cipher', () => {
  expect(caesarCipher('abc', 3)).toMatch('def')
})

it('caesar cipher case', () => {
  expect(caesarCipher('abcDFg', 3)).toMatch('defGIj')
})

it('caesar cipher special', () => {
  expect(caesarCipher('%^&*!', 1)).toMatch('%^&*!')
})

it('caesar cipher all', () => {
  expect(caesarCipher('abc / def fE', 1)).toMatch('bcd / efg gF')
})

// ANALYZE ARRAY

it('analyze array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
})
