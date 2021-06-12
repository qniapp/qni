import { Connectable, Instructionable, Targetable } from "./mixins"
import { Mixin } from "ts-mixer"
import { attributeNameFor } from "lib/base"

export type PhaseGateInstruction = {
  type: "phase-gate"
  phi: string | null
  targets: number[]
}

export class PhaseGate extends Mixin(Instructionable, Targetable, Connectable) {
  static create(element: Element): PhaseGate {
    const phaseGate = new PhaseGate()
    phaseGate.assignElement(element)
    return phaseGate
  }

  serialize(): PhaseGateInstruction {
    return {
      type: "phase-gate",
      phi: this.phi,
      targets: this.targets,
    }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:phase")
  }

  get phi(): string | null {
    return this.element.getAttribute(attributeNameFor("instruction:phi"))
  }
}
