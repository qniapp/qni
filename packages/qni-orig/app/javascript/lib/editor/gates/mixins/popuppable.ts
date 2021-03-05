import { Elementable } from "lib/mixins"
import { Mixin } from "ts-mixer"

export class Popuppable extends Mixin(Elementable) {
  showPopup(): void {
    this.element.dispatchEvent(new CustomEvent("ShowGatePopupEvent"))
  }
}
