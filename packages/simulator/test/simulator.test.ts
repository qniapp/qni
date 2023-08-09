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

  describe('phase', () => {
    test("|0>.phase('π', 0) should be |0>", () => {
      const simulator = new Simulator('0')
      expect(equate(simulator.phase('π', 0).state, new StateVector('0'))).toBe(true)
    })

    test("|1>.phase('π', 0) should be -|1>", () => {
      const simulator = new Simulator('1')
      expect(equate(simulator.phase('π', 0).state.matrix, new StateVector('1').matrix.times(-1))).toBe(true)
    })

    test("|+>.phase('π', 0) should be |->", () => {
      const simulator = new Simulator('+')
      expect(equate(simulator.phase('π', 0).state, new StateVector('-'))).toBe(true)
    })

    test("|->.phase('π', 0) should be |+>", () => {
      const simulator = new Simulator('-')
      expect(equate(simulator.phase('π', 0).state, new StateVector('+'))).toBe(true)
    })

    test("|i>.phase('π', 0) should be |-i>", () => {
      const simulator = new Simulator('i')
      expect(equate(simulator.phase('π', 0).state, new StateVector('(-i)'))).toBe(true)
    })

    test("|-i>.phase('π', 0) should be |i>", () => {
      const simulator = new Simulator('(-i)')
      expect(equate(simulator.phase('π', 0).state, new StateVector('i'))).toBe(true)
    })

    test("|++>.phase('π', 0) should be |+->", () => {
      const simulator = new Simulator('++')
      expect(equate(simulator.phase('π', 0).state, new StateVector('+-'))).toBe(true)
    })

    test("|++>.phase('π', 1) should be |-+>", () => {
      const simulator = new Simulator('++')
      expect(equate(simulator.phase('π', 1).state, new StateVector('-+'))).toBe(true)
    })

    test("|++>.phase('π', 0, 1) should be |-->", () => {
      const simulator = new Simulator('++')
      expect(equate(simulator.phase('π', 0, 1).state, new StateVector('--'))).toBe(true)
    })
  })

  describe('rnot', () => {
    test("|0>.rnot(0) should be |0>.h(0).phase('π/2', 0).h(0)", () => {
      expect(
        new Simulator('0')
          .rnot(0)
          .state.isApproximatelyEqualTo(new Simulator('0').h(0).phase('π/2', 0).h(0).state, 0.000001),
      ).toBe(true)
    })

    test("|1>.rnot(0) should be |1>.h(0).phase('π/2', 0).h(0)", () => {
      expect(
        new Simulator('1')
          .rnot(0)
          .state.isApproximatelyEqualTo(new Simulator('1').h(0).phase('π/2', 0).h(0).state, 0.000001),
      ).toBe(true)
    })

    test("|+>.rnot(0) should be |+>.h(0).phase('-π/2', 0).h(0)", () => {
      expect(
        new Simulator('+')
          .rnot(0)
          .state.isApproximatelyEqualTo(new Simulator('+').h(0).phase('-π/2', 0).h(0).state, 0.000001),
      ).toBe(true)
    })

    test("|->.rnot(0) should be |->.h(0).phase('π/2', 0).h(0)", () => {
      expect(
        new Simulator('-')
          .rnot(0)
          .state.isApproximatelyEqualTo(new Simulator('-').h(0).phase('π/2', 0).h(0).state, 0.000001),
      ).toBe(true)
    })

    test("|i>.rnot(0) should be |i>.h(0).phase('π/2', 0).h(0)", () => {
      expect(
        new Simulator('i')
          .rnot(0)
          .state.isApproximatelyEqualTo(new Simulator('i').h(0).phase('π/2', 0).h(0).state, 0.000001),
      ).toBe(true)
    })

    test("|-i>.rnot(0) should be |-i>.h(0).phase('π/2', 0).h(0)", () => {
      expect(
        new Simulator('(-i)')
          .rnot(0)
          .state.isApproximatelyEqualTo(new Simulator('(-i)').h(0).phase('π/2', 0).h(0).state, 0.000001),
      ).toBe(true)
    })

    test("|00>.rnot(0) should be |00>.h(0).phase('π/2', 0).h(0)", () => {
      expect(
        new Simulator('00')
          .rnot(0)
          .state.isApproximatelyEqualTo(new Simulator('00').h(0).phase('π/2', 0).h(0).state, 0.000001),
      ).toBe(true)
    })

    test("|00>.rnot(1) should be |00>.h(1).phase('π/2', 1).h(1)", () => {
      expect(
        new Simulator('00')
          .rnot(1)
          .state.isApproximatelyEqualTo(new Simulator('00').h(1).phase('π/2', 1).h(1).state, 0.000001),
      ).toBe(true)
    })

    test("|00>.rnot(0, 1) should be |00>.h(0, 1).phase('π/2', 0, 1).h(0, 1)", () => {
      expect(
        new Simulator('00')
          .rnot(0, 1)
          .state.isApproximatelyEqualTo(new Simulator('00').h(0, 1).phase('π/2', 0, 1).h(0, 1).state, 0.000001),
      ).toBe(true)
    })
  })

  describe('qft', () => {
    test('|0>.qft(1, 0) should be |+>', () => {
      const simulator = new Simulator('0')
      expect(equate(simulator.qft(1, 0).state, new StateVector('+'))).toBe(true)
    })

    test('|1>.qft(1, 0) should be |->', () => {
      const simulator = new Simulator('1')
      expect(equate(simulator.qft(1, 0).state, new StateVector('-'))).toBe(true)
    })

    test('|+>.qft(1, 0) should be |0>', () => {
      const simulator = new Simulator('+')
      expect(simulator.qft(1, 0).state.isApproximatelyEqualTo(new StateVector('0'), 0.000001)).toBe(true)
    })

    test('|->.qft(1, 0) should be |1>', () => {
      const simulator = new Simulator('-')
      expect(simulator.qft(1, 0).state.isApproximatelyEqualTo(new StateVector('1'), 0.000001)).toBe(true)
    })

    test('|i>.qft(1, 0) should be e^{iπ/4}|-i>', () => {
      const π = Math.PI
      const i = Complex.I
      const e = new Complex(Math.E, 0)

      const simulator = new Simulator('i')
      expect(
        equate(
          simulator.qft(1, 0).state.matrix,
          new StateVector('(-i)').matrix.times(e.raisedTo(i.times(π).dividedBy(4)._unsafeUnwrap())),
        ),
      ).toBe(true)
    })

    test('|-i>.qft(1, 0) should be e^{-iπ/4}|i>', () => {
      const π = Math.PI
      const i = Complex.I
      const e = new Complex(Math.E, 0)

      const simulator = new Simulator('(-i)')
      expect(
        equate(
          simulator.qft(1, 0).state.matrix,
          new StateVector('i').matrix.times(e.raisedTo(i.times(π).dividedBy(-4)._unsafeUnwrap())),
        ),
      ).toBe(true)
    })

    test('|00>.qft(1, 0) should be |0+>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.qft(1, 0).state, new StateVector('0+'))).toBe(true)
    })

    test('|00>.qft(1, 1) should be |+0>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.qft(1, 1).state, new StateVector('+0'))).toBe(true)
    })

    test('|00>.qft(0, 1) should be |++>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.qft(1, 0, 1).state, new StateVector('++'))).toBe(true)
    })
  })

  describe('qftDagger', () => {
    test('|0>.qftDagger(0) should be |+>', () => {
      const simulator = new Simulator('0')
      expect(equate(simulator.qftDagger(1, 0).state, new StateVector('+'))).toBeTruthy()
    })

    test('|1>.qftDagger(0) should be |->', () => {
      const simulator = new Simulator('1')
      expect(equate(simulator.qftDagger(1, 0).state, new StateVector('-'))).toBeTruthy()
    })

    test('|+>.qftDagger(0) should be |0>', () => {
      const simulator = new Simulator('+')
      expect(simulator.qftDagger(1, 0).state.isApproximatelyEqualTo(new StateVector('0'), 0.000001)).toBeTruthy()
    })

    test('|->.qftDagger(0) should be |1>', () => {
      const simulator = new Simulator('-')
      expect(simulator.qftDagger(1, 0).state.isApproximatelyEqualTo(new StateVector('1'), 0.000001)).toBeTruthy()
    })

    test('|i>.qftDagger(0) should be e^{iπ/4}|-i>', () => {
      const π = Math.PI
      const i = Complex.I
      const e = new Complex(Math.E, 0)

      const simulator = new Simulator('i')
      expect(
        equate(
          simulator.qftDagger(1, 0).state.matrix,
          new StateVector('(-i)').matrix.times(e.raisedTo(i.times(π).dividedBy(4)._unsafeUnwrap())),
        ),
      ).toBeTruthy()
    })

    test('|-i>.qftDagger(0) should be e^{-iπ/4}|i>', () => {
      const π = Math.PI
      const i = Complex.I
      const e = new Complex(Math.E, 0)

      const simulator = new Simulator('(-i)')
      expect(
        equate(
          simulator.qftDagger(1, 0).state.matrix,
          new StateVector('i').matrix.times(e.raisedTo(i.times(π).dividedBy(-4)._unsafeUnwrap())),
        ),
      ).toBeTruthy()
    })

    test('|00>.qftDagger(0) should be |0+>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.qftDagger(1, 0).state, new StateVector('0+'))).toBeTruthy()
    })

    test('|00>.qftDagger(1) should be |+0>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.qftDagger(1, 1).state, new StateVector('+0'))).toBeTruthy()
    })

    test('|00>.qftDagger(0, 1) should be |++>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.qftDagger(1, 0, 1).state, new StateVector('++'))).toBeTruthy()
    })
  })

  describe('swap', () => {
    test('|01>.swap(0, 1) should be |10>', () => {
      const simulator = new Simulator('01')
      expect(equate(simulator.swap(0, 1).state, new StateVector('10'))).toBeTruthy()
    })
  })

  describe('cnot', () => {
    test('|00>.cnot(0, 1) should be |00>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.cnot(0, 1).state, new StateVector('00'))).toBeTruthy()
    })

    test('|00>.cnot(1, 0) should be |00>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.cnot(1, 0).state, new StateVector('00'))).toBeTruthy()
    })

    test('|11>.cnot(0, 1) should be |01>', () => {
      const simulator = new Simulator('11')
      expect(equate(simulator.cnot(0, 1).state, new StateVector('01'))).toBeTruthy()
    })

    test('|11>.cnot(1, 0) should be |10>', () => {
      const simulator = new Simulator('11')
      expect(equate(simulator.cnot(1, 0).state, new StateVector('10'))).toBeTruthy()
    })

    test('|010>.cnot([0, 1], 2) should be |010>', () => {
      const simulator = new Simulator('010')
      expect(equate(simulator.cnot([0, 1], 2).state, new StateVector('010'))).toBeTruthy()
    })

    test('|011>.cnot([0, 1], 2) should be |111>', () => {
      const simulator = new Simulator('011')
      expect(equate(simulator.cnot([0, 1], 2).state, new StateVector('111'))).toBeTruthy()
    })
  })

  describe('cphase', () => {
    test("|00>.cphase(0, 'π', 1) should be |00>", () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.cphase(0, 'π', 1).state, new StateVector('00'))).toBeTruthy()
    })

    test("|11>.cphase(0, 'π', 1) should be -|11>", () => {
      const simulator = new Simulator('11')
      expect(equate(simulator.cphase(0, 'π', 1).state.matrix, new StateVector('11').matrix.times(-1))).toBeTruthy()
    })
  })
})
