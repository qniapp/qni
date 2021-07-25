import { Constructor } from "./constructor"
import { InstructionWithElement } from "./instructionWithElement"
import { attributeNameFor, Util } from "lib/base"
import { Complex, parseFormula, PARSE_COMPLEX_TOKEN_MAP_RAD } from "lib/math"

export declare class Thetable {
  get theta(): string
  set theta(value: string)
  get angle(): string
  set angle(value: string)
  get radian(): number
}

export const isThetable = (arg: unknown): arg is Thetable =>
  typeof arg === "object" &&
  arg !== null &&
  typeof (arg as Thetable).theta === "string" &&
  typeof (arg as Thetable).angle === "string" &&
  typeof (arg as Thetable).radian === "number"

export function ThetableMixin<
  TBase extends Constructor<InstructionWithElement>,
>(Base: TBase): Constructor<Thetable> & TBase {
  class ThetableMixinClass extends Base {
    get theta(): string {
      const theta = this.element.getAttribute(
        attributeNameFor("instruction:theta"),
      )
      Util.notNull(theta)
      parseFormula<number>(theta, PARSE_COMPLEX_TOKEN_MAP_RAD)
      return theta
    }

    set theta(theta: string) {
      parseFormula<number>(theta, PARSE_COMPLEX_TOKEN_MAP_RAD)
      this.element.setAttribute(attributeNameFor("instruction:theta"), theta)
      this.element.dataset.gateLabel = theta.replace(/pi/g, "π")
    }

    get angle(): string {
      return this.theta
    }

    set angle(angle: string) {
      this.theta = angle
    }

    get radian(): number {
      const theta = this.element.getAttribute(
        attributeNameFor("instruction:theta"),
      )
      Util.notNull(theta)
      return Complex.from(
        parseFormula<number>(theta, PARSE_COMPLEX_TOKEN_MAP_RAD),
      ).real
    }
  }

  return ThetableMixinClass as Constructor<Thetable> & TBase
}
