import { Complex, Matrix } from "lib/math"
import { Format, Seq } from "lib/base"
import { HadamardGate } from "lib/instructions"

QUnit.module("Matrix", () => {
  QUnit.test("isEqualTo", (assert) => {
    const m = Matrix.fromRows([
      [new Complex(2, 3), new Complex(5, 7)],
      [new Complex(11, 13), new Complex(17, 19)],
    ])
    assert.equates(m, m)
    assert.notEquates(m, null)
    assert.notEquates(m, "")

    assert.equates(
      m,
      Matrix.fromRows([
        [new Complex(2, 3), new Complex(5, 7)],
        [new Complex(11, 13), new Complex(17, 19)],
      ]),
    )
    assert.notEquates(m, Matrix.fromRows([[new Complex(2, 3)]]))
    assert.notEquates(
      m,
      Matrix.fromRows([
        [new Complex(-2, 3), new Complex(5, 7)],
        [new Complex(11, 13), new Complex(17, 19)],
      ]),
    )
    assert.notEquates(
      m,
      Matrix.fromRows([
        [new Complex(2, 3), new Complex(-5, 7)],
        [new Complex(11, 13), new Complex(17, 19)],
      ]),
    )
    assert.notEquates(
      m,
      Matrix.fromRows([
        [new Complex(2, 3), new Complex(5, 7)],
        [new Complex(-11, 13), new Complex(17, 19)],
      ]),
    )
    assert.notEquates(
      m,
      Matrix.fromRows([
        [new Complex(2, 3), new Complex(5, 7)],
        [new Complex(11, 13), new Complex(-17, 19)],
      ]),
    )

    const col = Matrix.fromRows([[new Complex(2, 3), new Complex(5, 7)]])
    const row = Matrix.fromRows([[new Complex(2, 3)], [new Complex(5, 7)]])
    assert.equates(col, col)
    assert.equates(row, row)
    assert.notEquates(row, col)
  })

  QUnit.test("isApproximatelyEqualTo", (assert) => {
    // Size must match
    assert.notApproximatelyEquates(Matrix.row(1, 1), Matrix.col(1, 1), 0)
    assert.notApproximatelyEquates(
      Matrix.row(1, 1),
      Matrix.square(1, 1, 1, 1),
      0,
    )
    assert.notApproximatelyEquates(Matrix.row(1, 1), Matrix.row(1, 1, 1), 0)
    assert.approximatelyEquates(Matrix.row(1, 1), Matrix.row(1, 1), 0)

    // // Error bound matters
    assert.approximatelyEquates(Matrix.solo(1), Matrix.solo(1), 0)
    assert.approximatelyEquates(Matrix.solo(1), Matrix.solo(1), 1 / 4)
    assert.approximatelyEquates(Matrix.solo(1.25), Matrix.solo(1), 1 / 4)
    assert.approximatelyEquates(Matrix.solo(0.75), Matrix.solo(1), 1 / 4)
    assert.notApproximatelyEquates(Matrix.solo(1.26), Matrix.solo(1), 1 / 4)
    assert.notApproximatelyEquates(Matrix.solo(0.74), Matrix.solo(1), 1 / 4)

    // // Error bound spreads
    assert.approximatelyEquates(Matrix.row(0, 0), Matrix.row(0, 0), 1)
    assert.approximatelyEquates(Matrix.row(1, 0), Matrix.row(0, 0), 1)
    assert.approximatelyEquates(Matrix.row(0, 1), Matrix.row(0, 0), 1)
    assert.notApproximatelyEquates(Matrix.row(1, 1), Matrix.row(0, 0), 1)

    assert.notApproximatelyEquates(Matrix.solo(0), null)
    assert.notApproximatelyEquates(Matrix.solo(0), "")
  })

  QUnit.test("toString", (assert) => {
    assert.equates(Matrix.solo(2).toString(), "{{2}}")
    assert.equates(
      Matrix.square(1, 0, new Complex(0, -1), new Complex(2, -3)).toString(),
      "{{1, 0}, {-i, 2-3i}}",
    )
    assert.equates(Matrix.square(1, 0, 0, 1).toString(), "{{1, 0}, {0, 1}}")
    assert.equates(
      Matrix.identity(3).toString(),
      "{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}",
    )

    assert.equates(
      Matrix.square(
        0,
        1,
        new Complex(1 / 3, 1),
        new Complex(0, 1 / 3 + 0.0000001),
      ).toString(Format.EXACT),
      "{{0, 1}, {\u2153+i, 0.3333334333333333i}}",
    )
    assert.equates(
      Matrix.square(
        0,
        1,
        new Complex(1 / 3, 1),
        new Complex(0, 1 / 3 + 0.0000001),
      ).toString(Format.SIMPLIFIED),
      "{{0, 1}, {\u2153+i, \u2153i}}",
    )
    assert.equates(
      Matrix.square(
        0,
        1,
        new Complex(1 / 3, 1),
        new Complex(0, 1 / 3 + 0.0000001),
      ).toString(Format.MINIFIED),
      "{{0,1},{\u2153+i,0.3333334333333333i}}",
    )
    assert.equates(
      Matrix.square(
        0,
        1,
        new Complex(1 / 3, 1),
        new Complex(0, 1 / 3 + 0.0000001),
      ).toString(Format.CONSISTENT),
      "{{+0.00+0.00i, +1.00+0.00i}, {+0.33+1.00i, +0.00+0.33i}}",
    )
  })

  QUnit.test("generate", (assert) => {
    assert.equates(
      Matrix.generate(3, 2, (r, c) => r + 10 * c).toString(),
      "{{0, 10, 20}, {1, 11, 21}}",
    )
  })

  QUnit.test("generateDiagonal", (assert) => {
    assert.equates(
      Matrix.generateDiagonal(4, (e) => new Complex(e, 1)),
      // prettier-ignore
      Matrix.square(
        new Complex(0, 1), 0, 0, 0,
        0, new Complex(1, 1), 0, 0,
        0, 0, new Complex(2, 1), 0,
        0, 0, 0, new Complex(3, 1)),
    )
  })

  QUnit.test("zero", (assert) => {
    assert.equates(Matrix.zero(1, 1).toString(), "{{0}}")
    assert.equates(Matrix.zero(2, 1).toString(), "{{0, 0}}")
    assert.equates(Matrix.zero(1, 2).toString(), "{{0}, {0}}")
    assert.equates(Matrix.zero(2, 2).toString(), "{{0, 0}, {0, 0}}")
  })

  QUnit.test("getColumn", (assert) => {
    const m = Matrix.square(2, 3, 5, 7)
    assert.equates(m.getColumn(0), [2, 5])
    assert.equates(m.getColumn(1), [3, 7])
    assert.equates(Matrix.col(1, 2, 3).getColumn(0), [1, 2, 3])
  })

  QUnit.test("square", (assert) => {
    const m = Matrix.square(1, new Complex(2, 3), -5.5, 0)
    assert.equates(m.rows(), [
      [1, new Complex(2, 3)],
      [-5.5, 0],
    ])

    assert.equates(Matrix.solo(1).rows(), [[1]])
  })

  QUnit.test("col", (assert) => {
    assert.equates(
      Matrix.col(2, 3, new Complex(0, 5)).toString(),
      "{{2}, {3}, {5i}}",
    )
  })

  QUnit.test("row", (assert) => {
    assert.equates(
      Matrix.row(2, 3, new Complex(0, 5)).toString(),
      "{{2, 3, 5i}}",
    )
  })

  QUnit.test("size", (assert) => {
    assert.equates(Matrix.row(1, 1).width, 2)
    assert.equates(Matrix.row(1, 1).height, 1)

    assert.equates(Matrix.row(1, 1, 3).width, 3)
    assert.equates(Matrix.row(1, 1, 3).height, 1)

    assert.equates(Matrix.col(1, 1).width, 1)
    assert.equates(Matrix.col(1, 1).height, 2)

    assert.equates(Matrix.col(1, 1, 3).width, 1)
    assert.equates(Matrix.col(1, 1, 3).height, 3)
  })

  QUnit.test("isUnitary", (assert) => {
    assert.notOk(Matrix.row(1, 1).isUnitary(999))
    assert.notOk(Matrix.col(1, 1).isUnitary(999))

    assert.ok(Matrix.solo(1).isUnitary(0))
    assert.ok(Matrix.solo(Complex.I).isUnitary(0))
    assert.ok(Matrix.solo(-1).isUnitary(0))
    assert.notOk(Matrix.solo(-2).isUnitary(0))
    assert.notOk(Matrix.solo(0).isUnitary(0))
    assert.ok(Matrix.solo(-2).isUnitary(999))

    assert.ok(Matrix.square(1, 0, 0, 1).isUnitary(0))
    assert.ok(Matrix.rotation(1).isUnitary(0.001))
    assert.ok(Matrix.PAULI_X.isUnitary(0))
    assert.ok(Matrix.PAULI_Y.isUnitary(0))
    assert.ok(Matrix.PAULI_Z.isUnitary(0))
    assert.ok(HadamardGate.MATRIX.isUnitary(0.001))
  })

  QUnit.test("isApproximatelyHermitian", (assert) => {
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
    assert.ok(HadamardGate.MATRIX.isApproximatelyHermitian(0.001))

    assert.ok(Matrix.square(1, 0, 0, 1).isApproximatelyHermitian(0))
    assert.ok(Matrix.square(1, 1, 1, 1).isApproximatelyHermitian(0))
    assert.notOk(Matrix.square(1, 1, 1.5, 1).isApproximatelyHermitian(0))
    assert.ok(Matrix.square(1, 1, 1.5, 1).isApproximatelyHermitian(0.5))

    assert.notOk(Matrix.square(1, i, i, 1).isApproximatelyHermitian(0))
    assert.ok(Matrix.square(1, i, i.neg(), 1).isApproximatelyHermitian(0))
    assert.ok(Matrix.square(1, i.neg(), i, 1).isApproximatelyHermitian(0))
    assert.notOk(
      Matrix.square(1, i, i.times(-1.5), 1).isApproximatelyHermitian(0),
    )
    assert.ok(
      Matrix.square(1, i, i.times(-1.5), 1).isApproximatelyHermitian(0.5),
    )
  })

  QUnit.test("adjoint", (assert) => {
    const v = Matrix.square(
      new Complex(2, 3),
      new Complex(5, 7),
      new Complex(11, 13),
      new Complex(17, 19),
    )
    const a = Matrix.square(
      new Complex(2, -3),
      new Complex(11, -13),
      new Complex(5, -7),
      new Complex(17, -19),
    )
    assert.equates(v.adjoint(), a)
    assert.equates(
      Matrix.col(1, 2, Complex.I).adjoint(),
      Matrix.row(1, 2, Complex.I.neg()),
    )
  })

  QUnit.test("times_scalar", (assert) => {
    const v = Matrix.square(
      new Complex(2, 3),
      new Complex(5, 7),
      new Complex(11, 13),
      new Complex(17, 19),
    )
    const a = Matrix.square(
      new Complex(-2, -3),
      new Complex(-5, -7),
      new Complex(-11, -13),
      new Complex(-17, -19),
    )
    assert.equates(v.times(-1), a)
    assert.equates(v.times(0), Matrix.square(0, 0, 0, 0))
    assert.equates(v.times(1), v)

    assert.equates(Matrix.col(2, 3).times(5), Matrix.col(10, 15))
    assert.equates(Matrix.row(2, 3).times(5), Matrix.row(10, 15))
  })

  QUnit.test("plus", (assert) => {
    assert.equates(
      Matrix.square(2, 3, 5, 7).plus(Matrix.square(11, 13, 17, 19)),
      Matrix.square(13, 16, 22, 26),
    )
  })

  QUnit.test("minus", (assert) => {
    assert.equates(
      Matrix.square(2, 3, 5, 7).minus(Matrix.square(11, 13, 17, 19)),
      Matrix.square(-9, -10, -12, -12),
    )
  })

  QUnit.test("times_matrix", (assert) => {
    assert.equates(
      Matrix.square(2, 3, 5, 7).times(Matrix.square(11, 13, 17, 19)),
      Matrix.square(73, 83, 174, 198),
    )

    const x = Matrix.square(
      new Complex(0.5, -0.5),
      new Complex(0.5, 0.5),
      new Complex(0.5, 0.5),
      new Complex(0.5, -0.5),
    )
    assert.equates(x.times(x.adjoint()), Matrix.identity(2))
    assert.equates(
      Matrix.PAULI_X.times(Matrix.PAULI_Y)
        .times(Matrix.PAULI_Z)
        .times(new Complex(0, -1)),
      Matrix.identity(2),
    )
  })

  QUnit.test("times_ColRow", (assert) => {
    // When one is a column vector and the other is a row vector...
    const r = Matrix.row(2, 3, 5)
    const c = Matrix.col(11, 13, 17)

    // Inner product
    assert.equates(r.times(c).toString(), "{{146}}")

    // Outer product
    assert.equates(
      c.times(r).toString(),
      "{{22, 33, 55}, {26, 39, 65}, {34, 51, 85}}",
    )

    // Outer product matches tensor product
    assert.equates(c.times(r), c.tensorProduct(r))

    // Tensor product is order independent (in this case)
    assert.equates(r.tensorProduct(c), c.tensorProduct(r))
  })

  QUnit.test("norm2", (assert) => {
    assert.equates(Matrix.solo(1).norm2(), 1)
    assert.equates(Matrix.solo(2).norm2(), 4)
    assert.equates(Matrix.row(1, 1).norm2(), 2)
    assert.equates(Matrix.col(1, 1).norm2(), 2)
    assert.equates(Matrix.square(1, 2, 3, 4).norm2(), 30)
  })

  QUnit.test("tensorProduct", (assert) => {
    assert.equates(Matrix.solo(2).tensorProduct(Matrix.solo(3)), Matrix.solo(6))
    assert.equates(
      Matrix.solo(new Complex(2, 3)).tensorProduct(
        Matrix.solo(new Complex(5, 7)),
      ),
      Matrix.solo(new Complex(-11, 29)),
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
                   ),
    )
    assert.equates(
      Matrix.square(2, 3, 5, 7).tensorProduct(Matrix.square(11, 13, 17, 19)),
      // prettier-ignore
      Matrix.square(
                     22, 26, 33, 39,
                     34, 38, 51, 57,
                     55, 65, 77, 91,
                     85, 95, 119, 133
                   ),
    )
  })

  QUnit.test("timesQubitOperation", (assert) => {
    const s = Math.sqrt(0.5)

    assert.equates(
      Matrix.col(1, 0, 0, 0).timesQubitOperation(HadamardGate.MATRIX, 0, 0, 0),
      Matrix.col(s, s, 0, 0),
    )
    assert.equates(
      Matrix.col(0, 1, 0, 0).timesQubitOperation(HadamardGate.MATRIX, 0, 0, 0),
      Matrix.col(s, -s, 0, 0),
    )
    assert.equates(
      Matrix.col(0, 0, 1, 0).timesQubitOperation(HadamardGate.MATRIX, 0, 0, 0),
      Matrix.col(0, 0, s, s),
    )
    assert.equates(
      Matrix.col(0, 0, 0, 1).timesQubitOperation(HadamardGate.MATRIX, 0, 0, 0),
      Matrix.col(0, 0, s, -s),
    )

    assert.equates(
      Matrix.col(1, 0, 0, 0).timesQubitOperation(HadamardGate.MATRIX, 1, 0, 0),
      Matrix.col(s, 0, s, 0),
    )
    assert.equates(
      Matrix.col(0, 1, 0, 0).timesQubitOperation(HadamardGate.MATRIX, 1, 0, 0),
      Matrix.col(0, s, 0, s),
    )
    assert.equates(
      Matrix.col(0, 0, 1, 0).timesQubitOperation(HadamardGate.MATRIX, 1, 0, 0),
      Matrix.col(s, 0, -s, 0),
    )
    assert.equates(
      Matrix.col(0, 0, 0, 1).timesQubitOperation(HadamardGate.MATRIX, 1, 0, 0),
      Matrix.col(0, s, 0, -s),
    )

    assert.equates(
      Matrix.col(2, 3, 0, 0).timesQubitOperation(Matrix.PAULI_X, 1, 1, 0),
      Matrix.col(0, 3, 2, 0),
    )
    assert.equates(
      Matrix.col(2, 3, 0, 0).timesQubitOperation(Matrix.PAULI_X, 1, 1, 1),
      Matrix.col(2, 0, 0, 3),
    )
  })

  QUnit.test("timesQubitOperation_speed", (assert) => {
    const numQubits = 10
    const numOps = 100
    const t0 = performance.now()
    const buf = new Float64Array(2 << numQubits)
    buf[0] = 1
    let state = new Matrix(1, 1 << numQubits, buf)
    for (let i = 0; i < numOps; i++) {
      state = state.timesQubitOperation(HadamardGate.MATRIX, 0, 6, 0)
    }

    const t1 = performance.now()
    assert.lessThan(t1 - t0, 100)
  })

  QUnit.test("identity", (assert) => {
    assert.equates(Matrix.identity(1).toString(), "{{1}}")
    assert.equates(Matrix.identity(2).toString(), "{{1, 0}, {0, 1}}")
    assert.equates(
      Matrix.identity(3).toString(),
      "{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}",
    )
    assert.equates(
      Matrix.identity(4).toString(),
      "{{1, 0, 0, 0}, {0, 1, 0, 0}, {0, 0, 1, 0}, {0, 0, 0, 1}}",
    )
  })

  QUnit.test("rotation", (assert) => {
    const s = Math.sqrt(0.5)
    const t = Math.PI * 2
    assert.approximatelyEquates(Matrix.rotation(0), Matrix.square(1, 0, 0, 1))
    assert.approximatelyEquates(
      Matrix.rotation(t / 8),
      Matrix.square(s, -s, s, s),
    )
    assert.approximatelyEquates(
      Matrix.rotation((t * 2) / 8),
      Matrix.square(0, -1, 1, 0),
    )
    assert.approximatelyEquates(
      Matrix.rotation((t * 3) / 8),
      Matrix.square(-s, -s, s, -s),
    )
    assert.approximatelyEquates(
      Matrix.rotation((t * 4) / 8),
      Matrix.square(-1, 0, 0, -1),
    )
    assert.approximatelyEquates(
      Matrix.rotation((t * 5) / 8),
      Matrix.square(-s, s, -s, -s),
    )
    assert.approximatelyEquates(
      Matrix.rotation((t * 6) / 8),
      Matrix.square(0, 1, -1, 0),
    )
    assert.approximatelyEquates(
      Matrix.rotation((t * 7) / 8),
      Matrix.square(s, s, -s, s),
    )
    assert.approximatelyEquates(Matrix.rotation(t), Matrix.square(1, 0, 0, 1))
  })

  QUnit.test("singularValueDecomposition", (assert) => {
    const assertSvdDecompositionWorksFor = (m: Matrix) => {
      const { U, S, V } = m.singularValueDecomposition(0.000001, 100)
      assert.equates(U.isUnitary(0.00001), true)
      assert.equates(V.isUnitary(0.00001), true)
      assert.equates(S.isDiagonal(0.00001), true)
      assert.equates(
        Seq.range(S.width).every(
          (i) => Math.abs(S.cell(i, i).phase()) < 0.000001,
        ),
        true,
      )
      assert.approximatelyEquates(U.times(S).times(V), m, 0.001)
    }

    assert.equates(Matrix.zero(2, 2).singularValueDecomposition(), {
      U: Matrix.identity(2),
      S: Matrix.zero(2, 2),
      V: Matrix.identity(2),
    })

    assert.equates(Matrix.identity(2).singularValueDecomposition(), {
      U: Matrix.identity(2),
      S: Matrix.identity(2),
      V: Matrix.identity(2),
    })

    assertSvdDecompositionWorksFor(Matrix.square(1, Complex.I.times(2), 3, 4))
    assertSvdDecompositionWorksFor(
      Matrix.square(
        new Complex(2, 3),
        new Complex(5, 7),
        new Complex(11, 13),
        new Complex(17, 19),
      ),
    )
    assertSvdDecompositionWorksFor(
      Matrix.square(
        new Complex(2, 3),
        new Complex(5, 7),
        new Complex(11, 13),
        new Complex(17, 19),
        new Complex(23, 29),
        new Complex(31, 37),
        new Complex(41, 43),
        new Complex(47, 53),
        new Complex(59, 61),
      ),
    )
    assertSvdDecompositionWorksFor(
      Matrix.square(
        new Complex(2, 3),
        new Complex(5, 7),
        new Complex(11, 13),
        new Complex(17, 19),
        new Complex(-23, 29),
        new Complex(31, 37),
        new Complex(41, -43),
        new Complex(47, -53),
        new Complex(59, 61),
      ),
    )

    assertSvdDecompositionWorksFor(
      Matrix.generateDiagonal(4, (k) =>
        Complex.polar(1, ((Math.PI * 2) / 3) * k),
      ),
    )
  })

  QUnit.test("singularValueDecomposition_randomized", (assert) => {
    const assertSvdDecompositionWorksFor = (m: Matrix) => {
      const { U, S, V } = m.singularValueDecomposition(0.000001, 100)
      assert.equates(U.isUnitary(0.00001), true)
      assert.equates(V.isUnitary(0.00001), true)
      assert.equates(S.isDiagonal(0.00001), true)
      assert.equates(
        Seq.range(S.width).every(
          (i) => Math.abs(S.cell(i, i).phase()) < 0.000001,
        ),
        true,
      )
      assert.approximatelyEquates(U.times(S).times(V), m, 0.001)
    }

    for (let k = 1; k < 5; k++) {
      const m = Matrix.generate(
        k,
        k,
        () => new Complex(Math.random() - 0.5, Math.random() - 0.5),
      )
      assertSvdDecompositionWorksFor(m)
    }
  })

  QUnit.test("trace", (assert) => {
    assert.equates(Matrix.solo(NaN).trace().abs(), NaN)
    assert.equates(Matrix.identity(2).trace(), 2)
    assert.equates(Matrix.identity(10).trace(), 10)

    assert.equates(Matrix.PAULI_X.trace(), 0)
    assert.equates(Matrix.PAULI_Y.trace(), 0)
    assert.equates(Matrix.PAULI_Z.trace(), 0)
    assert.approximatelyEquates(HadamardGate.MATRIX.trace(), 0)
    assert.equates(Matrix.square(1, 2, 3, 4).trace(), 5)

    assert.equates(Matrix.square(0, 1, 2, 3, 4, 5, 6, 7, 8).trace(), 12)
  })

  QUnit.test("qubitDensityMatrixToBlochVector", (assert) => {
    assert.throws(() => Matrix.solo(1).qubitDensityMatrixToBlochVector())
    assert.throws(() =>
      Matrix.square(
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ).qubitDensityMatrixToBlochVector(),
    )
    assert.throws(() => Matrix.identity(2).qubitDensityMatrixToBlochVector())
    assert.throws(() =>
      Matrix.square(1, 1, -1, 0).qubitDensityMatrixToBlochVector(),
    )
    assert.throws(() =>
      Matrix.square(1, 1, 0, 0).qubitDensityMatrixToBlochVector(),
    )
    assert.throws(() =>
      Matrix.square(
        1,
        Complex.I,
        Complex.I,
        0,
      ).qubitDensityMatrixToBlochVector(),
    )

    // Maximally mixed state.
    assert.equates(
      Matrix.identity(2).times(0.5).qubitDensityMatrixToBlochVector(),
      [0, 0, 0],
    )

    // Pure states as vectors along each axis.
    const f = (...m) => Matrix.col(...m).times(Matrix.col(...m).adjoint())
    const i = Complex.I
    const mi = i.times(-1)
    assert.equates(f(1, 0).qubitDensityMatrixToBlochVector(), [0, 0, 1])
    assert.equates(f(0, 1).qubitDensityMatrixToBlochVector(), [0, 0, -1])
    assert.equates(
      f(1, 1).times(0.5).qubitDensityMatrixToBlochVector(),
      [1, 0, 0],
    )
    assert.equates(
      f(1, -1).times(0.5).qubitDensityMatrixToBlochVector(),
      [-1, 0, 0],
    )
    assert.equates(
      f(1, i).times(0.5).qubitDensityMatrixToBlochVector(),
      [0, 1, 0],
    )
    assert.equates(
      f(1, mi).times(0.5).qubitDensityMatrixToBlochVector(),
      [0, -1, 0],
    )
  })

  QUnit.test("qubitDensityMatrix", (assert) => {
    const bellState = Matrix.col(Math.sqrt(0.5), 0, 0, Math.sqrt(0.5))
    assert.approximatelyEquates(
      bellState.qubitDensityMatrix(1),
      Matrix.identity(2).times(0.5),
    )
  })

  QUnit.test("fromAngleAxisPhaseRotation", (assert) => {
    const π = Math.PI
    const i = Complex.I
    const s = Math.sqrt(0.5)
    const is = Complex.I.times(s)
    const mis = is.neg()
    const mi = Complex.I.times(-1)

    // No-op.
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(0, [1, 0, 0], 0),
      Matrix.square(1, 0, 0, 1),
    )
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(0, [0, 1, 0], 0),
      Matrix.square(1, 0, 0, 1),
    )
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(0, [0, 0, 1], 0),
      Matrix.square(1, 0, 0, 1),
    )
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(0, [s, 0, s], 0),
      Matrix.square(1, 0, 0, 1),
    )

    // Phase.
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(0, [1, 0, 0], π / 2),
      Matrix.square(i, 0, 0, i),
    )
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(0, [1, 0, 0], π),
      Matrix.square(-1, 0, 0, -1),
    )

    // X.
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(-π / 2, [1, 0, 0], 0),
      Matrix.square(s, is, is, s),
    )
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(π / 2, [1, 0, 0], 0),
      Matrix.square(s, mis, mis, s),
    )
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(π, [1, 0, 0], 0),
      Matrix.square(0, mi, mi, 0),
    )
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(2 * π, [1, 0, 0], 0),
      Matrix.square(-1, 0, 0, -1),
    )

    // Y.
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(-π / 2, [0, 1, 0], 0),
      Matrix.square(s, s, -s, s),
    )
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(π / 2, [0, 1, 0], 0),
      Matrix.square(s, -s, s, s),
    )
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(π, [0, 1, 0], 0),
      Matrix.square(0, -1, 1, 0),
    )
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(2 * π, [0, 1, 0], 0),
      Matrix.square(-1, 0, 0, -1),
    )

    // Z.
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(-π / 2, [0, 0, 1], 0),
      Matrix.square(new Complex(s, s), 0, 0, new Complex(s, -s)),
    )
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(π / 2, [0, 0, 1], 0),
      Matrix.square(new Complex(s, -s), 0, 0, new Complex(s, s)),
    )
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(π, [0, 0, 1], 0),
      Matrix.square(mi, 0, 0, i),
    )
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(2 * π, [0, 0, 1], 0),
      Matrix.square(-1, 0, 0, -1),
    )

    // H.
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(-π, [s, 0, s], 0),
      Matrix.square(is, is, is, is.times(-1)),
    )
    assert.equates(
      Matrix.fromAngleAxisPhaseRotation(-π, [s, 0, s], -π / 2),
      Matrix.square(s, s, s, -s),
    )
  })

  QUnit.test("qubitOperationToAngleAxisRotation", (assert) => {
    assert.throws(() => Matrix.solo(1).qubitOperationToAngleAxisRotation())
    assert.throws(() =>
      Matrix.square(1, 2, 3, 4).qubitOperationToAngleAxisRotation(),
    )

    const [w, x, y, z] = [
      Matrix.identity(2),
      Matrix.PAULI_X,
      Matrix.PAULI_Y,
      Matrix.PAULI_Z,
    ]
    const π = Math.PI
    const i = Complex.I
    const mi = i.neg()
    const s = Math.sqrt(0.5)

    assert.equates(w.qubitOperationToAngleAxisRotation(), {
      angle: 0,
      axis: [1, 0, 0],
      phase: 0,
    })
    assert.equates(x.qubitOperationToAngleAxisRotation(), {
      angle: π,
      axis: [1, 0, 0],
      phase: π / 2,
    })
    assert.equates(y.qubitOperationToAngleAxisRotation(), {
      angle: π,
      axis: [0, 1, 0],
      phase: π / 2,
    })
    assert.equates(z.qubitOperationToAngleAxisRotation(), {
      angle: π,
      axis: [0, 0, 1],
      phase: π / 2,
    })

    assert.equates(w.times(i).qubitOperationToAngleAxisRotation(), {
      angle: 0,
      axis: [1, 0, 0],
      phase: π / 2,
    })
    assert.equates(x.times(i).qubitOperationToAngleAxisRotation(), {
      angle: π,
      axis: [1, 0, 0],
      phase: π,
    })
    assert.equates(y.times(i).qubitOperationToAngleAxisRotation(), {
      angle: π,
      axis: [0, 1, 0],
      phase: π,
    })
    assert.equates(z.times(i).qubitOperationToAngleAxisRotation(), {
      angle: π,
      axis: [0, 0, 1],
      phase: π,
    })

    assert.equates(w.times(mi).qubitOperationToAngleAxisRotation(), {
      angle: 0,
      axis: [1, 0, 0],
      phase: -π / 2,
    })
    assert.equates(x.times(mi).qubitOperationToAngleAxisRotation(), {
      angle: π,
      axis: [1, 0, 0],
      phase: 0,
    })
    assert.equates(y.times(mi).qubitOperationToAngleAxisRotation(), {
      angle: π,
      axis: [0, 1, 0],
      phase: 0,
    })
    assert.equates(z.times(mi).qubitOperationToAngleAxisRotation(), {
      angle: π,
      axis: [0, 0, 1],
      phase: 0,
    })

    assert.equates(HadamardGate.MATRIX.qubitOperationToAngleAxisRotation(), {
      angle: π,
      axis: [s, 0, s],
      phase: π / 2,
    })
    assert.equates(
      Matrix.square(1, i, i, 1).times(s).qubitOperationToAngleAxisRotation(),
      { angle: -π / 2, axis: [1, 0, 0], phase: 0 },
    )
    assert.equates(
      Matrix.square(s, s, -s, s).qubitOperationToAngleAxisRotation(),
      { angle: -π / 2, axis: [0, 1, 0], phase: 0 },
    )
    assert.equates(
      Matrix.square(1, 0, 0, i).qubitOperationToAngleAxisRotation(),
      { angle: π / 2, axis: [0, 0, 1], phase: π / 4 },
    )
  })

  QUnit.test(
    "qubitOperationToAngleAxisRotation_vs_fromAngleAxisPhaseRotation_randomized",
    (assert) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const _ of Seq.range(100)) {
        const phase = Math.random() * Math.PI * 2
        const angle = Math.random() * Math.PI * 4
        const a = Math.random() * Math.PI * 2
        const b = Math.acos(Math.random() * 2 - 1)
        const axis = [
          Math.cos(a) * Math.sin(b),
          Math.sin(a) * Math.sin(b),
          Math.cos(b),
        ]
        const U = Matrix.fromAngleAxisPhaseRotation(angle, axis, phase)
        const {
          angle: angle2,
          axis: axis2,
          phase: phase2,
        } = U.qubitOperationToAngleAxisRotation()
        const U2 = Matrix.fromAngleAxisPhaseRotation(angle2, axis2, phase2)
        assert.approximatelyEquates(U2, U)
      }
    },
  )

  QUnit.test("isUpperTriangular", (assert) => {
    assert.ok(Matrix.solo(NaN).isUpperTriangular())
    assert.ok(Matrix.solo(0).isUpperTriangular())
    assert.ok(Matrix.solo(1).isUpperTriangular())
    assert.notOk(Matrix.col(1, 2).isUpperTriangular())
    assert.ok(Matrix.row(1, 2).isUpperTriangular())

    assert.ok(Matrix.square(1, 0, 0, 0).isUpperTriangular())
    assert.ok(Matrix.square(0, 1, 0, 0).isUpperTriangular())
    assert.notOk(Matrix.square(0, 0, 1, 0).isUpperTriangular())
    assert.ok(Matrix.square(0, 0, 0, 1).isUpperTriangular())

    assert.ok(Matrix.square(1, 2, 0, 4).isUpperTriangular())
    assert.ok(Matrix.square(1, NaN, 0, 4).isUpperTriangular())
    assert.notOk(Matrix.square(1, 0, 2, 4).isUpperTriangular())
    assert.notOk(Matrix.square(1, 0, NaN, 4).isUpperTriangular())
    assert.notOk(Matrix.square(1, 2, 3, 4).isUpperTriangular())
    assert.notOk(Matrix.square(1, 2, NaN, 4).isUpperTriangular())
    assert.notOk(Matrix.square(1, 2, Complex.I, 4).isUpperTriangular())
    assert.notOk(Matrix.square(1, 2, 3, 4).isUpperTriangular(2.9))
    assert.ok(Matrix.square(1, 2, 3, 4).isUpperTriangular(3.1))

    assert.ok(Matrix.square(1, 2, 3, 0, 5, 6, 0, 0, 7).isUpperTriangular(0))
    assert.notOk(
      Matrix.square(1, 2, 3, 0, 5, 6, 0.01, 0, 7).isUpperTriangular(0),
    )
    assert.ok(
      Matrix.square(1, 2, 3, 0, 5, 6, 0.01, 0, 7).isUpperTriangular(0.1),
    )
  })

  QUnit.test("isLowerTriangular", (assert) => {
    assert.ok(Matrix.solo(NaN).isLowerTriangular())
    assert.ok(Matrix.solo(0).isLowerTriangular())
    assert.ok(Matrix.solo(1).isLowerTriangular())
    assert.ok(Matrix.col(1, 2).isLowerTriangular())
    assert.notOk(Matrix.row(1, 2).isLowerTriangular())

    assert.ok(Matrix.square(1, 0, 0, 0).isLowerTriangular())
    assert.notOk(Matrix.square(0, 1, 0, 0).isLowerTriangular())
    assert.ok(Matrix.square(0, 0, 1, 0).isLowerTriangular())
    assert.ok(Matrix.square(0, 0, 0, 1).isLowerTriangular())

    assert.notOk(Matrix.square(1, 2, 0, 4).isLowerTriangular())
    assert.notOk(Matrix.square(1, NaN, 0, 4).isLowerTriangular())
    assert.ok(Matrix.square(1, 0, 2, 4).isLowerTriangular())
    assert.ok(Matrix.square(1, 0, NaN, 4).isLowerTriangular())
    assert.notOk(Matrix.square(1, 2, 3, 4).isLowerTriangular())
    assert.notOk(Matrix.square(1, 2, NaN, 4).isLowerTriangular())
    assert.notOk(Matrix.square(1, 2, Complex.I, 4).isLowerTriangular())
    assert.notOk(Matrix.square(1, 3, 2, 4).isLowerTriangular(2.9))
    assert.ok(Matrix.square(1, 3, 2, 4).isLowerTriangular(3.1))

    // prettier-ignore
    assert.notOk(Matrix.square(
      1, 2, 3,
      0, 5, 6,
      0, 0, 7).isLowerTriangular(0))
    // prettier-ignore
    assert.ok(Matrix.square(
      1, 0, 0,
      2, 5, 0,
      3, 6, 7).isLowerTriangular(0))
    // prettier-ignore
    assert.notOk(Matrix.square(
      1, 0, 0.01,
      2, 5, 0,
      3, 6, 7).isLowerTriangular(0))
    // prettier-ignore
    assert.ok(Matrix.square(
      1, 0, 0.01,
      2, 5, 0,
      3, 6, 7).isLowerTriangular(0.1))
  })

  QUnit.test("qrDecomposition", (assert) => {
    const assertQrDecompositionWorksFor = (m: Matrix) => {
      const { Q, R } = m.qrDecomposition()
      assert.equates(Q.isUnitary(0.00001), true)
      assert.equates(R.isUpperTriangular(0.00001), true)
      assert.approximatelyEquates(Q.times(R), m)
    }

    assert.throws(() => Matrix.col(2, 3).qrDecomposition())
    assert.throws(() => Matrix.row(2, 3).qrDecomposition())

    assert.equates(Matrix.solo(0).qrDecomposition(), {
      Q: Matrix.solo(1),
      R: Matrix.solo(0),
    })
    assert.equates(Matrix.solo(1).qrDecomposition(), {
      Q: Matrix.solo(1),
      R: Matrix.solo(1),
    })

    assert.equates(Matrix.square(2, 3, 0, 5).qrDecomposition(), {
      Q: Matrix.square(1, 0, 0, 1),
      R: Matrix.square(2, 3, 0, 5),
    })
    assert.approximatelyEquates(
      Matrix.square(2, 0, 3, 5).qrDecomposition(),
      {
        Q: Matrix.square(0.5547, -0.83205, 0.83205, 0.5547),
        R: Matrix.square(3.60555, 4.16025, 0, 2.7735),
      },
      0.0001,
    )
    assertQrDecompositionWorksFor(Matrix.square(0, 0, 1, 0))
    assertQrDecompositionWorksFor(Matrix.square(0, 1, 0, 0))
    assertQrDecompositionWorksFor(Matrix.square(2, 0, 3, 5))
    assertQrDecompositionWorksFor(Matrix.square(-1, Complex.I, Complex.I, 1))
    assertQrDecompositionWorksFor(
      Matrix.square(2, 3, 5, 7, new Complex(11, 13), 17, 19, 23, 29),
    )
  })

  QUnit.test("qrDecomposition_randomized", (assert) => {
    const assertQrDecompositionWorksFor = (m: Matrix) => {
      const { Q, R } = m.qrDecomposition()
      assert.equates(Q.isUnitary(0.00001), true)
      assert.equates(R.isUpperTriangular(0.00001), true)
      assert.approximatelyEquates(Q.times(R), m)
    }

    for (let k = 1; k < 6; k++) {
      const m = Matrix.generate(
        k,
        k,
        () => new Complex(Math.random() - 0.5, Math.random() - 0.5),
      )
      assertQrDecompositionWorksFor(m)
    }
  })

  QUnit.test("lqDecomposition", (assert) => {
    const assertLqDecompositionWorksFor = (m: Matrix) => {
      const { L, Q } = m.lqDecomposition()
      assert.equates(Q.isUnitary(0.00001), true)
      assert.equates(L.isLowerTriangular(0.00001), true)
      assert.approximatelyEquates(L.times(Q), m)
    }

    assert.throws(() => Matrix.col(2, 3).lqDecomposition())
    assert.throws(() => Matrix.row(2, 3).lqDecomposition())

    assert.equates(Matrix.solo(0).lqDecomposition(), {
      L: Matrix.solo(0),
      Q: Matrix.solo(1),
    })
    assert.equates(Matrix.solo(1).lqDecomposition(), {
      L: Matrix.solo(1),
      Q: Matrix.solo(1),
    })

    assert.approximatelyEquates(
      Matrix.square(2, 3, 0, 5).lqDecomposition(),
      {
        L: Matrix.square(3.60555, 0, 4.16025, 2.7735),
        Q: Matrix.square(0.5547, 0.83205, -0.83205, 0.5547),
      },
      0.0001,
    )
    assert.equates(Matrix.square(2, 0, 3, 5).lqDecomposition(), {
      L: Matrix.square(2, 0, 3, 5),
      Q: Matrix.square(1, 0, 0, 1),
    })
    assertLqDecompositionWorksFor(Matrix.square(0, 0, 1, 0))
    assertLqDecompositionWorksFor(Matrix.square(0, 1, 0, 0))
    assertLqDecompositionWorksFor(Matrix.square(2, 0, 3, 5))
    assertLqDecompositionWorksFor(Matrix.square(-1, Complex.I, Complex.I, 1))
    assertLqDecompositionWorksFor(
      Matrix.square(2, 3, 5, 7, new Complex(11, 13), 17, 19, 23, 29),
    )
  })

  QUnit.test("lqDecomposition_randomized", (assert) => {
    const assertLqDecompositionWorksFor = (m: Matrix) => {
      const { L, Q } = m.lqDecomposition()
      assert.equates(Q.isUnitary(0.00001), true)
      assert.equates(L.isLowerTriangular(0.00001), true)
      assert.approximatelyEquates(L.times(Q), m)
    }

    for (let k = 1; k < 6; k++) {
      const m = Matrix.generate(
        k,
        k,
        () => new Complex(Math.random() - 0.5, Math.random() - 0.5),
      )
      assertLqDecompositionWorksFor(m)
    }
  })

  QUnit.test("isDiagonal", (assert) => {
    assert.ok(Matrix.solo(NaN).isDiagonal())
    assert.ok(Matrix.solo(0).isDiagonal())
    assert.ok(Matrix.solo(1).isDiagonal())
    assert.notOk(Matrix.col(0, 0).isDiagonal())
    assert.notOk(Matrix.row(0, 0).isDiagonal())

    assert.ok(Matrix.square(1, 0, 0, 0).isDiagonal())
    assert.notOk(Matrix.square(0, 1, 0, 0).isDiagonal())
    assert.notOk(Matrix.square(0, NaN, 0, 0).isDiagonal())
    assert.notOk(Matrix.square(0, 0, 1, 0).isDiagonal())
    assert.ok(Matrix.square(0, 0, 0, 1).isDiagonal())

    assert.ok(Matrix.square(new Complex(2, 3), 0, 0, 0).isDiagonal())
    assert.notOk(Matrix.square(0, new Complex(2, 3), 0, 0).isDiagonal())
    assert.notOk(Matrix.square(0, 0, new Complex(2, 3), 0).isDiagonal())
    assert.ok(Matrix.square(0, 0, 0, new Complex(2, 3)).isDiagonal())

    // prettier-ignore
    assert.ok(Matrix.square(
      -10, 0, 0,
      0, Infinity, 0,
      0, 0, Complex.I).isDiagonal())
    // prettier-ignore
    assert.notOk(Matrix.square(
      -10, 0.1, 0,
      0, Infinity, 0,
      0, 0, Complex.I).isDiagonal())
    // prettier-ignore
    assert.ok(Matrix.square(
      -10, 0.1, 0,
      0, Infinity, 0,
      0, 0, Complex.I).isDiagonal(0.2))
  })
})
