import { Constructor } from "lib/instructions"
import { Elementable } from "lib/mixins"

export declare class Occupiable {
  set occupied(flag: boolean)
  isOccupied(): boolean
}

export function OccupiableMixin<TBase extends Constructor<Elementable>>(
  Base: TBase,
): Constructor<Occupiable> & TBase {
  class OccupiableMixinClass extends Base {
    set occupied(flag: boolean) {
      this.setClassName("dropzone:state:occupied", flag)
    }

    isOccupied(): boolean {
      return this.isClassNamed("dropzone:state:occupied")
    }
  }

  return OccupiableMixinClass as Constructor<Occupiable> & TBase
}
