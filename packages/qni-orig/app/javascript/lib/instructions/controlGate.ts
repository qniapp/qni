import {
  CONTROL_GATE_OPERATION_TYPE,
  ControlGateOperation,
} from "lib/operation"
import { ConnectableMixin } from "./connectable"
import { DisableableMixin } from "./disableable"
import { InstructionWithElement } from "./instructionWithElement"
import { TargetableMixin } from "./targetable"
import { classNameFor } from "lib/base"

export class ControlGate extends TargetableMixin(
  ConnectableMixin(DisableableMixin(InstructionWithElement)),
) {
  static readonly elementClassName = classNameFor("gate:control")

  serialize(): ControlGateOperation {
    return { type: CONTROL_GATE_OPERATION_TYPE, targets: this.targets }
  }

  toJson(): string {
    return `"${CONTROL_GATE_OPERATION_TYPE}"`
  }
}
