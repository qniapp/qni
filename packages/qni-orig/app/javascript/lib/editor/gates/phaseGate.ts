import {
  Controllable,
  Connectable,
  Instructionable,
  Targetable,
} from "./mixins"
import { Mixin } from "ts-mixer"
import { attributeNameFor, Util } from "lib/base"

export const PHASE_GATE_INSTRUCTION_TYPE = "P"

export type PhaseGateInstruction = {
  type: typeof PHASE_GATE_INSTRUCTION_TYPE
  phi: string
  controls: number[]
  targets: number[]
}

export class PhaseGate extends Mixin(
  Instructionable,
  Targetable,
  Connectable,
  Controllable,
) {
  constructor(element: HTMLElement | Element) {
    super()
    this.element = this.validateElementClassName(element, "gate:phase")
  }

  serialize(): PhaseGateInstruction {
    return {
      type: PHASE_GATE_INSTRUCTION_TYPE,
      phi: this.phi,
      controls: this.controls,
      targets: this.targets,
    }
  }

  toJson(): string {
    const phi = this.phi.replace("pi", "π").replace("/", "_")
    return `"${PHASE_GATE_INSTRUCTION_TYPE}(${phi})"`
  }

  get phi(): string {
    const attr = this.element.getAttribute(attributeNameFor("instruction:phi"))
    Util.notNull(attr)

    return attr
  }
}
