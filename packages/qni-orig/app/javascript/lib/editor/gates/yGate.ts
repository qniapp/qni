import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
} from "./mixins"
import { Mixin } from "ts-mixer"

export type YGateInstruction = {
  type: "y-gate"
  controls: number[]
  if: string | null
}

export class YGate extends Mixin(
  Instructionable,
  Controllable,
  Connectable,
  Ifable,
  Disableable,
) {
  static create(element: Element): YGate {
    const yGate = new YGate()
    yGate.assignElement(element)
    return yGate
  }

  serialize(): YGateInstruction {
    return { type: "y-gate", controls: this.controls, if: this.if }
  }

  toJson(): string {
    if (this.if) {
      return `"Y<${this.if}"`
    } else {
      return "\"Y\""
    }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:y")
  }
}
