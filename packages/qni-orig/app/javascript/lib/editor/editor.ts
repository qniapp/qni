import { Circuit } from "lib/circuit"
import { CircuitDraggable } from "./circuitDraggable"
import { CircuitDropzone } from "./circuitDropzone"
import { DraggableItem } from "./draggableItem"
import { DropEventHandlers } from "./mixins"
import { GatePopup } from "lib/editor"
import { MeasureGate } from "lib/instructions"
import { PaletteDraggable } from "./paletteDraggable"
import { SwapGate } from "lib/instructions"
import { TrashDropzone } from "./trashDropzone"
import { Util } from "lib/base"
import { WriteGate } from "lib/instructions"
import { classNameFor } from "lib/base"

export class Editor {
  private element: Element
  private circuit: Circuit

  constructor(element: Element) {
    this.element = element
    this.circuit = new Circuit()

    new TrashDropzone(this.trashDropzoneElement).setInteract({
      onDrop: this.trashGate.bind(this),
    })
    this.circuit.dropzones.forEach((each) => {
      each.setInteract(this.circuitDropzoneHandlers())
    })
  }

  clear(): void {
    history.pushState(
      "",
      "",
      '{"cols":[["|0>"],["H"],["Measure"]],"init":false}',
    )
    location.reload()
  }

  updateUrl(): void {
    history.pushState("", "", this.circuit.toJson())
  }

  addNewQubit(): void {
    this.circuit.appendNewWire(this.circuitDropzoneHandlers())
  }

  grabDraggable(
    draggable: PaletteDraggable | CircuitDraggable,
    event: MouseEvent,
  ): void {
    this.circuit.steps.slice(2).forEach((step) => {
      step.prependShadow(this.circuitDropzoneHandlers())
    })

    draggable.grab(event)
  }

  releaseDraggable(event: MouseEvent): void {
    const draggable = DraggableItem.create(event.target)

    draggable.unGrab()
    draggable.source?.remove()

    this.removeEmptySteps()

    if (draggable instanceof CircuitDraggable) {
      draggable.dropzone.circuitStep.updateGateConnections()
    }
  }

  showGatePopup(element: HTMLElement): void {
    const gatePopup = new GatePopup()
    const circuitDraggable = new CircuitDraggable(element)
    const circuitStep = circuitDraggable.dropzone.circuitStep

    gatePopup.show(element, () => {
      circuitStep.updateGateConnections()
    })
  }

  // Trash dropzone handler

  private trashGate(event: Interact.DropEvent) {
    const draggable = DraggableItem.create(event.relatedTarget)

    draggable.dropped = true
    draggable.dropzone.occupied = false

    if (draggable instanceof CircuitDraggable) {
      draggable.dropzone.circuitStep.updateGateConnections()
      this.removeEmptySteps()
      this.updateWires()
      this.element.dispatchEvent(new CustomEvent("circuitUpdateEvent"))
    }
  }

  private get trashDropzoneElement(): Element {
    const className = classNameFor("dropzone:type:trash")
    const el = this.element.getElementsByClassName(className).item(0)
    Util.notNull(el)

    return el
  }

  // circuit dropzone handlers

  private circuitDropzoneHandlers(): DropEventHandlers {
    return {
      onDragEnter: this.onCircuitDropzoneDragEnter.bind(this),
      onDragLeave: this.onCircuitDropzoneDragLeave.bind(this),
      onDrop: this.onCircuitDropzoneDrop.bind(this),
    }
  }

  private onCircuitDropzoneDragEnter(event: Interact.DropEvent) {
    const dropzone = new CircuitDropzone(event.target)
    const draggable = DraggableItem.create(event.relatedTarget)

    dropzone.enter(draggable)
  }

  private onCircuitDropzoneDragLeave(event: Interact.DropEvent) {
    const dropzone = new CircuitDropzone(event.target)
    const draggable = DraggableItem.create(event.relatedTarget)

    dropzone.leave(draggable)
  }

  private onCircuitDropzoneDrop(event: Interact.DropEvent) {
    const dropzone = new CircuitDropzone(event.target)
    const draggable = DraggableItem.create(event.relatedTarget)
    const originalDropzone = draggable.dropzone

    if (
      this.circuit.wires[dropzone.bit].empty &&
      !this.circuit.wires[dropzone.bit].dropzones[0].isEqualTo(dropzone) &&
      !(draggable.instruction instanceof WriteGate)
    ) {
      const newWriteDraggable = this.newWriteDraggable()

      const writeStep = this.circuit.steps[1]
      const newWriteDropzone = writeStep.dropzones[dropzone.bit]
      newWriteDropzone.element.insertBefore(
        newWriteDraggable.element,
        newWriteDropzone.element.firstChild,
      )
      newWriteDropzone.occupied = true

      newWriteDraggable.enableDnd()
    }

    const newCircuitDraggableElement = dropzone.drop(draggable)
    if (newCircuitDraggableElement) {
      new CircuitDraggable(newCircuitDraggableElement).enableDnd()
    }

    dropzone.circuitStep.shadow = false

    draggable.dropped = true
    if (draggable.dropzone.element === dropzone.element) return

    draggable.dropzone.occupied = false

    if (originalDropzone instanceof CircuitDropzone) {
      originalDropzone.circuitStep.updateGateConnections()
    }
    if (dropzone instanceof CircuitDropzone) {
      dropzone.circuitStep.updateGateConnections()
    }

    this.removeEmptySteps()

    this.updateWires()
    this.element.dispatchEvent(new CustomEvent("circuitUpdateEvent"))
  }

  private updateWires() {
    const wireActive = Array<boolean>(this.circuit.nqubit).fill(false)
    const wireActiveOrig = Array<boolean>(this.circuit.nqubit).fill(false)

    this.circuit.steps.forEach((each) => {
      each.dropzones.forEach((dz, bit) => {
        if (dz.instruction instanceof WriteGate) {
          wireActive[bit] = true
          wireActiveOrig[bit] = true
        } else if (dz.instruction instanceof MeasureGate) {
          wireActive[bit] = false
          wireActiveOrig[bit] = false
        } else if (
          dz.instruction instanceof SwapGate &&
          !dz.instruction.disabled
        ) {
          const otherTarget = dz.instruction.targets.find((t) => t != bit)
          Util.notNull(otherTarget)

          dz.inputWireActive = wireActiveOrig[bit]
          dz.outputWireActive = wireActiveOrig[otherTarget]
          wireActive[bit] = wireActiveOrig[otherTarget]
        } else {
          dz.wireActive = wireActive[bit]
        }
      })
    })
  }

  private removeEmptySteps() {
    this.circuit.emptySteps.forEach((each) => {
      each.remove()
    })
    this.circuit.removeEmptyWire()
  }

  // Elements

  private get paletteEl(): HTMLElement {
    const el = document.getElementById("palette")
    Util.notNull(el)

    return el
  }

  private newWriteDraggable(): CircuitDraggable {
    const newWriteDraggableEl = this.writableGateElOnPalette().cloneNode(
      true,
    ) as HTMLElement
    newWriteDraggableEl.classList.remove(classNameFor("draggable:type:palette"))
    newWriteDraggableEl.classList.add(classNameFor("draggable:type:circuit"))

    return new CircuitDraggable(newWriteDraggableEl)
  }

  private writableGateElOnPalette(): HTMLElement {
    const el = this.paletteEl
      .getElementsByClassName(classNameFor("gate:write"))
      .item(0) as HTMLElement
    Util.notNull(el)

    return el
  }
}
