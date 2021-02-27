import {
  Connectable,
  Controllable,
  Disableable,
  Ifable,
  Instructionable,
  Popuppable,
} from "./mixins"
import { applyMixins } from "lib/base"

export type NotGateInstruction = {
  type: "not-gate"
  controls: number[]
  if: string | null
}

export class NotGate {
  constructor(element: Element) {
    this.element = this.validateElementClassName(element, "gate:type:not")
  }

  serialize(): NotGateInstruction {
    return { type: "not-gate", controls: this.controls, if: this.if }
  }
}

export interface NotGate
  extends Instructionable,
    Controllable,
    Connectable,
    Popuppable,
    Ifable,
    Disableable {}
applyMixins(NotGate, [
  Instructionable,
  Controllable,
  Connectable,
  Popuppable,
  Ifable,
  Disableable,
])
