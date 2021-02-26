import { Instructionable } from "./mixins"
import { applyMixins } from "lib/base"

export type RootNotGateInstruction = { type: "root-not-gate" }

export class RootNotGate {
  constructor(element: Element) {
    this.element = this.validateElementClassName(element, "gate:type:rootNot")
  }

  serialize(): RootNotGateInstruction {
    return { type: "root-not-gate" }
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootNotGate extends Instructionable {}
applyMixins(RootNotGate, [Instructionable])
