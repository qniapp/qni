import {Matrix, StateVector} from '../src'
import {Complex} from '@qni/common'
import {H} from '../src/gate-matrices'
// eslint-disable-next-line import/no-nodejs-modules
import {performance} from 'perf_hooks'

describe('StateVector', () => {
  let stateVector: StateVector

  describe('creation', () => {
    test('|0>', () => {
      stateVector = new StateVector('0')
      expect(stateVector.toString()).toBe('{{1}, {0}}')
    })

    test('|1>', () => {
      stateVector = new StateVector('1')
      expect(stateVector.toString()).toBe('{{0}, {1}}')
    })

    test('|+>', () => {
      stateVector = new StateVector('+')
      expect(stateVector.toString()).toBe('{{√½}, {√½}}')
    })

    test('|->', () => {
      stateVector = new StateVector('-')
      expect(stateVector.toString()).toBe('{{√½}, {-√½}}')
    })

    test('|i>', () => {
      stateVector = new StateVector('i')
      expect(stateVector.toString()).toBe('{{√½}, {√½i}}')
    })

    test('|-i>', () => {
      stateVector = new StateVector('(-i)')
      expect(stateVector.toString()).toBe('{{√½}, {-√½i}}')
    })

    test('|00>', () => {
      stateVector = new StateVector('00')
      expect(stateVector.toString()).toBe('{{1}, {0}, {0}, {0}}')
    })

    test('|0(-i)>', () => {
      stateVector = new StateVector('0(-i)')
      expect(stateVector.toString()).toBe('{{√½}, {-√½i}, {0}, {0}}')
    })

    test('create with an invalid bit string', () => {
      expect(() => new StateVector('')).toThrow()
      expect(() => new StateVector('?F*(*@RU#')).toThrow()
    })
  })

  describe('size', () => {
    test('one qubit', () => {
      stateVector = new StateVector('0')
      expect(stateVector.size).toBe(2)
    })

    test('two qubits', () => {
      stateVector = new StateVector('00')
      expect(stateVector.size).toBe(4)
    })
  })

  describe('nqubit', () => {
    test('one qubit', () => {
      stateVector = new StateVector('0')
      expect(stateVector.nqubit).toBe(1)
    })

    test('two qubits', () => {
      stateVector = new StateVector('00')
      expect(stateVector.nqubit).toBe(2)
    })
  })

  describe('bra', () => {
    test('<0|', () => {
      stateVector = new StateVector('0')
      expect(stateVector.bra.eq(Matrix.rows([[1, 0]])._unsafeUnwrap())).toBeTruthy()
    })

    test('<1|', () => {
      stateVector = new StateVector('1')
      expect(stateVector.bra.eq(Matrix.rows([[0, 1]])._unsafeUnwrap())).toBeTruthy()
    })

    test('<+|', () => {
      stateVector = new StateVector('+')
      expect(
        stateVector.bra.eq(
          Matrix.rows([[1, 1]])
            ._unsafeUnwrap()
            .mult(Math.sqrt(0.5))
            ._unsafeUnwrap(),
        ),
      ).toBeTruthy()
    })

    test('<-|', () => {
      stateVector = new StateVector('-')
      expect(
        stateVector.bra.eq(
          Matrix.rows([[1, -1]])
            ._unsafeUnwrap()
            .mult(Math.sqrt(0.5))
            ._unsafeUnwrap(),
        ),
      ).toBeTruthy()
    })

    test('<i|', () => {
      stateVector = new StateVector('i')
      expect(
        stateVector.bra.eq(
          Matrix.rows([[1, new Complex(0, -1)]])
            ._unsafeUnwrap()
            .mult(Math.sqrt(0.5))
            ._unsafeUnwrap(),
        ),
      ).toBeTruthy()
    })

    test('<-i|', () => {
      stateVector = new StateVector('(-i)')
      expect(
        stateVector.bra.eq(
          Matrix.rows([[1, new Complex(0, 1)]])
            ._unsafeUnwrap()
            .mult(Math.sqrt(0.5))
            ._unsafeUnwrap(),
        ),
      ).toBeTruthy()
    })

    test('<00|', () => {
      stateVector = new StateVector('00')
      expect(stateVector.bra.eq(Matrix.rows([[1, 0, 0, 0]])._unsafeUnwrap())).toBeTruthy()
    })

    test('<0(-i)|', () => {
      stateVector = new StateVector('0(-i)')
      expect(
        stateVector.bra.eq(
          Matrix.rows([[1, new Complex(0, 1), 0, 0]])
            ._unsafeUnwrap()
            .mult(Math.sqrt(0.5))
            ._unsafeUnwrap(),
        ),
      ).toBeTruthy()
    })
  })

  describe('ket', () => {
    test('|0>', () => {
      stateVector = new StateVector('0')
      expect(stateVector.ket.eq(Matrix.column_vector(1, 0)._unsafeUnwrap())).toBeTruthy()
    })

    test('|1>', () => {
      stateVector = new StateVector('1')
      expect(stateVector.ket.eq(Matrix.column_vector(0, 1)._unsafeUnwrap())).toBeTruthy()
    })

    test('|+>', () => {
      stateVector = new StateVector('+')
      expect(
        stateVector.ket.eq(Matrix.column_vector(1, 1)._unsafeUnwrap().mult(Math.sqrt(0.5))._unsafeUnwrap()),
      ).toBeTruthy()
    })

    test('|->', () => {
      stateVector = new StateVector('-')
      expect(
        stateVector.ket.eq(Matrix.column_vector(1, -1)._unsafeUnwrap().mult(Math.sqrt(0.5))._unsafeUnwrap()),
      ).toBeTruthy()
    })

    test('|i>', () => {
      stateVector = new StateVector('i')
      expect(
        stateVector.ket.eq(
          Matrix.column_vector(1, new Complex(0, 1))._unsafeUnwrap().mult(Math.sqrt(0.5))._unsafeUnwrap(),
        ),
      ).toBeTruthy()
    })

    test('|-i>', () => {
      stateVector = new StateVector('(-i)')
      expect(
        stateVector.ket.eq(
          Matrix.column_vector(1, new Complex(0, -1))._unsafeUnwrap().mult(Math.sqrt(0.5))._unsafeUnwrap(),
        ),
      ).toBeTruthy()
    })

    test('|00>', () => {
      stateVector = new StateVector('00')
      expect(stateVector.ket.eq(Matrix.column_vector(1, 0, 0, 0)._unsafeUnwrap())).toBeTruthy()
    })

    test('|0(-i)>', () => {
      stateVector = new StateVector('0(-i)')
      expect(
        stateVector.ket.eq(
          Matrix.column_vector(1, new Complex(0, -1), 0, 0)._unsafeUnwrap().mult(Math.sqrt(0.5))._unsafeUnwrap(),
        ),
      ).toBeTruthy()
    })
  })

  describe('amplifier', () => {
    test('get amplifiers', () => {
      stateVector = new StateVector('0')
      expect(stateVector.amplifier(0).eq(1)).toBeTruthy()
      expect(stateVector.amplifier(1).eq(0)).toBeTruthy()
      expect(() => stateVector.amplifier(2)).toThrow()
    })
  })

  describe('setAmplifier', () => {
    beforeEach(() => {
      stateVector = new StateVector('0')
    })

    test('set first amplifier', () => {
      stateVector.setAmplifier(0, Complex.ZERO)
      expect(stateVector.toString()).toBe('{{0}, {0}}')
    })

    test('set last amplifier', () => {
      stateVector.setAmplifier(1, Complex.ONE)
      expect(stateVector.toString()).toBe('{{1}, {1}}')
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
      expect(stateVector.blochVector(0)).toEqual([0, 0, 1])
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
      expect(stateVector.blochVector(0)).toEqual([0, 0, -1])
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
    let bitString
    // const buf = new Float64Array(2 << numQubits)

    // "000...0" (0 が numQubits 個) の文字列を bitString に代入
    bitString = ''
    for (let i = 0; i < numQubits; i++) {
      bitString += '0'
    }

    // buf[0] = 1
    stateVector = new StateVector(bitString)

    for (let i = 0; i < numOps; i++) {
      stateVector.timesQubitOperation(H, 0, 6)
    }

    const t1 = performance.now()
    expect(t1 - t0 < 100).toBeTruthy()
  })
})
