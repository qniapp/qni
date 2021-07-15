import CircleNotationController from "./circle_notation_controller"
import { Circuit } from "lib/circuit"
import { CircuitStep } from "lib/editor/circuitStep"
import { Controller } from "stimulus"
import {
  BlochDisplay,
  HadamardGate,
  MeasureGate,
  NotGate,
  RootNotGate,
} from "lib/editor/gates"
import { RunButton } from "lib/simulator/runButton"
import { Breakpoint, Util, classNameFor } from "lib/base"
import { Complex } from "lib/math"

type MessageEventData = {
  type: "step" | "finish"
  blochVectors: { [bit: number]: [number, number, number] }
  bits: { [bit: number]: number }
  step: number
  amplitudes: [number, number][]
  flags: { [key: string]: boolean }
}

export default class SimulatorController extends Controller {
  private amplitudes: Complex[][] | undefined
  private userDraggingGate!: boolean

  static targets = ["circuit", "runButton"]

  declare runButton: RunButton
  declare worker: Worker
  declare readonly circuitTarget: HTMLElement
  declare readonly runButtonTarget: HTMLElement

  connect(): void {
    this.toggleCircuitStepActive(0)
    this.runButton = new RunButton(this.runButtonTarget as HTMLInputElement)
    this.userDraggingGate = false

    this.element.addEventListener("userGrabbingGate", (event) => {
      this.userDraggingGate = true
      event.stopPropagation()
    })

    this.element.addEventListener("userReleasedGate", (event) => {
      this.userDraggingGate = false
      event.stopPropagation()
    })

    this.worker = new Worker("/service-worker.js")
    this.worker.addEventListener(
      "message",
      ((e: MessageEvent) => {
        Util.notNull(e.data)

        const data = e.data as MessageEventData
        this.amplitudes = this.amplitudes || []

        if (data.type === "step") {
          const step = this.circuit.steps[data.step]

          for (const bit in data.blochVectors) {
            const blochDisplay = step.dropzones[bit].instruction as BlochDisplay
            const blochVector = data.blochVectors[bit]
            blochDisplay.draw(...blochVector)
          }

          if (data.bits) {
            const bits = data.bits
            const dropzones = step.dropzones
            for (const bit in bits) {
              const instruction = dropzones[bit].instruction
              if (instruction instanceof MeasureGate) {
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

          this.amplitudes[data.step] = data.amplitudes.map((amp) => {
            return new Complex(amp[0], amp[1])
          })

          step.done = true
        } else if (data.type === "finish") {
          this.gotoCircuitBreakpoint(this.circuitBreakpoint || 0)
          this.runButton.running = false
          document
            .getElementById("editor")
            .dispatchEvent(
              new CustomEvent("simulationFinished", { bubbles: false }),
            )
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
    const bp = this.circuit.steps.findIndex((each) => each.isActive())
    if (bp !== -1) return bp
    return null
  }

  private gotoCircuitBreakpoint(stepIndex: number): void {
    this.toggleCircuitStepActive(stepIndex)
    this.drawStateVector(stepIndex)
  }

  showStateVector(event: MouseEvent): void {
    if (Breakpoint.isMobile()) return
    if (this.userDraggingGate) return

    const circuitStep = CircuitStep.create(event.currentTarget as HTMLElement)
    this.drawStateVector(circuitStep.index)
  }

  maybeBackToCurrentBreakpoint(): void {
    if (Breakpoint.isMobile()) return

    Util.notNull(this.circuitBreakpoint)

    this.drawStateVector(this.circuitBreakpoint)
  }

  activateBreakpoint(event: MouseEvent): void {
    const circuitStep = CircuitStep.create(event.currentTarget as HTMLElement)

    if (!circuitStep.isDone) {
      return
    }
    this.gotoCircuitBreakpoint(circuitStep.index)
  }

  private toggleCircuitStepActive(stepIndex: number): void {
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
    Array.from(
      document.getElementsByClassName(classNameFor("gate:measure")),
    ).forEach((each) => {
      each.classList.remove(classNameFor("gate:state:updated"))
    })

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
    if (this.amplitudes === undefined) return

    const amplitudes = this.amplitudes[circuitBreakpoint]
    if (!amplitudes) return

    this.circleNotationController.update(amplitudes)
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
