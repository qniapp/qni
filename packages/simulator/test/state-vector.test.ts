import {Matrix, StateVector} from '../src/'
import {Complex, equate} from '@qni/common'

describe('StateVector', () => {
  let stateVector: StateVector

  describe('creation', () => {
    test('|0>', () => {
      stateVector = new StateVector('0')
      expect(equate(stateVector.toString(), '{{1}, {0}}')).toBeTruthy()
    })

    test('|1>', () => {
      stateVector = new StateVector('1')
      expect(equate(stateVector.toString(), '{{0}, {1}}')).toBeTruthy()
    })

    test('|+>', () => {
      stateVector = new StateVector('+')
      expect(equate(stateVector.toString(), '{{√½}, {√½}}')).toBeTruthy()
    })

    test('|->', () => {
      stateVector = new StateVector('-')
      expect(equate(stateVector.toString(), '{{√½}, {-√½}}')).toBeTruthy()
    })

    test('|i>', () => {
      stateVector = new StateVector('i')
      expect(equate(stateVector.toString(), '{{√½}, {√½i}}')).toBeTruthy()
    })

    test('|-i>', () => {
      stateVector = new StateVector('(-i)')
      expect(equate(stateVector.toString(), '{{√½}, {-√½i}}')).toBeTruthy()
    })

    test('|00>', () => {
      stateVector = new StateVector('00')
      expect(equate(stateVector.toString(), '{{1}, {0}, {0}, {0}}')).toBeTruthy()
    })

    test('|0(-i)>', () => {
      stateVector = new StateVector('0(-i)')
      expect(equate(stateVector.toString(), '{{√½}, {-√½i}, {0}, {0}}')).toBeTruthy()
    })

    test('create with an invalid bit string', () => {
      expect(() => new StateVector('')).toThrow()
      expect(() => new StateVector('?F*(*@RU#')).toThrow()
    })
  })

  describe('size', () => {
    test('one qubit', () => {
      stateVector = new StateVector('0')
      expect(equate(stateVector.size, 2)).toBeTruthy()
    })

    test('two qubits', () => {
      stateVector = new StateVector('00')
      expect(equate(stateVector.size, 4)).toBeTruthy()
    })
  })

  describe('nqubit', () => {
    test('one qubit', () => {
      stateVector = new StateVector('0')
      expect(equate(stateVector.nqubit, 1)).toBeTruthy()
    })

    test('two qubits', () => {
      stateVector = new StateVector('00')
      expect(equate(stateVector.nqubit, 2)).toBeTruthy()
    })
  })

  describe('bra', () => {
    test('<0|', () => {
      stateVector = new StateVector('0')
      expect(equate(stateVector.bra, Matrix.row(1, 0))).toBeTruthy()
    })

    test('<1|', () => {
      stateVector = new StateVector('1')
      expect(equate(stateVector.bra, Matrix.row(0, 1))).toBeTruthy()
    })

    test('<+|', () => {
      stateVector = new StateVector('+')
      expect(equate(stateVector.bra, Matrix.row(1, 1).times(Math.sqrt(0.5)))).toBeTruthy()
    })

    test('<-|', () => {
      stateVector = new StateVector('-')
      expect(equate(stateVector.bra, Matrix.row(1, -1).times(Math.sqrt(0.5)))).toBeTruthy()
    })

    test('<i|', () => {
      stateVector = new StateVector('i')
      expect(equate(stateVector.bra, Matrix.row(1, new Complex(0, -1)).times(Math.sqrt(0.5)))).toBeTruthy()
    })

    test('<-i|', () => {
      stateVector = new StateVector('(-i)')
      expect(equate(stateVector.bra, Matrix.row(1, new Complex(0, 1)).times(Math.sqrt(0.5)))).toBeTruthy()
    })

    test('<00|', () => {
      stateVector = new StateVector('00')
      expect(equate(stateVector.bra, Matrix.row(1, 0, 0, 0))).toBeTruthy()
    })

    test('<0(-i)|', () => {
      stateVector = new StateVector('0(-i)')
      expect(equate(stateVector.bra, Matrix.row(1, new Complex(0, 1), 0, 0).times(Math.sqrt(0.5)))).toBeTruthy()
    })
  })

  describe('ket', () => {
    test('|0>', () => {
      stateVector = new StateVector('0')
      expect(equate(stateVector.ket, Matrix.col(1, 0))).toBeTruthy()
    })

    test('|1>', () => {
      stateVector = new StateVector('1')
      expect(equate(stateVector.ket, Matrix.col(0, 1))).toBeTruthy()
    })

    test('|+>', () => {
      stateVector = new StateVector('+')
      expect(equate(stateVector.ket, Matrix.col(1, 1).times(Math.sqrt(0.5)))).toBeTruthy()
    })

    test('|->', () => {
      stateVector = new StateVector('-')
      expect(equate(stateVector.ket, Matrix.col(1, -1).times(Math.sqrt(0.5)))).toBeTruthy()
    })

    test('|i>', () => {
      stateVector = new StateVector('i')
      expect(equate(stateVector.ket, Matrix.col(1, new Complex(0, 1)).times(Math.sqrt(0.5)))).toBeTruthy()
    })

    test('|-i>', () => {
      stateVector = new StateVector('(-i)')
      expect(equate(stateVector.ket, Matrix.col(1, new Complex(0, -1)).times(Math.sqrt(0.5)))).toBeTruthy()
    })

    test('|00>', () => {
      stateVector = new StateVector('00')
      expect(equate(stateVector.ket, Matrix.col(1, 0, 0, 0))).toBeTruthy()
    })

    test('|0(-i)>', () => {
      stateVector = new StateVector('0(-i)')
      expect(equate(stateVector.ket, Matrix.col(1, new Complex(0, -1), 0, 0).times(Math.sqrt(0.5)))).toBeTruthy()
    })
  })

  describe('amplifier', () => {
    test('get amplifiers', () => {
      stateVector = new StateVector('0')
      expect(equate(stateVector.amplifier(0), 1)).toBeTruthy()
      expect(equate(stateVector.amplifier(1), 0)).toBeTruthy()
      expect(() => stateVector.amplifier(2)).toThrow()
    })
  })

  describe('setAmplifier', () => {
    beforeEach(() => {
      stateVector = new StateVector('0')
    })

    test('set first amplifier', () => {
      stateVector.setAmplifier(0, Complex.ZERO)
      expect(equate(stateVector.toString(), '{{0}, {0}}')).toBeTruthy()
    })

    test('set last amplifier', () => {
      stateVector.setAmplifier(1, Complex.ONE)
      expect(equate(stateVector.toString(), '{{1}, {1}}')).toBeTruthy()
    })

    test('amplifier out of range', () => {
      expect(() => stateVector.setAmplifier(2, Complex.ZERO)).toThrow()
    })
  })

  describe('blochVector', () => {
    test('|0> (bit 0)', () => {
      stateVector = new StateVector('0')
      expect(equate(stateVector.blochVector(0), [0, 0, 1])).toBeTruthy()
    })

    test('|0> (bit 1)', () => {
      stateVector = new StateVector('0')
      expect(() => stateVector.blochVector(1)).toThrow()
    })

    test('|0> (bit -1)', () => {
      stateVector = new StateVector('0')
      expect(() => stateVector.blochVector(-1)).toThrow()
    })

    test('|1> (bit 0)', () => {
      stateVector = new StateVector('1')
      expect(equate(stateVector.blochVector(0), [0, 0, -1])).toBeTruthy()
    })

    test('|+> (bit 0)', () => {
      stateVector = new StateVector('+')
      expect(stateVector.blochVector(0).map(each => Math.round(each))).toEqual([1, 0, 0])
    })

    test('|-> (bit 0)', () => {
      stateVector = new StateVector('-')
      expect(stateVector.blochVector(0).map(each => Math.round(each))).toEqual([-1, 0, 0])
    })

    test('|i> (bit 0)', () => {
      stateVector = new StateVector('i')
      expect(stateVector.blochVector(0).map(each => Math.round(each))).toEqual([0, 1, 0])
    })

    test('|-i> (bit 0)', () => {
      stateVector = new StateVector('(-i)')
      expect(stateVector.blochVector(0).map(each => Math.round(each))).toEqual([0, -1, 0])
    })

    test('|0(-i)> (bit 0)', () => {
      stateVector = new StateVector('0(-i)')
      expect(stateVector.blochVector(0).map(each => Math.round(each))).toEqual([0, -1, 0])
    })

    test('|0(-i)> (bit 1)', () => {
      stateVector = new StateVector('0(-i)')
      expect(stateVector.blochVector(1).map(each => Math.round(each))).toEqual([0, 0, 1])
    })
  })
})
