import { applyMixins } from "lib/base"
import { Controllable, Instructionable } from "./mixins"

export type DownGateInstruction = { type: "down-gate"; controls: number[] }

export class DownGate {
  constructor(element: Element) {
    this.element = this.validateElementClassName(
      element,
      "instruction:type:downGate",
    )
  }

  serialize(): DownGateInstruction {
    return { type: "down-gate", controls: this.controls }
  }
}

export interface DownGate extends Instructionable, Controllable {}
applyMixins(DownGate, [Instructionable, Controllable])
