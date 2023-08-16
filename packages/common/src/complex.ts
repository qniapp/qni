import {NumberFormatter} from './number-formatter'
import {ok, err, Result} from 'neverthrow'

type FormatOptions = {
  allowAbbreviation?: boolean
  maxAbbreviationError?: number
  fixedDigits?: number | undefined
}

const DEFAULT_FORMAT_OPTIONS = {
  allowAbbreviation: true,
  maxAbbreviationError: 0,
  fixedDigits: undefined,
}

export class Complex {
  static readonly ZERO = new Complex(0, 0)
  static readonly ONE = new Complex(1, 0)
  static readonly I = new Complex(0, 1)

  public real: number
  public imag: number

  /**
   * Converts the given value to a Complex value.
   *
   * @param value - The value to convert to a Complex value
   */
  static from(value: number | Complex): Complex {
    if (typeof value === 'number') {
      return new Complex(value, 0)
    }

    return value
  }

  /**
   * Returns the real part of a Complex or a number value.
   *
   * @param value - The value to get the real part of
   */
  static real(value: number | Complex): number {
    if (typeof value === 'number') {
      return value
    }

    return value.real
  }

  /**
   * Returns the imaginary part of a Complex value, or else 0 for number values.
   *
   * @param value - The value to get the imaginary part of
   */
  static imag(value: number | Complex): number {
    if (typeof value === 'number') {
      return 0
    }

    return value.imag
  }

  /**
   * Returns a new Complex number with the given magnitude and phase.
   *
   * @param magnitude - The magnitude of the complex number
   * @param phase - The phase of the complex number
   */
  static polar(magnitude: number, phase: number): Complex {
    const [cos, sin] = this.cosAndSin(phase)

    return new Complex(magnitude * cos, magnitude * sin)
  }

  private static cosAndSin(radians: number): number[] {
    const unit = Math.PI / 4
    const i = Math.round(radians / unit)
    if (i * unit === radians) {
      const s = Math.sqrt(0.5)
      const snaps = [
        [1, 0], // 0
        [s, s], // π/4
        [0, 1], // π/2
        [-s, s], // 3π/4
        [-1, 0], // π
        [-s, -s], // 5π/4
        [0, -1], // 3π/2
        [s, -s], // 7π/4
      ]
      return snaps[i & 7]
    }
    return [Math.cos(radians), Math.sin(radians)]
  }

  /**
   * @param real - The real part of the complex number
   * @param imag - The imaginary part of the complex number
   */
  constructor(real: number, imag: number) {
    this.real = real
    this.imag = imag

    this.isApproximatelyEqualTo = this.nearlyEq // alias for nearlyEq
    this.isEqualTo = this.eq // alias for eq
    this.conj = this.conjugate // alias for conjugate
    this.plus = this.add // alias for add
    // aliases for sub
    this.subtract = this.sub
    this.minus = this.sub
    // aliases for mult
    this.multiply = this.mult
    this.times = this.mult
    this.dividedBy = this.div // alias for div
    this.magnitude = this.abs // alias for abs
    this.norm2 = this.abs2 // alias for abs2
    // aliases for arg
    this.angle = this.arg
    this.phase = this.arg
  }

  /**
   * Returns true if complex number is equal to other.
   *
   * @param other - The other value to compare with
   */
  eq(other: unknown): boolean {
    if (typeof other === 'number') {
      return this.real === other && this.imag === 0
    }
    if (other instanceof Complex) {
      return this.real === other.real && this.imag === other.imag
    }
    return false
  }

  isEqualTo = this.eq.bind(this)

  /**
   * Returns true if the complex number is close to the value of other.
   *
   * @param other - The other value to compare with
   */
  nearlyEq(other: number | Complex | unknown, epsilon: number): boolean {
    if (typeof other === 'number' || other instanceof Complex) {
      const d = this.sub(Complex.from(other))
      return Math.abs(d.real) <= epsilon && Math.abs(d.imag) <= epsilon && d.abs() <= epsilon
    }
    return false
  }

  isApproximatelyEqualTo = this.nearlyEq.bind(this)

