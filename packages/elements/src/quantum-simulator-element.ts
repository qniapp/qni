import {Complex, DetailedError, Util} from '@qni/common'
import {controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {CircleNotationElement} from './circle-notation-element'
import {QuantumCircuitElement} from './quantum-circuit-element'

type MessageEventData = {
  type: 'step' | 'finish'
  blochVectors: {[bit: number]: [number, number, number]}
  measuredBits: {[bit: number]: number}
  step: number
  amplitudes: Array<[number, number]>
  flags: {[key: string]: boolean}
}

@controller
export class QuantumSimulatorElement extends HTMLElement {
  @target circuit!: QuantumCircuitElement
  @target circleNotation!: CircleNotationElement

  private visibleQubitCircleKets!: number[]

  declare worker: Worker

  connectedCallback(): void {
    this.worker = new Worker('/serviceworker.js')
    this.visibleQubitCircleKets = []

    this.attachShadow({mode: 'open'})
    this.update()

    this.worker.addEventListener('message', this.handleServiceWorkerMessage.bind(this))
    this.addEventListener('operation-inspector-angle-change', this.run)
    this.addEventListener('circuit-step-mouseenter', this.runUnlessEditing)
    this.addEventListener('circuit-step-snap', this.run)
    this.addEventListener('circuit-step-update', this.run)
    this.addEventListener('circle-notation-visibility-change', this.updateVisibleQubitCircleKets)
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  private handleServiceWorkerMessage(event: MessageEvent): void {
    const data = event.data as MessageEventData
    const stepIndex = this.activeStepIndex

    switch (data.type) {
      case 'step': {
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
        break
      }
      default:
        throw new DetailedError('Unknown service worker message', {data})
    }
  }

  private run(): void {
    if (this.circleNotation === null) return

    const stepIndex = this.activeStepIndex
    const serializedSteps = this.circuit.serialize()
    Util.need(serializedSteps.length > 0, 'non-zero step length')

    const maxTargetBit = Math.max(
      ...serializedSteps.map(serializedStep =>
        Math.max(...serializedStep.map(operation => Math.max(...operation.targets)))
      )
    )
    const qubitCount = maxTargetBit >= 0 ? maxTargetBit + 1 : 1

    this.circleNotation.qubitCount = qubitCount
    this.worker.postMessage({
      qubitCount,
      stepIndex,
      steps: serializedSteps,
      targets: this.visibleQubitCircleKets
    })
  }

  private runUnlessEditing(): void {
    if (this.circuit.editing) return
    this.run()
  }

  private get activeStepIndex(): number {
    const activeStep = this.circuit.activeStep
    const breakpoint = this.circuit.breakpoint
    const step = activeStep || breakpoint
    Util.notNull(step)

    return this.circuit.fetchStepIndex(step)
  }

  private updateVisibleQubitCircleKets(event: Event): void {
    const ketNumbers = (event as CustomEvent).detail as number[]
    Util.notNull(ketNumbers)

    this.visibleQubitCircleKets = ketNumbers
  }
}
