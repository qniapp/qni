import { Constructor } from "./constructor"
import { InstructionWithElement } from "./instructionWithElement"
import { classNameFor } from "lib/base"

export declare class Disableable {
  get disabled(): boolean
  set disabled(flag: boolean)
}

export const isDisableable = (arg: unknown): arg is Disableable =>
  typeof arg === "object" &&
  arg !== null &&
  typeof (arg as Disableable).disabled === "boolean"

export function DisableableMixin<
  TBase extends Constructor<InstructionWithElement>,
>(Base: TBase): Constructor<Disableable> & TBase {
  class DisableableMixinClass extends Base {
    get disabled(): boolean {
      return this.classList.contains(classNameFor("gate:state:disabled"))
    }

    set disabled(flag: boolean) {
      const className = classNameFor("gate:state:disabled")

      if (flag) {
        this.element.setAttribute("data-disabled", "")
        this.classList.add(className)
      } else {
        this.element.removeAttribute("data-disabled")
        this.classList.remove(className)
      }
    }
  }

  return DisableableMixinClass as Constructor<Disableable> & TBase
}
