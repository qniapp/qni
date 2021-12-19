import {Complex, Format} from '@qni/common'
import {Matrix} from '../src/matrix'

QUnit.module('Matrix', () => {
  QUnit.test('isEqualTo', assert => {
    const m = Matrix.fromRows([
      [new Complex(2, 3), new Complex(5, 7)],
      [new Complex(11, 13), new Complex(17, 19)]
    ])
    assert.equates(m, m)
    assert.notEquates(m, null)
    assert.notEquates(m, '')

    assert.equates(
      m,
      Matrix.fromRows([
        [new Complex(2, 3), new Complex(5, 7)],
        [new Complex(11, 13), new Complex(17, 19)]
      ])
    )
    assert.notEquates(m, Matrix.fromRows([[new Complex(2, 3)]]))
    assert.notEquates(
      m,
      Matrix.fromRows([
        [new Complex(-2, 3), new Complex(5, 7)],
        [new Complex(11, 13), new Complex(17, 19)]
      ])
    )
    assert.notEquates(
      m,
      Matrix.fromRows([
        [new Complex(2, 3), new Complex(-5, 7)],
        [new Complex(11, 13), new Complex(17, 19)]
      ])
    )
    assert.notEquates(
      m,
      Matrix.fromRows([
        [new Complex(2, 3), new Complex(5, 7)],
        [new Complex(-11, 13), new Complex(17, 19)]
      ])
    )
    assert.notEquates(
      m,
      Matrix.fromRows([
        [new Complex(2, 3), new Complex(5, 7)],
        [new Complex(11, 13), new Complex(-17, 19)]
      ])
    )

    const col = Matrix.fromRows([[new Complex(2, 3), new Complex(5, 7)]])
    const row = Matrix.fromRows([[new Complex(2, 3)], [new Complex(5, 7)]])
    assert.equates(col, col)
    assert.equates(row, row)
    assert.notEquates(row, col)
  })

  QUnit.test('isApproximatelyEqualTo', assert => {
    // Size must match
    assert.notApproximatelyEquates(Matrix.row(1, 1), Matrix.col(1, 1), 0)
    assert.notApproximatelyEquates(Matrix.row(1, 1), Matrix.square(1, 1, 1, 1), 0)
    assert.notApproximatelyEquates(Matrix.row(1, 1), Matrix.row(1, 1, 1), 0)
    assert.approximatelyEquates(Matrix.row(1, 1), Matrix.row(1, 1), 0)

    // Error bound matters
    assert.approximatelyEquates(Matrix.solo(1), Matrix.solo(1), 0)
    assert.approximatelyEquates(Matrix.solo(1), Matrix.solo(1), 1 / 4)
    assert.approximatelyEquates(Matrix.solo(1.25), Matrix.solo(1), 1 / 4)
    assert.approximatelyEquates(Matrix.solo(0.75), Matrix.solo(1), 1 / 4)
    assert.notApproximatelyEquates(Matrix.solo(1.26), Matrix.solo(1), 1 / 4)
    assert.notApproximatelyEquates(Matrix.solo(0.74), Matrix.solo(1), 1 / 4)

    // Error bound spreads
    assert.approximatelyEquates(Matrix.row(0, 0), Matrix.row(0, 0), 1)
    assert.approximatelyEquates(Matrix.row(1, 0), Matrix.row(0, 0), 1)
    assert.approximatelyEquates(Matrix.row(0, 1), Matrix.row(0, 0), 1)
    assert.notApproximatelyEquates(Matrix.row(1, 1), Matrix.row(0, 0), 1)

    assert.notApproximatelyEquates(Matrix.solo(0), null)
    assert.notApproximatelyEquates(Matrix.solo(0), '')
  })

  QUnit.test('toString', assert => {
    assert.equates(Matrix.solo(2).toString(), '{{2}}')
    assert.equates(Matrix.square(1, 0, new Complex(0, -1), new Complex(2, -3)).toString(), '{{1, 0}, {-i, 2-3i}}')
    assert.equates(Matrix.square(1, 0, 0, 1).toString(), '{{1, 0}, {0, 1}}')
    assert.equates(Matrix.identity(3).toString(), '{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}')

    assert.equates(
      Matrix.square(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001)).toString(Format.EXACT),
      '{{0, 1}, {\u2153+i, 0.3333334333333333i}}'
    )
    assert.equates(
      Matrix.square(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001)).toString(Format.SIMPLIFIED),
      '{{0, 1}, {\u2153+i, \u2153i}}'
    )
    assert.equates(
      Matrix.square(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001)).toString(Format.MINIFIED),
      '{{0,1},{\u2153+i,0.3333334333333333i}}'
    )
    assert.equates(
      Matrix.square(0, 1, new Complex(1 / 3, 1), new Complex(0, 1 / 3 + 0.0000001)).toString(Format.CONSISTENT),
      '{{+0.00+0.00i, +1.00+0.00i}, {+0.33+1.00i, +0.00+0.33i}}'
    )
  })

  QUnit.test('generate', assert => {
    assert.equates(Matrix.generate(3, 2, (r, c) => r + 10 * c).toString(), '{{0, 10, 20}, {1, 11, 21}}')
  })

  QUnit.test('zero', assert => {
    assert.equates(Matrix.zero(1, 1).toString(), '{{0}}')
    assert.equates(Matrix.zero(2, 1).toString(), '{{0, 0}}')
    assert.equates(Matrix.zero(1, 2).toString(), '{{0}, {0}}')
    assert.equates(Matrix.zero(2, 2).toString(), '{{0, 0}, {0, 0}}')
  })

  QUnit.test('columnAt', assert => {
    const m = Matrix.square(2, 3, 5, 7)
    assert.equates(m.columnAt(0), [2, 5])
    assert.equates(m.columnAt(1), [3, 7])
    assert.equates(Matrix.col(1, 2, 3).columnAt(0), [1, 2, 3])
  })

  QUnit.test('square', assert => {
    const m = Matrix.square(1, new Complex(2, 3), -5.5, 0)
    assert.equates(m.rows(), [
      [1, new Complex(2, 3)],
      [-5.5, 0]
    ])

    assert.equates(Matrix.solo(1).rows(), [[1]])
  })

  QUnit.test('col', assert => {
    assert.equates(Matrix.col(2, 3, new Complex(0, 5)).toString(), '{{2}, {3}, {5i}}')
  })

  QUnit.test('row', assert => {
    assert.equates(Matrix.row(2, 3, new Complex(0, 5)).toString(), '{{2, 3, 5i}}')
  })

  QUnit.test('size', assert => {
    assert.equates(Matrix.row(1, 1).width, 2)
    assert.equates(Matrix.row(1, 1).height, 1)

    assert.equates(Matrix.row(1, 1, 3).width, 3)
    assert.equates(Matrix.row(1, 1, 3).height, 1)

    assert.equates(Matrix.col(1, 1).width, 1)
    assert.equates(Matrix.col(1, 1).height, 2)

    assert.equates(Matrix.col(1, 1, 3).width, 1)
    assert.equates(Matrix.col(1, 1, 3).height, 3)
  })

  QUnit.test('isApproximatelyHermitian', assert => {
    const i = Complex.I

    assert.notOk(Matrix.row(1, 1).isApproximatelyHermitian(999))
    assert.notOk(Matrix.col(1, 1).isApproximatelyHermitian(999))

    assert.ok(Matrix.solo(1).isApproximatelyHermitian(0))
    assert.ok(Matrix.solo(0).isApproximatelyHermitian(0))
    assert.ok(Matrix.solo(-1).isApproximatelyHermitian(0))
    assert.ok(Matrix.solo(-2).isApproximatelyHermitian(0))
    assert.notOk(Matrix.solo(i).isApproximatelyHermitian(0))
    assert.notOk(Matrix.solo(i).isApproximatelyHermitian(0.5))
    assert.ok(Matrix.solo(i).isApproximatelyHermitian(999))

    assert.ok(Matrix.PAULI_X.isApproximatelyHermitian(0))
    assert.ok(Matrix.PAULI_Y.isApproximatelyHermitian(0))
    assert.ok(Matrix.PAULI_Z.isApproximatelyHermitian(0))
    assert.ok(Matrix.H.isApproximatelyHermitian(0.001))

    assert.ok(Matrix.square(1, 0, 0, 1).isApproximatelyHermitian(0))
    assert.ok(Matrix.square(1, 1, 1, 1).isApproximatelyHermitian(0))
    assert.notOk(Matrix.square(1, 1, 1.5, 1).isApproximatelyHermitian(0))
    assert.ok(Matrix.square(1, 1, 1.5, 1).isApproximatelyHermitian(0.5))

    assert.notOk(Matrix.square(1, i, i, 1).isApproximatelyHermitian(0))
    assert.ok(Matrix.square(1, i, i.neg(), 1).isApproximatelyHermitian(0))
    assert.ok(Matrix.square(1, i.neg(), i, 1).isApproximatelyHermitian(0))
    assert.notOk(Matrix.square(1, i, i.times(-1.5), 1).isApproximatelyHermitian(0))
    assert.ok(Matrix.square(1, i, i.times(-1.5), 1).isApproximatelyHermitian(0.5))
  })

  QUnit.test('adjoint', assert => {
    const v = Matrix.square(new Complex(2, 3), new Complex(5, 7), new Complex(11, 13), new Complex(17, 19))
    const a = Matrix.square(new Complex(2, -3), new Complex(11, -13), new Complex(5, -7), new Complex(17, -19))
    assert.equates(v.adjoint(), a)
    assert.equates(Matrix.col(1, 2, Complex.I).adjoint(), Matrix.row(1, 2, Complex.I.neg()))
  })

  QUnit.test('times_scalar', assert => {
    const v = Matrix.square(new Complex(2, 3), new Complex(5, 7), new Complex(11, 13), new Complex(17, 19))
    const a = Matrix.square(new Complex(-2, -3), new Complex(-5, -7), new Complex(-11, -13), new Complex(-17, -19))
    assert.equates(v.times(-1), a)
    assert.equates(v.times(0), Matrix.square(0, 0, 0, 0))
    assert.equates(v.times(1), v)

    assert.equates(Matrix.col(2, 3).times(5), Matrix.col(10, 15))
    assert.equates(Matrix.row(2, 3).times(5), Matrix.row(10, 15))
  })

  QUnit.test('plus', assert => {
    assert.equates(Matrix.square(2, 3, 5, 7).plus(Matrix.square(11, 13, 17, 19)), Matrix.square(13, 16, 22, 26))
  })

  QUnit.test('minus', assert => {
    assert.equates(Matrix.square(2, 3, 5, 7).minus(Matrix.square(11, 13, 17, 19)), Matrix.square(-9, -10, -12, -12))
  })

  QUnit.test('times_matrix', assert => {
    assert.equates(Matrix.square(2, 3, 5, 7).times(Matrix.square(11, 13, 17, 19)), Matrix.square(73, 83, 174, 198))

    const x = Matrix.square(
      new Complex(0.5, -0.5),
      new Complex(0.5, 0.5),
      new Complex(0.5, 0.5),
      new Complex(0.5, -0.5)
    )
    assert.equates(x.times(x.adjoint()), Matrix.identity(2))
    assert.equates(
      Matrix.PAULI_X.times(Matrix.PAULI_Y).times(Matrix.PAULI_Z).times(new Complex(0, -1)),
      Matrix.identity(2)
    )
  })

  QUnit.test('times_ColRow', assert => {
    // When one is a column vector and the other is a row vector...
    const r = Matrix.row(2, 3, 5)
    const c = Matrix.col(11, 13, 17)

    // Inner product
    assert.equates(r.times(c).toString(), '{{146}}')

    // Outer product
    assert.equates(c.times(r).toString(), '{{22, 33, 55}, {26, 39, 65}, {34, 51, 85}}')

    // Outer product matches tensor product
    assert.equates(c.times(r), c.tensorProduct(r))

    // Tensor product is order independent (in this case)
    assert.equates(r.tensorProduct(c), c.tensorProduct(r))
  })

  QUnit.test('norm2', assert => {
    assert.equates(Matrix.solo(1).norm2(), 1)
    assert.equates(Matrix.solo(2).norm2(), 4)
    assert.equates(Matrix.row(1, 1).norm2(), 2)
    assert.equates(Matrix.col(1, 1).norm2(), 2)
    assert.equates(Matrix.square(1, 2, 3, 4).norm2(), 30)
  })

  QUnit.test('tensorProduct', assert => {
    assert.equates(Matrix.solo(2).tensorProduct(Matrix.solo(3)), Matrix.solo(6))
    assert.equates(
      Matrix.solo(new Complex(2, 3)).tensorProduct(Matrix.solo(new Complex(5, 7))),
      Matrix.solo(new Complex(-11, 29))
    )
    assert.equates(Matrix.solo(2).tensorProduct(Matrix.solo(3)), Matrix.solo(6))
    assert.equates(
      Matrix.PAULI_X.tensorProduct(Matrix.PAULI_Z),
      // prettier-ignore
      Matrix.square(
                     0, 0, 1, 0,
                     0, 0, 0, -1,
                     1, 0, 0, 0,
                     0, -1, 0, 0
                   )
    )
    assert.equates(
      Matrix.square(2, 3, 5, 7).tensorProduct(Matrix.square(11, 13, 17, 19)),
      // prettier-ignore
      Matrix.square(
                     22, 26, 33, 39,
                     34, 38, 51, 57,
                     55, 65, 77, 91,
                     85, 95, 119, 133
                   )
    )
  })

  QUnit.test('timesQubitOperation', assert => {
    const s = Math.sqrt(0.5)

    assert.equates(Matrix.col(1, 0, 0, 0).timesQubitOperation(Matrix.H, 0, 0, 0), Matrix.col(s, s, 0, 0))
    assert.equates(Matrix.col(0, 1, 0, 0).timesQubitOperation(Matrix.H, 0, 0, 0), Matrix.col(s, -s, 0, 0))
    assert.equates(Matrix.col(0, 0, 1, 0).timesQubitOperation(Matrix.H, 0, 0, 0), Matrix.col(0, 0, s, s))
    assert.equates(Matrix.col(0, 0, 0, 1).timesQubitOperation(Matrix.H, 0, 0, 0), Matrix.col(0, 0, s, -s))

    assert.equates(Matrix.col(1, 0, 0, 0).timesQubitOperation(Matrix.H, 1, 0, 0), Matrix.col(s, 0, s, 0))
    assert.equates(Matrix.col(0, 1, 0, 0).timesQubitOperation(Matrix.H, 1, 0, 0), Matrix.col(0, s, 0, s))
    assert.equates(Matrix.col(0, 0, 1, 0).timesQubitOperation(Matrix.H, 1, 0, 0), Matrix.col(s, 0, -s, 0))
    assert.equates(Matrix.col(0, 0, 0, 1).timesQubitOperation(Matrix.H, 1, 0, 0), Matrix.col(0, s, 0, -s))

    assert.equates(Matrix.col(2, 3, 0, 0).timesQubitOperation(Matrix.PAULI_X, 1, 1, 0), Matrix.col(0, 3, 2, 0))
    assert.equates(Matrix.col(2, 3, 0, 0).timesQubitOperation(Matrix.PAULI_X, 1, 1, 1), Matrix.col(2, 0, 0, 3))
  })

  QUnit.test('timesQubitOperation_speed', assert => {
    const numQubits = 10
    const numOps = 100
    const t0 = performance.now()
    const buf = new Float64Array(2 << numQubits)
    buf[0] = 1
    let state = new Matrix(1, 1 << numQubits, buf)
    for (let i = 0; i < numOps; i++) {
      state = state.timesQubitOperation(Matrix.H, 0, 6, 0)
    }

    const t1 = performance.now()
    assert.lessThan(t1 - t0, 100)
  })

  QUnit.test('identity', assert => {
    assert.equates(Matrix.identity(1).toString(), '{{1}}')
    assert.equates(Matrix.identity(2).toString(), '{{1, 0}, {0, 1}}')
    assert.equates(Matrix.identity(3).toString(), '{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}')
    assert.equates(Matrix.identity(4).toString(), '{{1, 0, 0, 0}, {0, 1, 0, 0}, {0, 0, 1, 0}, {0, 0, 0, 1}}')
  })

  QUnit.test('trace', assert => {
    assert.equates(Matrix.solo(NaN).trace().abs(), NaN)
    assert.equates(Matrix.identity(2).trace(), 2)
    assert.equates(Matrix.identity(10).trace(), 10)

    assert.equates(Matrix.PAULI_X.trace(), 0)
    assert.equates(Matrix.PAULI_Y.trace(), 0)
    assert.equates(Matrix.PAULI_Z.trace(), 0)
    assert.approximatelyEquates(Matrix.H.trace(), 0)
    assert.equates(Matrix.square(1, 2, 3, 4).trace(), 5)

    assert.equates(Matrix.square(0, 1, 2, 3, 4, 5, 6, 7, 8).trace(), 12)
  })

  QUnit.test('qubitDensityMatrixToBlochVector', assert => {
    assert.throws(() => Matrix.solo(1).qubitDensityMatrixToBlochVector())
    assert.throws(() => Matrix.square(1, 0, 0, 0, 0, 0, 0, 0, 0).qubitDensityMatrixToBlochVector())
    assert.throws(() => Matrix.identity(2).qubitDensityMatrixToBlochVector())
    assert.throws(() => Matrix.square(1, 1, -1, 0).qubitDensityMatrixToBlochVector())
    assert.throws(() => Matrix.square(1, 1, 0, 0).qubitDensityMatrixToBlochVector())
    assert.throws(() => Matrix.square(1, Complex.I, Complex.I, 0).qubitDensityMatrixToBlochVector())

    // Maximally mixed state.
    assert.equates(Matrix.identity(2).times(0.5).qubitDensityMatrixToBlochVector(), [0, 0, 0])

    // Pure states as vectors along each axis.
    const f = (...m: Array<number | Complex>) => Matrix.col(...m).times(Matrix.col(...m).adjoint())
    const i = Complex.I
    const mi = i.times(-1)
    assert.equates(f(1, 0).qubitDensityMatrixToBlochVector(), [0, 0, 1])
    assert.equates(f(0, 1).qubitDensityMatrixToBlochVector(), [0, 0, -1])
    assert.equates(f(1, 1).times(0.5).qubitDensityMatrixToBlochVector(), [1, 0, 0])
    assert.equates(f(1, -1).times(0.5).qubitDensityMatrixToBlochVector(), [-1, 0, 0])
    assert.equates(f(1, i).times(0.5).qubitDensityMatrixToBlochVector(), [0, 1, 0])
    assert.equates(f(1, mi).times(0.5).qubitDensityMatrixToBlochVector(), [0, -1, 0])
  })
})
