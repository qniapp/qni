import { Circuit } from "lib/circuit"
import {
  CircuitElement,
  ControlGate,
  HadamardGate,
  IGate,
  NotGate,
  PhaseGate,
  ReadoutGate,
  SwapGate,
  WriteGate,
} from "./gates"

import { CircuitDraggable } from "./circuitDraggable"
import { CircuitDropzone } from "./circuitDropzone"
import { DraggableItem } from "./draggableItem"
import { GatePopup } from "lib/editor"
import { PaletteDraggable } from "./paletteDraggable"
import { TrashDropzone } from "./trashDropzone"
import { classNameFor } from "lib/base"
import {
  DragEventHandler,
  DragEventHandlers,
  DropEventHandlers,
} from "./mixins"
import { Connectable, Controllable } from "./gates/mixins"
import { Util } from "lib/base"

export class Editor {
  private element: Element
  private circuit: Circuit

  constructor(element: Element) {
    this.element = element
    this.circuit = new Circuit()

    TrashDropzone.create(this.trashDropzoneElement).setInteract({
      onDrop: this.trashGate.bind(this),
    })
    this.circuit.dropzones.forEach((each) => {
      each.setInteract(this.circuitDropzoneHandlers())
    })
  }

  enableDnd(draggable: PaletteDraggable | CircuitDraggable): void {
    if (draggable instanceof PaletteDraggable) {
      draggable.setInteract(this.paletteDraggableHandlers())
    } else if (draggable instanceof CircuitDraggable) {
      draggable.setInteract(this.circuitDraggableHandlers())
    }
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

    draggable.mouseUp()
    draggable.source?.remove()

    this.removeEmptySteps()

    const dropzone = draggable.dropzone
    if (dropzone instanceof CircuitDropzone) {
      this.updateGateConnections()
    }
  }

  showGatePopup(element: HTMLElement): void {
    const gatePopup = new GatePopup()
    gatePopup.show(element, () => {
      this.updateGateConnections()
    })
  }

  // Circuit draggable event handlers

  private circuitDraggableHandlers(): DragEventHandlers {
    return {
      onStart: this.onCircuitDraggableStart.bind(this),
      onMove: this.onCircuitDraggableMove.bind(this),
      onEnd: this.onCircuitDraggableEnd.bind(this),
    }
  }

  private onCircuitDraggableStart(event: Interact.DragEvent) {
    CircuitDraggable.create(event.target).start()
  }

  private onCircuitDraggableMove(event: Interact.DragEvent) {
    CircuitDraggable.create(event.target).move(event.dx, event.dy)
  }

  private onCircuitDraggableEnd(event: Interact.DragEvent) {
    CircuitDraggable.create(event.target).end()
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

  private onPaletteDraggableStart(event: Interact.DragEvent) {
    PaletteDraggable.create(event.target).start()
  }

  private onPaletteDraggableMove(event: Interact.DragEvent) {
    PaletteDraggable.create(event.target).move(event.dx, event.dy)
  }

  private onPaletteDraggableEnd(event: Interact.DragEvent) {
    PaletteDraggable.create(event.target).end()
    this.removeEmptySteps()
  }

  // Trash dropzone handler

  private trashGate(event: Interact.DropEvent) {
    const draggable = DraggableItem.create(event.relatedTarget)

    draggable.dropped = true
    draggable.dropzone.occupied = false

    if (draggable instanceof CircuitDraggable) {
      this.removeEmptySteps()
      this.updateGateConnections()
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
    const dropzone = CircuitDropzone.create(event.target)
    const draggable = DraggableItem.create(event.relatedTarget)
    const prevDropzone = this.circuit.prevDropzoneOf(dropzone)
    const nextDropzone = this.circuit.nextDropzoneOf(dropzone)

    if (prevDropzone) prevDropzone.adjoining = true
    if (nextDropzone) nextDropzone.adjoining = true

    dropzone.enter(draggable)
  }

  private onCircuitDropzoneDragLeave(event: Interact.DropEvent) {
    const dropzone = CircuitDropzone.create(event.target)
    const draggable = DraggableItem.create(event.relatedTarget)
    const prevDropzone = this.circuit.prevDropzoneOf(dropzone)
    const nextDropzone = this.circuit.nextDropzoneOf(dropzone)

    if (prevDropzone) prevDropzone.adjoining = false
    if (nextDropzone) nextDropzone.adjoining = false

    dropzone.leave(draggable)
  }

  private onCircuitDropzoneDrop(event: Interact.DropEvent) {
    const dropzone = CircuitDropzone.create(event.target)
    const draggable = DraggableItem.create(event.relatedTarget)
    const originalDropzone = draggable.dropzone
    const prevDropzone = this.circuit.prevDropzoneOf(dropzone)
    const nextDropzone = this.circuit.nextDropzoneOf(dropzone)

    if (prevDropzone) prevDropzone.adjoining = false
    if (nextDropzone) nextDropzone.adjoining = false

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
      const newCircuitDraggable = CircuitDraggable.create(
        newCircuitDraggableElement,
      )

      newCircuitDraggable.setInteract({
        onStart: this.onCircuitDraggableStart.bind(this),
        onMove: this.onCircuitDraggableMove.bind(this),
        onEnd: this.onCircuitDraggableEnd.bind(this),
      })
    }

    dropzone.circuitStep.shadow = false

    draggable.dropped = true
    if (draggable.dropzone.element === dropzone.element) return

    draggable.dropzone.occupied = false
    this.removeEmptySteps()
    this.updateGateConnections()
    if (
      originalDropzone instanceof CircuitDropzone &&
      originalDropzone.isInPage()
    ) {
      this.updateGateConnections()
    }
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
        } else if (dz.instruction instanceof ReadoutGate) {
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

  private updateGateConnections() {
    this.circuit.steps.forEach((_each, i) => {
      this.resetGateConnections(i)
      this.updateSwaps(i)
      this.updateCphases(i)
      this.updateControls(i)
    })
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
      each.connectWith(swapBits)
      if (swapBits.length == 2) {
        each.targets = swapBits
        each.disabled = false
        this.updateIGateConnections(circuitStepIndex, swapBits)
      } else {
        each.targets = []
        each.disabled = true
      }
    })
  }

