type UnicodeFraction = { character: string; ref: string; value: number }

export const UNICODE_FRACTIONS = [
  { character: "\u00BD", ref: "½", expanded: "1/2", value: 1 / 2 },
  { character: "\u00BC", ref: "¼", expanded: "1/4", value: 1 / 4 },
  { character: "\u00BE", ref: "¾", expanded: "3/4", value: 3 / 4 },
  { character: "\u2153", ref: "⅓", expanded: "1/3", value: 1 / 3 },
  { character: "\u2154", ref: "⅔", expanded: "2/3", value: 2 / 3 },
  { character: "\u2155", ref: "⅕", expanded: "1/5", value: 1 / 5 },
  { character: "\u2156", ref: "⅖", expanded: "2/5", value: 2 / 5 },
  { character: "\u2157", ref: "⅗", expanded: "3/5", value: 3 / 5 },
  { character: "\u2158", ref: "⅘", expanded: "4/5", value: 4 / 5 },
  { character: "\u2159", ref: "⅙", expanded: "1/6", value: 1 / 6 },
  { character: "\u215A", ref: "⅚", expanded: "5/6", value: 5 / 6 },
  { character: "\u2150", ref: "⅐", expanded: "1/7", value: 1 / 7 },
  { character: "\u215B", ref: "⅛", expanded: "1/8", value: 1 / 8 },
  { character: "\u215C", ref: "⅜", expanded: "3/8", value: 3 / 8 },
  { character: "\u215D", ref: "⅝", expanded: "5/8", value: 5 / 8 },
  { character: "\u215E", ref: "⅞", expanded: "7/8", value: 7 / 8 },
  { character: "\u2151", ref: "⅑", expanded: "1/9", value: 1 / 9 },
  { character: "\u2152", ref: "⅒", expanded: "1/10", value: 1 / 10 },
]

/**
 * Stores formatting options, for determining what string output should look
 * like.
 */
export class Format {
  /**
   * Returns an approximated result, but with the constraint that when it
   * changes slightly it should "look the same". (It should look good when
   * varying and animated.)
   */
  static readonly CONSISTENT = new Format(false, 0, 2, ", ")

  /**
   * Returns an accurate result, but favoring looking nice over being small.
   */
  static readonly EXACT = new Format(true, 0, undefined, ", ")

  /**
   * Returns an accurate result, favoring being small over looking nice.
   */
  static readonly MINIFIED = new Format(true, 0, undefined, ",")

  /**
   * Returns an approximated result, strongly favoring looking nice.
   */
  static readonly SIMPLIFIED = new Format(true, 0.0005, 3, ", ")

  /**
   * Parses the given text into a float. Works for text created by
   * [[formatFloat]].
   */
  static parseFloat(text: string): number {
    if (text.length === 0) {
      throw new Error("Not a number: '" + text + "'")
    }
    if (text[0] === "-") {
      return -Format.parseFloat(text.substr(1))
    }
    if (text[0] === "\u221A") {
      return Math.sqrt(Format.parseFloat(text.substr(1)))
    }

    const fraction = Format.matchUnicodeFraction((e) => e.character === text)
    if (fraction !== undefined) {
      return fraction.value
    }

    const result = parseFloat(text)
    if (isNaN(result)) {
      throw new Error("Not a number: '" + text + "'")
    }
    return result
  }

  /**
   * Corrects a value to a nearby simple fraction or root thereof, such as
   * sqrt(1/2), so it can be printed compactly.
   *
   * @param value  The value to round.
   * @param epsilon  The maximum offset error introduced by the rounding.
   */
  static simplifyByRounding(value: number, epsilon: number): number {
    if (value < 0) {
      return -Format.simplifyByRounding(-value, epsilon)
    }

    const r = value % 1
    if (r <= epsilon || 1 - r <= epsilon) {
      return Math.round(value)
    }

    const fraction = Format.matchUnicodeFraction(
      (e) => Math.abs(e.value - value) <= epsilon,
    )
    if (fraction !== undefined) {
      return fraction.value
    }

    const rootFraction = Format.matchUnicodeFraction(
      (e) => Math.abs(Math.sqrt(e.value) - value) <= epsilon,
    )
    if (rootFraction !== undefined) {
      return Math.sqrt(rootFraction.value)
    }

    return value
  }

  /**
   * Returns the first element of an array matching the given predicate, or else
   * returns undefined.
   *
   * @hidden
   */
  static matchUnicodeFraction(
    predicate: (arrayItem: UnicodeFraction) => boolean,
  ): UnicodeFraction | undefined {
    for (const each of UNICODE_FRACTIONS) {
      if (predicate(each)) return each
    }
    return undefined
  }

  public allowAbbreviation: boolean
  public maxAbbreviationError: number
  public fixedDigits: number | undefined
  public itemSeparator: string

  /**
   * @param allowAbbreviation  Should outputs be shortened, if possible?
   * @param maxAbbreviationError  How much error is abbreviating allowed to introduce?
   * @param fixedDigits  Use toFixed? How many digits?
   * @param itemSeparator  What should list items be separated by?
   */
  constructor(
    allowAbbreviation: boolean,
    maxAbbreviationError: number,
    fixedDigits: number | undefined,
    itemSeparator: string,
  ) {
    this.allowAbbreviation = allowAbbreviation
    this.maxAbbreviationError = maxAbbreviationError
    this.fixedDigits = fixedDigits
    this.itemSeparator = itemSeparator
  }

  formatFloat(f: number): string {
    if (this.allowAbbreviation) {
      return this.abbreviateFloat(
        f,
        this.maxAbbreviationError,
        this.fixedDigits,
      )
    }
    if (this.fixedDigits !== undefined) {
      return f.toFixed(this.fixedDigits)
    }
    return String(f)
  }

  /**
   * Returns a string representation of a float, taking advantage of unicode
   * fractions and square roots.
   *
   * @param value  The value to represent as a string.
   * @param epsilon  The maximum error introduced by using an expression.
   * @param digits  digits The number of digits to use if no expression matches.
   */
  private abbreviateFloat(
    value: number,
    epsilon = 0,
    digits: number | undefined = undefined,
  ): string {
    if (Math.abs(value) < epsilon) return "0"
    if (value < 0) return "-" + this.abbreviateFloat(-value, epsilon, digits)

    const fraction = Format.matchUnicodeFraction(
      (e) => Math.abs(e.value - value) <= epsilon,
    )
    if (fraction !== undefined) {
      return fraction.character
    }

    const rootFraction = Format.matchUnicodeFraction(
      (e) => Math.abs(Math.sqrt(e.value) - value) <= epsilon,
    )
    if (rootFraction !== undefined) {
      return "\u221A" + rootFraction.character
    }

    if (value % 1 !== 0 && digits !== undefined) {
      return value.toFixed(digits)
    }

    return value.toString()
  }
}
