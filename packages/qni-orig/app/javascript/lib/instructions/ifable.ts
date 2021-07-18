import { Constructor } from "./constructor"
import { InstructionWithElement } from "./instructionWithElement"
import { attributeNameFor } from "lib/base"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Ifable<TBase extends Constructor<InstructionWithElement>>(
  Base: TBase,
) {
  return class Ifable extends Base {
    get if(): string | null {
      return this.element.getAttribute(attributeNameFor("instruction:if"))
    }
  }
}
