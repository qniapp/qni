import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
  Targetable,
} from "./mixins"
import { Mixin } from "ts-mixer"
import { attributeNameFor } from "lib/base"

export type RyGateInstruction = {
  type: "ry-gate"
  theta: string | null
  controls: number[]
  targets: number[]
  if: string | null
}

export class RyGate extends Mixin(
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
  Targetable,
) {
  static create(element: Element): RyGate {
    const ryGate = new RyGate()
    ryGate.assignElement(element)
    return ryGate
  }

  serialize(): RyGateInstruction {
    return {
      type: "ry-gate",
      theta: this.theta,
      controls: this.controls,
      targets: this.targets,
      if: this.if,
    }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:ry")
  }

  toJson(): string {
    const theta = this.element.getAttribute("data-gate-label").replace("/", "_")
    return `"Ry(${theta})"`
  }

  get theta(): string | null {
    return this.element.getAttribute(attributeNameFor("instruction:theta"))
  }
}
