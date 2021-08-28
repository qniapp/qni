import tippy, { Instance, ReferenceElement, roundArrow } from "tippy.js"
import { Constructor } from "./constructor"

export declare class Helpable {
  showHelp(): void
}

export function HelpableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<Helpable> & TBase {
  class HelpableMixinClass extends Base {
    showHelp(): void {
      if ((this as ReferenceElement)._tippy) return

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
  }

  return HelpableMixinClass as Constructor<Helpable> & TBase
}