  private updateCphases(circuitStepIndex: number) {
    const circuitStep = this.circuit.steps[circuitStepIndex]
    const phaseGates = circuitStep.instructions.filter((each) => {
      return each instanceof PhaseGate
    }) as PhaseGate[]

    phaseGates.forEach((each) => {
      const phaseBits = phaseGates
        .filter((other) => {
          return other.phi === each.phi
        })
        .map((other) => {
          return other.bit
        })
        .sort()
      if (phaseBits.length == 2) {
        each.connectWith(phaseBits)
        each.targets = phaseBits
        this.updateIGateConnections(circuitStepIndex, phaseBits)
      } else {
        each.connectWith([])
        each.targets = []
      }
    })
  }

  private updateControls(circuitStepIndex: number) {
    const circuitStep = this.circuit.steps[circuitStepIndex]
    const controlGates = circuitStep.gatesOf(ControlGate)
    const controllableGates = circuitStep.controllableGates
    const toBit = (gate: CircuitElement) => {
      return gate.bit
    }
    const controlGateBits = controlGates.map(toBit)
    const controllableGateBits = controllableGates.map(toBit)

    if (controllableGates.length == 0) {
      if (controlGates.length == 2) {
        controlGates.forEach((each) => {
          each.targets = controlGateBits
          each.connectWith(controlGateBits)
          each.disabled = false
        })
      } else {
        controlGates.forEach((each) => {
          each.targets = []
          each.connectWith([])
          each.disabled = true
        })
      }
    } else {
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

      if (controlGateBits.length > 0) {
        this.updateIGateConnections(
          circuitStepIndex,
          controlGateBits.concat(controllableGateBits),
        )
      }
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

  private resetGateConnections(circuitStepIndex: number) {
    const circuitStep = this.circuit.steps[circuitStepIndex]

    circuitStep.dropzones.forEach((each) => {
      if (each.instruction instanceof IGate) {
        each.disconnectFromLowerBit()
        each.disconnectFromUpperBit()
      } else {
        each.instruction.controls = []
        each.instruction.targets = []
        if (
          "disconnectFromLowerBit" in each.instruction &&
          "disconnectFromUpperBit" in each.instruction
        ) {
          each.instruction.disconnectFromLowerBit()
          each.instruction.disconnectFromUpperBit()
        }
      }
    })
  }

  private updateIGateConnections(
    circuitStepIndex: number,
    targetBits: number[],
  ) {
    const circuitStep = this.circuit.steps[circuitStepIndex]
    const bits = targetBits.sort()

    circuitStep.dropzones.forEach((dropzone, i) => {
      if (
        dropzone.instruction instanceof IGate &&
        bits[0] < i &&
        i < bits[bits.length - 1]
      ) {
        dropzone.connectWithLowerBit()
        dropzone.connectWithUpperBit()
      } else {
        dropzone.disconnectFromLowerBit()
        dropzone.disconnectFromUpperBit()
      }
    })
  }

  private removeEmptySteps() {
    this.circuit.emptySteps.forEach((each) => {
      each.remove()
    })
    this.circuit.removeEmptyWire()
  }
}
