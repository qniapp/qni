import Fraction from 'fraction.js'

export function parseAngle(angle: string): number {
  const coefficient = new Fraction(angle.replace(/(\d+)pi/g, '$1').replace(/pi/g, '1')).valueOf()
  return coefficient * Math.PI
}
