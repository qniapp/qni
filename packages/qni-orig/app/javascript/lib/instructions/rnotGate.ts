import { Complex, Matrix } from "lib/math"
import { RNOT_GATE_OPERATION_TYPE, RnotGateOperation } from "lib/operation"
import { ConnectableMixin } from "./connectable"
import { ControllableMixin } from "./controllable"
import { DisableableMixin } from "./disableable"
import { IfableMixin } from "./ifable"
import { InstructionWithElement } from "./instructionWithElement"
import { classNameFor } from "lib/base"

export class RnotGate extends ControllableMixin(
  ConnectableMixin(DisableableMixin(IfableMixin(InstructionWithElement))),
) {
  static readonly elementClassName = classNameFor("gate:rootNot")
  static get MATRIX(): Matrix {
    const i = Complex.I
    const mi = i.neg()

    return Matrix.square(i.plus(1), mi.plus(1), mi.plus(1), i.plus(1)).times(
      0.5,
    )
  }

  serialize(): RnotGateOperation {
    return {
      type: RNOT_GATE_OPERATION_TYPE,
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${RNOT_GATE_OPERATION_TYPE}<${this.if}"`
    } else {
      return `"${RNOT_GATE_OPERATION_TYPE}"`
    }
  }
}
