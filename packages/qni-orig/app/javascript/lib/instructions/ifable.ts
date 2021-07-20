import { Constructor } from "./constructor"
import { InstructionWithElement } from "./instructionWithElement"
import { attributeNameFor, Util } from "lib/base"
import { VALID_FLAG_NAME_REGEX } from "./flaggable"

export declare class Ifable {
  get if(): string | null
  set if(value: string | null)
}

export const isIfable = (arg: unknown): arg is Ifable =>
  (typeof arg === "object" &&
    arg !== null &&
    typeof (arg as Ifable).if === "object") ||
  typeof (arg as Ifable).if === "string"

export function IfableMixin<TBase extends Constructor<InstructionWithElement>>(
  Base: TBase,
): Constructor<Ifable> & TBase {
  class IfableMixinClass extends Base {
    get if(): string | null {
      const attr = this.element.getAttribute(attributeNameFor("instruction:if"))
      if (attr) {
        Util.need(
          VALID_FLAG_NAME_REGEX.test(attr),
          `Invalid if variable name: "${attr}"`,
        )
      }
      return attr
    }

    set if(variableName: string | null) {
      const attrName = attributeNameFor("instruction:if")

      if (variableName === null) {
        this.element.removeAttribute(attrName)
        this.element.dataset.gateLabel = ""
      } else {
        if (!VALID_FLAG_NAME_REGEX.test(variableName)) {
          throw new Error(`Invalid if variable name: "${variableName}"`)
        }
        this.element.setAttribute(attrName, variableName)
        this.element.dataset.gateLabel = `if ${variableName}`
      }
    }
  }

  return IfableMixinClass as Constructor<Ifable> & TBase
}
