import {CircuitDropzoneElement} from './circuit-dropzone-element'
import {PaletteDropzoneElement} from './palette-dropzone-element'

export const isCircuitDropzoneElement = (arg: unknown): arg is CircuitDropzoneElement =>
  arg !== null && arg instanceof CircuitDropzoneElement

export const isPaletteDropzoneElement = (arg: unknown): arg is PaletteDropzoneElement =>
  arg !== null && arg instanceof PaletteDropzoneElement

export function isNumeric(value: string) {
  return /^-?\d+$/.test(value)
}
