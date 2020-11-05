import { Elementable } from "lib/mixins"
import { applyMixins } from "lib/base"

export abstract class Popuppable {
  showPopup(): void {
    this.element.dispatchEvent(new CustomEvent("ShowGatePopupEvent"))
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Popuppable extends Elementable {}
applyMixins(Popuppable, [Elementable])
