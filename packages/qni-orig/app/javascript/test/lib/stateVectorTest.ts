/* eslint-env qunit */

import { matrix, divide, kron } from "mathjs"
import { StateVector } from "lib/simulator/stateVector"

QUnit.module("new StateVector('0')", (hooks) => {
  let stateVector: StateVector

  hooks.beforeEach(() => {
    stateVector = new StateVector("0")
  })

  QUnit.test(".bra should convert to bra", (assert) => {
    assert.deepEqual(
      stateVector.bra,
      matrix([[1, 0]], "sparse"),
      "new StateVector('0').bra = <0|",
    )
  })

  QUnit.test(".ket should convert to ket", (assert) => {
    assert.deepEqual(
      stateVector.ket,
      matrix([[1], [0]], "sparse"),
      "new StateVector('0').ket = |0>",
    )
  })

  QUnit.test(".nqubit should return nqubit", (assert) => {
    assert.equal(stateVector.nqubit, 1, "new StateVector('0').nqubit = 1")
  })

  QUnit.test(".size should return size", (assert) => {
    assert.equal(stateVector.size, 2, "new StateVector('0').size = 2")
  })

  QUnit.test(".toString() should return string", (assert) => {
    assert.equal(
      stateVector.toString(),
      "[[1], [0]]",
      "new StateVector('0').toString() = [[1], [0]]",
    )
  })
})

QUnit.module("new StateVector('1')", (hooks) => {
  let stateVector: StateVector

  hooks.beforeEach(() => {
    stateVector = new StateVector("1")
  })

  QUnit.test(".bra should convert to bra", (assert) => {
    assert.deepEqual(
      stateVector.bra,
      matrix([[0, 1]], "sparse"),
      "new StateVector('1').bra = <1|",
    )
  })

  QUnit.test(".ket should convert to ket", (assert) => {
    assert.deepEqual(
      stateVector.ket,
      matrix([[0], [1]], "sparse"),
      "new StateVector('1').ket = |1>",
    )
  })

  QUnit.test(".nqubit should return nqubit", (assert) => {
    assert.equal(stateVector.nqubit, 1, "new StateVector('1').nqubit = 1")
  })

  QUnit.test(".size should return size", (assert) => {
    assert.equal(stateVector.size, 2, "new StateVector('1').size = 2")
  })

  QUnit.test(".toString() should return string", (assert) => {
    assert.equal(
      stateVector.toString(),
      "[[0], [1]]",
      "new StateVector('1').toString() = [[0], [1]]",
    )
  })
})

import { sqrt } from "mathjs"

QUnit.module("new StateVector('+')", (hooks) => {
  let stateVector: StateVector

  hooks.beforeEach(() => {
    stateVector = new StateVector("+")
  })

  QUnit.test("should convert to bra", (assert) => {
    assert.deepEqual(
      stateVector.bra,
      divide(matrix([[1, 1]], "sparse"), sqrt(2)),
      "new StateVector('+').bra = <+|",
    )
  })

  QUnit.test("should convert to ket", (assert) => {
    assert.deepEqual(
      stateVector.ket,
      divide(matrix([[1], [1]], "sparse"), sqrt(2)),
      "new StateVector('+').ket = |+>",
    )
  })

  QUnit.test(".nqubit should return nqubit", (assert) => {
    assert.equal(stateVector.nqubit, 1, "new StateVector('+').nqubit = 1")
  })

  QUnit.test(".size should return size", (assert) => {
    assert.equal(stateVector.size, 2, "new StateVector('+').size = 2")
  })

  QUnit.test(".toString() should return string", (assert) => {
    assert.equal(
      stateVector.toString(),
      "[[0.7071067811865475], [0.7071067811865475]]",
      "new StateVector('+').toString() = [[0.7071067811865475], [0.7071067811865475]]",
    )
  })
})

QUnit.module("new StateVector('-')", (hooks) => {
  let stateVector: StateVector

  hooks.beforeEach(() => {
    stateVector = new StateVector("-")
  })

  QUnit.test("should convert to bra", (assert) => {
    assert.deepEqual(
      stateVector.bra,
      divide(matrix([[1, -1]], "sparse"), sqrt(2)),
      "new StateVector('-').bra = <-|",
    )
  })

  QUnit.test("should convert to ket", (assert) => {
    assert.deepEqual(
      stateVector.ket,
      divide(matrix([[1], [-1]], "sparse"), sqrt(2)),
      "new StateVector('-').ket = |->",
    )
  })

  QUnit.test(".nqubit should return nqubit", (assert) => {
    assert.equal(stateVector.nqubit, 1, "new StateVector('-').nqubit = 1")
  })

  QUnit.test(".size should return size", (assert) => {
    assert.equal(stateVector.size, 2, "new StateVector('-').size = 2")
  })

  QUnit.test(".toString() should return string", (assert) => {
    assert.equal(
      stateVector.toString(),
      "[[0.7071067811865475], [-0.7071067811865475]]",
      "new StateVector('-').toString() = [[0.7071067811865475], [-0.7071067811865475]]",
    )
  })
})

