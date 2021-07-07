import {
  Controllable,
  Connectable,
  Instructionable,
  Targetable,
} from "./mixins"
import { Mixin } from "ts-mixer"
import { attributeNameFor } from "lib/base"

export type PhaseGateInstruction = {
  type: "phase-gate"
  phi: string | null
  controls: number[]
  targets: number[]
}

export class PhaseGate extends Mixin(
  Instructionable,
  Targetable,
  Connectable,
  Controllable,
) {
  static create(element: Element): PhaseGate {
    const phaseGate = new PhaseGate()
    phaseGate.assignElement(element)
    return phaseGate
  }

  serialize(): PhaseGateInstruction {
    return {
      type: "phase-gate",
      phi: this.phi,
      controls: this.controls,
      targets: this.targets,
    }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:phase")
  }

  toJson(): string {
    const phi = this.element.getAttribute("data-gate-label").replace("/", "_")
    return `"Z^${phi}"`
  }

  get phi(): string | null {
    return this.element.getAttribute(attributeNameFor("instruction:phi"))
  }
}
