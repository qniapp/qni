import { ConnectableMixin } from "./connectable"
import { ControllableMixin } from "./controllable"
import { Disableable } from "./disableable"
import { InstructionWithElement } from "./instructionWithElement"
import { TargetableMixin } from "./targetable"
import { Util, attributeNameFor, classNameFor } from "lib/base"

export const SWAP_GATE_INSTRUCTION_TYPE = "Swap"

export type SwapGateInstruction = {
  type: typeof SWAP_GATE_INSTRUCTION_TYPE
  targets: [number, number] | []
  controls: number[]
}

export class SwapGate extends ControllableMixin(
  TargetableMixin(ConnectableMixin(Disableable(InstructionWithElement))),
) {
  static readonly elementClassName = classNameFor("gate:swap")

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

  get phi(): string {
    const attr = this.element.getAttribute(attributeNameFor("instruction:phi"))
    Util.notNull(attr)

    return attr
  }

  private get swapTargets(): [number, number] | [] {
    const targets = this.targets

    if (targets.length != 2) return []
    return [targets[0], targets[1]]
  }
}
