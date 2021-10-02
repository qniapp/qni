import { BlochDisplayElement } from "bloch_display_component/blochDisplayElement"
import { CircleNotationElement } from "circle_notation_component/circleNotationElement"
import { CircuitStepElement } from "circuit_step_component/circuitStepElement"
import { Complex } from "lib/math"
import { MeasurementGateElement } from "measurement_gate_component/measurementGateElement"
import { QuantumCircuitElement } from "quantum_circuit_component/quantumCircuitElement"
import { RunCircuitButtonElement } from "run_circuit_button_component/runCircuitButtonElement"
import { controller } from "@github/catalyst"

type MessageEventData = {
  type: "step" | "finish"
  blochVectors: { [bit: number]: [number, number, number] }
  bits: { [bit: number]: number }
  step: number
  amplitudes: Array<[number, number]>
  flags: { [key: string]: boolean }
}

@controller
export class QuantumSimulatorElement extends HTMLElement {
  private amplitudes: Complex[][] | undefined

  declare worker: Worker

  connectedCallback(): void {
    this.addEventListener("draggable.grab", this.proxyDraggableGrabEvent)
    this.addEventListener("draggable.ungrab", this.proxyDraggableUngrabEvent)
    this.addEventListener("draggable.trash", this.resizeAndRunCircuit)
    this.addEventListener("step.drop", this.resizeAndRunCircuit)
    this.addEventListener("step.click", this.gotoClickedStep)
    this.addEventListener("step.hover", this.showStateVectorOfHoveredStep)
    this.addEventListener("step.snap", this.updateAllSteps)
    this.addEventListener("step.snap", this.run)
    this.addEventListener("step.unsnap", this.updateAllSteps)
    this.addEventListener("step.unsnap", this.run)
    this.addEventListener("circuit.loaded", this.run)
    this.addEventListener("circuit.mouseleave", this.gotoBreakpoint)
    this.addEventListener("runCrcuitButton.click", this.run)

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

        if (data.bits) {
          const bits = data.bits
          const dropzones = step.dropzones
          for (const bit in bits) {
            const operation = dropzones[bit].draggableElement
            if (operation instanceof MeasurementGateElement) {
              operation.value = bits[bit]
            }
          }
        }

        this.amplitudes[data.step] = data.amplitudes.map((amp) => {
          return new Complex(amp[0], amp[1])
        })
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
        this.runButton?.enable()
      }
    })
  }

  private run(): void {
    this.worker.postMessage({
      nqubit: this.quantumCircuit!.nqubit,
      steps: this.quantumCircuit!.serializedSteps,
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

  private updateAllSteps(): void {
    this.quantumCircuit!.updateAllSteps()
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

    const amplitudes = this.amplitudes[stepIndex]
    if (!amplitudes) return
    const nqubit = Math.log2(amplitudes.length)

    const circleNotationElement = document.getElementById(
      "circle-notation",
    ) as CircleNotationElement
    circleNotationElement.nqubit = nqubit
    circleNotationElement.setAmplitudes(amplitudes)
  }

  private proxyDraggableGrabEvent(): void {
    this.quantumCircuit?.dispatchEvent(new Event("draggable.grab"))
  }

  private proxyDraggableUngrabEvent(event: CustomEvent): void {
    this.quantumCircuit?.dispatchEvent(
      new CustomEvent("draggable.ungrab", {
        detail: { x: event.detail.x, y: event.detail.y },
        bubbles: false,
      }),
    )
  }

  private get quantumCircuit(): QuantumCircuitElement | null {
    return this.querySelector("quantum-circuit") as QuantumCircuitElement
  }

  private get runButton(): RunCircuitButtonElement | null {
    return this.querySelector("run-circuit-button") as RunCircuitButtonElement
  }
}