  /**
   * Returns the complex conjugate.
   *
   * @returns A new Complex representing the complex conjugate of this complex number
   */
  conjugate(): Complex {
    return new Complex(this.real, -this.imag)
  }

  conj = this.conjugate.bind(this)

  /**
   * Returns negation of the value.
   *
   * @returns A new Complex representing the negation of this complex number.
   */
  neg(): Complex {
    return new Complex(-this.real, -this.imag)
  }

  /**
   * Returns the sum of this complex number and value.
   *
   * @param value - The addend number.
   * @returns A new Complex representing the sum of this complex number and value.
   */
  add(value: number | Complex): Complex {
    const c = Complex.from(value)

    return new Complex(this.real + c.real, this.imag + c.imag)
  }

  plus = this.add.bind(this)

  /**
   * Returns the subtraction of this complex number and value.
   *
   * @param value - The subtrahend number.
   * @returns A new Complex representing the subtraction of this complex number and value.
   */
  sub(value: number | Complex): Complex {
    const c = Complex.from(value)

    return new Complex(this.real - c.real, this.imag - c.imag)
  }

  subtract = this.sub.bind(this)
  minus = this.sub.bind(this)

  /**
   * Returns the product of this complex number and value.
   *
   * @param value - The multiplier number.
   * @returns A new Complex representing the product of this complex number and value.
   */
  mult(value: number | Complex): Complex {
    const c = Complex.from(value)

    return new Complex(this.real * c.real - this.imag * c.imag, this.real * c.imag + this.imag * c.real)
  }

  multiply = this.mult.bind(this)
  times = this.mult.bind(this)

  /**
   * Returns a complex number divided by value.
   * If value is zero, returns an error.
   *
   * @param value - The divisor number.
   * @returns A Result object with the result of division or a division-by-zero error.
   * @example
   * ```
   * const res = new Complex(2, 3).div(2)
   * if (res.isOk()) {
   *   console.log(res.value) // Complex { real: 1, imag: 1.5 }
   * } else {
   *   console.error(res.error)
   * }
   * ```
   */
  div(value: number | Complex): Result<Complex, Error> {
    const c = Complex.from(value)
    const d = c.abs2()
    if (d === 0) {
      return err(Error('Division by Zero'))
    }

    const n = this.mult(c.conjugate())
    return ok(new Complex(n.real / d, n.imag / d))
  }

  dividedBy = this.div.bind(this)

  /**
   * Returns the absolute part of its polar form.
   *
   * @returns A number representing the absolute part of its polar form.
   * @example
   * ```
   * new Complex(-1, 0).abs() // 1
   * new Complex(3, 4).abs() // 5
   * ```
   */
  abs(): number {
    return Math.sqrt(this.abs2())
  }

  magnitude = this.abs.bind(this)

  /**
   * Returns square of the absolute value.
   *
   * @returns A number representing the square of the absolute value.
   * @example
   * ```
   * new Complex(-1, 0).abs2() // 1
   * new Complex(3, 4).abs2() // 25
   * ```
   */
  abs2(): number {
    return this.real * this.real + this.imag * this.imag
  }

  norm2 = this.abs2.bind(this)

  /**
   * Returns the angle part of its polar form.
   *
   * @returns A number representing the angle part of its polar form in radians.
   */
  arg(): number {
    return Math.atan2(this.imag, this.real)
  }

  angle = this.arg.bind(this)
  phase = this.arg.bind(this)

  /**
   * Returns the exponentiation of a complex number. That is c.pow(x) = c^x.
   *
   * @param exponent - the exponent number
   * @returns A number representing base taken to the power of exponent
   */
  pow(exponent: number | Complex): Complex {
    if (exponent === 0.5 && this.imag === 0 && this.real >= 0) {
      return new Complex(Math.sqrt(this.real), 0)
    }
    if (this.eq(Complex.ZERO)) {
      return Complex.ZERO
    }
    return this.ln().mult(Complex.from(exponent)).exp()
  }

