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
