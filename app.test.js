import {
  addition,
  subtraction,
  multiplication,
  division,
} from './app'

test('adds 1 + 2 to equal 3', () => {
  expect(addition(1, 2)).toBe(3)
})

test('subtraction 3 - 1 to equal 2', () => {
  expect(subtraction(3, 1)).toBe(2)
})

test('multiplication 2 * 2 to equal 4', () => {
  expect(multiplication(2, 2)).toBe(4)
})

test('division 10 / 2 to equal 5', () => {
  expect(division(10, 2)).toBe(5)
})