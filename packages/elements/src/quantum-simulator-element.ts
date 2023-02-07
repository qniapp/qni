import {Complex, DetailedError, Util} from '@qni/common'
import {attr, controller, target, targets} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {isBlochDisplayElement, isMeasurementGateElement} from './operation'
import {CircleNotationElement} from './circle-notation-element'
import {QuantumCircuitElement} from './quantum-circuit-element'
import {RunCircuitButtonElement} from './run-circuit-button-element'
import {isIfable} from './mixin'

declare global {
  interface Window {
    debugServiceworker: boolean
  }
}

type MessageEventData = {
  type: 'step' | 'finish'
  blochVectors: {[bit: number]: [number, number, number]}
  measuredBits: {[bit: number]: number}
  step: number
  amplitudes: Array<[number, number]>
  flags: {[key: string]: boolean}
}

// TODO: QuantumCircuitSimulator にリネーム
@controller
export class QuantumSimulatorElement extends HTMLElement {
  @attr updateUrl = false

  @target circuit!: QuantumCircuitElement
  @target circleNotation!: CircleNotationElement
  @targets runCircuitButtons!: RunCircuitButtonElement[]

  declare worker: Worker

  connectedCallback(): void {
    this.worker = new Worker('./serviceworker.js')
    this.worker.addEventListener('message', this.handleServiceWorkerMessage.bind(this))

    this.addEventListener('draggable:delete', this.maybeUpdateUrl)
    this.addEventListener('draggable:delete', this.freshRun)
    this.addEventListener('menuable:menu-delete', this.maybeUpdateUrl)
    this.addEventListener('menuable:menu-delete', this.freshRun)
    this.addEventListener('operation-inspector-if-change', this.freshRun)
    this.addEventListener('operation-inspector-angle-change', this.freshRun)
    this.addEventListener('operation-inspector-angle-update', this.maybeUpdateUrl)
    this.addEventListener('operation-inspector-flag-change', this.freshRun)
    this.addEventListener('circuit-step:mouseenter', this.runUnlessEditing)
    this.addEventListener('circuit-step:mouseleave', this.runUnlessEditing)
    this.addEventListener('circuit-step:qpu-operation-snap', this.freshRun)
    this.addEventListener('circuit-step:qpu-operation-unsnap', this.freshRun)
    this.addEventListener('circuit-step:update', this.freshRun)
    this.addEventListener('circle-notation-visibility-change', this.run)
    this.addEventListener('run-circuit-button-click', this.freshRun)
    this.addEventListener('circuit-step:qpu-operation-snap', this.maybeUpdateUrl)
    this.addEventListener('circuit-step:qpu-operation-unsnap', this.maybeUpdateUrl)
    this.addEventListener('circuit-step:resize-qpu-operation', this.maybeUpdateUrl)
    this.addEventListener('circuit-step:resize-qpu-operation', this.freshRun)
    this.addEventListener('circuit-editor-resize', this.freshRun)

    this.attachShadow({mode: 'open'})
    this.update()
    this.maybeUpdateUrl()

    this.circuit.setBreakpoint(this.circuit.stepAt(0))

    this.setCircleNotationQubitCount()
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  clearCircuit(): void {
    this.circuit.clear()
  }

  private handleServiceWorkerMessage(event: MessageEvent): void {
    const data = event.data as MessageEventData
    const stepIndex = this.activeStepIndex

    switch (data.type) {
      case 'step': {
        const step = this.circuit.stepAt(data.step)

        for (const bitStr in data.blochVectors) {
          const bit = parseInt(bitStr)
          const blochDisplay = step.dropzoneAt(bit).operation
          if (isBlochDisplayElement(blochDisplay)) {
            const blochVector = data.blochVectors[bit]
            blochDisplay.x = blochVector[0]
            blochDisplay.y = blochVector[1]
            blochDisplay.z = blochVector[2]
          }
        }

        if (data.measuredBits) {
          const measuredBits = data.measuredBits
          for (const bitStr in measuredBits) {
            const bit = parseInt(bitStr)
            const measurementGate = step.dropzoneAt(bit).operation
            if (isMeasurementGateElement(measurementGate)) {
              measurementGate.value = measuredBits[bit].toString()
            }
          }
        }

        for (const each of step.dropzones) {
          const operation = each.operation
          if (!isIfable(operation)) continue
          if (operation.if === '') continue

          operation.disabled = !data.flags[operation.if]
        }

        if (stepIndex === data.step) {
          const complexAmplitudes: {[ket: number]: Complex} = {}
          for (const ket in data.amplitudes) {
            const c = data.amplitudes[ket]
            complexAmplitudes[ket] = new Complex(c[0], c[1])
          }
          this.circleNotation?.setAmplitudes(complexAmplitudes)
        }
        break
      }
      case 'finish': {
        for (const each of this.runCircuitButtons) {
          each.running = false
        }
        break
      }
      default:
        throw new DetailedError('Unknown service worker message', {data})
    }
  }

  private run(): void {
    this._run(false)
  }

  private freshRun(): void {
    this._run(true)
  }

  private _run(invalidateCaches: boolean): void {
    const stepIndex = this.activeStepIndex
    const serializedSteps = this.circuit.serialize()
    Util.need(serializedSteps.length > 0, 'non-zero step length')
    const circuitJson = this.circuit.toJson()
    const qubitCount = this.setCircleNotationQubitCount()

    this.worker.postMessage({
      qubitCount,
      stepIndex,
      circuitJson,
      invalidateCaches,
      steps: serializedSteps,
      targets: this.circleNotation.visibleQubitCircleKets,
      debug: window.debugServiceworker,
    })
  }

  private setCircleNotationQubitCount(): number {
    let qubitCount = Math.max(
      ...this.circuit.steps.map(each => {
        return each.maxOccupiedDropzoneBit as number
      }),
    )
    if (qubitCount === 0) qubitCount = 1

    this.circleNotation.qubitCount = qubitCount
    return qubitCount
  }

  private runUnlessEditing(): void {
    if (this.circuit.editing) return

    this._run(false)
  }

  private get activeStepIndex(): number {
    const activeStep = this.circuit.activeStep
    const breakpoint = this.circuit.breakpoint
    let step = activeStep || breakpoint

    if (step === null) {
      step = this.circuit.stepAt(0)
      this.circuit.setBreakpoint(step)
    }

    return this.circuit.fetchStepIndex(step)
  }

  private maybeUpdateUrl(): void {
    if (!this.updateUrl) return
    Util.notNull(this.circuit)

    const json = this.circuit.toJson()
    history.pushState('', '', encodeURIComponent(json))
  }
}
