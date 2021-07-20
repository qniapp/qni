import { Constructor } from "./constructor"
import { InstructionWithElement } from "./instructionWithElement"
import { attributeNameFor, Util } from "lib/base"

export const VALID_FLAG_NAME_REGEX = /^[A-Z][0-9A-Z_]*$/i

export declare class Flaggable {
  get flag(): string | null
  set flag(value: string | null)
}

export const isFlaggable = (arg: unknown): arg is Flaggable =>
  (typeof arg === "object" &&
    arg !== null &&
    typeof (arg as Flaggable).flag === "object") ||
  typeof (arg as Flaggable).flag === "string"

export function FlaggableMixin<
  TBase extends Constructor<InstructionWithElement>,
>(Base: TBase): Constructor<Flaggable> & TBase {
  class FlaggableMixinClass extends Base {
    get flag(): string | null {
      const attr = this.element.getAttribute(
        attributeNameFor("instruction:flag"),
      )
      if (attr) {
        Util.need(
          VALID_FLAG_NAME_REGEX.test(attr),
          `Invalid flag name: "${attr}"`,
        )
      }
      return attr
    }

    set flag(flagName: string | null) {
      const attrName = attributeNameFor("instruction:flag")

      if (flagName === null) {
        this.element.removeAttribute(attrName)
        this.element.dataset.gateLabel = ""
      } else {
        if (!VALID_FLAG_NAME_REGEX.test(flagName)) {
          throw new Error(`Invalid flag name: "${flagName}"`)
        }
        this.element.setAttribute(attrName, flagName)
        this.element.dataset.gateLabel = flagName
      }
    }
  }

  return FlaggableMixinClass as Constructor<Flaggable> & TBase
}
