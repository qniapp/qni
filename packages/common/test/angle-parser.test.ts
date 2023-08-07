import {
  angleDenominator,
  angleNumerator,
  isAngleLessThan,
  isAngleGreaterThan,
  isValidAngle,
  radian,
} from '../src/angle-parser'

describe('radian', () => {
  test('0', () => {
    expect(radian('0')).toBe(0)
  })

  test('-2π', () => {
    expect(radian('-2π')).toBe(-2 * Math.PI)
  })

  test('3π/2', () => {
    expect(radian('3π/2')).toBe(Math.PI * (3 / 2))
  })

  test('-3π/2', () => {
    expect(radian('-3π/2')).toBe(-Math.PI * (3 / 2))
  })

  test('π/2', () => {
    expect(radian('π/2')).toBe(Math.PI / 2)
  })

  test('-π/2', () => {
    expect(radian('-π/2')).toBe(-Math.PI / 2)
  })

  test('π', () => {
    expect(radian('π')).toBe(Math.PI)
  })

  test('2π', () => {
    expect(radian('2π')).toBe(Math.PI * 2)
  })
})

describe('angleDenominator', () => {
  test('0', () => {
    expect(angleDenominator('0')).toBe(1)
  })

  test('2π', () => {
    expect(angleDenominator('2π')).toBe(1)
  })

  test('-2π', () => {
    expect(angleDenominator('-2π')).toBe(1)
  })

  test('3π/2', () => {
    expect(angleDenominator('3π/2')).toBe(2)
  })

  test('-3π/2', () => {
    expect(angleDenominator('-3π/2')).toBe(2)
  })

  test('π/3', () => {
    expect(angleDenominator('π/3')).toBe(3)
  })

  test('3π/3', () => {
    expect(angleDenominator('3π/3')).toBe(3)
  })
})

describe('angleNumerator', () => {
  test('0', () => {
    expect(angleNumerator('0')).toBe(0)
  })

  test('2π', () => {
    expect(angleNumerator('2π')).toBe(2)
  })

  test('-2π', () => {
    expect(angleNumerator('-2π')).toBe(-2)
  })

  test('3π/2', () => {
    expect(angleNumerator('3π/2')).toBe(3)
  })

  test('-3π/2', () => {
    expect(angleNumerator('-3π/2')).toBe(-3)
  })

  test('π/3', () => {
    expect(angleNumerator('π/3')).toBe(1)
  })

  test('3π/3', () => {
    expect(angleNumerator('3π/3')).toBe(3)
  })
})

describe('isAngleLessThan', () => {
  test('2π > π', () => {
    expect(isAngleLessThan('2π', 'π')).toBeFalsy()
  })

  test('2π === 2π', () => {
    expect(isAngleLessThan('2π', '2π')).toBeFalsy()
  })

  test('2π < 3π', () => {
    expect(isAngleLessThan('2π', '3π')).toBeTruthy()
  })

  test('2π < 6π/2', () => {
    expect(isAngleLessThan('2π', '6π/2')).toBeTruthy()
  })

  test('-3π < -2π', () => {
    expect(isAngleLessThan('-3π', '-2π')).toBeTruthy()
  })

  test('-6π/2 < -2π', () => {
    expect(isAngleLessThan('-6π/2', '-2π')).toBeTruthy()
  })
})

describe('isAngleGreaterThan', () => {
  test('π < 2π', () => {
    expect(isAngleGreaterThan('π', '2π')).toBeFalsy()
  })

  test('2π === 2π', () => {
    expect(isAngleGreaterThan('2π', '2π')).toBeFalsy()
  })

  test('3π > 2π', () => {
    expect(isAngleGreaterThan('3π', '2π')).toBeTruthy()
  })

  test('6π/2 > 2π', () => {
    expect(isAngleGreaterThan('6π/2', '2π')).toBeTruthy()
  })
})

describe('isValidAngle', () => {
  test('1', () => {
    expect(isValidAngle('1')).toBeFalsy()
  })

  test('0', () => {
    expect(isValidAngle('0')).toBeTruthy()
  })

  test('π/2/3', () => {
    expect(isValidAngle('π/2/3')).toBeFalsy()
  })
})
