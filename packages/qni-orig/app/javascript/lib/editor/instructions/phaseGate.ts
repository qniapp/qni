import { Connectable, Instructionable, Popuppable, Targetable } from "./mixins"
import { applyMixins, attributeNameFor } from "lib/base"

export type PhaseGateInstruction = {
  type: "phase-gate"
  theta: string | null
  targets: number[]
}

export class PhaseGate {
  constructor(element: Element) {
    this.element = this.validateElementClassName(
      element,
      "instruction:type:phaseGate",
    )
  }

  serialize(): PhaseGateInstruction {
    return {
      type: "phase-gate",
      theta: this.theta,
      targets: this.targets,
    }
  }

  get theta(): string | null {
    return this.element.getAttribute(attributeNameFor("instruction:theta"))
  }
}

export interface PhaseGate
  extends Instructionable,
    Targetable,
    Connectable,
    Popuppable {}
applyMixins(PhaseGate, [Instructionable, Targetable, Connectable, Popuppable])
