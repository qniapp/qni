import {CircuitDropzoneElement, isCircuitDropzoneElement} from './circuit-dropzone-element'
import {CircuitStepElement, isCircuitStepElement} from './circuit-step-element'
import {HGateElement, HGateElementProps} from './h-gate-element'
import {HoverableMixin, isResizeable} from './mixin'
import {PhaseGateElement, PhaseGateElementProps} from './phase-gate-element'
import {QftDaggerGateElement, QftDaggerGateElementProps} from './qft-dagger-gate-element'
import {QftGateElement, QftGateElementProps} from './qft-gate-element'
import {RnotGateElement, RnotGateElementProps} from './rnot-gate-element'
import {RxGateElement, RxGateElementProps} from './rx-gate-element'
import {RyGateElement, RyGateElementProps} from './ry-gate-element'
import {RzGateElement, RzGateElementProps} from './rz-gate-element'
import {SerializedCircuitStep, Util, emitEvent} from '@qni/common'
import {TGateElement, TGateElementProps} from './t-gate-element'
import {XGateElement, XGateElementProps} from './x-gate-element'
import {YGateElement, YGateElementProps} from './y-gate-element'
import {ZGateElement, ZGateElementProps} from './z-gate-element'
import {attr, controller, targets} from '@github/catalyst'
import {createMachine, interpret} from 'xstate'
import {html, render} from '@github/jtml'
import {BlochDisplayElement} from './bloch-display-element'
import {CircuitBlockElement} from './circuit-block-element'
import {ControlGateElement} from './control-gate-element'
import {MeasurementGateElement} from './measurement-gate-element'
import {Operation} from './operation'
import {SwapGateElement} from './swap-gate-element'
import {WriteGateElement} from './write-gate-element'

export type SnapTarget = {
  dropzone: CircuitDropzoneElement | null
  stepIndex: number | null
  wireIndex: number
}
export type ResizeHandleSnapTarget = {
  dropzone: CircuitDropzoneElement | null
  stepIndex: number | null
  wireIndex: number
}

type QuantumCircuitContext = Record<string, never>
type QuantumCircuitEvent = {type: 'EDIT'} | {type: 'EDIT_DONE'}

export class QuantumCircuitElement extends HoverableMixin(HTMLElement) {
  @attr minStepCount = 1
  @attr minWireCount = 1
  @attr maxWireCount = 10
  @attr editing = false
  @attr updateUrl = false
  @attr json = ''
  @attr circuitTitle = ''
  @attr debug = false

  // Controlled-H
  @attr chDisabled = false
  @attr chMaxControlGates = 0
  @attr chMaxTargetGates = 0
  // Controlled-NOT
  @attr cnotDisabled = false
  @attr cnotMaxControlGates = 0
  @attr cnotMaxTargetGates = 0
  // Controlled-Y
  @attr cyDisabled = false
  @attr cyMaxControlGates = 0
  @attr cyMaxTargetGates = 0
  // Controlled-Z
  @attr czDisabled = false
  @attr czMaxControlGates = 0
  @attr czMaxTargetGates = 0
  // Controlled-Phase
  @attr cphaseDisabled = false
  @attr cphaseMaxControlGates = 0
  @attr cphaseMaxTargetGates = 0
  // Controlled-T
  @attr ctDisabled = false
  @attr ctMaxControlGates = 0
  @attr ctMaxTargetGates = 0
  // Controlled-√X
  @attr crnotDisabled = false
  @attr crnotMaxControlGates = 0
  @attr crnotMaxTargetGates = 0
  // Controlled-Rx
  @attr crxDisabled = false
  @attr crxMaxControlGates = 0
  @attr crxMaxTargetGates = 0
  // Controlled-Ry
  @attr cryDisabled = false
  @attr cryMaxControlGates = 0
  @attr cryMaxTargetGates = 0
  // Controlled-Rz
  @attr crzDisabled = false
  @attr crzMaxControlGates = 0
  @attr crzMaxTargetGates = 0
  // Controlled-Swap
  @attr cswapDisabled = false
  @attr cswapMaxControlGates = 0
  // Swap
  @attr swapDisabled = false
  // CZ
  @attr controlControlDisabled = false
  @attr controlControlMaxTargetGates = 0
  // CPHASE
  @attr phasePhaseDisabled = false
  @attr phasePhaseMaxTargetGates = 0

  @targets blocks!: CircuitBlockElement[]

  private quantumCircuitMachine = createMachine<QuantumCircuitContext, QuantumCircuitEvent>({
    id: 'quantum-circuit',
    initial: 'idle',
    states: {
      idle: {
        on: {
          EDIT: {target: 'editing'}
        }
      },
      editing: {
        on: {
          EDIT_DONE: {target: 'idle'}
        }
      }
    }
  })
  private quantumCircuitService = interpret(this.quantumCircuitMachine)
    .onTransition(state => {
      if (this.debug) {
        // eslint-disable-next-line no-console
        console.log(`quantum-circuit: ${state.value}`)
      }
    })
    .start()

