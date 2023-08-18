import {NumberFormatter} from '../src/number-formatter'

describe('NumberFormatter', () => {
  test('format', () => {
    const formatter = new NumberFormatter(true, 0, undefined)

    expect(formatter.format(1 / 2)).toBe('½')
    expect(formatter.format(-1 / 2)).toBe('-½')
    expect(formatter.format(Math.sqrt(1 / 2))).toBe('√½')
    expect(formatter.format(-Math.sqrt(1 / 2))).toBe('-√½')
  })
})
