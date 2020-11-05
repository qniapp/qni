import { Elementable } from "lib/mixins"
import { applyMixins } from "lib/base"

export abstract class Occupiable {
  set occupied(flag: boolean) {
    this.setClassName("dropzone:state:occupied", flag)
  }

  isOccupied(): boolean {
    return this.isClassNamed("dropzone:state:occupied")
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Occupiable extends Elementable {}
applyMixins(Occupiable, [Elementable])
