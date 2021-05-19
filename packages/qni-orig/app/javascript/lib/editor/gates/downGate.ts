import { Controllable, Instructionable } from "./mixins"
import { Mixin } from "ts-mixer"

export type DownGateInstruction = { type: "down-gate"; controls: number[] }

export class DownGate extends Mixin(Instructionable, Controllable) {
  static create(element: Element): DownGate {
    const downGate = new DownGate()
    downGate.assignElement(element)
    return downGate
  }

  serialize(): DownGateInstruction {
    return { type: "down-gate", controls: this.controls }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:down")
  }
}
