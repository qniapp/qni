import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
  Popuppable,
} from "./mixins"
import { Mixin } from "ts-mixer"

export type HadamardGateInstruction = {
  type: "hadamard-gate"
  controls: number[]
  if: string | null
}

export class HadamardGate extends Mixin(
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
  Popuppable,
) {
  static create(element: Element): HadamardGate {
    const hadamardGate = new HadamardGate()
    hadamardGate.assignElement(element)
    return hadamardGate
  }

  serialize(): HadamardGateInstruction {
    return { type: "hadamard-gate", controls: this.controls, if: this.if }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:hadamard")
  }
}
