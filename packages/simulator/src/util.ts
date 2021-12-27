export function round(n: number, decimal: number): number {
  return Math.round(n * Math.pow(10, decimal)) / Math.pow(10, decimal)
}
