import { Constructor } from "./constructor"
import { InstructionWithElement } from "./instructionWithElement"
import { classNameFor } from "lib/base"

type InstructionWithElementable = Constructor<InstructionWithElement>

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Disableable<TBase extends InstructionWithElementable>(
  Base: TBase,
) {
  return class Disableable extends Base {
    set disabled(flag: boolean) {
      const className = classNameFor("gate:state:disabled")

      if (flag) {
        this.classList.add(className)
      } else {
        this.classList.remove(className)
      }
    }

    get disabled(): boolean {
      return this.classList.contains(classNameFor("gate:state:disabled"))
    }
  }
}
