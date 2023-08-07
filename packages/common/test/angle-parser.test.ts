import {radian} from '../src/angle-parser'

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
