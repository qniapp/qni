import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
} from "./mixins"
import { Mixin } from "ts-mixer"
import { instructionNameFor } from "lib/base"

export type ZGateInstruction = {
  type: string
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
      type: instructionNameFor("gate:z"),
      controls: this.controls,
      if: this.if,
    }
  }

  toJson(): string {
    if (this.if) {
      return `"${instructionNameFor("gate:z")}<${this.if}"`
    } else {
      return `"${instructionNameFor("gate:z")}"`
    }
  }
}
