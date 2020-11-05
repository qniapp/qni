import { Instructionable, Valueable } from "./mixins"
import { applyMixins } from "lib/base"
import { InternalError } from "lib/error"

export type QubitLabelInstruction = { type: "qubit-label"; value: string }

export class QubitLabel {
  constructor(element: HTMLElement) {
    this.element = this.validateElementClassName(
      element,
      "instruction:type:qubitLabel",
    )
  }

  serialize(): QubitLabelInstruction {
    return { type: "qubit-label", value: this.value }
  }

  get value(): string {
    const value = this.dataValue
    if (!value) throw new InternalError("Couldn't get QubitLabel value")
    return value
  }

  set value(value: string) {
    this.dataValue = value
    this.valueEl.textContent = value
  }

  private get valueEl(): HTMLElement {
    return this.fetchElement("qubitLabel:value")
  }
}

export interface QubitLabel extends Instructionable, Valueable {}
applyMixins(QubitLabel, [Instructionable, Valueable])
