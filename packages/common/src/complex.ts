/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {DetailedError} from './detailed-error'
import {Format, UNICODE_FRACTIONS} from './format'
import {Util} from './util'
import {Config, Plugin, format as prettyFormat, Refs, Printer} from 'pretty-format'

type UnicodeFraction = {character: string; ref: string; value: number}

function matchUnicodeFraction(predicate: (arrayItem: UnicodeFraction) => boolean): UnicodeFraction | undefined {
  for (const each of UNICODE_FRACTIONS) {
    if (predicate(each)) return each
  }
  return undefined
}

export const isComplex = (arg: unknown): arg is Complex =>
  typeof arg === 'object' &&
  arg !== null &&
  typeof (arg as Complex).real === 'number' &&
  typeof (arg as Complex).imag === 'number'

function toStringAllowSingleValue(
  complex: Complex,
  maxAbbreviationError: number,
  fixedDigits: number | undefined,
): string {
  // 虚部を省略できる場合
  if (Math.abs(complex.imag) <= maxAbbreviationError) {
    const fraction = matchUnicodeFraction(e => Math.abs(e.value - complex.real) <= maxAbbreviationError)
    if (fraction !== undefined) {
      return fraction.character
    }

    return prettyFormat(complex.real)
  }

  // 実部を省略できる場合
  if (Math.abs(complex.real) <= maxAbbreviationError) {
    if (Math.abs(complex.imag - 1) <= maxAbbreviationError) {
      return 'i'
    }
    if (Math.abs(complex.imag + 1) <= maxAbbreviationError) {
      return '-i'
    }

    return `${prettyFormat(complex.imag)}i`
  }

  // 実部と虚部がある場合
  return toStringBothValues(complex, true, 0, fixedDigits)
}

function toStringBothValues(
  complex: Complex,
  allowAbbreviation: boolean,
  maxAbbreviationError: number,
  fixedDigits: number | undefined,
): string {
  let imagFactor
  if (allowAbbreviation && Math.abs(Math.abs(complex.imag) - 1) <= maxAbbreviationError) {
    imagFactor = ''
  } else {
    if (complex.imag < 0) {
      const fraction = matchUnicodeFraction(e => {
        return Math.abs(e.value + complex.imag) <= maxAbbreviationError
      })
      if (fraction !== undefined) {
        imagFactor = fraction.character
      }
    } else {
      const fraction = matchUnicodeFraction(e => {
        return Math.abs(e.value - complex.imag) <= maxAbbreviationError
      })
      if (fraction !== undefined) {
        imagFactor = fraction.character
      }
    }

    if (!imagFactor) {
      if (!allowAbbreviation && fixedDigits !== undefined) {
        imagFactor = Math.abs(complex.imag).toFixed(fixedDigits)
      } else {
        imagFactor = prettyFormat(Math.abs(complex.imag))
      }
    }
  }

  const prefix = allowAbbreviation || fixedDigits === undefined || complex.real < 0 ? '' : '+'
  const separator = complex.imag >= 0 ? '+' : '-'
  let realString

  if (allowAbbreviation) {
    realString = abbreviateFloat(complex.real, maxAbbreviationError, fixedDigits)
  } else if (fixedDigits !== undefined) {
    realString = complex.real.toFixed(fixedDigits)
  } else {
    realString = String(complex.real)
  }

  return `${prefix + realString + separator + imagFactor}i`
}

function abbreviateFloat(value: number, epsilon = 0, digits: number | undefined = undefined): string {
  if (Math.abs(value) < epsilon) return '0'
  if (value < 0) return `-${abbreviateFloat(-value, epsilon, digits)}`

  const fraction = Format.matchUnicodeFraction(e => Math.abs(e.value - value) <= epsilon)
  if (fraction !== undefined) {
    return fraction.character
  }

  const rootFraction = Format.matchUnicodeFraction(e => Math.abs(Math.sqrt(e.value) - value) <= epsilon)
  if (rootFraction !== undefined) {
    return `\u221A${rootFraction.character}`
  }

  if (value % 1 !== 0 && digits !== undefined) {
    return value.toFixed(digits)
  }

  return value.toString()
}

