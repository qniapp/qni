export function isNumeric(value: string) {
  return /^-?\d+$/.test(value)
}

export function forceSigned(value: number, d: number): string {
  return (value >= 0 ? '+' : '') + value.toFixed(d)
}
