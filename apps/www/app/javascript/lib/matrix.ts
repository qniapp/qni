import {Complex, PARSE_COMPLEX_TOKEN_MAP_RAD} from './complex'
import {Seq, seq} from './seq'
import {DetailedError} from './detailedError'
import {Format} from './format'
import {Util} from './util'
import {parseAngle} from './angleParser'
import {parseFormula} from './formulaParser'

export class Matrix {
  static readonly H = Matrix.square(1, 1, 1, -1).times(Math.sqrt(0.5))
  static readonly PAULI_X = Matrix.square(0, 1, 1, 0)
  static readonly PAULI_Y = Matrix.square(0, new Complex(0, -1), Complex.I, 0)
  static readonly PAULI_Z = Matrix.square(1, 0, 0, -1)

  static PHASE(phi: string): Matrix {
    const φ = parseAngle(phi)
    const e = Complex.from(Math.E)

    return Matrix.square(1, 0, 0, e.raisedTo(Complex.I.times(φ)))
  }

  static get RNOT(): Matrix {
    const i = Complex.I
    const mi = i.neg()

    return Matrix.square(i.plus(1), mi.plus(1), mi.plus(1), i.plus(1)).times(0.5)
  }

  static RX(theta: string): Matrix {
    const θ = parseFormula<number>(theta, PARSE_COMPLEX_TOKEN_MAP_RAD)
    const mi = Complex.I.neg()
    const cosθ2 = Math.cos(θ / 2)
    const sinθ2 = Math.sin(θ / 2)

    return Matrix.square(cosθ2, mi.times(sinθ2), mi.times(sinθ2), cosθ2)
  }

  static RY(theta: string): Matrix {
    const θ = parseFormula<number>(theta, PARSE_COMPLEX_TOKEN_MAP_RAD)
    const cosθ2 = Math.cos(θ / 2)
    const sinθ2 = Math.sin(θ / 2)

    return Matrix.square(cosθ2, -sinθ2, sinθ2, cosθ2)
  }

  static RZ(theta: string): Matrix {
    const θ = parseFormula<number>(theta, PARSE_COMPLEX_TOKEN_MAP_RAD)
    const e = Complex.from(Math.E)
    const i = Complex.I

    return Matrix.square(e.raisedTo(i.neg().times(θ / 2)), 0, 0, e.raisedTo(i.times(θ / 2)))
  }

  public width: number
  public height: number
  public buffer: Float64Array | Float32Array

