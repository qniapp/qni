import {Complex} from '@qni/common'
import {H, X, Y, Z} from '../src/gate-matrices'
import {Matrix} from '../src/matrix'

describe('Matrix', () => {
  describe('rows', () => {
    test('Matrix.rows', () => {
      const m = Matrix.rows([
        [1, 0],
        [new Complex(0, -1), new Complex(2, -3)],
      ])

      expect(m._unsafeUnwrap().toString()).toBe('{{1, 0}, {-i, 2-3i}}')
    })

    test('Matrix.rows returns an error (empty rows)', () => {
      expect(Matrix.rows([])._unsafeUnwrapErr().message).toBe('rows is empty')
    })

    test('Matrix.rows returns an error (empty rows[0])', () => {
      expect(Matrix.rows([[]])._unsafeUnwrapErr().message).toBe('rows[0] is empty')
    })
  })

  test('Matrix.column_vector', () => {
    const m = Matrix.column_vector(2, 3, new Complex(0, 5))

    expect(m._unsafeUnwrap().toString()).toBe('{{2}, {3}, {5i}}')
  })

  test('Matrix.build', () => {
    const m = Matrix.build(2, 3)

    expect(m._unsafeUnwrap().toString()).toBe('{{0, 0, 0}, {0, 0, 0}}')
  })

  test('Matrix.build with an element generator', () => {
    const m = Matrix.build(2, 3, (row, col) => row + 10 * col)

    expect(m._unsafeUnwrap().toString()).toBe('{{0, 10, 20}, {1, 11, 21}}')
  })

  describe('column', () => {
    const m = M([
      [2, 3],
      [5, 7],
    ])

    test('returns a Complex array', () => {
      expect(m.column(0)._unsafeUnwrap()).toEqual([Complex.from(2), Complex.from(5)])
      expect(m.column(1)._unsafeUnwrap()).toEqual([Complex.from(3), Complex.from(7)])
    })

    test('negative index error', () => {
      expect(m.column(-1)._unsafeUnwrapErr().message).toBe('colIndex < 0')
    })

    test('index too large error', () => {
      expect(m.column(100)._unsafeUnwrapErr().message).toBe('colIndex > this.width')
    })
  })

  describe('add', () => {
    test('add Matrix', () => {
      expect(
        M([
          [2, 3],
          [5, 7],
        ])
          .add(
            M([
              [11, 13],
              [17, 19],
            ]),
          )
          ._unsafeUnwrap()
          .eq(
            M([
              [13, 16],
              [22, 26],
            ]),
          ),
      ).toBeTruthy()
    })

    test('error (incompatible sizes)', () => {
      const mErr = M([
        [2, 3],
        [5, 7],
      ]).add(M([[0]]))
      expect(mErr._unsafeUnwrapErr().message).toBe('Incompatible sizes')
    })
  })

  describe('sub', () => {
    test('sub Matrix', () => {
      expect(
        M([
          [2, 3],
          [5, 7],
        ])
          .sub(
            M([
              [11, 13],
              [17, 19],
            ]),
          )
          ._unsafeUnwrap()
          .eq(
            M([
              [-9, -10],
              [-12, -12],
            ]),
          ),
      ).toBeTruthy()
    })

    test('error (incompatible sizes)', () => {
      const mErr = M([
        [2, 3],
        [5, 7],
      ]).sub(M([[0]]))
      expect(mErr._unsafeUnwrapErr().message).toBe('Incompatible sizes')
    })
  })

  describe('mult', () => {
    test('* -1', () => {
      expect(
        M([
          [new Complex(2, 3), new Complex(5, 7)],
          [new Complex(11, 13), new Complex(17, 19)],
        ])
          .mult(-1)
          ._unsafeUnwrap()
          .eq(
            M([
              [new Complex(-2, -3), new Complex(-5, -7)],
              [new Complex(-11, -13), new Complex(-17, -19)],
            ]),
          ),
      ).toBeTruthy()
    })

    test('* 0', () => {
      const v = M([
        [new Complex(2, 3), new Complex(5, 7)],
        [new Complex(11, 13), new Complex(17, 19)],
      ])

      expect(
        v
          .mult(0)
          ._unsafeUnwrap()
          .eq(
            M([
              [0, 0],
              [0, 0],
            ]),
          ),
      ).toBeTruthy()
    })

    test('* 1', () => {
      const v = M([
        [new Complex(2, 3), new Complex(5, 7)],
        [new Complex(11, 13), new Complex(17, 19)],
      ])

      expect(v.mult(1)._unsafeUnwrap().eq(v)).toBeTruthy()
    })

    test('* 5', () => {
      expect(
        M([
          [1, 2],
          [3, 4],
        ])
          .mult(5)
          ._unsafeUnwrap()
          .eq(
            M([
              [5, 10],
              [15, 20],
            ]),
          ),
      )
    })

    test('* M', () => {
      expect(
        M([
          [2, 3],
          [5, 7],
        ])
          .mult(
            M([
              [11, 13],
              [17, 19],
            ]),
          )
          ._unsafeUnwrap()
          .eq(
            M([
              [73, 83],
              [174, 198],
            ]),
          ),
      ).toBeTruthy()
    })

    test('-iXYZ = I', () => {
      expect(
        X.mult(Y)
          ._unsafeUnwrap()
          .mult(Z)
          ._unsafeUnwrap()
          .mult(new Complex(0, -1))
          ._unsafeUnwrap()
          .eq(
            M([
              [1, 0],
              [0, 1],
            ]),
          ),
      ).toBeTruthy()
    })

    test('incompatible sizes error', () => {
      const mErr = M([
        [1, 2],
        [3, 4],
      ]).mult(M([[0]]))

      expect(mErr._unsafeUnwrapErr().message).toBe('Incompatible sizes.')
    })
  })

  test('isHermitian', () => {
    const i = Complex.I

    expect(
      Matrix.rows([[1, 1]])
        ._unsafeUnwrap()
        .isHermitian(999),
    ).toBeFalsy()
    expect(Matrix.column_vector(1, 1)._unsafeUnwrap().isHermitian(999)).toBeFalsy()

    expect(Matrix.column_vector(1)._unsafeUnwrap().isHermitian(0)).toBeTruthy()
    expect(Matrix.column_vector(0)._unsafeUnwrap().isHermitian(0)).toBeTruthy()
    expect(Matrix.column_vector(-1)._unsafeUnwrap().isHermitian(0)).toBeTruthy()
    expect(Matrix.column_vector(-2)._unsafeUnwrap().isHermitian(0)).toBeTruthy()
    expect(Matrix.column_vector(i)._unsafeUnwrap().isHermitian(0)).toBeFalsy()
    expect(Matrix.column_vector(i)._unsafeUnwrap().isHermitian(0.5)).toBeFalsy()
    expect(Matrix.column_vector(i)._unsafeUnwrap().isHermitian(999)).toBeTruthy()

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
    expect(X.trace().eq(0)).toBeTruthy()
    expect(Y.trace().eq(0)).toBeTruthy()
    expect(Z.trace().eq(0)).toBeTruthy()
    expect(H.trace().eq(0)).toBeTruthy()
    expect(squareMatrix(1, 2, 3, 4).trace().eq(5)).toBeTruthy()
    expect(squareMatrix(0, 1, 2, 3, 4, 5, 6, 7, 8).trace().eq(12)).toBeTruthy()
    expect(Matrix.column_vector(NaN)._unsafeUnwrap().trace().abs()).toBe(NaN)
  })

  test('adjoint', () => {
    // prettier-ignore
    const v = squareMatrix(new Complex(2, 3), new Complex(5, 7),
                           new Complex(11, 13), new Complex(17, 19))
    // prettier-ignore
    const a = squareMatrix(new Complex(2, -3), new Complex(11, -13),
                           new Complex(5, -7), new Complex(17, -19))

    expect(v.adjoint().eq(a)).toBeTruthy()
    expect(
      Matrix.column_vector(1, 2, Complex.I)
        ._unsafeUnwrap()
        .adjoint()
        .eq(Matrix.rows([[1, 2, Complex.I.neg()]])._unsafeUnwrap()),
    ).toBeTruthy()
  })

  test('tensorProduct', () => {
    expect(
      Matrix.column_vector(2)
        ._unsafeUnwrap()
        .tensorProduct(Matrix.column_vector(3)._unsafeUnwrap())
        .eq(Matrix.column_vector(6)._unsafeUnwrap()),
    ).toBeTruthy()
    expect(
      Matrix.column_vector(new Complex(2, 3))
        ._unsafeUnwrap()
        .tensorProduct(Matrix.column_vector(new Complex(5, 7))._unsafeUnwrap())
        .eq(Matrix.column_vector(new Complex(-11, 29))._unsafeUnwrap()),
    ).toBeTruthy()
    expect(
      Matrix.column_vector(2)
        ._unsafeUnwrap()
        .tensorProduct(Matrix.column_vector(3)._unsafeUnwrap())
        .eq(Matrix.column_vector(6)._unsafeUnwrap()),
    ).toBeTruthy()
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
    expect(m.eq(Matrix.column_vector(new Complex(2, 3)))).toBeFalsy()
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

    const col = Matrix.column_vector(new Complex(2, 3), new Complex(5, 7))._unsafeUnwrap()
    const row = Matrix.rows([[new Complex(2, 3), new Complex(5, 7)]])._unsafeUnwrap()
    expect(col.eq(col)).toBeTruthy()
    expect(row.eq(row)).toBeTruthy()
    expect(row.eq(col)).toBeFalsy()
  })

  test('nearlyEq', () => {
    // Size must match
    expect(
      Matrix.rows([[1, 1]])
        ._unsafeUnwrap()
        .nearlyEq(Matrix.column_vector(1, 1), 0),
    ).toBeFalsy()
    expect(
      Matrix.rows([[1, 1]])
        ._unsafeUnwrap()
        .nearlyEq(squareMatrix(1, 1, 1, 1), 0),
    ).toBeFalsy()
    expect(
      Matrix.rows([[1, 1]])
        ._unsafeUnwrap()
        .nearlyEq(Matrix.rows([[1, 1, 1]])._unsafeUnwrap(), 0),
    ).toBeFalsy()
    expect(
      Matrix.rows([[1, 1]])
        ._unsafeUnwrap()
        .nearlyEq(Matrix.rows([[1, 1]])._unsafeUnwrap(), 0),
    ).toBeTruthy()

    // Error bound matters
    expect(Matrix.column_vector(1)._unsafeUnwrap().nearlyEq(Matrix.column_vector(1)._unsafeUnwrap(), 0)).toBeTruthy()
    expect(
      Matrix.column_vector(1)
        ._unsafeUnwrap()
        .nearlyEq(Matrix.column_vector(1)._unsafeUnwrap(), 1 / 4),
    ).toBeTruthy()
    expect(
      Matrix.column_vector(1.25)
        ._unsafeUnwrap()
        .nearlyEq(Matrix.column_vector(1)._unsafeUnwrap(), 1 / 4),
    ).toBeTruthy()
    expect(
      Matrix.column_vector(0.75)
        ._unsafeUnwrap()
        .nearlyEq(Matrix.column_vector(1)._unsafeUnwrap(), 1 / 4),
    ).toBeTruthy()
    expect(
      Matrix.column_vector(1.26)
        ._unsafeUnwrap()
        .nearlyEq(Matrix.column_vector(1)._unsafeUnwrap(), 1 / 4),
    ).toBeFalsy()
    expect(
      Matrix.column_vector(0.74)
        ._unsafeUnwrap()
        .nearlyEq(Matrix.column_vector(1)._unsafeUnwrap(), 1 / 4),
    ).toBeFalsy()

    // Error bound spreads
    expect(
      Matrix.rows([[0, 0]])
        ._unsafeUnwrap()
        .nearlyEq(Matrix.rows([[0, 0]])._unsafeUnwrap(), 1),
    ).toBeTruthy()
    expect(
      Matrix.rows([[1, 0]])
        ._unsafeUnwrap()
        .nearlyEq(Matrix.rows([[0, 0]])._unsafeUnwrap(), 1),
    ).toBeTruthy()
    expect(
      Matrix.rows([[0, 1]])
        ._unsafeUnwrap()
        .nearlyEq(Matrix.rows([[0, 0]])._unsafeUnwrap(), 1),
    ).toBeTruthy()
    expect(
      Matrix.rows([[1, 1]])
        ._unsafeUnwrap()
        .nearlyEq(Matrix.rows([[0, 0]])._unsafeUnwrap(), 1),
    ).toBeFalsy()

    expect(Matrix.column_vector(0)._unsafeUnwrap().nearlyEq(null, 0)).toBeFalsy()
    expect(Matrix.column_vector(0)._unsafeUnwrap().nearlyEq('', 0)).toBeFalsy()
  })

  test('format', () => {
    expect(Matrix.column_vector(2)._unsafeUnwrap().format()).toBe('{{2}}')
    expect(squareMatrix(1, 0, new Complex(0, -1), new Complex(2, -3)).format()).toBe('{{1, 0}, {-i, 2-3i}}')
    expect(squareMatrix(1, 0, 0, 1).format()).toBe('{{1, 0}, {0, 1}}')

    expect(
      squareMatrix(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001)).format({
        allowAbbreviation: true,
        maxAbbreviationError: 0,
        fixedDigits: undefined,
        itemSeparator: ', ',
      }),
    ).toBe('{{0, 1}, {⅓+i, 0.3333334333333333i}}')
    expect(
      squareMatrix(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001)).format({
        maxAbbreviationError: 0.0005,
        fixedDigits: 3,
      }),
    ).toBe('{{0, 1}, {⅓+i, ⅓i}}')
    expect(
      squareMatrix(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001)).format({
        itemSeparator: ',',
      }),
    ).toBe('{{0,1},{⅓+i,0.3333334333333333i}}')
    expect(
      squareMatrix(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001)).format({
        allowAbbreviation: false,
        fixedDigits: 2,
      }),
    ).toBe('{{+0.00+0.00i, +1.00+0.00i}, {+0.33+1.00i, +0.00+0.33i}}')
  })

  test('toString', () => {
    expect(Matrix.column_vector(2)._unsafeUnwrap().toString()).toBe('{{2}}')
    expect(squareMatrix(1, 0, new Complex(0, -1), new Complex(2, -3)).toString()).toBe('{{1, 0}, {-i, 2-3i}}')
    expect(squareMatrix(1, 0, 0, 1).toString()).toBe('{{1, 0}, {0, 1}}')
  })

  test('size', () => {
    expect(Matrix.rows([[1, 1]])._unsafeUnwrap().width).toBe(2)
    expect(Matrix.rows([[1, 1]])._unsafeUnwrap().height).toBe(1)

    expect(Matrix.rows([[1, 1, 3]])._unsafeUnwrap().width).toBe(3)
    expect(Matrix.rows([[1, 1, 3]])._unsafeUnwrap().height).toBe(1)

    expect(Matrix.column_vector(1, 1)._unsafeUnwrap().width).toBe(1)
    expect(Matrix.column_vector(1, 1)._unsafeUnwrap().height).toBe(2)

    expect(Matrix.column_vector(1, 1, 3)._unsafeUnwrap().width).toBe(1)
    expect(Matrix.column_vector(1, 1, 3)._unsafeUnwrap().height).toBe(3)
  })

  test('times_ColRow', () => {
    // When one is a column vector and the other is a row vector...
    const r = Matrix.rows([[2, 3, 5]])._unsafeUnwrap()
    const c = Matrix.column_vector(11, 13, 17)._unsafeUnwrap()

    // Inner product
    expect(r.mult(c)._unsafeUnwrap().toString()).toBe('{{146}}')

    // Outer product
    expect(c.mult(r)._unsafeUnwrap().toString()).toBe('{{22, 33, 55}, {26, 39, 65}, {34, 51, 85}}')

    // Outer product matches tensor product
    expect(c.mult(r)._unsafeUnwrap().eq(c.tensorProduct(r))).toBeTruthy()

    // Tensor product is order independent (in this case)
    expect(r.tensorProduct(c).eq(c.tensorProduct(r))).toBeTruthy()
  })

  test('qubitDensityMatrixToBlochVector', () => {
    expect(() => Matrix.column_vector(1)._unsafeUnwrap().qubitDensityMatrixToBlochVector()).toThrow()
    expect(() => squareMatrix(1, 0, 0, 0, 0, 0, 0, 0, 0).qubitDensityMatrixToBlochVector()).toThrow()
    expect(() =>
      Matrix.rows([
        [1, 0],
        [0, 1],
      ])
        ._unsafeUnwrap()
        .qubitDensityMatrixToBlochVector(),
    ).toThrow()
    expect(() => squareMatrix(1, 1, -1, 0).qubitDensityMatrixToBlochVector()).toThrow()
    expect(() => squareMatrix(1, 1, 0, 0).qubitDensityMatrixToBlochVector()).toThrow()
    expect(() => squareMatrix(1, Complex.I, Complex.I, 0).qubitDensityMatrixToBlochVector()).toThrow()

    // Maximally mixed state.
    expect(
      Matrix.rows([
        [1, 0],
        [0, 1],
      ])
        ._unsafeUnwrap()
        .mult(0.5)
        ._unsafeUnwrap()
        .qubitDensityMatrixToBlochVector(),
    ).toStrictEqual([0, 0, 0])

    // Pure states as vectors along each axis.
    const f = (...m: Array<number | Complex>) =>
      Matrix.column_vector(...m)
        ._unsafeUnwrap()
        .mult(
          Matrix.column_vector(...m)
            ._unsafeUnwrap()
            .adjoint(),
        )
        ._unsafeUnwrap()
    const i = Complex.I
    const mi = i.times(-1)
    expect(f(1, 0).qubitDensityMatrixToBlochVector()).toStrictEqual([0, 0, 1])
    expect(f(0, 1).qubitDensityMatrixToBlochVector()).toStrictEqual([0, 0, -1])
    expect(f(1, 1).mult(0.5)._unsafeUnwrap().qubitDensityMatrixToBlochVector()).toStrictEqual([1, 0, 0])
    expect(f(1, -1).mult(0.5)._unsafeUnwrap().qubitDensityMatrixToBlochVector()).toStrictEqual([-1, 0, 0])
    expect(f(1, i).mult(0.5)._unsafeUnwrap().qubitDensityMatrixToBlochVector()).toStrictEqual([0, 1, 0])
    expect(f(1, mi).mult(0.5)._unsafeUnwrap().qubitDensityMatrixToBlochVector()).toStrictEqual([0, -1, 0])
  })

  test('clone', () => {
    const m = squareMatrix(new Complex(2, 3), new Complex(5, 7), new Complex(11, 13), new Complex(17, 19))
    const c = m.clone()

    expect(m.eq(c))
  })
})

function M(rows: Array<Array<number | Complex>>): Matrix {
  return Matrix.rows(rows)._unsafeUnwrap()
}

function squareMatrix(...elements: Array<number | Complex>): Matrix {
  const n = Math.round(Math.sqrt(elements.length))
  const m = Matrix.build(n, n, (row, col) => elements[row * n + col])

  return m._unsafeUnwrap()
}
