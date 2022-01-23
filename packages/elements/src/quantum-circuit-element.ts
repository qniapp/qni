import {CircuitDropzoneElement, isCircuitDropzoneElement} from './circuit-dropzone-element'
import {CircuitStepElement, isCircuitStepElement} from './circuit-step-element'
import {HGateElement, HGateElementProps} from './h-gate-element'
import {Interpreter, createMachine, interpret} from 'xstate'
import {PhaseGateElement, PhaseGateElementProps} from './phase-gate-element'
import {RnotGateElement, RnotGateElementProps} from './rnot-gate-element'
import {RxGateElement, RxGateElementProps} from './rx-gate-element'
import {RyGateElement, RyGateElementProps} from './ry-gate-element'
import {RzGateElement, RzGateElementProps} from './rz-gate-element'
import {SerializedCircuitStep, Util} from '@qni/common'
import {XGateElement, XGateElementProps} from './x-gate-element'
import {YGateElement, YGateElementProps} from './y-gate-element'
import {ZGateElement, ZGateElementProps} from './z-gate-element'
import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {BlochDisplayElement} from './bloch-display-element'
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

type QuantumCircuitContext = Record<string, never>
type QuantumCircuitEvent = {type: 'EDIT'} | {type: 'EDIT_DONE'}

export class QuantumCircuitElement extends HTMLElement {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private quantumCircuitService!: Interpreter<QuantumCircuitContext, any, QuantumCircuitEvent>

  private snapTargets!: {
    [i: number]: {
      [j: number]: SnapTarget
    }
  }

  get wireCount(): number {
    return this.stepAt(0).wireCount
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

  private get steps(): CircuitStepElement[] {
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
      if (each.wireCount > 0 && each.wireCount > max) {
        step = each
        max = each.wireCount
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
    for (let i = 0; i < this.wireCount; i++) {
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
    this.deactivateAllSteps()
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
    this.quantumCircuitService = interpret(this.quantumCircuitMachine)
      .onTransition(state => {
        if (this.debug) {
          // eslint-disable-next-line no-console
          console.log(`quantum-circuit: ${state.value}`)
        }
      })
      .start()

    this.attachShadow({mode: 'open'})
    this.update()

    this.loadFromJson()
    this.appendMinimumSteps()
    this.appendMinimumWires()
    this.updateAllWires()

    this.addEventListener('mouseleave', this.dispatchMouseleaveEvent)
    this.addEventListener('circuit-step-update', this.updateStep)
    this.addEventListener('circuit-step-snap', this.updateStep)
    this.addEventListener('circuit-step-snap', this.updateChangedWire)
    this.addEventListener('circuit-step-unsnap', this.updateStep)
    this.addEventListener('circuit-step-unsnap', this.updateChangedWire)
    this.addEventListener('circuit-step-delete-operation', this.updateStep)
    this.addEventListener('circuit-step-delete-operation', this.updateChangedWire)
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
    this.dispatchEvent(new Event('quantum-circuit-mouseleave', {bubbles: true}))
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
    let targets: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targets = args as number[]
    } else {
      const props = args[0]
      targets = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const h = new HGateElement()
      if (disabled) h.disable()
      return h
    }, ...targets)

    this.resize()

    return this
  }

  /**
   * @category Circuit Operation
   */
  x(...args: number[] | [XGateElementProps]): QuantumCircuitElement {
    let targets: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targets = args as number[]
    } else {
      const props = args[0]
      targets = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const x = new XGateElement()
      if (disabled) x.disable()
      return x
    }, ...targets)