  static fromRows(rows: Complex[][]): Matrix {
    Util.need(rows.length > 0, 'non-zero height', rows)

    const seqRows = seq(rows)
    const h = rows.length
    const w = seqRows
      .map((e: Complex[]) => e.length)
      .distinct()
      .single(null)
    if (w === null) {
      throw new DetailedError('Inconsistent row widths.', {rows})
    }

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
    coefficientRowColGenerator: (row: number, col: number) => number | Complex
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

  static generateDiagonal(size: number, coefficientFunc: (e: number) => number | Complex): Matrix {
    const buf = new Float64Array(size * size * 2)
    for (let i = 0; i < size; i++) {
      const k = i * (size + 1) * 2
      const v = coefficientFunc(i)
      buf[k] = Complex.realPartOf(v)
      buf[k + 1] = Complex.imagPartOf(v)
    }
    return new Matrix(size, size, buf)
  }

  static zero(width: number, height: number): Matrix {
    return new Matrix(width, height, new Float64Array(width * height * 2))
  }

  getColumn(colIndex: number): Complex[] {
    Util.need(colIndex >= 0 && colIndex <= this.width, 'colIndex >= 0 && colIndex <= this.width')
    const col = []
    for (let r = 0; r < this.height; r++) {
      col.push(this.cell(colIndex, r))
    }
    return col
  }

  constructor(width: number, height: number, buffer: Float64Array | Float32Array) {
    if (width * height * 2 !== buffer.length) {
      throw new DetailedError('width*height*2 !== buffer.length', {
        width,
        height,
        len: buffer.length
      })
    }
    this.width = width
    this.height = height
    this.buffer = buffer
  }

  isUnitary(epsilon: number): boolean {
    const n = this.width
    if (this.height !== n) {
      return false
    }
    return this.times(this.adjoint()).isApproximatelyEqualTo(Matrix.identity(n), epsilon)
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

  static rotation(theta: number): Matrix {
    const c = Math.cos(theta)
    const s = Math.sin(theta)
    return Matrix.square(c, -s, s, c)
  }

  isEqualTo(obj: Matrix | unknown): boolean {
    if (this === obj) {
      return true
    }
    if (!(obj instanceof Matrix)) {
      return false
    }

    const other = obj
    return (
      this.width === other.width &&
      this.height === other.height &&
      Seq.range(this.buffer.length).every(i => this.buffer[i] === other.buffer[i])
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
    return Seq.range(this.height)
      .map<Complex[]>((row: number) =>
        Seq.range(this.width)
          .map<Complex>((col: number) => this.cell(col, row))
          .toArray()
      )
      .toArray()
  }

  cell(col: number, row: number): Complex {
    if (col < 0 || row < 0 || col >= this.width || row >= this.height) {
      throw new DetailedError('Cell out of range', {
        col,
        row,
        width: this.width,
        height: this.height
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
        height: this.height
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

  singularValueDecomposition(epsilon = 0, maxIterations = 100): {U: Matrix; S: Matrix; V: Matrix} {
    if (this.width !== this.height) {
      throw new DetailedError('Expected a square matrix.', this)
    }

    // eslint-disable-next-line prefer-const
    let {U, S, V} =
      this.width === 2
        ? this._unordered_singularValueDecomposition_2x2()
        : this._unordered_singularValueDecomposition_iterative(epsilon, maxIterations)

    // Fix ordering, so that the singular values are ascending.
    const permutation = Seq.range(this.width)
      .sortedBy(i => -S.cell(i, i).norm2())
      .toArray()
    for (let i = 0; i < S.width; i++) {
      const j = permutation.indexOf(i)
      if (i !== j) {
        U._inline_colMix_postMultiply(i, j, Matrix.PAULI_X)
        V._inline_rowMix_preMultiply(i, j, Matrix.PAULI_X)
        const si = i * (S.width + 1) * 2
        const sj = j * (S.width + 1) * 2
        ;[S.buffer[si], S.buffer[sj]] = [S.buffer[sj], S.buffer[si]]
        ;[S.buffer[si + 1], S.buffer[sj + 1]] = [S.buffer[sj + 1], S.buffer[si + 1]]
        ;[permutation[j], permutation[i]] = [permutation[i], permutation[j]]
      }
    }

    // Fix phases.
    for (let i = 0; i < S.width; i++) {
      U._inline_colScale_postMultiply(i, S.cell(i, i).unit())
    }

    // Discard off-diagonal elements.
    S = Matrix.generateDiagonal(S.width, k => S.cell(k, k).abs())

    return {U, S, V}
  }

  _unordered_singularValueDecomposition_2x2(): {
    U: Matrix
    S: Matrix
    V: Matrix
  } {
    // Initial dirty work of clearing a corner is handled by the LQ decomposition.
    const U = Matrix.identity(2)
    // eslint-disable-next-line prefer-const
    let {L: S, Q: V} = this.lqDecomposition()

    // Cancel phase factors, leaving S with only real entries.
    const au = S.cell(0, 0).unit()
    const cu = S.cell(0, 1).unit()
    U._inline_colScale_postMultiply(0, au)
    U._inline_colScale_postMultiply(1, cu)
    S._inline_rowScale_preMultiply(0, au.conjugate())
    S._inline_rowScale_preMultiply(1, cu.conjugate())
    const du = S.cell(1, 1).unit()
    S._inline_colScale_postMultiply(1, du.conjugate())
    V._inline_rowScale_preMultiply(1, du)

    // Decompose the 2x2 real matrix.
    const [a, , b, , c, , d] = S.buffer
    const t = a + d
    const x = b + c
    const y = b - c
    const z = a - d
    const theta_0 = Math.atan2(x, t) / 2.0
    const theta_d = Math.atan2(y, z) / 2.0
    const s_0 = Math.sqrt(t * t + x * x) / 2.0
    const s_d = Math.sqrt(z * z + y * y) / 2.0
    U._inline_colMix_postMultiply(0, 1, Matrix.rotation(theta_0 - theta_d))
    V._inline_rowMix_preMultiply(0, 1, Matrix.rotation(theta_0 + theta_d))
    S = Matrix.square(s_0 + s_d, 0, 0, s_0 - s_d)

    return {U, S, V}
  }

  _unordered_singularValueDecomposition_iterative(epsilon = 0, maxIterations = 100): {U: Matrix; S: Matrix; V: Matrix} {
    let U = Matrix.identity(this.width)
    let S = this._clone()
    let V = Matrix.identity(this.width)
    let iter = 0
    while (!S.isDiagonal(epsilon) && iter++ < maxIterations) {
      const {Q: Ql, R: Sl} = S.qrDecomposition()
      const {L: Sr, Q: Qr} = Sl.lqDecomposition()
      U = U.times(Ql)
      S = Sr
      V = Qr.times(V)
    }

    return {U, S, V}
  }

  private _inline_colMix_postMultiply(col1: number, col2: number, op: Matrix): void {
    const [a, b, c, d] = op._2x2Breakdown()
    for (let row = 0; row < this.width; row++) {
      const x = this.cell(col1, row)
      const y = this.cell(col2, row)
      const v1 = x.times(a).plus(y.times(c))
      const v2 = x.times(b).plus(y.times(d))
      const k1 = (row * this.width + col1) * 2
      const k2 = (row * this.width + col2) * 2
      this.buffer[k1] = v1.real
      this.buffer[k1 + 1] = v1.imag
      this.buffer[k2] = v2.real
      this.buffer[k2 + 1] = v2.imag
    }
  }

  private _2x2Breakdown(): Complex[] {
    return [
      new Complex(this.buffer[0], this.buffer[1]),
      new Complex(this.buffer[2], this.buffer[3]),
      new Complex(this.buffer[4], this.buffer[5]),
      new Complex(this.buffer[6], this.buffer[7])
    ]
  }

  private _inline_rowMix_preMultiply(row1: number, row2: number, op: Matrix): void {
    const [a, b, c, d] = op._2x2Breakdown()
    for (let col = 0; col < this.width; col++) {
      const x = this.cell(col, row1)
      const y = this.cell(col, row2)
      const v1 = x.times(a).plus(y.times(b))
      const v2 = x.times(c).plus(y.times(d))
      const k1 = (row1 * this.width + col) * 2
      const k2 = (row2 * this.width + col) * 2
      this.buffer[k1] = v1.real
      this.buffer[k1 + 1] = v1.imag
      this.buffer[k2] = v2.real
      this.buffer[k2 + 1] = v2.imag
    }
  }

  _inline_colScale_postMultiply(col: number, scale: Complex): void {
    for (let row = 0; row < this.height; row++) {
      const v1 = this.cell(col, row)
      const v2 = v1.times(scale)
      const k = (row * this.width + col) * 2
      this.buffer[k] = v2.real
      this.buffer[k + 1] = v2.imag
    }
  }

  lqDecomposition(): {L: Matrix; Q: Matrix} {
    const {Q, R} = this.adjoint().qrDecomposition()
    return {L: R.adjoint(), Q: Q.adjoint()}
  }

  qrDecomposition(): {Q: Matrix; R: Matrix} {
    if (this.width !== this.height) {
      throw new DetailedError('Expected a square matrix.', this)
    }
    const Q = Matrix.identity(this.width)
    const R = this._clone()
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < row && col < this.width; col++) {
        // We're going to cancel out the value below the diagonal with a Givens rotation.

        const belowDiag = R.cell(col, row) // Zero this.
        const onDiag = R.cell(col, col) // With this.

        // Determine how much to rotate.
        const mag1 = onDiag.abs()
        const mag2 = belowDiag.abs()
        if (mag2 === 0) {
          continue // Already zero'd.
        }
        const theta = -Math.atan2(mag2, mag1)
        const cos = Math.cos(theta)
        const sin = Math.sin(theta)

        // Need to cancel phases before rotating.
        const phase1 = onDiag.unit().conjugate()
        const phase2 = belowDiag.unit().conjugate()

        // Apply the rotation to R (and cancel it with Q).
        const op = Matrix.square(phase1.times(cos), phase2.times(-sin), phase1.times(sin), phase2.times(cos))
        R._inline_rowMix_preMultiply(col, row, op)
        Q._inline_colMix_postMultiply(col, row, op.adjoint())
      }

      // Cancel imaginary factors on diagonal.
      const u = R.cell(row, row).unit()
      R._inline_rowScale_preMultiply(row, u.conjugate())
      Q._inline_colScale_postMultiply(row, u)
    }
    return {Q, R}
  }

  private _clone(): Matrix {
    return new Matrix(this.width, this.height, this.buffer.slice())
  }

  private _inline_rowScale_preMultiply(row: number, scale: Complex): void {
    for (let col = 0; col < this.width; col++) {
      const v1 = this.cell(col, row)
      const v2 = v1.times(scale)
      const k = (row * this.width + col) * 2
      this.buffer[k] = v2.real
      this.buffer[k + 1] = v2.imag
    }
  }

  isDiagonal(epsilon = 0): boolean {
    for (let c = 0; c < this.width; c++) {
      for (let r = 0; r < this.height; r++) {
        if (r === c) {
          continue
        }
        const k = (this.width * r + c) * 2
        const dr = Math.abs(this.buffer[k])
        const di = Math.abs(this.buffer[k + 1])
        const d = Math.max(dr, di)
        if (isNaN(d) || d > epsilon) {
          return false
        }
      }
    }
    return this.width === this.height
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

  qubitDensityMatrix(bit: number): Matrix {
    const traceBits = [...Array(Math.log2(this.height)).keys()].filter(each => each !== bit)
    const removeBits = (num: number, bits: number[]) => {
      return bits
        .sort()
        .reverse()
        .reduce((result, each) => {
          let mask = result >> (each + 1)
          mask = mask << each
          const right = ((1 << each) - 1) & result

          return mask | right
        }, num)
    }

    let densityMatrix = Matrix.zero(2, 2)

    for (let bra = 0; bra < this.height; bra++) {
      for (let ket = 0; ket < this.height; ket++) {
        const survived = traceBits.every(b => {
          return ((bra >> b) & 1) === ((ket >> b) & 1)
        })
        if (!survived) continue

        const amp = this.cell(0, ket).times(this.cell(0, bra).conjugate())
        if (amp.isEqualTo(0)) continue

        const ketMat = removeBits(ket, traceBits) === 0 ? Matrix.col(1, 0) : Matrix.col(0, 1)
        const braMat = removeBits(bra, traceBits) === 0 ? Matrix.row(1, 0) : Matrix.row(0, 1)
        const ketBra = ketMat.times(braMat)

        densityMatrix = densityMatrix.plus(ketBra.times(amp))
      }
    }

    return densityMatrix
  }

  static fromAngleAxisPhaseRotation(angle: number, axis: number[], phase: number): Matrix {
    const [x, y, z] = axis
    Util.need(Math.abs(x * x + y * y + z * z - 1) < 0.000001, 'Not a unit axis.')

    const vσ = Matrix.PAULI_X.times(x).plus(Matrix.PAULI_Y.times(y)).plus(Matrix.PAULI_Z.times(z))
    const [cos, sin] = Util.snappedCosSin(-angle / 2)
    return Matrix.identity(2)
      .times(cos)
      .plus(vσ.times(new Complex(0, sin)))
      .times(Complex.polar(1, phase))
  }

  qubitOperationToAngleAxisRotation(): {
    axis: number[]
    angle: number
    phase: number
  } {
    Util.need(this.width === 2 && this.height === 2, 'Need a 2x2 matrix.')
    Util.need(this.isUnitary(0.01), 'Need a unitary matrix.')

    // Extract orthogonal components, adjusting for factors of i.
    const [a, b, c, d] = this._2x2Breakdown()
    const wφ = a.plus(d)
    const xφ = b.plus(c).dividedBy(Complex.I)
    const yφ = b.minus(c)
    const zφ = a.minus(d).dividedBy(Complex.I)

    // Cancel global phase factor, pushing all values onto the real line.
    // let φ = seq([wφ, xφ, yφ, zφ]).maxBy(e => e.abs())
    //   .unit()
    //   .times(2) as Complex
    const t: Complex = seq([wφ, xφ, yφ, zφ]).maxBy((e: Complex) => e.abs())
    let φ = t.unit().times(2)

    const w = Math.min(1, Math.max(-1, wφ.dividedBy(φ).real))
    let x = xφ.dividedBy(φ).real
    let y = yφ.dividedBy(φ).real
    let z = zφ.dividedBy(φ).real
    let θ = -2 * Math.acos(w)

    // Normalize axis.
    const n = Math.sqrt(x * x + y * y + z * z)
    if (n < 0.0000001) {
      // There's an axis singularity near θ=0. Just default to no rotation around the X axis.
      return {axis: [1, 0, 0], angle: 0, phase: φ.phase()}
    }
    x /= n
    y /= n
    z /= n

    // Prefer θ in [-π, π].
    if (θ <= -Math.PI) {
      θ += 2 * Math.PI
      φ = φ.times(-1)
    }

    // Prefer axes that point positive-ward.
    if (x + y + z < 0) {
      x = -x
      y = -y
      z = -z
      θ = -θ
    }

    return {axis: [x, y, z], angle: θ, phase: φ.phase()}
  }

  isUpperTriangular(epsilon = 0): boolean {
    for (let r = 0; r < this.height; r++) {
      for (let c = 0; c < r && c < this.width; c++) {
        const k = (r * this.width + c) * 2
        const v1 = this.buffer[k]
        const v2 = this.buffer[k + 1]
        if (isNaN(v1) || isNaN(v2) || v1 * v1 + v2 * v2 > epsilon * epsilon) {
          return false
        }
      }
    }
    return true
  }

  isLowerTriangular(epsilon = 0): boolean {
    for (let r = 0; r < this.height; r++) {
      for (let c = r + 1; c < this.width; c++) {
        const k = (r * this.width + c) * 2
        const v1 = this.buffer[k]
        const v2 = this.buffer[k + 1]
        if (isNaN(v1) || isNaN(v2) || v1 * v1 + v2 * v2 > epsilon * epsilon) {
          return false
        }
      }
    }
    return true
  }
}
