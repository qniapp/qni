import {Matrix, StateVector} from '../src/'
import {Complex, equate} from '@qni/common'
import {H} from '../src/gate-matrices'
// eslint-disable-next-line import/no-nodejs-modules
import {performance} from 'perf_hooks'

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
      expect(equate(stateVector.bra, Matrix.row(1, 1).mult(Math.sqrt(0.5))._unsafeUnwrap())).toBeTruthy()
    })

    test('<-|', () => {
      stateVector = new StateVector('-')
      expect(equate(stateVector.bra, Matrix.row(1, -1).mult(Math.sqrt(0.5))._unsafeUnwrap())).toBeTruthy()
    })

    test('<i|', () => {
      stateVector = new StateVector('i')
      expect(
        equate(stateVector.bra, Matrix.row(1, new Complex(0, -1)).mult(Math.sqrt(0.5))._unsafeUnwrap()),
      ).toBeTruthy()
    })

    test('<-i|', () => {
      stateVector = new StateVector('(-i)')
      expect(
        equate(stateVector.bra, Matrix.row(1, new Complex(0, 1)).mult(Math.sqrt(0.5))._unsafeUnwrap()),
      ).toBeTruthy()
    })

    test('<00|', () => {
      stateVector = new StateVector('00')
      expect(equate(stateVector.bra, Matrix.row(1, 0, 0, 0))).toBeTruthy()
    })

    test('<0(-i)|', () => {
      stateVector = new StateVector('0(-i)')
      expect(
        equate(stateVector.bra, Matrix.row(1, new Complex(0, 1), 0, 0).mult(Math.sqrt(0.5))._unsafeUnwrap()),
      ).toBeTruthy()
    })
  })

  describe('ket', () => {
    test('|0>', () => {
      stateVector = new StateVector('0')
      expect(equate(stateVector.ket, Matrix.column_vector(1, 0)._unsafeUnwrap())).toBeTruthy()
    })

    test('|1>', () => {
      stateVector = new StateVector('1')
      expect(equate(stateVector.ket, Matrix.column_vector(0, 1)._unsafeUnwrap())).toBeTruthy()
    })

    test('|+>', () => {
      stateVector = new StateVector('+')
      expect(
        equate(stateVector.ket, Matrix.column_vector(1, 1)._unsafeUnwrap().mult(Math.sqrt(0.5))._unsafeUnwrap()),
      ).toBeTruthy()
    })

    test('|->', () => {
      stateVector = new StateVector('-')
      expect(
        equate(stateVector.ket, Matrix.column_vector(1, -1)._unsafeUnwrap().mult(Math.sqrt(0.5))._unsafeUnwrap()),
      ).toBeTruthy()
    })

    test('|i>', () => {
      stateVector = new StateVector('i')
      expect(
        equate(
          stateVector.ket,
          Matrix.column_vector(1, new Complex(0, 1))._unsafeUnwrap().mult(Math.sqrt(0.5))._unsafeUnwrap(),
        ),
      ).toBeTruthy()
    })

    test('|-i>', () => {
      stateVector = new StateVector('(-i)')
      expect(
        equate(
          stateVector.ket,
          Matrix.column_vector(1, new Complex(0, -1))._unsafeUnwrap().mult(Math.sqrt(0.5))._unsafeUnwrap(),
        ),
      ).toBeTruthy()
    })

    test('|00>', () => {
      stateVector = new StateVector('00')
      expect(equate(stateVector.ket, Matrix.column_vector(1, 0, 0, 0)._unsafeUnwrap())).toBeTruthy()
    })

    test('|0(-i)>', () => {
      stateVector = new StateVector('0(-i)')
      expect(
        equate(
          stateVector.ket,
          Matrix.column_vector(1, new Complex(0, -1), 0, 0)._unsafeUnwrap().mult(Math.sqrt(0.5))._unsafeUnwrap(),
        ),
      ).toBeTruthy()
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
      const res = stateVector.setAmplifier(2, Complex.ZERO)

      expect(res.isErr()).toBeTruthy()
      expect(res._unsafeUnwrapErr().message).toBe('Element out of range')
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

  test('timesQubitOperation', () => {
    const s = Math.sqrt(0.5)

    expect(
      new StateVector('00').timesQubitOperation(H, 0, 0).eq(Matrix.column_vector(s, s, 0, 0)._unsafeUnwrap()),
    ).toBeTruthy()
    expect(
      new StateVector('01').timesQubitOperation(H, 0, 0).eq(Matrix.column_vector(s, -s, 0, 0)._unsafeUnwrap()),
    ).toBeTruthy()
    expect(
      new StateVector('10').timesQubitOperation(H, 0, 0).eq(Matrix.column_vector(0, 0, s, s)._unsafeUnwrap()),
    ).toBeTruthy()
    expect(
      new StateVector('11').timesQubitOperation(H, 0, 0).eq(Matrix.column_vector(0, 0, s, -s)._unsafeUnwrap()),
    ).toBeTruthy()

    expect(
      new StateVector('00').timesQubitOperation(H, 1, 0).eq(Matrix.column_vector(s, 0, s, 0)._unsafeUnwrap()),
    ).toBeTruthy()
    expect(
      new StateVector('01').timesQubitOperation(H, 1, 0).eq(Matrix.column_vector(0, s, 0, s)._unsafeUnwrap()),
    ).toBeTruthy()
    expect(
      new StateVector('10').timesQubitOperation(H, 1, 0).eq(Matrix.column_vector(s, 0, -s, 0)._unsafeUnwrap()),
    ).toBeTruthy()
    expect(
      new StateVector('11').timesQubitOperation(H, 1, 0).eq(Matrix.column_vector(0, s, 0, -s)._unsafeUnwrap()),
    ).toBeTruthy()
  })

  test('timesQubitOperation_speed', () => {
    const numQubits = 10
    const numOps = 100
    const t0 = performance.now()
    const buf = new Float64Array(2 << numQubits)

    buf[0] = 1
    stateVector = new StateVector(new Matrix(1, 1 << numQubits, buf))

    for (let i = 0; i < numOps; i++) {
      stateVector.timesQubitOperation(H, 0, 6)
    }

    const t1 = performance.now()
    expect(t1 - t0 < 100).toBeTruthy()
  })
})
