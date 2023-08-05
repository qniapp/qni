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

import {Format} from './format'
import {Util} from './util'

export class Complex {
  static readonly ZERO = new Complex(0, 0)
  static readonly ONE = new Complex(1, 0)
  static readonly I = new Complex(0, 1)

  public real: number
  public imag: number

  static from(v: number | Complex): Complex {
    if (typeof v === 'number') {
      return new Complex(v, 0)
    }

    return v
  }

  static realPartOf(v: number | Complex): number {
    if (typeof v === 'number') {
      return v
    }

    return v.real
  }

  static imagPartOf(v: number | Complex): number {
    if (typeof v === 'number') {
      return 0
    }

    return v.imag
  }

  static polar(magnitude: number, phase: number): Complex {
    const [cos, sin] = Util.snappedCosSin(phase)
    return new Complex(magnitude * cos, magnitude * sin)
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

  plus(v: number | Complex): Complex {
    const c = Complex.from(v)
    return new Complex(this.real + c.real, this.imag + c.imag)
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
