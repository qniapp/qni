import {CircuitDropzoneElement} from './circuit-dropzone-element'

export const isCircuitDropzoneElement = (arg: unknown): arg is CircuitDropzoneElement =>
  arg !== null && arg instanceof CircuitDropzoneElement
