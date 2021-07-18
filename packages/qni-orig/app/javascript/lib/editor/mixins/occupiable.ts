import { Constructor } from "lib/instructions"
import { Elementable } from "lib/mixins"

export declare class Occupiable {
  set occupied(flag: boolean)
  get occupied(): boolean
  get empty(): boolean
}

export function OccupiableMixin<TBase extends Constructor<Elementable>>(
  Base: TBase,
): Constructor<Occupiable> & TBase {
  class OccupiableMixinClass extends Base {
    set occupied(flag: boolean) {
      this.setClassName("dropzone:state:occupied", flag)
    }

    get occupied(): boolean {
      return this.isClassNamed("dropzone:state:occupied")
    }

    get empty(): boolean {
      return !this.occupied
    }
  }

  return OccupiableMixinClass as Constructor<Occupiable> & TBase
}
