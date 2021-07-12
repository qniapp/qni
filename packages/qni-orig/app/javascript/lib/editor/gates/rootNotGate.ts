import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
} from "./mixins"
import { Mixin } from "ts-mixer"

export const ROOT_NOT_GATE_INSTRUCTION_TYPE = "X^½"

export type RootNotGateInstruction = {
  type: typeof ROOT_NOT_GATE_INSTRUCTION_TYPE
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
  constructor(element: HTMLElement | Element) {
    super()
    this.element = this.validateElementClassName(element, "gate:rootNot")
  }

  serialize(): RootNotGateInstruction {
    return {
      type: ROOT_NOT_GATE_INSTRUCTION_TYPE,
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${ROOT_NOT_GATE_INSTRUCTION_TYPE}<${this.if}"`
    } else {
      return `"${ROOT_NOT_GATE_INSTRUCTION_TYPE}"`
    }
  }
}
