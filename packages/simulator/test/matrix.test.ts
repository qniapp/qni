import {Complex, equate} from '@qni/common'
import {H, X, Y, Z} from '../src/gate-matrices'
import {Matrix} from '../src/matrix'

describe('Matrix', () => {
  test('zero', () => {
    expect(Matrix.zero(1, 1)._unsafeUnwrap().toString()).toBe('{{0}}')
    expect(Matrix.zero(2, 1)._unsafeUnwrap().toString()).toBe('{{0, 0}}')
    expect(Matrix.zero(1, 2)._unsafeUnwrap().toString()).toBe('{{0}, {0}}')
    expect(Matrix.zero(2, 2)._unsafeUnwrap().toString()).toBe('{{0, 0}, {0, 0}}')
  })

  test('col', () => {
    expect(Matrix.col(2, 3, new Complex(0, 5)).toString()).toBe('{{2}, {3}, {5i}}')
  })

  test('row', () => {
    expect(Matrix.row(2, 3, new Complex(0, 5)).toString()).toBe('{{2, 3, 5i}}')
  })

  test('identity', () => {
    expect(Matrix.identity(1)._unsafeUnwrap().toString()).toBe('{{1}}')
    expect(Matrix.identity(2)._unsafeUnwrap().toString()).toBe('{{1, 0}, {0, 1}}')
    expect(Matrix.identity(3)._unsafeUnwrap().toString()).toBe('{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}')
    expect(Matrix.identity(4)._unsafeUnwrap().toString()).toBe(
      '{{1, 0, 0, 0}, {0, 1, 0, 0}, {0, 0, 1, 0}, {0, 0, 0, 1}}',
    )

    const resErr = Matrix.identity(-1)
    expect(resErr.isErr()).toBeTruthy()
    expect(resErr._unsafeUnwrapErr().message).toBe('width(-1) < 0')
  })

  test('square', () => {
    const res = Matrix.square(1, new Complex(2, 3), -5.5, 0)

    expect(res.isOk()).toBeTruthy()
    expect(
      equate(res._unsafeUnwrap().rows(), [
        [1, new Complex(2, 3)],
        [-5.5, 0],
      ]),
    ).toBeTruthy()

    const mErr = Matrix.square(1, 1)
    expect(mErr.isErr).toBeTruthy()
  })

  test('Matrix.generate', () => {
    const res = Matrix.generate(3, 2, (row, col) => row + 10 * col)

    expect(res.isOk()).toBeTruthy()
    expect(res._unsafeUnwrap().toString()).toBe('{{0, 10, 20}, {1, 11, 21}}')
  })

  test('Matrix.create', () => {
    const mErrWidth = Matrix.create(-1, 1, new Float64Array(2))
    expect(mErrWidth.isErr()).toBeTruthy()
    expect(mErrWidth._unsafeUnwrapErr().message).toBe('width(-1) < 0')

    const mErrHeight = Matrix.create(1, -1, new Float64Array(2))
    expect(mErrHeight.isErr()).toBeTruthy()
    expect(mErrHeight._unsafeUnwrapErr().message).toBe('height(-1) < 0')

    const mErrBufferLength = Matrix.create(1, 1, new Float64Array(100))
    expect(mErrBufferLength.isErr()).toBeTruthy()
    expect(mErrBufferLength._unsafeUnwrapErr().message).toBe('width(1)*height(1)*2 !== buffer.length(100)')
  })

  test('columnAt', () => {
    const m = squareMatrix(2, 3, 5, 7)
    expect(equate(m.columnAt(0)._unsafeUnwrap(), [2, 5])).toBeTruthy()
    expect(equate(m.columnAt(1)._unsafeUnwrap(), [3, 7])).toBeTruthy()
    expect(equate(Matrix.col(1, 2, 3).columnAt(0)._unsafeUnwrap(), [1, 2, 3])).toBeTruthy()

    const resErrNegativeIndex = m.columnAt(-1)
    expect(resErrNegativeIndex.isErr()).toBeTruthy()
    expect(resErrNegativeIndex._unsafeUnwrapErr().message).toBe('colIndex < 0')

    const resErrIndexTooLarge = m.columnAt(100)
    expect(resErrIndexTooLarge.isErr()).toBeTruthy()
    expect(resErrIndexTooLarge._unsafeUnwrapErr().message).toBe('colIndex > this.width')
  })

  test('isHermitian', () => {
    const i = Complex.I

    expect(Matrix.row(1, 1).isHermitian(999)).toBeFalsy()
    expect(Matrix.col(1, 1).isHermitian(999)).toBeFalsy()

    expect(Matrix.col(1).isHermitian(0)).toBeTruthy()
    expect(Matrix.col(0).isHermitian(0)).toBeTruthy()
    expect(Matrix.col(-1).isHermitian(0)).toBeTruthy()
    expect(Matrix.col(-2).isHermitian(0)).toBeTruthy()
    expect(Matrix.col(i).isHermitian(0)).toBeFalsy()
    expect(Matrix.col(i).isHermitian(0.5)).toBeFalsy()
    expect(Matrix.col(i).isHermitian(999)).toBeTruthy()

    expect(squareMatrix(1, 0, 0, 1).isHermitian(0)).toBeTruthy()
    expect(squareMatrix(1, 1, 1, 1).isHermitian(0)).toBeTruthy()
    expect(squareMatrix(1, 1, 1.5, 1).isHermitian(0)).toBeFalsy()
    expect(squareMatrix(1, 1, 1.5, 1).isHermitian(0.5)).toBeTruthy()

    expect(squareMatrix(1, i, i, 1).isHermitian(0)).toBeFalsy()
    expect(squareMatrix(1, i, i.neg(), 1).isHermitian(0)).toBeTruthy()
    expect(squareMatrix(1, i.neg(), i, 1).isHermitian(0)).toBeTruthy()
    expect(squareMatrix(1, i, i.times(-1.5), 1).isHermitian(0)).toBeFalsy()
    expect(squareMatrix(1, i, i.times(-1.5), 1).isHermitian(0.5)).toBeTruthy()
  })

  test('trace', () => {
    expect(Matrix.identity(2)._unsafeUnwrap().trace().eq(2)).toBeTruthy()
    expect(Matrix.identity(10)._unsafeUnwrap().trace().eq(10)).toBeTruthy()
    expect(X.trace().eq(0)).toBeTruthy()
    expect(Y.trace().eq(0)).toBeTruthy()
    expect(Z.trace().eq(0)).toBeTruthy()
    expect(H.trace().eq(0)).toBeTruthy()
    expect(squareMatrix(1, 2, 3, 4).trace().eq(5)).toBeTruthy()
    expect(squareMatrix(0, 1, 2, 3, 4, 5, 6, 7, 8).trace().eq(12)).toBeTruthy()
    expect(equate(Matrix.col(NaN).trace().abs(), NaN)).toBeTruthy()
  })

  test('adjoint', () => {
    // prettier-ignore
    const v = squareMatrix(new Complex(2, 3), new Complex(5, 7),
                           new Complex(11, 13), new Complex(17, 19))
    // prettier-ignore
    const a = squareMatrix(new Complex(2, -3), new Complex(11, -13),
                           new Complex(5, -7), new Complex(17, -19))

    expect(v.adjoint().eq(a)).toBeTruthy()
    expect(Matrix.col(1, 2, Complex.I).adjoint().eq(Matrix.row(1, 2, Complex.I.neg()))).toBeTruthy()
  })

  test('add', () => {
    expect(
      squareMatrix(2, 3, 5, 7).add(squareMatrix(11, 13, 17, 19))._unsafeUnwrap().eq(squareMatrix(13, 16, 22, 26)),
    ).toBeTruthy()

    const mErr = squareMatrix(2, 3, 5, 7).add(Matrix.col(0))
    expect(mErr.isErr()).toBeTruthy()
    expect(mErr._unsafeUnwrapErr().message).toBe('Matrix.add: incompatible sizes')
  })

  test('sub', () => {
    expect(
      squareMatrix(2, 3, 5, 7).sub(squareMatrix(11, 13, 17, 19))._unsafeUnwrap().eq(squareMatrix(-9, -10, -12, -12)),
    ).toBeTruthy()

    const mErr = squareMatrix(2, 3, 5, 7).sub(Matrix.col(0))
    expect(mErr.isErr()).toBeTruthy()
    expect(mErr._unsafeUnwrapErr().message).toBe('Matrix.sub: incompatible sizes')
  })

  test('multScalar', () => {
    const v = squareMatrix(new Complex(2, 3), new Complex(5, 7), new Complex(11, 13), new Complex(17, 19))
    const a = squareMatrix(new Complex(-2, -3), new Complex(-5, -7), new Complex(-11, -13), new Complex(-17, -19))

    expect(v.mult(-1)._unsafeUnwrap().eq(a)).toBeTruthy()
    expect(v.mult(0)._unsafeUnwrap().eq(squareMatrix(0, 0, 0, 0))).toBeTruthy()
    expect(v.mult(1)._unsafeUnwrap().eq(v)).toBeTruthy()

    expect(Matrix.col(2, 3).mult(5)._unsafeUnwrap().eq(Matrix.col(10, 15))).toBeTruthy()
    expect(Matrix.row(2, 3).mult(5)._unsafeUnwrap().eq(Matrix.row(10, 15))).toBeTruthy()
  })

  test('multMatrix', () => {
    const mErr = squareMatrix(1, 2, 3, 4).mult(Matrix.col(0))
    expect(mErr.isErr()).toBeTruthy()
    expect(mErr._unsafeUnwrapErr().message).toBe('Incompatible sizes.')

    expect(
      squareMatrix(2, 3, 5, 7).mult(squareMatrix(11, 13, 17, 19))._unsafeUnwrap().eq(squareMatrix(73, 83, 174, 198)),
    ).toBeTruthy()

    const x = squareMatrix(new Complex(0.5, -0.5), new Complex(0.5, 0.5), new Complex(0.5, 0.5), new Complex(0.5, -0.5))
    expect(x.mult(x.adjoint())._unsafeUnwrap().eq(Matrix.identity(2)._unsafeUnwrap())).toBeTruthy()
    expect(
      X.mult(Y)
        ._unsafeUnwrap()
        .mult(Z)
        ._unsafeUnwrap()
        .mult(new Complex(0, -1))
        ._unsafeUnwrap()
        .eq(Matrix.identity(2)._unsafeUnwrap()),
    ).toBeTruthy()
  })

  test('tensorProduct', () => {
    expect(Matrix.col(2).tensorProduct(Matrix.col(3)).eq(Matrix.col(6))).toBeTruthy()
    expect(
      Matrix.col(new Complex(2, 3))
        .tensorProduct(Matrix.col(new Complex(5, 7)))
        .eq(Matrix.col(new Complex(-11, 29))),
    ).toBeTruthy()
    expect(Matrix.col(2).tensorProduct(Matrix.col(3)).eq(Matrix.col(6))).toBeTruthy()
    expect(
      X.tensorProduct(Z).eq(
        // prettier-ignore
        squareMatrix(
                     0, 0, 1, 0,
                     0, 0, 0, -1,
                     1, 0, 0, 0,
                     0, -1, 0, 0
                   ),
      ),
    ).toBeTruthy()
    expect(
      squareMatrix(2, 3, 5, 7).tensorProduct(squareMatrix(11, 13, 17, 19)).eq(
        // prettier-ignore
        squareMatrix(
                     22, 26, 33, 39,
                     34, 38, 51, 57,
                     55, 65, 77, 91,
                     85, 95, 119, 133
                   ),
      ),
    ).toBeTruthy()
  })

  test('eq', () => {
    // prettier-ignore
    const m = squareMatrix(new Complex(2, 3), new Complex(5, 7),
                           new Complex(11, 13), new Complex(17, 19))
    expect(m.eq(m)).toBeTruthy()
    expect(m.eq(null)).toBeFalsy()
    expect(m.eq('')).toBeFalsy()

    expect(
      // prettier-ignore
      m.eq(squareMatrix(new Complex(2, 3), new Complex(5, 7),
                        new Complex(11, 13), new Complex(17, 19))),
    ).toBeTruthy()
    expect(m.eq(Matrix.col(new Complex(2, 3)))).toBeFalsy()
    expect(
      // prettier-ignore
      m.eq(squareMatrix(new Complex(-2, 3), new Complex(5, 7),
                        new Complex(11, 13), new Complex(17, 19))),
    ).toBeFalsy()
    expect(
      // prettier-ignore
      m.eq(squareMatrix(new Complex(2, 3), new Complex(-5, 7),
                        new Complex(11, 13), new Complex(17, 19))),
    ).toBeFalsy()
    expect(
      // prettier-ignore
      m.eq(squareMatrix(new Complex(2, 3), new Complex(5, 7),
                        new Complex(-11, 13), new Complex(17, 19))),
    ).toBeFalsy()
    expect(
      // prettier-ignore
      m.eq(squareMatrix(new Complex(2, 3), new Complex(5, 7),
                        new Complex(11, 13), new Complex(-17, 19))),
    ).toBeFalsy()

    const col = Matrix.col(new Complex(2, 3), new Complex(5, 7))
    const row = Matrix.row(new Complex(2, 3), new Complex(5, 7))
    expect(col.eq(col)).toBeTruthy()
    expect(row.eq(row)).toBeTruthy()
    expect(row.eq(col)).toBeFalsy()
  })

  test('nearlyEq', () => {
    // Size must match
    expect(Matrix.row(1, 1).nearlyEq(Matrix.col(1, 1), 0)).toBeFalsy()
    expect(Matrix.row(1, 1).nearlyEq(squareMatrix(1, 1, 1, 1), 0)).toBeFalsy()
    expect(Matrix.row(1, 1).nearlyEq(Matrix.row(1, 1, 1), 0)).toBeFalsy()
    expect(Matrix.row(1, 1).nearlyEq(Matrix.row(1, 1), 0)).toBeTruthy()

    // Error bound matters
    expect(Matrix.col(1).nearlyEq(Matrix.col(1), 0)).toBeTruthy()
    expect(Matrix.col(1).nearlyEq(Matrix.col(1), 1 / 4)).toBeTruthy()
    expect(Matrix.col(1.25).nearlyEq(Matrix.col(1), 1 / 4)).toBeTruthy()
    expect(Matrix.col(0.75).nearlyEq(Matrix.col(1), 1 / 4)).toBeTruthy()
    expect(Matrix.col(1.26).nearlyEq(Matrix.col(1), 1 / 4)).toBeFalsy()
    expect(Matrix.col(0.74).nearlyEq(Matrix.col(1), 1 / 4)).toBeFalsy()

    // Error bound spreads
    expect(Matrix.row(0, 0).nearlyEq(Matrix.row(0, 0), 1)).toBeTruthy()
    expect(Matrix.row(1, 0).nearlyEq(Matrix.row(0, 0), 1)).toBeTruthy()
    expect(Matrix.row(0, 1).nearlyEq(Matrix.row(0, 0), 1)).toBeTruthy()
    expect(Matrix.row(1, 1).nearlyEq(Matrix.row(0, 0), 1)).toBeFalsy()

    expect(Matrix.col(0).nearlyEq(null, 0)).toBeFalsy()
    expect(Matrix.col(0).nearlyEq('', 0)).toBeFalsy()
  })

  test('format', () => {
    expect(equate(Matrix.col(2).format(), '{{2}}')).toBeTruthy()
    expect(
      equate(squareMatrix(1, 0, new Complex(0, -1), new Complex(2, -3)).format(), '{{1, 0}, {-i, 2-3i}}'),
    ).toBeTruthy()
    expect(equate(squareMatrix(1, 0, 0, 1).format(), '{{1, 0}, {0, 1}}')).toBeTruthy()
    expect(equate(Matrix.identity(3)._unsafeUnwrap().format(), '{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}')).toBeTruthy()

    expect(
      equate(
        squareMatrix(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001)).format(),
        '{{0, 1}, {⅓+i, 0.3333334333333333i}}',
      ),
    ).toBeTruthy()
    expect(
      equate(
        squareMatrix(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001)).format({
          maxAbbreviationError: 0.0005,
          fixedDigits: 3,
        }),
        '{{0, 1}, {⅓+i, ⅓i}}',
      ),
    ).toBeTruthy()
    expect(
      equate(
        squareMatrix(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001)).format({
          itemSeparator: ',',
        }),
        '{{0,1},{⅓+i,0.3333334333333333i}}',
      ),
    ).toBeTruthy()
    expect(
      equate(
        squareMatrix(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001)).format({
          allowAbbreviation: false,
          fixedDigits: 2,
        }),
        '{{+0.00+0.00i, +1.00+0.00i}, {+0.33+1.00i, +0.00+0.33i}}',
      ),
    ).toBeTruthy()
  })

  test('toString', () => {
    expect(equate(Matrix.col(2).toString(), '{{2}}')).toBeTruthy()
    expect(
      equate(squareMatrix(1, 0, new Complex(0, -1), new Complex(2, -3)).toString(), '{{1, 0}, {-i, 2-3i}}'),
    ).toBeTruthy()
    expect(equate(squareMatrix(1, 0, 0, 1).toString(), '{{1, 0}, {0, 1}}')).toBeTruthy()
    expect(equate(Matrix.identity(3)._unsafeUnwrap().toString(), '{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}')).toBeTruthy()
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

  test('times_ColRow', () => {
    // When one is a column vector and the other is a row vector...
    const r = Matrix.row(2, 3, 5)
    const c = Matrix.col(11, 13, 17)

    // Inner product
    expect(equate(r.mult(c)._unsafeUnwrap().toString(), '{{146}}')).toBeTruthy()

    // Outer product
    expect(equate(c.mult(r)._unsafeUnwrap().toString(), '{{22, 33, 55}, {26, 39, 65}, {34, 51, 85}}')).toBeTruthy()

    // Outer product matches tensor product
    expect(equate(c.mult(r)._unsafeUnwrap(), c.tensorProduct(r))).toBeTruthy()

    // Tensor product is order independent (in this case)
    expect(equate(r.tensorProduct(c), c.tensorProduct(r))).toBeTruthy()
  })

  test('qubitDensityMatrixToBlochVector', () => {
    expect(() => Matrix.col(1).qubitDensityMatrixToBlochVector()).toThrow()
    expect(() => squareMatrix(1, 0, 0, 0, 0, 0, 0, 0, 0).qubitDensityMatrixToBlochVector()).toThrow()
    expect(() => Matrix.identity(2)._unsafeUnwrap().qubitDensityMatrixToBlochVector()).toThrow()
    expect(() => squareMatrix(1, 1, -1, 0).qubitDensityMatrixToBlochVector()).toThrow()
    expect(() => squareMatrix(1, 1, 0, 0).qubitDensityMatrixToBlochVector()).toThrow()
    expect(() => squareMatrix(1, Complex.I, Complex.I, 0).qubitDensityMatrixToBlochVector()).toThrow()

    // Maximally mixed state.
    expect(
      equate(Matrix.identity(2)._unsafeUnwrap().mult(0.5)._unsafeUnwrap().qubitDensityMatrixToBlochVector(), [0, 0, 0]),
    ).toBeTruthy()

    // Pure states as vectors along each axis.
    const f = (...m: Array<number | Complex>) =>
      Matrix.col(...m)
        .mult(Matrix.col(...m).adjoint())
        ._unsafeUnwrap()
    const i = Complex.I
    const mi = i.times(-1)
    expect(equate(f(1, 0).qubitDensityMatrixToBlochVector(), [0, 0, 1])).toBeTruthy()
    expect(equate(f(0, 1).qubitDensityMatrixToBlochVector(), [0, 0, -1])).toBeTruthy()
    expect(equate(f(1, 1).mult(0.5)._unsafeUnwrap().qubitDensityMatrixToBlochVector(), [1, 0, 0])).toBeTruthy()
    expect(equate(f(1, -1).mult(0.5)._unsafeUnwrap().qubitDensityMatrixToBlochVector(), [-1, 0, 0])).toBeTruthy()
    expect(equate(f(1, i).mult(0.5)._unsafeUnwrap().qubitDensityMatrixToBlochVector(), [0, 1, 0])).toBeTruthy()
    expect(equate(f(1, mi).mult(0.5)._unsafeUnwrap().qubitDensityMatrixToBlochVector(), [0, -1, 0])).toBeTruthy()
  })

  test('clone', () => {
    const m = squareMatrix(new Complex(2, 3), new Complex(5, 7), new Complex(11, 13), new Complex(17, 19))
    const c = m.clone()

    expect(m.eq(c))
  })
})

function squareMatrix(...elements: Array<number | Complex>): Matrix {
  const res = Matrix.square(...elements)

  if (res.isOk()) {
    return res.value
  }

  throw res.error
}
