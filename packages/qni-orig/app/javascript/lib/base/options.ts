import { InternalError } from "lib/error"

export const Options: { [type: string]: { [name: string]: string } } = {
  ids: {
    "display:bloch:popup": "bloch-display-popup-content",
  },
  classes: {
    gate: "gate",
    "gate:write": "write-gate",
    "gate:hadamard": "hadamard-gate",
    "gate:not": "not-gate",
    "gate:y": "y-gate",
    "gate:z": "z-gate",
    "gate:phase": "phase-gate",
    "gate:control": "control-gate",
    "gate:swap": "swap-gate",
    "gate:rootNot": "root-not-gate",
    "gate:rx": "rx-gate",
    "gate:ry": "ry-gate",
    "gate:rz": "rz-gate",
    "gate:measure": "measure-gate",

    "display:bloch": "bloch-display",
    "display:bloch:vector": "bloch-display__vector",
    "display:bloch:vector:line": "bloch-display__vector-line",
    "display:bloch:vector:end": "bloch-display__vector-end",
    "display:bloch:popup:d": "bloch-display__popup-content-d",
    "display:bloch:popup:phi": "bloch-display__popup-content-phi",
    "display:bloch:popup:theta": "bloch-display__popup-content-theta",
    "display:bloch:popup:x": "bloch-display__popup-content-x",
    "display:bloch:popup:y": "bloch-display__popup-content-y",
    "display:bloch:popup:z": "bloch-display__popup-content-z",

    "display:qubitLabel": "qubit-label",
    "qubitLabel:value": "qubit-label__value",

    connectable: "connectable",
    "connectable:lowerBit": "connectable--lower-bit",
    "connectable:upperBit": "connectable--upper-bit",

    circuitBlock: "circuit-block",

    circuitStep: "circuit-step",
    "circuitStep:body": "circuit-step__body",
    "circuitStep:state:done": "circuit-step--done",
    "circuitStep:type:shadow": "circuit-step--shadow",
    "circuitStep:type:shadowSource": "circuit-step--shadow-source",

    circuitBreakpoint: "circuit-breakpoint",
    "circuitBreakpoint:state:active": "circuit-breakpoint--active",

    draggable: "draggable",
    "draggable:state:dragging": "draggable--dragging",
    "draggable:state:dropped": "draggable--dropped",
    "draggable:type:circuit": "draggable--circuit",
    "draggable:type:palette": "draggable--palette",

    dropzone: "dropzone",
    "dropzone:state:active": "dropzone--active",
    "dropzone:state:occupied": "dropzone--occupied",
    "dropzone:type:circuit": "dropzone--circuit",
    "dropzone:type:palette": "dropzone--palette",
    "dropzone:type:trash": "dropzone--trash",

    "gate:mixin:ifable": "gate--ifable",
    "gate:mixin:phiable": "gate--phiable",
    "gate:mixin:thetable": "gate--thetable",
    "gate:state:disabled": "gate--disabled",

    "wireable:inactive": "wireable--inactive",
    "wireable:inputInactive": "wireable--input-inactive",
    "wireable:outputInactive": "wireable--output-inactive",

    angleSlider: "angle-slider",
    "angleSlider:state:active": "angle-slider-active",
  },
  attributes: {
    "draggable:x": "data-draggable-x",
    "draggable:y": "data-draggable-y",
    "instruction:controls": "data-controls",
    "instruction:if": "data-if",
    "instruction:theta": "data-theta",
    "instruction:phi": "data-phi",
    "instruction:flag": "data-flag",
    "instruction:valueable:value": "data-value",

    "instruction:bloch:d": "data-bloch-display-d",
    "instruction:bloch:phi": "data-bloch-display-phi",
    "instruction:bloch:theta": "data-bloch-display-theta",
    "instruction:bloch:x": "data-bloch-display-x",
    "instruction:bloch:y": "data-bloch-display-y",
    "instruction:bloch:z": "data-bloch-display-z",
  },
}

export function idFor(name: string): string {
  const id = Options.ids[name]
  if (!id) throw new InternalError(`id for ${name} not found`)
  return id
}

export function classNameFor(name: string): string {
  const className = Options.classes[name]
  if (!className) throw new InternalError(`className for ${name} not found`)
  return className
}

export function attributeNameFor(name: string): string {
  const attrName = Options.attributes[name]
  if (!attrName) throw new InternalError(`attrName for ${name} not found`)
  return attrName
}
