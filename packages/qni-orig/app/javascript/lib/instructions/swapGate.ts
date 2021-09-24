import { SWAP_GATE_OPERATION_TYPE, SwapGateOperation } from "lib/operation"
import { Util, attributeNameFor, classNameFor } from "lib/base"
import { ConnectableMixin } from "./connectable"
import { ControllableMixin } from "./controllable"
import { DisableableMixin } from "./disableable"
import { InstructionWithElement } from "./instructionWithElement"
import { TargetableMixin } from "./targetable"

export class SwapGate extends ControllableMixin(
  TargetableMixin(ConnectableMixin(DisableableMixin(InstructionWithElement))),
) {
  static readonly elementClassName = classNameFor("gate:swap")

  serialize(): SwapGateOperation {
    return {
      type: SWAP_GATE_OPERATION_TYPE,
      targets: this.swapTargets,
      controls: this.controls,
    }
  }

  toJson(): string {
    return `"${SWAP_GATE_OPERATION_TYPE}"`
  }

  get phi(): string {
    const attr = this.element.getAttribute(attributeNameFor("instruction:phi"))
    Util.notNull(attr)

    return attr
  }

  private get swapTargets(): [number, number] | [] {
    const targets = this.targets

    if (targets.length !== 2) return []
    return [targets[0], targets[1]]
  }
}
