import { CircuitDropzoneElement } from "components/circuitDropzoneElement"
import { PaletteDropzoneElement } from "components/paletteDropzoneElement"

export const isPaletteDropzone = (
  arg: unknown,
): arg is PaletteDropzoneElement => arg instanceof PaletteDropzoneElement

export const isCircuitDropzone = (
  arg: unknown,
): arg is CircuitDropzoneElement => arg instanceof CircuitDropzoneElement
