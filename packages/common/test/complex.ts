/* eslint-env qunit */

import {Complex} from '../src/complex'
import {Format} from '../src/format'

QUnit.module('Complex', () => {
  QUnit.test('isEqualTo', assert => {
    const c = new Complex(5, 7)
    assert.equates(c, c)
    assert.notEquates(c, null)
    assert.notEquates(c, '')

    assert.equates(new Complex(2, 3), new Complex(2, 3))
    assert.notEquates(new Complex(2, 3), new Complex(3, 3))
    assert.notEquates(new Complex(2, 3), new Complex(2, 4))
    assert.notEquates(new Complex(2, 3), new Complex(3, 2))

    assert.equates(Complex.ZERO, 0)
    assert.equates(Complex.ONE, 1)
    assert.notEquates(Complex.ZERO, 1)
    assert.notEquates(Complex.I, 1)
    assert.equates(new Complex(2.5, 0), 2.5)
    assert.notEquates(new Complex(0, 2.5), 2.5)
  })

  QUnit.test('polar', assert => {
    assert.equates(Complex.polar(0, 0), 0)
    assert.equates(Complex.polar(0, 2), 0)
    assert.equates(Complex.polar(0, -5), 0)

    assert.equates(Complex.polar(1, 0), 1)
    assert.equates(Complex.polar(2, 0), 2)

    assert.equates(Complex.polar(1, Math.PI), -1)
    assert.equates(Complex.polar(1, 3 * Math.PI), -1)
    assert.equates(Complex.polar(1, -Math.PI), -1)

    assert.equates(Complex.polar(1, Math.PI / 2), Complex.I)
    assert.equates(Complex.polar(1, (3 * Math.PI) / 2), Complex.I.times(-1))

    assert.equates(Complex.polar(1, Math.PI / 4), new Complex(Math.sqrt(0.5), Math.sqrt(0.5)))
    assert.approximatelyEquates(Complex.polar(Math.sqrt(2), Math.PI / 4), new Complex(1, 1))
  })

  QUnit.test('isApproximatelyEqualTo', assert => {
    const c = new Complex(5, 7)
    assert.approximatelyEquates(c, c, 0)
    assert.approximatelyEquates(c, c, 1)
    assert.notApproximatelyEquates(c, new Complex(5, 6), 0.5)
    assert.approximatelyEquates(c, new Complex(5, 6), 1)
    assert.approximatelyEquates(c, new Complex(5, 8), 1)

    assert.notApproximatelyEquates(c, null)
    assert.notApproximatelyEquates(c, '')
  })

  QUnit.test('from', assert => {
    assert.equates(Complex.from(1).real, 1)
    assert.equates(Complex.from(1).imag, 0)
    assert.equates(Complex.from(-1.5).real, -1.5)
    assert.equates(Complex.from(-1.5).imag, 0)
    assert.equates(Complex.from(new Complex(2, 3)).real, 2)
    assert.equates(Complex.from(new Complex(2, 3)).imag, 3)
  })

  QUnit.test('realPartOf', assert => {
    assert.equates(Complex.realPartOf(1), 1)
    assert.equates(Complex.realPartOf(1.5), 1.5)
    assert.equates(Complex.realPartOf(-2), -2)
    assert.equates(Complex.realPartOf(new Complex(3, 1)), 3)
    assert.equates(Complex.realPartOf(new Complex(5, 0)), 5)
  })

  QUnit.test('imagPartOf', assert => {
    assert.equates(Complex.imagPartOf(1), 0)
    assert.equates(Complex.imagPartOf(1.5), 0)
    assert.equates(Complex.imagPartOf(-2), 0)
    assert.equates(Complex.imagPartOf(new Complex(3, 0)), 0)
    assert.equates(Complex.imagPartOf(new Complex(3, 1)), 1)
    assert.equates(Complex.imagPartOf(new Complex(5, -2)), -2)
  })

  QUnit.test('toString', assert => {
    assert.equates(Complex.ZERO.toString(), '0')

    assert.equates(Complex.ONE.toString(), '1')
    assert.equates(Complex.I.toString(), 'i')
    assert.equates(new Complex(1, 1).toString(), '1+i')

    assert.equates(new Complex(-1, 0).toString(), '-1')
    assert.equates(new Complex(0, -1).toString(), '-i')
    assert.equates(new Complex(-1, -1).toString(), '-1-i')

    assert.equates(new Complex(2, 0).toString(), '2')
    assert.equates(new Complex(0, 2).toString(), '2i')
    assert.equates(new Complex(2, 2).toString(), '2+2i')

    assert.equates(new Complex(2, -3).toString(), '2-3i')
    assert.equates(new Complex(Math.sqrt(1 / 2), -1 / 3).toString(), '√½-⅓i')

    assert.equates(new Complex(2, -3).toString(Format.CONSISTENT), '+2.00-3.00i')
    assert.equates(new Complex(2, -3).toString(Format.EXACT), '2-3i')
    assert.equates(new Complex(2, -3).toString(Format.MINIFIED), '2-3i')
    assert.equates(new Complex(2, -3).toString(Format.SIMPLIFIED), '2-3i')

    assert.equates(new Complex(-2, -3).toString(Format.CONSISTENT), '-2.00-3.00i')
    assert.equates(new Complex(-2, -3).toString(Format.EXACT), '-2-3i')
    assert.equates(new Complex(-2, -3).toString(Format.MINIFIED), '-2-3i')
    assert.equates(new Complex(-2, -3).toString(Format.SIMPLIFIED), '-2-3i')

    assert.equates(new Complex(0, -1).toString(Format.CONSISTENT), '+0.00-1.00i')
    assert.equates(new Complex(0, -1).toString(Format.EXACT), '-i')
    assert.equates(new Complex(0, -1).toString(Format.MINIFIED), '-i')
    assert.equates(new Complex(0, -1).toString(Format.SIMPLIFIED), '-i')

    assert.equates(new Complex(1 / 3, 0).toString(Format.CONSISTENT), '+0.33+0.00i')
    assert.equates(new Complex(1 / 3, 0).toString(Format.EXACT), '⅓')
    assert.equates(new Complex(1 / 3, 0).toString(Format.MINIFIED), '⅓')
    assert.equates(new Complex(1 / 3, 0).toString(Format.SIMPLIFIED), '⅓')
  })

  QUnit.test('toString_perturbed', assert => {
    assert.equates(new Complex(1 / 3 + 0.00001, 0).toString(Format.CONSISTENT), '+0.33+0.00i')
    assert.equates(new Complex(1 / 3 + 0.00001, 0).toString(Format.EXACT), '0.3333433333333333')
    assert.equates(new Complex(1 / 3 + 0.00001, 0).toString(Format.MINIFIED), '0.3333433333333333')
    assert.equates(new Complex(1 / 3 + 0.00001, 0).toString(Format.SIMPLIFIED), '⅓')
  })

  QUnit.test('norm2', assert => {
    assert.equates(Complex.ZERO.norm2(), 0)

    assert.equates(Complex.ONE.norm2(), 1)
    assert.equates(Complex.I.norm2(), 1)

    assert.equates(new Complex(1, 1).norm2(), 2)

    assert.equates(new Complex(2, 0).norm2(), 4)
    assert.equates(new Complex(0, 2).norm2(), 4)
    assert.equates(new Complex(-2, 0).norm2(), 4)
    assert.equates(new Complex(0, -2).norm2(), 4)

    assert.equates(new Complex(2, 3).norm2(), 13)
    assert.equates(new Complex(-3, -4).norm2(), 25)
  })

  QUnit.test('abs', assert => {
    assert.equates(Complex.ZERO.abs(), 0)

    assert.equates(Complex.ONE.abs(), 1)
    assert.equates(Complex.I.abs(), 1)

    assert.equates(new Complex(2, 0).abs(), 2)
    assert.equates(new Complex(0, 2).abs(), 2)
    assert.equates(new Complex(-2, 0).abs(), 2)
    assert.equates(new Complex(0, -2).abs(), 2)

    assert.approximatelyEquates(new Complex(2, 3).abs(), Math.sqrt(13))
    assert.equates(new Complex(-3, -4).abs(), 5)
  })

  QUnit.test('conjugate', assert => {
    assert.equates(Complex.ZERO.conjugate(), Complex.ZERO)
    assert.equates(new Complex(2, 3).conjugate(), new Complex(2, -3))
  })

  QUnit.test('phase', assert => {
    assert.equates(Complex.ZERO.phase(), 0)

    assert.equates(Complex.ONE.phase(), 0)
    assert.approximatelyEquates(Complex.I.phase(), Math.PI / 2)
    assert.approximatelyEquates(new Complex(-1, 0).phase(), Math.PI)
    assert.approximatelyEquates(new Complex(0, -1).phase(), -Math.PI / 2)

    assert.approximatelyEquates(new Complex(1, 1).phase(), Math.PI / 4)
    assert.approximatelyEquates(new Complex(2, 1).phase(), Math.PI * 0.1475836)
  })

  QUnit.test('unit', assert => {
    assert.equates(Complex.ZERO.unit(), 1)

    assert.equates(new Complex(0.5, 0).unit(), 1)
    assert.equates(Complex.ONE.unit(), 1)
    assert.equates(new Complex(2, 0).unit(), 1)

    assert.equates(new Complex(-0.5, 0).unit(), -1)
    assert.equates(new Complex(-1, 0).unit(), -1)
    assert.equates(new Complex(-2, 0).unit(), -1)

    assert.equates(new Complex(0, 0.5).unit(), Complex.I)
    assert.equates(Complex.I.unit(), Complex.I)
    assert.equates(new Complex(0, 2).unit(), Complex.I)

    assert.equates(new Complex(0, -0.5).unit(), Complex.I.times(-1))
    assert.equates(new Complex(0, -1).unit(), Complex.I.times(-1))
    assert.equates(new Complex(0, -2).unit(), Complex.I.times(-1))

    assert.ok(
      new Complex(1, 1)
        .unit()
        .minus(new Complex(Math.sqrt(0.5), Math.sqrt(0.5)))
        .norm2() < 0.0000001
    )
  })

  QUnit.test('plus', assert => {
    assert.equates(new Complex(2, 3).plus(new Complex(5, 7)), new Complex(7, 10))
    assert.equates(new Complex(2, 3).plus(5), new Complex(7, 3))
  })

  QUnit.test('minus', assert => {
    assert.equates(new Complex(2, 3).minus(new Complex(5, 7)), new Complex(-3, -4))
    assert.equates(new Complex(2, 3).minus(5), new Complex(-3, 3))
  })

  QUnit.test('times', assert => {
    assert.equates(new Complex(2, 3).times(new Complex(5, 7)), new Complex(-11, 29))
    assert.equates(new Complex(2, 3).times(5), new Complex(10, 15))
  })

  QUnit.test('dividedBy', assert => {
    assert.throws(() => Complex.ONE.dividedBy(0))
    assert.equates(new Complex(2, 3).dividedBy(new Complex(2, 0)), new Complex(1, 1.5))
    assert.equates(new Complex(2, 3).dividedBy(new Complex(0, 2)), new Complex(1.5, -1))
    assert.equates(new Complex(2, -2).dividedBy(new Complex(1, 1)), new Complex(0, -2))
  })

  QUnit.test('sqrts', assert => {
    const s = Math.sqrt(0.5)
    assert.equates(Complex.ZERO.sqrts(), [0])
    assert.equates(Complex.ONE.sqrts(), [1, -1])
    assert.approximatelyEquates(Complex.I.sqrts(), [new Complex(s, s), new Complex(-s, -s)])
    assert.equates(Complex.ONE.times(-1).sqrts(), [Complex.I, new Complex(0, -1)])
    assert.equates(new Complex(4, 0).sqrts(), [2, -2])
    assert.approximatelyEquates(new Complex(0, -4).sqrts(), [new Complex(s * 2, -s * 2), new Complex(-s * 2, s * 2)])
  })

  QUnit.test('rootsOfQuadratic', assert => {
    // Infinitely many solutions.
    assert.throws(() => Complex.rootsOfQuadratic(0, 0, 0))

    // No solutions.
    assert.equates(Complex.rootsOfQuadratic(0, 0, 1), [])
    assert.equates(Complex.rootsOfQuadratic(0, 0, Complex.I), [])

    // Single solutions due to degenerate linear case.
    assert.equates(Complex.rootsOfQuadratic(0, 1, 1), [-1])
    assert.equates(Complex.rootsOfQuadratic(0, Complex.I, Complex.I), [-1])
    assert.equates(Complex.rootsOfQuadratic(0, 2, 3), [-1.5])

    // Single solution due to root multiplicity.
    assert.equates(Complex.rootsOfQuadratic(1, 0, 0), [0])
    assert.equates(Complex.rootsOfQuadratic(1, 2, 1), [-1])

    // Two mirrored solutions.
    assert.equates(Complex.rootsOfQuadratic(1, 0, 4), [new Complex(0, -2), new Complex(0, 2)])
    assert.equates(Complex.rootsOfQuadratic(1, 0, 1), [new Complex(0, -1), Complex.I])
    assert.equates(Complex.rootsOfQuadratic(1, 0, -1), [-1, 1])
    assert.equates(Complex.rootsOfQuadratic(1, 0, -4), [-2, 2])

    // Two solutions. General.
    assert.equates(Complex.rootsOfQuadratic(1, 1, 0), [-1, 0])
    assert.equates(Complex.rootsOfQuadratic(1, 7, 12), [-4, -3])
    assert.equates(Complex.rootsOfQuadratic(2, 14, 24), [-4, -3])

    // Complex coefficient.
    const s = Math.sqrt(0.5)
    assert.approximatelyEquates(Complex.rootsOfQuadratic(1, 0, new Complex(0, -1)), [
      new Complex(-s, -s),
      new Complex(s, s)
    ])
    assert.approximatelyEquates(
      Complex.rootsOfQuadratic(new Complex(2, 3), new Complex(5, 7), new Complex(11, 13)),
      [new Complex(-1.06911, 1.85157), new Complex(-1.31551, -1.77465)],
      0.0001
    )
  })

  QUnit.test('rootsOfQuadratic_fuzz', assert => {
    for (let i = 0; i < 100; i++) {
      // Random point on surface of unit sphere.
      const theta = 2 * Math.PI * Math.random()
      const phi = Math.acos(2 * Math.random() - 1)
      const a = Math.cos(theta) * Math.sin(phi)
      const b = Math.sin(theta) * Math.sin(phi)
      const c = Math.cos(phi)

      // Check that returned roots are actually roots.
      // (Note: will not detect missed roots.)
      const roots = Complex.rootsOfQuadratic(a, b, c)
      for (const x of roots) {
        const y = x.times(x).times(a).plus(x.times(b)).plus(c)
        assert.approximatelyEquates(y, 0)
      }
    }
  })

  QUnit.test('exp', assert => {
    const π = Math.PI
    const i = Complex.I
    const s = Math.sqrt(0.5)

    assert.equates(Complex.ZERO.exp(), 1)
    assert.approximatelyEquates(Complex.ONE.exp(), Math.E)
    assert.approximatelyEquates(new Complex(2, 0).exp(), Math.E * Math.E)
    assert.approximatelyEquates(new Complex(2, π).exp(), -Math.E * Math.E)

    // Unit circle.
    assert.equates(i.times(-π).exp(), -1)
    assert.equates(i.times(-π / 2).exp(), i.neg())
    assert.equates(i.times(π / 4).exp(), new Complex(s, s))
    assert.equates(i.times(π / 2).exp(), i)
    assert.approximatelyEquates(i.times(π).exp(), -1)
    assert.equates(i.times((3 * π) / 2).exp(), i.neg())
    assert.equates(i.times(2 * π).exp(), 1)
  })

  QUnit.test('ln', assert => {
    const π = Math.PI

    assert.equates(Complex.ONE.ln(), 0)
    assert.approximatelyEquates(new Complex(Math.E, 0).ln(), 1)
    assert.approximatelyEquates(new Complex(-1, 0).ln(), new Complex(0, π))
    assert.approximatelyEquates(Complex.I.ln(), new Complex(0, π / 2))
    assert.approximatelyEquates(new Complex(Math.E * Math.E, 0).ln(), new Complex(2, 0))
    assert.approximatelyEquates(new Complex(-Math.E * Math.E, 0).ln(), new Complex(2, π))

    assert.equates(Complex.I.ln(), new Complex(0, π / 2))
    // assert.ok(new Complex(1, 1).ln().isEqualTo(new Complex(Math.log(2), π / 4)))
    assert.equates(Complex.I.neg().ln(), new Complex(0, -π / 2))
    // assert.ok(
    //   new Complex(-1, -1)
    //     .ln()
    //     .isEqualTo(new Complex(Math.log(2), (-3 * π) / 4)),
    // )
  })

  QUnit.test('neg', assert => {
    assert.equates(new Complex(3, 5).neg(), new Complex(-3, -5))
  })

  QUnit.test('raisedTo', assert => {
    const π = Math.PI
    const i = Complex.I
    const e = new Complex(Math.E, 0)
    const s = Math.sqrt(0.5)

    // Unit circle axes.
    assert.equates(e.raisedTo(i.times(-π / 2)), i.neg())
    assert.equates(e.raisedTo(i.times(0)), 1)
    assert.equates(e.raisedTo(i.times(π / 2)), i)
    assert.equates(e.raisedTo(i.times(π)), -1)
    assert.equates(e.raisedTo(i.times((3 * π) / 2)), i.neg())
    assert.equates(e.raisedTo(i.times(2 * π)), 1)

    // Unit circle diagonals.
    assert.equates(e.raisedTo(i.times(-π / 4)), new Complex(s, -s))
    assert.equates(e.raisedTo(i.times(π / 4)), new Complex(s, s))
    assert.equates(e.raisedTo(i.times((3 * π) / 4)), new Complex(-s, s))
    assert.equates(e.raisedTo(i.times((5 * π) / 4)), new Complex(-s, -s))

    // Zero.
    assert.equates(Complex.ZERO.raisedTo(2), 0)
    assert.equates(Complex.ZERO.raisedTo(new Complex(1, 3)), 0)
    assert.equates(new Complex(2, 3).raisedTo(0), 1)

    // Base negative 1.
    assert.equates(new Complex(-1, 0).raisedTo(0), 1)
    assert.equates(new Complex(-1, 0).raisedTo(0.5), i)
    assert.equates(new Complex(-1, 0).raisedTo(-0.5), i.neg())
    assert.equates(new Complex(-1, 0).raisedTo(1), -1)

    // Misc.
    assert.approximatelyEquates(i.raisedTo(i), Math.exp(-π / 2))
    assert.approximatelyEquates(
      new Complex(1, 1).raisedTo(new Complex(1, 1)),
      new Complex(0.2739572538301, 0.5837007587586)
    )
    assert.approximatelyEquates(
      new Complex(2, 3).raisedTo(new Complex(5, 7)),
      new Complex(0.1525582909989, 0.6079153491494)
    )
  })

  QUnit.test('trig', assert => {
    assert.approximatelyEquates(Complex.from(0.2).cos(), Complex.from(Math.cos(0.2)))
    assert.approximatelyEquates(Complex.from(0.2).sin(), Complex.from(Math.sin(0.2)))
    assert.approximatelyEquates(Complex.from(0.2).tan(), Complex.from(Math.tan(0.2)))
  })
})
