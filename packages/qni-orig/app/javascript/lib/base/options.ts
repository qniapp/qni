import { InternalError } from "lib/error"

export const Options: { [type: string]: { [name: string]: string } } = {
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
    "gate:rootNot": "rnot-gate",
    "gate:rx": "rx-gate",
    "gate:ry": "ry-gate",
    "gate:rz": "rz-gate",
    "gate:measure": "measure-gate",

    "display:bloch": "bloch-display",

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
  },
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
