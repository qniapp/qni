import {UNICODE_FRACTIONS} from './format'

type UnicodeFraction = {character: string; ref: string; value: number}

export class NumberFormatter {
  public allowAbbreviation: boolean
  public maxAbbreviationError: number
  public fixedDigits: number | undefined
  public itemSeparator: string

  static matchUnicodeFraction(predicate: (arrayItem: UnicodeFraction) => boolean): UnicodeFraction | undefined {
    for (const each of UNICODE_FRACTIONS) {
      if (predicate(each)) return each
    }
    return undefined
  }

  constructor(
    allowAbbreviation: boolean,
    maxAbbreviationError: number,
    fixedDigits: number | undefined,
    itemSeparator = ', ',
  ) {
    this.allowAbbreviation = allowAbbreviation
    this.maxAbbreviationError = maxAbbreviationError
    this.fixedDigits = fixedDigits
    this.itemSeparator = itemSeparator
  }

  format(n: number): string {
    if (this.allowAbbreviation) {
      return this.abbreviateNumber(n, this.maxAbbreviationError, this.fixedDigits)
    }
    if (this.fixedDigits !== undefined) {
      return n.toFixed(this.fixedDigits)
    }
    return String(n)
  }

  private abbreviateNumber(value: number, epsilon = 0, digits: number | undefined = undefined): string {
    if (Math.abs(value) < epsilon) return '0'
    if (value < 0) return `-${this.abbreviateNumber(-value, epsilon, digits)}`

    const fraction = NumberFormatter.matchUnicodeFraction(e => Math.abs(e.value - value) <= epsilon)
    if (fraction !== undefined) {
      return fraction.character
    }

    const rootFraction = NumberFormatter.matchUnicodeFraction(e => Math.abs(Math.sqrt(e.value) - value) <= epsilon)
    if (rootFraction !== undefined) {
      return `\u221A${rootFraction.character}`
    }

    if (value % 1 !== 0 && digits !== undefined) {
      return value.toFixed(digits)
    }

    return value.toString()
  }
}
