import { Connectable, Disableable, Instructionable, Targetable } from "./mixins"
import { Mixin } from "ts-mixer"
import { instructionNameFor } from "lib/base"

export type ControlGateInstruction = {
  type: string
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
    return { type: instructionNameFor("gate:control"), targets: this.targets }
  }

  toJson(): string {
    return `"${instructionNameFor("gate:control")}"`
  }
}
