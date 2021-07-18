import { Constructor } from "./constructor"
import { InstructionWithElement } from "./instructionWithElement"
import { attributeNameFor } from "lib/base"

export declare class Valueable {
  get dataValue(): string | null
  set dataValue(value: string | null)
}

export function ValueableMixin<
  TBase extends Constructor<InstructionWithElement>,
>(Base: TBase): Constructor<Valueable> & TBase {
  class ValueableMixinClass extends Base {
    get dataValue(): string | null {
      const attrName = attributeNameFor("instruction:valueable:value")

      return this.element.getAttribute(attrName)
    }

    set dataValue(value: string | null) {
      const attrName = attributeNameFor("instruction:valueable:value")

      if (value) {
        this.element.setAttribute(attrName, value)
      } else {
        this.element.removeAttribute(attrName)
      }
    }
  }

  return ValueableMixinClass as Constructor<Valueable> & TBase
}
