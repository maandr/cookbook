import { SLUG_TRANSFORMATIONS } from '$lib/constants'

export function isEqualTo(
  x: string,
  y: string,
  options: { ignoreCase: boolean } = { ignoreCase: false }
): boolean {
  return options.ignoreCase ? x.toLocaleLowerCase() === y.toLocaleLowerCase() : x === y
}

export function contains(
  x: string,
  y: string,
  options: { ignoreCase: boolean } = { ignoreCase: false }
): boolean {
  return options.ignoreCase ? x.toLocaleLowerCase().includes(y.toLocaleLowerCase()) : x.includes(y)
}

export function toSlug(input: string): string {
  return SLUG_TRANSFORMATIONS.reduce(
    (text, transformation) =>
      text.replace(new RegExp(transformation.key, 'g'), transformation.value),
    input.toLocaleLowerCase()
  )
}

export function isNotBlank(value: string): boolean {
  return value.trim().length > 0
}

export function hasMinLength(value: string, length: number): boolean {
  return value.trim().length >= length
}
