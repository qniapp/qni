/* eslint-env qunit */

import { matrix, divide, kron } from "mathjs"
import { Qubit } from "lib/qubit"

QUnit.module("new Qubit('0')", (hooks) => {
  let qubit: Qubit

  hooks.beforeEach(() => {
    qubit = new Qubit("0")
  })

  QUnit.test(".bra should convert to bra", (assert) => {
    assert.deepEqual(qubit.bra, matrix([[1, 0]]), "new Qubit('0').bra = <0|")
  })

  QUnit.test(".ket should convert to ket", (assert) => {
    assert.deepEqual(qubit.ket, matrix([[1], [0]]), "new Qubit('0').ket = |0>")
  })

  QUnit.test(".nqubit should return nqubit", (assert) => {
    assert.equal(qubit.nqubit, 1, "new Qubit('0').nqubit = 1")
  })

  QUnit.test(".size should return size", (assert) => {
    assert.equal(qubit.size, 2, "new Qubit('0').size = 2")
  })

  QUnit.test(".toString() should return string", (assert) => {
    assert.equal(
      qubit.toString(),
      "[[1], [0]]",
      "new Qubit('0').toString() = [[1], [0]]",
    )
  })
})

QUnit.module("new Qubit('1')", (hooks) => {
  let qubit: Qubit

  hooks.beforeEach(() => {
    qubit = new Qubit("1")
  })

  QUnit.test(".bra should convert to bra", (assert) => {
    assert.deepEqual(qubit.bra, matrix([[0, 1]]), "new Qubit('1').bra = <1|")
  })

  QUnit.test(".ket should convert to ket", (assert) => {
    assert.deepEqual(qubit.ket, matrix([[0], [1]]), "new Qubit('1').ket = |1>")
  })

  QUnit.test(".nqubit should return nqubit", (assert) => {
    assert.equal(qubit.nqubit, 1, "new Qubit('1').nqubit = 1")
  })

  QUnit.test(".size should return size", (assert) => {
    assert.equal(qubit.size, 2, "new Qubit('1').size = 2")
  })

  QUnit.test(".toString() should return string", (assert) => {
    assert.equal(
      qubit.toString(),
      "[[0], [1]]",
      "new Qubit('1').toString() = [[0], [1]]",
    )
  })
})

import { sqrt } from "mathjs"

QUnit.module("new Qubit('+')", (hooks) => {
  let qubit: Qubit

  hooks.beforeEach(() => {
    qubit = new Qubit("+")
  })

  QUnit.test("should convert to bra", (assert) => {
    assert.deepEqual(
      qubit.bra,
      divide(matrix([[1, 1]]), sqrt(2)),
      "new Qubit('+').bra = <+|",
    )
  })

  QUnit.test("should convert to ket", (assert) => {
    assert.deepEqual(
      qubit.ket,
      divide(matrix([[1], [1]]), sqrt(2)),
      "new Qubit('+').ket = |+>",
    )
  })

  QUnit.test(".nqubit should return nqubit", (assert) => {
    assert.equal(qubit.nqubit, 1, "new Qubit('+').nqubit = 1")
  })

  QUnit.test(".size should return size", (assert) => {
    assert.equal(qubit.size, 2, "new Qubit('+').size = 2")
  })

  QUnit.test(".toString() should return string", (assert) => {
    assert.equal(
      qubit.toString(),
      "[[0.7071067811865475], [0.7071067811865475]]",
      "new Qubit('+').toString() = [[0.7071067811865475], [0.7071067811865475]]",
    )
  })
})

QUnit.module("new Qubit('-')", (hooks) => {
  let qubit: Qubit

  hooks.beforeEach(() => {
    qubit = new Qubit("-")
  })

  QUnit.test("should convert to bra", (assert) => {
    assert.deepEqual(
      qubit.bra,
      divide(matrix([[1, -1]]), sqrt(2)),
      "new Qubit('-').bra = <-|",
    )
  })

  QUnit.test("should convert to ket", (assert) => {
    assert.deepEqual(
      qubit.ket,
      divide(matrix([[1], [-1]]), sqrt(2)),
      "new Qubit('-').ket = |->",
    )
  })

  QUnit.test(".nqubit should return nqubit", (assert) => {
    assert.equal(qubit.nqubit, 1, "new Qubit('-').nqubit = 1")
  })

  QUnit.test(".size should return size", (assert) => {
    assert.equal(qubit.size, 2, "new Qubit('-').size = 2")
  })

  QUnit.test(".toString() should return string", (assert) => {
    assert.equal(
      qubit.toString(),
      "[[0.7071067811865475], [-0.7071067811865475]]",
      "new Qubit('-').toString() = [[0.7071067811865475], [-0.7071067811865475]]",
    )
  })
})

