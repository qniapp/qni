import {
  Connectable,
  Controllable,
  Disableable,
  Instructionable,
  Targetable,
} from "./mixins"
import { InternalError } from "lib/error"
import { Mixin } from "ts-mixer"

export type SwapGateInstruction = {
  type: "swap-gate"
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
  static create(element: Element): SwapGate {
    const swapGate = new SwapGate()
    swapGate.assignElement(element)
    return swapGate
  }

  serialize(): SwapGateInstruction {
    return {
      type: "swap-gate",
      targets: this.swapTargets,
      controls: this.controls,
    }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:swap")
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
