import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
} from "./mixins"
import { Mixin } from "ts-mixer"

export type NotGateInstruction = {
  type: "not-gate"
  controls: number[]
  if: string | null
}

export class NotGate extends Mixin(
  Instructionable,
  Controllable,
  Connectable,
  Ifable,
  Disableable,
) {
  static create(element: Element): NotGate {
    const notGate = new NotGate()
    notGate.assignElement(element)
    return notGate
  }

  serialize(): NotGateInstruction {
    return { type: "not-gate", controls: this.controls, if: this.if }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:not")
  }
}
