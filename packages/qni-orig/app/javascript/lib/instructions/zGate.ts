import { ZGateOperation, Z_GATE_OPERATION_TYPE } from "lib/operation"
import { ConnectableMixin } from "./connectable"
import { ControllableMixin } from "./controllable"
import { DisableableMixin } from "./disableable"
import { IfableMixin } from "./ifable"
import { InstructionWithElement } from "./instructionWithElement"
import { Matrix } from "lib/math"
import { classNameFor } from "lib/base"

export class ZGate extends ControllableMixin(
  ConnectableMixin(DisableableMixin(IfableMixin(InstructionWithElement))),
) {
  static readonly elementClassName = classNameFor("gate:z")
  static readonly MATRIX = Matrix.PAULI_Z

  serialize(): ZGateOperation {
    return {
      type: Z_GATE_OPERATION_TYPE,
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${Z_GATE_OPERATION_TYPE}<${this.if}"`
    } else {
      return `"${Z_GATE_OPERATION_TYPE}"`
    }
  }
}
