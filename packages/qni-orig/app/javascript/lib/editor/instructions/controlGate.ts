import { Connectable, Disableable, Instructionable, Targetable } from "./mixins"
import { applyMixins } from "lib/base"

export type ControlGateInstruction = {
  type: "control-gate"
  targets: number[]
}

export class ControlGate {
  constructor(element: Element) {
    this.element = this.validateElementClassName(element, "gate:type:control")
  }

  serialize(): ControlGateInstruction {
    return { type: "control-gate", targets: this.targets }
  }
}

export interface ControlGate
  extends Instructionable,
    Targetable,
    Connectable,
    Disableable {}
applyMixins(ControlGate, [
  Instructionable,
  Targetable,
  Connectable,
  Disableable,
])
