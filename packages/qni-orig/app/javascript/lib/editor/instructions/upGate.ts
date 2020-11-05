import { applyMixins } from "lib/base"
import { Controllable, Instructionable } from "./mixins"

export type UpGateInstruction = { type: "up-gate"; controls: number[] }

export class UpGate {
  constructor(element: Element) {
    this.element = this.validateElementClassName(
      element,
      "instruction:type:upGate",
    )
  }

  serialize(): UpGateInstruction {
    return { type: "up-gate", controls: this.controls }
  }
}

export interface UpGate extends Instructionable, Controllable {}
applyMixins(UpGate, [Instructionable, Controllable])