import { complex } from "mathjs"

QUnit.module("new StateVector('i')", (hooks) => {
  let stateVector: StateVector

  hooks.beforeEach(() => {
    stateVector = new StateVector("i")
  })

  QUnit.test("should convert to bra", (assert) => {
    assert.deepEqual(
      stateVector.bra,
      divide(
        matrix([[1, complex(0, -1) as unknown as number]], "sparse"),
        sqrt(2),
      ),
      "new StateVector('i').bra = <i|",
    )
  })

  QUnit.test("should convert to ket", (assert) => {
    assert.deepEqual(
      stateVector.ket,
      divide(
        matrix([[1], [complex(0, 1) as unknown as number]], "sparse"),
        sqrt(2),
      ),
      "new StateVector('i').ket = |i>",
    )
  })

  QUnit.test(".nqubit should return nqubit", (assert) => {
    assert.equal(stateVector.nqubit, 1, "new StateVector('i').nqubit = 1")
  })

  QUnit.test(".size should return size", (assert) => {
    assert.equal(stateVector.size, 2, "new StateVector('i').size = 2")
  })

  QUnit.test(".toString() should return string", (assert) => {
    assert.equal(
      stateVector.toString(),
      "[[0.7071067811865475], [0.7071067811865475i]]",
      "new StateVector('i').toString() = [[0.7071067811865475], [0.7071067811865475i]]",
    )
  })
})

QUnit.module("new StateVector('-i')", (hooks) => {
  let stateVector: StateVector

  hooks.beforeEach(() => {
    stateVector = new StateVector("-i")
  })

  QUnit.test("should convert to bra", (assert) => {
    assert.deepEqual(
      stateVector.bra,
      divide(
        matrix([[1, complex(0, 1) as unknown as number]], "sparse"),
        sqrt(2),
      ),
      "new StateVector('-i').bra = <-i|",
    )
  })

  QUnit.test("should convert to ket", (assert) => {
    assert.deepEqual(
      stateVector.ket,
      divide(
        matrix([[1], [complex(0, -1) as unknown as number]], "sparse"),
        sqrt(2),
      ),
      "new StateVector('-i').ket = |-i>",
    )
  })

  QUnit.test(".nqubit should return nqubit", (assert) => {
    assert.equal(stateVector.nqubit, 1, "new StateVector('-i').nqubit = 1")
  })

  QUnit.test(".size should return size", (assert) => {
    assert.equal(stateVector.size, 2, "new StateVector('-i').size = 2")
  })

  QUnit.test(".toString() should return string", (assert) => {
    assert.equal(
      stateVector.toString(),
      "[[0.7071067811865475], [-0.7071067811865475i]]",
      "new StateVector('-i').toString() = [[0.7071067811865475], [-0.7071067811865475i]]",
    )
  })
})

QUnit.module("new StateVector('00')", (hooks) => {
  let stateVector: StateVector

  hooks.beforeEach(() => {
    stateVector = new StateVector("00")
  })

  QUnit.test("should convert to bra", (assert) => {
    assert.equal(
      stateVector.bra.toString(),
      kron(matrix([[1, 0]]), matrix([[1, 0]])).toString(),
      "new StateVector('00').bra = <00|",
    )
  })

  QUnit.test("should convert to ket", (assert) => {
    assert.equal(
      stateVector.ket.toString(),
      kron(matrix([[1], [0]]), matrix([[1], [0]])).toString(),
      "new StateVector('00').ket = |00>",
    )
  })

  QUnit.test(".nqubit should return nqubit", (assert) => {
    assert.equal(stateVector.nqubit, 2, "new StateVector('00').nqubit = 2")
  })

  QUnit.test(".size should return size", (assert) => {
    assert.equal(stateVector.size, 4, "new StateVector('00').size = 4")
  })

  QUnit.test(".toString() should return string", (assert) => {
    assert.equal(
      stateVector.toString(),
      "[[1], [0], [0], [0]]",
      "new StateVector('00').toString() = [[1], [0], [0], [0]]",
    )
  })
})
