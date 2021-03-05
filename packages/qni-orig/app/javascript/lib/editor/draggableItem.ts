import { InternalError } from "lib/error"
import { classNameFor } from "lib/base"
import { CircuitDraggable } from "./circuitDraggable"
import { PaletteDraggable } from "./paletteDraggable"

export type DraggableItem = PaletteDraggable | CircuitDraggable

export const DraggableItem = {
  create(eventTarget: EventTarget | null): DraggableItem {
    if (!eventTarget) throw new InternalError("Event target not set")

    const element = eventTarget as HTMLElement
    const classList = element.classList

    if (classList.contains(classNameFor("draggable:type:circuit"))) {
      return CircuitDraggable.create(element)
    } else if (classList.contains(classNameFor("draggable:type:palette"))) {
      return PaletteDraggable.create(element)
    }

    throw new InternalError(`Unknown draggable: ${element.outerHTML}`)
  },
}
