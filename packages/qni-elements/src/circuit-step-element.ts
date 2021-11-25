import {html, render} from '@github/jtml'
import {CircuitDropzoneElement} from './circuit-dropzone-element'
import {ControlGateElement} from './control-gate-element'
import {PhaseGateElement} from './phase-gate-element'
import {SwapGateElement} from './swap-gate-element'
import {controller} from '@github/catalyst'
import {isControllableOperation} from './operation'

@controller
export class CircuitStepElement extends HTMLElement {
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
    this.updateConnections()

    this.addEventListener('circuit-dropzone-occupied', this.dispatchOccupiedEvent)
    this.addEventListener('circuit-dropzone-snap', this.updateConnections)
    this.addEventListener('circuit-dropzone-snap', this.dispatchSnapEvent)
    this.addEventListener('circuit-dropzone-unsnap', this.updateConnections)
    this.addEventListener('circuit-dropzone-unsnap', this.dispatchUnsnapEvent)
    this.addEventListener('circuit-dropzone-drop', this.unshadow)
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  updateConnections(): void {
    const controlDropzones = this.controlGateDropzones
    const controlBits = controlDropzones.map(dz => this.bit(dz))
    const controllableDropzones = this.controllableDropzones
    const controllableBits = controllableDropzones.map(dz => this.bit(dz))
    const operationBits = controlBits.concat(controllableBits)

    for (const each of this.dropzones) {
      each.wireTop = false
      each.wireBottom = false
    }

    this.updateSwapConnections()
    this.updateCphaseConnections()

    if (controlDropzones.length === 0) return

    if (controlDropzones.length === 1 && controllableDropzones.length === 0) {
      const controlGate = controlDropzones[0].operation as ControlGateElement
      controlGate.disable()
      return
    }

    if (controllableDropzones.length === 0) {
      for (const each of controlDropzones) {
        const controlGate = each.operation as ControlGateElement
        controlGate.enable()

        each.wireTop = controlBits.some(other => {
          return this.bit(each) > other
        })
        each.wireBottom = controlBits.some(other => {
          return this.bit(each) < other
        })
      }
    } else {
      for (const each of controlDropzones) {
        const controlGate = each.operation as ControlGateElement
        controlGate.enable()
        each.wireTop = operationBits.some(other => {
          return this.bit(each) > other
        })
        each.wireBottom = operationBits.some(other => {
          return this.bit(each) < other
        })
      }
      for (const each of controllableDropzones) {
        each.wireTop = operationBits.some(other => {
          return other < this.bit(each)
        })
        each.wireBottom = operationBits.some(other => {
          return other > this.bit(each)
        })
      }
    }

    for (const each of this.freeDropzones) {
      const minBit = operationBits.sort()[0]
      const maxBit = operationBits.sort().slice(-1)[0]

      if (minBit < this.bit(each) && this.bit(each) < maxBit) {
        each.wireTop = true
        each.wireBottom = true
      }
    }
  }

  private updateSwapConnections(): void {
    const swapDropzones = this.swapGateDropzones

    if (swapDropzones.length !== 2) {
      for (const each of swapDropzones) {
        const swapGate = each.operation as SwapGateElement
        swapGate.disable()
      }
    } else {
      for (const swap of swapDropzones) {
        const swapGate = swap.operation as SwapGateElement
        swapGate.enable()
        swap.wireTop = swapDropzones.some(each => this.bit(each) < this.bit(swap))
        swap.wireBottom = swapDropzones.some(each => this.bit(each) > this.bit(swap))
      }

      const swapBits = swapDropzones.map(each => this.bit(each))
      for (const dropzone of this.freeDropzones) {
        const minBit = Math.min(...swapBits)
        const maxBit = Math.max(...swapBits)
        if (minBit < this.bit(dropzone) && this.bit(dropzone) < maxBit) {
          dropzone.wireTop = true
          dropzone.wireBottom = true
        }
      }
    }
  }

  private updateCphaseConnections(): void {
    const phaseDropzones = this.phaseGateDropzones

    for (const phase of phaseDropzones) {
      const phaseGate = phase.operation as PhaseGateElement
      phaseGate.enable()
      if (phaseGate.angle === '') continue

      phase.wireTop = phaseDropzones.some(
        each => phaseGate.angle === (each.operation as PhaseGateElement).angle && this.bit(each) < this.bit(phase)
      )
      phase.wireBottom = phaseDropzones.some(
        each => phaseGate.angle === (each.operation as PhaseGateElement).angle && this.bit(each) > this.bit(phase)
      )
    }

    for (const dropzone of this.freeDropzones) {
      const controlledDropzones = this.phaseGateDropzones.filter(each => each.wireTop || each.wireBottom)
      const controlledBits = controlledDropzones.map(each => this.bit(each))
      const minBit = Math.min(...controlledBits)
      const maxBit = Math.max(...controlledBits)

      if (minBit < this.bit(dropzone) && this.bit(dropzone) < maxBit) {
        dropzone.wireTop = true
        dropzone.wireBottom = true
      }
    }
  }

  bit(dropzone: CircuitDropzoneElement): number {
    const bit = this.dropzones.indexOf(dropzone)
    if (bit === -1) throw new Error('circuit-dropzone not found.')

    return bit
  }

  get isEmpty(): boolean {
    return this.dropzones.every(each => !each.occupied)
  }

  dropzoneAt(dropzoneIndex: number): CircuitDropzoneElement {
    const dropzone = this.dropzones[dropzoneIndex]
    if (dropzone === undefined) throw new Error(`circuit-dropzone[${dropzoneIndex}] not found.`)

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
    return this.dropzones.filter(each => each.occupied).filter(each => each.operationName === 'control-gate')
  }

  private get controllableDropzones(): CircuitDropzoneElement[] {
    return this.dropzones.filter(each => each.occupied).filter(each => isControllableOperation(each.operation))
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
}
