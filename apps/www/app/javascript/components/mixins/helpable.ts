import tippy, { Instance, ReferenceElement, roundArrow } from "tippy.js"
import { Constructor } from "./constructor"
import { attr } from "@github/catalyst"

export declare class Helpable {
  showHelp(): void
  disableHelp(): void
}

export function HelpableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<Helpable> & TBase {
  class HelpableMixinClass extends Base {
    @attr help = true

    showHelp(): void {
      if (!this.help) return

      const popupInstance = (this as ReferenceElement)._tippy
      if (popupInstance) return

      const content = this.innerHTML.trim()
      if (content === "") return

      const popup = tippy(this, {
        allowHTML: true,
        animation: false,
        arrow: roundArrow + roundArrow,
        delay: 0,
        placement: "right",
        theme: "qni",
        onShow(instance: Instance) {
          instance.setContent(content)
        },
      })
      popup.show()
    }

    disableHelp(): void {
      const popupInstance = (this as ReferenceElement)._tippy

      this.help = false
      popupInstance?.destroy()
      this.innerHTML = ""
    }
  }

  return HelpableMixinClass as Constructor<Helpable> & TBase
}
