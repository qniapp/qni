/* eslint-env qunit */

import {Complex} from '@qni/common'
import {Matrix} from '../src/matrix'
import {StateVector} from '../src/state-vector'

QUnit.module("new StateVector('0')", hooks => {
  let stateVector: StateVector

  hooks.beforeEach(() => {
    stateVector = new StateVector('0')
  })

  QUnit.test('.bra should convert to bra', assert => {
    assert.equates(stateVector.bra, Matrix.row(1, 0), "new StateVector('0').bra = <0|")
  })

  QUnit.test('.ket should convert to ket', assert => {
    assert.equates(stateVector.ket, Matrix.col(1, 0), "new StateVector('0').ket = |0>")
  })

  QUnit.test('.nqubit should return nqubit', assert => {
    assert.equates(stateVector.nqubit, 1, "new StateVector('0').nqubit = 1")
  })

  QUnit.test('.size should return size', assert => {
    assert.equates(stateVector.size, 2, "new StateVector('0').size = 2")
  })

  QUnit.test('.toString() should return string', assert => {
    assert.equates(stateVector.toString(), '{{1}, {0}}', "new StateVector('0').toString() = {{1}, {0}}")
  })
})

QUnit.module("new StateVector('1')", hooks => {
  let stateVector: StateVector

  hooks.beforeEach(() => {
    stateVector = new StateVector('1')
  })

  QUnit.test('.bra should convert to bra', assert => {
    assert.equates(stateVector.bra, Matrix.row(0, 1), "new StateVector('1').bra = <1|")
  })

  QUnit.test('.ket should convert to ket', assert => {
    assert.equates(stateVector.ket, Matrix.col(0, 1), "new StateVector('1').ket = |1>")
  })

  QUnit.test('.nqubit should return nqubit', assert => {
    assert.equates(stateVector.nqubit, 1, "new StateVector('1').nqubit = 1")
  })

  QUnit.test('.size should return size', assert => {
    assert.equates(stateVector.size, 2, "new StateVector('1').size = 2")
  })

  QUnit.test('.toString() should return string', assert => {
    assert.equates(stateVector.toString(), '{{0}, {1}}', "new StateVector('1').toString() = {{0} {1}}")
  })
})

QUnit.module("new StateVector('+')", hooks => {
  let stateVector: StateVector

  hooks.beforeEach(() => {
    stateVector = new StateVector('+')
  })

  QUnit.test('should convert to bra', assert => {
    assert.equates(stateVector.bra, Matrix.row(1, 1).times(Math.sqrt(0.5)), "new StateVector('+').bra = <+|")
  })

  QUnit.test('should convert to ket', assert => {
    assert.equates(stateVector.ket, Matrix.col(1, 1).times(Math.sqrt(0.5)), "new StateVector('+').ket = |+>")
  })

  QUnit.test('.nqubit should return nqubit', assert => {
    assert.equates(stateVector.nqubit, 1, "new StateVector('+').nqubit = 1")
  })

  QUnit.test('.size should return size', assert => {
    assert.equates(stateVector.size, 2, "new StateVector('+').size = 2")
  })

  QUnit.test('.toString() should return string', assert => {
    assert.equates(stateVector.toString(), '{{√½}, {√½}}', "new StateVector('+').toString() = {{√½}, {√½}}")
  })
})

QUnit.module("new StateVector('-')", hooks => {
  let stateVector: StateVector

  hooks.beforeEach(() => {
    stateVector = new StateVector('-')
  })

  QUnit.test('should convert to bra', assert => {
    assert.equates(stateVector.bra, Matrix.row(1, -1).times(Math.sqrt(0.5)), "new StateVector('-').bra = <-|")
  })

  QUnit.test('should convert to ket', assert => {
    assert.equates(stateVector.ket, Matrix.col(1, -1).times(Math.sqrt(0.5)), "new StateVector('-').ket = |->")
  })

  QUnit.test('.nqubit should return nqubit', assert => {
    assert.equates(stateVector.nqubit, 1, "new StateVector('-').nqubit = 1")
  })

  QUnit.test('.size should return size', assert => {
    assert.equates(stateVector.size, 2, "new StateVector('-').size = 2")
  })

  QUnit.test('.toString() should return string', assert => {
    assert.equates(stateVector.toString(), '{{√½}, {-√½}}', "new StateVector('-').toString() = {{√½}, {-√½}}")
  })
})

