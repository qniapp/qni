import { InternalError } from "lib/error"
import { classNameFor } from "lib/base"
import { CircuitDropzone } from "./circuitDropzone"
import { PaletteDropzone } from "./paletteDropzone"
import { TrashDropzone } from "./trashDropzone"

export type Dropzone = PaletteDropzone | CircuitDropzone | TrashDropzone

export const Dropzone = {
  create(element: HTMLElement): Dropzone {
    const classList = element.classList

    if (classList.contains(classNameFor("dropzone:type:palette"))) {
      return PaletteDropzone.create(element)
    } else if (classList.contains(classNameFor("dropzone:type:circuit"))) {
      return CircuitDropzone.create(element)
    } else if (classList.contains(classNameFor("dropzone:type:trash"))) {
      return TrashDropzone.create(element)
    }

    throw new InternalError(`Unknown dropzone: ${element.outerHTML}`)
  },
}
