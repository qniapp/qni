import { Constructor } from "./constructor"
import { DragAndDroppable } from "./dragAndDroppable"
import { QuantumCircuitElement } from "../quantumCircuitElement"
import { Util } from "lib"

export declare class Circuitable {
  get quantumCircuit(): QuantumCircuitElement
  initCircuitable(): void
  initDragAndDroppable(event: Event): void
  setDragAndDroppableCursorStyleGrab(event: Event): void
  setDragAndDroppableCursorStyleGrabbing(event: Event): void
  prepareForDrop(event: Event): void
  removeDragAndDroppableCursorStyle(event: Event): void
  setDocumentCursorStyleGrabbing(): void
  setDocumentCursorStyleAuto(): void
  resizeCircuit(): void
  addShadowStep(event: Event): void
}

export function CircuitableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<Circuitable> & TBase {
  class CircuitableMixinClass extends Base {
    get quantumCircuit(): QuantumCircuitElement {
      const el = this.querySelector("quantum-circuit") as QuantumCircuitElement
      Util.notNull(el)

      return el
    }

    initCircuitable(): void {
      this.addEventListener("dragAndDroppable.load", this.initDragAndDroppable)
      this.addEventListener(
        "dragAndDroppable.mouseenter",
        this.setDragAndDroppableCursorStyleGrab,
      )
      this.addEventListener(
        "dragAndDroppable.grab",
        this.setDocumentCursorStyleGrabbing,
      )
      this.addEventListener(
        "dragAndDroppable.grab",
        this.setDragAndDroppableCursorStyleGrabbing,
      )
      this.addEventListener("dragAndDroppable.grab", this.prepareForDrop)
      this.addEventListener(
        "dragAndDroppable.ungrab",
        this.removeDragAndDroppableCursorStyle,
      )
      this.addEventListener(
        "dragAndDroppable.ungrab",
        this.setDocumentCursorStyleAuto,
      )
      this.addEventListener(
        "dragAndDroppable.enddragging",
        this.setDocumentCursorStyleAuto,
      )
      this.addEventListener(
        "dragAndDroppable.trash",
        this.setDocumentCursorStyleAuto,
      )
      this.addEventListener("dragAndDroppable.trash", this.resizeCircuit)
      this.addEventListener(
        "dragAndDroppable.snapToNewDropzone",
        this.addShadowStep,
      )
      this.addEventListener("step.drop", this.resizeCircuit)
    }

    initDragAndDroppable(event: Event): void {
      const dragAndDroppable = (event as CustomEvent).detail
        .element as DragAndDroppable
      Util.notNull(dragAndDroppable)

      dragAndDroppable.dragAndDrop = true
      dragAndDroppable.initDragAndDrop()
    }

    setDragAndDroppableCursorStyleGrab(event: Event): void {
      const operation = (event as CustomEvent).detail.element as HTMLElement
      Util.notNull(operation)

      if (this.quantumCircuit.editing) {
        operation.style.cursor = "grabbing"
      } else {
        operation.style.cursor = "grab"
      }
    }

    setDragAndDroppableCursorStyleGrabbing(event: Event): void {
      const operation = (event as CustomEvent).detail.element as HTMLElement
      Util.notNull(operation)

      operation.style.cursor = "grabbing"
    }

    prepareForDrop(event: Event): void {
      const dragAndDroppable = (event as CustomEvent).detail
        .element as DragAndDroppable
      Util.notNull(dragAndDroppable)

      this.quantumCircuit.prepareForDrop()
      dragAndDroppable.setSnapTargets(
        this.quantumCircuit.dropzones,
        this.quantumCircuit.wireCount,
      )
    }

    removeDragAndDroppableCursorStyle(event: Event) {
      const operation = (event as CustomEvent).detail.element as HTMLElement
      Util.notNull(operation)

      operation.style.cursor = ""
    }

    setDocumentCursorStyleGrabbing(): void {
      document.documentElement.style.cursor = "grabbing"
    }

    setDocumentCursorStyleAuto(): void {
      document.documentElement.style.cursor = "auto"
    }

    resizeCircuit(): void {
      this.quantumCircuit.resize()
    }

    addShadowStep(event: Event): void {
      const customEvent = event as CustomEvent
      const operation = customEvent.detail.element as HTMLElement
      const dragAndDroppable = customEvent.detail.element as DragAndDroppable
      const stepIndex = customEvent.detail.stepIndex as number
      const wireIndex = customEvent.detail.wireIndex as number

      const newStep = this.quantumCircuit.addCircuitStepAfter(stepIndex)
      const dropzone = newStep.dropzones[wireIndex]

      dropzone.assign(operation)
      dragAndDroppable.updateSnapTargets(newStep.dropzones)
    }
  }

  return CircuitableMixinClass as Constructor<Circuitable> & TBase
}
