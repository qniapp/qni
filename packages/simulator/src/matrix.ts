import {Complex, DetailedError, Format, Util, radian} from '@qni/common'
import {Eq} from 'fp-ts/number'
import {isNonEmpty} from 'fp-ts/lib/Array'
import {range} from 'fp-ts/NonEmptyArray'
import {uniq} from 'fp-ts/lib/ReadonlyNonEmptyArray'

export class Matrix {
  static readonly H = Matrix.square(1, 1, 1, -1).times(Math.sqrt(0.5))
  static readonly PAULI_X = Matrix.square(0, 1, 1, 0)
  static readonly PAULI_Y = Matrix.square(0, new Complex(0, -1), Complex.I, 0)
  static readonly PAULI_Z = Matrix.square(1, 0, 0, -1)
  static readonly S = Matrix.square(1, 0, 0, Complex.from(Math.E).raisedTo(Complex.I.times(Math.PI / 2)))
  static readonly SDagger = Matrix.square(1, 0, 0, Complex.from(Math.E).raisedTo(Complex.I.times(Math.PI / -2)))
  static readonly T = Matrix.square(1, 0, 0, Complex.from(Math.E).raisedTo(Complex.I.times(Math.PI / 4)))
  static readonly TDagger = Matrix.square(1, 0, 0, Complex.from(Math.E).raisedTo(Complex.I.times(Math.PI / -4)))

  static PHASE(phi: string): Matrix {
    const φ = radian(phi)
    const e = Complex.from(Math.E)

    return Matrix.square(1, 0, 0, e.raisedTo(Complex.I.times(φ)))
  }

  static get RNOT(): Matrix {
    const i = Complex.I
    const mi = i.neg()

    return Matrix.square(i.plus(1), mi.plus(1), mi.plus(1), i.plus(1)).times(0.5)
  }

  static RX(theta: string): Matrix {
    const θ = radian(theta)
    const mi = Complex.I.neg()
    const cosθ2 = Math.cos(θ / 2)
    const sinθ2 = Math.sin(θ / 2)

    return Matrix.square(cosθ2, mi.times(sinθ2), mi.times(sinθ2), cosθ2)
  }

  static RY(theta: string): Matrix {
    const θ = radian(theta)
    const cosθ2 = Math.cos(θ / 2)
    const sinθ2 = Math.sin(θ / 2)

    return Matrix.square(cosθ2, -sinθ2, sinθ2, cosθ2)
  }

  static RZ(theta: string): Matrix {
    const θ = radian(theta)
    const e = Complex.from(Math.E)
    const i = Complex.I

    return Matrix.square(e.raisedTo(i.neg().times(θ / 2)), 0, 0, e.raisedTo(i.times(θ / 2)))
  }

  static fromRows(rows: Complex[][]): Matrix {
    const h = rows.length
    const rowWidths = rows.map(e => e.length)
    if (!isNonEmpty(rowWidths)) throw new DetailedError('Zero height', {rows})

    const ws = uniq(Eq)(rowWidths)
    if (ws.length !== 1) throw new DetailedError('Inconsistent row widths.', {rows})
    const w = ws[0]

    const buffer = new Float64Array(w * h * 2)
    let i = 0
    for (const row of rows) {
      for (const cell of row) {
        buffer[i] = Complex.realPartOf(cell)
        buffer[i + 1] = Complex.imagPartOf(cell)
        i += 2
      }
    }
    return new Matrix(w, h, buffer)
  }

  static generate(
    width: number,
    height: number,
    coefficientRowColGenerator: (row: number, col: number) => number | Complex,
  ): Matrix {
    const buf = new Float64Array(width * height * 2)
    for (let r = 0; r < height; r++) {
      for (let c = 0; c < width; c++) {
        const k = (r * width + c) * 2
        const v = coefficientRowColGenerator(r, c)
        buf[k] = Complex.realPartOf(v)
        buf[k + 1] = Complex.imagPartOf(v)
      }
    }
    return new Matrix(width, height, buf)
  }

