import {
  Connectable,
  Controllable,
  Disableable,
  Instructionable,
  Targetable,
} from "./mixins"
import { Mixin } from "ts-mixer"

export const SWAP_GATE_INSTRUCTION_TYPE = "Swap"

export type SwapGateInstruction = {
  type: typeof SWAP_GATE_INSTRUCTION_TYPE
  targets: [number, number] | []
  controls: number[]
}

export class SwapGate extends Mixin(
  Instructionable,
  Targetable,
  Controllable,
  Connectable,
  Disableable,
) {
  constructor(element: HTMLElement | Element) {
    super()
    this.element = this.validateElementClassName(element, "gate:swap")
  }

  serialize(): SwapGateInstruction {
    return {
      type: SWAP_GATE_INSTRUCTION_TYPE,
      targets: this.swapTargets,
      controls: this.controls,
    }
  }

  toJson(): string {
    return `"${SWAP_GATE_INSTRUCTION_TYPE}"`
  }

  private get swapTargets(): [number, number] | [] {
    const targets = this.targets

    if (targets.length != 2) return []
    return [targets[0], targets[1]]
  }
}
