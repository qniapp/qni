import {
  Connectable,
  Controllable,
  Disableable,
  Instructionable,
  Targetable,
} from "./mixins"
import { InternalError } from "lib/error"
import { applyMixins } from "lib/base"

export type SwapGateInstruction = {
  type: "swap-gate"
  targets: [number, number] | []
}

export class SwapGate {
  constructor(element: Element) {
    this.element = this.validateElementClassName(
      element,
      "instruction:type:swapGate",
    )
  }

  serialize(): SwapGateInstruction {
    return { type: "swap-gate", targets: this.swapTargets }
  }

  private get swapTargets(): [number, number] | [] {
    const targets = this.targets

    if (targets.length == 0) return []
    if (targets.length != 2) {
      throw new InternalError(
        `SwapGate: invalid data-targets [${targets.toString()}]`,
      )
    }

    return [targets[0], targets[1]]
  }
}

export interface SwapGate
  extends Instructionable,
    Targetable,
    Controllable,
    Connectable,
    Disableable {}
applyMixins(SwapGate, [
  Instructionable,
  Targetable,
  Controllable,
  Connectable,
  Disableable,
])
