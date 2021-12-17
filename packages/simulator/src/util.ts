export function round(n: number, decimal: number): number {
  return Math.round(n * Math.pow(10, decimal)) / Math.pow(10, decimal)
}

export function snappedCosSin(radians: number): number[] {
  const unit = Math.PI / 4
  const i = Math.round(radians / unit)
  if (i * unit === radians) {
    const s = Math.sqrt(0.5)
    const snaps = [
      [1, 0],
      [s, s],
      [0, 1],
      [-s, s],
      [-1, 0],
      [-s, -s],
      [0, -1],
      [s, -s]
    ]
    return snaps[i & 7]
  }
  return [Math.cos(radians), Math.sin(radians)]
}
