import { InternalError } from "lib/error"

export const Options: { [type: string]: { [name: string]: string } } = {
  classes: {
    "circuitStep:state:done": "circuit-step--done",
    "circuitStep:type:shadow": "circuit-step--shadow",
    "circuitStep:type:shadowSource": "circuit-step--shadow-source",
    "connectable:lowerBit": "connectable--lower-bit",
    "connectable:upperBit": "connectable--upper-bit",
    "display:type:bloch": "bloch-display",
    "draggable:state:dragging": "draggable--dragging",
    "draggable:state:dropped": "draggable--dropped",
    "draggable:state:grabbed": "draggable--grabbed",
    "draggable:type:circuit": "draggable--circuit",
    "draggable:type:palette": "draggable--palette",
    "draggable:type:shadow": "draggable--shadow",
    "draggable:type:source": "draggable--source",
    "dropzone:state:active": "dropzone--active",
    "dropzone:state:occupied": "dropzone--occupied",
    "dropzone:type:circuit": "dropzone--circuit",
    "dropzone:type:palette": "dropzone--palette",
    "dropzone:type:trash": "dropzone--trash",
    "gate:mixin:ifable": "gate--ifable",
    "gate:mixin:phiable": "gate--phiable",
    "gate:mixin:thetable": "gate--thetable",
    "gate:state:disabled": "gate--disabled",
    "gate:state:updated": "gate--updated",
    "gate:type:control": "control-gate",
    "gate:type:hadamard": "hadamard-gate",
    "gate:type:measure": "measure-gate",
    "gate:type:not": "not-gate",
    "gate:type:phase": "phase-gate",
    "gate:type:rootNot": "root-not-gate",
    "gate:type:rx": "rx-gate",
    "gate:type:ry": "ry-gate",
    "gate:type:rz": "rz-gate",
    "gate:type:swap": "swap-gate",
    "gate:type:write": "write-gate",
    "gate:type:y": "y-gate",
    "gate:type:z": "z-gate",
    "instruction:type:qubitLabel": "qubit-label",
    "qubitLabel:value": "qubit-label__value",
    "runButton::running": "run-button--running",
    "wireable:inactive": "wireable--inactive",
    "wireable:inputInactive": "wireable--input-inactive",
    "wireable:outputInactive": "wireable--output-inactive",
    circuitStep: "circuit-step",
    connectable: "connectable",
    draggable: "draggable",
    dropzone: "dropzone",
    gate: "gate",
    instruction: "instruction",
    runButton: "run-button",
    wireable: "wireable",
  },
  attributes: {
    "draggable:x": "data-draggable-x",
    "draggable:y": "data-draggable-y",
    "instruction:controls": "data-controls",
    "instruction:if": "data-if",
    "instruction:theta": "data-theta",
    "instruction:phi": "data-phi",
    "instruction:set": "data-set",
    "instruction:theta": "data-theta",
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
