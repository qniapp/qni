import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
} from "./mixins"
import { Mixin } from "ts-mixer"

export const Y_GATE_INSTRUCTION_TYPE = "Y"

export type YGateInstruction = {
  type: typeof Y_GATE_INSTRUCTION_TYPE
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
  constructor(element: HTMLElement | Element) {
    super()
    this.element = this.validateElementClassName(element, "gate:y")
  }

  serialize(): YGateInstruction {
    return {
      type: Y_GATE_INSTRUCTION_TYPE,
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${Y_GATE_INSTRUCTION_TYPE}<${this.if}"`
    } else {
      return `"${Y_GATE_INSTRUCTION_TYPE}"`
    }
  }
}
