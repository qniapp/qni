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

export type RzGateInstruction = {
  type: "rz-gate"
  theta: string | null
  controls: number[]
  targets: number[]
  if: string | null
}

export class RzGate extends Mixin(
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
  Targetable,
) {
  static create(element: Element): RzGate {
    const rzGate = new RzGate()
    rzGate.assignElement(element)
    return rzGate
  }

  serialize(): RzGateInstruction {
    return {
      type: "rz-gate",
      theta: this.theta,
      controls: this.controls,
      targets: this.targets,
      if: this.if,
    }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:rz")
  }

  toJson(): string {
    const theta = this.element.getAttribute("data-gate-label").replace("/", "_")
    return `"Rz(${theta})"`
  }

  get theta(): string | null {
    return this.element.getAttribute(attributeNameFor("instruction:theta"))
  }
}
