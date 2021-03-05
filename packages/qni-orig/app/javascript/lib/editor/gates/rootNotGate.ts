import { Instructionable } from "./mixins"
import { Mixin } from "ts-mixer"

export type RootNotGateInstruction = { type: "root-not-gate" }

export class RootNotGate extends Mixin(Instructionable) {
  static create(element: Element): RootNotGate {
    const rootNotGate = new RootNotGate()
    rootNotGate.assignElement(element)
    return rootNotGate
  }

  serialize(): RootNotGateInstruction {
    return { type: "root-not-gate" }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:rootNot")
  }
}
