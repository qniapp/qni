import {Complex, DetailedError, Format, Util} from '@qni/common'
import {range} from 'fp-ts/NonEmptyArray'
import {ok, err, Result} from 'neverthrow'

type FormatOptions = {
  allowAbbreviation?: boolean
  maxAbbreviationError?: number
  fixedDigits?: number | undefined
  itemSeparator?: string
}

const DEFAULT_FORMAT_OPTIONS: FormatOptions = {
  allowAbbreviation: true,
  maxAbbreviationError: 0,
  fixedDigits: undefined,
  itemSeparator: ', ',
}

export type NonNegativeInteger<T extends number> = number extends T
  ? never
  : `${T}` extends `-${string}` | `${string}.${string}`
  ? never
  : T

export class Matrix {
  public width: number
  public height: number
  public buffer: Float64Array

  /**
   * Returns a matrix with all zero elements.
   *
   * @param width - The width of the matrix
   * @param height - The height of the matrix
   * @returns A matrix with all zero elements
   */
  static zero(width: number, height: number): Matrix {
    return new Matrix(width, height, new Float64Array(width * height * 2))
  }

  /**
   * Generates a 1x1 matrix.
   *
   * @param element - The element of the matrix
   * @returns A 1x1 matrix
   */
  static solo(element: number | Complex): Matrix {
    return new Matrix(1, 1, new Float64Array([Complex.real(element), Complex.imag(element)]))
  }

  /**
   * Return a column vector.
   *
   * @param elements - The elements of the vector
   * @returns A column vector (Matrix with 1 column)
   */
  static col(...elements: Array<number | Complex>): Matrix {
    return Matrix.generate(1, elements.length, row => elements[row])
  }

  /**
   * Return a row vector.
   *
   * @param elements - The elements of the vector
   * @returns A row vector (Matrix with 1 row)
   */
  static row(...elements: Array<number | Complex>): Matrix {
    return Matrix.generate(elements.length, 1, (_row, col) => elements[col])
  }

  /**
   * Returns an identity matrix of the specified size.
   *
   * @param size - The size of the identity matrix
   * @returns A result object with the generated identity matrix or an error
   */
  static identity<N extends number>(size: NonNegativeInteger<N>): Matrix {
    const buf = new Float64Array(size * size * 2)
    for (let i = 0; i < size; i++) {
      buf[i * (size + 1) * 2] = 1
    }

    return new Matrix(size, size, buf)
  }

  /**
   * Returns a square matrix with the specified elements.
   *
   * @param elements - The elements of the matrix
   * @returns A result object with the generated square matrix or an error
   */
  static square(...elements: Array<number | Complex>): Result<Matrix, Error> {
    const n = Math.round(Math.sqrt(elements.length))
    if (n * n !== elements.length) {
      return err(Error('Matrix.square: non-square number of arguments'))
    }

    return ok(Matrix.generate(n, n, (row, col) => elements[row * n + col]))
  }

  /**
   * Generates a matrix of the specified `width` and `height`.
   * The matrix elements are generated by `matrixElementGenerator` with row and column indexes as arguments.
   *
   * @param width - The width of the matrix
   * @param height - The height of the matrix
   * @param matrixElementGenerator - A function that generates the matrix elements
   * @returns A matrix of the specified width and height
   */
  static generate(
    width: number,
    height: number,
    matrixElementGenerator: (row: number, col: number) => number | Complex,
  ): Matrix {
    const buf = new Float64Array(width * height * 2)

    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        const i = (row * width + col) * 2
        const c = Complex.from(matrixElementGenerator(row, col))

        buf[i] = c.real
        buf[i + 1] = c.imag
      }
    }

    return new Matrix(width, height, buf)
  }

  constructor(width: number, height: number, buffer: Float64Array) {
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
    const sr = Complex.real(v)
    const si = Complex.imag(v)
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

  format(options = DEFAULT_FORMAT_OPTIONS): string {
    const format = new Format(
      options.allowAbbreviation === undefined ? true : options.allowAbbreviation,
      options.maxAbbreviationError || 0,
      options.fixedDigits,
      options.itemSeparator || ', ',
    )
    return this.toString(format)
  }

  toString(options = DEFAULT_FORMAT_OPTIONS): string {
    const data = this.rows()
      .map(row => row.map(e => e.format(options)).join(options.itemSeparator))
      .join(`}${options.itemSeparator}{`)
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

  isHermitian(epsilon = 0): boolean {
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
    if (!this.isHermitian(0.01)) {
      throw new DetailedError('Density matrix should be Hermitian.', this)
    }
    if (!this.trace().nearlyEq(1, 0.01)) {
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
