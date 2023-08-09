import {Matrix, Simulator, StateVector} from '../src'
import {Complex} from '@qni/common'

QUnit.module('Simulator', () => {
  QUnit.module('.measure', () => {
    QUnit.test('|0>.measure(0) should be |0>', assert => {
      const simulator = new Simulator('0')
      simulator.measure(0)
      assert.equates(simulator.state, new StateVector('0'))
      assert.equates(simulator.measuredBits, {0: 0})
    })

    QUnit.test('|1>.measure(0) should be |1>', assert => {
      const simulator = new Simulator('1')
      simulator.measure(0)
      assert.equates(simulator.state, new StateVector('1'))
      assert.equates(simulator.measuredBits, {0: 1})
    })

    QUnit.test('|+>.measure(0) should be |0> or |1>', assert => {
      const simulator = new Simulator('+')
      simulator.measure(0)

      assert.ok(
        simulator.state.isApproximatelyEqualTo(new StateVector('0'), 0.000001) ||
          simulator.state.isApproximatelyEqualTo(new StateVector('1'), 0.00001),
      )
      assert.equates(Object.keys(simulator.measuredBits).length, 1)
      assert.ok(simulator.measuredBits[0] === 0 || simulator.measuredBits[0] === 1)
    })

    QUnit.test('|->.measure(0) should be |0> or |1>', assert => {
      const simulator = new Simulator('-')
      simulator.measure(0)

      assert.ok(
        simulator.state.matrix.isApproximatelyEqualTo(Matrix.col(1, 0), 0.000001) ||
          simulator.state.matrix.isApproximatelyEqualTo(Matrix.col(0, -1), 0.000001),
      )
    })

    QUnit.test('|i>.measure(0) should be |0> or |1>', assert => {
      const simulator = new Simulator('i')
      simulator.measure(0)

      assert.ok(
        simulator.state.matrix.isApproximatelyEqualTo(Matrix.col(1, 0), 0.000001) ||
          simulator.state.matrix.isApproximatelyEqualTo(Matrix.col(0, Complex.I), 0.000001),
      )
    })

    QUnit.test('|-i>.measure(0) should be |0> or |1>', assert => {
      const simulator = new Simulator('(-i)')
      simulator.measure(0)

      assert.ok(
        simulator.state.matrix.isApproximatelyEqualTo(Matrix.col(1, 0), 0.000001) ||
          simulator.state.matrix.isApproximatelyEqualTo(Matrix.col(0, new Complex(0, -1)), 0.000001),
      )
    })

    QUnit.test('|00>.measure(0) should be |00>', assert => {
      const simulator = new Simulator('00')
      simulator.measure(0)

      assert.equates(simulator.state, new StateVector('00'))
      assert.equates(simulator.measuredBits, {0: 0})
    })

    QUnit.test('|00>.measure(1) should be |00>', assert => {
      const simulator = new Simulator('00')
      simulator.measure(1)

      assert.equates(simulator.state, new StateVector('00'))
      assert.equates(simulator.measuredBits, {1: 0})
    })

    QUnit.test('|00>.measure(0, 1) should be |00>', assert => {
      const simulator = new Simulator('00')
      simulator.measure(0, 1)

      assert.equates(simulator.state, new StateVector('00'))
      assert.equates(simulator.measuredBits, {0: 0, 1: 0})
    })

    QUnit.test('|11>.measure(0) should be |11>', assert => {
      const simulator = new Simulator('11')
      simulator.measure(0)

      assert.equates(simulator.state, new StateVector('11'))
      assert.equates(simulator.measuredBits, {0: 1})
    })

    QUnit.test('|11>.measure(1) should be |11>', assert => {
      const simulator = new Simulator('11')
      simulator.measure(1)

      assert.equates(simulator.state, new StateVector('11'))
      assert.equates(simulator.measuredBits, {1: 1})
    })

    QUnit.test('|11>.measure(0, 1) should be |11>', assert => {
      const simulator = new Simulator('11')
      simulator.measure(0, 1)

      assert.equates(simulator.state, new StateVector('11'))
      assert.equates(simulator.measuredBits, {0: 1, 1: 1})
    })
  })

  QUnit.module('.cswap', () => {
    QUnit.test('|011>.cswap(0, 1, 2) should be |101>', assert => {
      const simulator = new Simulator('011')
      assert.approximatelyEquates(simulator.cswap(0, 1, 2).state, new StateVector('101'))
    })

    QUnit.test('|011>.cswap(2, 0, 1) should be |011>', assert => {
      const simulator = new Simulator('011')
      assert.approximatelyEquates(simulator.cswap(2, 0, 1).state, new StateVector('011'))
    })
  })
})
