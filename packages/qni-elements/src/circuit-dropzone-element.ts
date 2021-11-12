import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller} from '@github/catalyst'
import {ControlGateElement} from './control-gate-element'
import {HGateElement} from './h-gate-element'
import {iconWires} from './icon'

@controller
export class CircuitDropzoneElement extends HTMLElement {
  @attr occupied = false
  @attr wireTop = false
  @attr wireBottom = false

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()

    this.updateVerticalWires()
    this.setAttributeIfOccupied()
  }

  update(): void {
    render(
      html`<style>
          #body {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
          }

          ::slotted(*) {
            position: absolute;
            z-index: 10;
          }
        </style>

        <div id="body"><slot></slot>${this.wireSvg}</div>`,
      this.shadowRoot!
    )
  }

  private get operation(): HGateElement | ControlGateElement | null {
    if (this.childElementCount === 0) {
      return null
    } else if (this.childElementCount === 1) {
      return this.children[0] as HGateElement | ControlGateElement
    } else {
      throw new Error('Circuit dropzone cannot hold multiple operations.')
    }
  }

  private updateVerticalWires(): void {
    const operation = this.operation
    if (operation === null) return

    if (operation.connectedToLowerBit) {
      this.wireTop = true
    }
    if (operation.connectedToUpperBit) {
      this.wireBottom = true
    }
  }

  private setAttributeIfOccupied(): void {
    if (this.childElementCount === 0) {
      this.occupied = false
    } else if (this.childElementCount === 1) {
      this.occupied = true
    } else {
      throw new Error('Circuit dropzone cannot hold multiple operations.')
    }
  }

  private get wireSvg(): TemplateResult {
    return html([iconWires.data] as unknown as TemplateStringsArray)
  }
}
