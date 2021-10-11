import { BlochDisplayElement } from "components/blochDisplayElement"
import { CircleNotationElement } from "components/circleNotationElement"
import { CircuitStepElement } from "components/circuitStepElement"
import { Complex } from "lib/math"
import { Draggable } from "./mixins"
import { MeasurementGateElement } from "components/measurementGateElement"
import { QuantumCircuitElement } from "components/quantumCircuitElement"
import { RunCircuitButtonElement } from "components/runCircuitButtonElement"
import { Util } from "lib/base"
import { controller } from "@github/catalyst"

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
  private amplitudes: Array<{ [ket: number]: Complex }> | undefined

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

    this.addEventListener("draggable.grab", this.prepareDraggableDrop)
    this.addEventListener("draggable.ungrab", this.proxyDraggableUngrabEvent)
    this.addEventListener("draggable.trash", this.resizeAndRunCircuit)
    this.addEventListener("step.drop", this.resizeAndRunCircuit)
    this.addEventListener("step.click", this.gotoClickedStep)
    this.addEventListener("step.hover", this.showStateVectorOfHoveredStep)
    this.addEventListener("step.snap", this.run)
    this.addEventListener("step.unsnap", this.run)

    this.addEventListener("circuit.loaded", this.registerQuantumCircuit)
    this.addEventListener("circuit.loaded", this.run)
    this.addEventListener("circuit.mouseleave", this.gotoBreakpoint)

    this.addEventListener("circle-notation.loaded", this.registerCircleNotation)
    this.addEventListener(
      "circle-notation.visibilityChanged",
      this.showVisibleQubitCircles,
    )

    this.addEventListener(
      "run-circuit-button.loaded",
      this.registerRunCircuitButton,
    )
    this.addEventListener("run-circuit-button.click", this.run)

    this.addEventListener("operation.change", this.run)

    this.worker = new Worker("/serviceworker.js")
    this.worker.addEventListener("message", (e: MessageEvent) => {
      const data = e.data as MessageEventData
      this.amplitudes = this.amplitudes || []

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

        const complexAmplitudes: { [ket: number]: Complex } = {}
        for (const ket in data.amplitudes) {
          const c = data.amplitudes[ket]
          complexAmplitudes[ket] = new Complex(c[0], c[1])
        }

        this.amplitudes[data.step] = complexAmplitudes
      } else if (data.type === "finish") {
        const activeStep = this.quantumCircuit!.activeStep
        const breakpoint = this.quantumCircuit!.breakpoint

        if (activeStep) {
          const stepIndex = this.fetchStepIndex(activeStep)
          this.drawStateVector(stepIndex)
        } else if (breakpoint) {
          this.gotoBreakpoint()
        } else {
          this.setBreakpointAndShowStateVector(0)
        }
        this.runCircuitButton?.enable()
      }
    })
  }

  private registerCircleNotation(event: Event): void {
    this.circleNotation = event.target as CircleNotationElement
  }

  private registerQuantumCircuit(event: Event): void {
    this.quantumCircuit = event.target as QuantumCircuitElement
  }

  private registerRunCircuitButton(event: Event): void {
    this.runCircuitButton = event.target as RunCircuitButtonElement
  }

  private showVisibleQubitCircles(event: Event): void {
    const ketNumbers = (event as CustomEvent).detail as number[]
    Util.notNull(ketNumbers)

    this.visibleQubitCircleKets = ketNumbers
    this.run()
  }

  private run(): void {
    if (this.quantumCircuit === null) return
    if (this.circleNotation === null) return

    const nqubit = this.quantumCircuit.qubitCount
    this.circleNotation.qubitCount = nqubit

    this.worker.postMessage({
      nqubit,
      steps: this.quantumCircuit.serializedSteps,
      kets: this.visibleQubitCircleKets,
    })
  }

  private setBreakpointAndShowStateVector(stepIndex: number): void {
    this.quantumCircuit!.setBreakpoint(stepIndex)
    this.drawStateVector(stepIndex)
  }

  private gotoClickedStep(event: Event): void {
    const step = (event as CustomEvent).detail as CircuitStepElement
    const stepIndex = this.fetchStepIndex(step)

    this.setBreakpointAndShowStateVector(stepIndex)
  }

  private showStateVectorOfHoveredStep(event: Event): void {
    const step = (event as CustomEvent).detail as CircuitStepElement
    const stepIndex = this.fetchStepIndex(step)

    this.drawStateVector(stepIndex)
  }

  private resizeAndRunCircuit(): void {
    this.quantumCircuit!.resize()
    this.run()
  }

  private gotoBreakpoint(): void {
    const breakpoint = this.quantumCircuit?.breakpoint
    const stepIndex = this.fetchStepIndex(breakpoint!)

    this.drawStateVector(stepIndex)
  }

  private fetchStepIndex(step: CircuitStepElement): number {
    const index = this.quantumCircuit!.steps.indexOf(step)
    if (index === -1) {
      throw new Error("CircuitStep not found")
    }
    return index
  }

  private drawStateVector(stepIndex: number): void {
    if (this.amplitudes === undefined) return
    if (this.circleNotation === null) return

    const amplitudes = this.amplitudes[stepIndex]
    if (!amplitudes) return

    this.circleNotation.setAmplitudes(amplitudes)
  }

  private prepareDraggableDrop(event: Event): void {
    event.stopPropagation()

    const draggable = (event as CustomEvent).detail as Draggable
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
      new CustomEvent("draggable.ungrab", {
        detail: { x: coordinates.x, y: coordinates.y },
        bubbles: false,
      }),
    )
  }
}
