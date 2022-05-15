export function isNumeric(value: string) {
  return /^-?\d+$/.test(value)
}

export function forceSigned(value: number, digits = 4): string {
  return (value >= 0 ? '+' : '') + value.toFixed(digits)
}