import { complex } from "mathjs"

QUnit.module("new Qubit('i')", (hooks) => {
  let qubit: Qubit

  hooks.beforeEach(() => {
    qubit = new Qubit("i")
  })

  QUnit.test("should convert to bra", (assert) => {
    assert.deepEqual(
      qubit.bra,
      divide(matrix([[1, (complex(0, -1) as unknown) as number]]), sqrt(2)),
      "new Qubit('i').bra = <i|",
    )
  })

  QUnit.test("should convert to ket", (assert) => {
    assert.deepEqual(
      qubit.ket,
      divide(matrix([[1], [(complex(0, 1) as unknown) as number]]), sqrt(2)),
      "new Qubit('i').ket = |i>",
    )
  })

  QUnit.test(".nqubit should return nqubit", (assert) => {
    assert.equal(qubit.nqubit, 1, "new Qubit('i').nqubit = 1")
  })

  QUnit.test(".size should return size", (assert) => {
    assert.equal(qubit.size, 2, "new Qubit('i').size = 2")
  })

  QUnit.test(".toString() should return string", (assert) => {
    assert.equal(
      qubit.toString(),
      "[[0.7071067811865475], [0.7071067811865475i]]",
      "new Qubit('i').toString() = [[0.7071067811865475], [0.7071067811865475i]]",
    )
  })
})

QUnit.module("new Qubit('-i')", (hooks) => {
  let qubit: Qubit

  hooks.beforeEach(() => {
    qubit = new Qubit("-i")
  })

  QUnit.test("should convert to bra", (assert) => {
    assert.deepEqual(
      qubit.bra,
      divide(matrix([[1, (complex(0, 1) as unknown) as number]]), sqrt(2)),
      "new Qubit('-i').bra = <-i|",
    )
  })

  QUnit.test("should convert to ket", (assert) => {
    assert.deepEqual(
      qubit.ket,
      divide(matrix([[1], [(complex(0, -1) as unknown) as number]]), sqrt(2)),
      "new Qubit('-i').ket = |-i>",
    )
  })

  QUnit.test(".nqubit should return nqubit", (assert) => {
    assert.equal(qubit.nqubit, 1, "new Qubit('-i').nqubit = 1")
  })

  QUnit.test(".size should return size", (assert) => {
    assert.equal(qubit.size, 2, "new Qubit('-i').size = 2")
  })

  QUnit.test(".toString() should return string", (assert) => {
    assert.equal(
      qubit.toString(),
      "[[0.7071067811865475], [-0.7071067811865475i]]",
      "new Qubit('-i').toString() = [[0.7071067811865475], [-0.7071067811865475i]]",
    )
  })
})

QUnit.module("new Qubit('00')", (hooks) => {
  let qubit: Qubit

  hooks.beforeEach(() => {
    qubit = new Qubit("00")
  })

  QUnit.test("should convert to bra", (assert) => {
    assert.deepEqual(
      qubit.bra,
      kron(matrix([[1, 0]]), matrix([[1, 0]])),
      "new Qubit('00').bra = <00|",
    )
  })

  QUnit.test("should convert to ket", (assert) => {
    assert.deepEqual(
      qubit.ket,
      kron(matrix([[1], [0]]), matrix([[1], [0]])),
      "new Qubit('00').ket = |00>",
    )
  })

  QUnit.test(".nqubit should return nqubit", (assert) => {
    assert.equal(qubit.nqubit, 2, "new Qubit('00').nqubit = 2")
  })

  QUnit.test(".size should return size", (assert) => {
    assert.equal(qubit.size, 4, "new Qubit('00').size = 4")
  })

  QUnit.test(".toString() should return string", (assert) => {
    assert.equal(
      qubit.toString(),
      "[[1], [0], [0], [0]]",
      "new Qubit('00').toString() = [[1], [0], [0], [0]]",
    )
  })
})
