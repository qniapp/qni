import { CircuitDropzone } from "./circuitDropzone"
import { QubitLabel, WriteGate } from "lib/instructions"
import { classNameFor } from "lib/base"

export class CircuitWire {
  public elements: HTMLElement[]

  constructor(elements: HTMLElement[]) {
    this.elements = elements
  }

  get removable(): boolean {
    if (this.empty) return true

    const firstInstruction = this.dropzones[0].instruction
    return (
      firstInstruction instanceof WriteGate &&
      firstInstruction.value == 0 &&
      this.dropzones.slice(1).every((each) => {
        return each.empty
      })
    )
  }

  get empty(): boolean {
    return this.dropzones.every((each) => {
      return each.empty
    })
  }

  clone(): CircuitWire {
    const elements = this.elements.map((each) => {
      if (each.classList.contains(classNameFor("dropzone:type:circuit"))) {
        const dropzone = new CircuitDropzone(each.cloneNode(true))
        dropzone.clear()
        return dropzone.element
      } else {
        return each.cloneNode(true) as HTMLElement
      }
    })
    return new CircuitWire(elements)
  }

  clear(): CircuitWire {
    this.elements.forEach((each) => {
      if (each.classList.contains(classNameFor("dropzone"))) {
        const circuitDropzone = new CircuitDropzone(each)
        circuitDropzone.clear()
        circuitDropzone.wireActive = false
      }
    })
    return this
  }

  get dropzones(): CircuitDropzone[] {
    return this.elements.slice(1).map((each) => {
      return new CircuitDropzone(each)
    })
  }

  incrementQubitLabelValue(): CircuitWire {
    this.elements.forEach((each) => {
      if (each.classList.contains(classNameFor("display:qubitLabel"))) {
        const qubitLabel = new QubitLabel(each)
        if (/^0x/.exec(qubitLabel.value)) {
          const labelValue = parseInt(qubitLabel.value)
          qubitLabel.value = `0x${(labelValue * 2).toString(16)}`
        }
      }
    })
    return this
  }

  remove(): void {
    this.elements.forEach((each) => {
      if (each.classList.contains(classNameFor("dropzone"))) {
        new CircuitDropzone(each).unsetInteract()
      }
      each.parentNode?.removeChild(each)
    })
  }
}
