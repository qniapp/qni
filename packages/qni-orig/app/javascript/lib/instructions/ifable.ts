import { Constructor } from "./constructor"
import { InstructionWithElement } from "./instructionWithElement"
import { attributeNameFor, Util } from "lib/base"

export declare class Ifable {
  get if(): string | null
  set if(value: string | null)
}

export const isIfable = (arg: unknown): arg is Ifable =>
  typeof arg === "object" &&
  arg !== null &&
  typeof (arg as Ifable).if === "string"

export function IfableMixin<TBase extends Constructor<InstructionWithElement>>(
  Base: TBase,
): Constructor<Ifable> & TBase {
  class IfableMixinClass extends Base {
    static readonly validVariableNameRegex = /^[A-Z][0-9A-Z_]*$/i

    get if(): string | null {
      const attr = this.element.getAttribute(attributeNameFor("instruction:if"))
      if (attr) {
        Util.need(
          IfableMixinClass.validVariableNameRegex.test(attr),
          `Invalid if variable name: "${attr}"`,
        )
      }
      return attr
    }

    set if(variableName: string | null) {
      const attrName = attributeNameFor("instruction:if")

      if (variableName === null) {
        this.element.removeAttribute(attrName)
      } else {
        if (!IfableMixinClass.validVariableNameRegex.test(variableName)) {
          throw new Error(`Invalid if variable name: "${variableName}"`)
        }
        this.element.setAttribute(attrName, variableName)
      }
    }
  }

  return IfableMixinClass as Constructor<Ifable> & TBase
}
