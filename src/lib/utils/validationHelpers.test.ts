import { describe, test, expect } from 'vitest'
import {
  hasMinLength,
  isANegativeNumber,
  isAPositiveNumber,
  isBlank,
  isNotBlank,
  isNumber,
  isNumberBetween,
  isString
} from './validationHelpers'

describe('validationHelpers', () => {
  describe('isNumber', () => {
    test.concurrent.each([
      [0, true],
      [1, true],
      [1.23, true],
      [-1, true],
      ['0', true],
      ['1', true],
      ['1.23', true],
      ['-1', true],
      ['', true],
      [' ', true],
      ['1a', false],
      [undefined, false],
      [null, true]
    ])('isNumber(%o) == %s', async (given, expected) => {
      expect(isNumber(given)).toBe(expected)
    })
  })

  describe('isAPositiveNumber', () => {
    test.concurrent.each([
      [0, false],
      [1, true],
      [1.23, true],
      [-1, false],
      ['0', false],
      ['1', true],
      ['1.23', true],
      ['-1', false],
      ['', false],
      [' ', false],
      ['1a', false],
      [undefined, false],
      [null, false]
    ])('isAPositiveNumber(%o) == %s', async (given, expected) => {
      expect(isAPositiveNumber(given)).toBe(expected)
    })
  })

  describe('isANegativeNumber', () => {
    test.concurrent.each([
      [0, false],
      [1, false],
      [1.23, false],
      [-1, true],
      [-1.23, true],
      ['0', false],
      ['1', false],
      ['1.23', false],
      ['-1', true],
      ['-1.23', true],
      ['', false],
      [' ', false],
      ['1a', false],
      [undefined, false],
      [null, false]
    ])('isANegativeNumber(%o) == %s', async (given, expected) => {
      expect(isANegativeNumber(given)).toBe(expected)
    })
  })

  describe('isNumberBetween', () => {
    test.concurrent.each([
      [0, 3, 5, false],
      [3, 3, 5, true],
      [5, 3, 5, true],
      [4, 3, 5, true],
      [6, 3, 5, false],
      ['0', 3, 5, false],
      ['4', 3, 5, true],
      ['', 3, 5, false],
      [undefined, 3, 5, false],
      [null, 3, 5, false]
    ])('isNumberBetween(%o, %o, %o) == %s', async (given, min, max, expected) => {
      expect(isNumberBetween(given, min, max)).toBe(expected)
    })
  })

  describe('isString', () => {
    test.concurrent.each([
      ['', true],
      [' ', true],
      ['a', true],
      ['1', true],
      [1, false],
      [undefined, false],
      [null, false]
    ])('isString(%o) == %s', async (given, expected) => {
      expect(isString(given)).toBe(expected)
    })
  })

  describe('isNotBlank', () => {
    test.concurrent.each([
      ['a', true],
      ['1', true],
      [' ', false],
      ['', false],
      [1, false],
      [undefined, false],
      [null, false]
    ])('isNotBlank(%o) == %s', async (given, expected) => {
      expect(isNotBlank(given)).toBe(expected)
    })
  })

  describe('isBlank', () => {
    test.concurrent.each([
      ['a', false],
      ['1', false],
      [' ', true],
      ['', true],
      [1, false],
      [undefined, true],
      [null, false]
    ])('isBlank(%o) == %s', async (given, expected) => {
      expect(isBlank(given)).toBe(expected)
    })
  })

  describe('hasMinLength', () => {
    test.concurrent.each([
      ['', 3, false],
      ['   ', 3, false],
      ['a', 3, false],
      ['aaa', 3, true],
      ['aaaa', 3, true],
      [111, 3, false],
      [undefined, 3, false],
      [null, 3, false]
    ])('hasMinLength(%o) == %s', async (given, length, expected) => {
      expect(hasMinLength(given, length)).toBe(expected)
    })
  })
})
