import { Disableable, Ifable, Instructionable, Popuppable } from "./mixins"
import { Mixin } from "ts-mixer"

export type RootNotGateInstruction = {
  type: "root-not-gate"
  if: string | null
}

export class RootNotGate extends Mixin(
  Disableable,
  Ifable,
  Instructionable,
  Popuppable,
) {
  static create(element: Element): RootNotGate {
    const rootNotGate = new RootNotGate()
    rootNotGate.assignElement(element)
    return rootNotGate
  }

  serialize(): RootNotGateInstruction {
    return { type: "root-not-gate", if: this.if }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:rootNot")
  }
}
