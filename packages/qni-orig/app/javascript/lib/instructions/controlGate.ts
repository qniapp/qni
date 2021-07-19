import { classNameFor } from "lib/base"
import { ConnectableMixin } from "./connectable"
import { DisableableMixin } from "./disableable"
import { InstructionWithElement } from "./instructionWithElement"
import { TargetableMixin } from "./targetable"

export const CONTROL_GATE_INSTRUCTION_TYPE = "•"

export type ControlGateInstruction = {
  type: typeof CONTROL_GATE_INSTRUCTION_TYPE
  targets: number[]
}

export class ControlGate extends TargetableMixin(
  ConnectableMixin(DisableableMixin(InstructionWithElement)),
) {
  static readonly elementClassName = classNameFor("gate:control")

  serialize(): ControlGateInstruction {
    return { type: CONTROL_GATE_INSTRUCTION_TYPE, targets: this.targets }
  }

  toJson(): string {
    return `"${CONTROL_GATE_INSTRUCTION_TYPE}"`
  }
}