  private snapTargets!: {
    [i: number]: {
      [j: number]: SnapTarget
    }
  }
  private resizeHandleSnapTargets!: {
    [i: number]: {
      [j: number]: ResizeHandleSnapTarget
    }
  }

  get numberOfWiresDisplayed(): number {
    return this.stepAt(0).numberOfWiresDisplayed
  }

  get activeStepIndex(): number | null {
    const step = this.activeStep
    if (step === null) return null

    return this.fetchStepIndex(step)
  }

  get activeStep(): CircuitStepElement | null {
    const step = this.steps.find(each => each.active)

    return step || null
  }

  fetchStepIndex(step: CircuitStepElement): number {
    const index = this.steps.indexOf(step)
    Util.need(index !== -1, `circuit-step index of ${step} not found.`)

    return index
  }

  get steps(): CircuitStepElement[] {
    return Array.from<CircuitStepElement>(this.querySelectorAll('circuit-step'))
  }

  private get emptySteps(): CircuitStepElement[] {
    return this.steps.filter(each => each.isEmpty)
  }

  private get nonEmptySteps(): CircuitStepElement[] {
    return this.steps.filter(each => !each.isEmpty)
  }

  private get largestStep(): CircuitStepElement | null {
    let step = null
    let max = 0

    for (const each of this.steps) {
      if (each.numberOfWiresDisplayed > 0 && each.numberOfWiresDisplayed > max) {
        step = each
        max = each.numberOfWiresDisplayed
      }
    }

    return step
  }

  private appendMinimumSteps(): void {
    const nsteps = this.minStepCount - this.steps.length

    for (let i = 0; i < nsteps; i++) {
      this.append(new CircuitStepElement())
    }
  }

  /**
   * @category Circuit Step
   */
  stepAt(stepIndex: number): CircuitStepElement {
    const step = this.steps[stepIndex]
    Util.notNull(step)

    return step
  }

  /**
   * @category Circuit Step
   */
  addShadowStepAfter(stepIndex: number): CircuitStepElement {
    const newStep = new CircuitStepElement()
    newStep.shadow = true
    for (let i = 0; i < this.numberOfWiresDisplayed; i++) {
      newStep.appendDropzone()
    }

    if (stepIndex === -1) {
      this.prepend(newStep)
    } else {
      const step = this.steps[stepIndex]
      Util.notNull(step.parentElement)

      step.parentElement.insertBefore(newStep, step.nextSibling)
    }

    return newStep
  }

  /**
   * @category Circuit Step
   */
  activateStep(step: CircuitStepElement): void {
    step.active = true
  }

  /**
   * @category Circuit Step
   */
  deactivateAllSteps(): void {
    for (const each of this.steps) {
      each.active = false
    }
  }

  /**
   * @category Circuit Step
   */
  setBreakpoint(step: CircuitStepElement): void {
    for (const each of this.steps) {
      each.breakpoint = false
    }
    step.breakpoint = true
  }

  get breakpoint(): CircuitStepElement | null {
    const step = this.steps.find(each => each.breakpoint)

    return step || null
  }

  private get dropzones(): CircuitDropzoneElement[] {
    return Array.from(this.querySelectorAll('circuit-dropzone')) as CircuitDropzoneElement[]
  }

  get operations(): Operation[] {
    return this.dropzones
      .map<Operation | null>(each => each.operation)
      .filter((each: Operation | null) => each !== null) as Operation[]
  }

  private get isVertical(): boolean {
    return window.getComputedStyle(this).flexDirection === 'column'
  }

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()

    if (this.hasAttribute('data-update-url')) {
      const json = this.urlJson
      this.loadFromJson(json)
    }

    if (this.hoverable) {
      this.makeOperationsHoverable()
    }
    this.appendMinimumSteps()
    this.appendMinimumWires()
    this.updateAllWires()

    this.addEventListener('mouseleave', this.dispatchMouseleaveEvent)
    this.addEventListener('circuit-step:update', this.updateStep)
    this.addEventListener('circuit-step:qpu-operation-snap', this.updateStep)
    this.addEventListener('circuit-step:qpu-operation-snap', this.updateChangedWire)
    this.addEventListener('circuit-step:qpu-operation-unsnap', this.updateStep)
    this.addEventListener('circuit-step:qpu-operation-unsnap', this.updateChangedWire)
    this.addEventListener('circuit-step:delete-qpu-operation', this.updateStep)
    this.addEventListener('circuit-step:delete-qpu-operation', this.updateChangedWire)
    this.addEventListener('circuit-step:resize-qpu-operation', this.updateStep)

    emitEvent('quantum-circuit:init', {}, this)
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return

    if (name === 'data-editing') {
      if (newValue !== null) {
        this.quantumCircuitService.send({type: 'EDIT'})
      } else {
        this.quantumCircuitService.send({type: 'EDIT_DONE'})
      }
    }

    if (name === 'data-hoverable' && newValue !== null) {
      this.makeOperationsHoverable()
    }

