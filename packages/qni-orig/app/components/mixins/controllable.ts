import { Constructor } from "./constructor"

export declare class Controllable {
  set controls(value: number[])
  get controls(): number[]
}

export function ControllableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<Controllable> & TBase {
  class ControllableMixinClass extends Base {
    set controls(controls: number[]) {
      this.setAttribute("data-controls", controls.sort().join())
    }

    get controls(): number[] {
      const dataControls = this.getAttribute("data-controls")

      if (dataControls === null) return []
      return dataControls
        .split(",")
        .map((each) => {
          return parseInt(each)
        })
        .sort()
    }
  }

  return ControllableMixinClass as Constructor<Controllable> & TBase
}
