import { classNameFor, Util } from "lib/base"
import { Controller } from "stimulus"
import tippy, { Instance, ReferenceElement, roundArrow } from "tippy.js"

export default class GateDescriptionController extends Controller {
  initPopup(event: MouseEvent): void {
    const draggable = event.target as HTMLElement

    if (!draggable.classList.contains(classNameFor("draggable:type:palette")))
      {return}
    if (
      !draggable.classList.contains(classNameFor("display:bloch")) &&
      (draggable as ReferenceElement)._tippy
    )
      {return}

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    const popup = tippy(draggable, {
      allowHTML: true,
      animation: false,
      arrow: roundArrow + roundArrow,
      delay: 0,
      placement: "right",
      theme: "qni",
      onShow(instance: Instance) {
        if (
          !instance.reference.classList.contains(
            classNameFor("draggable:type:palette"),
          )
        ) {
          return false
        }
        instance.setContent(
          that.popupContentFor(instance.reference as HTMLElement),
        )
      },
    })
    popup.show()
  }

  private popupContentFor(gateEl: HTMLElement): string {
    const el = gateEl.nextElementSibling
    Util.notNull(el)

    return el.innerHTML
  }
}