    if (name === 'data-json' && newValue !== '' && newValue !== null) {
      this.loadFromJson(newValue)
      if (this.hoverable) {
        this.makeOperationsHoverable()
      }
    }
  }

  private makeOperationsHoverable() {
    for (const operation of this.operations) {
      operation.hoverable = true
    }
  }

  private update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  private updateStep(event: Event): void {
    const step = event.target as CircuitStepElement
    this.updateStepOperationAttributes(step)
  }

  private updateStepOperationAttributes(step: CircuitStepElement): void {
    step.updateOperationAttributes({
      // Controlled-H
      disableCh: this.chDisabled,
      maxChControlGates: this.chMaxControlGates,
      maxChTargetGates: this.chMaxTargetGates,
      // Controlled-NOT
      disableCnot: this.cnotDisabled,
      maxCnotControlGates: this.cnotMaxControlGates,
      maxCnotTargetGates: this.cnotMaxTargetGates,
      // Controlled-Y
      disableCy: this.cyDisabled,
      maxCyControlGates: this.cyMaxControlGates,
      maxCyTargetGates: this.cyMaxTargetGates,
      // Controlled-Z
      disableCz: this.czDisabled,
      maxCzControlGates: this.czMaxControlGates,
      maxCzTargetGates: this.czMaxTargetGates,
      // Controlled-Phase
      disableCphase: this.cphaseDisabled,
      maxCphaseControlGates: this.cphaseMaxControlGates,
      maxCphaseTargetGates: this.cphaseMaxTargetGates,
      // Controlled-T
      disableCt: this.ctDisabled,
      maxCtControlGates: this.ctMaxControlGates,
      maxCtTargetGates: this.ctMaxTargetGates,
      // Controlled-√X
      disableCrnot: this.crnotDisabled,
      maxCrnotControlGates: this.crnotMaxControlGates,
      maxCrnotTargetGates: this.crnotMaxTargetGates,
      // Controlled-Rx
      disableCrx: this.crxDisabled,
      maxCrxControlGates: this.crxMaxControlGates,
      maxCrxTargetGates: this.crxMaxTargetGates,
      // Controlled-Rx
      disableCry: this.cryDisabled,
      maxCryControlGates: this.cryMaxControlGates,
      maxCryTargetGates: this.cryMaxTargetGates,
      // Controlled-Rx
      disableCrz: this.crzDisabled,
      maxCrzControlGates: this.crzMaxControlGates,
      maxCrzTargetGates: this.crzMaxTargetGates,
      // Controlled-Swap
      disableCswap: this.cswapDisabled,
      maxCswapControlGates: this.cswapMaxControlGates,
      // Swap
      disableSwap: this.swapDisabled,
      // CZ
      disableControlControl: this.controlControlDisabled,
      maxControlControlTargetGates: this.controlControlMaxTargetGates,
      // CPHASE
      disablePhasePhase: this.phasePhaseDisabled,
      maxPhasePhaseTargetGates: this.phasePhaseMaxTargetGates
    })
  }

  private dispatchMouseleaveEvent(): void {
    emitEvent('quantum-circuit:mouseleave', {}, this)
  }

  resize(): void {
    this.removeEmptySteps()
    this.appendMinimumSteps()
    this.appendMinimumWires()
    this.removeLastEmptyWires()
    this.updateAllWires()
  }

  /**
   * @category Circuit Operation
   */
  h(...args: number[] | [HGateElementProps]): QuantumCircuitElement {
    let targetBits: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targetBits = args as number[]
    } else {
      const props = args[0]
      targetBits = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const h = new HGateElement()
      if (disabled) h.disable()
      return h
    }, ...targetBits)

    this.resize()

    return this
  }

  /**
   * @category Circuit Operation
   */
  x(...args: number[] | [XGateElementProps]): QuantumCircuitElement {
    let targetBits: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targetBits = args as number[]
    } else {
      const props = args[0]
      targetBits = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const x = new XGateElement()
      if (disabled) x.disable()
      return x
    }, ...targetBits)

    return this
  }

  /**
   * @category Circuit Operation
   */
  y(...args: number[] | [YGateElementProps]): QuantumCircuitElement {
    let targetBits: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targetBits = args as number[]
    } else {
      const props = args[0]
      targetBits = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const y = new YGateElement()
      if (disabled) y.disable()
      return y
    }, ...targetBits)

    return this
  }

  /**
   * @category Circuit Operation
   */
  z(...args: number[] | [ZGateElementProps]): QuantumCircuitElement {
    let targetBits: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targetBits = args as number[]
    } else {
      const props = args[0]
      targetBits = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const z = new ZGateElement()
      if (disabled) z.disable()
      return z
    }, ...targetBits)

    return this
  }

  /**
   * @category Circuit Operation
   */
  phase(...args: number[] | [string, ...number[]] | [PhaseGateElementProps]): QuantumCircuitElement {
    let angle = ''
    let targetBits: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targetBits = args as number[]
    } else if (typeof args[0] === 'string') {
      angle = args[0]
      targetBits = args.slice(1) as number[]
    } else {
      const props = args[0]
      targetBits = props.targets
      disabled = props.disabled
    }

    const step = this.applyOperationToTargets(() => {
      const phase = new PhaseGateElement()
      phase.angle = angle
      if (disabled) phase.disable()
      return phase
    }, ...targetBits)
    if (targetBits.length > 1) this.updateStepOperationAttributes(step)

    return this
  }

  /**
   * @category Circuit Operation
   */
  t(...args: number[] | [TGateElementProps]): QuantumCircuitElement {
    let targetBits: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targetBits = args as number[]
    } else {
      const props = args[0]
      targetBits = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const t = new TGateElement()
      if (disabled) t.disable()
      return t
    }, ...targetBits)

    this.resize()

    return this
  }

  /**
   * @category Circuit Operation
   */
  rnot(...args: number[] | [RnotGateElementProps]): QuantumCircuitElement {
    let targetBits: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targetBits = args as number[]
    } else {
      const props = args[0]
      targetBits = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const rnot = new RnotGateElement()
      if (disabled) rnot.disable()
      return rnot
    }, ...targetBits)

    return this
  }

  /**
   * @category Circuit Operation
   */
  rx(...args: number[] | [RxGateElementProps]): QuantumCircuitElement {
    let targetBits: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targetBits = args as number[]
    } else {
      const props = args[0]
      targetBits = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const rx = new RxGateElement()
      if (disabled) rx.disable()
      return rx
    }, ...targetBits)

    return this
  }

  /**
   * @category Circuit Operation
   */
  ry(...args: number[] | [RyGateElementProps]): QuantumCircuitElement {
    let targetBits: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targetBits = args as number[]
    } else {
      const props = args[0]
      targetBits = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const ry = new RyGateElement()
      if (disabled) ry.disable()
      return ry
    }, ...targetBits)

    return this
  }

  /**
   * @category Circuit Operation
   */
  rz(...args: number[] | [RzGateElementProps]): QuantumCircuitElement {
    let targetBits: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targetBits = args as number[]
    } else {
      const props = args[0]
      targetBits = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const rz = new RzGateElement()
      if (disabled) rz.disable()
      return rz
    }, ...targetBits)

    return this
  }

  /**
   * @category Circuit Operation
   */
  qft(span: number, ...args: number[] | [QftGateElementProps]): QuantumCircuitElement {
    let targetBits: number[]

    if (typeof args[0] === 'number') {
      targetBits = args as number[]
    } else {
      const props = args[0]
      targetBits = props.targets
    }

    this.applyOperationToTargets(() => {
      const qft = new QftGateElement()
      qft.span = span
      return qft
    }, ...targetBits)

    this.resize()

    return this
  }

  /**
   * @category Circuit Operation
   */
  qftDagger(...args: number[] | [QftDaggerGateElementProps]): QuantumCircuitElement {
    let targetBits: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targetBits = args as number[]
    } else {
      const props = args[0]
      targetBits = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const qft = new QftDaggerGateElement()
      if (disabled) qft.disable()
      return qft
    }, ...targetBits)

    this.resize()

    return this
  }

  /**
   * @category Circuit Operation
   */
  swap(...targetBits: number[]): QuantumCircuitElement {
    const step = this.applyOperationToTargets(() => new SwapGateElement(), ...targetBits)
    this.updateStepOperationAttributes(step)
    return this
  }

  /**
   * @category Circuit Operation
   */
  control(...targetBits: number[]): QuantumCircuitElement {
    const step = this.applyOperationToTargets(() => new ControlGateElement(), ...targetBits)
    this.updateStepOperationAttributes(step)
    return this
  }

  /**
   * @category Circuit Operation
   */
  bloch(...targetBits: number[]): QuantumCircuitElement {
    this.applyOperationToTargets(() => new BlochDisplayElement(), ...targetBits)
    return this
  }

  /**
   * @category Circuit Operation
   */
  write(value: '0' | '1', ...targetBits: number[]): QuantumCircuitElement {
    this.applyOperationToTargets(() => {
      const writeGate = new WriteGateElement()
      writeGate.value = value
      return writeGate
    }, ...targetBits)

    this.resize()

    return this
  }

  /**
   * @category Circuit Operation
   */
  measure(...targetBits: number[]): QuantumCircuitElement {
    this.applyOperationToTargets(() => new MeasurementGateElement(), ...targetBits)
    this.resize()
    return this
  }

  private applyOperationToTargets(constructor: () => Operation, ...targetBits: number[]): CircuitStepElement {
    const nbit = Math.max(...targetBits) + 1
    const step = this.appendStepWithDropzones(nbit)

    for (const each of targetBits) {
      const operation = constructor()
      step.dropzoneAt(each).put(operation)
    }

    return step
  }

  /**
   * @category Circuit Operation
   */
  ch(control: number | number[], target: number | number[]): QuantumCircuitElement {
    this.controlledU(HGateElement, control, target)
    return this
  }

  /**
   * @category Circuit Operation
   */
  cnot(control: number | number[], target: number | number[]): QuantumCircuitElement {
    this.controlledU(XGateElement, control, target)
    this.resize()
    return this
  }
  cx = this.cnot

  /**
   * @category Circuit Operation
   */
  cy(control: number | number[], target: number | number[]): QuantumCircuitElement {
    this.controlledU(YGateElement, control, target)
    return this
  }

  /**
   * @category Circuit Operation
   */
  cz(control: number | number[], target: number | number[]): QuantumCircuitElement {
    this.controlledU(ZGateElement, control, target)
    return this
  }

  /**
   * @category Circuit Operation
   */
  cphase(control: number | number[], target: number | number[]): QuantumCircuitElement {
    this.controlledU(PhaseGateElement, control, target)
    return this
  }

  /**
   * @category Circuit Operation
   */
  ct(control: number | number[], target: number | number[]): QuantumCircuitElement {
    this.controlledU(TGateElement, control, target)
    return this
  }

  /**
   * @category Circuit Operation
   */
  crnot(control: number | number[], target: number | number[]): QuantumCircuitElement {
    this.controlledU(RnotGateElement, control, target)
    return this
  }

  /**
   * @category Circuit Operation
   */
  crx(control: number | number[], target: number | number[]): QuantumCircuitElement {
    this.controlledU(RxGateElement, control, target)
    return this
  }

  /**
   * @category Circuit Operation
   */
  cry(control: number | number[], target: number | number[]): QuantumCircuitElement {
    this.controlledU(RyGateElement, control, target)
    return this
  }

  /**
   * @category Circuit Operation
   */
  crz(control: number | number[], target: number | number[]): QuantumCircuitElement {
    this.controlledU(RzGateElement, control, target)
    return this
  }

  /**
   * @category Circuit Operation
   */
  cswap(control: number | number[], target: number | number[]): QuantumCircuitElement {
    this.controlledU(SwapGateElement, control, target)
    return this
  }

  /**
   * @category Circuit Operation
   */
  cc(...targetBits: number[]): QuantumCircuitElement {
    const nbit = Math.max(...targetBits) + 1
    const step = this.appendStepWithDropzones(nbit)

    for (const each of targetBits) {
      step.dropzoneAt(each).put(new ControlGateElement())
    }

    this.appendMinimumWires()
    this.updateStepOperationAttributes(step)

    return this
  }

  private controlledU(
    constructor:
      | typeof HGateElement
      | typeof XGateElement
      | typeof YGateElement
      | typeof ZGateElement
      | typeof PhaseGateElement
      | typeof TGateElement
      | typeof RnotGateElement
      | typeof RxGateElement
      | typeof RyGateElement
      | typeof RzGateElement
      | typeof SwapGateElement,
    control: number | number[],
    target: number | number[]
  ): void {
    const controlBits = ([] as number[]).concat(...[control])
    const targetBits = ([] as number[]).concat(...[target])

    const bits = controlBits.concat(targetBits)
    const nbit = Math.max(...bits) + 1
    const step = this.appendStepWithDropzones(nbit)

    for (const each of controlBits) {
      step.dropzoneAt(each).put(new ControlGateElement())
    }
    for (const each of targetBits) {
      step.dropzoneAt(each).put(new constructor())
    }

    this.appendMinimumWires()
    this.updateStepOperationAttributes(step)
  }

  private appendStep(): CircuitStepElement {
    // const step = new CircuitStepElement()

    // this.append(step)
    // return step

    const el = new CircuitStepElement()

    const lastBlock = this.blocks.slice(-1)[0] || null
    if (lastBlock === null || lastBlock.finalized) {
      this.append(el)
    } else {
      lastBlock.append(el)
    }

    return el
  }

  private appendStepWithDropzones(nbit: number): CircuitStepElement {
    const step = new CircuitStepElement()
    this.append(step)

    for (let i = 0; i < nbit; i++) {
      const dropzone = new CircuitDropzoneElement()
      step.append(dropzone)
    }

    return step
  }

  private updateAllWires(): void {
    const firstStep = this.steps[0]
    if (firstStep === undefined) return

    const wireCount = firstStep.dropzones.length
    for (let i = 0; i < wireCount; i++) {
      this.updateWire(i)
    }
  }

  activateOperation(operation: Operation): void {
    for (const each of this.operations) {
      each.active = false
    }
    operation.active = true
  }

  appendWire(): void {
    for (const each of this.steps) {
      each.appendDropzone()
    }
  }

  removeLastEmptyWires(): void {
    while (
      this.steps.every(each => {
        return (
          each.numberOfWiresDisplayed > each.numberOfQubitsInUse &&
          each.numberOfWiresDisplayed > this.minWireCount &&
          !each.lastDropzone.occupied
        )
      })
    ) {
      for (const each of this.steps) {
        each.lastDropzone.remove()
      }
    }
  }

  private removeEmptySteps(): void {
    for (const each of this.emptySteps) {
      each.remove()
    }
  }

  private loadFromJson(json: string): void {
    // eslint-disable-next-line github/no-inner-html
    this.innerHTML = ''

    let circuitBlock = null

    if (json === '') {
      if (this.hasAttribute('data-update-url')) {
        this.resize()
      }
      return
    }

    const circuit = JSON.parse(json)
    this.circuitTitle = (circuit.title || '').trim()

    let keepStep = false

    for (const step of circuit.cols) {
      const newStep = this.appendStep()
      if (keepStep) {
        newStep.keep = true
        keepStep = false
      }

      for (const operation of step) {
        switch (true) {
          case /^\|0>$/.test(operation): {
            const writeGate = new WriteGateElement()
            writeGate.value = '0'
            newStep.appendOperation(writeGate)
            break
          }
          case /^\|1>$/.test(operation): {
            const writeGate = new WriteGateElement()
            writeGate.value = '1'
            newStep.appendOperation(writeGate)
            break
          }
          case /^H/.test(operation): {
            const hGate = new HGateElement()
            hGate.if = this.ifVariable(operation.slice(1))
            newStep.appendOperation(hGate)
            break
          }
          case /^X$/.test(operation) || /^X<(.+)$/.test(operation): {
            const xGate = new XGateElement()
            xGate.if = operation.slice(2).trim()
            newStep.appendOperation(xGate)
            break
          }
          case /^Y/.test(operation): {
            const yGate = new YGateElement()
            yGate.if = this.ifVariable(operation.slice(1))
            newStep.appendOperation(yGate)
            break
          }
          case /^Z/.test(operation): {
            const zGate = new ZGateElement()
            zGate.if = this.ifVariable(operation.slice(1))
            newStep.appendOperation(zGate)
            break
          }
          case /^P/.test(operation): {
            const phaseGate = new PhaseGateElement()
            phaseGate.angle = this.angleParameter(operation.slice(1))
            newStep.appendOperation(phaseGate)
            break
          }
          case /^T/.test(operation): {
            const tGate = new TGateElement()
            tGate.if = this.ifVariable(operation.slice(1))
            newStep.appendOperation(tGate)
            break
          }
          case /^X\^½/.test(operation): {
            const rnotGate = new RnotGateElement()
            rnotGate.if = this.ifVariable(operation.slice(3))
            newStep.appendOperation(rnotGate)
            break
          }
          case /^Rx/.test(operation): {
            const rxGate = new RxGateElement()
            rxGate.angle = this.angleParameter(operation.slice(2))
            newStep.appendOperation(rxGate)
            break
          }
          case /^Ry/.test(operation): {
            const ryGate = new RyGateElement()
            ryGate.angle = this.angleParameter(operation.slice(2))
            newStep.appendOperation(ryGate)
            break
          }
          case /^Rz/.test(operation): {
            const rzGate = new RzGateElement()
            rzGate.angle = this.angleParameter(operation.slice(2))
            newStep.appendOperation(rzGate)
            break
          }
          case /^QFT\d/.test(operation): {
            const qftGate = new QftGateElement()
            const span = parseInt(operation.slice(3), 10)
            qftGate.span = span
            newStep.appendOperation(qftGate)
            break
          }
          case /^QFT†\d/.test(operation): {
            const qftDaggerGate = new QftDaggerGateElement()
            qftDaggerGate.if = this.ifVariable(operation.slice(1))
            newStep.appendOperation(qftDaggerGate)
            break
          }
          case /^Swap$/.test(operation): {
            const swapGate = new SwapGateElement()
            newStep.appendOperation(swapGate)
            break
          }
          case /^•$/.test(operation): {
            const controlGate = new ControlGateElement()
            newStep.appendOperation(controlGate)
            break
          }
          case /^Bloch$/.test(operation): {
            const blochDisplay = new BlochDisplayElement()
            newStep.appendOperation(blochDisplay)
            break
          }
          case /^Measure/.test(operation): {
            const measurementGate = new MeasurementGateElement()
            const flag = ((/^>(.+)$/.exec(operation.slice(7)) || [])[1] || '').trim()
            measurementGate.flag = flag
            newStep.appendOperation(measurementGate)
            break
          }
          case /^[[{](.+)$/.test(operation): {
            const comment = operation.slice(1)
            newStep.remove()
            circuitBlock = new CircuitBlockElement()
            circuitBlock.comment = comment
            circuitBlock.setAttribute('data-targets', 'quantum-circuit.blocks')
            this.append(circuitBlock)
            break
          }
          case /^[\]}]$/.test(operation): {
            newStep.remove()
            circuitBlock!.finalize()
            keepStep = true
            break
          }
          default: {
            if (operation !== 1) {
              throw new Error(`Unknown operation: ${operation}`)
            }
            newStep.appendDropzone()
          }
        }
        // circuitStep.updateConnections()
        newStep.updateOperationAttributes()
      }
    }

    this.resize()
  }

  private ifVariable(operation: string): string {
    return ((/^<(.+)$/.exec(operation) || [])[1] || '').trim()
  }

  private angleParameter(operation: string): string {
    return ((/^\((.+)\)$/.exec(operation) || [])[1] || '').trim().replace('_', '/')
  }

  private appendMinimumWires(): void {
    const largestStep = this.largestStep
    const largestWireCount =
      largestStep && largestStep.numberOfWiresDisplayed > this.minWireCount
        ? largestStep.numberOfWiresDisplayed
        : this.minWireCount

    for (const each of this.steps) {
      const nDropzone = largestWireCount - each.numberOfWiresDisplayed
      for (let i = 0; i < nDropzone; i++) {
        each.appendDropzone()
      }
    }
  }

  private updateWire(wireIndex: number): void {
    let wireQuantum = false

    for (const step of this.steps) {
      const dropzone = step.dropzoneAt(wireIndex)

      dropzone.inputWireQuantum = wireQuantum
      if (dropzone.operationName === 'write-gate') {
        dropzone.inputWireQuantum = wireQuantum
        dropzone.outputWireQuantum = true
        wireQuantum = true
      } else if (dropzone.operationName === 'measurement-gate') {
        dropzone.inputWireQuantum = wireQuantum
        dropzone.outputWireQuantum = false
        wireQuantum = false
      } else if (dropzone.operationName === 'swap-gate') {
        const swapDropzones = step.dropzones.filter(each => each.operationName === 'swap-gate')
        if (swapDropzones.length === 2) {
          const dropzoneBits = swapDropzones.map(each => step.bit(each))
          const bit = step.bit(dropzone)
          const otherDropzoneBit = dropzoneBits[0] === bit ? dropzoneBits[1] : dropzoneBits[0]
          const otherDropzone = step.dropzoneAt(otherDropzoneBit)
          dropzone.inputWireQuantum = wireQuantum
          dropzone.outputWireQuantum = otherDropzone.inputWireQuantum
          wireQuantum = otherDropzone.inputWireQuantum
        } else {
          dropzone.inputWireQuantum = wireQuantum
          dropzone.outputWireQuantum = wireQuantum
        }
      } else {
        dropzone.inputWireQuantum = wireQuantum
        dropzone.outputWireQuantum = wireQuantum
      }
    }
  }

  private updateChangedWire(event: Event): void {
    const step = event.target
    if (!isCircuitStepElement(step)) throw new Error(`${step} isn't a circuit-step.`)

    const dropzone = (event as CustomEvent).detail.dropzone
    if (!isCircuitDropzoneElement(dropzone)) throw new Error(`${dropzone} isn't a circuit-dropzone.`)

    const wireIndex = step.dropzones.indexOf(dropzone)
    Util.need(wireIndex !== -1, 'circuit-dropzone not found.')

    this.updateWire(wireIndex)
  }

  /**
   * @category Drag and Drop
   */
  snapTargetAt(x: number, y: number): SnapTarget {
    if (this.isVertical) {
      return this.snapTargets[y][x]
    } else {
      return this.snapTargets[x][y]
    }
  }

  /**
   * @category Drag and Drop
   */
  resizeHandleSnapTargetAt(x: number, y: number): SnapTarget {
    if (this.isVertical) {
      return this.resizeHandleSnapTargets[y][x]
    } else {
      return this.resizeHandleSnapTargets[x][y]
    }
  }

  /**
   * @category Drag and Drop
   */
  setSnapTargets(operation: Operation): void {
    const snapTargets = []
    this.snapTargets = {}

    let span = 1
    if (isResizeable(operation)) span = operation.span

    const myDropzone = operation.dropzone

    for (const [_stepIndex, step] of Object.entries(this.steps)) {
      const stepIndex = parseInt(_stepIndex)

      for (const [_wireIndex, dropzone] of Object.entries(step.dropzones)) {
        const wireIndex = parseInt(_wireIndex)
        const snapTarget = dropzone.snapTarget

        const i = this.isVertical ? snapTarget.y : snapTarget.x
        const j = this.isVertical ? snapTarget.x : snapTarget.y

        if (stepIndex === 0 && step.dropzones[wireIndex + span - 1] !== undefined) {
          const prevI = i - operation.snapRange * 0.75

          if (this.isVertical) {
            snapTargets.push({x: j, y: prevI})
          } else {
            snapTargets.push({x: prevI, y: j})
          }

          if (this.snapTargets[prevI] === undefined) this.snapTargets[prevI] = {}
          if (this.snapTargets[prevI][j] === undefined)
            this.snapTargets[prevI][j] = {
              dropzone: null,
              stepIndex: -1,
              wireIndex
            }
        }

        if (span === 1) {
          if (dropzone === myDropzone || !dropzone.occupied) {
            snapTargets.push(snapTarget)
          }
        } else {
          const gateFit = Array.from(Array(span).keys())
            .slice(1)
            .map(y => {
              const dz = step.dropzones[wireIndex + y]
              return dz !== undefined && (dz === myDropzone || !dz.occupied)
            })
            .every(_ => _)
          if ((!dropzone.occupied || dropzone === myDropzone) && gateFit) {
            snapTargets.push(snapTarget)
          }
        }

        const nextI = i + operation.snapRange * 0.75

        if (step.dropzones[wireIndex + span - 1] !== undefined) {
          if (this.isVertical) {
            snapTargets.push({x: j, y: nextI})
          } else {
            snapTargets.push({x: nextI, y: j})
          }
        }

        if (this.snapTargets[nextI] === undefined) this.snapTargets[nextI] = {}
        if (this.snapTargets[nextI][j] === undefined)
          this.snapTargets[nextI][j] = {
            dropzone: null,
            stepIndex,
            wireIndex
          }

        if (this.snapTargets[i] === undefined) this.snapTargets[i] = {}
        if (this.snapTargets[i][j] === undefined)
          this.snapTargets[i][j] = {
            dropzone,
            stepIndex: null,
            wireIndex
          }
      }
    }

    operation.snapTargets = snapTargets
  }

  /**
   * @category Drag and Drop
   */
  setResizeHandleSnapTargets(operation: Operation): void {
    if (!isResizeable(operation)) {
      throw new Error(`${operation} isn't a resizeable operation.`)
    }
    if (!isCircuitDropzoneElement(operation?.dropzone)) {
      throw new Error(`${operation.dropzone} isn't a circuit-dropzone.`)
    }

    const circuitStep = operation.dropzone.circuitStep
    Util.notNull(circuitStep)

    const freeDropzones = circuitStep.dropzones.filter((each: CircuitDropzoneElement) => !each.occupied)
    const myDropzone = operation.dropzone
    freeDropzones.push(myDropzone)

    const resizeHandleSnapTargets = []
    this.resizeHandleSnapTargets = {}

    for (const [dropzoneIndex, each] of Object.entries(circuitStep.dropzones)) {
      const resizeHandleSnapTarget = each.resizeHandleSnapTarget
      const i = this.isVertical ? resizeHandleSnapTarget.y : resizeHandleSnapTarget.x
      const j = this.isVertical ? resizeHandleSnapTarget.x : resizeHandleSnapTarget.y
      const wireIndex = parseInt(dropzoneIndex) % this.numberOfWiresDisplayed

      if (!each.occupied || each === myDropzone) {
        resizeHandleSnapTargets.push(resizeHandleSnapTarget)
      }

      if (this.resizeHandleSnapTargets[i] === undefined) this.resizeHandleSnapTargets[i] = {}
      if (this.resizeHandleSnapTargets[i][j] === undefined)
        this.resizeHandleSnapTargets[i][j] = {
          dropzone: each,
          stepIndex: null,
          wireIndex
        }
    }

    operation.resizeHandleSnapTargets = resizeHandleSnapTargets
  }

  /**
   * @category Drag and Drop
   */
  updateSnapTargets(newDropzones: CircuitDropzoneElement[]): void {
    const firstDropzone = newDropzones[0]
    Util.notNull(firstDropzone)

    const baseI = this.isVertical ? firstDropzone.snapTarget.y : firstDropzone.snapTarget.x

    for (const [i, jv] of Object.entries(this.snapTargets)) {
      if (parseInt(i) <= baseI) continue

      for (const j in jv) {
        const snapTarget = jv[j]
        if (snapTarget.stepIndex === null) continue
        snapTarget.stepIndex += 1
      }
    }

    for (const [wireIndex, each] of Object.entries(newDropzones)) {
      const snapTarget = each.snapTarget
      const i = this.isVertical ? snapTarget.y : snapTarget.x
      const j = this.isVertical ? snapTarget.x : snapTarget.y

      Util.notNull(this.snapTargets[i])

      this.snapTargets[i][j] = {
        dropzone: each,
        stepIndex: null,
        wireIndex: parseInt(wireIndex)
      }
    }
  }

  serialize(): SerializedCircuitStep[] {
    return this.steps.map(each => each.serialize())
  }

  private get urlJson(): string {
    const json = window.location.href.toString().split(window.location.host)[1].slice(1)
    return decodeURIComponent(json)
  }

  clear(): void {
    history.pushState('', '', encodeURIComponent('{"cols":[]}'))
    location.reload()
  }

  toJson(): string {
    let isInBlock = false
    const cols = []

    for (const each of this.nonEmptySteps) {
      if (each.isInBlock) {
        if (!isInBlock) {
          const block = each.block
          cols.push(`["[${block.comment}"]`)
          isInBlock = true
        }
      } else {
        if (isInBlock) {
          cols.push('["]"]')
          isInBlock = false
        }
      }
      cols.push(each.toJson())
    }

    if (isInBlock) {
      cols.push('["]"]')
    }

    if (this.circuitTitle !== '') {
      return `{"cols":[${cols.join(',')}],"title":"${this.circuitTitle}"}`
    } else {
      return `{"cols":[${cols.join(',')}]}`
    }
  }
}

controller(QuantumCircuitElement)
