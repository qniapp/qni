import {Matrix, StateVector} from '../src/'
import {Complex} from '@qni/common'

QUnit.module('StateVector', () => {
  let stateVector: StateVector

  QUnit.module('|0>', hooks => {
    hooks.beforeEach(() => {
      stateVector = new StateVector('0')
    })

    QUnit.test('toString', assert => {
      assert.equates(stateVector.toString(), '{{1}, {0}}')
    })

    QUnit.test('bra', assert => {
      assert.equates(stateVector.bra, Matrix.row(1, 0))
    })

    QUnit.test('ket', assert => {
      assert.equates(stateVector.ket, Matrix.col(1, 0))
    })

    QUnit.test('nqubit', assert => {
      assert.equates(stateVector.nqubit, 1)
    })

    QUnit.test('size', assert => {
      assert.equates(stateVector.size, 2)
    })
  })

  QUnit.module('|1>', hooks => {
    hooks.beforeEach(() => {
      stateVector = new StateVector('1')
    })

    QUnit.test('toString', assert => {
      assert.equates(stateVector.toString(), '{{0}, {1}}')
    })

    QUnit.test('bra', assert => {
      assert.equates(stateVector.bra, Matrix.row(0, 1))
    })

    QUnit.test('ket', assert => {
      assert.equates(stateVector.ket, Matrix.col(0, 1))
    })

    QUnit.test('nqubit', assert => {
      assert.equates(stateVector.nqubit, 1)
    })

    QUnit.test('size', assert => {
      assert.equates(stateVector.size, 2)
    })
  })

  QUnit.module('|+>', hooks => {
    hooks.beforeEach(() => {
      stateVector = new StateVector('+')
    })

    QUnit.test('toString', assert => {
      assert.equates(stateVector.toString(), '{{√½}, {√½}}')
    })

    QUnit.test('bra', assert => {
      assert.equates(stateVector.bra, Matrix.row(1, 1).times(Math.sqrt(0.5)))
    })

    QUnit.test('ket', assert => {
      assert.equates(stateVector.ket, Matrix.col(1, 1).times(Math.sqrt(0.5)))
    })

    QUnit.test('nqubit', assert => {
      assert.equates(stateVector.nqubit, 1)
    })

    QUnit.test('size', assert => {
      assert.equates(stateVector.size, 2)
    })
  })

  QUnit.module('|->', hooks => {
    hooks.beforeEach(() => {
      stateVector = new StateVector('-')
    })

    QUnit.test('toString', assert => {
      assert.equates(stateVector.toString(), '{{√½}, {-√½}}')
    })

    QUnit.test('bra', assert => {
      assert.equates(stateVector.bra, Matrix.row(1, -1).times(Math.sqrt(0.5)))
    })

    QUnit.test('ket', assert => {
      assert.equates(stateVector.ket, Matrix.col(1, -1).times(Math.sqrt(0.5)))
    })

    QUnit.test('nqubit', assert => {
      assert.equates(stateVector.nqubit, 1)
    })

    QUnit.test('size', assert => {
      assert.equates(stateVector.size, 2)
    })
  })

  QUnit.module('|i>', hooks => {
    hooks.beforeEach(() => {
      stateVector = new StateVector('i')
    })

    QUnit.test('toString', assert => {
      assert.equates(stateVector.toString(), '{{√½}, {√½i}}')
    })

    QUnit.test('bra', assert => {
      assert.equates(stateVector.bra, Matrix.row(1, new Complex(0, -1)).times(Math.sqrt(0.5)))
    })

    QUnit.test('ket', assert => {
      assert.equates(stateVector.ket, Matrix.col(1, new Complex(0, 1)).times(Math.sqrt(0.5)))
    })

    QUnit.test('nqubit', assert => {
      assert.equates(stateVector.nqubit, 1)
    })

    QUnit.test('size', assert => {
      assert.equates(stateVector.size, 2)
    })
  })

  QUnit.module('|-i>', hooks => {
    hooks.beforeEach(() => {
      stateVector = new StateVector('(-i)')
    })

    QUnit.test('toString', assert => {
      assert.equates(stateVector.toString(), '{{√½}, {-√½i}}')
    })

    QUnit.test('bra', assert => {
      assert.equates(stateVector.bra, Matrix.row(1, new Complex(0, 1)).times(Math.sqrt(0.5)))
    })

    QUnit.test('ket', assert => {
      assert.equates(stateVector.ket, Matrix.col(1, new Complex(0, -1)).times(Math.sqrt(0.5)))
    })

    QUnit.test('nqubit', assert => {
      assert.equates(stateVector.nqubit, 1)
    })

    QUnit.test('size', assert => {
      assert.equates(stateVector.size, 2)
    })
  })

  QUnit.module('|00>', hooks => {
    hooks.beforeEach(() => {
      stateVector = new StateVector('00')
    })

    QUnit.test('toString', assert => {
      assert.equates(stateVector.toString(), '{{1}, {0}, {0}, {0}}')
    })

    QUnit.test('bra', assert => {
      assert.equates(stateVector.bra, Matrix.row(1, 0, 0, 0))
    })

    QUnit.test('ket', assert => {
      assert.equates(stateVector.ket, Matrix.col(1, 0, 0, 0))
    })

    QUnit.test('nqubit', assert => {
      assert.equates(stateVector.nqubit, 2)
    })

    QUnit.test('size', assert => {
      assert.equates(stateVector.size, 4)
    })
  })

  QUnit.module('|0(-i)>', hooks => {
    hooks.beforeEach(() => {
      stateVector = new StateVector('0(-i)')
    })

    QUnit.test('toString', assert => {
      assert.equates(stateVector.toString(), '{{√½}, {-√½i}, {0}, {0}}')
    })

    QUnit.test('bra', assert => {
      assert.equates(stateVector.bra, Matrix.row(1, new Complex(0, 1), 0, 0).times(Math.sqrt(0.5)))
    })

    QUnit.test('ket', assert => {
      assert.equates(stateVector.ket, Matrix.col(1, new Complex(0, -1), 0, 0).times(Math.sqrt(0.5)))
    })

    QUnit.test('nqubit', assert => {
      assert.equates(stateVector.nqubit, 2)
    })

    QUnit.test('size', assert => {
      assert.equates(stateVector.size, 4)
    })
  })

  QUnit.module('creation', () => {
    QUnit.test('create with an invalid bit string', assert => {
      assert.throws(() => new StateVector(''))
      assert.throws(() => new StateVector('?F*(*@RU#'))
    })
  })
})
