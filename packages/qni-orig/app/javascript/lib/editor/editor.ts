import { Circuit } from "lib/circuit"
import {
  Write,
  Readout,
  NotGate,
  ControlGate,
  IGate,
  SwapGate,
  HadamardGate,
  Instruction,
} from "./instructions"

import { CircuitDraggable } from "./circuitDraggable"
import { CircuitDropzone } from "./circuitDropzone"
import { DraggableItem } from "./draggableItem"
import { PaletteDraggable } from "./paletteDraggable"
import { TrashDropzone } from "./trashDropzone"
import { classNameFor } from "lib/base"
import {
  DragEventHandler,
  DragEventHandlers,
  DropEventHandlers,
} from "./mixins"
import { InternalError } from "lib/error"
import { Connectable, Controllable, Disableable } from "./instructions/mixins"

export class Editor {
  private element: Element
  private circuit: Circuit

  constructor(element: Element) {
    this.element = element
    this.circuit = new Circuit()

    new TrashDropzone(this.trashDropzoneElement).setInteract({
      onDrop: this.onTrashDropzoneDrop.bind(this),
    })
    this.circuit.dropzones.forEach((each) => {
      each.setInteract(this.circuitDropzoneHandlers())
    })
  }

  // Draggable event handlers

  onDraggableMouseOver(event: MouseEvent): void {
    const draggable = DraggableItem.create(event.target)

    if (draggable instanceof PaletteDraggable) {
      draggable.setInteract(this.paletteDraggableHandlers())
    } else if (draggable instanceof CircuitDraggable) {
      draggable.setInteract(this.circuitDraggableHandlers())
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  onDraggableMouseLeave(_event: MouseEvent): void {}

  onDraggableMouseClick(event: MouseEvent): void {
    const draggable = DraggableItem.create(event.target)

    if (
      draggable instanceof CircuitDraggable &&
      "showPopup" in draggable.instruction
    ) {
      draggable.instruction.showPopup()
    }
  }

  onDraggableMouseHold(event: MouseEvent): void {
    this.circuit.appendNewWire(this.circuitDropzoneHandlers())
    this.circuit.steps.slice(2).forEach((step) => {
      step.prependShadow(this.circuitDropzoneHandlers())
    })

    const draggable = DraggableItem.create(event.target)
    draggable.mouseDown(event)
  }

  onDraggableMouseUp(event: MouseEvent): void {
    const draggable = DraggableItem.create(event.target)

    draggable.mouseUp()
    draggable.source?.remove()

    this.removeEmptySteps()

    const dropzone = draggable.dropzone
    if (dropzone instanceof CircuitDropzone) {
      this.updateGateConnections(dropzone.circuitStep.index)
    }
  }

  // Circuit draggable event handlers

  private circuitDraggableHandlers(): DragEventHandlers {
    return {
      onStart: this.onCircuitDraggableStart.bind(this),
      onMove: this.onCircuitDraggableMove.bind(this),
      onEnd: this.onCircuitDraggableEnd.bind(this),
    }
  }

  private onCircuitDraggableStart(event: Interact.DragEvent): void {
    new CircuitDraggable(event.target).start()
  }

  private onCircuitDraggableMove(event: Interact.DragEvent): void {
    new CircuitDraggable(event.target).move(event.dx, event.dy)
  }

  private onCircuitDraggableEnd(event: Interact.DragEvent): void {
    new CircuitDraggable(event.target).end()
    this.removeEmptySteps()
  }

  // Palette draggable handlers

  private paletteDraggableHandlers(): {
    [key: string]: DragEventHandler
  } {
    return {
      onStart: this.onPaletteDraggableStart.bind(this),
      onMove: this.onPaletteDraggableMove.bind(this),
      onEnd: this.onPaletteDraggableEnd.bind(this),
    }
  }

  private onPaletteDraggableStart(event: Interact.DragEvent): void {
    new PaletteDraggable(event.target).start()
  }

  private onPaletteDraggableMove(event: Interact.DragEvent): void {
    new PaletteDraggable(event.target).move(event.dx, event.dy)
  }

  private onPaletteDraggableEnd(event: Interact.DragEvent): void {
    new PaletteDraggable(event.target).end()
    this.removeEmptySteps()
  }

  // Trash dropzone handler

  private onTrashDropzoneDrop(event: Interact.DropEvent): void {
    const draggable = DraggableItem.create(event.relatedTarget)

    draggable.dropped = true
    draggable.dropzone.occupied = false
    draggable.instruction.animateJello = false

    if (draggable instanceof CircuitDraggable) {
      this.updateGateConnections(draggable.dropzone.circuitStep.index)
      this.removeEmptySteps()
      this.element.dispatchEvent(new CustomEvent("circuitUpdateEvent"))
    }
  }

  private get trashDropzoneElement(): Element {
    const className = classNameFor("dropzone:type:trash")
    const el = this.element.getElementsByClassName(className).item(0)
    if (!el) throw new InternalError(`.${className} not found`)

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

  private onCircuitDropzoneDragEnter(event: Interact.DropEvent): void {
    const dropzone = new CircuitDropzone(event.target)
    const draggable = DraggableItem.create(event.relatedTarget)
    const prevDropzone = this.circuit.prevDropzoneOf(dropzone)
    const nextDropzone = this.circuit.nextDropzoneOf(dropzone)

    if (prevDropzone) prevDropzone.instruction.bordered = true
    if (nextDropzone) nextDropzone.instruction.bordered = true

    dropzone.enter(draggable)
  }

  private onCircuitDropzoneDragLeave(event: Interact.DropEvent): void {
    const dropzone = new CircuitDropzone(event.target)
    const draggable = DraggableItem.create(event.relatedTarget)
    const prevDropzone = this.circuit.prevDropzoneOf(dropzone)
    const nextDropzone = this.circuit.nextDropzoneOf(dropzone)

    if (prevDropzone) prevDropzone.instruction.bordered = false
    if (nextDropzone) nextDropzone.instruction.bordered = false

    dropzone.leave(draggable)
  }

  private onCircuitDropzoneDrop(event: Interact.DropEvent): void {
    const dropzone = new CircuitDropzone(event.target)
    const draggable = DraggableItem.create(event.relatedTarget)
    const originalDropzone = draggable.dropzone
    const prevDropzone = this.circuit.prevDropzoneOf(dropzone)
    const nextDropzone = this.circuit.nextDropzoneOf(dropzone)

    if (prevDropzone) prevDropzone.instruction.bordered = false
    if (nextDropzone) nextDropzone.instruction.bordered = false

    draggable.instruction.animateJello = false

    if (this.circuit.wires[dropzone.bit].isEmpty) {
      const paletteElement = document.getElementById("palette")
      const writeDraggable = paletteElement
        ?.getElementsByClassName(classNameFor("draggable:type:palette"))
        .item(0)
      if (!writeDraggable) {
        throw new Error(`.${classNameFor("draggable:type:palette")} not found`)
      }

      const newWriteDraggable = writeDraggable.cloneNode(true) as Element
      newWriteDraggable.classList.remove(classNameFor("draggable:type:palette"))
      newWriteDraggable.classList.add(classNameFor("draggable:type:circuit"))
      newWriteDraggable.classList.add(classNameFor("draggable:type:write"))

      const writeStep = this.circuit.steps[1]
      const newWriteDropzone = writeStep.dropzones[dropzone.bit]
      newWriteDropzone.element.insertBefore(
        newWriteDraggable,
        newWriteDropzone.element.firstChild,
      )
      newWriteDropzone.occupied = true
    }

    const newCircuitDraggableElement = dropzone.drop(draggable)
    if (newCircuitDraggableElement) {
      const newCircuitDraggable = new CircuitDraggable(
        newCircuitDraggableElement,
      )

      newCircuitDraggable.setInteract({
        onStart: this.onCircuitDraggableStart.bind(this),
        onMove: this.onCircuitDraggableMove.bind(this),
        onEnd: this.onCircuitDraggableEnd.bind(this),
      })

      if (dropzone.instruction instanceof Write) {
        newCircuitDraggableElement.classList.add(
          classNameFor("draggable:type:write"),
        )
      }
      if (dropzone.instruction instanceof Readout) {
        newCircuitDraggableElement.classList.add(
          classNameFor("draggable:type:readout"),
        )
      }
    }

    dropzone.circuitStep.shadow = false

    draggable.dropped = true
    if (draggable.dropzone.element === dropzone.element) return

    draggable.dropzone.occupied = false
    this.removeEmptySteps()
    this.circuit.updateNqubit()
    this.updateWires()

    this.updateGateConnections(dropzone.circuitStep.index)
    if (
      originalDropzone instanceof CircuitDropzone &&
      originalDropzone.isInPage()
    ) {
      this.updateGateConnections(originalDropzone.circuitStep.index)
    }
    this.element.dispatchEvent(new CustomEvent("circuitUpdateEvent"))
  }

  private updateWires(): void {
    const wireActive = Array<boolean>(this.circuit.nqubit).fill(false)

    this.circuit.steps.forEach((each) => {
      const dropzones = each.dropzones
      if (dropzones.length == 0) return

      dropzones.forEach((dz, bit) => {
        if (dz.instruction instanceof Write) {
          wireActive[bit] = true
        }
        if (dz.instruction instanceof SwapGate) {
          dz.wireActive = true
          wireActive[bit] = true
        } else if (dz.instruction instanceof Readout) {
          wireActive[bit] = false
        } else {
          dz.wireActive = wireActive[bit]
        }
      })
    })
  }

  private updateGateConnections(circuitStepIndex: number) {
    this.updateSwaps(circuitStepIndex)
    this.updateControls(circuitStepIndex)
    this.updateIGateConnections(circuitStepIndex)
  }

  private updateSwaps(circuitStepIndex: number) {
    const circuitStep = this.circuit.steps[circuitStepIndex]
    const swapGates = circuitStep.instructions.filter((each) => {
      return each instanceof SwapGate
    }) as SwapGate[]
    const swapBits = swapGates
      .map((each) => {
        return each.bit
      })
      .sort()

    swapGates.forEach((each) => {
      if (swapBits.length == 2) {
        each.targets = swapBits
        each.connectWith(swapBits)
        each.disabled = false
      } else {
        each.targets = []
        each.connectWith([])
        each.disabled = true
      }
    })
  }

  private updateControls(circuitStepIndex: number) {
    const circuitStep = this.circuit.steps[circuitStepIndex]
    const controlGates = circuitStep.gatesOf(ControlGate)
    const controllableGates = circuitStep.controllableGates
    if (controlGates.length == 0) return

    if (controllableGates.length == 0) {
      controlGates.forEach((each) => {
        each.targets = []
        each.connectWith([])
        each.disabled = true
      })
    } else {
      const toBit = (gate: Instruction) => {
        return gate.bit
      }
      const controlGateBits = controlGates.map(toBit)
      const controllableGateBits = controllableGates.map(toBit)

      controlGates.forEach((each) => {
        each.targets = controllableGateBits
        each.connectWith(controlGateBits.concat(controllableGateBits))
        each.disabled = false
      })

      this.updateControlledUConnections(
        circuitStep.gatesOf(NotGate),
        controlGateBits,
        controllableGateBits,
      )
      this.updateControlledUConnections(
        circuitStep.gatesOf(HadamardGate),
        controlGateBits,
        controllableGateBits,
      )
      this.updateControlledUConnections(
        circuitStep.gatesOf(SwapGate),
        controlGateBits,
        controllableGateBits,
      )
    }
  }

  private updateControlledUConnections<T extends Controllable & Connectable>(
    gates: T[],
    controlGateBits: number[],
    controllableGateBits: number[],
  ) {
    if (controlGateBits.length == 0) return

    gates.forEach((each) => {
      each.controls = controlGateBits
      each.connectWith(controlGateBits.concat(controllableGateBits))
    })
  }

  private updateIGateConnections(circuitStepIndex: number) {
    const circuitStep = this.circuit.steps[circuitStepIndex]
    const toBit = (gate: Instruction) => {
      return gate.bit
    }
    const isEnabled = (gate: Instruction) => {
      return !(gate as Disableable).disabled
    }
    const notGateBits = circuitStep.gatesOf(NotGate).map(toBit)
    const controlGateBits = circuitStep
      .gatesOf(ControlGate)
      .filter(isEnabled)
      .map(toBit)
    const swapGateBits = circuitStep
      .gatesOf(SwapGate)
      .filter(isEnabled)
      .map(toBit)
    const bits = notGateBits.concat(controlGateBits).concat(swapGateBits).sort()

    circuitStep.dropzones.forEach((each, i) => {
      if (
        each.instruction instanceof IGate &&
        bits[0] < i &&
        i < bits[bits.length - 1]
      ) {
        each.connectWithLowerBit()
        each.connectWithUpperBit()
      } else {
        each.disconnectFromLowerBit()
        each.disconnectFromUpperBit()
      }
    })
  }

  private removeEmptySteps(): void {
    this.circuit.emptySteps.forEach((each) => {
      each.remove()
    })
    this.circuit.removeEmptyWire()
  }
}
