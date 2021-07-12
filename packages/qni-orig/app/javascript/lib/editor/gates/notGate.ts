import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
} from "./mixins"
import { Mixin } from "ts-mixer"

export const NOT_GATE_INSTRUCTION_TYPE = "X"

export type NotGateInstruction = {
  type: typeof NOT_GATE_INSTRUCTION_TYPE
  controls: number[]
  if: string | null
}

export class NotGate extends Mixin(
  Instructionable,
  Controllable,
  Connectable,
  Ifable,
  Disableable,
) {
  constructor(element: HTMLElement | Element) {
    super()
    this.element = this.validateElementClassName(element, "gate:not")
  }

  serialize(): NotGateInstruction {
    return {
      type: NOT_GATE_INSTRUCTION_TYPE,
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${NOT_GATE_INSTRUCTION_TYPE}<${this.if}"`
    } else {
      return `"${NOT_GATE_INSTRUCTION_TYPE}"`
    }
  }
}
