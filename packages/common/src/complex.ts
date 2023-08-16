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

  static from(value: number | Complex): Complex {
    if (typeof value === 'number') {
      return new Complex(value, 0)
    }

    return value
  }

  static realPartOf(value: number | Complex): number {
    if (typeof value === 'number') {
      return value
    }

    return value.real
  }

  static imagPartOf(value: number | Complex): number {
    if (typeof value === 'number') {
      return 0
    }

    return value.imag
  }

  // Returns a complex number with the given magnitude and phase.
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

  constructor(real: number, imag: number) {
    this.real = real
    this.imag = imag
  }

  isEqualTo(other: unknown): boolean {
    if (typeof other === 'number') {
      return this.real === other && this.imag === 0
    }
    if (other instanceof Complex) {
      return this.real === other.real && this.imag === other.imag
    }
    return false
  }

  isApproximatelyEqualTo(other: number | Complex | unknown, epsilon: number): boolean {
    if (typeof other === 'number' || other instanceof Complex) {
      const d = this.minus(Complex.from(other))
      return Math.abs(d.real) <= epsilon && Math.abs(d.imag) <= epsilon && d.abs() <= epsilon
    }
    return false
  }

  conjugate(): Complex {
    return new Complex(this.real, -this.imag)
  }

  neg(): Complex {
    return new Complex(-this.real, -this.imag)
  }

  plus(value: number | Complex): Complex {
    const c = Complex.from(value)
    return new Complex(this.real + c.real, this.imag + c.imag)
  }

  minus(value: number | Complex): Complex {
    const c = Complex.from(value)
    return new Complex(this.real - c.real, this.imag - c.imag)
  }

  times(value: number | Complex): Complex {
    const c = Complex.from(value)
    return new Complex(this.real * c.real - this.imag * c.imag, this.real * c.imag + this.imag * c.real)
  }

  dividedBy(value: number | Complex): Result<Complex, Error> {
    const c = Complex.from(value)
    const d = c.norm2()
    if (d === 0) {
      return err(Error('Division by Zero'))
    }

    const n = this.times(c.conjugate())
    return ok(new Complex(n.real / d, n.imag / d))
  }

  norm2(): number {
    return this.real * this.real + this.imag * this.imag
  }

  abs(): number {
    return Math.sqrt(this.norm2())
  }

  unit(): Complex {
    const m = this.norm2()
    if (m < 0.00001) {
      return Complex.polar(1, this.phase())
    }

    return this.dividedBy(Math.sqrt(m))._unsafeUnwrap()
  }

  phase(): number {
    return Math.atan2(this.imag, this.real)
  }

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
    if (this.isEqualTo(Complex.ZERO)) {
      return Complex.ZERO
    }
    return this.ln().times(Complex.from(exponent)).exp()
  }

  // Converts a complex number to a string according to the specified format.
  format(options: FormatOptions = DEFAULT_FORMAT_OPTIONS): string {
    const format = new NumberFormatter(
      options.allowAbbreviation === undefined ? DEFAULT_FORMAT_OPTIONS.allowAbbreviation : options.allowAbbreviation,
      options.maxAbbreviationError || 0,
      options.fixedDigits,
    )
    return format.allowAbbreviation ? this.toStringAllowSingleValue(format) : this.toStringBothValues(format)
  }

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

  // log(c) = ln|c| + phase(c)i
  private ln(): Complex {
    return new Complex(Math.log(this.abs()), this.phase())
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
