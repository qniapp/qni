import {Complex} from '@qni/common'
import {Matrix, Simulator, StateVector} from '../src'
import './matchers/to-be-same-state-vector'

describe('Simulator', () => {
  describe('runStep', () => {
    describe('H', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'H', targets: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('+'))
      })

      test('apply to a single qubit with control', () => {
        const simulator = new Simulator('01')

        simulator.runStep([{type: 'H', targets: [1], controls: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('+1'))
      })

      test('apply to a single qubit with control and anti-control', () => {
        const simulator = new Simulator('001')

        simulator.runStep([{type: 'H', targets: [2], controls: [0], antiControls: [1]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('+01'))
      })

      test('if condition is not satisfied', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'H', targets: [0], if: 'FLAG'}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })
    })

    describe('X', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'X', targets: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('1'))
      })

      test('apply to a single qubit with control', () => {
        const simulator = new Simulator('01')

        simulator.runStep([{type: 'X', targets: [1], controls: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('11'))
      })

      test('apply to a single qubit with control and anti-control', () => {
        const simulator = new Simulator('001')

        simulator.runStep([{type: 'X', targets: [2], controls: [0], antiControls: [1]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('101'))
      })

      test('if condition is not satisfied', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'X', targets: [0], if: 'FLAG'}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })
    })

    describe('Y', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'Y', targets: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('i|1>'))
      })

      test('apply to a single qubit with control', () => {
        const simulator = new Simulator('01')

        simulator.runStep([{type: 'Y', targets: [1], controls: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('i|11>'))
      })

      test('apply to a single qubit with control and anti-control', () => {
        const simulator = new Simulator('001')

        simulator.runStep([{type: 'Y', targets: [2], controls: [0], antiControls: [1]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('i|101>'))
      })

      test('if condition is not satisfied', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'Y', targets: [0], if: 'FLAG'}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })
    })

    describe('Z', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('1')

        simulator.runStep([{type: 'Z', targets: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-|1>'))
      })

      test('apply to a single qubit with control', () => {
        const simulator = new Simulator('11')

        simulator.runStep([{type: 'Z', targets: [1], controls: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-|11>'))
      })

      test('apply to a single qubit with control and anti-control', () => {
        const simulator = new Simulator('101')

        simulator.runStep([{type: 'Z', targets: [2], controls: [0], antiControls: [1]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-|101>'))
      })

      test('if condition is not satisfied', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'Z', targets: [0], if: 'FLAG'}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })
    })

    describe('√X', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'X^½', targets: [0]}])

        expect(simulator.state).toBeSameStateVector('{{½+½i}, {½-½i}}')
      })

      test('apply to a single qubit with control', () => {
        const simulator = new Simulator('01')

        simulator.runStep([{type: 'X^½', targets: [1], controls: [0]}])

        expect(simulator.state).toBeSameStateVector('{{0}, {½+½i}, {0}, {½-½i}}')
      })

      test('apply to a single qubit with control and anti-control', () => {
        const simulator = new Simulator('001')

        simulator.runStep([{type: 'X^½', targets: [2], controls: [0], antiControls: [1]}])

        expect(simulator.state).toBeSameStateVector('{{0}, {½+½i}, {0}, {0}, {0}, {½-½i}, {0}, {0}}')
      })

      test('if condition is not satisfied', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'X^½', targets: [0], if: 'FLAG'}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })
    })

    describe('S', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('1')

        simulator.runStep([{type: 'S', targets: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('i|1>'))
      })

      test('apply to a single qubit with control', () => {
        const simulator = new Simulator('11')

        simulator.runStep([{type: 'S', targets: [1], controls: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('i|11>'))
      })

      test('apply to a single qubit with control and anti-control', () => {
        const simulator = new Simulator('101')

        simulator.runStep([{type: 'S', targets: [2], controls: [0], antiControls: [1]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('i|101>'))
      })

      test('if condition is not satisfied', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'S', targets: [0], if: 'FLAG'}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })
    })

    describe('S†', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('1')

        simulator.runStep([{type: 'S†', targets: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-i|1>'))
      })

      test('apply to a single qubit with control', () => {
        const simulator = new Simulator('11')

        simulator.runStep([{type: 'S†', targets: [1], controls: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-i|11>'))
      })

      test('apply to a single qubit with control and anti-control', () => {
        const simulator = new Simulator('101')

        simulator.runStep([{type: 'S†', targets: [2], controls: [0], antiControls: [1]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-i|101>'))
      })

      test('if condition is not satisfied', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'S†', targets: [0], if: 'FLAG'}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })
    })

    describe('T', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('1')

        simulator.runStep([{type: 'T', targets: [0]}])

        expect(simulator.state).toBeSameStateVector('{{0}, {√½+√½i}}')
      })

      test('apply to a single qubit with control', () => {
        const simulator = new Simulator('11')

        simulator.runStep([{type: 'T', targets: [1], controls: [0]}])

        expect(simulator.state).toBeSameStateVector('{{0}, {0}, {0}, {√½+√½i}}')
      })

      test('apply to a single qubit with control and anti-control', () => {
        const simulator = new Simulator('101')

        simulator.runStep([{type: 'T', targets: [2], controls: [0], antiControls: [1]}])

        expect(simulator.state).toBeSameStateVector('{{0}, {0}, {0}, {0}, {0}, {√½+√½i}, {0}, {0}}')
      })

      test('if condition is not satisfied', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'T', targets: [0], if: 'FLAG'}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })
    })

    describe('T†', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('1')

        simulator.runStep([{type: 'T†', targets: [0]}])

        expect(simulator.state).toBeSameStateVector('{{0}, {√½-√½i}}')
      })

      test('apply to a single qubit with control', () => {
        const simulator = new Simulator('11')

        simulator.runStep([{type: 'T†', targets: [1], controls: [0]}])

        expect(simulator.state).toBeSameStateVector('{{0}, {0}, {0}, {√½-√½i}}')
      })

      test('apply to a single qubit with control and anti-control', () => {
        const simulator = new Simulator('101')

        simulator.runStep([{type: 'T†', targets: [2], controls: [0], antiControls: [1]}])

        expect(simulator.state).toBeSameStateVector('{{0}, {0}, {0}, {0}, {0}, {√½-√½i}, {0}, {0}}')
      })

      test('if condition is not satisfied', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'T†', targets: [0], if: 'FLAG'}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })
    })

    describe('P', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('1')

        simulator.runStep([{type: 'P', angle: 'π', targets: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-|1>'))
      })

      test('apply to a single qubit with control', () => {
        const simulator = new Simulator('11')

        simulator.runStep([{type: 'P', angle: 'π', targets: [1], controls: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-|11>'))
      })

      test('apply to a single qubit with control and anti-control', () => {
        const simulator = new Simulator('101')

        simulator.runStep([{type: 'P', angle: 'π', targets: [2], controls: [0], antiControls: [1]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-|101>'))
      })

      test('if condition is not satisfied', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'P', angle: 'π', targets: [0], if: 'FLAG'}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })

      test('angle is not set', () => {
        const simulator = new Simulator('0')

        expect(() => simulator.runStep([{type: 'P', targets: [0]}])).toThrow('angle is not set')
      })
    })

    describe('Rx', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'Rx', angle: 'π', targets: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-i|1>'))
      })

      test('apply to a single qubit with control', () => {
        const simulator = new Simulator('01')

        simulator.runStep([{type: 'Rx', angle: 'π', targets: [1], controls: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-i|11>'))
      })

      test('apply to a single qubit with control and anti-control', () => {
        const simulator = new Simulator('001')

        simulator.runStep([{type: 'Rx', angle: 'π', targets: [2], controls: [0], antiControls: [1]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-i|101>'))
      })

      test('if condition is not satisfied', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'Rx', angle: 'π', targets: [0], if: 'FLAG'}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })

      test('angle is not set', () => {
        const simulator = new Simulator('0')

        expect(() => simulator.runStep([{type: 'Rx', targets: [0]}])).toThrow('angle is not set')
      })
    })

    describe('Ry', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'Ry', angle: 'π', targets: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('1'))
      })

      test('apply to a single qubit with control', () => {
        const simulator = new Simulator('01')

        simulator.runStep([{type: 'Ry', angle: 'π', targets: [1], controls: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('11'))
      })

      test('apply to a single qubit with control and anti-control', () => {
        const simulator = new Simulator('001')

        simulator.runStep([{type: 'Ry', angle: 'π', targets: [2], controls: [0], antiControls: [1]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('101'))
      })

      test('if condition is not satisfied', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'Ry', angle: 'π', targets: [0], if: 'FLAG'}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })

      test('angle is not set', () => {
        const simulator = new Simulator('0')

        expect(() => simulator.runStep([{type: 'Ry', targets: [0]}])).toThrow('angle is not set')
      })
    })

    describe('Rz', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'Rz', angle: 'π', targets: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-i|0>'))
      })

      test('apply to a single qubit with control', () => {
        const simulator = new Simulator('01')

        simulator.runStep([{type: 'Rz', angle: 'π', targets: [1], controls: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-i|01>'))
      })

      test('apply to a single qubit with control and anti-control', () => {
        const simulator = new Simulator('001')

        simulator.runStep([{type: 'Rz', angle: 'π', targets: [2], controls: [0], antiControls: [1]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-i|001>'))
      })

      test('if condition is not satisfied', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'Rz', angle: 'π', targets: [0], if: 'FLAG'}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })

      test('angle is not set', () => {
        const simulator = new Simulator('0')

        expect(() => simulator.runStep([{type: 'Rz', targets: [0]}])).toThrow('angle is not set')
      })
    })

    describe('Swap', () => {
      test('apply to two qubits', () => {
        const simulator = new Simulator('01')

        simulator.runStep([{type: 'Swap', targets: [0, 1]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('10'))
      })

      test('apply to two qubits with control', () => {
        const simulator = new Simulator('011')

        simulator.runStep([{type: 'Swap', targets: [1, 2], controls: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('101'))
      })

      test('apply to two qubits with control and anti-control', () => {
        const simulator = new Simulator('0101')

        simulator.runStep([{type: 'Swap', targets: [2, 3], controls: [0], antiControls: [1]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('1001'))
      })
    })

    describe('• (CZ)', () => {
      test('apply to two qubits', () => {
        const simulator = new Simulator('11')

        simulator.runStep([{type: '•', targets: [0, 1]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-|11>'))
      })

      test('apply to three qubits', () => {
        const simulator = new Simulator('111')

        simulator.runStep([{type: '•', targets: [0, 1, 2]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('-|111>'))
      })
    })

    describe('Bloch', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'Bloch', targets: [0]}])

        expect(simulator.blochVectors[0]).toEqual({x: 0, y: 0, z: 1})
      })
    })

    describe('|0> and |1>', () => {
      test('write 0 to |1>', () => {
        const simulator = new Simulator('1')

        simulator.runStep([{type: '|0>', targets: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })

      test('write 1 to |0>', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: '|1>', targets: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('1'))
      })
    })

    describe('Measure', () => {
      test('Measure |0>', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'Measure', targets: [0]}])

        expect(simulator.measuredBits[0]).toBe(0)
      })

      test('Measure |1>', () => {
        const simulator = new Simulator('1')

        simulator.runStep([{type: 'Measure', targets: [0]}])

        expect(simulator.measuredBits[0]).toBe(1)
      })

      test('Measure |1> and set flag', () => {
        const simulator = new Simulator('1')

        simulator.runStep([{type: 'Measure', targets: [0], flag: 'FLAG'}])

        expect(simulator.flags.FLAG).toBeTruthy()
      })
    })

    describe('… (spacer)', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: '…', targets: [0]}])

        expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      })
    })

    describe('QFT', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'QFT', targets: [0], span: 1}])

        expect(simulator.state).toBeSameStateVector(new StateVector('+'))
      })
    })

    describe('QFT†', () => {
      test('apply to a single qubit', () => {
        const simulator = new Simulator('0')

        simulator.runStep([{type: 'QFT†', targets: [0], span: 1}])

        expect(simulator.state).toBeSameStateVector(new StateVector('+'))
      })
    })
  })

  describe('write', () => {
    test('|0>.write(0, 0) should be |0>', () => {
      const simulator = new Simulator('0')
      expect(simulator.write(0, 0).state).toBeSameStateVector(new StateVector('0'))
    })

    test('|0>.write(1, 0) should be |1>', () => {
      const simulator = new Simulator('0')
      expect(simulator.write(1, 0).state).toBeSameStateVector(new StateVector('1'))
    })

    test('|1>.write(0, 0) should be |0>', () => {
      const simulator = new Simulator('1')
      expect(simulator.write(0, 0).state).toBeSameStateVector(new StateVector('0'))
    })

    test('|1>.write(1, 0) should be |1>', () => {
      const simulator = new Simulator('1')
      expect(simulator.write(1, 0).state).toBeSameStateVector(new StateVector('1'))
    })

    test('|00>.write(0, 0, 1) should be |00>', () => {
      const simulator = new Simulator('00')
      expect(simulator.write(0, 0, 1).state).toBeSameStateVector(new StateVector('00'))
    })

    test('|00>.write(1, 0) should be |01>', () => {
      const simulator = new Simulator('00')
      expect(simulator.write(1, 0).state).toBeSameStateVector(new StateVector('01'))
    })

    test('|00>.write(1, 0, 1) should be |11>', () => {
      const simulator = new Simulator('00')
      expect(simulator.write(1, 0, 1).state).toBeSameStateVector(new StateVector('11'))
    })

    test('|11>.write(1, 0, 1) should be |11>', () => {
      const simulator = new Simulator('11')
      expect(simulator.write(1, 0, 1).state).toBeSameStateVector(new StateVector('11'))
    })

    test('|11>.write(0, 0) should be |10>', () => {
      const simulator = new Simulator('11')
      expect(simulator.write(0, 0).state).toBeSameStateVector(new StateVector('10'))
    })

    test('|11>.write(0, 0, 1) should be |00>', () => {
      const simulator = new Simulator('11')
      expect(simulator.write(0, 0, 1).state).toBeSameStateVector(new StateVector('00'))
    })
  })

  describe('h', () => {
    test('|0>.h(0) should be |+>', () => {
      const simulator = new Simulator('0')
      expect(simulator.h(0).state).toBeSameStateVector(new StateVector('+'))
    })

    test('|1>.h(0) should be |->', () => {
      const simulator = new Simulator('1')
      expect(simulator.h(0).state).toBeSameStateVector(new StateVector('-'))
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
      expect(simulator.h(0).state).toBeSameStateVector(
        new StateVector('(-i)').matrix.mult(e.pow(i.times(π).div(4)._unsafeUnwrap()))._unsafeUnwrap(),
      )
    })

    test('|-i>.h(0) should be e^{-iπ/4}|i>', () => {
      const π = Math.PI
      const i = Complex.I
      const e = new Complex(Math.E, 0)

      const simulator = new Simulator('(-i)')
      expect(simulator.h(0).state.matrix).toBeSameStateVector(
        new StateVector('i').matrix.mult(e.pow(i.times(π).div(-4)._unsafeUnwrap()))._unsafeUnwrap(),
      )
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
      expect(simulator.h(0).state).toBeSameStateVector(new StateVector('0+'))
    })

    test('|00>.h(1) should be |+0>', () => {
      const simulator = new Simulator('00')
      expect(simulator.h(1).state).toBeSameStateVector(new StateVector('+0'))
    })

    test('|00>.h(0, 1) should be |++>', () => {
      const simulator = new Simulator('00')
      expect(simulator.h(0, 1).state).toBeSameStateVector(new StateVector('++'))
    })
  })

  // TODO: antiControls を指定したときの動作も確認
  // TODO: 1 ビットに ch を適用しようとしたときエラーが出ることを確認
  describe('ch', () => {
    test('|00>.ch (target = 1, control = 0) should be |00>', () => {
      const simulator = new Simulator('00')
      expect(simulator.h(1, {controls: [0]}).state).toBeSameStateVector(new StateVector('00'))
    })

    test('|00>.ch (target = 0, control = 1) should be |00>', () => {
      const simulator = new Simulator('00')
      expect(simulator.h(0, {controls: [1]}).state).toBeSameStateVector(new StateVector('00'))
    })

    test('|11>.ch (target = 1, control = 0) should be |01>', () => {
      const simulator = new Simulator('11')
      expect(simulator.h(1, {controls: [0]}).state).toBeSameStateVector(new StateVector('-1'))
    })

    test('|11>.ch (target = 0, control = 1) should be |10>', () => {
      const simulator = new Simulator('11')
      expect(simulator.h(0, {controls: [1]}).state).toBeSameStateVector(new StateVector('1-'))
    })

    test('|010>.ch (target = 2, control = 0, 1) should be |010>', () => {
      const simulator = new Simulator('010')
      expect(simulator.h(2, {controls: [0, 1]}).state).toBeSameStateVector(new StateVector('010'))
    })

    test('|011>.ch (target = 2, control = 0, 1) should be |111>', () => {
      const simulator = new Simulator('011')
      expect(simulator.h(2, {controls: [0, 1]}).state).toBeSameStateVector(new StateVector('+11'))
    })

    test('|00>.ch (target = 2) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.h(2)).toThrow('target bit out of range')
    })

    test('|00>.ch (target = -1, control = 0) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.h(-1)).toThrow('target bit out of range')
    })

    test('|00>.ch (target = 0, control = 2) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.h(0, {controls: [2]})).toThrow('control bit out of range')
    })

    test('|00>.ch (target = 0, control = -1) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.h(0, {controls: [-1]})).toThrow('control bit out of range')
    })

    test('|00>.ch (target = 0, antiControl = 2) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.h(0, {antiControls: [2]})).toThrow('anti control bit out of range')
    })

    test('|00>.ch (target = 0, antiControl = -1) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.h(0, {antiControls: [-1]})).toThrow('anti control bit out of range')
    })
  })

  describe('x', () => {
    test('|0>.x(0) should be |1>', () => {
      const simulator = new Simulator('0')
      expect(simulator.x(0).state).toBeSameStateVector(new StateVector('1'))
    })

    test('|1>.x(0) should be |0>', () => {
      const simulator = new Simulator('1')
      expect(simulator.x(0).state).toBeSameStateVector(new StateVector('0'))
    })

    test('|+>.x(0) should be |+>', () => {
      const simulator = new Simulator('+')
      expect(simulator.x(0).state).toBeSameStateVector(new StateVector('+'))
    })

    test('|->.x(0) should be -|->', () => {
      const simulator = new Simulator('-')
      expect(simulator.x(0).state.matrix).toBeSameStateVector(new StateVector('-').matrix.mult(-1)._unsafeUnwrap())
    })

    test('|i>.x(0) should be i|-i>', () => {
      const simulator = new Simulator('i')
      expect(simulator.x(0).state.matrix).toBeSameStateVector(
        new StateVector('(-i)').matrix.mult(new Complex(0, 1))._unsafeUnwrap(),
      )
    })

    test('|-i>.x(0) should be -i|i>', () => {
      const simulator = new Simulator('(-i)')
      expect(simulator.x(0).state.matrix).toBeSameStateVector(
        new StateVector('i').matrix.mult(new Complex(0, -1))._unsafeUnwrap(),
      )
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
      expect(simulator.x(0).state).toBeSameStateVector(new StateVector('01'))
    })

    test('|00>.x(1) should be |10>', () => {
      const simulator = new Simulator('00')
      expect(simulator.x(1).state).toBeSameStateVector(new StateVector('10'))
    })

    test('|00>.x(0, 1) should be |11>', () => {
      const simulator = new Simulator('00')
      expect(simulator.x(0, 1).state).toBeSameStateVector(new StateVector('11'))
    })
  })

  // TODO: antiControls を指定したときの動作も確認
  // TODO: 1 ビットに cnot を適用しようとしたときエラーが出ることを確認
  describe('cnot', () => {
    test('|00>.cnot (target = 1, control = 0) should be |00>', () => {
      const simulator = new Simulator('00')
      expect(simulator.x(1, {controls: [0]}).state).toBeSameStateVector(new StateVector('00'))
    })

    test('|00>.cnot (target = 0, control = 1) should be |00>', () => {
      const simulator = new Simulator('00')
      expect(simulator.x(0, {controls: [1]}).state).toBeSameStateVector(new StateVector('00'))
    })

    test('|11>.cnot (target = 1, control = 0) should be |01>', () => {
      const simulator = new Simulator('11')
      expect(simulator.x(1, {controls: [0]}).state).toBeSameStateVector(new StateVector('01'))
    })

    test('|11>.cnot (target = 0, control = 1) should be |10>', () => {
      const simulator = new Simulator('11')
      expect(simulator.x(0, {controls: [1]}).state).toBeSameStateVector(new StateVector('10'))
    })

    test('|010>.cnot (target = 2, control = 0, 1) should be |010>', () => {
      const simulator = new Simulator('010')
      expect(simulator.x(2, {controls: [0, 1]}).state).toBeSameStateVector(new StateVector('010'))
    })

    test('|011>.cnot (target = 2, control = 0, 1) should be |111>', () => {
      const simulator = new Simulator('011')
      expect(simulator.x(2, {controls: [0, 1]}).state).toBeSameStateVector(new StateVector('111'))
    })

    test('|00>.cnot (target = 2) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.x(2)).toThrow('target bit out of range')
    })

    test('|00>.cnot (target = -1, control = 0) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.x(-1)).toThrow('target bit out of range')
    })

    test('|00>.cnot (target = 0, control = 2) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.x(0, {controls: [2]})).toThrow('control bit out of range')
    })

    test('|00>.cnot (target = 0, control = -1) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.x(0, {controls: [-1]})).toThrow('control bit out of range')
    })

    test('|00>.cnot (target = 0, antiControl = 2) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.x(0, {antiControls: [2]})).toThrow('anti control bit out of range')
    })

    test('|00>.cnot (target = 0, antiControl = -1) should throw an error', () => {
      const simulator = new Simulator('00')
      expect(() => simulator.x(0, {antiControls: [-1]})).toThrow('anti control bit out of range')
    })
  })

  describe('phase', () => {
    test("|0>.phase('π', 0) should be |0>", () => {
      const simulator = new Simulator('0')
      expect(simulator.phase('π', 0).state).toBeSameStateVector(new StateVector('0'))
    })

    test("|1>.phase('π', 0) should be -|1>", () => {
      const simulator = new Simulator('1')
      expect(simulator.phase('π', 0).state.matrix).toBeSameStateVector(
        new StateVector('1').matrix.mult(-1)._unsafeUnwrap(),
      )
    })

    test("|+>.phase('π', 0) should be |->", () => {
      const simulator = new Simulator('+')
      expect(simulator.phase('π', 0).state).toBeSameStateVector(new StateVector('-'))
    })

    test("|->.phase('π', 0) should be |+>", () => {
      const simulator = new Simulator('-')
      expect(simulator.phase('π', 0).state).toBeSameStateVector(new StateVector('+'))
    })

    test("|i>.phase('π', 0) should be |-i>", () => {
      const simulator = new Simulator('i')
      expect(simulator.phase('π', 0).state).toBeSameStateVector(new StateVector('(-i)'))
    })

    test("|-i>.phase('π', 0) should be |i>", () => {
      const simulator = new Simulator('(-i)')
      expect(simulator.phase('π', 0).state).toBeSameStateVector(new StateVector('i'))
    })

    test("|++>.phase('π', 0) should be |+->", () => {
      const simulator = new Simulator('++')
      expect(simulator.phase('π', 0).state).toBeSameStateVector(new StateVector('+-'))
    })

    test("|++>.phase('π', 1) should be |-+>", () => {
      const simulator = new Simulator('++')
      expect(simulator.phase('π', 1).state).toBeSameStateVector(new StateVector('-+'))
    })

    test("|++>.phase('π', 0, 1) should be |-->", () => {
      const simulator = new Simulator('++')
      expect(simulator.phase('π', 0, 1).state).toBeSameStateVector(new StateVector('--'))
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
      expect(simulator.qft(1, 0).state).toBeSameStateVector(new StateVector('+'))
    })

    test('|1>.qft(1, 0) should be |->', () => {
      const simulator = new Simulator('1')
      expect(simulator.qft(1, 0).state).toBeSameStateVector(new StateVector('-'))
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
      expect(simulator.qft(1, 0).state.matrix).toBeSameStateVector(
        new StateVector('(-i)').matrix.mult(e.pow(i.times(π).div(4)._unsafeUnwrap()))._unsafeUnwrap(),
      )
    })

    test('|-i>.qft(1, 0) should be e^{-iπ/4}|i>', () => {
      const π = Math.PI
      const i = Complex.I
      const e = new Complex(Math.E, 0)

      const simulator = new Simulator('(-i)')
      expect(simulator.qft(1, 0).state.matrix).toBeSameStateVector(
        new StateVector('i').matrix.mult(e.pow(i.times(π).div(-4)._unsafeUnwrap()))._unsafeUnwrap(),
      )
    })

    test('|00>.qft(1, 0) should be |0+>', () => {
      const simulator = new Simulator('00')
      expect(simulator.qft(1, 0).state).toBeSameStateVector(new StateVector('0+'))
    })

    test('|00>.qft(1, 1) should be |+0>', () => {
      const simulator = new Simulator('00')
      expect(simulator.qft(1, 1).state).toBeSameStateVector(new StateVector('+0'))
    })

    test('|00>.qft(0, 1) should be |++>', () => {
      const simulator = new Simulator('00')
      expect(simulator.qft(1, 0, 1).state).toBeSameStateVector(new StateVector('++'))
    })

    test('|00>.qft(2, 0)', () => {
      const simulator = new Simulator('00')
      expect(simulator.qft(2, 0).state).toBeSameStateVector(new StateVector('++'))
    })
  })

  describe('qftDagger', () => {
    test('|0>.qftDagger(0) should be |+>', () => {
      const simulator = new Simulator('0')
      expect(simulator.qftDagger(1, 0).state).toBeSameStateVector(new StateVector('+'))
    })

    test('|1>.qftDagger(0) should be |->', () => {
      const simulator = new Simulator('1')
      expect(simulator.qftDagger(1, 0).state).toBeSameStateVector(new StateVector('-'))
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
      expect(simulator.qftDagger(1, 0).state.matrix).toBeSameStateVector(
        new StateVector('(-i)').matrix.mult(e.pow(i.times(π).div(4)._unsafeUnwrap()))._unsafeUnwrap(),
      )
    })

    test('|-i>.qftDagger(0) should be e^{-iπ/4}|i>', () => {
      const π = Math.PI
      const i = Complex.I
      const e = new Complex(Math.E, 0)

      const simulator = new Simulator('(-i)')
      expect(simulator.qftDagger(1, 0).state.matrix).toBeSameStateVector(
        new StateVector('i').matrix.mult(e.pow(i.times(π).div(-4)._unsafeUnwrap()))._unsafeUnwrap(),
      )
    })

    test('|00>.qftDagger(0) should be |0+>', () => {
      const simulator = new Simulator('00')
      expect(simulator.qftDagger(1, 0).state).toBeSameStateVector(new StateVector('0+'))
    })

    test('|00>.qftDagger(1) should be |+0>', () => {
      const simulator = new Simulator('00')
      expect(simulator.qftDagger(1, 1).state).toBeSameStateVector(new StateVector('+0'))
    })

    test('|00>.qftDagger(0, 1) should be |++>', () => {
      const simulator = new Simulator('00')
      expect(simulator.qftDagger(1, 0, 1).state).toBeSameStateVector(new StateVector('++'))
    })

    test('|00>.qftDagger(2, 0)', () => {
      const simulator = new Simulator('00')
      expect(simulator.qftDagger(2, 0).state).toBeSameStateVector(new StateVector('++'))
    })
  })

  describe('swap', () => {
    test('|01>.swap(0, 1) should be |10>', () => {
      const simulator = new Simulator('01')
      expect(simulator.swap(0, 1).state).toBeSameStateVector(new StateVector('10'))
    })
  })

  describe('cphase', () => {
    test("|00>.cphase(0, 'π', 1) should be |00>", () => {
      const simulator = new Simulator('00')
      expect(simulator.phase('π', 1, {controls: [0]}).state).toBeSameStateVector(new StateVector('00'))
    })

    test("|11>.cphase(0, 'π', 1) should be -|11>", () => {
      const simulator = new Simulator('11')
      expect(simulator.phase('π', 1, {controls: [0]}).state.matrix).toBeSameStateVector(
        new StateVector('11').matrix.mult(-1)._unsafeUnwrap(),
      )
    })
  })

  describe('measure', () => {
    test('|0>.measure(0) should be |0>', () => {
      const simulator = new Simulator('0')
      simulator.measure(0)
      expect(simulator.state).toBeSameStateVector(new StateVector('0'))
      expect(simulator.measuredBits).toEqual({0: 0})
    })

    test('|1>.measure(0) should be |1>', () => {
      const simulator = new Simulator('1')
      simulator.measure(0)
      expect(simulator.state).toBeSameStateVector(new StateVector('1'))
      expect(simulator.measuredBits).toEqual({0: 1})
    })

    test('|+>.measure(0) should be |0> or |1>', () => {
      const simulator = new Simulator('+')
      simulator.measure(0)

      expect(
        simulator.state.isApproximatelyEqualTo(new StateVector('0'), 0.000001) ||
          simulator.state.isApproximatelyEqualTo(new StateVector('1'), 0.000001),
      ).toBeTruthy()
      expect(Object.keys(simulator.measuredBits).length).toBe(1)
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

      expect(simulator.state).toBeSameStateVector(new StateVector('00'))
      expect(simulator.measuredBits).toEqual({0: 0})
    })

    test('|00>.measure(1) should be |00>', () => {
      const simulator = new Simulator('00')
      simulator.measure(1)

      expect(simulator.state).toBeSameStateVector(new StateVector('00'))
      expect(simulator.measuredBits).toEqual({1: 0})
    })

    test('|00>.measure(0, 1) should be |00>', () => {
      const simulator = new Simulator('00')
      simulator.measure(0, 1)

      expect(simulator.state).toBeSameStateVector(new StateVector('00'))
      expect(simulator.measuredBits).toEqual({0: 0, 1: 0})
    })

    test('|11>.measure(0) should be |11>', () => {
      const simulator = new Simulator('11')
      simulator.measure(0)

      expect(simulator.state).toBeSameStateVector(new StateVector('11'))
      expect(simulator.measuredBits).toEqual({0: 1})
    })

    test('|11>.measure(1) should be |11>', () => {
      const simulator = new Simulator('11')
      simulator.measure(1)

      expect(simulator.state).toBeSameStateVector(new StateVector('11'))
      expect(simulator.measuredBits).toEqual({1: 1})
    })

    test('|11>.measure(0, 1) should be |11>', () => {
      const simulator = new Simulator('11')
      simulator.measure(0, 1)

      expect(simulator.state).toBeSameStateVector(new StateVector('11'))
      expect(simulator.measuredBits).toEqual({0: 1, 1: 1})
    })
  })

  describe('swap', () => {
    test('|011>.swap(0, 1, 2) should be |101>', () => {
      const simulator = new Simulator('011')
      expect(simulator.swap(1, 2, {controls: [0]}).state).toBeSameStateVector(new StateVector('101'))
    })

    test('|011>.swap(2, 0, 1) should be |011>', () => {
      const simulator = new Simulator('011')
      expect(simulator.swap(0, 1, {controls: [2]}).state).toBeSameStateVector(new StateVector('011'))
    })
  })

  describe('blochDisplay', () => {
    test('|0>.blochDisplay(0)', () => {
      const simulator = new Simulator('0')

      simulator.blochDisplay(0)

      expect(simulator.blochVectors[0]).toEqual({x: 0, y: 0, z: 1})
    })

    test('|1>.blochDisplay(0)', () => {
      const simulator = new Simulator('1')

      simulator.blochDisplay(0)

      expect(simulator.blochVectors[0]).toEqual({x: 0, y: 0, z: -1})
    })

    test('|+>.blochDisplay(0)', () => {
      const simulator = new Simulator('+')

      simulator.blochDisplay(0)

      const blochVector = simulator.blochVectors[0]
      expect(blochVector.x).toBeCloseTo(1)
      expect(blochVector.y).toBe(0)
      expect(blochVector.z).toBe(0)
    })

    test('|->.blochDisplay(0)', () => {
      const simulator = new Simulator('-')

      simulator.blochDisplay(0)

      const blochVector = simulator.blochVectors[0]
      expect(blochVector.x).toBeCloseTo(-1)
      expect(blochVector.y).toBe(0)
      expect(blochVector.z).toBe(0)
    })

    test('|i>.blochDisplay(0)', () => {
      const simulator = new Simulator('i')

      simulator.blochDisplay(0)

      const blochVector = simulator.blochVectors[0]
      expect(blochVector.x).toBe(0)
      expect(blochVector.y).toBeCloseTo(1)
      expect(blochVector.z).toBe(0)
    })

    test('|-i>.blochDisplay(0)', () => {
      const simulator = new Simulator('(-i)')

      simulator.blochDisplay(0)

      const blochVector = simulator.blochVectors[0]
      expect(blochVector.x).toBe(0)
      expect(blochVector.y).toBeCloseTo(-1)
      expect(blochVector.z).toBe(0)
    })
  })
})
