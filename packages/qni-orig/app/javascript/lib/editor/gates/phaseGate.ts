import {
  Controllable,
  Connectable,
  Instructionable,
  Targetable,
} from "./mixins"
import { Mixin } from "ts-mixer"
import { attributeNameFor, instructionNameFor, Util } from "lib/base"

export type PhaseGateInstruction = {
  type: string
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
      type: instructionNameFor("gate:phase"),
      phi: this.phi,
      controls: this.controls,
      targets: this.targets,
    }
  }

  toJson(): string {
    return `"${instructionNameFor("gate:phase")}(${this.phi.replace(
      "/",
      "_",
    )})"`
  }

  get phi(): string {
    const attr = this.element.getAttribute(attributeNameFor("instruction:phi"))
    Util.notNull(attr)

    return attr
  }
}
