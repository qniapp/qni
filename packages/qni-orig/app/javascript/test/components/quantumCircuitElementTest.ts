import "components"
import { QuantumCircuitElement } from "quantum_circuit_component/quantumCircuitElement"

QUnit.module("QuantumCircuitElement", (hooks) => {
  let qc: QuantumCircuitElement

  hooks.beforeEach(() => {
    qc = document.createElement("quantum-circuit") as QuantumCircuitElement
    document.body.append(qc)
  })

  hooks.afterEach(() => {
    document.body.removeChild(qc)
  })

  QUnit.module("h", () => {
    QUnit.test("should apply an H gate", (assert) => {
      qc.h(1)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(qc.step(0).dropzone(1).draggableElement?.tagName, "H-GATE")
    })

    QUnit.test("should apply multiple H gates", (assert) => {
      qc.h(1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(qc.step(0).dropzone(1).draggableElement?.tagName, "H-GATE")
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(qc.step(0).dropzone(3).draggableElement?.tagName, "H-GATE")
    })

    QUnit.test("should throw when the target qubit is negative", (assert) => {
      assert.throws(() => qc.h(-1))
    })
  })

  QUnit.module("x", () => {
    QUnit.test("should apply an X gate", (assert) => {
      qc.x(1)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(qc.step(0).dropzone(1).draggableElement?.tagName, "X-GATE")
    })

    QUnit.test("should apply multiple X gates", (assert) => {
      qc.x(1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(qc.step(0).dropzone(1).draggableElement?.tagName, "X-GATE")
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(qc.step(0).dropzone(3).draggableElement?.tagName, "X-GATE")
    })

    QUnit.test("should throw when the target qubit is negative", (assert) => {
      assert.throws(() => qc.x(-1))
    })
  })

  QUnit.module("y", () => {
    QUnit.test("should apply a Y gate", (assert) => {
      qc.y(1)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(qc.step(0).dropzone(1).draggableElement?.tagName, "Y-GATE")
    })

    QUnit.test("should apply multiple Y gates", (assert) => {
      qc.y(1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(qc.step(0).dropzone(1).draggableElement?.tagName, "Y-GATE")
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(qc.step(0).dropzone(3).draggableElement?.tagName, "Y-GATE")
    })

    QUnit.test("should throw when the target qubit is negative", (assert) => {
      assert.throws(() => qc.y(-1))
    })
  })

  QUnit.module("z", () => {
    QUnit.test("should apply a Z gate", (assert) => {
      qc.z(1)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(qc.step(0).dropzone(1).draggableElement?.tagName, "Z-GATE")
    })

    QUnit.test("should apply multiple Z gates", (assert) => {
      qc.z(1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(qc.step(0).dropzone(1).draggableElement?.tagName, "Z-GATE")
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(qc.step(0).dropzone(3).draggableElement?.tagName, "Z-GATE")
    })

    QUnit.test("should throw when the target qubit is negative", (assert) => {
      assert.throws(() => qc.z(-1))
    })
  })

  QUnit.module("phase", () => {
    QUnit.test("should apply a phase shift gate", (assert) => {
      qc.phase(0.123, 1)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.toJson(),
        '"P(0.123)"',
      )
    })

    QUnit.test("should apply multiple phase shift gates", (assert) => {
      qc.phase(0.123, 1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.toJson(),
        '"P(0.123)"',
      )
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(3).draggableElement?.toJson(),
        '"P(0.123)"',
      )
    })

    QUnit.test("should throw when the target qubit is negative", (assert) => {
      assert.throws(() => qc.phase(0.123, -1))
    })
  })

  QUnit.module("rnot", () => {
    QUnit.test("should apply a √X gate", (assert) => {
      qc.rnot(1)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.tagName,
        "RNOT-GATE",
      )
    })

    QUnit.test("should apply multiple √X gates", (assert) => {
      qc.rnot(1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.tagName,
        "RNOT-GATE",
      )
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(3).draggableElement?.tagName,
        "RNOT-GATE",
      )
    })

    QUnit.test("should throw when the target qubit is negative", (assert) => {
      assert.throws(() => qc.rnot(-1))
    })
  })

  QUnit.module("rx", () => {
    QUnit.test("should apply an Rx gate", (assert) => {
      qc.rx(0.123, 1)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.toJson(),
        '"Rx(0.123)"',
      )
    })

    QUnit.test("should apply multiple Rx gates", (assert) => {
      qc.rx(0.123, 1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.toJson(),
        '"Rx(0.123)"',
      )
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(3).draggableElement?.toJson(),
        '"Rx(0.123)"',
      )
    })

    QUnit.test("should throw when the target qubit is negative", (assert) => {
      assert.throws(() => qc.rx(0.123, -1))
    })
  })

  QUnit.module("ry", () => {
    QUnit.test("should apply an Ry gate", (assert) => {
      qc.ry(0.123, 1)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.toJson(),
        '"Ry(0.123)"',
      )
    })

    QUnit.test("should apply multiple Ry gates", (assert) => {
      qc.ry(0.123, 1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.toJson(),
        '"Ry(0.123)"',
      )
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(3).draggableElement?.toJson(),
        '"Ry(0.123)"',
      )
    })

    QUnit.test("should throw when the target qubit is negative", (assert) => {
      assert.throws(() => qc.ry(0.123, -1))
    })
  })

  QUnit.module("rz", () => {
    QUnit.test("should apply an Rz gate", (assert) => {
      qc.rz(0.123, 1)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.toJson(),
        '"Rz(0.123)"',
      )
    })

    QUnit.test("should apply multiple Rz gates", (assert) => {
      qc.rz(0.123, 1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.toJson(),
        '"Rz(0.123)"',
      )
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(3).draggableElement?.toJson(),
        '"Rz(0.123)"',
      )
    })

    QUnit.test("should throw when the target qubit is negative", (assert) => {
      assert.throws(() => qc.rz(0.123, -1))
    })
  })

  QUnit.module("control", () => {
    QUnit.test("should apply a control gate", (assert) => {
      qc.control(1)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.tagName,
        "CONTROL-GATE",
      )
    })

    QUnit.test("should apply multiple control gates", (assert) => {
      qc.control(1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.tagName,
        "CONTROL-GATE",
      )
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(3).draggableElement?.tagName,
        "CONTROL-GATE",
      )
    })

    QUnit.test("should throw when the target qubit is negative", (assert) => {
      assert.throws(() => qc.control(-1))
    })
  })

  QUnit.module("cnot", () => {
    QUnit.test("should apply a CNOT gate", (assert) => {
      qc.cnot(1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.tagName,
        "CONTROL-GATE",
      )
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(qc.step(0).dropzone(3).draggableElement?.tagName, "X-GATE")
    })

    QUnit.test("should throw when the control qubit is negative", (assert) => {
      assert.throws(() => qc.cnot(-1, 0))
    })

    QUnit.test("should throw when the target qubit is negative", (assert) => {
      assert.throws(() => qc.cnot(0, -1))
    })
  })

  QUnit.module("ccnot", () => {
    QUnit.test("should apply a CCNOT gate", (assert) => {
      qc.ccnot(1, 3, 5)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.tagName,
        "CONTROL-GATE",
      )
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(3).draggableElement?.tagName,
        "CONTROL-GATE",
      )
      assert.equal(qc.step(0).dropzone(4).draggableElement, null)
      assert.equal(qc.step(0).dropzone(5).draggableElement?.tagName, "X-GATE")
    })

    QUnit.test(
      "should throw when the first control qubit is negative",
      (assert) => {
        assert.throws(() => qc.ccnot(-1, 0, 1))
      },
    )

    QUnit.test(
      "should throw when the second control qubit is negative",
      (assert) => {
        assert.throws(() => qc.ccnot(0, -1, 1))
      },
    )

    QUnit.test("should throw when the target qubit is negative", (assert) => {
      assert.throws(() => qc.ccnot(0, 1, -1))
    })
  })

  QUnit.module("swap", () => {
    QUnit.test("should apply a SWAP gate", (assert) => {
      qc.swap(1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.tagName,
        "SWAP-GATE",
      )
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(3).draggableElement?.tagName,
        "SWAP-GATE",
      )
    })

    QUnit.test(
      "should throw when the first target qubit is negative",
      (assert) => {
        assert.throws(() => qc.swap(-1, 0))
      },
    )

    QUnit.test(
      "should throw when the second target qubit is negative",
      (assert) => {
        assert.throws(() => qc.swap(0, -1))
      },
    )
  })

  QUnit.module("bloch", () => {
    QUnit.test("should put a bloch display", (assert) => {
      qc.bloch(1)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.tagName,
        "BLOCH-DISPLAY",
      )
    })

    QUnit.test("should put multiple bloch displays", (assert) => {
      qc.bloch(1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.tagName,
        "BLOCH-DISPLAY",
      )
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(3).draggableElement?.tagName,
        "BLOCH-DISPLAY",
      )
    })

    QUnit.test("should throw when the target qubit is negative", (assert) => {
      assert.throws(() => qc.bloch(-1))
    })
  })

  QUnit.module("write", () => {
    QUnit.test("should apply a |0> gate", (assert) => {
      qc.write("0", 1)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(qc.step(0).dropzone(1).draggableElement?.toJson(), '"|0>"')
    })

    QUnit.test("should apply multiple |0> gates", (assert) => {
      qc.write("0", 1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(qc.step(0).dropzone(1).draggableElement?.toJson(), '"|0>"')
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(qc.step(0).dropzone(3).draggableElement?.toJson(), '"|0>"')
    })

    QUnit.test("should apply a |1> gate", (assert) => {
      qc.write("1", 1)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(qc.step(0).dropzone(1).draggableElement?.toJson(), '"|1>"')
    })

    QUnit.test("should apply multiple |1> gates", (assert) => {
      qc.write("1", 1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(qc.step(0).dropzone(1).draggableElement?.toJson(), '"|1>"')
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(qc.step(0).dropzone(3).draggableElement?.toJson(), '"|1>"')
    })

    QUnit.test("should throw when the target qubit is negative", (assert) => {
      assert.throws(() => qc.write("0", -1))
      assert.throws(() => qc.write("1", -1))
    })
  })

  QUnit.module("measure", () => {
    QUnit.test("should apply a measurement gate", (assert) => {
      qc.measure(1)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.tagName,
        "MEASUREMENT-GATE",
      )
    })

    QUnit.test("should apply multiple measurement gates", (assert) => {
      qc.measure(1, 3)

      assert.equal(qc.step(0).dropzone(0).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(1).draggableElement?.tagName,
        "MEASUREMENT-GATE",
      )
      assert.equal(qc.step(0).dropzone(2).draggableElement, null)
      assert.equal(
        qc.step(0).dropzone(3).draggableElement?.tagName,
        "MEASUREMENT-GATE",
      )
    })
  })
})
