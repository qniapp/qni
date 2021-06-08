import CircleNotationController from "./circle_notation_controller"
import { Circuit } from "lib/circuit"
import { CircuitStep } from "lib/editor/circuitStep"
import { Controller } from "stimulus"
import { HadamardGate, NotGate, ReadoutGate } from "lib/editor/gates"

class RunButton {
  private element: HTMLInputElement

  constructor(element: HTMLInputElement) {
    this.element = element
  }

  set running(value: boolean) {
    if (value) {
      this.element.classList.add("run-button--running")
      this.element.disabled = true
    } else {
      this.element.classList.remove("run-button--running")
      this.element.disabled = false
    }
  }
}

type MessageEventData = {
  type: "step" | "finish"
  bits: { [bit: number]: number }
  step: number
  magnitudes: { [bit: number]: number }
  phases: { [bit: number]: number }
  flags: { [key: string]: boolean }
}

export default class SimulatorController extends Controller {
  private magnitudes: { [step: number]: { [bit: number]: number } } | undefined
  private phases: { [step: number]: { [bit: number]: number } } | undefined

  static targets = ["circuit", "stateVector", "runButton"]

  declare worker: Worker
  declare readonly circuitTarget: HTMLElement
  declare readonly stateVectorTarget: HTMLElement
  declare readonly runButtonTarget: HTMLElement

  connect(): void {
    this.worker = new Worker("/service-worker.js")
    this.worker.addEventListener(
      "message",
      ((e: MessageEvent) => {
        if (!e.data) {
          throw new Error("event data is not set")
        }

        const data = e.data as MessageEventData
        this.magnitudes = this.magnitudes || {}
        this.phases = this.phases || {}

        if (data.type === "step") {
          const step = this.circuit.steps[data.step]

          if (data.bits) {
            const bits = data.bits
            const dropzones = step.dropzones
            for (const bit in bits) {
              const instruction = dropzones[bit].instruction
              if (instruction instanceof ReadoutGate) {
                instruction.value = bits[bit]
              }
            }
          }

          step.instructions.forEach((each) => {
            if (each instanceof NotGate || each instanceof HadamardGate) {
              if (each.if) {
                each.disabled = !data.flags[each.if]
              }
            }
          })

          this.magnitudes[data.step] = data.magnitudes
          this.phases[data.step] = data.phases
          step.done = true
        } else if (data.type === "finish") {
          this.gotoBreakpoint(this.breakpoint || 0)
          this.runButton.running = false
        }
      }).bind(this),
    )

    this.run()
  }

  get nqubit(): number {
    const dataNqubit = this.circuitTarget.getAttribute("data-nqubit")

    if (!dataNqubit) throw new Error("Cannot get data-nqubit")
    return parseInt(dataNqubit)
  }

  get breakpoint(): number | null {
    let breakpoint = null
    this.circuit.steps.forEach((each, i) => {
      if (each.isActive()) breakpoint = i
    })
    return breakpoint
  }

  gotoBreakpoint(stepIndex: number): void {
    this.toggleCircuitStepActive(stepIndex)
    this.drawStateVector(stepIndex)
  }

  circuitStepMouseEntered(event: MouseEvent): void {
    const circuitStep = CircuitStep.create(event.currentTarget as HTMLElement)
    this.drawStateVector(circuitStep.index)
  }

  circuitStepMouseLeave(): void {
    const breakpoint = this.breakpoint
    if (breakpoint === null) return
    this.drawStateVector(breakpoint)
  }

  circuitStepClicked(event: MouseEvent): void {
    const circuitStep = CircuitStep.create(event.currentTarget as HTMLElement)

    if (!circuitStep.isDone) {
      return
    }
    this.gotoBreakpoint(circuitStep.index)
  }

  toggleCircuitStepActive(stepIndex: number): void {
    this.circuit.steps.forEach((each, i) => {
      if (i == stepIndex) {
        each.active = true
      } else {
        each.active = false
      }
    })
  }

  run(): void {
    this.runButton.running = true
    this.circuit.steps.forEach((each) => {
      each.done = false
    })
    this.magnitudes = {}
    this.phases = {}

    const steps = this.steps
    this.worker.postMessage({ nqubit: steps[0].length, steps: steps })
  }

  private get steps() {
    return this.circuit.steps.slice(0, -1).map((step) => {
      return step.instructions.map((instruction) => {
        return instruction.serialize()
      })
    })
  }

  private drawStateVector(breakpoint: number): void {
    if (!this.magnitudes) throw new Error("magnitudes not set")
    if (!this.phases) throw new Error("phases not set")

    const magnitudes = this.magnitudes[breakpoint]
    const phases = this.phases[breakpoint]
    if (!magnitudes) return
    if (!phases) return

    this.circleNotationController.update(magnitudes, phases)
  }

  private get circuit(): Circuit {
    return new Circuit()
  }

  private get runButton(): RunButton {
    return new RunButton(this.runButtonTarget as HTMLInputElement)
  }

  private get circleNotationController(): CircleNotationController {
    const el = document.getElementById("circle-notation")

    if (!el) {
      throw new Error("circle notation not found")
    }

    const controller = this.application.getControllerForElementAndIdentifier(
      el,
      "circle-notation",
    )

    if (!controller) {
      throw new Error("circle-notation controller not found")
    }
    return controller as CircleNotationController
  }
}
