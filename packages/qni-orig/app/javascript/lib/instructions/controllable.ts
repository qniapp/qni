import { Constructor } from "./constructor"
import { InstructionWithElement } from "./instructionWithElement"
import { attributeNameFor } from "lib/base"

export declare class Controllable {
  get controls(): number[]
  set controls(controls: number[])
}

export const isControllable = (arg: unknown): arg is Controllable =>
  typeof arg === "object" &&
  arg !== null &&
  typeof (arg as Controllable).controls === "object"

export function ControllableMixin<
  TBase extends Constructor<InstructionWithElement>,
>(Base: TBase): Constructor<Controllable> & TBase {
  class ControllableMixinClass extends Base {
    get controls(): number[] {
      const dataControls = this.element.getAttribute(
        attributeNameFor("instruction:controls"),
      )

      if (!dataControls) return []
      return dataControls
        .split(",")
        .map((each) => {
          return parseInt(each)
        })
        .sort()
    }

    set controls(controls: number[]) {
      this.element.setAttribute(
        attributeNameFor("instruction:controls"),
        controls.sort().join(),
      )
    }
  }

  return ControllableMixinClass as Constructor<Controllable> & TBase
}
