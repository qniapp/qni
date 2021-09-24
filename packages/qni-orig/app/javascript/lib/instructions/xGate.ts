import { XGateOperation, X_GATE_OPERATION_TYPE } from "lib/operation"
import { ConnectableMixin } from "./connectable"
import { ControllableMixin } from "./controllable"
import { DisableableMixin } from "./disableable"
import { IfableMixin } from "./ifable"
import { InstructionWithElement } from "./instructionWithElement"
import { Matrix } from "lib/math"
import { classNameFor } from "lib/base"

export class XGate extends ControllableMixin(
  ConnectableMixin(DisableableMixin(IfableMixin(InstructionWithElement))),
) {
  static readonly elementClassName = classNameFor("gate:not")
  static readonly MATRIX = Matrix.PAULI_X

  serialize(): XGateOperation {
    return {
      type: X_GATE_OPERATION_TYPE,
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${X_GATE_OPERATION_TYPE}<${this.if}"`
    } else {
      return `"${X_GATE_OPERATION_TYPE}"`
    }
  }
}
