import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
} from "./mixins"
import { Mixin } from "ts-mixer"

export const Z_GATE_INSTRUCTION_TYPE = "Z"

export type ZGateInstruction = {
  type: typeof Z_GATE_INSTRUCTION_TYPE
  controls: number[]
  if: string | null
}

export class ZGate extends Mixin(
  Instructionable,
  Controllable,
  Connectable,
  Ifable,
  Disableable,
) {
  constructor(element: HTMLElement | Element) {
    super()
    this.element = this.validateElementClassName(element, "gate:z")
  }

  serialize(): ZGateInstruction {
    return {
      type: Z_GATE_INSTRUCTION_TYPE,
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${Z_GATE_INSTRUCTION_TYPE}<${this.if}"`
    } else {
      return `"${Z_GATE_INSTRUCTION_TYPE}"`
    }
  }
}
