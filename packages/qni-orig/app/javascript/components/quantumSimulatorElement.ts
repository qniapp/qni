import { attr, controller } from "@github/catalyst"
import { BlochDisplayElement } from "components/blochDisplayElement"
import { CircleNotationElement } from "components/circleNotationElement"
import { CircuitStepElement } from "components/circuitStepElement"
import { Complex } from "lib/math"
import { DragAndDroppable } from "./mixins"
import { MeasurementGateElement } from "components/measurementGateElement"
import { QuantumCircuitElement } from "components/quantumCircuitElement"
import { RunCircuitButtonElement } from "components/runCircuitButtonElement"
import { Util } from "lib/base"

type MessageEventData = {
  type: "step" | "finish"
  blochVectors: { [bit: number]: [number, number, number] }
  measuredBits: { [bit: number]: number }
  step: number
  amplitudes: Array<[number, number]>
  flags: { [key: string]: boolean }
}

@controller
export class QuantumSimulatorElement extends HTMLElement {
  @attr serviceWorker = "/serviceworker.js"

  declare worker: Worker

  private quantumCircuit: QuantumCircuitElement | null
  private circleNotation: CircleNotationElement | null
  private runCircuitButton: RunCircuitButtonElement | null
  private visibleQubitCircleKets: number[]

  clearCircuit(): void {
    this.quantumCircuit?.clear()
  }

  connectedCallback(): void {
    this.circleNotation = null
    this.visibleQubitCircleKets = []

    this.addEventListener("circuit.load", this.registerQuantumCircuit)

    this.addEventListener("dragAndDroppable.grab", this.prepareDraggableDrop)
    this.addEventListener(
      "dragAndDroppable.ungrab",
      this.proxyDraggableUngrabEvent,
    )
    this.addEventListener("dragAndDroppable.enddragging", this.finishEditing)

    this.addEventListener("dragAndDroppable.trash", this.resizeCircuit)
    this.addEventListener("dragAndDroppable.trash", this.run)

    this.addEventListener("step.load", this.makeStepHoverable)

    this.addEventListener("step.drop", this.resizeCircuit)
    this.addEventListener("step.drop", this.run)

    this.addEventListener("step.hover", this.activateHoveredStep)
    this.addEventListener("step.hover", this.run)

    this.addEventListener("step.click", this.setBreakpoint)
    this.addEventListener("step.click", this.run)

    this.addEventListener("step.snap", this.run)

    this.addEventListener("step.unsnap", this.run)

    this.addEventListener("circuit.mouseleave", this.run)

    this.addEventListener("circle-notation.load", this.registerCircleNotation)
    this.addEventListener(
      "circle-notation.visibilityChanged",
      this.updateVisibleQubitCircleKets,
    )
    this.addEventListener("circle-notation.visibilityChanged", this.run)

    this.addEventListener(
      "run-circuit-button.load",
      this.registerRunCircuitButton,
    )
    this.addEventListener("run-circuit-button.click", this.run)

    this.addEventListener("operation.popup.change", this.run)

    this.worker = new Worker(this.serviceWorker)
    this.worker.addEventListener("message", (e: MessageEvent) => {
      Util.notNull(this.quantumCircuit)

      const activeStep = this.quantumCircuit.activeStep
      const breakpoint = this.quantumCircuit.breakpoint
      const currentStep = activeStep || breakpoint
      Util.notNull(currentStep)

      const stepIndex = this.fetchStepIndex(currentStep)
      const data = e.data as MessageEventData

      if (data.type === "step") {
        const step = this.quantumCircuit!.steps[data.step]

        for (const bit in data.blochVectors) {
          const blochDisplay = step.dropzones[bit]
            .draggableElement as BlochDisplayElement
          if (blochDisplay) {
            const blochVector = data.blochVectors[bit]
            blochDisplay!.x = blochVector[0]
            blochDisplay!.y = blochVector[1]
            blochDisplay!.z = blochVector[2]
          }
        }

        if (data.measuredBits) {
          const measuredBits = data.measuredBits
          const dropzones = step.dropzones
          for (const bit in measuredBits) {
            const operation = dropzones[bit].draggableElement
            if (operation instanceof MeasurementGateElement) {
              operation.value = measuredBits[bit]
            }
          }
        }

        for (const each of step.ifableGates) {
          if (each.if === "") continue
          each.disabled = !data.flags[each.if]
        }

        if (stepIndex === data.step) {
          const complexAmplitudes: { [ket: number]: Complex } = {}
          for (const ket in data.amplitudes) {
            const c = data.amplitudes[ket]
            complexAmplitudes[ket] = new Complex(c[0], c[1])
          }
          this.circleNotation?.setAmplitudes(complexAmplitudes)
        }
      } else if (data.type === "finish") {
        this.runCircuitButton?.enable()
      }
    })
  }

