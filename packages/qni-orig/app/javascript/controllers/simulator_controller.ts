import CircleNotationController from "./circle_notation_controller"
import { Circuit } from "lib/circuit"
import { CircuitStep } from "lib/editor/circuitStep"
import { Controller } from "stimulus"
import {
  HadamardGate,
  NotGate,
  ReadoutGate,
  RootNotGate,
} from "lib/editor/gates"
import { RunButton } from "lib/simulator/runButton"
import { Breakpoint, Util, classNameFor } from "lib/base"

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

  static targets = ["circuit", "runButton"]

  declare runButton: RunButton
  declare worker: Worker
  declare readonly circuitTarget: HTMLElement
  declare readonly runButtonTarget: HTMLElement

  connect(): void {
    this.runButton = new RunButton(this.runButtonTarget as HTMLInputElement)

    this.worker = new Worker("/service-worker.js")
    this.worker.addEventListener(
      "message",
      ((e: MessageEvent) => {
        Util.notNull(e.data)

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
            if (
              each instanceof NotGate ||
              each instanceof HadamardGate ||
              each instanceof RootNotGate
            ) {
              if (each.if) {
                each.disabled = !data.flags[each.if]
              }
            }
          })

          this.magnitudes[data.step] = data.magnitudes
          this.phases[data.step] = data.phases

          step.done = true
        } else if (data.type === "finish") {
          this.gotoCircuitBreakpoint(this.circuitBreakpoint || 0)
          this.runButton.running = false
        }
      }).bind(this),
    )

    this.run()
  }

  get nqubit(): number {
    const dataNqubit = this.circuitTarget.getAttribute("data-nqubit")
    Util.notNull(dataNqubit)
    return parseInt(dataNqubit)
  }

  get circuitBreakpoint(): number | null {
    let circuitBreakpoint = null
    this.circuit.steps.forEach((each, i) => {
      if (each.isActive()) circuitBreakpoint = i
    })
    return circuitBreakpoint
  }

  gotoCircuitBreakpoint(stepIndex: number): void {
    this.toggleCircuitStepActive(stepIndex)
    this.drawStateVector(stepIndex)
  }

  circuitStepMouseEntered(event: MouseEvent): void {
    if (Breakpoint.isMobile()) return

    const circuitStep = CircuitStep.create(event.currentTarget as HTMLElement)
    this.drawStateVector(circuitStep.index)
  }

  circuitStepMouseLeave(): void {
    if (Breakpoint.isMobile()) return

    const circuitBreakpoint = this.circuitBreakpoint
    if (circuitBreakpoint === null) return
    this.drawStateVector(circuitBreakpoint)
  }

  circuitStepClicked(event: MouseEvent): void {
    const circuitStep = CircuitStep.create(event.currentTarget as HTMLElement)

    if (!circuitStep.isDone) {
      return
    }
    this.gotoCircuitBreakpoint(circuitStep.index)
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
    Array.from(document.getElementsByClassName(classNameFor("gate:type:readout"))).forEach((each) => {
      each.classList.remove(classNameFor("gate:state:updated"))
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

  private drawStateVector(circuitBreakpoint: number): void {
    Util.notNull(this.magnitudes)
    Util.notNull(this.phases)

    const magnitudes = this.magnitudes[circuitBreakpoint]
    const phases = this.phases[circuitBreakpoint]
    if (!magnitudes) return
    if (!phases) return

    this.circleNotationController.update(magnitudes, phases)
  }

  private get circuit(): Circuit {
    return new Circuit()
  }

  private get circleNotationController(): CircleNotationController {
    const el = document.getElementById("circle-notation")
    Util.notNull(el)

    const controller = this.application.getControllerForElementAndIdentifier(
      el,
      "circle-notation",
    )
    Util.notNull(controller)

    return controller as CircleNotationController
  }
}