export const exactComplexFormatPlugin: Plugin = {
  test: isComplex,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  serialize(val: any, _config: Config, _indentation: string, _depth: number, _refs: Refs, _printer: Printer): string {
    return toStringAllowSingleValue(val, 0, undefined)
  },
}

export const consistentComplexFormatPlugin: Plugin = {
  test: isComplex,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  serialize(val: any, _config: Config, _indentation: string, _depth: number, _refs: Refs, _printer: Printer): string {
    return toStringBothValues(val, false, 0, 2)
  },
}

export const minifiedComplexFormatPlugin: Plugin = {
  test: isComplex,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  serialize(val: any, _config: Config, _indentation: string, _depth: number, _refs: Refs, _printer: Printer): string {
    return toStringAllowSingleValue(val, 0, undefined)
  },
}

export const simplifiedComplexFormatPlugin: Plugin = {
  test: isComplex,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  serialize(val: any, _config: Config, _indentation: string, _depth: number, _refs: Refs, _printer: Printer): string {
    return toStringAllowSingleValue(val, 0.0005, 3)
  },
}

export class Complex {
  static readonly ZERO = new Complex(0, 0)
  static readonly ONE = new Complex(1, 0)
  static readonly I = new Complex(0, 1)

  public real: number
  public imag: number

  static from(v: number | Complex): Complex {
    if (v instanceof Complex) {
      return v
    }
    if (typeof v === 'number') {
      return new Complex(v, 0)
    }
    throw new DetailedError('Unrecognized value type.', {v})
  }

  static polar(magnitude: number, phase: number): Complex {
    const [cos, sin] = Util.snappedCosSin(phase)
    return new Complex(magnitude * cos, magnitude * sin)
  }

  static realPartOf(v: number | Complex): number {
    if (v instanceof Complex) {
      return v.real
    }
    if (typeof v === 'number') {
      return v
    }
    throw new DetailedError('Unrecognized value type.', {v})
  }

  static imagPartOf(v: number | Complex): number {
    if (v instanceof Complex) {
      return v.imag
    }
    if (typeof v === 'number') {
      return 0
    }
    throw new DetailedError('Unrecognized value type.', {v})
  }

  constructor(real: number, imag: number) {
    this.real = real
    this.imag = imag
  }

  static rootsOfQuadratic(a: number | Complex, b: number | Complex, c: number | Complex): Complex[] {
    a = Complex.from(a)
    b = Complex.from(b)
    c = Complex.from(c)

    if (a.isEqualTo(0)) {
      if (!b.isEqualTo(0)) {
        return [c.times(-1).dividedBy(b)]
      }
      if (!c.isEqualTo(0)) {
        return []
      }
      throw Error('Degenerate')
    }

    const difs = b.times(b).minus(a.times(c).times(4)).sqrts()
    const mid = b.times(-1)
    const denom = a.times(2)
    return difs.map(d => mid.minus(d).dividedBy(denom))
  }

  isEqualTo(other: unknown): boolean {
    if (other instanceof Complex) {
      return this.real === other.real && this.imag === other.imag
    }
    if (typeof other === 'number') {
      return this.real === other && this.imag === 0
    }
    return false
  }

  isApproximatelyEqualTo(other: number | Complex | unknown, epsilon: number): boolean {
    if (other instanceof Complex || typeof other === 'number') {
      const d = this.minus(Complex.from(other))
      return Math.abs(d.real) <= epsilon && Math.abs(d.imag) <= epsilon && d.abs() <= epsilon
    }
    return false
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
    return this.dividedBy(Math.sqrt(m))
  }

