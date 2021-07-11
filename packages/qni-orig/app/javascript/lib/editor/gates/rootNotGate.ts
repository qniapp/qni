import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
} from "./mixins"
import { Mixin } from "ts-mixer"
import { instructionNameFor } from "lib/base"

export type RootNotGateInstruction = {
  type: string
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
      type: instructionNameFor("gate:rootNot"),
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${instructionNameFor("gate:rootNot")}<${this.if}"`
    } else {
      return `"${instructionNameFor("gate:rootNot")}"`
    }
  }
}
