import {attr, controller, target} from '@github/catalyst'
import {BlochDisplayElement} from 'components/blochDisplayElement'
import {CircleNotationElement} from '@qni/elements'
import {CircuitStepElement} from 'components/circuitStepElement'
import {CircuitableMixin} from './mixins/circuitable'
import {Complex} from '@qni/common'
import {MeasurementGateElement} from 'components/measurementGateElement'
import {RunCircuitButtonElement} from 'components/runCircuitButtonElement'
import {Util} from 'lib/util'

type MessageEventData = {
  type: 'step' | 'finish'
  blochVectors: {[bit: number]: [number, number, number]}
  measuredBits: {[bit: number]: number}
  step: number
  amplitudes: Array<[number, number]>
  flags: {[key: string]: boolean}
}

@controller
export class QuantumSimulatorElement extends CircuitableMixin(HTMLElement) {
  @attr serviceWorker = '/serviceworker.js'

  @target circleNotation: CircleNotationElement

  declare worker: Worker

  private runCircuitButton: RunCircuitButtonElement | null
  private visibleQubitCircleKets: number[]

  clearCircuit(): void {
    this.quantumCircuit.clear()
  }

  connectedCallback(): void {
    this.visibleQubitCircleKets = []
    this.initCircuitable()

    this.addEventListener('circuit.load', this.updateJsonUrl)
    this.addEventListener('dragAndDroppable.ungrab', this.updateJsonUrl)
    this.addEventListener('dragAndDroppable.trash', this.updateJsonUrl)
    this.addEventListener('dragAndDroppable.leave', this.run)
    this.addEventListener('step.drop', this.run)
    this.addEventListener('step.mouseenter', this.setStyleCursorPointerUnlessEditing)
    this.addEventListener('step.mouseenter', this.activateHoveredStep)
    this.addEventListener('step.mouseenter', this.runUnlessEditing)
    this.addEventListener('step.mouseleave', this.setStyleCursorAutoUnlessEditing)
    this.addEventListener('step.click', this.setBreakpoint)
    this.addEventListener('step.click', this.run)
    this.addEventListener('step.snap', this.run)
    this.addEventListener('circuit.mouseleave', this.run)
    this.addEventListener('circle-notation.visibilityChanged', this.updateVisibleQubitCircleKets)
    this.addEventListener('circle-notation.visibilityChanged', this.run)
    this.addEventListener('run-circuit-button.load', this.registerRunCircuitButton)
    this.addEventListener('run-circuit-button.click', this.run)
    this.addEventListener('operation.popup.change', this.run)
    this.addEventListener('operation.update', this.updateJsonUrl)

    this.worker = new Worker(this.serviceWorker)
    this.worker.addEventListener('message', (e: MessageEvent) => {
      const activeStep = this.quantumCircuit.activeStep
      const breakpoint = this.quantumCircuit.breakpoint
      const currentStep = activeStep || breakpoint
      Util.notNull(currentStep)

      const stepIndex = this.fetchStepIndex(currentStep)
      const data = e.data as MessageEventData

      if (data.type === 'step') {
        const step = this.quantumCircuit.steps[data.step]

        for (const bit in data.blochVectors) {
          const blochDisplay = step.dropzones[bit].draggableElement as BlochDisplayElement
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
          if (each.if === '') continue
          each.disabled = !data.flags[each.if]
        }

        if (stepIndex === data.step) {
          const complexAmplitudes: {[ket: number]: Complex} = {}
          for (const ket in data.amplitudes) {
            const c = data.amplitudes[ket]
            complexAmplitudes[ket] = new Complex(c[0], c[1])
          }
          this.circleNotation?.setAmplitudes(complexAmplitudes)
        }
      } else if (data.type === 'finish') {
        this.runCircuitButton?.enable()
      }
    })
  }

  // Register components

  private registerRunCircuitButton(event: Event): void {
    this.runCircuitButton = event.target as RunCircuitButtonElement
  }

  private updateVisibleQubitCircleKets(event: Event): void {
    const ketNumbers = (event as CustomEvent).detail as number[]
    Util.notNull(ketNumbers)

    this.visibleQubitCircleKets = ketNumbers
  }

  private runUnlessEditing(): void {
    if (this.quantumCircuit.editing) return
    this.run()
  }

  private run(): void {
    if (this.circleNotation === null) return

    const activeStep = this.quantumCircuit.activeStep
    const breakpoint = this.quantumCircuit.breakpoint
    const step = activeStep || breakpoint
    Util.notNull(step)

    const stepIndex = this.fetchStepIndex(step)

    const serializedSteps = this.quantumCircuit.serializedSteps
    Util.need(serializedSteps.length > 0, 'non-zero step length')

    const qubitCount = this.quantumCircuit.qubitCount
    this.circleNotation.qubitCount = qubitCount

    this.worker.postMessage({
      json: this.quantumCircuit.toJson(),
      qubitCount,
      stepIndex,
      steps: this.quantumCircuit.serializedSteps,
      targets: this.visibleQubitCircleKets
    })
  }

  private setBreakpoint(event: Event): void {
    const step = (event as CustomEvent).detail.element as CircuitStepElement

    for (const each of this.quantumCircuit.steps) {
      each.breakpoint = false
    }
    step!.breakpoint = true
  }

  private activateHoveredStep(event: Event): void {
    if (this.quantumCircuit.editing) return

    const step = (event as CustomEvent).detail.element as CircuitStepElement

    for (const each of this.quantumCircuit.steps) {
      each.active = false
    }
    step.active = true
  }

  private fetchStepIndex(step: CircuitStepElement): number {
    const index = this.quantumCircuit.steps.indexOf(step)
    if (index === -1) {
      throw new Error('CircuitStep not found')
    }
    return index
  }

  private setStyleCursorAutoUnlessEditing(): void {
    if (this.quantumCircuit.editing) return

    document.documentElement.style.cursor = 'auto'
  }

  private setStyleCursorPointerUnlessEditing(): void {
    if (this.quantumCircuit.editing) return

    document.documentElement.style.cursor = 'pointer'
  }

  private updateJsonUrl(): void {
    Util.notNull(this.quantumCircuit)
    Util.updateUrlJson(this.quantumCircuit.toJson())
  }
}