  static solo(coef: number | Complex): Matrix {
    return new Matrix(1, 1, new Float64Array([Complex.realPartOf(coef), Complex.imagPartOf(coef)]))
  }

  static square(...coefs: Array<number | Complex>): Matrix {
    Util.need(Array.isArray(coefs), 'Array.isArray(coefs)', coefs)
    const n = Math.round(Math.sqrt(coefs.length))
    Util.need(n * n === coefs.length, 'Matrix.square: non-square number of arguments')
    return Matrix.generate(n, n, (r, c) => coefs[r * n + c])
  }

  static col(...coefs: Array<number | Complex>): Matrix {
    Util.need(Array.isArray(coefs), 'Array.isArray(coefs)', coefs)
    return Matrix.generate(1, coefs.length, r => coefs[r])
  }

  static row(...coefs: Array<number | Complex>): Matrix {
    Util.need(Array.isArray(coefs), 'Array.isArray(coefs)', coefs)
    return Matrix.generate(coefs.length, 1, (r, c) => coefs[c])
  }

  static identity(size: number): Matrix {
    if (!Number.isInteger(size) || size <= 0) {
      throw new DetailedError('Bad size', {size})
    }
    const buf = new Float64Array(size * size * 2)
    for (let k = 0; k < size; k++) {
      buf[k * (size + 1) * 2] = 1
    }
    return new Matrix(size, size, buf)
  }

  static zero(width: number, height: number): Matrix {
    return new Matrix(width, height, new Float64Array(width * height * 2))
  }

  public width: number
  public height: number
  public buffer: Float64Array | Float32Array

  constructor(width: number, height: number, buffer: Float64Array | Float32Array) {
    if (width * height * 2 !== buffer.length) {
      throw new DetailedError('width*height*2 !== buffer.length', {
        width,
        height,
        len: buffer.length,
      })
    }
    this.width = width
    this.height = height
    this.buffer = buffer
  }

  columnAt(colIndex: number): Complex[] {
    Util.need(colIndex >= 0 && colIndex <= this.width, 'colIndex >= 0 && colIndex <= this.width')
    const col = []
    for (let r = 0; r < this.height; r++) {
      col.push(this.cell(colIndex, r))
    }
    return col
  }

  adjoint(): Matrix {
    const w = this.height
    const h = this.width
    const newBuf = new Float64Array(w * h * 2)
    for (let r = 0; r < h; r++) {
      for (let c = 0; c < w; c++) {
        const kIn = (c * this.width + r) * 2
        const kOut = (r * w + c) * 2
        newBuf[kOut] = this.buffer[kIn]
        newBuf[kOut + 1] = -this.buffer[kIn + 1]
      }
    }
    return new Matrix(w, h, newBuf)
  }

  times(other: Matrix | number | Complex): Matrix {
    return other instanceof Matrix ? this.timesMatrix(other) : this.timesScalar(other)
  }

  private timesMatrix(other: Matrix): Matrix {
    if (this.width !== other.height) {
      throw new DetailedError('Incompatible sizes.', {this: this, other})
    }
    const w = other.width
    const h = this.height
    const n = this.width
    const newBuffer = new Float64Array(w * h * 2)
    for (let r = 0; r < h; r++) {
      for (let c = 0; c < w; c++) {
        const k3 = (r * w + c) * 2
        for (let k = 0; k < n; k++) {
          const k1 = (r * n + k) * 2
          const k2 = (k * w + c) * 2
          const r1 = this.buffer[k1]
          const i1 = this.buffer[k1 + 1]
          const r2 = other.buffer[k2]
          const i2 = other.buffer[k2 + 1]
          const r3 = r1 * r2 - i1 * i2
          const i3 = r1 * i2 + r2 * i1
          newBuffer[k3] += r3
          newBuffer[k3 + 1] += i3
        }
      }
    }
    return new Matrix(w, h, newBuffer)
  }

