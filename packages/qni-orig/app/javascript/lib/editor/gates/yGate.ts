import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
} from "./mixins"
import { Mixin } from "ts-mixer"
import { instructionNameFor } from "lib/base"

export type YGateInstruction = {
  type: string
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
      type: instructionNameFor("gate:y"),
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${instructionNameFor("gate:y")}<${this.if}"`
    } else {
      return `"${instructionNameFor("gate:y")}"`
    }
  }
}
