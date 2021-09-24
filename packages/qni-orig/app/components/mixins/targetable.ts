import { Constructor } from "./constructor"

export declare class Targetable {
  get targets(): number[]
  set targets(value: number[])
}

export function TargetableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<Targetable> & TBase {
  class TargetableMixinClass extends Base {
    set targets(targets: number[]) {
      this.setAttribute("data-targets", targets.sort().join())
    }

    get targets(): number[] {
      const dataTargets = this.getAttribute("data-targets")

      if (dataTargets === null) return []
      return dataTargets
        .split(",")
        .map((each) => {
          return parseInt(each)
        })
        .sort()
    }
  }

  return TargetableMixinClass as Constructor<Targetable> & TBase
}