  private timesScalar(v: number | Complex): Matrix {
    const newBuffer = new Float64Array(this.buffer.length)
    const sr = Complex.realPartOf(v)
    const si = Complex.imagPartOf(v)
    for (let i = 0; i < newBuffer.length; i += 2) {
      const vr = this.buffer[i]
      const vi = this.buffer[i + 1]
      newBuffer[i] = vr * sr - vi * si
      newBuffer[i + 1] = vr * si + vi * sr
    }
    return new Matrix(this.width, this.height, newBuffer)
  }

  isEqualTo(obj: Matrix | unknown): boolean {
    if (this === obj) return true
    if (!(obj instanceof Matrix)) return false

    const other = obj
    return (
      this.width === other.width &&
      this.height === other.height &&
      range(0, this.buffer.length - 1).every(i => this.buffer[i] === other.buffer[i])
    )
  }

  isApproximatelyEqualTo(other: Matrix | unknown, epsilon: number): boolean {
    return (
      other instanceof Matrix &&
      this.width === other.width &&
      this.height === other.height &&
      Math.sqrt(this.minus(other).norm2()) <= epsilon
    )
  }

  minus(other: Matrix): Matrix {
    const {width: w, height: h, buffer: b1} = this
    const b2 = other.buffer
    Util.need(other.width === w && other.height === h, 'Matrix.minus: compatible sizes')

    const newBuffer = new Float64Array(this.buffer.length)
    for (let i = 0; i < newBuffer.length; i++) {
      newBuffer[i] = b1[i] - b2[i]
    }
    return new Matrix(w, h, newBuffer)
  }

  norm2(): number {
    let t = 0
    for (const e of this.buffer) {
      t += e * e
    }
    return t
  }

  toString(format = Format.EXACT): string {
    const data = this.rows()
      .map(row => row.map(e => e.toString(format)).join(format.itemSeparator))
      .join(`}${format.itemSeparator}{`)
    return `{{${data}}}`
  }

  rows(): Complex[][] {
    return range(0, this.height - 1).map<Complex[]>(row =>
      range(0, this.width - 1).map<Complex>(col => this.cell(col, row)),
    )
  }

  cell(col: number, row: number): Complex {
    if (col < 0 || row < 0 || col >= this.width || row >= this.height) {
      throw new DetailedError('Cell out of range', {
        col,
        row,
        width: this.width,
        height: this.height,
      })
    }
    const i = (this.width * row + col) * 2
    return new Complex(this.buffer[i], this.buffer[i + 1])
  }

  set(col: number, row: number, value: Complex): void {
    if (col < 0 || row < 0 || col >= this.width || row >= this.height) {
      throw new DetailedError('Cell out of range', {
        col,
        row,
        width: this.width,
        height: this.height,
      })
    }
    const i = (this.width * row + col) * 2
    this.buffer[i] = value.real
    this.buffer[i + 1] = value.imag
  }

  isApproximatelyHermitian(epsilon: number): boolean {
    if (this.width !== this.height) {
      return false
    }
    for (let c = 0; c < this.width; c++) {
      for (let r = 0; r < this.height; r++) {
        const i = (this.width * r + c) * 2
        const j = (this.width * c + r) * 2
        if (Math.abs(this.buffer[i] - this.buffer[j]) > epsilon) {
          return false
        }
        if (Math.abs(this.buffer[i + 1] + this.buffer[j + 1]) > epsilon) {
          return false
        }
      }
    }
    return true
  }

  plus(other: Matrix): Matrix {
    const {width: w, height: h, buffer: b1} = this
    const b2 = other.buffer
    Util.need(other.width === w && other.height === h, 'Matrix.plus: compatible sizes')

    const newBuffer = new Float64Array(this.buffer.length)
    for (let i = 0; i < newBuffer.length; i++) {
      newBuffer[i] = b1[i] + b2[i]
    }
    return new Matrix(w, h, newBuffer)
  }

