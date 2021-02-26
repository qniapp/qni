import { InternalError } from "lib/error"

export const Options: { [type: string]: { [name: string]: string } } = {
  classes: {
    draggable: "draggable",
    "draggable:state:dragging": "draggable--dragging",
    "draggable:state:dropped": "draggable--dropped",
    "draggable:state:grabbed": "draggable--grabbed",
    "draggable:type:circuit": "draggable--circuit",
    "draggable:type:palette": "draggable--palette",
    "draggable:type:shadow": "draggable--shadow",
    "draggable:type:source": "draggable--source",
    "draggable:type:write": "draggable--write",
    "draggable:type:readout": "draggable--readout",
    dropzone: "dropzone",
    "dropzone:state:active": "dropzone--active",
    "dropzone:state:occupied": "dropzone--occupied",
    "dropzone:state:wireInactive": "dropzone--wire-inactive",
    "dropzone:type:circuit": "dropzone--circuit",
    "dropzone:type:palette": "dropzone--palette",
    "dropzone:type:trash": "dropzone--trash",
    "dropzone:connection:lowerBit": "dropzone--connected-with-lower-bit",
    "dropzone:connection:upperBit": "dropzone--connected-with-upper-bit",
    circuitStep: "circuit-step",
    "circuitStep:state:done": "circuit-step--done",
    "circuitStep:type:shadow": "circuit-step--shadow",
    "circuitStep:type:shadowSource": "circuit-step--shadow-source",
    "qubitLabel:value": "qubit-label__value",
    gate: "gate",
    "gate:connection:lowerBit": "gate--connected-with-lower-bit",
    "gate:connection:upperBit": "gate--connected-with-upper-bit",
    "gate:mixin:ifable": "gate--ifable",
    "gate:state:disabled": "gate--disabled",
    "gate:type:control": "control-gate",
    "gate:type:down": "down-gate",
    "gate:type:hadamard": "hadamard-gate",
    "gate:type:not": "not-gate",
    "gate:type:phase": "phase-gate",
    "gate:type:readout": "readout-gate",
    "gate:type:rootNot": "root-not-gate",
    "gate:type:swap": "swap-gate",
    "gate:type:up": "up-gate",
    "gate:type:write": "write-gate",
    instruction: "instruction",
    "instruction:mixin:thetable": "instruction--thetable",
    "instruction:state:bordered": "instruction--bordered",
    "instruction:type:qubitLabel": "qubit-label",
  },
  attributes: {
    "draggable:x": "data-draggable-x",
    "draggable:y": "data-draggable-y",
    "instruction:valueable:value": "data-value",
    "instruction:if": "data-if",
    "instruction:set": "data-set",
    "instruction:controls": "data-controls",
    "instruction:theta": "data-theta",
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
