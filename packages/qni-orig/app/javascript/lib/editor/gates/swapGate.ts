import {
  Connectable,
  Controllable,
  Disableable,
  Instructionable,
  Targetable,
} from "./mixins"
import { Mixin } from "ts-mixer"
import { instructionNameFor } from "lib/base"

export type SwapGateInstruction = {
  type: string
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
      type: instructionNameFor("gate:swap"),
      targets: this.swapTargets,
      controls: this.controls,
    }
  }

  toJson(): string {
    return `"${instructionNameFor("gate:swap")}"`
  }

  private get swapTargets(): [number, number] | [] {
    const targets = this.targets

    if (targets.length != 2) return []
    return [targets[0], targets[1]]
  }
}
