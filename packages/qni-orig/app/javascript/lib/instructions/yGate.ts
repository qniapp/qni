import { YGateOperation, Y_GATE_OPERATION_TYPE } from "lib/operation"
import { ConnectableMixin } from "./connectable"
import { ControllableMixin } from "./controllable"
import { DisableableMixin } from "./disableable"
import { IfableMixin } from "./ifable"
import { InstructionWithElement } from "./instructionWithElement"
import { classNameFor } from "lib/base"

export class YGate extends ControllableMixin(
  ConnectableMixin(DisableableMixin(IfableMixin(InstructionWithElement))),
) {
  static readonly elementClassName = classNameFor("gate:y")

  serialize(): YGateOperation {
    return {
      type: Y_GATE_OPERATION_TYPE,
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${Y_GATE_OPERATION_TYPE}<${this.if}"`
    } else {
      return `"${Y_GATE_OPERATION_TYPE}"`
    }
  }
}
