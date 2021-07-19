import { ConnectableMixin } from "./connectable"
import { ControllableMixin } from "./controllable"
import { DisableableMixin } from "./disableable"
import { IfableMixin } from "./ifable"
import { InstructionWithElement } from "./instructionWithElement"
import { TargetableMixin } from "./targetable"
import { Util, attributeNameFor } from "lib/base"

type RotationOperatorGateInstruction = {
  type: string
  theta: string
  controls: number[]
  targets: number[]
  if: string | null
}

export abstract class RotationOperatorGate extends ControllableMixin(
  TargetableMixin(
    ConnectableMixin(DisableableMixin(IfableMixin(InstructionWithElement))),
  ),
) {
  get theta(): string {
    const attr = this.element.getAttribute(
      attributeNameFor("instruction:theta"),
    )
    Util.notNull(attr)

    return attr
  }

  protected _serialize(
    instructionType: string,
  ): RotationOperatorGateInstruction {
    return {
      type: instructionType,
      theta: this.theta,
      controls: this.controls,
      targets: this.targets,
      if: this.if,
    }
  }

  protected _toJson(instructionType: string): string {
    const theta = this.theta.replace("pi", "π").replace("/", "_")

    if (this.if) {
      return `"${instructionType}(${theta})<${this.if}"`
    } else {
      return `"${instructionType}(${theta})"`
    }
  }
}
