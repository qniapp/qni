import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller} from '@github/catalyst'
import {Operation} from './operation'
import {WireableMixin} from './mixin/wireable'
import {iconWires} from './icon'

export const isCircuitDropzoneElement = (arg: unknown): arg is CircuitDropzoneElement =>
  arg !== null && arg instanceof CircuitDropzoneElement

@controller
export class CircuitDropzoneElement extends WireableMixin(HTMLElement) {
  @attr occupied = false

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()

    this.updateVerticalWires()
    this.setAttributeIfOccupied()

    this.addEventListener('operation.wireTop', () => {
      this.wireTop = true
    })
    this.addEventListener('operation.wireBottom', () => {
      this.wireBottom = true
    })
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

          #wires {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            height: 100%;
            width: 100%;
          }

          #wire-top,
          #wire-bottom {
            display: none;
          }

          :host([data-wire-top]) #wire-top {
            display: block;
          }

          :host([data-wire-bottom]) #wire-bottom {
            display: block;
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

  get operation(): Operation | null {
    if (this.childElementCount === 0) {
      return null
    } else if (this.childElementCount === 1) {
      return this.children[0] as Operation
    } else {
      throw new Error('Circuit dropzone cannot hold multiple operations.')
    }
  }

  private updateVerticalWires(): void {
    const operation = this.operation
    if (operation === null) return

    if (operation.wireTop) {
      this.wireTop = true
    }
    if (operation.wireBottom) {
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
