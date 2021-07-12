import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
  Targetable,
} from "./mixins"
import { Mixin } from "ts-mixer"
import { attributeNameFor, Util } from "lib/base"

export const RY_GATE_INSTRUCTION_TYPE = "Ry"

export type RyGateInstruction = {
  type: typeof RY_GATE_INSTRUCTION_TYPE
  theta: string
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
  constructor(element: HTMLElement | Element) {
    super()
    this.element = this.validateElementClassName(element, "gate:ry")
  }

  serialize(): RyGateInstruction {
    return {
      type: RY_GATE_INSTRUCTION_TYPE,
      theta: this.theta,
      controls: this.controls,
      targets: this.targets,
      if: this.if,
    }
  }

  toJson(): string {
    const theta = this.theta.replace("pi", "π").replace("/", "_")
    return `"${RY_GATE_INSTRUCTION_TYPE}(${theta})"`
  }

  get theta(): string {
    const attr = this.element.getAttribute(
      attributeNameFor("instruction:theta"),
    )
    Util.notNull(attr)

    return attr
  }
}