QUnit.module("new StateVector('i')", hooks => {
  let stateVector: StateVector

  hooks.beforeEach(() => {
    stateVector = new StateVector('i')
  })

  QUnit.test('should convert to bra', assert => {
    assert.equates(
      stateVector.bra,
      Matrix.row(1, new Complex(0, -1)).times(Math.sqrt(0.5)),
      "new StateVector('i').bra = <i|"
    )
  })

  QUnit.test('should convert to ket', assert => {
    assert.equates(
      stateVector.ket,
      Matrix.col(1, new Complex(0, 1)).times(Math.sqrt(0.5)),
      "new StateVector('i').ket = |i>"
    )
  })

  QUnit.test('.nqubit should return nqubit', assert => {
    assert.equates(stateVector.nqubit, 1, "new StateVector('i').nqubit = 1")
  })

  QUnit.test('.size should return size', assert => {
    assert.equates(stateVector.size, 2, "new StateVector('i').size = 2")
  })

  QUnit.test('.toString() should return string', assert => {
    assert.equates(stateVector.toString(), '{{√½}, {√½i}}', "new StateVector('i').toString() = {{√½}, {√½i}}")
  })
})

QUnit.module("new StateVector('-i')", hooks => {
  let stateVector: StateVector

  hooks.beforeEach(() => {
    stateVector = new StateVector('-i')
  })

  QUnit.test('should convert to bra', assert => {
    assert.equates(
      stateVector.bra,
      Matrix.row(1, new Complex(0, 1)).times(Math.sqrt(0.5)),
      "new StateVector('-i').bra = <-i|"
    )
  })

  QUnit.test('should convert to ket', assert => {
    assert.equates(
      stateVector.ket,
      Matrix.col(1, new Complex(0, -1)).times(Math.sqrt(0.5)),
      "new StateVector('-i').ket = |-i>"
    )
  })

  QUnit.test('.nqubit should return nqubit', assert => {
    assert.equates(stateVector.nqubit, 1, "new StateVector('-i').nqubit = 1")
  })

  QUnit.test('.size should return size', assert => {
    assert.equates(stateVector.size, 2, "new StateVector('-i').size = 2")
  })

  QUnit.test('.toString() should return string', assert => {
    assert.equates(stateVector.toString(), '{{√½}, {-√½i}}', "new StateVector('-i').toString() = {{√½}, {-√½i}}")
  })
})

QUnit.module("new StateVector('00')", hooks => {
  let stateVector: StateVector

  hooks.beforeEach(() => {
    stateVector = new StateVector('00')
  })

  QUnit.test('should convert to bra', assert => {
    assert.equates(stateVector.bra, Matrix.row(1, 0, 0, 0), "new StateVector('00').bra = <00|")
  })

  QUnit.test('should convert to ket', assert => {
    assert.equates(stateVector.ket, Matrix.col(1, 0, 0, 0), "new StateVector('00').ket = |00>")
  })

  QUnit.test('.nqubit should return nqubit', assert => {
    assert.equates(stateVector.nqubit, 2, "new StateVector('00').nqubit = 2")
  })

  QUnit.test('.size should return size', assert => {
    assert.equates(stateVector.size, 4, "new StateVector('00').size = 4")
  })

  QUnit.test('.toString() should return string', assert => {
    assert.equates(
      stateVector.toString(),
      '{{1}, {0}, {0}, {0}}',
      "new StateVector('00').toString() = {{1}, {0}, {0}, {0}}"
    )
  })
})
