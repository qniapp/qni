import { Constructor } from "./constructor"
import { InstructionWithElement } from "./instructionWithElement"
import { attributeNameFor, Util } from "lib/base"
import { parseFormula, PARSE_COMPLEX_TOKEN_MAP_RAD } from "lib/math"

export declare class Phible {
  get phi(): string
  set phi(value: string)
}

export const isPhible = (arg: unknown): arg is Phible =>
  typeof arg === "object" &&
  arg !== null &&
  typeof (arg as Phible).phi === "string"

export function PhibleMixin<TBase extends Constructor<InstructionWithElement>>(
  Base: TBase,
): Constructor<Phible> & TBase {
  class PhibleMixinClass extends Base {
    get phi(): string {
      const phi = this.element.getAttribute(attributeNameFor("instruction:phi"))
      Util.notNull(phi)
      parseFormula<number>(phi, PARSE_COMPLEX_TOKEN_MAP_RAD)
      return phi
    }

    set phi(phi: string) {
      parseFormula<number>(phi, PARSE_COMPLEX_TOKEN_MAP_RAD)
      this.element.setAttribute(attributeNameFor("instruction:phi"), phi)
      this.element.dataset.gateLabel = phi.replace(/pi/g, "π")
    }
  }

  return PhibleMixinClass as Constructor<Phible> & TBase
}