  // Register components

  private registerQuantumCircuit(event: Event): void {
    this.quantumCircuit = event.target as QuantumCircuitElement
  }

  private registerCircleNotation(event: Event): void {
    this.circleNotation = event.target as CircleNotationElement
  }

  private registerRunCircuitButton(event: Event): void {
    this.runCircuitButton = event.target as RunCircuitButtonElement
  }

  private updateVisibleQubitCircleKets(event: Event): void {
    const ketNumbers = (event as CustomEvent).detail as number[]
    Util.notNull(ketNumbers)

    this.visibleQubitCircleKets = ketNumbers
  }

  private run(): void {
    Util.notNull(this.quantumCircuit)
    Util.notNull(this.circleNotation)

    const activeStep = this.quantumCircuit.activeStep
    const breakpoint = this.quantumCircuit.breakpoint
    const step = activeStep || breakpoint
    Util.notNull(step)

    const stepIndex = this.fetchStepIndex(step)

    const serializedSteps = this.quantumCircuit.serializedSteps
    Util.need(serializedSteps.length > 0, "non-zero step length")

    const qubitCount = this.quantumCircuit.qubitCount
    this.circleNotation.qubitCount = qubitCount

    this.worker.postMessage({
      json: this.quantumCircuit.toJson(),
      qubitCount,
      stepIndex,
      steps: this.quantumCircuit.serializedSteps,
      targets: this.visibleQubitCircleKets,
    })
  }

  private setBreakpoint(event: Event): void {
    const step = (event as CustomEvent).detail as CircuitStepElement

    for (const each of this.quantumCircuit!.steps) {
      each.breakpoint = false
    }
    step!.breakpoint = true
  }

  private activateHoveredStep(event: Event): void {
    Util.notNull(this.quantumCircuit)

    if (this.quantumCircuit.editing) return

    const step = (event as CustomEvent).detail as CircuitStepElement

    for (const each of this.quantumCircuit.steps) {
      each.active = false
    }
    step.active = true
  }

  private makeStepHoverable(event: Event): void {
    if (this.quantumCircuit?.editing) return

    const step = (event as CustomEvent).detail as CircuitStepElement

    step.hoverable = true
  }

  private resizeCircuit(): void {
    this.quantumCircuit!.resize()
  }

  private fetchStepIndex(step: CircuitStepElement): number {
    const index = this.quantumCircuit!.steps.indexOf(step)
    if (index === -1) {
      throw new Error("CircuitStep not found")
    }
    return index
  }

  private prepareDraggableDrop(event: Event): void {
    event.stopPropagation()

    const draggable = (event as CustomEvent).detail as DragAndDroppable
    Util.notNull(draggable)
    Util.notNull(this.quantumCircuit)

    this.quantumCircuit.prepareDraggableDrop()
    draggable.setSnapTargets(this.quantumCircuit.freeDropzones)
  }

  private proxyDraggableUngrabEvent(event: Event): void {
    const coordinates = (event as CustomEvent).detail
    Util.notNull(coordinates)
    Util.notNull(coordinates.x)
    Util.notNull(coordinates.y)

    this.quantumCircuit?.dispatchEvent(
      new CustomEvent("dragAndDroppable.ungrab", {
        detail: { x: coordinates.x, y: coordinates.y },
        bubbles: false,
      }),
    )
  }

  private finishEditing(event: Event): void {
    const coordinates = (event as CustomEvent).detail
    Util.notNull(coordinates)
    Util.notNull(coordinates.x)
    Util.notNull(coordinates.y)

    this.quantumCircuit?.dispatchEvent(
      new CustomEvent("dragAndDroppable.enddragging", {
        detail: { x: coordinates.x, y: coordinates.y },
        bubbles: false,
      }),
    )
  }
}
