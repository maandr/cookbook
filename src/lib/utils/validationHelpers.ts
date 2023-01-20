/* eslint-disable @typescript-eslint/no-explicit-any */
export function isNumber(value: any): boolean {
  return !isNaN(Number(value))
}

export function isString(value: any): boolean {
  return value !== undefined && typeof value == 'string'
}

export function isAPositiveNumber(value: any): boolean {
  return isNumber(value) && Number(value) > 0
}

export function isANegativeNumber(value: any): boolean {
  return isNumber(value) && Number(value) < 0
}

export function isNumberBetween(value: any, min: number, max: number): boolean {
  return isNumber(value) && Number(value) >= min && Number(value) <= max
}

export function isNotBlank(value: any): boolean {
  return isString(value) && value.trim().length > 0
}

export function isBlank(value: any): boolean {
  return value === undefined || (isString(value) && value.trim().length === 0)
}

export function hasMinLength(value: any, length: number): boolean {
  return isString(value) && value.trim().length >= length
}

export function hasMaxLength(value: any, length: number): boolean {
  return isString(value) && value.trim().length <= length
}
/* eslint-enable @typescript-eslint/no-explicit-any */
