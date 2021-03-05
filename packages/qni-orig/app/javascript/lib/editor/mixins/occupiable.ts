import { Elementable } from "lib/mixins"
import { Mixin } from "ts-mixer"

export class Occupiable extends Mixin(Elementable) {
  set occupied(flag: boolean) {
    this.setClassName("dropzone:state:occupied", flag)
  }

  isOccupied(): boolean {
    return this.isClassNamed("dropzone:state:occupied")
  }
}
