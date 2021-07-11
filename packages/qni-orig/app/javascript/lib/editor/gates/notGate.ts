import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
} from "./mixins"
import { Mixin } from "ts-mixer"
import { instructionNameFor } from "lib/base"

export type NotGateInstruction = {
  type: string
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
      type: instructionNameFor("gate:not"),
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${instructionNameFor("gate:not")}<${this.if}"`
    } else {
      return `"${instructionNameFor("gate:not")}"`
    }
  }
}
