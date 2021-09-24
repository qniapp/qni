import { Breakpoint, Util } from "lib/base"
import { HGate, MeasurementGate, RnotGate, XGate } from "lib/instructions"
import { BlochDisplayElement } from "bloch_display_component/blochDisplayElement"
import CircleNotationController from "./circle_notation_controller"
import { Circuit } from "lib/circuit"
import { CircuitStep } from "lib/editor/circuitStep"
import { Complex } from "lib/math"
import { Controller } from "stimulus"
import { RunCircuitButtonElement } from "run_circuit_button_component/runCircuitButtonElement"

type MessageEventData = {
  type: "step" | "finish"
  blochVectors: { [bit: number]: [number, number, number] }
  bits: { [bit: number]: number }
  step: number
  amplitudes: Array<[number, number]>
  flags: { [key: string]: boolean }
}

export default class SimulatorController extends Controller {
  private amplitudes: Complex[][] | undefined
  private userDraggingGate!: boolean

  static targets = ["circuit"]

  declare worker: Worker
  declare readonly circuitTarget: HTMLElement

  connect(): void {
    this.toggleCircuitStepActive(0)
    this.userDraggingGate = false

    this.element.addEventListener("userGrabbingGate", (event) => {
      this.userDraggingGate = true
      event.stopPropagation()
    })

    this.element.addEventListener("userReleasedGate", (event) => {
      this.userDraggingGate = false
      event.stopPropagation()
    })

    this.worker = new Worker("/serviceworker.js")
    this.worker.addEventListener(
      "message",
      ((e: MessageEvent) => {
        Util.notNull(e.data)

        const data = e.data as MessageEventData
        this.amplitudes = this.amplitudes || []

        if (data.type === "step") {
          const step = this.circuit.steps[data.step]

          for (const bit in data.blochVectors) {
            const blochDisplayElement = step.dropzones[bit].draggable
              ?.element as BlochDisplayElement
            const blochVector = data.blochVectors[bit]
            blochDisplayElement.x = blochVector[0]
            blochDisplayElement.y = blochVector[1]
            blochDisplayElement.z = blochVector[2]
          }

          if (data.bits) {
            const bits = data.bits
            const dropzones = step.dropzones
            for (const bit in bits) {
              const instruction = dropzones[bit].instruction
              if (instruction instanceof MeasurementGate) {
                instruction.value = bits[bit]
              }
            }
          }

          for (const each of step.instructions) {
            if (
              each instanceof XGate ||
              each instanceof HGate ||
              each instanceof RnotGate
            ) {
              if (each.if) {
                each.disabled = !data.flags[each.if]
              }
            }
          }

          this.amplitudes[data.step] = data.amplitudes.map((amp) => {
            return new Complex(amp[0], amp[1])
          })

          step.done = true
        } else if (data.type === "finish") {
          this.gotoCircuitBreakpoint(this.circuitBreakpoint || 0)
          this.runCircuitButton.enable()
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

  private get runCircuitButton(): RunCircuitButtonElement {
    const el = document.getElementById("run-circuit-button")
    Util.notNull(el)

    return el as RunCircuitButtonElement
  }

  get nqubit(): number {
    const dataNqubit = this.circuitTarget.getAttribute("data-nqubit")
    Util.notNull(dataNqubit)
    return parseInt(dataNqubit)
  }

  get circuitBreakpoint(): number | null {
    const bp = this.circuit.steps.findIndex((each) => each.active)
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

    const circuitStep = new CircuitStep(event.currentTarget)
    this.drawStateVector(circuitStep.index)
  }

  maybeBackToCurrentBreakpoint(): void {
    if (Breakpoint.isMobile()) return

    Util.notNull(this.circuitBreakpoint)

    this.drawStateVector(this.circuitBreakpoint)
  }

  activateBreakpoint(event: MouseEvent): void {
    const circuitStep = new CircuitStep(event.currentTarget)

    if (!circuitStep.done) {
      return
    }
    this.gotoCircuitBreakpoint(circuitStep.index)
  }

  private toggleCircuitStepActive(stepIndex: number): void {
    for (const [i, each] of this.circuit.steps.entries()) {
      if (i === stepIndex) {
        each.active = true
      } else {
        each.active = false
      }
    }
  }

  run(): void {
    for (const each of this.circuit.steps) {
      each.done = false
    }
    const steps = this.steps
    this.worker.postMessage({ nqubit: steps[0].length, steps })
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