  plus(v: number | Complex): Complex {
    const c = Complex.from(v)
    return new Complex(this.real + c.real, this.imag + c.imag)
  }

  minus(v: number | Complex): Complex {
    const c = Complex.from(v)
    return new Complex(this.real - c.real, this.imag - c.imag)
  }

  times(v: number | Complex): Complex {
    const c = Complex.from(v)
    return new Complex(this.real * c.real - this.imag * c.imag, this.real * c.imag + this.imag * c.real)
  }

  dividedBy(v: number | Complex): Complex {
    const c = Complex.from(v)
    const d = c.norm2()
    if (d === 0) {
      throw new Error('Division by Zero')
    }

    const n = this.times(c.conjugate())
    return new Complex(n.real / d, n.imag / d)
  }

  sqrts(): [Complex] | [Complex, Complex] {
    const [r, i] = [this.real, this.imag]
    const m = Math.sqrt(Math.sqrt(r * r + i * i))
    if (m === 0) {
      return [Complex.ZERO]
    }
    if (i === 0 && r < 0) {
      return [new Complex(0, m), new Complex(0, -m)]
    }

    const a = this.phase() / 2
    const c = Complex.polar(m, a)
    return [c, c.times(-1)]
  }

  conjugate(): Complex {
    return new Complex(this.real, -this.imag)
  }

  // TODO: テストが通ったら下の toString() に置き換える
  toStr(plugin?: Plugin): string {
    plugin = plugin || exactComplexFormatPlugin
    return prettyFormat(this, {
      plugins: [plugin],
    })
  }

  toString(format?: Format): string {
    format = format || Format.EXACT
    return format.allowAbbreviation ? this.toStringAllowSingleValue(format) : this.toStringBothValues(format)
  }

  neg(): Complex {
    return new Complex(-this.real, -this.imag)
  }

  raisedTo(exponent: number | Complex): Complex {
    if (exponent === 0.5 && this.imag === 0 && this.real >= 0) {
      return new Complex(Math.sqrt(this.real), 0)
    }
    if (Complex.ZERO.isEqualTo(exponent)) {
      return Complex.ONE
    }
    if (this.isEqualTo(Complex.ZERO)) {
      return Complex.ZERO
    }
    return this.ln().times(Complex.from(exponent)).exp()
  }

  exp(): Complex {
    return Complex.polar(Math.exp(this.real), this.imag)
  }

  cos(): Complex {
    const z = this.times(Complex.I)
    return z.exp().plus(z.neg().exp()).times(0.5)
  }

  sin(): Complex {
    const z = this.times(Complex.I)
    return z.exp().minus(z.neg().exp()).dividedBy(new Complex(0, 2))
  }

  tan(): Complex {
    return this.sin().dividedBy(this.cos())
  }

  ln(): Complex {
    return new Complex(Math.log(this.abs()), this.phase())
  }

  phase(): number {
    return Math.atan2(this.imag, this.real)
  }

  private toStringAllowSingleValue(format: Format): string {
    if (Math.abs(this.imag) <= format.maxAbbreviationError) {
      return format.formatFloat(this.real)
    }
    if (Math.abs(this.real) <= format.maxAbbreviationError) {
      if (Math.abs(this.imag - 1) <= format.maxAbbreviationError) {
        return 'i'
      }
      if (Math.abs(this.imag + 1) <= format.maxAbbreviationError) {
        return '-i'
      }
      return `${format.formatFloat(this.imag)}i`
    }

    return this.toStringBothValues(format)
  }

  private toStringBothValues(format: Format): string {
    const separator = this.imag >= 0 ? '+' : '-'
    const imagFactor =
      format.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= format.maxAbbreviationError
        ? ''
        : format.formatFloat(Math.abs(this.imag))
    const prefix = format.allowAbbreviation || format.fixedDigits === undefined || this.real < 0 ? '' : '+'
    return `${prefix + format.formatFloat(this.real) + separator + imagFactor}i`
  }
}