  tensorProduct(other: Matrix): Matrix {
    const w1 = this.width
    const h1 = this.height
    const w2 = other.width
    const h2 = other.height
    const w = w1 * w2
    const h = h1 * h2
    const newBuffer = new Float64Array(w * h * 2)
    for (let r1 = 0; r1 < h1; r1++) {
      for (let r2 = 0; r2 < h2; r2++) {
        for (let c1 = 0; c1 < w1; c1++) {
          for (let c2 = 0; c2 < w2; c2++) {
            const k1 = (r1 * w1 + c1) * 2
            const k2 = (r2 * w2 + c2) * 2
            const k3 = ((r1 * h2 + r2) * w + (c1 * w2 + c2)) * 2
            const cr1 = this.buffer[k1]
            const ci1 = this.buffer[k1 + 1]
            const cr2 = other.buffer[k2]
            const ci2 = other.buffer[k2 + 1]
            const cr3 = cr1 * cr2 - ci1 * ci2
            const ci3 = cr1 * ci2 + ci1 * cr2
            newBuffer[k3] = cr3
            newBuffer[k3 + 1] = ci3
          }
        }
      }
    }
    return new Matrix(w, h, newBuffer)
  }

  timesQubitOperation(operation2x2: Matrix, qubitIndex: number, controlMask: number, desiredValueMask: number): Matrix {
    Util.need((controlMask & (1 << qubitIndex)) === 0, 'Matrix.timesQubitOperation: self-controlled')
    Util.need(operation2x2.width === 2 && operation2x2.height === 2, 'Matrix.timesQubitOperation: not 2x2')

    const {width: w, height: h, buffer: old} = this
    const [ar, ai, br, bi, cr, ci, dr, di] = operation2x2.buffer

    Util.need(h >= 2 << qubitIndex, 'Matrix.timesQubitOperation: qubit index out of range')

    const buf = new Float64Array(old)
    let i = 0
    for (let r = 0; r < h; r++) {
      const isControlled = ((controlMask & r) ^ desiredValueMask) !== 0
      const qubitVal = (r & (1 << qubitIndex)) !== 0
      for (let c = 0; c < w; c++) {
        if (!isControlled && !qubitVal) {
          const j = i + (1 << qubitIndex) * 2 * w
          const xr = buf[i]
          const xi = buf[i + 1]
          const yr = buf[j]
          const yi = buf[j + 1]

          buf[i] = xr * ar - xi * ai + yr * br - yi * bi
          buf[i + 1] = xr * ai + xi * ar + yr * bi + yi * br
          buf[j] = xr * cr - xi * ci + yr * dr - yi * di
          buf[j + 1] = xr * ci + xi * cr + yr * di + yi * dr
        }
        i += 2
      }
    }
    return new Matrix(w, h, buf)
  }

  trace(): Complex {
    let total_r = 0
    let total_i = 0
    const d = this.width * 2 + 2
    for (let i = 0; i < this.buffer.length; i += d) {
      total_r += this.buffer[i]
      total_i += this.buffer[i + 1]
    }
    return new Complex(total_r, total_i)
  }

  qubitDensityMatrixToBlochVector(): [number, number, number] {
    if (this.width !== 2 || this.height !== 2) {
      throw new DetailedError('Need a 2x2 density matrix.', this)
    }
    if (!this.isApproximatelyHermitian(0.01)) {
      throw new DetailedError('Density matrix should be Hermitian.', this)
    }
    if (!this.trace().isApproximatelyEqualTo(1, 0.01)) {
      throw new DetailedError('Density matrix should have unit trace.', this)
    }

    // Density matrix from bloch vector equation: M = 1/2 (I + vσ)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ar, ai, br, bi, cr, ci, dr, di] = this.buffer
    const x = cr + br
    const y = ci - bi
    const z = ar - dr
    return [x, y, z]
  }

  clone(): Matrix {
    return new Matrix(this.width, this.height, this.buffer.slice())
  }
}
