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

export class Matrix {
  public width: number
  public height: number
  public buffer: Float64Array

  /**
   * Creates a new Matrix object from the given rows.
   */
  static rows(rows: Array<Array<number | Complex>>): Result<Matrix, Error> {
    const height = rows.length
    if (height === 0) {
      return err(Error('rows is empty'))
    }
    const width = rows[0].length
    if (rows[0].length === 0) {
      return err(Error('rows[0] is empty'))
    }

    return Matrix.build(height, width, (row, col) => rows[row][col])
  }

  /**
   * Creates a column vector from the given elements.
   */
  static column_vector(...elements: Array<number | Complex>): Result<Matrix, Error> {
    return Matrix.build(elements.length, 1, row => elements[row])
  }

  /**
   * Builds a matrix with the specified width and height, using the provided
   * function to generate each element.
   */
  static build(
    height: number,
    width: number,
    matrixElementGenerator?: (row: number, col: number) => number | Complex,
  ): Result<Matrix, Error> {
    const buf = new Float64Array(width * height * 2)

    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        const ri = (row * width + col) * 2 // real part index
        const ii = ri + 1 // imaginary part index

        let v: Complex
        if (matrixElementGenerator) {
          v = Complex.from(matrixElementGenerator(row, col))
        } else {
          v = Complex.from(0)
        }

        buf[ri] = v.real
        buf[ii] = v.imag
      }
    }

    return Matrix.create(height, width, buf)
  }

  private static create(height: number, width: number, buffer: Float64Array): Result<Matrix, Error> {
    if (width < 0) {
      return err(Error(`width(${width}) < 0`))
    }
    if (height < 0) {
      return err(Error(`height(${height}) < 0`))
    }
    if (width * height * 2 !== buffer.length) {
      return err(Error(`width(${width})*height(${height})*2 !== buffer.length(${buffer.length})`))
    }

    return ok(new Matrix(height, width, buffer))
  }

  private constructor(height: number, width: number, buffer: Float64Array) {
    this.height = height
    this.width = width
    this.buffer = buffer

    this.plus = this.add // alias for add
  }

  /**
   * Retrieves the value at the specified row and column in the matrix.
   */
  element(row: number, col: number): Result<Complex, Error> {
    if (row < 0 || col < 0 || row >= this.height || col >= this.width) {
      return err(Error('Element out of range'))
    }

    const ri = (this.width * row + col) * 2 // real part index
    const ii = ri + 1 // imaginary part index

    return ok(new Complex(this.buffer[ri], this.buffer[ii]))
  }

  /**
   * Sets the value of a element in the matrix.
   */
  set(row: number, col: number, value: Complex): Result<Matrix, Error> {
    if (row < 0 || col < 0 || row >= this.height || col >= this.width) {
      return err(Error('Element out of range'))
    }

    const ri = (this.width * row + col) * 2 // real part index
    const ii = ri + 1 // imaginary part index

    this.buffer[ri] = value.real
    this.buffer[ii] = value.imag

    return ok(this)
  }

  /**
   * Adds another matrix to the current matrix.
   */
  add(other: Matrix): Result<Matrix, Error> {
    if (other.width !== this.width || other.height !== this.height) {
      return err(Error('Incompatible sizes'))
    }

    const newBuffer = new Float64Array(this.buffer.length)
    for (let i = 0; i < newBuffer.length; i++) {
      newBuffer[i] = this.buffer[i] + other.buffer[i]
    }

    return ok(new Matrix(this.height, this.width, newBuffer))
  }
  plus = this.add.bind(this)

  timesQubitOperation(operation2x2: Matrix, qubitIndex: number, controlMask: number): Matrix {
    Util.need((controlMask & (1 << qubitIndex)) === 0, 'Matrix.timesQubitOperation: self-controlled')
    Util.need(operation2x2.width === 2 && operation2x2.height === 2, 'Matrix.timesQubitOperation: not 2x2')

    const {width: w, height: h, buffer: old} = this
    const [ar, ai, br, bi, cr, ci, dr, di] = operation2x2.buffer

    Util.need(h >= 2 << qubitIndex, 'Matrix.timesQubitOperation: qubit index out of range')

    const buf = new Float64Array(old)
    let i = 0
    for (let r = 0; r < h; r++) {
      const isControlled = ((controlMask & r) ^ controlMask) !== 0
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

    return Matrix.create(h, w, buf)._unsafeUnwrap()
  }

  /**
   * Returns the `colIndex` column of the matrix.
   *
   * @param colIndex - The column index
   * @returns A result object with the column or an error
   */
  columnAt(colIndex: number): Result<Complex[], Error> {
    if (colIndex < 0) {
      return err(Error('colIndex < 0'))
    }
    if (colIndex > this.width) {
      return err(Error('colIndex > this.width'))
    }

    const col = []
    for (let row = 0; row < this.height; row++) {
      col.push(this.element(row, colIndex)._unsafeUnwrap())
    }
    return ok(col)
  }

  /**
   * Returns the matrix as an array of rows.
   *
   * @returns An array of rows
   */
  rows(): Complex[][] {
    return range(0, this.height - 1).map<Complex[]>(row =>
      range(0, this.width - 1).map<Complex>(col => this.element(row, col)._unsafeUnwrap()),
    )
  }

  /**
   * Return true if the matrix is a Hermitian matrix.
   *
   * @param epsilon - The epsilon to use for comparison
   * @returns true if the matrix is a Hermitian matrix
   */
  isHermitian(epsilon = 0): boolean {
    if (this.width !== this.height) {
      return false
    }

    for (let col = 0; col < this.width; col++) {
      for (let row = 0; row < this.height; row++) {
        const i = (this.width * row + col) * 2
        const j = (this.width * col + row) * 2

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

  /**
   * Returns a trace of the `Matrix`.
   *
   * @returns A `Complex` number representing the trace
   */
  trace(): Complex {
    let tr_r = 0
    let tr_i = 0
    const d = this.width * 2 + 2

    for (let i = 0; i < this.buffer.length; i += d) {
      tr_r += this.buffer[i]
      tr_i += this.buffer[i + 1]
    }

    return new Complex(tr_r, tr_i)
  }

  /**
   * Returns the adjoint matrix of the matrix.
   *
   * @returns The adjoint matrix
   */
  adjoint(): Matrix {
    const w = this.height
    const h = this.width
    const newBuf = new Float64Array(w * h * 2)

    for (let row = 0; row < h; row++) {
      for (let col = 0; col < w; col++) {
        const kIn = (col * this.width + row) * 2
        const kOut = (row * w + col) * 2

        newBuf[kOut] = this.buffer[kIn]
        newBuf[kOut + 1] = -this.buffer[kIn + 1]
      }
    }

    return new Matrix(h, w, newBuf)
  }

  /**
   * Matrix subtraction.
   *
   * @param other - The matrix to subtract
   * @returns A result object with the matrix or an error
   */
  sub(other: Matrix): Result<Matrix, Error> {
    const {width: w, height: h, buffer: b1} = this
    const b2 = other.buffer
    if (other.width !== w || other.height !== h) {
      return err(Error('Matrix.sub: incompatible sizes'))
    }

    const newBuffer = new Float64Array(this.buffer.length)
    for (let i = 0; i < newBuffer.length; i++) {
      newBuffer[i] = b1[i] - b2[i]
    }

    return ok(new Matrix(h, w, newBuffer))
  }

  /**
   * Matrix multiplication.
   *
   * @param other - The matrix to multiply
   */
  mult(other: Matrix | number | Complex): Result<Matrix, Error> {
    return other instanceof Matrix ? this.multMatrix(other) : ok(this.multScalar(other))
  }

  /**
   * Returns the tensor product of matrices.
   *
   * @param other - The matrix to multiply
   */
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

    return new Matrix(h, w, newBuffer)
  }

  /**
   * Returns true if the Matrix is equal to other.
   *
   * @param other - The other Matrix to compare with
   */
  eq(obj: Matrix | unknown): boolean {
    if (this === obj) return true
    if (!(obj instanceof Matrix)) return false

    const other = obj
    return (
      this.width === other.width &&
      this.height === other.height &&
      range(0, this.buffer.length - 1).every(i => this.buffer[i] === other.buffer[i])
    )
  }

  /**
   * Returns true if the Matrix is close to the value of other.
   *
   * @param other - The other Matrix to compare with
   */
  nearlyEq(other: Matrix | unknown, epsilon: number): boolean {
    return (
      other instanceof Matrix &&
      this.width === other.width &&
      this.height === other.height &&
      Math.sqrt(this.sub(other)._unsafeUnwrap().norm2()) <= epsilon
    )
  }

  format(options = DEFAULT_FORMAT_OPTIONS): string {
    const format = new Format(
      options.allowAbbreviation === undefined ? true : options.allowAbbreviation,
      options.maxAbbreviationError || 0,
      options.fixedDigits,
      options.itemSeparator || ', ',
    )

    const data = this.rows()
      .map(row => row.map(e => e.format(format)).join(format.itemSeparator))
      .join(`}${format.itemSeparator}{`)

    return `{{${data}}}`
  }

  toString(): string {
    return this.format()
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
    return new Matrix(this.height, this.width, this.buffer.slice())
  }

  private norm2(): number {
    let t = 0
    for (const e of this.buffer) {
      t += e * e
    }
    return t
  }

  private multMatrix(other: Matrix): Result<Matrix, Error> {
    if (this.width !== other.height) {
      return err(Error('Incompatible sizes.'))
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

    return ok(new Matrix(h, w, newBuffer))
  }

  private multScalar(v: number | Complex): Matrix {
    const newBuffer = new Float64Array(this.buffer.length)
    const sr = Complex.real(v)
    const si = Complex.imag(v)

    for (let i = 0; i < newBuffer.length; i += 2) {
      const vr = this.buffer[i]
      const vi = this.buffer[i + 1]
      newBuffer[i] = vr * sr - vi * si
      newBuffer[i + 1] = vr * si + vi * sr
    }

    return new Matrix(this.height, this.width, newBuffer)
  }
}
