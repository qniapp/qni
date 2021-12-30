import {MeasurementGateElement, SerializedMeasurementGateElement} from './measurement-gate-element'
import {
  Operation,
  isControlGateElement,
  isHGateElement,
  isPhaseGateElement,
  isRnotGateElement,
  isRxGateElement,
  isRyGateElement,
  isRzGateElement,
  isSwapGateElement,
  isXGateElement,
  isYGateElement,
  isZGateElement
} from './operation'
import {
  SerializedBlochDisplay,
  SerializedControlGate,
  SerializedControlGateType,
  SerializedHGate,
  SerializedPhaseGate,
  SerializedPhaseGateType,
  SerializedRnotGate,
  SerializedRxGate,
  SerializedRyGate,
  SerializedRzGate,
  SerializedSwapGate,
  SerializedSwapGateType,
  SerializedXGate,
  SerializedYGate,
  SerializedZGate,
  Util
} from '@qni/common'
import {SerializedWriteGateElement, WriteGateElement} from './write-gate-element'
import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {BlochDisplayElement} from './bloch-display-element'
import {CircuitDropzoneElement} from './circuit-dropzone-element'
import {ControlGateElement} from './control-gate-element'
import {HGateElement} from './h-gate-element'
import {PhaseGateElement} from './phase-gate-element'
import {RnotGateElement} from './rnot-gate-element'
import {RxGateElement} from './rx-gate-element'
import {RyGateElement} from './ry-gate-element'
import {RzGateElement} from './rz-gate-element'
import {SwapGateElement} from './swap-gate-element'
import {XGateElement} from './x-gate-element'
import {YGateElement} from './y-gate-element'
import {ZGateElement} from './z-gate-element'
import {isControllable} from './mixin/controllable'
import {isDisableable} from './mixin'

// TODO: @qni/common へ移動
export type SerializedStep = Array<
  | SerializedHGate
  | SerializedXGate
  | SerializedYGate
  | SerializedZGate
  | SerializedPhaseGate
  | SerializedRnotGate
  | SerializedRxGate
  | SerializedRyGate
  | SerializedRzGate
  | SerializedSwapGate
  | SerializedControlGate
  | SerializedBlochDisplay
  | SerializedWriteGateElement
  | SerializedMeasurementGateElement
>

export const isCircuitStepElement = (arg: unknown): arg is CircuitStepElement =>
  arg !== undefined && arg !== null && arg instanceof CircuitStepElement

type ConnectionProps = {
  // Controlled-H
  disableCh: boolean
  maxChControlGates: number
  maxChTargetGates: number
  // Controlled-NOT
  disableCnot: boolean
  maxCnotControlGates: number
  maxCnotTargetGates: number
  // Controlled-Y
  disableCy: boolean
  maxCyControlGates: number
  maxCyTargetGates: number
  // Controlled-Z
  disableCz: boolean
  maxCzControlGates: number
  maxCzTargetGates: number
  // Controlled-Phase
  disableCphase: boolean
  maxCphaseControlGates: number
  maxCphaseTargetGates: number
  // Controlled-√X
  disableCrnot: boolean
  maxCrnotControlGates: number
  maxCrnotTargetGates: number
  // Controlled-Rx
  disableCrx: boolean
  maxCrxControlGates: number
  maxCrxTargetGates: number
  // Controlled-Ry
  disableCry: boolean
  maxCryControlGates: number
  maxCryTargetGates: number
  // Controlled-Rz
  disableCrz: boolean
  maxCrzControlGates: number
  maxCrzTargetGates: number
  // Controlled-Swap
  disableCswap: boolean
  maxCswapControlGates: number
  // Swap
  disableSwap: boolean
  // CZ
  disableControlControl: boolean
  maxControlControlTargetGates: number
  // CPHASE
  disablePhasePhase: boolean
  maxPhasePhaseTargetGates: number
}

