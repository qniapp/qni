/* eslint-env qunit */

import { Matrix } from "mathjs"
import { Qubit } from "lib/simulator/qubit"
import { Simulator } from "lib/simulator"
import { i } from "mathjs"
import { multiply, divide } from "mathjs"
import { pi, e } from "mathjs"
import { pow } from "mathjs"
import { round } from "mathjs"

QUnit.module("Simulator", () => {
  QUnit.module(".write", () => {
    QUnit.test("|0>.write(0, 0) should be |0>", (assert) => {
      const simulator = new Simulator("0")
      assert.deepEqual(simulator.write(0, 0).state, new Qubit("0"))
    })

    QUnit.test("|0>.write(0, 1) should be |1>", (assert) => {
      const simulator = new Simulator("0")
      assert.deepEqual(simulator.write(1, 0).state, new Qubit("1"))
    })

    QUnit.test("|1>.write(0, 0) should be |0>", (assert) => {
      const simulator = new Simulator("1")
      assert.deepEqual(simulator.write(0, 0).state, new Qubit("0"))
    })

    QUnit.test("|1>.write(1, 0) should be |1>", (assert) => {
      const simulator = new Simulator("1")
      assert.deepEqual(simulator.write(1, 0).state, new Qubit("1"))
    })

    QUnit.test("|00>.write(0, 0, 1) should be |00>", (assert) => {
      const simulator = new Simulator("00")
      assert.deepEqual(simulator.write(0, 0, 1).state, new Qubit("00"))
    })

    QUnit.test("|00>.write(1, 0) should be |01>", (assert) => {
      const simulator = new Simulator("00")
      assert.deepEqual(simulator.write(1, 0).state, new Qubit("01"))
    })

    QUnit.test("|00>.write(1, 0, 1) should be |11>", (assert) => {
      const simulator = new Simulator("00")
      assert.deepEqual(simulator.write(1, 0, 1).state, new Qubit("11"))
    })

    QUnit.test("|11>.write(1, 0, 1) should be |11>", (assert) => {
      const simulator = new Simulator("11")
      assert.deepEqual(simulator.write(1, 0, 1).state, new Qubit("11"))
    })

    QUnit.test("|11>.write(0, 0) should be |10>", (assert) => {
      const simulator = new Simulator("11")
      assert.deepEqual(simulator.write(0, 0).state, new Qubit("10"))
    })

    QUnit.test("|11>.write(0, 0, 1) should be |00>", (assert) => {
      const simulator = new Simulator("11")
      assert.deepEqual(simulator.write(0, 0, 1).state, new Qubit("00"))
    })
  })

  QUnit.module(".x", () => {
    QUnit.test("|0>.x(0) should be |1>", (assert) => {
      const simulator = new Simulator("0")
      assert.deepEqual(simulator.x(0).state, new Qubit("1"))
    })

    QUnit.test("|1>.x(0) should be |0>", (assert) => {
      const simulator = new Simulator("1")
      assert.deepEqual(simulator.x(0).state, new Qubit("0"))
    })

    QUnit.test("|+>.x(0) should be |+>", (assert) => {
      const simulator = new Simulator("+")
      assert.deepEqual(simulator.x(0).state, new Qubit("+"))
    })

    QUnit.test("|->.x(0) should be -|->", (assert) => {
      const simulator = new Simulator("-")
      assert.equal(
        simulator.x(0).state.toString(),
        multiply(-1, new Qubit("-").matrix).toString(),
      )
    })

    QUnit.test("|i>.x(0) should be i|-i>", (assert) => {
      const simulator = new Simulator("i")
      assert.equal(
        simulator.x(0).state.toString(),
        multiply(i, new Qubit("-i").matrix).toString(),
      )
    })

    QUnit.test("|-i>.x(0) should be -i|i>", (assert) => {
      const simulator = new Simulator("-i")

      assert.equal(
        simulator.x(0).state.toString(),
        multiply(-1, multiply(i, new Qubit("i").matrix)).toString(),
      )
    })

    QUnit.test("|00>.x(0) should be |01>", (assert) => {
      const simulator = new Simulator("00")
      assert.deepEqual(simulator.x(0).state, new Qubit("01"))
    })

    QUnit.test("|00>.x(1) should be |10>", (assert) => {
      const simulator = new Simulator("00")
      assert.deepEqual(simulator.x(1).state, new Qubit("10"))
    })

    QUnit.test("|00>.x(0, 1) should be |11>", (assert) => {
      const simulator = new Simulator("00")
      assert.deepEqual(simulator.x(0, 1).state, new Qubit("11"))
    })
  })

  QUnit.module(".h", () => {
    QUnit.test("|0>.h(0) should be |+>", (assert) => {
      const simulator = new Simulator("0")
      assert.deepEqual(simulator.h(0).state, new Qubit("+"))
    })

    QUnit.test("|1>.h(0) should be |->", (assert) => {
      const simulator = new Simulator("1")
      assert.deepEqual(simulator.h(0).state, new Qubit("-"))
    })

    QUnit.test("|+>.h(0) should be |0>", (assert) => {
      const simulator = new Simulator("+")
      assert.deepEqual(
        round(simulator.h(0).state.matrix, 5),
        new Qubit("0").matrix,
      )
    })

    QUnit.test("|->.h(0) should be |1>", (assert) => {
      const simulator = new Simulator("-")
      assert.deepEqual(
        round(simulator.h(0).state.matrix, 5),
        new Qubit("1").matrix,
      )
    })

    QUnit.test("|i>.h(0) should be e^{iπ/4}|-i>", (assert) => {
      const simulator = new Simulator("i")
      assert.equal(
        round(simulator.h(0).state.matrix, 5).toString(),
        round(
          multiply(
            pow(e, divide(multiply(i, pi), 4)),
            new Qubit("-i").matrix,
          ) as Matrix,
          5,
        ).toString(),
      )
    })

    QUnit.test("|-i>.h(0) should be e^{-iπ/4}|i>", (assert) => {
      const simulator = new Simulator("-i")
      assert.equal(
        round(simulator.h(0).state.matrix, 5).toString(),
        round(
          multiply(
            pow(e, divide(multiply(i, pi), -4)),
            new Qubit("i").matrix,
          ) as Matrix,
          5,
        ).toString(),
      )
    })

    QUnit.test("|00>.h(0) should be |0+>", (assert) => {
      const simulator = new Simulator("00")
      assert.equal(simulator.h(0).state.toString(), new Qubit("0+").toString())
    })

    QUnit.test("|00>.h(1) should be |+0>", (assert) => {
      const simulator = new Simulator("00")
      assert.equal(simulator.h(1).state.toString(), new Qubit("+0").toString())
    })

    QUnit.test("|00>.h(0, 1) should be |++>", (assert) => {
      const simulator = new Simulator("00")
      assert.equal(
        round(simulator.h(0, 1).state.matrix, 5).toString(),
        round(new Qubit("++").matrix, 5).toString(),
      )
    })
  })

  QUnit.module(".phase", () => {
    QUnit.test("|0>.phase('pi', 0) should be |0>", (assert) => {
      const simulator = new Simulator("0")
      assert.equal(
        simulator.phase("pi", 0).state.toString(),
        new Qubit("0").toString(),
      )
    })

    QUnit.test("|1>.phase('pi', 0) should be -|1>", (assert) => {
      const simulator = new Simulator("1")
      assert.equal(
        round(simulator.phase("pi", 0).state.matrix, 5).toString(),
        multiply(-1, new Qubit("1").matrix).toString(),
      )
    })

    QUnit.test("|+>.phase('pi', 0) should be |->", (assert) => {
      const simulator = new Simulator("+")
      assert.equal(
        round(simulator.phase("pi", 0).state.matrix, 5).toString(),
        round(new Qubit("-").matrix, 5).toString(),
      )
    })

    QUnit.test("|->.phase('pi', 0) should be |+>", (assert) => {
      const simulator = new Simulator("-")
      assert.equal(
        round(simulator.phase("pi", 0).state.matrix, 5).toString(),
        round(new Qubit("+").matrix, 5).toString(),
      )
    })

    QUnit.test("|i>.phase('pi', 0) should be |-i>", (assert) => {
      const simulator = new Simulator("i")
      assert.equal(
        round(simulator.phase("pi", 0).state.matrix, 5).toString(),
        round(new Qubit("-i").matrix, 5).toString(),
      )
    })

    QUnit.test("|-i>.phase('pi', 0) should be |i>", (assert) => {
      const simulator = new Simulator("-i")
      assert.equal(
        round(simulator.phase("pi", 0).state.matrix, 5).toString(),
        round(new Qubit("i").matrix, 5).toString(),
      )
    })

    QUnit.test("|++>.phase('pi', 0) should be |+->", (assert) => {
      const simulator = new Simulator("++")
      assert.equal(
        round(simulator.phase("pi", 0).state.matrix, 5).toString(),
        round(new Qubit("+-").matrix, 5).toString(),
      )
    })

    QUnit.test("|++>.phase('pi', 1) should be |-+>", (assert) => {
      const simulator = new Simulator("++")
      assert.equal(
        round(simulator.phase("pi", 1).state.matrix, 5).toString(),
        round(new Qubit("-+").matrix, 5).toString(),
      )
    })

    QUnit.test("|++>.phase('pi', 0, 1) should be |-->", (assert) => {
      const simulator = new Simulator("++")
      assert.equal(
        round(simulator.phase("pi", 0, 1).state.matrix, 5).toString(),
        round(new Qubit("--").matrix, 5).toString(),
      )
    })
  })

  QUnit.module(".rnot", () => {
    QUnit.test(
      "|0>.rnot(0) should be |0>.h(0).phase('-pi/2', 0).h(0)",
      (assert) => {
        assert.equal(
          new Simulator("0").rnot(0).state.matrix.toString(),
          round(
            new Simulator("0").h(0).phase("-pi/2", 0).h(0).state.matrix,
            5,
          ).toString(),
        )
      },
    )

    QUnit.test(
      "|1>.rnot(0) should be |1>.h(0).phase('-pi/2', 0).h(0)",
      (assert) => {
        assert.equal(
          new Simulator("1").rnot(0).state.matrix.toString(),
          round(
            new Simulator("1").h(0).phase("-pi/2", 0).h(0).state.matrix,
            5,
          ).toString(),
        )
      },
    )

    QUnit.test(
      "|+>.rnot(0) should be |+>.h(0).phase('-pi/2', 0).h(0)",
      (assert) => {
        assert.equal(
          round(new Simulator("+").rnot(0).state.matrix, 5).toString(),
          round(
            new Simulator("+").h(0).phase("-pi/2", 0).h(0).state.matrix,
            5,
          ).toString(),
        )
      },
    )

    QUnit.test(
      "|->.rnot(0) should be |->.h(0).phase('-pi/2', 0).h(0)",
      (assert) => {
        assert.equal(
          round(new Simulator("-").rnot(0).state.matrix, 5).toString(),
          round(
            new Simulator("-").h(0).phase("-pi/2", 0).h(0).state.matrix,
            5,
          ).toString(),
        )
      },
    )

    QUnit.test(
      "|i>.rnot(0) should be |i>.h(0).phase('-pi/2', 0).h(0)",
      (assert) => {
        assert.equal(
          round(new Simulator("i").rnot(0).state.matrix, 5).toString(),
          round(
            new Simulator("i").h(0).phase("-pi/2", 0).h(0).state.matrix,
            5,
          ).toString(),
        )
      },
    )

    QUnit.test(
      "|-i>.rnot(0) should be |-i>.h(0).phase('-pi/2', 0).h(0)",
      (assert) => {
        assert.equal(
          round(new Simulator("-i").rnot(0).state.matrix, 5).toString(),
          round(
            new Simulator("-i").h(0).phase("-pi/2", 0).h(0).state.matrix,
            5,
          ).toString(),
        )
      },
    )

    QUnit.test(
      "|00>.rnot(0) should be |00>.h(0).phase('-pi/2', 0).h(0)",
      (assert) => {
        assert.equal(
          round(new Simulator("00").rnot(0).state.matrix, 5).toString(),
          round(
            new Simulator("00").h(0).phase("-pi/2", 0).h(0).state.matrix,
            5,
          ).toString(),
        )
      },
    )

    QUnit.test(
      "|00>.rnot(1) should be |00>.h(1).phase('-pi/2', 1).h(1)",
      (assert) => {
        assert.equal(
          round(new Simulator("00").rnot(1).state.matrix, 5).toString(),
          round(
            new Simulator("00").h(1).phase("-pi/2", 1).h(1).state.matrix,
            5,
          ).toString(),
        )
      },
    )

    QUnit.test(
      "|00>.rnot(0, 1) should be |00>.h(0, 1).phase('-pi/2', 0, 1).h(0, 1)",
      (assert) => {
        assert.equal(
          round(new Simulator("00").rnot(0, 1).state.matrix, 5).toString(),
          round(
            new Simulator("00").h(0, 1).phase("-pi/2", 0, 1).h(0, 1).state
              .matrix,
            5,
          ).toString(),
        )
      },
    )
  })

  QUnit.module(".swap", () => {
    QUnit.test("|01>.swap(0, 1) should be |10>", (assert) => {
      const simulator = new Simulator("01")
      assert.equal(
        round(simulator.swap(0, 1).state.matrix, 5).toString(),
        new Qubit("10").matrix.toString(),
      )
    })
  })

  QUnit.module(".down", () => {
    QUnit.test("|01>.down(0) should be |10>", (assert) => {
      const simulator = new Simulator("01")
      assert.equal(
        round(simulator.down(0).state.matrix, 5).toString(),
        new Qubit("10").matrix.toString(),
      )
    })
  })

  QUnit.module(".up", () => {
    QUnit.test("|01>.up(1) should be |10>", (assert) => {
      const simulator = new Simulator("01")
      assert.equal(
        round(simulator.up(1).state.matrix, 5).toString(),
        new Qubit("10").matrix.toString(),
      )
    })
  })

  QUnit.module(".cnot", () => {
    QUnit.test("|00>.cnot(0, 1) should be |00>", (assert) => {
      const simulator = new Simulator("00")
      assert.equal(
        simulator.cnot(0, 1).state.toString(),
        new Qubit("00").toString(),
      )
    })

    QUnit.test("|00>.cnot(1, 0) should be |00>", (assert) => {
      const simulator = new Simulator("00")
      assert.equal(
        simulator.cnot(1, 0).state.toString(),
        new Qubit("00").toString(),
      )
    })

    QUnit.test("|11>.cnot(0, 1) should be |01>", (assert) => {
      const simulator = new Simulator("11")
      assert.equal(
        simulator.cnot(0, 1).state.toString(),
        new Qubit("01").toString(),
      )
    })

    QUnit.test("|11>.cnot(1, 0) should be |10>", (assert) => {
      const simulator = new Simulator("11")
      assert.equal(
        simulator.cnot(1, 0).state.toString(),
        new Qubit("10").toString(),
      )
    })
  })

  QUnit.module(".cphase", () => {
    QUnit.test("|00>.cphase('pi', 0, 1) should be |00>", (assert) => {
      const simulator = new Simulator("00")
      assert.equal(
        simulator.cphase("pi", 0, 1).state.toString(),
        new Qubit("00").toString(),
      )
    })

    QUnit.test("|11>.cphase('pi', 0, 1) should be -|11>", (assert) => {
      const simulator = new Simulator("11")
      assert.equal(
        round(simulator.cphase("pi", 0, 1).state.matrix, 5).toString(),
        multiply(-1, new Qubit("11").matrix).toString(),
      )
    })
  })

  QUnit.module(".readout", () => {
    QUnit.test("|0>.read(0) should be |0>", (assert) => {
      const simulator = new Simulator("0")
      simulator.read(0)
      assert.deepEqual(simulator.state, new Qubit("0"))
      assert.deepEqual(simulator.bits, { 0: 0 })
    })

    QUnit.test("|1>.read(0) should be |1>", (assert) => {
      const simulator = new Simulator("1")
      simulator.read(0)
      assert.deepEqual(simulator.state, new Qubit("1"))
      assert.deepEqual(simulator.bits, { 0: 1 })
    })

    QUnit.test("|+>.read(0) should be |0> or |1>", (assert) => {
      const simulator = new Simulator("+")
      simulator.read(0)

      assert.ok(
        round(simulator.state.matrix, 5).toString() ==
          new Qubit("0").toString() ||
          round(simulator.state.matrix, 5).toString() ==
            new Qubit("1").toString(),
      )
      assert.equal(Object.keys(simulator.bits).length, 1)
      assert.ok(simulator.bits[0] == 0 || simulator.bits[0] == 1)
    })

    QUnit.test("|->.read(0) should be |0> or |1>", (assert) => {
      const simulator = new Simulator("-")
      simulator.read(0)

      assert.ok(
        round(simulator.state.matrix, 5).toString() ==
          new Qubit("0").toString() ||
          round(simulator.state.matrix, 5).toString() == "[[0], [-1]]",
      )
    })

    QUnit.test("|i>.read(0) should be |0> or |1>", (assert) => {
      const simulator = new Simulator("i")
      simulator.read(0)

      assert.ok(
        round(simulator.state.matrix, 5).toString() ==
          new Qubit("0").toString() ||
          round(simulator.state.matrix, 5).toString() == "[[0], [i]]",
      )
    })

    QUnit.test("|-i>.read(0) should be |0> or |1>", (assert) => {
      const simulator = new Simulator("-i")
      simulator.read(0)

      assert.ok(
        round(simulator.state.matrix, 5).toString() ==
          new Qubit("0").toString() ||
          round(simulator.state.matrix, 5).toString() == "[[0], [-i]]",
      )
    })

    QUnit.test("|00>.read(0) should be |00>", (assert) => {
      const simulator = new Simulator("00")
      simulator.read(0)

      assert.equal(simulator.state.toString(), new Qubit("00").toString())
      assert.deepEqual(simulator.bits, { 0: 0 })
    })

    QUnit.test("|00>.read(1) should be |00>", (assert) => {
      const simulator = new Simulator("00")
      simulator.read(1)

      assert.equal(simulator.state.toString(), new Qubit("00").toString())
      assert.deepEqual(simulator.bits, { 1: 0 })
    })

    QUnit.test("|00>.read(0, 1) should be |00>", (assert) => {
      const simulator = new Simulator("00")
      simulator.read(0, 1)

      assert.equal(simulator.state.toString(), new Qubit("00").toString())
      assert.deepEqual(simulator.bits, { 0: 0, 1: 0 })
    })

    QUnit.test("|11>.read(0) should be |11>", (assert) => {
      const simulator = new Simulator("11")
      simulator.read(0)

      assert.equal(simulator.state.toString(), new Qubit("11").toString())
      assert.deepEqual(simulator.bits, { 0: 1 })
    })

    QUnit.test("|11>.read(1) should be |11>", (assert) => {
      const simulator = new Simulator("11")
      simulator.read(1)

      assert.equal(simulator.state.toString(), new Qubit("11").toString())
      assert.deepEqual(simulator.bits, { 1: 1 })
    })

    QUnit.test("|11>.read(0, 1) should be |11>", (assert) => {
      const simulator = new Simulator("11")
      simulator.read(0, 1)

      assert.equal(simulator.state.toString(), new Qubit("11").toString())
      assert.deepEqual(simulator.bits, { 0: 1, 1: 1 })
    })
  })

  QUnit.module(".ccnot", () => {
    QUnit.test("|010>.ccnot(0, 1, 2) should be |010>", (assert) => {
      const simulator = new Simulator("010")
      assert.equal(
        round(simulator.ccnot(0, 1, 2).state.matrix, 5).toString(),
        new Qubit("010").matrix.toString(),
      )
    })

    QUnit.test("|011>.ccnot(0, 1, 2) should be |111>", (assert) => {
      const simulator = new Simulator("011")
      assert.equal(
        round(simulator.ccnot(0, 1, 2).state.matrix, 5).toString(),
        new Qubit("111").matrix.toString(),
      )
    })
  })

  QUnit.module(".cswap", () => {
    QUnit.test("|011>.cswap(0, 1, 2) should be |101>", (assert) => {
      const simulator = new Simulator("011")
      assert.equal(
        round(simulator.cswap(0, 1, 2).state.matrix, 5).toString(),
        new Qubit("101").matrix.toString(),
      )
    })

    QUnit.test("|011>.cswap(2, 0, 1) should be |011>", (assert) => {
      const simulator = new Simulator("011")
      assert.equal(
        round(simulator.cswap(2, 0, 1).state.matrix, 5).toString(),
        new Qubit("011").matrix.toString(),
      )
    })
  })
})
