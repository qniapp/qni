import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
} from "./mixins"
import { Mixin } from "ts-mixer"
import { instructionNameFor } from "lib/base"

export type HadamardGateInstruction = {
  type: string
  controls: number[]
  if: string | null
}

export class HadamardGate extends Mixin(
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
) {
  constructor(element: HTMLElement | Element) {
    super()
    this.element = this.validateElementClassName(element, "gate:hadamard")
  }

  serialize(): HadamardGateInstruction {
    return {
      type: instructionNameFor("gate:hadamard"),
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${instructionNameFor("gate:hadamard")}<${this.if}"`
    } else {
      return `"${instructionNameFor("gate:hadamard")}"`
    }
  }
}
