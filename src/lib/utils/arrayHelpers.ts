import { contains, isEqualTo } from './stringHelpers'

export function containsAllSubstrings(source: string[], keys: string[]): boolean {
  return keys.every((key) => source.some((element) => contains(element, key, { ignoreCase: true })))
}

export function containsAll(source: string[], keys: string[]): boolean {
  return keys.every((key) =>
    source.some((element) => isEqualTo(element, key, { ignoreCase: true }))
  )
}
