import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
} from "./mixins"
import { Mixin } from "ts-mixer"

export type RootNotGateInstruction = {
  type: "root-not-gate"
  controls: number[]
  if: string | null
}

export class RootNotGate extends Mixin(
  Controllable,
  Connectable,
  Disableable,
  Ifable,
  Instructionable,
) {
  static create(element: Element): RootNotGate {
    const rootNotGate = new RootNotGate()
    rootNotGate.assignElement(element)
    return rootNotGate
  }

  serialize(): RootNotGateInstruction {
    return { type: "root-not-gate", controls: this.controls, if: this.if }
  }

  toJson(): string {
    if (this.if) {
      return `"X^½<${this.if}"`
    } else {
      return "\"X^½\""
    }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:rootNot")
  }
}
