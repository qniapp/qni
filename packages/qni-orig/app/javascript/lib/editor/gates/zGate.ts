import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
} from "./mixins"
import { Mixin } from "ts-mixer"

export type ZGateInstruction = {
  type: "z-gate"
  controls: number[]
  if: string | null
}

export class ZGate extends Mixin(
  Instructionable,
  Controllable,
  Connectable,
  Ifable,
  Disableable,
) {
  static create(element: Element): ZGate {
    const zGate = new ZGate()
    zGate.assignElement(element)
    return zGate
  }

  serialize(): ZGateInstruction {
    return { type: "z-gate", controls: this.controls, if: this.if }
  }

  toJson(): string {
    if (this.if) {
      return `"Z<${this.if}"`
    } else {
      return "\"Z\""
    }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:z")
  }
}
