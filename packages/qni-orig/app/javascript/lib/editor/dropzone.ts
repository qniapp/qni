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
      return new PaletteDropzone(element)
    } else if (classList.contains(classNameFor("dropzone:type:circuit"))) {
      return new CircuitDropzone(element)
    } else if (classList.contains(classNameFor("dropzone:type:trash"))) {
      return new TrashDropzone(element)
    }

    throw new InternalError(`Unknown dropzone: ${element.outerHTML}`)
  },
}
