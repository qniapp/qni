import {Complex, equate} from '@qni/common'
import {Matrix, Simulator, StateVector} from '../src'

describe('Simulator', () => {
  describe('runStep', () => {
    test('H|0>', () => {
      const simulator = new Simulator('0')

      simulator.runStep([{type: 'H', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{√½}, {√½}}')
    })

    test('X|0>', () => {
      const simulator = new Simulator('0')

      simulator.runStep([{type: 'X', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{0}, {1}}')
    })

    test('Y|0>', () => {
      const simulator = new Simulator('0')

      simulator.runStep([{type: 'Y', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{0}, {i}}')
    })

    test('Z|1>', () => {
      const simulator = new Simulator('1')

      simulator.runStep([{type: 'Z', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{0}, {-1}}')
    })

    test('√X|0>', () => {
      const simulator = new Simulator('0')

      simulator.runStep([{type: 'X^½', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{½+½i}, {½-½i}}')
    })

    test('S|1>', () => {
      const simulator = new Simulator('1')

      simulator.runStep([{type: 'S', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{0}, {i}}')
    })

    test('S†|1>', () => {
      const simulator = new Simulator('1')

      simulator.runStep([{type: 'S†', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{0}, {-i}}')
    })

    test('T|1>', () => {
      const simulator = new Simulator('1')

      simulator.runStep([{type: 'T', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{0}, {√½+√½i}}')
    })

    test('T†|1>', () => {
      const simulator = new Simulator('1')

      simulator.runStep([{type: 'T†', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{0}, {√½-√½i}}')
    })

    test('P(π)|1>', () => {
      const simulator = new Simulator('1')

      simulator.runStep([{type: 'P', angle: 'π', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{0}, {-1}}')
    })

    test('Rx(π)|0>', () => {
      const simulator = new Simulator('0')

      simulator.runStep([{type: 'Rx', angle: 'π', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{0}, {-i}}')
    })

    test('Ry(π)|0>', () => {
      const simulator = new Simulator('0')

      simulator.runStep([{type: 'Ry', angle: 'π', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{0}, {1}}')
    })

    test('Rz(π)|0>', () => {
      const simulator = new Simulator('0')

      simulator.runStep([{type: 'Rz', angle: 'π', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{-i}, {0}}')
    })

    test('write 0 to |1>', () => {
      const simulator = new Simulator('1')

      simulator.runStep([{type: '|0>', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{1}, {0}}')
    })

    test('write 1 to |0>', () => {
      const simulator = new Simulator('0')

      simulator.runStep([{type: '|1>', targets: [0]}])
      expect(simulator.state.toString()).toBe('{{0}, {1}}')
    })
  })

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
          new StateVector('(-i)').matrix.mult(e.pow(i.times(π).div(4)._unsafeUnwrap()))._unsafeUnwrap(),
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
          new StateVector('i').matrix.mult(e.pow(i.times(π).div(-4)._unsafeUnwrap()))._unsafeUnwrap(),
        ),
      ).toBe(true)
    })

    test('|0>.h(1) should throw an error', () => {
      const simulator = new Simulator('0')
      expect(() => simulator.h(1)).toThrow('target bit out of range')
    })

    test('|0>.h(-1) should throw an error', () => {
      const simulator = new Simulator('0')
      expect(() => simulator.h(-1)).toThrow('target bit out of range')
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

  // TODO: antiControls を指定したときの動作も確認
  // TODO: 1 ビットに ch を適用しようとしたときエラーが出ることを確認
  describe('ch', () => {
    test('|00>.ch (target = 1, control = 0) should be |00>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.ch([1], [0]).state, new StateVector('00'))).toBeTruthy()
    })

    test('|00>.ch (target = 0, control = 1) should be |00>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.ch([0], [1]).state, new StateVector('00'))).toBeTruthy()
    })

    test('|11>.ch (target = 1, control = 0) should be |01>', () => {
      const simulator = new Simulator('11')
      expect(equate(simulator.ch([1], [0]).state, new StateVector('-1'))).toBeTruthy()
    })

    test('|11>.ch (target = 0, control = 1) should be |10>', () => {
      const simulator = new Simulator('11')
      expect(equate(simulator.ch([0], [1]).state, new StateVector('1-'))).toBeTruthy()
    })

    test('|010>.ch (target = 2, control = 0, 1) should be |010>', () => {
      const simulator = new Simulator('010')
      expect(equate(simulator.ch([2], [0, 1]).state, new StateVector('010'))).toBeTruthy()
    })

    test('|011>.ch (target = 2, control = 0, 1) should be |111>', () => {
      const simulator = new Simulator('011')
      expect(equate(simulator.ch([2], [0, 1]).state, new StateVector('+11'))).toBeTruthy()
    })

    test('|00>.ch (target = 2) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.ch([2])).toThrow('target bit out of range')
    })

    test('|00>.ch (target = -1, control = 0) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.ch([-1])).toThrow('target bit out of range')
    })

    test('|00>.ch (target = 0, control = 2) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.ch([0], [2])).toThrow('control bit out of range')
    })

    test('|00>.ch (target = 0, control = -1) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.ch([0], [-1])).toThrow('control bit out of range')
    })

    test('|00>.ch (target = 0, antiControl = 2) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.ch([0], [], [2])).toThrow('anti control bit out of range')
    })

    test('|00>.ch (target = 0, antiControl = -1) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.ch([0], [], [-1])).toThrow('anti control bit out of range')
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
      expect(equate(simulator.x(0).state.matrix, new StateVector('-').matrix.mult(-1)._unsafeUnwrap())).toBe(true)
    })

    test('|i>.x(0) should be i|-i>', () => {
      const simulator = new Simulator('i')
      expect(
        equate(simulator.x(0).state.matrix, new StateVector('(-i)').matrix.mult(new Complex(0, 1))._unsafeUnwrap()),
      ).toBe(true)
    })

    test('|-i>.x(0) should be -i|i>', () => {
      const simulator = new Simulator('(-i)')
      expect(
        equate(simulator.x(0).state.matrix, new StateVector('i').matrix.mult(new Complex(0, -1))._unsafeUnwrap()),
      ).toBe(true)
    })

    test('|0>.x(1) should throw an error', () => {
      const simulator = new Simulator('0')
      expect(() => simulator.x(1)).toThrow('target bit out of range')
    })

    test('|0>.x(-1) should throw an error', () => {
      const simulator = new Simulator('0')
      expect(() => simulator.x(-1)).toThrow('target bit out of range')
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

  // TODO: antiControls を指定したときの動作も確認
  // TODO: 1 ビットに cnot を適用しようとしたときエラーが出ることを確認
  describe('cnot', () => {
    test('|00>.cnot (target = 1, control = 0) should be |00>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.cnot([1], [0]).state, new StateVector('00'))).toBeTruthy()
    })

    test('|00>.cnot (target = 0, control = 1) should be |00>', () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.cnot([0], [1]).state, new StateVector('00'))).toBeTruthy()
    })

    test('|11>.cnot (target = 1, control = 0) should be |01>', () => {
      const simulator = new Simulator('11')
      expect(equate(simulator.cnot([1], [0]).state, new StateVector('01'))).toBeTruthy()
    })

    test('|11>.cnot (target = 0, control = 1) should be |10>', () => {
      const simulator = new Simulator('11')
      expect(equate(simulator.cnot([0], [1]).state, new StateVector('10'))).toBeTruthy()
    })

    test('|010>.cnot (target = 2, control = 0, 1) should be |010>', () => {
      const simulator = new Simulator('010')
      expect(equate(simulator.cnot([2], [0, 1]).state, new StateVector('010'))).toBeTruthy()
    })

    test('|011>.cnot (target = 2, control = 0, 1) should be |111>', () => {
      const simulator = new Simulator('011')
      expect(equate(simulator.cnot([2], [0, 1]).state, new StateVector('111'))).toBeTruthy()
    })

    test('|00>.cnot (target = 2) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.cnot([2])).toThrow('target bit out of range')
    })

    test('|00>.cnot (target = -1, control = 0) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.cnot([-1])).toThrow('target bit out of range')
    })

    test('|00>.cnot (target = 0, control = 2) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.cnot([0], [2])).toThrow('control bit out of range')
    })

    test('|00>.cnot (target = 0, control = -1) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.cnot([0], [-1])).toThrow('control bit out of range')
    })

    test('|00>.cnot (target = 0, antiControl = 2) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.cnot([0], [], [2])).toThrow('anti control bit out of range')
    })

    test('|00>.cnot (target = 0, antiControl = -1) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.cnot([0], [], [-1])).toThrow('anti control bit out of range')
    })
  })

  describe('phase', () => {
    test("|0>.phase('π', 0) should be |0>", () => {
      const simulator = new Simulator('0')
      expect(equate(simulator.phase('π', 0).state, new StateVector('0'))).toBe(true)
    })

    test("|1>.phase('π', 0) should be -|1>", () => {
      const simulator = new Simulator('1')
      expect(equate(simulator.phase('π', 0).state.matrix, new StateVector('1').matrix.mult(-1)._unsafeUnwrap())).toBe(
        true,
      )
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
          new StateVector('(-i)').matrix.mult(e.pow(i.times(π).div(4)._unsafeUnwrap()))._unsafeUnwrap(),
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
          new StateVector('i').matrix.mult(e.pow(i.times(π).div(-4)._unsafeUnwrap()))._unsafeUnwrap(),
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
          new StateVector('(-i)').matrix.mult(e.pow(i.times(π).div(4)._unsafeUnwrap()))._unsafeUnwrap(),
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
          new StateVector('i').matrix.mult(e.pow(i.times(π).div(-4)._unsafeUnwrap()))._unsafeUnwrap(),
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

  describe('cphase', () => {
    test("|00>.cphase(0, 'π', 1) should be |00>", () => {
      const simulator = new Simulator('00')
      expect(equate(simulator.cphase('π', [1], [0]).state, new StateVector('00'))).toBeTruthy()
    })

    test("|11>.cphase(0, 'π', 1) should be -|11>", () => {
      const simulator = new Simulator('11')
      expect(
        equate(simulator.cphase('π', [1], [0]).state.matrix, new StateVector('11').matrix.mult(-1)._unsafeUnwrap()),
      ).toBeTruthy()
    })
  })

  describe('measure', () => {
    test('|0>.measure(0) should be |0>', () => {
      const simulator = new Simulator('0')
      simulator.measure(0)
      expect(equate(simulator.state, new StateVector('0'))).toBeTruthy()
      expect(equate(simulator.measuredBits, {0: 0})).toBeTruthy()
    })

    test('|1>.measure(0) should be |1>', () => {
      const simulator = new Simulator('1')
      simulator.measure(0)
      expect(equate(simulator.state, new StateVector('1'))).toBeTruthy()
      expect(equate(simulator.measuredBits, {0: 1})).toBeTruthy()
    })

    test('|+>.measure(0) should be |0> or |1>', () => {
      const simulator = new Simulator('+')
      simulator.measure(0)

      expect(
        simulator.state.isApproximatelyEqualTo(new StateVector('0'), 0.000001) ||
          simulator.state.isApproximatelyEqualTo(new StateVector('1'), 0.000001),
      ).toBeTruthy()
      expect(equate(Object.keys(simulator.measuredBits).length, 1)).toBeTruthy()
      expect(simulator.measuredBits[0] === 0 || simulator.measuredBits[0] === 1).toBeTruthy()
    })

    test('|->.measure(0) should be |0> or |1>', () => {
      const simulator = new Simulator('-')
      simulator.measure(0)

      expect(
        simulator.state.matrix.nearlyEq(Matrix.column_vector(1, 0)._unsafeUnwrap(), 0.000001) ||
          simulator.state.matrix.nearlyEq(Matrix.column_vector(0, -1)._unsafeUnwrap(), 0.000001),
      ).toBeTruthy()
    })

    test('|i>.measure(0) should be |0> or |1>', () => {
      const simulator = new Simulator('i')
      simulator.measure(0)

      expect(
        simulator.state.matrix.nearlyEq(Matrix.column_vector(1, 0)._unsafeUnwrap(), 0.000001) ||
          simulator.state.matrix.nearlyEq(Matrix.column_vector(0, Complex.I)._unsafeUnwrap(), 0.000001),
      ).toBeTruthy()
    })

    test('|-i>.measure(0) should be |0> or |1>', () => {
      const simulator = new Simulator('(-i)')
      simulator.measure(0)

      expect(
        simulator.state.matrix.nearlyEq(Matrix.column_vector(1, 0)._unsafeUnwrap(), 0.000001) ||
          simulator.state.matrix.nearlyEq(Matrix.column_vector(0, new Complex(0, -1))._unsafeUnwrap(), 0.000001),
      ).toBeTruthy()
    })

    test('|00>.measure(0) should be |00>', () => {
      const simulator = new Simulator('00')
      simulator.measure(0)

      expect(equate(simulator.state, new StateVector('00'))).toBeTruthy()
      expect(equate(simulator.measuredBits, {0: 0})).toBeTruthy()
    })

    test('|00>.measure(1) should be |00>', () => {
      const simulator = new Simulator('00')
      simulator.measure(1)

      expect(equate(simulator.state, new StateVector('00'))).toBeTruthy()
      expect(equate(simulator.measuredBits, {1: 0})).toBeTruthy()
    })

    test('|00>.measure(0, 1) should be |00>', () => {
      const simulator = new Simulator('00')
      simulator.measure(0, 1)

      expect(equate(simulator.state, new StateVector('00'))).toBeTruthy()
      expect(equate(simulator.measuredBits, {0: 0, 1: 0})).toBeTruthy()
    })

    test('|11>.measure(0) should be |11>', () => {
      const simulator = new Simulator('11')
      simulator.measure(0)

      expect(equate(simulator.state, new StateVector('11'))).toBeTruthy()
      expect(equate(simulator.measuredBits, {0: 1})).toBeTruthy()
    })

    test('|11>.measure(1) should be |11>', () => {
      const simulator = new Simulator('11')
      simulator.measure(1)

      expect(equate(simulator.state, new StateVector('11'))).toBeTruthy()
      expect(equate(simulator.measuredBits, {1: 1})).toBeTruthy()
    })

    test('|11>.measure(0, 1) should be |11>', () => {
      const simulator = new Simulator('11')
      simulator.measure(0, 1)

      expect(equate(simulator.state, new StateVector('11'))).toBeTruthy()
      expect(equate(simulator.measuredBits, {0: 1, 1: 1})).toBeTruthy()
    })
  })

  describe('cswap', () => {
    test('|011>.cswap(0, 1, 2) should be |101>', () => {
      const simulator = new Simulator('011')
      expect(equate(simulator.cswap(1, 2, [0]).state, new StateVector('101'))).toBeTruthy()
    })

    test('|011>.cswap(2, 0, 1) should be |011>', () => {
      const simulator = new Simulator('011')
      expect(equate(simulator.cswap(0, 1, [2]).state, new StateVector('011'))).toBeTruthy()
    })
  })
})
