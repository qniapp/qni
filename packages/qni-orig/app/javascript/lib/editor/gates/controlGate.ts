import { Connectable, Disableable, Instructionable, Targetable } from "./mixins"
import { Mixin } from "ts-mixer"

export type ControlGateInstruction = {
  type: "control-gate"
  targets: number[]
}

export class ControlGate extends Mixin(
  Instructionable,
  Targetable,
  Connectable,
  Disableable,
) {
  static create(element: Element): ControlGate {
    const controlGate = new ControlGate()
    controlGate.assignElement(element)
    return controlGate
  }

  serialize(): ControlGateInstruction {
    return { type: "control-gate", targets: this.targets }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:control")
  }
}
