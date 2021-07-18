import {
  CircuitDraggable,
  CircuitDropzone,
  CircuitStep,
  CircuitWire,
} from "./editor"
import { DropEventHandlers } from "./editor/mixins"
import { Instruction } from "lib/instruction"
import { InternalError } from "./error"
import { QubitLabel } from "lib/instructions"
import { classNameFor, Util } from "./base"

export class Circuit {
  private element: Element

  constructor() {
    const el = document.getElementById("circuit")

    if (!el) {
      throw new Error("circuit element not found")
    }
    this.element = el
  }

  toJson(): string {
    let circuitBlock: Element | null = null
    const cols: string[] = []

    this.steps
      .filter((each) => {
        return !(each.instructions[0] instanceof QubitLabel)
      })
      .filter((each) => {
        return !each.element.classList.contains(
          classNameFor("circuitStep:type:shadowSource"),
        )
      })
      .forEach((each) => {
        if (each.circuitBlock()) {
          if (circuitBlock === null) {
            circuitBlock = each.circuitBlock()
            const circuitBlockLabel = circuitBlock
              ?.getElementsByClassName("circuit-block__label")
              .item(0)
            Util.notNull(circuitBlockLabel)
            const label = circuitBlockLabel.textContent?.trim()
            Util.notNull(label)
            cols.push(`["{${label}"]`)
          }
        } else {
          if (circuitBlock !== null) {
            circuitBlock = null
            cols.push('["}"]')
          }
        }
        cols.push(each.toJson())
      })
    if (circuitBlock) cols.push('["}"]')
    return `{"cols":[${cols.join(",")}],"init":false}`
  }

  get steps(): CircuitStep[] {
    return Array.from(
      this.element.getElementsByClassName(classNameFor("circuitStep")),
    ).map((each) => {
      return new CircuitStep(each)
    })
  }

  get emptySteps(): CircuitStep[] {
    return this.steps
      .filter((each) => {
        return each.empty
      })
      .slice(0, -1)
  }

  get draggables(): CircuitDraggable[] {
    return Array.from(
      this.element.getElementsByClassName(
        classNameFor("draggable:type:circuit"),
      ),
    ).map((each) => {
      return new CircuitDraggable(each as HTMLElement)
    })
  }

  get dropzones(): CircuitDropzone[] {
    return Array.from(
      this.element.getElementsByClassName(
        classNameFor("dropzone:type:circuit"),
      ),
    ).map((each) => {
      return new CircuitDropzone(each)
    })
  }

  instructions(): Instruction[] {
    return this.dropzones.map((each) => {
      return each.instruction
    })
  }

  appendNewWire(dropzoneHandlers: DropEventHandlers): void {
    const wires = this.wires
    const newWire = wires[wires.length - 1]
      .clone()
      .clear()
      .incrementQubitLabelValue()

    newWire.dropzones.forEach((each) => {
      each.setInteract(dropzoneHandlers)
    })
    this.appendWire(newWire)
  }

  removeEmptyWire(): void {
    const numWire = this.wires.length
    const wires = this.wires

    for (let i = numWire - 1; i >= 0; --i) {
      if (wires[i].removable) {
        wires[i].remove()
      } else {
        break
      }
    }
    this.updateNqubit()
  }

  get nqubit(): number {
    const dataNqubit = this.element.getAttribute("data-nqubit")
    if (!dataNqubit) throw new InternalError("Couldn't get data-nqubit")

    return parseInt(dataNqubit)
  }

  updateNqubit(): void {
    this.element.setAttribute("data-nqubit", this.wires.length.toString())
  }

  get wires(): CircuitWire[] {
    const wireElements: HTMLElement[][] = []

    this.steps.forEach((step) => {
      step.childElements.forEach((each, i) => {
        if (!wireElements[i]) wireElements.push([])
        wireElements[i].push(each)
      })
    })

    return wireElements.map((each) => {
      return new CircuitWire(each)
    })
  }

  private appendWire(wire: CircuitWire): void {
    this.steps.forEach((each, i) => {
      each.appendChild(wire.elements[i])
    })
  }
}