  /**
   * Returns a string representing this complex number according to the specified format.
   *
   * @param options - An object that sets the format options for this complex number.
   * @returns A string representing this complex number.
   * @example
   * ```
   * new Complex(1, 2).format() // '1+2i'
   * new Complex(1, 2).format({
   *   allowAbbreviation: false,
   *   fixedDigits: 2,
   * }) // '+1.00+2.00i'
   * ```
   */
  format(options: FormatOptions = DEFAULT_FORMAT_OPTIONS): string {
    const format = new NumberFormatter(
      options.allowAbbreviation === undefined ? DEFAULT_FORMAT_OPTIONS.allowAbbreviation : options.allowAbbreviation,
      options.maxAbbreviationError || 0,
      options.fixedDigits,
    )
    return format.allowAbbreviation ? this.toStringAllowSingleValue(format) : this.toStringBothValues(format)
  }

  /**
   * Returns a compact string representing this Complex number.
   *
   * @returns A string representing this complex number.
   * @example
   * ```
   * new Complex(1, 2).toString() // '1+2i'
   * new Complex(Math.sqrt(1 / 2), -1 / 3).toString() // '√½-⅓i'
   * ```
   */
  toString(): string {
    const formatter = new NumberFormatter(
      DEFAULT_FORMAT_OPTIONS.allowAbbreviation,
      DEFAULT_FORMAT_OPTIONS.maxAbbreviationError,
      DEFAULT_FORMAT_OPTIONS.fixedDigits,
    )
    return this.toStringAllowSingleValue(formatter)
  }

  // e^(x+yi) = e^x(cosy + isiny)
  private exp(): Complex {
    return Complex.polar(Math.exp(this.real), this.imag)
  }

  // log(c) = ln|c| + arg(c)i
  private ln(): Complex {
    return new Complex(Math.log(this.abs()), this.arg())
  }

  // If a complex number has only real or imaginary parts,
  // convert it to a string with only real or imaginary parts, such as '⅓' or '-3i'.
  private toStringAllowSingleValue(formatter: NumberFormatter): string {
    if (this.canImagPartBeOmitted(formatter.maxAbbreviationError)) {
      return formatter.format(this.real)
    }

    if (this.canRealPartBeOmitted(formatter.maxAbbreviationError)) {
      let imagFactor

      if (this.isImagFactorCloseToOne(formatter.maxAbbreviationError)) {
        imagFactor = ''
      } else if (this.isImagFactorMinusOne(formatter.maxAbbreviationError)) {
        imagFactor = '-'
      } else {
        imagFactor = formatter.format(this.imag)
      }

      return `${imagFactor}i`
    }

    return this.toStringBothValues(formatter)
  }

  // Convert a complex number whose real and imaginary parts are not both zero into a string like '⅓-3i'.
  private toStringBothValues(formatter: NumberFormatter): string {
    const imagSign = this.imag >= 0 ? '+' : '-'
    const imagFactor = this.canImagFactorBeOmitted(formatter) ? '' : formatter.format(Math.abs(this.imag))
    const realPlusSign = formatter.allowAbbreviation || formatter.fixedDigits === undefined || this.real < 0 ? '' : '+'

    return `${realPlusSign + formatter.format(this.real) + imagSign + imagFactor}i`
  }

  // Returns whether the real part of a complex number can be omitted.
  private canRealPartBeOmitted(maxAbbreviationError: number): boolean {
    return Math.abs(this.real) <= maxAbbreviationError
  }

  // Returns whether the imaginary part of a complex number can be omitted.
  private canImagPartBeOmitted(maxAbbreviationError: number): boolean {
    return Math.abs(this.imag) <= maxAbbreviationError
  }

  // Returns whether the imaginary part of a complex number is close to 1.
  private isImagFactorCloseToOne(maxAbbreviationError: number): boolean {
    return Math.abs(this.imag - 1) <= maxAbbreviationError
  }

  // Returns whether the imaginary part of a complex number is close to -1.
  private isImagFactorMinusOne(maxAbbreviationError: number): boolean {
    return Math.abs(this.imag + 1) <= maxAbbreviationError
  }

  // Returns true if the factor of the imaginary part can be omitted, such as i or -i.
  private canImagFactorBeOmitted(formatter: NumberFormatter): boolean {
    return formatter.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= formatter.maxAbbreviationError
  }
}
