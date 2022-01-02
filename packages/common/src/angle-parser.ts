import Fraction from 'fraction.js'

export function radian(angle: string): number {
  const coefficient = piCoefficient(angle)
  const fraction = new Fraction(coefficient).valueOf()

  return fraction * Math.PI
}

export function angleDenominator(angle: string): number {
  const coefficient = piCoefficient(angle)
  const split = coefficient.split('/')

  if (split.length === 1) {
    return 1
  } else if (split.length === 2) {
    return parseInt(split[1])
  } else {
    throw new Error(`Failed to parse angle '${angle}'`)
  }
}

export function angleNumerator(angle: string): number {
  const coefficient = piCoefficient(angle)
  const split = coefficient.split('/')

  if (split.length === 1) {
    return parseInt(split[0])
  } else if (split.length === 2) {
    return parseInt(split[0])
  } else {
    throw new Error(`Failed to parse angle '${angle}'`)
  }
}

export function isAngleLessThan(angle: string, other: string): boolean {
  return new Fraction(piCoefficient(angle)).valueOf() < new Fraction(piCoefficient(other)).valueOf()
}

export function isAngleGreaterThan(angle: string, other: string): boolean {
  return new Fraction(piCoefficient(angle)).valueOf() > new Fraction(piCoefficient(other)).valueOf()
}

export function isValidAngle(angle: string): boolean {
  if (angle === '0') return true
  if (!/π/.test(angle)) return false

  try {
    const coefficient = piCoefficient(angle)
    new Fraction(coefficient).valueOf()

    return true
  } catch (e) {
    return false
  }
}

export function piCoefficient(angle: string): string {
  return angle.replace(/(\d+)π/g, '$1').replace(/π/g, '1')
}

export function reduceAngle(angle: string): string {
  try {
    const coefficient = piCoefficient(angle)
    const reduced = new Fraction(coefficient).toFraction()
    const split = reduced.split('/')
    let numerator: string

    if (split[0] === '1') {
      numerator = `π`
    } else if (split[0] === '-1') {
      numerator = `-π`
    } else {
      numerator = `${split[0]}π`
    }

    if (split.length === 1) {
      return numerator
    } else {
      return `${numerator}/${split[1]}`
    }
  } catch (e) {
    throw new Error(`Failed to parse angle '${angle}'`)
  }
}
