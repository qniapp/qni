import { Instructionable, Valueable } from "./mixins"
import { InternalError } from "lib/error"
import { Mixin } from "ts-mixer"

export const QUBIT_LABEL_INSTRUCTION_TYPE = "QubitLabel"

export type QubitLabelInstruction = {
  type: typeof QUBIT_LABEL_INSTRUCTION_TYPE
  value: string
}

export class QubitLabel extends Mixin(Instructionable, Valueable) {
  static create(element: HTMLElement): QubitLabel {
    const qubitLabel = new QubitLabel()
    qubitLabel.assignElement(element)
    return qubitLabel
  }

  serialize(): QubitLabelInstruction {
    return { type: QUBIT_LABEL_INSTRUCTION_TYPE, value: this.value }
  }

  toJson(): string {
    return "XXX"
  }

  assignElement(element: HTMLElement): void {
    this.element = this.validateElementClassName(
      element,
      "instruction:type:qubitLabel",
    )
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
