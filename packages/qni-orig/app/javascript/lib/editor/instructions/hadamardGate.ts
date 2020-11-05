import { applyMixins } from "lib/base"
import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
  Popuppable,
} from "./mixins"

export type HadamardGateInstruction = {
  type: "hadamard-gate"
  controls: number[]
  if: string | null
}

export class HadamardGate {
  constructor(element: Element) {
    this.element = this.validateElementClassName(
      element,
      "instruction:type:hadamardGate",
    )
  }

  serialize(): HadamardGateInstruction {
    return { type: "hadamard-gate", controls: this.controls, if: this.if }
  }
}

export interface HadamardGate
  extends Instructionable,
    Controllable,
    Connectable,
    Popuppable,
    Ifable,
    Disableable {}
applyMixins(HadamardGate, [
  Instructionable,
  Controllable,
  Connectable,
  Popuppable,
  Ifable,
  Disableable,
])
