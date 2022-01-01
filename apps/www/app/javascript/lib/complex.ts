import {DetailedError, Format, UNICODE_FRACTIONS} from '@qni/common'
import {Util} from './util'
import {parseFormula} from './formulaParser'

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

  static parse(text: string): Complex {
    return Complex.from(parseFormula(text, PARSE_COMPLEX_TOKEN_MAP_DEG))
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

const PARSE_COMPLEX_TOKEN_MAP_ALL = new Map()
export const PARSE_COMPLEX_TOKEN_MAP_RAD = new Map()
const PARSE_COMPLEX_TOKEN_MAP_DEG = new Map()

PARSE_COMPLEX_TOKEN_MAP_ALL.set('i', Complex.I)
PARSE_COMPLEX_TOKEN_MAP_ALL.set('e', Complex.from(Math.E))
PARSE_COMPLEX_TOKEN_MAP_ALL.set('pi', Complex.from(Math.PI))
PARSE_COMPLEX_TOKEN_MAP_ALL.set('(', '(')
PARSE_COMPLEX_TOKEN_MAP_ALL.set(')', ')')
for (const {character, value} of UNICODE_FRACTIONS) {
  PARSE_COMPLEX_TOKEN_MAP_ALL.set(character, value)
}
PARSE_COMPLEX_TOKEN_MAP_ALL.set('sqrt', {
  unary_action: (e: number | Complex) => Complex.from(e).raisedTo(0.5),
  priority: 4
})
PARSE_COMPLEX_TOKEN_MAP_ALL.set('exp', {
  unary_action: (e: number | Complex) => Complex.from(e).exp(),
  priority: 4
})
PARSE_COMPLEX_TOKEN_MAP_ALL.set('ln', {
  unary_action: (e: number | Complex) => Complex.from(e).ln(),
  priority: 4
})
PARSE_COMPLEX_TOKEN_MAP_ALL.set('^', {
  binary_action: (a: number | Complex, b: number | Complex) => Complex.from(a).raisedTo(b),
  priority: 3
})
PARSE_COMPLEX_TOKEN_MAP_ALL.set('*', {
  binary_action: (a: number | Complex, b: number | Complex) => Complex.from(a).times(b),
  priority: 2
})
PARSE_COMPLEX_TOKEN_MAP_ALL.set('/', {
  binary_action: (a: number | Complex, b: number | Complex) => Complex.from(a).dividedBy(b),
  priority: 2
})
PARSE_COMPLEX_TOKEN_MAP_ALL.set('-', {
  unary_action: (e: number | Complex) => Complex.from(e).neg(),
  binary_action: (a: number | Complex, b: number | Complex) => Complex.from(a).minus(b),
  priority: 1
})
PARSE_COMPLEX_TOKEN_MAP_ALL.set('+', {
  unary_action: (e: number | Complex) => e,
  binary_action: (a: number | Complex, b: number | Complex) => Complex.from(a).plus(b),
  priority: 1
})
PARSE_COMPLEX_TOKEN_MAP_ALL.set('√', PARSE_COMPLEX_TOKEN_MAP_ALL.get('sqrt'))

PARSE_COMPLEX_TOKEN_MAP_DEG.set('cos', {
  unary_action: (e: number | Complex) => new Complex(Math.PI / 180, 0).times(e).cos(),
  priority: 4
})
PARSE_COMPLEX_TOKEN_MAP_DEG.set('sin', {
  unary_action: (e: number | Complex) => new Complex(Math.PI / 180, 0).times(e).sin(),
  priority: 4
})
PARSE_COMPLEX_TOKEN_MAP_DEG.set('asin', {
  unary_action: (e: number | Complex) => {
    if (Complex.imagPartOf(e) !== 0) {
      throw new DetailedError('asin input out of range', {e})
    }
    return Complex.from((Math.asin(Complex.realPartOf(e)) * 180) / Math.PI)
  },
  priority: 4
})
PARSE_COMPLEX_TOKEN_MAP_DEG.set('acos', {
  unary_action: (e: number | Complex) => {
    if (Complex.imagPartOf(e) !== 0) {
      throw new DetailedError('acos input out of range', {e})
    }
    return Complex.from((Math.acos(Complex.realPartOf(e)) * 180) / Math.PI)
  },
  priority: 4
})
PARSE_COMPLEX_TOKEN_MAP_DEG.set('arccos', PARSE_COMPLEX_TOKEN_MAP_DEG.get('acos'))
PARSE_COMPLEX_TOKEN_MAP_DEG.set('arcsin', PARSE_COMPLEX_TOKEN_MAP_DEG.get('asin'))

PARSE_COMPLEX_TOKEN_MAP_RAD.set('cos', {
  unary_action: (e: number | Complex) => Complex.from(e).cos(),
  priority: 4
})
PARSE_COMPLEX_TOKEN_MAP_RAD.set('sin', {
  unary_action: (e: number | Complex) => Complex.from(e).sin(),
  priority: 4
})
PARSE_COMPLEX_TOKEN_MAP_RAD.set('tan', {
  unary_action: (e: number | Complex) => Complex.from(e).tan(),
  priority: 4
})
PARSE_COMPLEX_TOKEN_MAP_RAD.set('asin', {
  unary_action: (e: number | Complex) => {
    if (Complex.imagPartOf(e) !== 0) {
      throw new DetailedError('asin input out of range', {e})
    }
    return Complex.from(Math.asin(Complex.realPartOf(e)))
  },
  priority: 4
})
PARSE_COMPLEX_TOKEN_MAP_RAD.set('acos', {
  unary_action: (e: number | Complex) => {
    if (Complex.imagPartOf(e) !== 0) {
      throw new DetailedError('acos input out of range', {e})
    }
    return Complex.from(Math.acos(Complex.realPartOf(e)))
  },
  priority: 4
})
PARSE_COMPLEX_TOKEN_MAP_RAD.set('atan', {
  unary_action: (e: number | Complex) => {
    if (Complex.imagPartOf(e) !== 0) {
      throw new DetailedError('atan input out of range', {e})
    }
    return Complex.from(Math.atan(Complex.realPartOf(e)))
  },
  priority: 4
})

for (const [k, v] of PARSE_COMPLEX_TOKEN_MAP_ALL.entries()) {
  PARSE_COMPLEX_TOKEN_MAP_DEG.set(k, v)
  PARSE_COMPLEX_TOKEN_MAP_RAD.set(k, v)
}
