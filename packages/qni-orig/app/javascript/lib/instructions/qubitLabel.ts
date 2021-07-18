import { InstructionWithElement } from "./instructionWithElement"
import { InternalError } from "lib/error"
import { ValueableMixin } from "./valueable"
import { classNameFor } from "lib/base"

export const QUBIT_LABEL_INSTRUCTION_TYPE = "QubitLabel"

export type QubitLabelInstruction = {
  type: typeof QUBIT_LABEL_INSTRUCTION_TYPE
  value: string
}

export class QubitLabel extends ValueableMixin(InstructionWithElement) {
  static readonly elementClassName = classNameFor("display:qubitLabel")

  serialize(): QubitLabelInstruction {
    return { type: QUBIT_LABEL_INSTRUCTION_TYPE, value: this.value }
  }

  toJson(): string {
    return `"${QUBIT_LABEL_INSTRUCTION_TYPE}"`
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

  protected fetchElement(name: string): HTMLElement {
    const className = classNameFor(name)
    const el = this.element.getElementsByClassName(className).item(0)

    if (!el) throw new Error(".${className} not found")
    return el as HTMLElement
  }
}
