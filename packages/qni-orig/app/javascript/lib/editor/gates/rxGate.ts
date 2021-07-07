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

export type RxGateInstruction = {
  type: "rx-gate"
  theta: string | null
  controls: number[]
  targets: number[]
  if: string | null
}

export class RxGate extends Mixin(
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
  Targetable,
) {
  static create(element: Element): RxGate {
    const rxGate = new RxGate()
    rxGate.assignElement(element)
    return rxGate
  }

  serialize(): RxGateInstruction {
    return {
      type: "rx-gate",
      theta: this.theta,
      controls: this.controls,
      targets: this.targets,
      if: this.if,
    }
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "gate:type:rx")
  }

  toJson(): string {
    const theta = this.element.getAttribute("data-gate-label").replace("/", "_")
    return `"Rx(${theta})"`
  }

  get theta(): string | null {
    return this.element.getAttribute(attributeNameFor("instruction:theta"))
  }
}
