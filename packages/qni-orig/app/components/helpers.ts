import { CircuitDropzoneElement } from "circuit_dropzone_component/circuitDropzoneElement"
import { PaletteDropzoneElement } from "palette_dropzone_component/paletteDropzoneElement"

export const isPaletteDropzone = (
  arg: unknown,
): arg is PaletteDropzoneElement => arg instanceof PaletteDropzoneElement

export const isCircuitDropzone = (
  arg: unknown,
): arg is CircuitDropzoneElement => arg instanceof CircuitDropzoneElement
