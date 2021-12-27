import {Matrix, Simulator, StateVector} from '../src'
import {Complex} from '@qni/common'

QUnit.module('Simulator', () => {
  QUnit.module('.write', () => {
    QUnit.test('|0>.write(0, 0) should be |0>', assert => {
      const simulator = new Simulator('0')
      assert.equates(simulator.write(0, 0).state, new StateVector('0'))
    })

    QUnit.test('|0>.write(0, 1) should be |1>', assert => {
      const simulator = new Simulator('0')
      assert.equates(simulator.write(1, 0).state, new StateVector('1'))
    })

    QUnit.test('|1>.write(0, 0) should be |0>', assert => {
      const simulator = new Simulator('1')
      assert.equates(simulator.write(0, 0).state, new StateVector('0'))
    })

    QUnit.test('|1>.write(1, 0) should be |1>', assert => {
      const simulator = new Simulator('1')
      assert.equates(simulator.write(1, 0).state, new StateVector('1'))
    })

    QUnit.test('|00>.write(0, 0, 1) should be |00>', assert => {
      const simulator = new Simulator('00')
      assert.equates(simulator.write(0, 0, 1).state, new StateVector('00'))
    })

    QUnit.test('|00>.write(1, 0) should be |01>', assert => {
      const simulator = new Simulator('00')
      assert.equates(simulator.write(1, 0).state, new StateVector('01'))
    })

    QUnit.test('|00>.write(1, 0, 1) should be |11>', assert => {
      const simulator = new Simulator('00')
      assert.equates(simulator.write(1, 0, 1).state, new StateVector('11'))
    })

    QUnit.test('|11>.write(1, 0, 1) should be |11>', assert => {
      const simulator = new Simulator('11')
      assert.equates(simulator.write(1, 0, 1).state, new StateVector('11'))
    })

    QUnit.test('|11>.write(0, 0) should be |10>', assert => {
      const simulator = new Simulator('11')
      assert.equates(simulator.write(0, 0).state, new StateVector('10'))
    })

    QUnit.test('|11>.write(0, 0, 1) should be |00>', assert => {
      const simulator = new Simulator('11')
      assert.equates(simulator.write(0, 0, 1).state, new StateVector('00'))
    })
  })

  QUnit.module('.x', () => {
    QUnit.test('|0>.x(0) should be |1>', assert => {
      const simulator = new Simulator('0')
      assert.equates(simulator.x(0).state, new StateVector('1'))
    })

    QUnit.test('|1>.x(0) should be |0>', assert => {
      const simulator = new Simulator('1')
      assert.equates(simulator.x(0).state, new StateVector('0'))
    })

    QUnit.test('|+>.x(0) should be |+>', assert => {
      const simulator = new Simulator('+')
      assert.equates(simulator.x(0).state, new StateVector('+'))
    })

    QUnit.test('|->.x(0) should be -|->', assert => {
      const simulator = new Simulator('-')
      assert.equates(simulator.x(0).state.matrix, new StateVector('-').matrix.times(-1))
    })

    QUnit.test('|i>.x(0) should be i|-i>', assert => {
      const simulator = new Simulator('i')
      assert.equates(simulator.x(0).state.matrix, new StateVector('(-i)').matrix.times(new Complex(0, 1)))
    })

    QUnit.test('|-i>.x(0) should be -i|i>', assert => {
      const simulator = new Simulator('(-i)')

      assert.equates(simulator.x(0).state.matrix, new StateVector('i').matrix.times(new Complex(0, -1)))
    })

    QUnit.test('|00>.x(0) should be |01>', assert => {
      const simulator = new Simulator('00')
      assert.equates(simulator.x(0).state, new StateVector('01'))
    })

    QUnit.test('|00>.x(1) should be |10>', assert => {
      const simulator = new Simulator('00')
      assert.equates(simulator.x(1).state, new StateVector('10'))
    })

    QUnit.test('|00>.x(0, 1) should be |11>', assert => {
      const simulator = new Simulator('00')
      assert.equates(simulator.x(0, 1).state, new StateVector('11'))
    })
  })

  QUnit.module('.h', () => {
    QUnit.test('|0>.h(0) should be |+>', assert => {
      const simulator = new Simulator('0')
      assert.approximatelyEquates(simulator.h(0).state, new StateVector('+'))
    })

    QUnit.test('|1>.h(0) should be |->', assert => {
      const simulator = new Simulator('1')
      assert.approximatelyEquates(simulator.h(0).state, new StateVector('-'))
    })

    QUnit.test('|+>.h(0) should be |0>', assert => {
      const simulator = new Simulator('+')
      assert.approximatelyEquates(simulator.h(0).state, new StateVector('0'))
    })

    QUnit.test('|->.h(0) should be |1>', assert => {
      const simulator = new Simulator('-')
      assert.approximatelyEquates(simulator.h(0).state, new StateVector('1'))
    })

    QUnit.test('|i>.h(0) should be e^{iπ/4}|-i>', assert => {
      const π = Math.PI
      const i = Complex.I
      const e = new Complex(Math.E, 0)

      const simulator = new Simulator('i')
      assert.approximatelyEquates(
        simulator.h(0).state.matrix,
        new StateVector('(-i)').matrix.times(e.raisedTo(i.times(π).dividedBy(4)))
      )
    })

    QUnit.test('|-i>.h(0) should be e^{-iπ/4}|i>', assert => {
      const π = Math.PI
      const i = Complex.I
      const e = new Complex(Math.E, 0)

      const simulator = new Simulator('(-i)')
      assert.approximatelyEquates(
        simulator.h(0).state.matrix,
        new StateVector('i').matrix.times(e.raisedTo(i.times(π).dividedBy(-4)))
      )
    })

    QUnit.test('|00>.h(0) should be |0+>', assert => {
      const simulator = new Simulator('00')
      assert.approximatelyEquates(simulator.h(0).state, new StateVector('0+'))
    })

    QUnit.test('|00>.h(1) should be |+0>', assert => {
      const simulator = new Simulator('00')
      assert.approximatelyEquates(simulator.h(1).state, new StateVector('+0'))
    })

    QUnit.test('|00>.h(0, 1) should be |++>', assert => {
      const simulator = new Simulator('00')
      assert.approximatelyEquates(simulator.h(0, 1).state, new StateVector('++'))
    })
  })

  QUnit.module('.phase', () => {
    QUnit.test("|0>.phase('pi', 0) should be |0>", assert => {
      const simulator = new Simulator('0')
      assert.equates(simulator.phase('pi', 0).state, new StateVector('0'))
    })

    QUnit.test("|1>.phase('pi', 0) should be -|1>", assert => {
      const simulator = new Simulator('1')
      assert.approximatelyEquates(simulator.phase('pi', 0).state.matrix, new StateVector('1').matrix.times(-1))
    })

    QUnit.test("|+>.phase('pi', 0) should be |->", assert => {
      const simulator = new Simulator('+')
      assert.approximatelyEquates(simulator.phase('pi', 0).state, new StateVector('-'))
    })

    QUnit.test("|->.phase('pi', 0) should be |+>", assert => {
      const simulator = new Simulator('-')
      assert.approximatelyEquates(simulator.phase('pi', 0).state, new StateVector('+'))
    })

    QUnit.test("|i>.phase('pi', 0) should be |-i>", assert => {
      const simulator = new Simulator('i')
      assert.approximatelyEquates(simulator.phase('pi', 0).state, new StateVector('(-i)'))
    })

    QUnit.test("|-i>.phase('pi', 0) should be |i>", assert => {
      const simulator = new Simulator('(-i)')
      assert.approximatelyEquates(simulator.phase('pi', 0).state, new StateVector('i'))
    })

    QUnit.test("|++>.phase('pi', 0) should be |+->", assert => {
      const simulator = new Simulator('++')
      assert.approximatelyEquates(simulator.phase('pi', 0).state, new StateVector('+-'))
    })

    QUnit.test("|++>.phase('pi', 1) should be |-+>", assert => {
      const simulator = new Simulator('++')
      assert.approximatelyEquates(simulator.phase('pi', 1).state, new StateVector('-+'))
    })

    QUnit.test("|++>.phase('pi', 0, 1) should be |-->", assert => {
      const simulator = new Simulator('++')
      assert.approximatelyEquates(simulator.phase('pi', 0, 1).state, new StateVector('--'))
    })
  })

  QUnit.module('.rnot', () => {
    QUnit.test("|0>.rnot(0) should be |0>.h(0).phase('pi/2', 0).h(0)", assert => {
      assert.approximatelyEquates(new Simulator('0').rnot(0).state, new Simulator('0').h(0).phase('pi/2', 0).h(0).state)
    })

    QUnit.test("|1>.rnot(0) should be |1>.h(0).phase('pi/2', 0).h(0)", assert => {
      assert.approximatelyEquates(new Simulator('1').rnot(0).state, new Simulator('1').h(0).phase('pi/2', 0).h(0).state)
    })

    QUnit.test("|+>.rnot(0) should be |+>.h(0).phase('-pi/2', 0).h(0)", assert => {
      assert.approximatelyEquates(
        new Simulator('+').rnot(0).state,
        new Simulator('+').h(0).phase('-pi/2', 0).h(0).state
      )
    })

    QUnit.test("|->.rnot(0) should be |->.h(0).phase('pi/2', 0).h(0)", assert => {
      assert.approximatelyEquates(new Simulator('-').rnot(0).state, new Simulator('-').h(0).phase('pi/2', 0).h(0).state)
    })

    QUnit.test("|i>.rnot(0) should be |i>.h(0).phase('pi/2', 0).h(0)", assert => {
      assert.approximatelyEquates(new Simulator('i').rnot(0).state, new Simulator('i').h(0).phase('pi/2', 0).h(0).state)
    })

    QUnit.test("|-i>.rnot(0) should be |-i>.h(0).phase('pi/2', 0).h(0)", assert => {
      assert.approximatelyEquates(
        new Simulator('(-i)').rnot(0).state,
        new Simulator('(-i)').h(0).phase('pi/2', 0).h(0).state
      )
    })

    QUnit.test("|00>.rnot(0) should be |00>.h(0).phase('pi/2', 0).h(0)", assert => {
      assert.approximatelyEquates(
        new Simulator('00').rnot(0).state,
        new Simulator('00').h(0).phase('pi/2', 0).h(0).state
      )
    })

    QUnit.test("|00>.rnot(1) should be |00>.h(1).phase('pi/2', 1).h(1)", assert => {
      assert.approximatelyEquates(
        new Simulator('00').rnot(1).state,
        new Simulator('00').h(1).phase('pi/2', 1).h(1).state
      )
    })

    QUnit.test("|00>.rnot(0, 1) should be |00>.h(0, 1).phase('pi/2', 0, 1).h(0, 1)", assert => {
      assert.approximatelyEquates(
        new Simulator('00').rnot(0, 1).state,
        new Simulator('00').h(0, 1).phase('pi/2', 0, 1).h(0, 1).state
      )
    })
  })

  QUnit.module('.swap', () => {
    QUnit.test('|01>.swap(0, 1) should be |10>', assert => {
      const simulator = new Simulator('01')
      assert.equates(simulator.swap(0, 1).state, new StateVector('10'))
    })
  })

  QUnit.module('.cnot', () => {
    QUnit.test('|00>.cnot(0, 1) should be |00>', assert => {
      const simulator = new Simulator('00')
      assert.equates(simulator.cnot(0, 1).state, new StateVector('00'))
    })

    QUnit.test('|00>.cnot(1, 0) should be |00>', assert => {
      const simulator = new Simulator('00')
      assert.equates(simulator.cnot(1, 0).state, new StateVector('00'))
    })

    QUnit.test('|11>.cnot(0, 1) should be |01>', assert => {
      const simulator = new Simulator('11')
      assert.equates(simulator.cnot(0, 1).state, new StateVector('01'))
    })

    QUnit.test('|11>.cnot(1, 0) should be |10>', assert => {
      const simulator = new Simulator('11')
      assert.equates(simulator.cnot(1, 0).state, new StateVector('10'))
    })

    QUnit.test('|010>.cnot([0, 1], 2) should be |010>', assert => {
      const simulator = new Simulator('010')
      assert.approximatelyEquates(simulator.cnot([0, 1], 2).state, new StateVector('010'))
    })

    QUnit.test('|011>.cnot([0, 1], 2) should be |111>', assert => {
      const simulator = new Simulator('011')
      assert.approximatelyEquates(simulator.cnot([0, 1], 2).state, new StateVector('111'))
    })
  })

  QUnit.module('.cphase', () => {
    QUnit.test("|00>.cphase(0, 'pi', 1) should be |00>", assert => {
      const simulator = new Simulator('00')
      assert.equates(simulator.cphase(0, 'pi', 1).state, new StateVector('00'))
    })

    QUnit.test("|11>.cphase(0, 'pi', 1) should be -|11>", assert => {
      const simulator = new Simulator('11')
      assert.approximatelyEquates(simulator.cphase(0, 'pi', 1).state.matrix, new StateVector('11').matrix.times(-1))
    })
  })

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
          simulator.state.isApproximatelyEqualTo(new StateVector('1'), 0.00001)
      )
      assert.equates(Object.keys(simulator.measuredBits).length, 1)
      assert.ok(simulator.measuredBits[0] === 0 || simulator.measuredBits[0] === 1)
    })

    QUnit.test('|->.measure(0) should be |0> or |1>', assert => {
      const simulator = new Simulator('-')
      simulator.measure(0)

      assert.ok(
        simulator.state.matrix.isApproximatelyEqualTo(Matrix.col(1, 0), 0.000001) ||
          simulator.state.matrix.isApproximatelyEqualTo(Matrix.col(0, -1), 0.000001)
      )
    })

    QUnit.test('|i>.measure(0) should be |0> or |1>', assert => {
      const simulator = new Simulator('i')
      simulator.measure(0)

      assert.ok(
        simulator.state.matrix.isApproximatelyEqualTo(Matrix.col(1, 0), 0.000001) ||
          simulator.state.matrix.isApproximatelyEqualTo(Matrix.col(0, Complex.I), 0.000001)
      )
    })

    QUnit.test('|-i>.measure(0) should be |0> or |1>', assert => {
      const simulator = new Simulator('(-i)')
      simulator.measure(0)

      assert.ok(
        simulator.state.matrix.isApproximatelyEqualTo(Matrix.col(1, 0), 0.000001) ||
          simulator.state.matrix.isApproximatelyEqualTo(Matrix.col(0, new Complex(0, -1)), 0.000001)
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
