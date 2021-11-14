import {CircuitDropzoneElement, isCircuitDropzoneElement} from './circuit-dropzone-element'
import {ControllableOperation, Operation, isControllableOperation} from './operation'
import {html, render} from '@github/jtml'
import {ControlGateElement} from './control-gate-element'
import {controller} from '@github/catalyst'

@controller
export class CircuitStepElement extends HTMLElement {
  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.updateConnections()
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  private updateConnections(): void {
    const controlGates = this.controlGates
    const controlBits = controlGates.map(each => this.bit(each))
    const controllableOperations = this.controllableOperations
    const controllableBits = controllableOperations.map(each => this.bit(each))

    if (controlGates.length === 0) return

    if (controlGates.length === 1 && controllableOperations.length === 0) {
      controlGates[0].disabled = true
      return
    }

    if (controlGates.length > 1 && controllableOperations.length === 0) {
      const minBit = controlBits.sort()[0]
      const maxBit = controlBits.sort().slice(-1)[0]

      for (const each of controlGates) {
        each.wireTop = this.bit(each) > minBit
        each.wireBottom = this.bit(each) < maxBit
      }
    } else {
      for (const each of controlGates) {
        each.wireTop = controllableBits.some(controllableBit => {
          return this.bit(each) > controllableBit
        })
        each.wireBottom = controllableBits.some(controllableBit => {
          return this.bit(each) < controllableBit
        })
      }
    }

    for (const each of controllableOperations) {
      each.wireTop = controlBits.some(controlBit => {
        return this.bit(each) > controlBit
      })
      each.wireBottom = controlBits.some(controlBit => {
        return this.bit(each) < controlBit
      })
    }

    const dropzones = this.dropzones
    for (const each of dropzones) {
      const bits = controlBits.concat(controllableBits)
      const minBit = bits.sort()[0]
      const maxBit = bits.sort().slice(-1)[0]

      if (minBit < dropzones.indexOf(each) && dropzones.indexOf(each) < maxBit) {
        each.wireTop = true
        each.wireBottom = true
      }
    }
  }

  bit(operation: Operation): number {
    const dropzone = operation.parentElement
    if (!isCircuitDropzoneElement(dropzone)) throw new Error('Dropzone not found')

    return this.dropzones.indexOf(dropzone)
  }

  dropzoneAt(dropzoneIndex: number): CircuitDropzoneElement {
    const dropzone = this.dropzones[dropzoneIndex]
    if (dropzone === undefined) throw new Error(`circuit-dropzone[${dropzoneIndex}] not found.`)

    return dropzone
  }

  get dropzones(): CircuitDropzoneElement[] {
    return Array.from(this.querySelectorAll('circuit-dropzone')) as CircuitDropzoneElement[]
  }

  private get operations(): Operation[] {
    return this.dropzones
      .map(each => each.operation)
      .filter<Operation>((each): each is NonNullable<Operation> => each !== null)
  }

  private get controlGates(): ControlGateElement[] {
    return this.operations.filter<ControlGateElement>(
      (each: Operation): each is ControlGateElement => each instanceof ControlGateElement
    )
  }

  private get controllableOperations(): ControllableOperation[] {
    return this.operations.filter<ControllableOperation>((each: Operation): each is ControllableOperation =>
      isControllableOperation(each)
    )
  }
}
