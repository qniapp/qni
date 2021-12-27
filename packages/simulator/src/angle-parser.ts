import Fraction from 'fraction.js'

// FIXME: @qni/elements の angle-parser.ts を @qni/common に移動しそちらを使う (フォーマットが nπ なので注意)
export function parseAngle(angle: string): number {
  const coefficient = new Fraction(angle.replace(/(\d+)pi/g, '$1').replace(/pi/g, '1')).valueOf()
  return coefficient * Math.PI
}
