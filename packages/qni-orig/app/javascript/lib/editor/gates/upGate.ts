import { Controllable, Instructionable } from "./mixins"
import { Mixin } from "ts-mixer"

export type UpGateInstruction = { type: "up-gate"; controls: number[] }

export class UpGate extends Mixin(Instructionable, Controllable) {
  static create(element: Element): UpGate {
    const upGate = new UpGate()
    upGate.assignElement(element)
    return upGate
  }

  serialize(): UpGateInstruction {
    return { type: "up-gate", controls: this.controls }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:up")
  }
}
