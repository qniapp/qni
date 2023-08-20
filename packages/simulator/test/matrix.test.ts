import {Complex, Format, equate} from '@qni/common'
import {H, X, Y, Z} from '../src/gate-matrices'
import {Matrix} from '../src/matrix'
// eslint-disable-next-line import/no-nodejs-modules
import {performance} from 'perf_hooks'

describe('Matrix', () => {
  test('generate', () => {
    expect(Matrix.generate(3, 2, (r, c) => r + 10 * c).toString()).toBe('{{0, 10, 20}, {1, 11, 21}}')
  })

  test('square', () => {
    const m = Matrix.square(1, new Complex(2, 3), -5.5, 0)._unsafeUnwrap()

    expect(
      equate(m.rows(), [
        [1, new Complex(2, 3)],
        [-5.5, 0],
      ]),
    ).toBeTruthy()

    expect(equate(Matrix.solo(1).rows(), [[1]])).toBeTruthy()
  })

  test('isEqualTo', () => {
    const m = Matrix.square(
      new Complex(2, 3),
      new Complex(5, 7),
      new Complex(11, 13),
      new Complex(17, 19),
    )._unsafeUnwrap()
    expect(equate(m, m)).toBeTruthy()
    expect(equate(m, null)).toBeFalsy()
    expect(equate(m, '')).toBeFalsy()

    expect(
      equate(
        m,
        Matrix.square(new Complex(2, 3), new Complex(5, 7), new Complex(11, 13), new Complex(17, 19))._unsafeUnwrap(),
      ),
    ).toBeTruthy()
    expect(equate(m, Matrix.solo(new Complex(2, 3)))).toBeFalsy()
    expect(
      equate(
        m,
        Matrix.square(new Complex(-2, 3), new Complex(5, 7), new Complex(11, 13), new Complex(17, 19))._unsafeUnwrap(),
      ),
    ).toBeFalsy()
    expect(
      equate(
        m,
        Matrix.square(new Complex(2, 3), new Complex(-5, 7), new Complex(11, 13), new Complex(17, 19))._unsafeUnwrap(),
      ),
    ).toBeFalsy()
    expect(
      equate(
        m,
        Matrix.square(new Complex(2, 3), new Complex(5, 7), new Complex(-11, 13), new Complex(17, 19))._unsafeUnwrap(),
      ),
    ).toBeFalsy()
    expect(
      equate(
        m,
        Matrix.square(new Complex(2, 3), new Complex(5, 7), new Complex(11, 13), new Complex(-17, 19))._unsafeUnwrap(),
      ),
    ).toBeFalsy()

    const col = Matrix.col(new Complex(2, 3), new Complex(5, 7))
    const row = Matrix.row(new Complex(2, 3), new Complex(5, 7))
    expect(equate(col, col)).toBeTruthy()
    expect(equate(row, row)).toBeTruthy()
    expect(equate(row, col)).toBeFalsy()
  })

  test('isApproximatelyEqualTo', () => {
    // Size must match
    expect(Matrix.row(1, 1).isApproximatelyEqualTo(Matrix.col(1, 1), 0)).toBeFalsy()
    expect(Matrix.row(1, 1).isApproximatelyEqualTo(Matrix.square(1, 1, 1, 1)._unsafeUnwrap(), 0)).toBeFalsy()
    expect(Matrix.row(1, 1).isApproximatelyEqualTo(Matrix.row(1, 1, 1), 0)).toBeFalsy()
    expect(Matrix.row(1, 1).isApproximatelyEqualTo(Matrix.row(1, 1), 0)).toBeTruthy()

    // Error bound matters
    expect(Matrix.solo(1).isApproximatelyEqualTo(Matrix.solo(1), 0)).toBeTruthy()
    expect(Matrix.solo(1).isApproximatelyEqualTo(Matrix.solo(1), 1 / 4)).toBeTruthy()
    expect(Matrix.solo(1.25).isApproximatelyEqualTo(Matrix.solo(1), 1 / 4)).toBeTruthy()
    expect(Matrix.solo(0.75).isApproximatelyEqualTo(Matrix.solo(1), 1 / 4)).toBeTruthy()
    expect(Matrix.solo(1.26).isApproximatelyEqualTo(Matrix.solo(1), 1 / 4)).toBeFalsy()
    expect(Matrix.solo(0.74).isApproximatelyEqualTo(Matrix.solo(1), 1 / 4)).toBeFalsy()

    // Error bound spreads
    expect(Matrix.row(0, 0).isApproximatelyEqualTo(Matrix.row(0, 0), 1)).toBeTruthy()
    expect(Matrix.row(1, 0).isApproximatelyEqualTo(Matrix.row(0, 0), 1)).toBeTruthy()
    expect(Matrix.row(0, 1).isApproximatelyEqualTo(Matrix.row(0, 0), 1)).toBeTruthy()
    expect(Matrix.row(1, 1).isApproximatelyEqualTo(Matrix.row(0, 0), 1)).toBeFalsy()

    expect(Matrix.solo(0).isApproximatelyEqualTo(null, 0)).toBeFalsy()
    expect(Matrix.solo(0).isApproximatelyEqualTo('', 0)).toBeFalsy()
  })

  test('format', () => {
    expect(equate(Matrix.solo(2).format(), '{{2}}')).toBeTruthy()
    expect(
      equate(
        Matrix.square(1, 0, new Complex(0, -1), new Complex(2, -3))._unsafeUnwrap().format(),
        '{{1, 0}, {-i, 2-3i}}',
      ),
    ).toBeTruthy()
    expect(equate(Matrix.square(1, 0, 0, 1)._unsafeUnwrap().format(), '{{1, 0}, {0, 1}}')).toBeTruthy()
    expect(equate(Matrix.identity(3).format(), '{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}')).toBeTruthy()

    expect(
      equate(
        Matrix.square(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001))
          ._unsafeUnwrap()
          .format(),
        '{{0, 1}, {⅓+i, 0.3333334333333333i}}',
      ),
    ).toBeTruthy()
    expect(
      equate(
        Matrix.square(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001))
          ._unsafeUnwrap()
          .format({
            maxAbbreviationError: 0.0005,
            fixedDigits: 3,
          }),
        '{{0, 1}, {⅓+i, ⅓i}}',
      ),
    ).toBeTruthy()
    expect(
      equate(
        Matrix.square(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001))
          ._unsafeUnwrap()
          .format({
            itemSeparator: ',',
          }),
        '{{0,1},{⅓+i,0.3333334333333333i}}',
      ),
    ).toBeTruthy()
    expect(
      equate(
        Matrix.square(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001))
          ._unsafeUnwrap()
          .format({
            allowAbbreviation: false,
            fixedDigits: 2,
          }),
        '{{+0.00+0.00i, +1.00+0.00i}, {+0.33+1.00i, +0.00+0.33i}}',
      ),
    ).toBeTruthy()
  })

  test('toString', () => {
    expect(equate(Matrix.solo(2).toString(), '{{2}}')).toBeTruthy()
    expect(
      equate(
        Matrix.square(1, 0, new Complex(0, -1), new Complex(2, -3))._unsafeUnwrap().toString(),
        '{{1, 0}, {-i, 2-3i}}',
      ),
    ).toBeTruthy()
    expect(equate(Matrix.square(1, 0, 0, 1)._unsafeUnwrap().toString(), '{{1, 0}, {0, 1}}')).toBeTruthy()
    expect(equate(Matrix.identity(3).toString(), '{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}')).toBeTruthy()

    expect(
      equate(
        Matrix.square(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001))
          ._unsafeUnwrap()
          .toString(Format.EXACT),
        '{{0, 1}, {⅓+i, 0.3333334333333333i}}',
      ),
    ).toBeTruthy()
    expect(
      equate(
        Matrix.square(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001))
          ._unsafeUnwrap()
          .toString(Format.SIMPLIFIED),
        '{{0, 1}, {⅓+i, ⅓i}}',
      ),
    ).toBeTruthy()
    expect(
      equate(
        Matrix.square(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001))
          ._unsafeUnwrap()
          .toString(Format.MINIFIED),
        '{{0,1},{⅓+i,0.3333334333333333i}}',
      ),
    ).toBeTruthy()
    expect(
      equate(
        Matrix.square(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001))
          ._unsafeUnwrap()
          .toString(Format.CONSISTENT),
        '{{+0.00+0.00i, +1.00+0.00i}, {+0.33+1.00i, +0.00+0.33i}}',
      ),
    ).toBeTruthy()
  })

  test('zero', () => {
    expect(equate(Matrix.zero(1, 1).toString(), '{{0}}')).toBeTruthy()
    expect(equate(Matrix.zero(2, 1).toString(), '{{0, 0}}')).toBeTruthy()
    expect(equate(Matrix.zero(1, 2).toString(), '{{0}, {0}}')).toBeTruthy()
    expect(equate(Matrix.zero(2, 2).toString(), '{{0, 0}, {0, 0}}')).toBeTruthy()
  })

  test('columnAt', () => {
    const m = Matrix.square(2, 3, 5, 7)._unsafeUnwrap()
    expect(equate(m.columnAt(0), [2, 5])).toBeTruthy()
    expect(equate(m.columnAt(1), [3, 7])).toBeTruthy()
    expect(equate(Matrix.col(1, 2, 3).columnAt(0), [1, 2, 3])).toBeTruthy()
  })

  test('col', () => {
    expect(equate(Matrix.col(2, 3, new Complex(0, 5)).toString(), '{{2}, {3}, {5i}}')).toBeTruthy()
  })

  test('row', () => {
    expect(equate(Matrix.row(2, 3, new Complex(0, 5)).toString(), '{{2, 3, 5i}}')).toBeTruthy()
  })

  test('size', () => {
    expect(Matrix.row(1, 1).width).toBe(2)
    expect(Matrix.row(1, 1).height).toBe(1)

    expect(Matrix.row(1, 1, 3).width).toBe(3)
    expect(Matrix.row(1, 1, 3).height).toBe(1)

    expect(Matrix.col(1, 1).width).toBe(1)
    expect(Matrix.col(1, 1).height).toBe(2)

    expect(Matrix.col(1, 1, 3).width).toBe(1)
    expect(Matrix.col(1, 1, 3).height).toBe(3)
  })

  test('isHermitian', () => {
    const i = Complex.I

    expect(Matrix.row(1, 1).isHermitian(999)).toBeFalsy()
    expect(Matrix.col(1, 1).isHermitian(999)).toBeFalsy()

    expect(Matrix.solo(1).isHermitian(0)).toBeTruthy()
    expect(Matrix.solo(0).isHermitian(0)).toBeTruthy()
    expect(Matrix.solo(-1).isHermitian(0)).toBeTruthy()
    expect(Matrix.solo(-2).isHermitian(0)).toBeTruthy()
    expect(Matrix.solo(i).isHermitian(0)).toBeFalsy()
    expect(Matrix.solo(i).isHermitian(0.5)).toBeFalsy()
    expect(Matrix.solo(i).isHermitian(999)).toBeTruthy()

    expect(Matrix.square(1, 0, 0, 1)._unsafeUnwrap().isHermitian(0)).toBeTruthy()
    expect(Matrix.square(1, 1, 1, 1)._unsafeUnwrap().isHermitian(0)).toBeTruthy()
    expect(Matrix.square(1, 1, 1.5, 1)._unsafeUnwrap().isHermitian(0)).toBeFalsy()
    expect(Matrix.square(1, 1, 1.5, 1)._unsafeUnwrap().isHermitian(0.5)).toBeTruthy()

    expect(Matrix.square(1, i, i, 1)._unsafeUnwrap().isHermitian(0)).toBeFalsy()
    expect(Matrix.square(1, i, i.neg(), 1)._unsafeUnwrap().isHermitian(0)).toBeTruthy()
    expect(Matrix.square(1, i.neg(), i, 1)._unsafeUnwrap().isHermitian(0)).toBeTruthy()
    expect(Matrix.square(1, i, i.times(-1.5), 1)._unsafeUnwrap().isHermitian(0)).toBeFalsy()
    expect(Matrix.square(1, i, i.times(-1.5), 1)._unsafeUnwrap().isHermitian(0.5)).toBeTruthy()
  })

  test('adjoint', () => {
    const v = Matrix.square(
      new Complex(2, 3),
      new Complex(5, 7),
      new Complex(11, 13),
      new Complex(17, 19),
    )._unsafeUnwrap()
    const a = Matrix.square(
      new Complex(2, -3),
      new Complex(11, -13),
      new Complex(5, -7),
      new Complex(17, -19),
    )._unsafeUnwrap()
    expect(equate(v.adjoint(), a)).toBeTruthy()
    expect(equate(Matrix.col(1, 2, Complex.I).adjoint(), Matrix.row(1, 2, Complex.I.neg()))).toBeTruthy()
  })

  test('times_scalar', () => {
    const v = Matrix.square(
      new Complex(2, 3),
      new Complex(5, 7),
      new Complex(11, 13),
      new Complex(17, 19),
    )._unsafeUnwrap()
    const a = Matrix.square(
      new Complex(-2, -3),
      new Complex(-5, -7),
      new Complex(-11, -13),
      new Complex(-17, -19),
    )._unsafeUnwrap()
    expect(equate(v.times(-1), a)).toBeTruthy()
    expect(equate(v.times(0), Matrix.square(0, 0, 0, 0)._unsafeUnwrap())).toBeTruthy()
    expect(equate(v.times(1), v)).toBeTruthy()

    expect(equate(Matrix.col(2, 3).times(5), Matrix.col(10, 15))).toBeTruthy()
    expect(equate(Matrix.row(2, 3).times(5), Matrix.row(10, 15))).toBeTruthy()
  })

  test('plus', () => {
    expect(
      equate(
        Matrix.square(2, 3, 5, 7)._unsafeUnwrap().plus(Matrix.square(11, 13, 17, 19)._unsafeUnwrap()),
        Matrix.square(13, 16, 22, 26)._unsafeUnwrap(),
      ),
    ).toBeTruthy()
  })

  test('minus', () => {
    expect(
      equate(
        Matrix.square(2, 3, 5, 7)._unsafeUnwrap().minus(Matrix.square(11, 13, 17, 19)._unsafeUnwrap()),
        Matrix.square(-9, -10, -12, -12)._unsafeUnwrap(),
      ),
    ).toBeTruthy()
  })

  test('times_matrix', () => {
    expect(
      equate(
        Matrix.square(2, 3, 5, 7)._unsafeUnwrap().times(Matrix.square(11, 13, 17, 19)._unsafeUnwrap()),
        Matrix.square(73, 83, 174, 198)._unsafeUnwrap(),
      ),
    ).toBeTruthy()

    const x = Matrix.square(
      new Complex(0.5, -0.5),
      new Complex(0.5, 0.5),
      new Complex(0.5, 0.5),
      new Complex(0.5, -0.5),
    )._unsafeUnwrap()
    expect(equate(x.times(x.adjoint()), Matrix.identity(2))).toBeTruthy()
    expect(equate(X.times(Y).times(Z).times(new Complex(0, -1)), Matrix.identity(2))).toBeTruthy()
  })

  test('times_ColRow', () => {
    // When one is a column vector and the other is a row vector...
    const r = Matrix.row(2, 3, 5)
    const c = Matrix.col(11, 13, 17)

    // Inner product
    expect(equate(r.times(c).toString(), '{{146}}')).toBeTruthy()

    // Outer product
    expect(equate(c.times(r).toString(), '{{22, 33, 55}, {26, 39, 65}, {34, 51, 85}}')).toBeTruthy()

    // Outer product matches tensor product
    expect(equate(c.times(r), c.tensorProduct(r))).toBeTruthy()

    // Tensor product is order independent (in this case)
    expect(equate(r.tensorProduct(c), c.tensorProduct(r))).toBeTruthy()
  })

  test('norm2', () => {
    expect(equate(Matrix.solo(1).norm2(), 1)).toBeTruthy()
    expect(equate(Matrix.solo(2).norm2(), 4)).toBeTruthy()
    expect(equate(Matrix.row(1, 1).norm2(), 2)).toBeTruthy()
    expect(equate(Matrix.col(1, 1).norm2(), 2)).toBeTruthy()
    expect(equate(Matrix.square(1, 2, 3, 4)._unsafeUnwrap().norm2(), 30)).toBeTruthy()
  })

  test('tensorProduct', () => {
    expect(equate(Matrix.solo(2).tensorProduct(Matrix.solo(3)), Matrix.solo(6))).toBeTruthy()
    expect(
      equate(
        Matrix.solo(new Complex(2, 3)).tensorProduct(Matrix.solo(new Complex(5, 7))),
        Matrix.solo(new Complex(-11, 29)),
      ),
    ).toBeTruthy()
    expect(equate(Matrix.solo(2).tensorProduct(Matrix.solo(3)), Matrix.solo(6))).toBeTruthy()
    expect(
      equate(
        X.tensorProduct(Z),
        // prettier-ignore
        Matrix.square(
                     0, 0, 1, 0,
                     0, 0, 0, -1,
                     1, 0, 0, 0,
                     0, -1, 0, 0
                   )._unsafeUnwrap(),
      ),
    ).toBeTruthy()
    expect(
      equate(
        Matrix.square(2, 3, 5, 7)._unsafeUnwrap().tensorProduct(Matrix.square(11, 13, 17, 19)._unsafeUnwrap()),
        // prettier-ignore
        Matrix.square(
                     22, 26, 33, 39,
                     34, 38, 51, 57,
                     55, 65, 77, 91,
                     85, 95, 119, 133
                   )._unsafeUnwrap(),
      ),
    ).toBeTruthy()
  })

  test('timesQubitOperation', () => {
    const s = Math.sqrt(0.5)

    expect(equate(Matrix.col(1, 0, 0, 0).timesQubitOperation(H, 0, 0, 0), Matrix.col(s, s, 0, 0))).toBeTruthy()
    expect(equate(Matrix.col(0, 1, 0, 0).timesQubitOperation(H, 0, 0, 0), Matrix.col(s, -s, 0, 0))).toBeTruthy()
    expect(equate(Matrix.col(0, 0, 1, 0).timesQubitOperation(H, 0, 0, 0), Matrix.col(0, 0, s, s))).toBeTruthy()
    expect(equate(Matrix.col(0, 0, 0, 1).timesQubitOperation(H, 0, 0, 0), Matrix.col(0, 0, s, -s))).toBeTruthy()

    expect(equate(Matrix.col(1, 0, 0, 0).timesQubitOperation(H, 1, 0, 0), Matrix.col(s, 0, s, 0))).toBeTruthy()
    expect(equate(Matrix.col(0, 1, 0, 0).timesQubitOperation(H, 1, 0, 0), Matrix.col(0, s, 0, s))).toBeTruthy()
    expect(equate(Matrix.col(0, 0, 1, 0).timesQubitOperation(H, 1, 0, 0), Matrix.col(s, 0, -s, 0))).toBeTruthy()
    expect(equate(Matrix.col(0, 0, 0, 1).timesQubitOperation(H, 1, 0, 0), Matrix.col(0, s, 0, -s))).toBeTruthy()

    expect(equate(Matrix.col(2, 3, 0, 0).timesQubitOperation(X, 1, 1, 0), Matrix.col(0, 3, 2, 0))).toBeTruthy()
    expect(equate(Matrix.col(2, 3, 0, 0).timesQubitOperation(X, 1, 1, 1), Matrix.col(2, 0, 0, 3))).toBeTruthy()
  })

  test('timesQubitOperation_speed', () => {
    const numQubits = 10
    const numOps = 100
    const t0 = performance.now()
    const buf = new Float64Array(2 << numQubits)
    buf[0] = 1
    let state = new Matrix(1, 1 << numQubits, buf)
    for (let i = 0; i < numOps; i++) {
      state = state.timesQubitOperation(H, 0, 6, 0)
    }

    const t1 = performance.now()
    expect(t1 - t0 < 100).toBeTruthy()
  })

  test('identity', () => {
    expect(equate(Matrix.identity(1).toString(), '{{1}}')).toBeTruthy()
    expect(equate(Matrix.identity(2).toString(), '{{1, 0}, {0, 1}}')).toBeTruthy()
    expect(equate(Matrix.identity(3).toString(), '{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}')).toBeTruthy()
    expect(
      equate(Matrix.identity(4).toString(), '{{1, 0, 0, 0}, {0, 1, 0, 0}, {0, 0, 1, 0}, {0, 0, 0, 1}}'),
    ).toBeTruthy()
  })

  test('trace', () => {
    expect(equate(Matrix.solo(NaN).trace().abs(), NaN)).toBeTruthy()
    expect(equate(Matrix.identity(2).trace(), 2)).toBeTruthy()
    expect(equate(Matrix.identity(10).trace(), 10)).toBeTruthy()

    expect(equate(X.trace(), 0)).toBeTruthy()
    expect(equate(Y.trace(), 0)).toBeTruthy()
    expect(equate(Z.trace(), 0)).toBeTruthy()
    expect(equate(H.trace(), 0)).toBeTruthy()
    expect(equate(Matrix.square(1, 2, 3, 4)._unsafeUnwrap().trace(), 5)).toBeTruthy()

    expect(equate(Matrix.square(0, 1, 2, 3, 4, 5, 6, 7, 8)._unsafeUnwrap().trace(), 12)).toBeTruthy()
  })

  test('qubitDensityMatrixToBlochVector', () => {
    expect(() => Matrix.solo(1).qubitDensityMatrixToBlochVector()).toThrow()
    expect(() => Matrix.square(1, 0, 0, 0, 0, 0, 0, 0, 0)._unsafeUnwrap().qubitDensityMatrixToBlochVector()).toThrow()
    expect(() => Matrix.identity(2).qubitDensityMatrixToBlochVector()).toThrow()
    expect(() => Matrix.square(1, 1, -1, 0)._unsafeUnwrap().qubitDensityMatrixToBlochVector()).toThrow()
    expect(() => Matrix.square(1, 1, 0, 0)._unsafeUnwrap().qubitDensityMatrixToBlochVector()).toThrow()
    expect(() => Matrix.square(1, Complex.I, Complex.I, 0)._unsafeUnwrap().qubitDensityMatrixToBlochVector()).toThrow()

    // Maximally mixed state.
    expect(equate(Matrix.identity(2).times(0.5).qubitDensityMatrixToBlochVector(), [0, 0, 0])).toBeTruthy()

    // Pure states as vectors along each axis.
    const f = (...m: Array<number | Complex>) => Matrix.col(...m).times(Matrix.col(...m).adjoint())
    const i = Complex.I
    const mi = i.times(-1)
    expect(equate(f(1, 0).qubitDensityMatrixToBlochVector(), [0, 0, 1])).toBeTruthy()
    expect(equate(f(0, 1).qubitDensityMatrixToBlochVector(), [0, 0, -1])).toBeTruthy()
    expect(equate(f(1, 1).times(0.5).qubitDensityMatrixToBlochVector(), [1, 0, 0])).toBeTruthy()
    expect(equate(f(1, -1).times(0.5).qubitDensityMatrixToBlochVector(), [-1, 0, 0])).toBeTruthy()
    expect(equate(f(1, i).times(0.5).qubitDensityMatrixToBlochVector(), [0, 1, 0])).toBeTruthy()
    expect(equate(f(1, mi).times(0.5).qubitDensityMatrixToBlochVector(), [0, -1, 0])).toBeTruthy()
  })
})