type ControllableOperations =
  | HGateElement
  | XGateElement
  | YGateElement
  | ZGateElement
  | PhaseGateElement
  | RnotGateElement
  | RxGateElement
  | RyGateElement
  | RzGateElement

const groupBy = <K, V>(
  array: readonly V[],
  getKey: (current: V, index: number, orig: readonly V[]) => K
): Array<[K, V[]]> =>
  Array.from(
    array.reduce((map, current, index, orig) => {
      const key = getKey(current, index, orig)
      const list = map.get(key)
      if (list) {
        list.push(current)
      } else {
        map.set(key, [current])
      }
      return map
    }, new Map<K, V[]>())
  )

@controller
export class CircuitStepElement extends HTMLElement {
  @attr active = false
  @attr breakpoint = false

  get wireCount(): number {
    return this.dropzones.length
  }

  get shadow(): boolean {
    return this.hasAttribute('data-shadow')
  }

  set shadow(value: boolean) {
    if (value) {
      this.setAttribute('data-shadow', '')
    } else {
      this.removeAttribute('data-shadow')
    }
    for (const each of this.dropzones) {
      each.shadow = value
    }
  }

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()

    this.addEventListener('mouseenter', this.dispatchMouseenterEvent)
    this.addEventListener('click', this.dispatchClickEvent)
    this.addEventListener('circuit-dropzone-occupied', this.setOperationBit)
    this.addEventListener('circuit-dropzone-occupied', this.dispatchOccupiedEvent)
    this.addEventListener('circuit-dropzone-snap', this.setOperationBit)
    this.addEventListener('circuit-dropzone-snap', this.dispatchSnapEvent)
    this.addEventListener('circuit-dropzone-unsnap', this.dispatchUnsnapEvent)
    this.addEventListener('circuit-dropzone-drop', this.unshadow)
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
    this.dispatchEvent(new Event('circuit-step-update', {bubbles: true}))
  }

  updateConnections(connectionProps?: ConnectionProps): void {
    for (const each of this.dropzones) {
      each.connectTop = false
      each.connectBottom = false
    }

    this.updateSwapConnections(connectionProps)
    this.updatePhasePhaseConnections(connectionProps)

    const controllableDropzones = this.controllableDropzones(connectionProps)
    const controlDropzones = this.controlGateDropzones

    if (controlDropzones.length === 0) return
    if (controlDropzones.length === 1 && controllableDropzones.length === 0) {
      const controlGate = controlDropzones[0].operation as ControlGateElement
      controlGate.disable()
      return
    }

    if (controllableDropzones.length === 0) {
      this.updateControlControlConnections(connectionProps)
    } else {
      this.updateControlledUConnections(connectionProps)
    }

    this.updateFreeDropzoneConnections(connectionProps)
  }

  private updateSwapConnections(connectionProps?: ConnectionProps): void {
    const disableSwap = connectionProps?.disableSwap
    const swapDropzones = this.swapGateDropzones

    if (swapDropzones.length !== 2 || disableSwap) {
      for (const each of swapDropzones) {
        const swapGate = each.operation as SwapGateElement
        swapGate.disable()
      }
    } else {
      for (const swap of swapDropzones) {
        const swapGate = swap.operation as SwapGateElement
        swapGate.enable()
        swap.connectTop = swapDropzones.some(each => this.bit(each) < this.bit(swap))
        swap.connectBottom = swapDropzones.some(each => this.bit(each) > this.bit(swap))
      }

      const swapBits = swapDropzones.map(each => this.bit(each))
      for (const dropzone of this.freeDropzones) {
        const minBit = Math.min(...swapBits)
        const maxBit = Math.max(...swapBits)
        if (minBit < this.bit(dropzone) && this.bit(dropzone) < maxBit) {
          dropzone.connectTop = true
          dropzone.connectBottom = true
        }
      }
    }
  }

  private updatePhasePhaseConnections(connectionProps?: ConnectionProps): void {
    if (connectionProps?.disablePhasePhase) return

    const phaseDropzones = this.phaseGateDropzones

    for (const phaseDropzone of phaseDropzones) {
      const phaseGate = phaseDropzone.operation as PhaseGateElement
      if (phaseGate.angle === '') continue
      if (connectionProps !== undefined && connectionProps.maxPhasePhaseTargetGates === 1) continue

      let sameAnglePhaseBits = phaseDropzones
        .filter(each => {
          if (!isPhaseGateElement(each.operation)) throw new Error(`${each.operation} isn't a phase-gate element.`)
          return phaseGate.angle === each.operation.angle
        })
        .map(each => this.bit(each))
      if (connectionProps !== undefined && connectionProps.maxPhasePhaseTargetGates > 1) {
        sameAnglePhaseBits = sameAnglePhaseBits.slice(0, connectionProps.maxPhasePhaseTargetGates)
      }

      if (!sameAnglePhaseBits.includes(this.bit(phaseDropzone))) continue

      phaseDropzone.connectTop = sameAnglePhaseBits.some(each => each < this.bit(phaseDropzone))
      phaseDropzone.connectBottom = sameAnglePhaseBits.some(each => each > this.bit(phaseDropzone))
    }

    for (const dropzone of this.freeDropzones) {
      const controlledPhaseDropzones = this.phaseGateDropzones.filter(each => each.connectTop || each.connectBottom)
      const controlledBits = controlledPhaseDropzones.map(each => this.bit(each))
      const minBit = Math.min(...controlledBits)
      const maxBit = Math.max(...controlledBits)

      if (minBit < this.bit(dropzone) && this.bit(dropzone) < maxBit) {
        dropzone.connectTop = true
        dropzone.connectBottom = true
      }
    }
  }

  private updateControlControlConnections(connectionProps?: ConnectionProps): void {
    const controlGateDropzones = this.controlGateDropzones
    let controlBits = controlGateDropzones.map(each => this.bit(each))
    let numControl = 0

    if (connectionProps !== undefined) {
      if (connectionProps.maxControlControlTargetGates === 1) {
        controlBits = []
      } else if (connectionProps.maxControlControlTargetGates > 1) {
        controlBits = controlBits.slice(0, connectionProps.maxControlControlTargetGates)
      }
    }

    for (const each of controlGateDropzones) {
      numControl += 1

      const controlGate = each.operation as ControlGateElement

      if (connectionProps?.disableControlControl) {
        controlGate.disable()
      } else if (
        connectionProps !== undefined &&
        (connectionProps.maxControlControlTargetGates === 1 ||
          (connectionProps.maxControlControlTargetGates > 0 &&
            numControl > connectionProps.maxControlControlTargetGates))
      ) {
        controlGate.disable()
      } else {
        controlGate.enable()
        each.connectTop = controlBits.some(other => {
          return this.bit(each) > other
        })
        each.connectBottom = controlBits.some(other => {
          return this.bit(each) < other
        })
      }
    }
  }

  private updateControlledUConnections(connectionProps?: ConnectionProps): void {
    const controllableDropzones = this.controllableDropzones(connectionProps)
    const controlDropzones = this.controlGateDropzones
    const controllableOperationNames = [...new Set(controllableDropzones.map(each => each.operationName))]
    const numControlDropzones = this.numControlGateDropzones(connectionProps, controllableOperationNames)
    const allControlBits = controlDropzones.map(dz => this.bit(dz))
    const activeControlBits =
      numControlDropzones === null ? allControlBits : allControlBits.slice(0, numControlDropzones)
    const controllableBits = controllableDropzones.map(dz => this.bit(dz))
    const activeperationBits = activeControlBits.concat(controllableBits)

    for (const [i, each] of Object.entries(controlDropzones)) {
      const controlGate = each.operation as ControlGateElement

      each.connectBottom = activeperationBits.some(other => {
        return this.bit(each) < other
      })
      each.connectTop = activeperationBits.some(other => {
        return this.bit(each) > other
      })

      if (numControlDropzones === null || (numControlDropzones !== null && parseInt(i) < numControlDropzones)) {
        controlGate.enable()
      } else {
        each.connectTop = Math.max(...activeperationBits) > this.bit(each)
        controlGate.disable()
      }
    }

    for (const each of controllableDropzones) {
      if (!isControllable(each.operation)) throw new Error(`${each.operation} isn't controllable.`)

      each.operation.controls = this.controlBits(each, allControlBits, connectionProps)
      each.connectTop = activeperationBits.some(other => {
        return other < this.bit(each)
      })
      each.connectBottom = activeperationBits.some(other => {
        return other > this.bit(each)
      })
    }
  }

  private updateFreeDropzoneConnections(connectionProps?: ConnectionProps): void {
    const controllableDropzones = this.controllableDropzones(connectionProps)
    const activeControlBits = this.controlGateDropzones
      .filter(each => isControlGateElement(each.operation) && !each.operation.disabled)
      .map(each => this.bit(each))
    const controllableBits = controllableDropzones.map(dz => this.bit(dz))
    const activeOperationBits = activeControlBits.concat(controllableBits)

    const minBit = Math.min(...activeOperationBits)
    const maxBit = Math.max(...activeOperationBits)

    for (const each of this.freeDropzones) {
      if (minBit < this.bit(each) && this.bit(each) < maxBit) {
        each.connectTop = true
        each.connectBottom = true
      }
    }
  }

  private controlBits(
    dropzone: CircuitDropzoneElement,
    allControlBits: number[],
    connectionProps?: ConnectionProps
  ): number[] {
    let bits = allControlBits

    if (connectionProps) {
      if (connectionProps.maxChControlGates > 0 && dropzone.operationName === 'h-gate') {
        bits = allControlBits.slice(0, connectionProps.maxChControlGates)
      } else if (connectionProps.maxCnotControlGates > 0 && dropzone.operationName === 'x-gate') {
        bits = allControlBits.slice(0, connectionProps.maxCnotControlGates)
      } else if (connectionProps.maxCyControlGates > 0 && dropzone.operationName === 'y-gate') {
        bits = allControlBits.slice(0, connectionProps.maxCyControlGates)
      } else if (connectionProps.maxCzControlGates > 0 && dropzone.operationName === 'z-gate') {
        bits = allControlBits.slice(0, connectionProps.maxCzControlGates)
      } else if (connectionProps.maxCphaseControlGates > 0 && dropzone.operationName === 'phase-gate') {
        bits = allControlBits.slice(0, connectionProps.maxCphaseControlGates)
      } else if (connectionProps.maxCrnotControlGates > 0 && dropzone.operationName === 'rnot-gate') {
        bits = allControlBits.slice(0, connectionProps.maxCrnotControlGates)
      } else if (connectionProps.maxCrxControlGates > 0 && dropzone.operationName === 'rx-gate') {
        bits = allControlBits.slice(0, connectionProps.maxCrxControlGates)
      } else if (connectionProps.maxCryControlGates > 0 && dropzone.operationName === 'ry-gate') {
        bits = allControlBits.slice(0, connectionProps.maxCryControlGates)
      } else if (connectionProps.maxCrzControlGates > 0 && dropzone.operationName === 'rz-gate') {
        bits = allControlBits.slice(0, connectionProps.maxCrzControlGates)
      } else if (connectionProps.maxCswapControlGates > 0 && dropzone.operationName === 'swap-gate') {
        bits = allControlBits.slice(0, connectionProps.maxCswapControlGates)
      }
    }

    return bits
  }

  bit(dropzone: CircuitDropzoneElement): number {
    const bit = this.dropzones.indexOf(dropzone)
    Util.need(bit !== -1, 'circuit-dropzone not found.')

    return bit
  }

  get isEmpty(): boolean {
    return this.dropzones.every(each => !each.occupied)
  }

  dropzoneAt(dropzoneIndex: number): CircuitDropzoneElement {
    const dropzone = this.dropzones[dropzoneIndex]
    Util.notNull(dropzone)

    return dropzone
  }

  get dropzones(): CircuitDropzoneElement[] {
    return Array.from(this.querySelectorAll('circuit-dropzone')) as CircuitDropzoneElement[]
  }

  get freeDropzones(): CircuitDropzoneElement[] {
    return this.dropzones.filter(each => !each.occupied)
  }

  get lastDropzone(): CircuitDropzoneElement {
    return this.dropzones[this.wireCount - 1]
  }

  appendDropzone(): CircuitDropzoneElement {
    const dropzone = new CircuitDropzoneElement()
    dropzone.shadow = this.shadow
    this.append(dropzone)
    return dropzone
  }

  private get swapGateDropzones(): CircuitDropzoneElement[] {
    return this.dropzones.filter(each => each.occupied).filter(each => each.operationName === 'swap-gate')
  }

  private get phaseGateDropzones(): CircuitDropzoneElement[] {
    return this.dropzones.filter(each => each.occupied).filter(each => each.operationName === 'phase-gate')
  }

  private get controlGateDropzones(): CircuitDropzoneElement[] {
    return this.dropzones.filter(each => isControlGateElement(each.operation))
  }

  private numControlGateDropzones(
    props: ConnectionProps | undefined,
    controllableOperationNames: string[]
  ): number | null {
    if (props === undefined) return null

    let ndropzones = 0
    if (controllableOperationNames.includes('h-gate') && !props.disableCh && props.maxChControlGates > ndropzones) {
      ndropzones = props.maxChControlGates
    }
    if (controllableOperationNames.includes('x-gate') && !props.disableCnot && props.maxCnotControlGates > ndropzones) {
      ndropzones = props.maxCnotControlGates
    }
    if (controllableOperationNames.includes('y-gate') && !props.disableCy && props.maxCyControlGates > ndropzones) {
      ndropzones = props.maxCyControlGates
    }
    if (controllableOperationNames.includes('z-gate') && !props.disableCz && props.maxCzControlGates > ndropzones) {
      ndropzones = props.maxCzControlGates
    }
    if (
      controllableOperationNames.includes('phase-gate') &&
      !props.disableCphase &&
      props.maxCphaseControlGates > ndropzones
    ) {
      ndropzones = props.maxCphaseControlGates
    }
    if (
      controllableOperationNames.includes('rnot-gate') &&
      !props.disableCrnot &&
      props.maxCrnotControlGates > ndropzones
    ) {
      ndropzones = props.maxCrnotControlGates
    }
    if (controllableOperationNames.includes('rx-gate') && !props.disableCrx && props.maxCrxControlGates > ndropzones) {
      ndropzones = props.maxCrxControlGates
    }
    if (controllableOperationNames.includes('ry-gate') && !props.disableCry && props.maxCryControlGates > ndropzones) {
      ndropzones = props.maxCryControlGates
    }
    if (controllableOperationNames.includes('rz-gate') && !props.disableCrz && props.maxCrzControlGates > ndropzones) {
      ndropzones = props.maxCrzControlGates
    }
    if (
      controllableOperationNames.includes('swap-gate') &&
      !props.disableCswap &&
      props.maxCswapControlGates > ndropzones
    ) {
      ndropzones = props.maxCswapControlGates
    }

    if (ndropzones === 0) return null
    return ndropzones
  }

  private controllableDropzones(connectionProps: ConnectionProps | undefined): CircuitDropzoneElement[] {
    let numH = 0
    let numX = 0
    let numY = 0
    let numZ = 0
    let numPhase = 0
    let numRnot = 0
    let numRx = 0
    let numRy = 0
    let numRz = 0

    return this.dropzones
      .filter(each => each.occupied)
      .filter(each => isControllable(each.operation))
      .filter(each => {
        if (connectionProps === undefined) return true

        if (isHGateElement(each.operation)) {
          numH += 1
          if (connectionProps.maxChTargetGates !== 0 && numH > connectionProps.maxChTargetGates) {
            return false
          }
          return !connectionProps.disableCh
        }
        if (isXGateElement(each.operation)) {
          numX += 1
          if (connectionProps.maxCnotTargetGates !== 0 && numX > connectionProps.maxCnotTargetGates) {
            return false
          }
          return !connectionProps.disableCnot
        }
        if (isYGateElement(each.operation)) {
          numY += 1
          if (connectionProps.maxCyTargetGates !== 0 && numY > connectionProps.maxCyTargetGates) {
            return false
          }
          return !connectionProps.disableCy
        }
        if (isZGateElement(each.operation)) {
          numZ += 1
          if (connectionProps.maxCzTargetGates !== 0 && numZ > connectionProps.maxCzTargetGates) {
            return false
          }
          return !connectionProps.disableCz
        }
        if (isPhaseGateElement(each.operation)) {
          numPhase += 1
          if (connectionProps.maxCphaseTargetGates !== 0 && numPhase > connectionProps.maxCphaseTargetGates) {
            return false
          }
          return !connectionProps.disableCphase
        }
        if (isRnotGateElement(each.operation)) {
          numRnot += 1
          if (connectionProps.maxCrnotTargetGates !== 0 && numRnot > connectionProps.maxCrnotTargetGates) {
            return false
          }
          return !connectionProps.disableCrnot
        }
        if (isRxGateElement(each.operation)) {
          numRx += 1
          if (connectionProps.maxCrxTargetGates !== 0 && numRx > connectionProps.maxCrxTargetGates) {
            return false
          }
          return !connectionProps.disableCrx
        }
        if (isRyGateElement(each.operation)) {
          numRy += 1
          if (connectionProps.maxCryTargetGates !== 0 && numRy > connectionProps.maxCryTargetGates) {
            return false
          }
          return !connectionProps.disableCry
        }
        if (isRzGateElement(each.operation)) {
          numRz += 1
          if (connectionProps.maxCrzTargetGates !== 0 && numRz > connectionProps.maxCrzTargetGates) {
            return false
          }
          return !connectionProps.disableCrz
        }
        if (isSwapGateElement(each.operation)) return !connectionProps.disableCswap

        return true
      })
  }

  private dispatchMouseenterEvent(): void {
    this.dispatchEvent(new Event('circuit-step-mouseenter', {bubbles: true}))
  }

  private dispatchClickEvent(): void {
    this.dispatchEvent(new Event('circuit-step-click', {bubbles: true}))
  }

  private setOperationBit(event: Event): void {
    const dropzone = event.target as CircuitDropzoneElement
    const bit = this.bit(dropzone)
    Util.notNull(dropzone.operation)

    dropzone.operation.bit = bit
  }

  private dispatchOccupiedEvent(event: Event): void {
    this.dispatchEvent(
      new CustomEvent('circuit-step-occupied', {
        detail: {dropzone: event.target},
        bubbles: true
      })
    )
  }

  private dispatchSnapEvent(event: Event): void {
    this.dispatchEvent(
      new CustomEvent('circuit-step-snap', {
        detail: {dropzone: event.target},
        bubbles: true
      })
    )
  }

  private dispatchUnsnapEvent(event: Event): void {
    this.dispatchEvent(
      new CustomEvent('circuit-step-unsnap', {
        detail: {dropzone: event.target},
        bubbles: true
      })
    )
  }

  private unshadow(): void {
    this.shadow = false
  }

  private get operations(): Operation[] {
    return this.dropzones
      .map(each => each.operation)
      .filter(each => !isDisableable(each) || !each.disabled)
      .filter((each): each is NonNullable<Operation> => each !== null)
  }

  serialize(): SerializedStep {
    let serializedStep: SerializedStep = []
    let operations = this.operations

    if (this.containsControlledU) {
      operations = operations.filter(each => !isControlGateElement(each))
    }

    const swapPair = this.groupSwapGatePair(operations)
    if (swapPair !== null) serializedStep.push(swapPair)

    const controlGroup = this.groupControlGates(operations)
    if (controlGroup !== null) serializedStep.push(controlGroup)

    serializedStep = serializedStep.concat(this.groupPhaseGates(operations))
    operations = operations.filter(each => !(isPhaseGateElement(each) && each.controls.length === 0))

    for (const [klass, operationsGroup] of groupBy(operations, op => op.constructor)) {
      let groupedOps: SerializedStep | null = null

      switch (klass) {
        case HGateElement:
        case XGateElement:
        case YGateElement:
        case ZGateElement:
        case PhaseGateElement:
        case RnotGateElement:
        case RxGateElement:
        case RyGateElement:
        case RzGateElement: {
          groupedOps = this.groupOperationsByControls(operationsGroup as ControllableOperations[])
          break
        }
        case BlochDisplayElement:
        case WriteGateElement:
        case MeasurementGateElement: {
          const targets = operationsGroup.map(each => each.bit)
          operationsGroup[0].operationType
          groupedOps = [
            {
              type: operationsGroup[0].operationType,
              targets
            }
          ]
          break
        }
        case SwapGateElement:
        case ControlGateElement:
          break
        default:
          throw new Error(`Unknown operation type: ${klass}`)
      }

      if (groupedOps !== null) serializedStep = serializedStep.concat(groupedOps)
    }

    return serializedStep
  }

  private get containsControlledU(): boolean {
    return (
      this.dropzones.some(each => {
        return isControlGateElement(each.operation)
      }) &&
      this.dropzones.some(each => {
        return isControllable(each.operation)
      })
    )
  }

  groupSwapGatePair(operations: Operation[]): {
    type: typeof SerializedSwapGateType
    targets: number[]
    controls?: number[]
  } | null {
    const swapPair = operations.filter((each): each is SwapGateElement => isSwapGateElement(each))
    if (swapPair.length !== 2) return null

    const targets = swapPair.map(each => each.bit)
    const controls = swapPair[0].controls
    if (controls !== undefined && controls.length > 0) {
      return {type: SerializedSwapGateType, targets, controls}
    } else {
      return {type: SerializedSwapGateType, targets}
    }
  }

  groupControlGates(operations: Operation[]): {type: typeof SerializedControlGateType; targets: number[]} | null {
    const controlGates = operations.filter((each): each is ControlGateElement => isControlGateElement(each))
    if (controlGates.length < 2) return null
    if (operations.some(each => isControllable(each))) return null

    const targets = controlGates.map(each => each.bit)
    return {type: SerializedControlGateType, targets}
  }

  groupPhaseGates(operations: Operation[]): SerializedStep {
    const serializedStep: SerializedStep = []
    const phaseGates = operations.filter(
      (each): each is PhaseGateElement => isPhaseGateElement(each) && each.controls.length === 0
    )

    for (const [angle, group] of groupBy(phaseGates, phase => phase.angle)) {
      const targets = group.map(each => each.bit)
      if (angle === '') {
        serializedStep.push({
          type: SerializedPhaseGateType,
          targets
        })
      } else {
        serializedStep.push({
          type: SerializedPhaseGateType,
          angle,
          targets
        })
      }
    }

    return serializedStep
  }

  private groupOperationsByControls(operations: ControllableOperations[]): SerializedStep {
    const serializedStep: SerializedStep = []

    for (const [controls, group] of groupBy(operations, op => op.controls.toString())) {
      const targets = group.map(each => each.bit)
      if (controls === '') {
        serializedStep.push({type: group[0].operationType, targets})
      } else {
        serializedStep.push({type: group[0].operationType, targets, controls: group[0].controls})
      }
    }

    return serializedStep
  }
}
