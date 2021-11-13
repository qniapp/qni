import {html, render} from '@github/jtml'
import {CircuitDropzoneElement} from './circuit-dropzone-element'
import {ControlGateElement} from './control-gate-element'
import {HGateElement} from './h-gate-element'
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
    const controllableGates = this.controllableGates
    const controllableBits = controllableGates.map(each => this.bit(each))

    if (controlGates.length === 0) return

    for (const each of controlGates) {
      each.wireTop = controllableBits.some(controllableBit => {
        return this.bit(each) > controllableBit
      })
      each.wireBottom = controllableBits.some(controllableBit => {
        return this.bit(each) < controllableBit
      })
    }

    for (const each of controllableGates) {
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

  bit(operation: HGateElement | ControlGateElement): number {
    const dropzone = operation.parentElement
    if (dropzone === null || !(dropzone instanceof CircuitDropzoneElement)) {
      throw new Error('Dropzone not found')
    }

    return this.dropzones.indexOf(dropzone)
  }

  private get dropzones(): CircuitDropzoneElement[] {
    return Array.from(this.querySelectorAll('circuit-dropzone')) as CircuitDropzoneElement[]
  }

  private get controlGates(): ControlGateElement[] {
    return this.dropzones
      .map(each => each.operation)
      .filter<HGateElement | ControlGateElement>(
        (each): each is NonNullable<HGateElement | ControlGateElement | null> => each !== null
      )
      .filter<ControlGateElement>(
        (each: HGateElement | ControlGateElement): each is ControlGateElement => each instanceof ControlGateElement
      )
  }

  private get controllableGates(): HGateElement[] {
    return this.dropzones
      .map(each => each.operation)
      .filter<HGateElement | ControlGateElement>(
        (each): each is NonNullable<HGateElement | ControlGateElement | null> => each !== null
      )
      .filter<HGateElement>(
        (each: HGateElement | ControlGateElement): each is HGateElement => each instanceof HGateElement
      )
  }
}
