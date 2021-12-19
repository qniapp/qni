import {Matrix, StateVector} from '../src/'
import {Complex} from '@qni/common'

QUnit.module('StateVector', () => {
  let stateVector: StateVector

  QUnit.module('creation', () => {
    QUnit.test('|0>', assert => {
      stateVector = new StateVector('0')
      assert.equal(stateVector.toString(), '{{1}, {0}}')
    })

    QUnit.test('|1>', assert => {
      stateVector = new StateVector('1')
      assert.equal(stateVector.toString(), '{{0}, {1}}')
    })

    QUnit.test('|+>', assert => {
      stateVector = new StateVector('+')
      assert.equal(stateVector.toString(), '{{√½}, {√½}}')
    })

    QUnit.test('|->', assert => {
      stateVector = new StateVector('-')
      assert.equal(stateVector.toString(), '{{√½}, {-√½}}')
    })

    QUnit.test('|i>', assert => {
      stateVector = new StateVector('i')
      assert.equal(stateVector.toString(), '{{√½}, {√½i}}')
    })

    QUnit.test('|-i>', assert => {
      stateVector = new StateVector('(-i)')
      assert.equal(stateVector.toString(), '{{√½}, {-√½i}}')
    })

    QUnit.test('|00>', assert => {
      stateVector = new StateVector('00')
      assert.equal(stateVector.toString(), '{{1}, {0}, {0}, {0}}')
    })

    QUnit.test('|0(-i)>', assert => {
      stateVector = new StateVector('0(-i)')
      assert.equal(stateVector.toString(), '{{√½}, {-√½i}, {0}, {0}}')
    })

    QUnit.test('create with an invalid bit string', assert => {
      assert.throws(() => new StateVector(''))
      assert.throws(() => new StateVector('?F*(*@RU#'))
    })
  })

  QUnit.module('size', () => {
    QUnit.test('one qubit', assert => {
      stateVector = new StateVector('0')
      assert.equal(stateVector.size, 2)
    })

    QUnit.test('two qubits', assert => {
      stateVector = new StateVector('00')
      assert.equal(stateVector.size, 4)
    })
  })

  QUnit.module('nqubit', () => {
    QUnit.test('one qubit', assert => {
      stateVector = new StateVector('0')
      assert.equal(stateVector.nqubit, 1)
    })

    QUnit.test('two qubits', assert => {
      stateVector = new StateVector('00')
      assert.equal(stateVector.nqubit, 2)
    })
  })

  QUnit.module('bra', () => {
    QUnit.test('<0|', assert => {
      stateVector = new StateVector('0')
      assert.equates(stateVector.bra, Matrix.row(1, 0))
    })

    QUnit.test('<1|', assert => {
      stateVector = new StateVector('1')
      assert.equates(stateVector.bra, Matrix.row(0, 1))
    })

    QUnit.test('<+|', assert => {
      stateVector = new StateVector('+')
      assert.equates(stateVector.bra, Matrix.row(1, 1).times(Math.sqrt(0.5)))
    })

    QUnit.test('<-|', assert => {
      stateVector = new StateVector('-')
      assert.equates(stateVector.bra, Matrix.row(1, -1).times(Math.sqrt(0.5)))
    })

    QUnit.test('<i|', assert => {
      stateVector = new StateVector('i')
      assert.equates(stateVector.bra, Matrix.row(1, new Complex(0, -1)).times(Math.sqrt(0.5)))
    })

    QUnit.test('<-i|', assert => {
      stateVector = new StateVector('(-i)')
      assert.equates(stateVector.bra, Matrix.row(1, new Complex(0, 1)).times(Math.sqrt(0.5)))
    })

    QUnit.test('<00|', assert => {
      stateVector = new StateVector('00')
      assert.equates(stateVector.bra, Matrix.row(1, 0, 0, 0))
    })

    QUnit.test('<0(-i)|', assert => {
      stateVector = new StateVector('0(-i)')
      assert.equates(stateVector.bra, Matrix.row(1, new Complex(0, 1), 0, 0).times(Math.sqrt(0.5)))
    })
  })

  QUnit.module('ket', () => {
    QUnit.test('|0>', assert => {
      stateVector = new StateVector('0')
      assert.equates(stateVector.ket, Matrix.col(1, 0))
    })

    QUnit.test('|1>', assert => {
      stateVector = new StateVector('1')
      assert.equates(stateVector.ket, Matrix.col(0, 1))
    })

    QUnit.test('|+>', assert => {
      stateVector = new StateVector('+')
      assert.equates(stateVector.ket, Matrix.col(1, 1).times(Math.sqrt(0.5)))
    })

    QUnit.test('|->', assert => {
      stateVector = new StateVector('-')
      assert.equates(stateVector.ket, Matrix.col(1, -1).times(Math.sqrt(0.5)))
    })

    QUnit.test('|i>', assert => {
      stateVector = new StateVector('i')
      assert.equates(stateVector.ket, Matrix.col(1, new Complex(0, 1)).times(Math.sqrt(0.5)))
    })

    QUnit.test('|-i>', assert => {
      stateVector = new StateVector('(-i)')
      assert.equates(stateVector.ket, Matrix.col(1, new Complex(0, -1)).times(Math.sqrt(0.5)))
    })

    QUnit.test('|00>', assert => {
      stateVector = new StateVector('00')
      assert.equates(stateVector.ket, Matrix.col(1, 0, 0, 0))
    })

    QUnit.test('|0(-i)>', assert => {
      stateVector = new StateVector('0(-i)')
      assert.equates(stateVector.ket, Matrix.col(1, new Complex(0, -1), 0, 0).times(Math.sqrt(0.5)))
    })
  })

  QUnit.module('amplifier', () => {
    QUnit.test('get amplifiers', assert => {
      stateVector = new StateVector('0')
      assert.equal(stateVector.amplifier(0), 1)
      assert.equal(stateVector.amplifier(1), 0)
      assert.throws(() => stateVector.amplifier(2))
    })
  })

  QUnit.module('setAmplifier', hooks => {
    hooks.beforeEach(() => {
      stateVector = new StateVector('0')
    })

    QUnit.test('set first amplifier', assert => {
      stateVector.setAmplifier(0, Complex.ZERO)
      assert.equates(stateVector.toString(), '{{0}, {0}}')
    })

    QUnit.test('set last amplifier', assert => {
      stateVector.setAmplifier(1, Complex.ONE)
      assert.equates(stateVector.toString(), '{{1}, {1}}')
    })

    QUnit.test('amplifier out of range', assert => {
      assert.throws(() => stateVector.setAmplifier(2, Complex.ZERO))
    })
  })

  QUnit.module('blochVector', () => {
    QUnit.test('|0> (bit 0)', assert => {
      stateVector = new StateVector('0')
      assert.equates(stateVector.blochVector(0), [0, 0, 1])
    })

    QUnit.test('|1> (bit 0)', assert => {
      stateVector = new StateVector('1')
      assert.equates(stateVector.blochVector(0), [0, 0, -1])
    })

    QUnit.test('|+> (bit 0)', assert => {
      stateVector = new StateVector('+')
      assert.approximatelyEquates(stateVector.blochVector(0), [1, 0, 0])
    })

    QUnit.test('|-> (bit 0)', assert => {
      stateVector = new StateVector('-')
      assert.approximatelyEquates(stateVector.blochVector(0), [-1, 0, 0])
    })

    QUnit.test('|i> (bit 0)', assert => {
      stateVector = new StateVector('i')
      assert.approximatelyEquates(stateVector.blochVector(0), [0, 1, 0])
    })

    QUnit.test('|-i> (bit 0)', assert => {
      stateVector = new StateVector('(-i)')
      assert.approximatelyEquates(stateVector.blochVector(0), [0, -1, 0])
    })

    QUnit.test('|0(-i)> (bit 0)', assert => {
      stateVector = new StateVector('0(-i)')
      assert.approximatelyEquates(stateVector.blochVector(0), [0, -1, 0])
    })

    QUnit.test('|0(-i)> (bit 1)', assert => {
      stateVector = new StateVector('0(-i)')
      assert.approximatelyEquates(stateVector.blochVector(1), [0, 0, 1])
    })
  })
})
