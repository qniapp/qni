import {Complex, equate} from '@qni/common'
import {Simulator, StateVector} from '../src'

describe('Simulator', () => {
  describe('write', () => {
    test('|0>.write(0, 0) should be |0>', () => {
      const simulator = new Simulator('0')
      expect(equate(simulator.write(0, 0).state, new StateVector('0'))).toBe(true)
    })

    test('|0>.write(1, 0) should be |1>', () => {
      const simulator = new Simulator('0')
      expect(equate(simulator.write(1, 0).state, new StateVector('1'))).toBe(true)
    })

    test('|1>.write(0, 0) should be |0>', () => {
      const simulator = new Simulator('1')
      expect(equate(simulator.write(0, 0).state, new StateVector('0'))).toBe(true)
    })

    test('|1>.write(1, 0) should be |1>', () => {
      const simulator = new Simulator('1')
      expect(equate(simulator.write(1, 0).state, new StateVector('1'))).toBe(true)
    })

    test('|00>.write(0, 0, 1) should be |00>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.write(0, 0, 1).state, new StateVector('00'))).toBe(true)
    })

    test('|00>.write(1, 0) should be |01>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.write(1, 0).state, new StateVector('01'))).toBe(true)
    })

    test('|00>.write(1, 0, 1) should be |11>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.write(1, 0, 1).state, new StateVector('11'))).toBe(true)
    })

    test('|11>.write(1, 0, 1) should be |11>', () => {
      const simulator = new Simulator('11')
      expect(equate(simulator.write(1, 0, 1).state, new StateVector('11'))).toBe(true)
    })

    test('|11>.write(0, 0) should be |10>', () => {
      const simulator = new Simulator('11')
      expect(equate(simulator.write(0, 0).state, new StateVector('10'))).toBe(true)
    })

    test('|11>.write(0, 0, 1) should be |00>', () => {
      const simulator = new Simulator('11')
      expect(equate(simulator.write(0, 0, 1).state, new StateVector('00'))).toBe(true)
    })
  })

  describe('x', () => {
    test('|0>.x(0) should be |1>', () => {
      const simulator = new Simulator('0')
      expect(equate(simulator.x(0).state, new StateVector('1'))).toBe(true)
    })

    test('|1>.x(0) should be |0>', () => {
      const simulator = new Simulator('1')
      expect(equate(simulator.x(0).state, new StateVector('0'))).toBe(true)
    })

    test('|+>.x(0) should be |+>', () => {
      const simulator = new Simulator('+')
      expect(equate(simulator.x(0).state, new StateVector('+'))).toBe(true)
    })

    test('|->.x(0) should be -|->', () => {
      const simulator = new Simulator('-')
      expect(equate(simulator.x(0).state.matrix, new StateVector('-').matrix.times(-1))).toBe(true)
    })

    test('|i>.x(0) should be i|-i>', () => {
      const simulator = new Simulator('i')
      expect(equate(simulator.x(0).state.matrix, new StateVector('(-i)').matrix.times(new Complex(0, 1)))).toBe(true)
    })

    test('|-i>.x(0) should be -i|i>', () => {
      const simulator = new Simulator('(-i)')
      expect(equate(simulator.x(0).state.matrix, new StateVector('i').matrix.times(new Complex(0, -1)))).toBe(true)
    })

    test('|00>.x(0) should be |01>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.x(0).state, new StateVector('01'))).toBe(true)
    })

    test('|00>.x(1) should be |10>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.x(1).state, new StateVector('10'))).toBe(true)
    })

    test('|00>.x(0, 1) should be |11>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.x(0, 1).state, new StateVector('11'))).toBe(true)
    })
  })

  describe('h', () => {
    test('|0>.h(0) should be |+>', () => {
      const simulator = new Simulator('0')
      expect(equate(simulator.h(0).state, new StateVector('+'))).toBe(true)
    })

    test('|1>.h(0) should be |->', () => {
      const simulator = new Simulator('1')
      expect(equate(simulator.h(0).state, new StateVector('-'))).toBe(true)
    })

    test('|+>.h(0) should be |0>', () => {
      const simulator = new Simulator('+')
      expect(simulator.h(0).state.isApproximatelyEqualTo(new StateVector('0'), 0.000001)).toBe(true)
    })

    test('|->.h(0) should be |1>', () => {
      const simulator = new Simulator('-')
      expect(simulator.h(0).state.isApproximatelyEqualTo(new StateVector('1'), 0.000001)).toBe(true)
    })

    test('|i>.h(0) should be e^{iπ/4}|-i>', () => {
      const π = Math.PI
      const i = Complex.I
      const e = new Complex(Math.E, 0)

      const simulator = new Simulator('i')
      expect(
        equate(
          simulator.h(0).state.matrix,
          new StateVector('(-i)').matrix.times(e.raisedTo(i.times(π).dividedBy(4)._unsafeUnwrap())),
        ),
      ).toBe(true)
    })

    test('|-i>.h(0) should be e^{-iπ/4}|i>', () => {
      const π = Math.PI
      const i = Complex.I
      const e = new Complex(Math.E, 0)

      const simulator = new Simulator('(-i)')
      expect(
        equate(
          simulator.h(0).state.matrix,
          new StateVector('i').matrix.times(e.raisedTo(i.times(π).dividedBy(-4)._unsafeUnwrap())),
        ),
      ).toBe(true)
    })

    test('|00>.h(0) should be |0+>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.h(0).state, new StateVector('0+'))).toBe(true)
    })

    test('|00>.h(1) should be |+0>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.h(1).state, new StateVector('+0'))).toBe(true)
    })

    test('|00>.h(0, 1) should be |++>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.h(0, 1).state, new StateVector('++'))).toBe(true)
    })
  })
})