    return this
  }

  /**
   * @category Circuit Operation
   */
  y(...args: number[] | [YGateElementProps]): QuantumCircuitElement {
    let targets: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targets = args as number[]
    } else {
      const props = args[0]
      targets = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const y = new YGateElement()
      if (disabled) y.disable()
      return y
    }, ...targets)

    return this
  }

  /**
   * @category Circuit Operation
   */
  z(...args: number[] | [ZGateElementProps]): QuantumCircuitElement {
    let targets: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targets = args as number[]
    } else {
      const props = args[0]
      targets = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const z = new ZGateElement()
      if (disabled) z.disable()
      return z
    }, ...targets)

    return this
  }

  /**
   * @category Circuit Operation
   */
  phase(...args: number[] | [string, ...number[]] | [PhaseGateElementProps]): QuantumCircuitElement {
    let angle = ''
    let targets: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targets = args as number[]
    } else if (typeof args[0] === 'string') {
      angle = args[0]
      targets = args.slice(1) as number[]
    } else {
      const props = args[0]
      targets = props.targets
      disabled = props.disabled
    }

    const step = this.applyOperationToTargets(() => {
      const phase = new PhaseGateElement()
      phase.angle = angle
      if (disabled) phase.disable()
      return phase
    }, ...targets)
    if (targets.length > 1) this.updateStepOperationAttributes(step)

    return this
  }

  /**
   * @category Circuit Operation
   */
  rnot(...args: number[] | [RnotGateElementProps]): QuantumCircuitElement {
    let targets: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targets = args as number[]
    } else {
      const props = args[0]
      targets = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const rnot = new RnotGateElement()
      if (disabled) rnot.disable()
      return rnot
    }, ...targets)

    return this
  }

  /**
   * @category Circuit Operation
   */
  rx(...args: number[] | [RxGateElementProps]): QuantumCircuitElement {
    let targets: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targets = args as number[]
    } else {
      const props = args[0]
      targets = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const rx = new RxGateElement()
      if (disabled) rx.disable()
      return rx
    }, ...targets)

    return this
  }

  /**
   * @category Circuit Operation
   */
  ry(...args: number[] | [RyGateElementProps]): QuantumCircuitElement {
    let targets: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targets = args as number[]
    } else {
      const props = args[0]
      targets = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const ry = new RyGateElement()
      if (disabled) ry.disable()
      return ry
    }, ...targets)

    return this
  }

  /**
   * @category Circuit Operation
   */
  rz(...args: number[] | [RzGateElementProps]): QuantumCircuitElement {
    let targets: number[]
    let disabled: boolean | undefined

    if (typeof args[0] === 'number') {
      targets = args as number[]
    } else {
      const props = args[0]
      targets = props.targets
      disabled = props.disabled
    }

    this.applyOperationToTargets(() => {
      const rz = new RzGateElement()
      if (disabled) rz.disable()
      return rz
    }, ...targets)

    return this
  }

  /**
   * @category Circuit Operation
   */
  swap(...targets: number[]): QuantumCircuitElement {
    const step = this.applyOperationToTargets(() => new SwapGateElement(), ...targets)
    this.updateStepOperationAttributes(step)
    return this
  }

  /**
   * @category Circuit Operation
   */
  control(...targets: number[]): QuantumCircuitElement {
    const step = this.applyOperationToTargets(() => new ControlGateElement(), ...targets)
    this.updateStepOperationAttributes(step)
    return this
  }

  /**
   * @category Circuit Operation
   */
  bloch(...targets: number[]): QuantumCircuitElement {
    this.applyOperationToTargets(() => new BlochDisplayElement(), ...targets)
    return this
  }

  /**
   * @category Circuit Operation
   */
  write(value: '0' | '1', ...targets: number[]): QuantumCircuitElement {
    this.applyOperationToTargets(() => {
      const writeGate = new WriteGateElement()
      writeGate.value = value
      return writeGate
    }, ...targets)

    this.resize()

    return this
  }

  /**
   * @category Circuit Operation
   */
  measure(...targets: number[]): QuantumCircuitElement {
    this.applyOperationToTargets(() => new MeasurementGateElement(), ...targets)
    this.resize()
    return this
  }

  private applyOperationToTargets(constructor: () => Operation, ...targets: number[]): CircuitStepElement {
    const nbit = Math.max(...targets) + 1
    const step = this.appendStepWithDropzones(nbit)

    for (const each of targets) {
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
  cc(...targets: number[]): QuantumCircuitElement {
    const nbit = Math.max(...targets) + 1
    const step = this.appendStepWithDropzones(nbit)

    for (const each of targets) {
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
      | typeof RnotGateElement
      | typeof RxGateElement
      | typeof RyGateElement
      | typeof RzGateElement
      | typeof SwapGateElement,
    control: number | number[],
    target: number | number[]
  ): void {
    const controls = ([] as number[]).concat(...[control])
    const targets = ([] as number[]).concat(...[target])

    const bits = controls.concat(targets)
    const nbit = Math.max(...bits) + 1
    const step = this.appendStepWithDropzones(nbit)

    for (const each of controls) {
      step.dropzoneAt(each).put(new ControlGateElement())
    }
    for (const each of targets) {
      step.dropzoneAt(each).put(new constructor())
    }

    this.appendMinimumWires()
    this.updateStepOperationAttributes(step)
  }

  private appendStep(): CircuitStepElement {
    const step = new CircuitStepElement()

    this.append(step)
    return step
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
    while (this.steps.every(each => each.wireCount > this.minWireCount && !each.lastDropzone.occupied)) {
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

  private loadFromJson(): void {
    let jsonString
    // let circuitBlock = null

    if (this.updateUrl) {
      jsonString = this.urlJson
    } else {
      jsonString = this.json
    }

    if (jsonString === '' || jsonString === 'new') {
      if (this.updateUrl) {
        this.resize()
      }
      return
    }

    const jsonData = JSON.parse(jsonString)
    this.circuitTitle = (jsonData.title || '').trim()

    for (const step of jsonData.cols) {
      const circuitStep = this.appendStep()

      for (const instruction of step) {
        switch (true) {
          case /^\|0>$/.test(instruction): {
            const writeGate = new WriteGateElement()
            writeGate.value = '0'
            circuitStep.appendOperation(writeGate)
            break
          }
          case /^\|1>$/.test(instruction): {
            const writeGate = new WriteGateElement()
            writeGate.value = '1'
            circuitStep.appendOperation(writeGate)
            break
          }
          case /^H$/.test(instruction): {
            const hGate = new HGateElement()
            circuitStep.appendOperation(hGate)
            break
          }
          case /^H<(.+)$/.test(instruction): {
            const hGate = new HGateElement()
            hGate.if = RegExp.$1.trim()
            circuitStep.appendOperation(hGate)
            break
          }
          case /^X$/.test(instruction): {
            const xGate = new XGateElement()
            circuitStep.appendOperation(xGate)
            break
          }
          case /^X<(.+)$/.test(instruction): {
            const xGate = new XGateElement()
            xGate.if = RegExp.$1.trim()
            circuitStep.appendOperation(xGate)
            break
          }
          case /^Y$/.test(instruction): {
            const yGate = new YGateElement()
            circuitStep.appendOperation(yGate)
            break
          }
          case /^Y<(.+)$/.test(instruction): {
            const yGate = new YGateElement()
            yGate.if = RegExp.$1.trim()
            circuitStep.appendOperation(yGate)
            break
          }
          case /^Z$/.test(instruction): {
            const zGate = new ZGateElement()
            circuitStep.appendOperation(zGate)
            break
          }
          case /^Z<(.+)$/.test(instruction): {
            const zGate = new ZGateElement()
            zGate.if = RegExp.$1.trim()
            circuitStep.appendOperation(zGate)
            break
          }
          case /^P$/.test(instruction): {
            const phaseGate = new PhaseGateElement()
            circuitStep.appendOperation(phaseGate)
            break
          }
          case /^P\((.+)\)$/.test(instruction): {
            const phaseGate = new PhaseGateElement()
            phaseGate.angle = RegExp.$1.replace('_', '/')
            circuitStep.appendOperation(phaseGate)
            break
          }
          case /^X\^½$/.test(instruction): {
            const rnotGate = new RnotGateElement()
            circuitStep.appendOperation(rnotGate)
            break
          }
          case /^X\^½<(.+)$/.test(instruction): {
            const rnotGate = new RnotGateElement()
            rnotGate.if = RegExp.$1.trim()
            circuitStep.appendOperation(rnotGate)
            break
          }
          case /^Rx$/.test(instruction): {
            const rxGate = new RxGateElement()
            circuitStep.appendOperation(rxGate)
            break
          }
          case /^Rx\((.+)\)$/.test(instruction): {
            const rxGate = new RxGateElement()
            rxGate.angle = RegExp.$1.replace('_', '/')
            circuitStep.appendOperation(rxGate)
            break
          }
          case /^Ry$/.test(instruction): {
            const ryGate = new RyGateElement()
            circuitStep.appendOperation(ryGate)
            break
          }
          case /^Ry\((.+)\)$/.test(instruction): {
            const ryGate = new RyGateElement()
            ryGate.angle = RegExp.$1.replace('_', '/')
            circuitStep.appendOperation(ryGate)
            break
          }
          case /^Rz$/.test(instruction): {
            const rzGate = new RzGateElement()
            circuitStep.appendOperation(rzGate)
            break
          }
          case /^Rz\((.+)\)$/.test(instruction): {
            const rzGate = new RzGateElement()
            rzGate.angle = RegExp.$1.replace('_', '/')
            circuitStep.appendOperation(rzGate)
            break
          }
          case /^Swap$/.test(instruction): {
            const swapGate = new SwapGateElement()
            circuitStep.appendOperation(swapGate)
            break
          }
          case /^•$/.test(instruction): {
            const controlGate = new ControlGateElement()
            circuitStep.appendOperation(controlGate)
            break
          }
          case /^Bloch$/.test(instruction): {
            const blochDisplay = new BlochDisplayElement()
            circuitStep.appendOperation(blochDisplay)
            break
          }
          case /^Measure$/.test(instruction): {
            const measurementGate = new MeasurementGateElement()
            circuitStep.appendOperation(measurementGate)
            break
          }
          case /^Measure>(.+)$/.test(instruction): {
            const measurementGate = new MeasurementGateElement()
            measurementGate.flag = RegExp.$1.trim()
            circuitStep.appendOperation(measurementGate)
            break
          }
          case /^[[{](.+)$/.test(instruction): {
            // const comment = RegExp.$1
            // circuitStep.remove()
            // circuitBlock = new CircuitBlockElement()
            // circuitBlock.comment = comment
            // circuitBlock.setAttribute('data-targets', 'quantum-circuit.blocks')
            // this.append(circuitBlock)
            break
          }
          case /^[\]}]$/.test(instruction): {
            // circuitStep.remove()
            // circuitBlock!.finalize()
            break
          }
          default: {
            if (instruction === 1) {
              // if (circuitStep.qubitCount === 0) {
              //   circuitStep.keep = true
              // } else {
              //   circuitStep.keep = false
              // }
            } else {
              throw new Error(`Unknown instruction: ${instruction}`)
            }
            circuitStep.appendDropzone()
          }
        }
        // circuitStep.updateConnections()
        circuitStep.updateOperationAttributes()
      }
    }

    this.resize()
  }

  private appendMinimumWires(): void {
    const largestStep = this.largestStep
    const largestWireCount =
      largestStep && largestStep.wireCount > this.minWireCount ? largestStep.wireCount : this.minWireCount

    for (const each of this.steps) {
      const nDropzone = largestWireCount - each.wireCount
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
  set draggable(value: boolean) {
    for (const each of this.operations) {
      each.draggable = value
    }
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
  setSnapTargets(operation: Operation): void {
    const freeDropzones = this.dropzones.filter(each => !each.occupied)
    const snapTargets = []
    this.snapTargets = {}

    const myDropzone = operation.dropzone
    if (isCircuitDropzoneElement(myDropzone)) freeDropzones.push(myDropzone)

    for (const [dropzoneIndex, each] of Object.entries(this.dropzones)) {
      const snapTarget = each.snapTarget
      const i = this.isVertical ? snapTarget.y : snapTarget.x
      const j = this.isVertical ? snapTarget.x : snapTarget.y
      const wireIndex = parseInt(dropzoneIndex) % this.wireCount

      const prevI = i - operation.snapRange * 0.75
      const nextI = i + operation.snapRange * 0.75

      if (parseInt(dropzoneIndex) < this.wireCount) {
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

      if (this.isVertical) {
        snapTargets.push({x: j, y: nextI})
      } else {
        snapTargets.push({x: nextI, y: j})
      }
      if (this.snapTargets[nextI] === undefined) this.snapTargets[nextI] = {}
      if (this.snapTargets[nextI][j] === undefined)
        this.snapTargets[nextI][j] = {
          dropzone: null,
          stepIndex: Math.floor(parseInt(dropzoneIndex) / this.wireCount),
          wireIndex
        }

      if (!each.occupied || each === myDropzone) {
        snapTargets.push(snapTarget)
      }

      if (this.snapTargets[i] === undefined) this.snapTargets[i] = {}
      if (this.snapTargets[i][j] === undefined)
        this.snapTargets[i][j] = {
          dropzone: each,
          stepIndex: null,
          wireIndex
        }
    }

    operation.snapTargets = snapTargets
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
    const cols = []

    for (const each of this.nonEmptySteps) {
      cols.push(each.toJson())
    }

    if (this.circuitTitle !== '') {
      return `{"cols":[${cols.join(',')}],"title":"${this.circuitTitle}"}`
    } else {
      return `{"cols":[${cols.join(',')}]}`
    }

    // let isInBlock = false
    // const cols = []

    // for (const each of this.nonEmptySteps) {
    //   if (each.isInBlock) {
    //     if (!isInBlock) {
    //       const block = each.block
    //       cols.push(`["[${block.comment}"]`)
    //       isInBlock = true
    //     }
    //   } else {
    //     if (isInBlock) {
    //       cols.push('["]"]')
    //       isInBlock = false
    //     }
    //   }
    //   cols.push(each.toJson())
    // }

    // if (isInBlock) {
    //   cols.push('["]"]')
    // }

    // if (this.circuitTitle !== '') {
    //   return `{"cols":[${cols.join(',')}],"title":"${this.circuitTitle}"}`
    // } else {
    //   return `{"cols":[${cols.join(',')}]}`
    // }
  }
}

controller(QuantumCircuitElement)
