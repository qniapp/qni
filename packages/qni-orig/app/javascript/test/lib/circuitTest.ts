/* eslint-env qunit */

import { Circuit } from "lib/circuit"
import { Matrix } from "mathjs"
import { Qubit } from "lib/qubit"
import { i } from "mathjs"
import { multiply, divide } from "mathjs"
import { pi, e } from "mathjs"
import { pow } from "mathjs"
import { round } from "mathjs"

QUnit.module("Circuit", () => {
  let circuit: Circuit

  QUnit.module("new Circuit('0')", (hooks) => {
    hooks.beforeEach(() => {
      circuit = new Circuit("0")
    })

    QUnit.module(".write", () => {
      QUnit.test(".write(0) should be |0>", (assert) => {
        assert.deepEqual(circuit.write(0).state, new Qubit("0"))
      })

      QUnit.test(".write(0, 0) should be |0>", (assert) => {
        assert.deepEqual(circuit.write(0, 0).state, new Qubit("0"))
      })

      QUnit.test(".write(1) should be |1>", (assert) => {
        assert.deepEqual(circuit.write(1).state, new Qubit("1"))
      })

      QUnit.test(".write(1, 0) should be |1>", (assert) => {
        assert.deepEqual(circuit.write(1, 0).state, new Qubit("1"))
      })

      QUnit.test(".write({ 0: 0 }) should be |0>", (assert) => {
        assert.deepEqual(circuit.write({ 0: 0 }).state, new Qubit("0"))
      })

      QUnit.test(".write({ 0: 1 }) should be |1>", (assert) => {
        assert.deepEqual(circuit.write({ 0: 1 }).state, new Qubit("1"))
      })

      QUnit.test(".write(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write(2)
        }, new Error("Invalid value: 2"))
      })

      QUnit.test(".write(0, -1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write(0, -1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".write(0, 1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write(0, 1)
        }, new Error("Invalid targets: 1"))
      })

      QUnit.test(".write({ -1: 0 }) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write({ "-1": 0 })
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".write({ 1: 0 }) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write({ 1: 0 })
        }, new Error("Invalid targets: 1"))
      })

      QUnit.test(".write({ 0: 2 }) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write({ 0: 2 })
        }, new Error("Invalid value: 2"))
      })
    })

    QUnit.module(".read", () => {
      QUnit.test(".read() should be |0>", (assert) => {
        const result = circuit.read()

        assert.deepEqual(result.circuit.state, new Qubit("0"))
        assert.deepEqual(result.bits, { 0: 0 })
      })

      QUnit.test(".read(0) should be |0>", (assert) => {
        const result = circuit.read(0)

        assert.deepEqual(result.circuit.state, new Qubit("0"))
        assert.deepEqual(result.bits, { 0: 0 })
      })

      QUnit.test(".read(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".read(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".i", () => {
      QUnit.test(".i() should be |0>", (assert) => {
        assert.deepEqual(circuit.i().state, new Qubit("0"))
      })

      QUnit.test(".i(0) should be |0>", (assert) => {
        assert.deepEqual(circuit.i(0).state, new Qubit("0"))
      })

      QUnit.test(".i(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".i(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".x", () => {
      QUnit.test(".x() should be |1>", (assert) => {
        assert.deepEqual(circuit.x().state, new Qubit("1"))
      })

      QUnit.test(".x(0) should be |1>", (assert) => {
        assert.deepEqual(circuit.x(0).state, new Qubit("1"))
      })

      QUnit.test(".x(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".x(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".h", () => {
      QUnit.test(".h() should be |+>", (assert) => {
        assert.deepEqual(circuit.h().state, new Qubit("+"))
      })

      QUnit.test(".h(0) should be |+>", (assert) => {
        assert.deepEqual(circuit.h(0).state, new Qubit("+"))
      })

      QUnit.test(".h(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".h(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".phase", () => {
      QUnit.test(".phase('pi') should be |0>", (assert) => {
        assert.equal(
          circuit.phase("pi").state.toString(),
          new Qubit("0").toString(),
        )
      })

      QUnit.test(".phase('pi', 0) should be |0>", (assert) => {
        assert.equal(
          circuit.phase("pi", 0).state.toString(),
          new Qubit("0").toString(),
        )
      })

      QUnit.test(".phase('pi', -1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", -1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".phase('pi', 1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", 1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".rnot", () => {
      QUnit.test(".rnot() should be .h().phase('-pi/2').h()", (assert) => {
        assert.equal(
          circuit.rnot().state.matrix.toString(),
          round(circuit.h().phase("-pi/2").h().state.matrix, 5).toString(),
        )
      })

      QUnit.test(".rnot(0) should be .h().phase('-pi/2').h()", (assert) => {
        assert.equal(
          circuit.rnot(0).state.matrix.toString(),
          round(circuit.h().phase("-pi/2").h().state.matrix, 5).toString(),
        )
      })

      QUnit.test(".rnot(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".rnot(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(1)
        }, new Error("Invalid targets: 1"))
      })
    })
  })

  QUnit.module("new Circuit('1')", (hooks) => {
    hooks.beforeEach(() => {
      circuit = new Circuit("1")
    })

    QUnit.module(".write", () => {
      QUnit.test(".write(0) should be |0>", (assert) => {
        assert.deepEqual(circuit.write(0).state, new Qubit("0"))
      })

      QUnit.test(".write(0, 0) should be |0>", (assert) => {
        assert.deepEqual(circuit.write(0, 0).state, new Qubit("0"))
      })

      QUnit.test(".write(1) should be |1>", (assert) => {
        assert.deepEqual(circuit.write(1).state, new Qubit("1"))
      })

      QUnit.test(".write(1, 0) should be |1>", (assert) => {
        assert.deepEqual(circuit.write(1, 0).state, new Qubit("1"))
      })

      QUnit.test(".write({ 0: 0 }) should be |0>", (assert) => {
        assert.deepEqual(circuit.write({ 0: 0 }).state, new Qubit("0"))
      })

      QUnit.test(".write({ 0: 1 }) should be |1>", (assert) => {
        assert.deepEqual(circuit.write({ 0: 1 }).state, new Qubit("1"))
      })

      QUnit.test(".write(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write(2)
        }, new Error("Invalid value: 2"))
      })

      QUnit.test(".write(0, -1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write(0, -1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".write(0, 1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write(0, 1)
        }, new Error("Invalid targets: 1"))
      })

      QUnit.test(".write({ -1: 0 }) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write({ "-1": 0 })
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".write({ 1: 0 }) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write({ 1: 0 })
        }, new Error("Invalid targets: 1"))
      })

      QUnit.test(".write({ 0: 2 }) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write({ 0: 2 })
        }, new Error("Invalid value: 2"))
      })
    })

    QUnit.module(".read", () => {
      QUnit.test(".read() should be |1>", (assert) => {
        const result = circuit.read()

        assert.deepEqual(result.circuit.state, new Qubit("1"))
        assert.deepEqual(result.bits, { 0: 1 })
      })

      QUnit.test(".read(0) should be |1>", (assert) => {
        const result = circuit.read(0)

        assert.deepEqual(result.circuit.state, new Qubit("1"))
        assert.deepEqual(result.bits, { 0: 1 })
      })

      QUnit.test(".read(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".read(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".i", () => {
      QUnit.test(".i() should be |1>", (assert) => {
        assert.deepEqual(circuit.i().state, new Qubit("1"))
      })

      QUnit.test(".i(0) should be |1>", (assert) => {
        assert.deepEqual(circuit.i(0).state, new Qubit("1"))
      })

      QUnit.test(".i(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".i(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".x", () => {
      QUnit.test(".x() should be |0>", (assert) => {
        assert.deepEqual(circuit.x().state, new Qubit("0"))
      })

      QUnit.test(".x(0) should be |0>", (assert) => {
        assert.deepEqual(circuit.x(0).state, new Qubit("0"))
      })

      QUnit.test(".x(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".x(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".h", () => {
      QUnit.test(".h() should be |->", (assert) => {
        assert.deepEqual(circuit.h().state, new Qubit("-"))
      })

      QUnit.test(".h(0) should be |->", (assert) => {
        assert.deepEqual(circuit.h(0).state, new Qubit("-"))
      })

      QUnit.test(".h(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".h(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".phase", () => {
      QUnit.test(".phase('pi') should be |1> (phase = 'pi')", (assert) => {
        assert.deepEqual(circuit.phase("pi").read().bits, { 0: 1 })
      })

      QUnit.test(".phase('pi', 0) should be |1> (phase = 'pi')", (assert) => {
        assert.deepEqual(circuit.phase("pi", 0).read().bits, { 0: 1 })
      })

      QUnit.test(".phase('pi', -1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", -1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".phase('pi', 1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", 1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".rnot", () => {
      QUnit.test(".rnot() should be .h().phase('-pi/2').h()", (assert) => {
        assert.equal(
          circuit.rnot().state.matrix.toString(),
          round(circuit.h().phase("-pi/2").h().state.matrix, 5).toString(),
        )
      })

      QUnit.test(".rnot(0) should be .h().phase('-pi/2').h()", (assert) => {
        assert.equal(
          circuit.rnot(0).state.matrix.toString(),
          round(circuit.h().phase("-pi/2").h().state.matrix, 5).toString(),
        )
      })

      QUnit.test(".rnot(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".rnot(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(1)
        }, new Error("Invalid targets: 1"))
      })
    })
  })

  QUnit.module("new Circuit('+')", (hooks) => {
    hooks.beforeEach(() => {
      circuit = new Circuit("+")
    })

    QUnit.module(".read", () => {
      QUnit.test(".read() should be |0> or |1>", (assert) => {
        const result = circuit.read()

        assert.ok(
          round(result.circuit.state.matrix, 5).toString() ==
            new Qubit("0").toString() ||
            round(result.circuit.state.matrix, 5).toString() ==
              new Qubit("1").toString(),
        )
        assert.equal(Object.keys(result.bits).length, 1)
        assert.ok(result.bits[0] == 0 || result.bits[0] == 1)
      })

      QUnit.test(".read(0) should be |0> or |1>", (assert) => {
        const result = circuit.read(0)

        assert.ok(
          round(result.circuit.state.matrix, 5).toString() ==
            new Qubit("0").toString() ||
            round(result.circuit.state.matrix, 5).toString() ==
              new Qubit("1").toString(),
        )
        assert.equal(Object.keys(result.bits).length, 1)
        assert.ok(result.bits[0] == 0 || result.bits[0] == 1)
      })

      QUnit.test(".read(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".read(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".i", () => {
      QUnit.test(".i() should be |+>", (assert) => {
        assert.deepEqual(circuit.i().state, new Qubit("+"))
      })

      QUnit.test(".i(0) should be |+>", (assert) => {
        assert.deepEqual(circuit.i(0).state, new Qubit("+"))
      })

      QUnit.test(".i(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".i(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".x", () => {
      QUnit.test(".x() should be |+>", (assert) => {
        assert.deepEqual(circuit.x().state, new Qubit("+"))
      })

      QUnit.test(".x(0) should be |+>", (assert) => {
        assert.deepEqual(circuit.x(0).state, new Qubit("+"))
      })

      QUnit.test(".x(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".x(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".h", () => {
      QUnit.test(".h() should be |0>", (assert) => {
        assert.deepEqual(
          round(circuit.h().state.matrix, 5),
          new Qubit("0").matrix,
        )
      })

      QUnit.test(".h(0) should be |0>", (assert) => {
        assert.deepEqual(
          round(circuit.h(0).state.matrix, 5),
          new Qubit("0").matrix,
        )
      })

      QUnit.test(".h(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".h(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".phase", () => {
      QUnit.test(".phase('pi') should be |->", (assert) => {
        assert.equal(
          round(circuit.phase("pi").state.matrix, 5).toString(),
          round(new Qubit("-").matrix, 5).toString(),
        )
      })

      QUnit.test(".phase('pi', 0) should be |->", (assert) => {
        assert.equal(
          round(circuit.phase("pi", 0).state.matrix, 5).toString(),
          round(new Qubit("-").matrix, 5).toString(),
        )
      })

      QUnit.test(".phase('pi', -1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", -1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".phase('pi', 1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", 1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".rnot", () => {
      QUnit.test(".rnot() should be .h().phase('-pi/2').h()", (assert) => {
        assert.equal(
          round(circuit.rnot().state.matrix, 5).toString(),
          round(circuit.h().phase("-pi/2").h().state.matrix, 5).toString(),
        )
      })

      QUnit.test(".rnot(0) should be .h().phase('-pi/2').h()", (assert) => {
        assert.equal(
          round(circuit.rnot(0).state.matrix, 5).toString(),
          round(circuit.h().phase("-pi/2").h().state.matrix, 5).toString(),
        )
      })

      QUnit.test(".rnot(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".rnot(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(1)
        }, new Error("Invalid targets: 1"))
      })
    })
  })

  QUnit.module("new Circuit('-')", (hooks) => {
    hooks.beforeEach(() => {
      circuit = new Circuit("-")
    })

    QUnit.module(".read", () => {
      QUnit.test(".read() should be |0> or |1>", (assert) => {
        const result = circuit.read()

        assert.ok(
          round(result.circuit.state.matrix, 5).toString() ==
            new Qubit("0").toString() ||
            round(result.circuit.state.matrix, 5).toString() == "[[0], [-1]]",
        )
        assert.equal(Object.keys(result.bits).length, 1)
        assert.ok(result.bits[0] == 0 || result.bits[0] == 1)
      })

      QUnit.test(".read(0) should be |0> or |1>", (assert) => {
        const result = circuit.read(0)

        assert.ok(
          round(result.circuit.state.matrix, 5).toString() ==
            new Qubit("0").toString() ||
            round(result.circuit.state.matrix, 5).toString() == "[[0], [-1]]",
        )
        assert.equal(Object.keys(result.bits).length, 1)
        assert.ok(result.bits[0] == 0 || result.bits[0] == 1)
      })

      QUnit.test(".read(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".read(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".i", () => {
      QUnit.test(".i() should be |->", (assert) => {
        assert.deepEqual(circuit.i().state, new Qubit("-"))
      })

      QUnit.test(".i(0) should be |->", (assert) => {
        assert.deepEqual(circuit.i(0).state, new Qubit("-"))
      })

      QUnit.test(".i(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".i(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".x", () => {
      QUnit.test(".x() should be -|->", (assert) => {
        assert.equal(
          circuit.x().state.toString(),
          multiply(-1, new Qubit("-").matrix).toString(),
        )
      })

      QUnit.test(".x(0) should be -|->", (assert) => {
        assert.equal(
          circuit.x(0).state.toString(),
          multiply(-1, new Qubit("-").matrix).toString(),
        )
      })

      QUnit.test(".x(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".x(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".h", () => {
      QUnit.test(".h() should be |1>", (assert) => {
        assert.deepEqual(
          round(circuit.h().state.matrix, 5),
          new Qubit("1").matrix,
        )
      })

      QUnit.test(".h(0) should be |1>", (assert) => {
        assert.deepEqual(
          round(circuit.h(0).state.matrix, 5),
          new Qubit("1").matrix,
        )
      })

      QUnit.test(".h(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".h(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".phase", () => {
      QUnit.test(".phase('pi') should be |+>", (assert) => {
        assert.equal(
          round(circuit.phase("pi").state.matrix, 5).toString(),
          round(new Qubit("+").matrix, 5).toString(),
        )
      })

      QUnit.test(".phase('pi', 0) should be |+>", (assert) => {
        assert.equal(
          round(circuit.phase("pi", 0).state.matrix, 5).toString(),
          round(new Qubit("+").matrix, 5).toString(),
        )
      })

      QUnit.test(".phase('pi', -1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", -1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".phase('pi', 1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", 1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".rnot", () => {
      QUnit.test(".rnot() should be .h().phase('-pi/2').h()", (assert) => {
        assert.equal(
          round(circuit.rnot().state.matrix, 5).toString(),
          round(circuit.h().phase("-pi/2").h().state.matrix, 5).toString(),
        )
      })

      QUnit.test(".rnot(0) should be .h().phase('-pi/2').h()", (assert) => {
        assert.equal(
          round(circuit.rnot(0).state.matrix, 5).toString(),
          round(circuit.h().phase("-pi/2").h().state.matrix, 5).toString(),
        )
      })

      QUnit.test(".rnot(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".rnot(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(1)
        }, new Error("Invalid targets: 1"))
      })
    })
  })

  QUnit.module("new Circuit('i')", (hooks) => {
    hooks.beforeEach(() => {
      circuit = new Circuit("i")
    })

    QUnit.module(".read", () => {
      QUnit.test(".read() should be |0> or |1>", (assert) => {
        const result = circuit.read()

        assert.ok(
          round(result.circuit.state.matrix, 5).toString() ==
            new Qubit("0").toString() ||
            round(result.circuit.state.matrix, 5).toString() == "[[0], [i]]",
        )
        assert.equal(Object.keys(result.bits).length, 1)
        assert.ok(result.bits[0] == 0 || result.bits[0] == 1)
      })

      QUnit.test(".read(0) should be |0> or |1>", (assert) => {
        const result = circuit.read(0)

        assert.ok(
          round(result.circuit.state.matrix, 5).toString() ==
            new Qubit("0").toString() ||
            round(result.circuit.state.matrix, 5).toString() == "[[0], [i]]",
        )
        assert.equal(Object.keys(result.bits).length, 1)
        assert.ok(result.bits[0] == 0 || result.bits[0] == 1)
      })

      QUnit.test(".read(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".read(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".i", () => {
      QUnit.test(".i() should be |i>", (assert) => {
        assert.deepEqual(circuit.i().state, new Qubit("i"))
      })

      QUnit.test(".i(0) should be |i>", (assert) => {
        assert.deepEqual(circuit.i(0).state, new Qubit("i"))
      })

      QUnit.test(".i(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".i(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".x", () => {
      QUnit.test(".x() should be i|-i>", (assert) => {
        assert.equal(
          circuit.x().state.toString(),
          multiply(i, new Qubit("-i").matrix).toString(),
        )
      })

      QUnit.test(".x(0) should be i|-i>", (assert) => {
        assert.equal(
          circuit.x(0).state.toString(),
          multiply(i, new Qubit("-i").matrix).toString(),
        )
      })

      QUnit.test(".x(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".x(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".h", () => {
      QUnit.test(".h() should be e^{iπ/4}|-i>", (assert) => {
        assert.equal(
          round(circuit.h().state.matrix, 5).toString(),
          round(
            multiply(
              pow(e, divide(multiply(i, pi), 4)),
              new Qubit("-i").matrix,
            ) as Matrix,
            5,
          ).toString(),
        )
      })

      QUnit.test(".h(0) should be e^{iπ/4}|-i>", (assert) => {
        assert.equal(
          round(circuit.h(0).state.matrix, 5).toString(),
          round(
            multiply(
              pow(e, divide(multiply(i, pi), 4)),
              new Qubit("-i").matrix,
            ) as Matrix,
            5,
          ).toString(),
        )
      })

      QUnit.test(".h(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".h(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".phase", () => {
      QUnit.test(".phase('pi') should be |-i>", (assert) => {
        assert.equal(
          round(circuit.phase("pi").state.matrix, 5).toString(),
          round(new Qubit("-i").matrix, 5).toString(),
        )
      })

      QUnit.test(".phase('pi', 0) should be |-i>", (assert) => {
        assert.equal(
          round(circuit.phase("pi", 0).state.matrix, 5).toString(),
          round(new Qubit("-i").matrix, 5).toString(),
        )
      })

      QUnit.test(".phase('pi', -1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", -1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".phase('pi', 1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", 1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".rnot", () => {
      QUnit.test(".rnot() should be .h().phase('-pi/2').h()", (assert) => {
        assert.equal(
          round(circuit.rnot().state.matrix, 5).toString(),
          round(circuit.h().phase("-pi/2").h().state.matrix, 5).toString(),
        )
      })

      QUnit.test(".rnot(0) should be .h().phase('-pi/2').h()", (assert) => {
        assert.equal(
          round(circuit.rnot(0).state.matrix, 5).toString(),
          round(circuit.h().phase("-pi/2").h().state.matrix, 5).toString(),
        )
      })

      QUnit.test(".rnot(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".rnot(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(1)
        }, new Error("Invalid targets: 1"))
      })
    })
  })

  QUnit.module("new Circuit('-i')", (hooks) => {
    hooks.beforeEach(() => {
      circuit = new Circuit("-i")
    })

    QUnit.module(".read", () => {
      QUnit.test(".read() should be |0> or |1>", (assert) => {
        const result = circuit.read()

        assert.ok(
          round(result.circuit.state.matrix, 5).toString() ==
            new Qubit("0").toString() ||
            round(result.circuit.state.matrix, 5).toString() == "[[0], [-i]]",
        )
        assert.equal(Object.keys(result.bits).length, 1)
        assert.ok(result.bits[0] == 0 || result.bits[0] == 1)
      })

      QUnit.test(".read(0) should be |0> or |1>", (assert) => {
        const result = circuit.read(0)

        assert.ok(
          round(result.circuit.state.matrix, 5).toString() ==
            new Qubit("0").toString() ||
            round(result.circuit.state.matrix, 5).toString() == "[[0], [-i]]",
        )
        assert.equal(Object.keys(result.bits).length, 1)
        assert.ok(result.bits[0] == 0 || result.bits[0] == 1)
      })

      QUnit.test(".read(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".read(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".i", () => {
      QUnit.test(".i() should be |-i>", (assert) => {
        assert.deepEqual(circuit.i().state, new Qubit("-i"))
      })

      QUnit.test(".i(0) should be |-i>", (assert) => {
        assert.deepEqual(circuit.i(0).state, new Qubit("-i"))
      })

      QUnit.test(".i(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".i(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".x", () => {
      QUnit.test(".x() should be -i|i>", (assert) => {
        assert.equal(
          circuit.x().state.toString(),
          multiply(-1, multiply(i, new Qubit("i").matrix)).toString(),
        )
      })

      QUnit.test(".x(0) should be -i|i>", (assert) => {
        assert.equal(
          circuit.x(0).state.toString(),
          multiply(-1, multiply(i, new Qubit("i").matrix)).toString(),
        )
      })

      QUnit.test(".x(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".x(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".h", () => {
      QUnit.test(".h() should be e^{-iπ/4}|i>", (assert) => {
        assert.equal(
          round(circuit.h().state.matrix, 5).toString(),
          round(
            multiply(
              pow(e, divide(multiply(i, pi), -4)),
              new Qubit("i").matrix,
            ) as Matrix,
            5,
          ).toString(),
        )
      })

      QUnit.test(".h(0) should be e^{-iπ/4}|i>", (assert) => {
        assert.equal(
          round(circuit.h(0).state.matrix, 5).toString(),
          round(
            multiply(
              pow(e, divide(multiply(i, pi), -4)),
              new Qubit("i").matrix,
            ) as Matrix,
            5,
          ).toString(),
        )
      })

      QUnit.test(".h(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".h(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".phase", () => {
      QUnit.test(".phase('pi') should be |i>", (assert) => {
        assert.equal(
          round(circuit.phase("pi").state.matrix, 5).toString(),
          round(new Qubit("i").matrix, 5).toString(),
        )
      })

      QUnit.test(".phase('pi', 0) should be |i>", (assert) => {
        assert.equal(
          round(circuit.phase("pi", 0).state.matrix, 5).toString(),
          round(new Qubit("i").matrix, 5).toString(),
        )
      })

      QUnit.test(".phase('pi', -1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", -1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".phase('pi', 1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", 1)
        }, new Error("Invalid targets: 1"))
      })
    })

    QUnit.module(".rnot", () => {
      QUnit.test(".rnot() should be .h().phase('-pi/2').h()", (assert) => {
        assert.equal(
          round(circuit.rnot().state.matrix, 5).toString(),
          round(circuit.h().phase("-pi/2").h().state.matrix, 5).toString(),
        )
      })

      QUnit.test(".rnot(0) should be .h().phase('-pi/2').h()", (assert) => {
        assert.equal(
          round(circuit.rnot(0).state.matrix, 5).toString(),
          round(circuit.h().phase("-pi/2").h().state.matrix, 5).toString(),
        )
      })

      QUnit.test(".rnot(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".rnot(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(1)
        }, new Error("Invalid targets: 1"))
      })
    })
  })

  QUnit.module("new Circuit('00')", (hooks) => {
    hooks.beforeEach(() => {
      circuit = new Circuit("00")
    })

    QUnit.module(".write", () => {
      QUnit.test(".write(0) should be |00>", (assert) => {
        assert.equal(
          circuit.write(0).state.toString(),
          new Qubit("00").toString(),
        )
      })

      QUnit.test(".write(0, 0) should be |00>", (assert) => {
        assert.equal(
          circuit.write(0, 0).state.toString(),
          new Qubit("00").toString(),
        )
      })

      QUnit.test(".write(1) should be |11>", (assert) => {
        assert.equal(
          circuit.write(1).state.toString(),
          new Qubit("11").toString(),
        )
      })

      QUnit.test(".write(1, 0) should be |01>", (assert) => {
        assert.equal(
          circuit.write(1, 0).state.toString(),
          new Qubit("01").toString(),
        )
      })

      QUnit.test(".write({ 0: 0 }) should be |00>", (assert) => {
        assert.equal(
          circuit.write({ 0: 0 }).state.toString(),
          new Qubit("00").toString(),
        )
      })

      QUnit.test(".write({ 0: 1 }) should be |01>", (assert) => {
        assert.equal(
          circuit.write({ 0: 1 }).state.toString(),
          new Qubit("01").toString(),
        )
      })

      QUnit.test(".write(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write(2)
        }, new Error("Invalid value: 2"))
      })

      QUnit.test(".write(0, -1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write(0, -1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".write(0, 2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write(0, 2)
        }, new Error("Invalid targets: 2"))
      })

      QUnit.test(".write({ -1: 0 }) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write({ "-1": 0 })
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".write({ 2: 0 }) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write({ 2: 0 })
        }, new Error("Invalid targets: 2"))
      })

      QUnit.test(".write({ 0: 2 }) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write({ 0: 2 })
        }, new Error("Invalid value: 2"))
      })
    })

    QUnit.module(".read", () => {
      QUnit.test(".read() should be |00>", (assert) => {
        const result = circuit.read()

        assert.equal(
          result.circuit.state.toString(),
          new Qubit("00").toString(),
        )
        assert.deepEqual(result.bits, { 0: 0, 1: 0 })
      })

      QUnit.test(".read(0) should be |0>", (assert) => {
        const result = circuit.read(0)

        assert.equal(
          result.circuit.state.toString(),
          new Qubit("00").toString(),
        )
        assert.deepEqual(result.bits, { 0: 0 })
      })

      QUnit.test(".read(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".read(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(2)
        }, new Error("Invalid targets: 2"))
      })
    })

    QUnit.module(".i", () => {
      QUnit.test(".i() should be |00>", (assert) => {
        assert.deepEqual(circuit.i().state, new Qubit("00"))
      })

      QUnit.test(".i(0) should be |00>", (assert) => {
        assert.deepEqual(circuit.i(0).state, new Qubit("00"))
      })

      QUnit.test(".i(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".i(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(2)
        }, new Error("Invalid targets: 2"))
      })
    })

    QUnit.module(".x", () => {
      QUnit.test(".x() should be |11>", (assert) => {
        assert.equal(circuit.x().state.toString(), new Qubit("11").toString())
      })

      QUnit.test(".x(0) should be |01>", (assert) => {
        assert.equal(circuit.x(0).state.toString(), new Qubit("01").toString())
      })

      QUnit.test(".x(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".x(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(2)
        }, new Error("Invalid targets: 2"))
      })
    })

    QUnit.module(".h", () => {
      QUnit.test(".h() should be |++>", (assert) => {
        assert.equal(circuit.h().state.toString(), new Qubit("++").toString())
      })

      QUnit.test(".h(0) should be |0+>", (assert) => {
        assert.equal(circuit.h(0).state.toString(), new Qubit("0+").toString())
      })

      QUnit.test(".h(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".h(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(2)
        }, new Error("Invalid targets: 2"))
      })
    })

    QUnit.module(".phase", () => {
      QUnit.test(".phase('pi') should be |00>", (assert) => {
        assert.equal(
          circuit.phase("pi").state.toString(),
          new Qubit("00").toString(),
        )
      })

      QUnit.test(".phase('pi', 0) should be |00>", (assert) => {
        assert.equal(
          circuit.phase("pi", 0).state.toString(),
          new Qubit("00").toString(),
        )
      })

      QUnit.test(".phase('pi', -1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", -1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".phase('pi', 2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", 2)
        }, new Error("Invalid targets: 2"))
      })
    })

    QUnit.module(".rnot", () => {
      QUnit.test(".rnot() should be .h().phase('-pi/2').h()", (assert) => {
        assert.equal(
          circuit.rnot().state.matrix.toString(),
          round(circuit.h().phase("-pi/2").h().state.matrix, 5).toString(),
        )
      })

      QUnit.test(
        ".rnot(0) should be .h(0).phase('-pi/2', 0).h(0)",
        (assert) => {
          assert.equal(
            circuit.rnot(0).state.matrix.toString(),
            round(
              circuit.h(0).phase("-pi/2", 0).h(0).state.matrix,
              5,
            ).toString(),
          )
        },
      )

      QUnit.test(".rnot(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".rnot(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(2)
        }, new Error("Invalid targets: 2"))
      })
    })

    QUnit.module(".cnot()", () => {
      QUnit.test(".cnot(0, [1]) should be |00>", (assert) => {
        assert.equal(
          circuit.cnot(0, [1]).state.toString(),
          new Qubit("00").toString(),
        )
      })

      QUnit.test(".cnot(-1, [1]) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.cnot(-1, [1])
        }, new Error("Invalid controls: -1"))
      })

      QUnit.test(".cnot(2, [1]) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.cnot(2, [1])
        }, new Error("Invalid controls: 2"))
      })

      QUnit.test(".cnot(0, [-1]) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.cnot(0, [-1])
        }, new Error("Invalid targets: -1"))
      })
    })

    QUnit.module(".cphase()", () => {
      QUnit.test(".cphase('pi', [0, 1]) should be |00>", (assert) => {
        assert.equal(
          circuit.cphase("pi", [0, 1]).state.toString(),
          new Qubit("00").toString(),
        )
      })

      QUnit.test(".cphase('pi', [-1, 1]) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.cphase("pi", [-1, 1])
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".cphase('pi', [2, 1]) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.cphase("pi", [2, 1])
        }, new Error("Invalid targets: 2"))
      })
    })
  })

  QUnit.module("new Circuit('11')", (hooks) => {
    hooks.beforeEach(() => {
      circuit = new Circuit("11")
    })

    QUnit.module(".write", () => {
      QUnit.test(".write(0) should be |00>", (assert) => {
        assert.equal(
          circuit.write(0).state.toString(),
          new Qubit("00").toString(),
        )
      })

      QUnit.test(".write(0, 0) should be |10>", (assert) => {
        assert.equal(
          circuit.write(0, 0).state.toString(),
          new Qubit("10").toString(),
        )
      })

      QUnit.test(".write(1) should be |11>", (assert) => {
        assert.equal(
          circuit.write(1).state.toString(),
          new Qubit("11").toString(),
        )
      })

      QUnit.test(".write(1, 0) should be |11>", (assert) => {
        assert.equal(
          circuit.write(1, 0).state.toString(),
          new Qubit("11").toString(),
        )
      })

      QUnit.test(".write({ 0: 0 }) should be |10>", (assert) => {
        assert.equal(
          circuit.write({ 0: 0 }).state.toString(),
          new Qubit("10").toString(),
        )
      })

      QUnit.test(".write({ 0: 1 }) should be |11>", (assert) => {
        assert.equal(
          circuit.write({ 0: 1 }).state.toString(),
          new Qubit("11").toString(),
        )
      })

      QUnit.test(".write(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write(2)
        }, new Error("Invalid value: 2"))
      })

      QUnit.test(".write(0, -1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write(0, -1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".write(0, 2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write(0, 2)
        }, new Error("Invalid targets: 2"))
      })

      QUnit.test(".write({ -1: 0 }) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write({ "-1": 0 })
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".write({ 2: 0 }) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write({ 2: 0 })
        }, new Error("Invalid targets: 2"))
      })

      QUnit.test(".write({ 0: 2 }) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.write({ 0: 2 })
        }, new Error("Invalid value: 2"))
      })
    })

    QUnit.module(".read", () => {
      QUnit.test(".read() should be |11>", (assert) => {
        const result = circuit.read()

        assert.equal(
          result.circuit.state.toString(),
          new Qubit("11").toString(),
        )
        assert.deepEqual(result.bits, { 0: 1, 1: 1 })
      })

      QUnit.test(".read(0) should be |11>", (assert) => {
        const result = circuit.read(0)

        assert.equal(
          result.circuit.state.toString(),
          new Qubit("11").toString(),
        )
        assert.deepEqual(result.bits, { 0: 1 })
      })

      QUnit.test(".read(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".read(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.read(2)
        }, new Error("Invalid targets: 2"))
      })
    })

    QUnit.module(".i", () => {
      QUnit.test(".i() should be |11>", (assert) => {
        assert.deepEqual(circuit.i().state, new Qubit("11"))
      })

      QUnit.test(".i(0) should be |11>", (assert) => {
        assert.deepEqual(circuit.i(0).state, new Qubit("11"))
      })

      QUnit.test(".i(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".i(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.i(2)
        }, new Error("Invalid targets: 2"))
      })
    })

    QUnit.module(".x", () => {
      QUnit.test(".x() should be |00>", (assert) => {
        assert.equal(circuit.x().state.toString(), new Qubit("00").toString())
      })

      QUnit.test(".x(0) should be |10>", (assert) => {
        assert.equal(circuit.x(0).state.toString(), new Qubit("10").toString())
      })

      QUnit.test(".x(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".x(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.x(2)
        }, new Error("Invalid targets: 2"))
      })
    })

    QUnit.module(".h", () => {
      QUnit.test(".h() should be |-->", (assert) => {
        assert.equal(circuit.h().state.toString(), new Qubit("--").toString())
      })

      QUnit.test(".h(0) should be |1->", (assert) => {
        assert.equal(circuit.h(0).state.toString(), new Qubit("1-").toString())
      })

      QUnit.test(".h(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".h(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.h(2)
        }, new Error("Invalid targets: 2"))
      })
    })

    QUnit.module(".phase", () => {
      QUnit.test(".phase('pi') should be |11>", (assert) => {
        assert.equal(
          round(circuit.phase("pi").state.matrix, 5).toString(),
          new Qubit("11").toString(),
        )
      })

      QUnit.test(".phase('pi', 0) should be -|11>", (assert) => {
        assert.equal(
          round(circuit.phase("pi", 0).state.matrix, 5).toString(),
          multiply(-1, new Qubit("11").matrix).toString(),
        )
      })

      QUnit.test(".phase('pi', -1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", -1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".phase('pi', 2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.phase("pi", 2)
        }, new Error("Invalid targets: 2"))
      })
    })

    QUnit.module(".rnot", () => {
      QUnit.test(".rnot() should be .h().phase('-pi/2').h()", (assert) => {
        assert.equal(
          circuit.rnot().state.matrix.toString(),
          round(circuit.h().phase("-pi/2").h().state.matrix, 5).toString(),
        )
      })

      QUnit.test(
        ".rnot(0) should be .h(0).phase('-pi/2', 0).h(0)",
        (assert) => {
          assert.equal(
            circuit.rnot(0).state.matrix.toString(),
            round(
              circuit.h(0).phase("-pi/2", 0).h(0).state.matrix,
              5,
            ).toString(),
          )
        },
      )

      QUnit.test(".rnot(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".rnot(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.rnot(2)
        }, new Error("Invalid targets: 2"))
      })
    })

    QUnit.module(".cnot()", () => {
      QUnit.test(".cnot(0, [1]) should be |01>", (assert) => {
        assert.equal(
          circuit.cnot(0, [1]).state.toString(),
          new Qubit("01").toString(),
        )
      })

      QUnit.test(".cnot(-1, [1]) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.cnot(-1, [1])
        }, new Error("Invalid controls: -1"))
      })

      QUnit.test(".cnot(2, [1]) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.cnot(2, [1])
        }, new Error("Invalid controls: 2"))
      })

      QUnit.test(".cnot(0, [-1]) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.cnot(0, [-1])
        }, new Error("Invalid targets: -1"))
      })
    })

    QUnit.module(".cphase()", () => {
      QUnit.test(".cphase('pi', [0, 1]) should be -|11>", (assert) => {
        assert.equal(
          round(circuit.cphase("pi", [0, 1]).state.matrix, 5).toString(),
          multiply(-1, new Qubit("11").matrix).toString(),
        )
      })

      QUnit.test(".cphase('pi', [-1, 1]) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.cphase("pi", [-1, 1])
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".cphase('pi', [2, 1]) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.cphase("pi", [2, 1])
        }, new Error("Invalid targets: 2"))
      })
    })
  })

  QUnit.module("new Circuit('01')", (hooks) => {
    hooks.beforeEach(() => {
      circuit = new Circuit("01")
    })

    QUnit.module(".swap()", () => {
      QUnit.test(".swap(0, 1) should be |10>", (assert) => {
        assert.equal(
          round(circuit.swap(0, 1).state.matrix, 5).toString(),
          new Qubit("10").matrix.toString(),
        )
      })

      QUnit.test(".swap(-1, 1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.swap(-1, 1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".swap(0, 2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.swap(0, 2)
        }, new Error("Invalid targets: 2"))
      })
    })

    QUnit.module(".down()", () => {
      QUnit.test(".down(0) should be |10>", (assert) => {
        assert.equal(
          round(circuit.down(0).state.matrix, 5).toString(),
          new Qubit("10").matrix.toString(),
        )
      })

      QUnit.test(".down(-1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.down(-1)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".down(1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.down(1)
        }, new Error("Invalid targets: 2"))
      })
    })

    QUnit.module(".up()", () => {
      QUnit.test(".up(1) should be |10>", (assert) => {
        assert.equal(
          round(circuit.up(1).state.matrix, 5).toString(),
          new Qubit("10").matrix.toString(),
        )
      })

      QUnit.test(".up(0) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.up(0)
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".up(2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.up(2)
        }, new Error("Invalid targets: 2"))
      })
    })
  })

  QUnit.module("new Circuit('010')", (hooks) => {
    hooks.beforeEach(() => {
      circuit = new Circuit("010")
    })

    QUnit.module(".ccnot()", () => {
      QUnit.test(".ccnot([0, 1], 2) should be |010>", (assert) => {
        assert.equal(
          round(circuit.ccnot([0, 1], 2).state.matrix, 5).toString(),
          new Qubit("010").matrix.toString(),
        )
      })

      QUnit.test(".ccnot([-1, 1], 2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.ccnot([-1, 1], 2)
        }, new Error("Invalid controls: -1"))
      })

      QUnit.test(".ccnot([0, 3], 2) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.ccnot([0, 3], 2)
        }, new Error("Invalid controls: 3"))
      })

      QUnit.test(".ccnot([0, 1], -1) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.ccnot([0, 1], -1)
        }, new Error("Invalid targets: -1"))
      })
    })
  })

  QUnit.module("new Circuit('011')", (hooks) => {
    hooks.beforeEach(() => {
      circuit = new Circuit("011")
    })

    QUnit.module(".ccnot()", () => {
      QUnit.test(".ccnot([0, 1], 2) should be |111>", (assert) => {
        assert.equal(
          round(circuit.ccnot([0, 1], 2).state.matrix, 5).toString(),
          new Qubit("111").matrix.toString(),
        )
      })
    })

    QUnit.module(".cswap()", () => {
      QUnit.test(".cswap(0, [1, 2]) should be |101>", (assert) => {
        assert.equal(
          round(circuit.cswap(0, [1, 2]).state.matrix, 5).toString(),
          new Qubit("101").matrix.toString(),
        )
      })

      QUnit.test(".cswap(2, [0, 1]) should be |011>", (assert) => {
        assert.equal(
          round(circuit.cswap(2, [0, 1]).state.matrix, 5).toString(),
          new Qubit("011").matrix.toString(),
        )
      })

      QUnit.test(".cswap(-1, [1, 2]) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.cswap(-1, [1, 2])
        }, new Error("Invalid controls: -1"))
      })

      QUnit.test(".cswap(3, [1, 2]) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.cswap(3, [1, 2])
        }, new Error("Invalid controls: 3"))
      })

      QUnit.test(".cswap(0, [-1, 1]) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.cswap(0, [-1, 1])
        }, new Error("Invalid targets: -1"))
      })

      QUnit.test(".cswap(0, [1, 3]) throws an Error", (assert) => {
        assert.throws(() => {
          circuit.cswap(0, [1, 3])
        }, new Error("Invalid targets: 3"))
      })
    })
  })
})
