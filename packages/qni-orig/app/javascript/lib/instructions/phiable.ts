import { Constructor } from "./constructor"
import { InstructionWithElement } from "./instructionWithElement"
import { attributeNameFor, Util } from "lib/base"
import { parseAngle } from "lib/math"

export declare class Phiable {
  get phi(): string
  set phi(value: string)
  get angle(): string
  set angle(value: string)
  get radian(): number
}

export const isPhiable = (arg: unknown): arg is Phiable =>
  typeof arg === "object" &&
  arg !== null &&
  typeof (arg as Phiable).phi === "string" &&
  typeof (arg as Phiable).angle === "string" &&
  typeof (arg as Phiable).radian === "number"

export function PhiableMixin<TBase extends Constructor<InstructionWithElement>>(
  Base: TBase,
): Constructor<Phiable> & TBase {
  class PhiableMixinClass extends Base {
    get phi(): string {
      const phi = this.element.getAttribute(attributeNameFor("instruction:phi"))
      Util.notNull(phi)
      parseAngle(phi)

      return phi
    }

    set phi(phi: string) {
      parseAngle(phi)

      this.element.setAttribute(attributeNameFor("instruction:phi"), phi)
      this.element.dataset.gateLabel = phi.replace(/pi/g, "π")
    }

    get angle(): string {
      return this.phi
    }

    set angle(angle: string) {
      this.phi = angle
    }

    get radian(): number {
      const phi = this.element.getAttribute(attributeNameFor("instruction:phi"))
      Util.notNull(phi)

      return parseAngle(phi)
    }
  }

  return PhiableMixinClass as Constructor<Phiable> & TBase
}
