import { Constructor } from "./constructor"
import { InstructionWithElement } from "./instructionWithElement"

export declare class Targetable {
  get targets(): number[]
  set targets(targets: number[])
}

export const isTargetable = (arg: unknown): arg is Targetable =>
  typeof arg === "object" &&
  arg !== null &&
  typeof (arg as Targetable).targets === "object"

export function TargetableMixin<
  TBase extends Constructor<InstructionWithElement>,
>(Base: TBase): Constructor<Targetable> & TBase {
  class TargetableMixinClass extends Base {
    get targets(): number[] {
      const dataTargets = this.element.getAttribute("data-targets")

      if (!dataTargets) return []
      return dataTargets
        .split(",")
        .map((each) => {
          return parseInt(each)
        })
        .sort()
    }

    set targets(targets: number[]) {
      this.element.setAttribute("data-targets", targets.sort().join())
    }
  }

  return TargetableMixinClass as Constructor<Targetable> & TBase
}
