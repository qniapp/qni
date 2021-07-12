import { Connectable, Disableable, Instructionable, Targetable } from "./mixins"
import { Mixin } from "ts-mixer"

export const CONTROL_GATE_INSTRUCTION_TYPE = "•"

export type ControlGateInstruction = {
  type: typeof CONTROL_GATE_INSTRUCTION_TYPE
  targets: number[]
}

export class ControlGate extends Mixin(
  Connectable,
  Disableable,
  Instructionable,
  Targetable,
) {
  constructor(element: HTMLElement | Element) {
    super()
    this.element = this.validateElementClassName(element, "gate:control")
  }

  serialize(): ControlGateInstruction {
    return { type: CONTROL_GATE_INSTRUCTION_TYPE, targets: this.targets }
  }

  toJson(): string {
    return `"${CONTROL_GATE_INSTRUCTION_TYPE}"`
  }
}
