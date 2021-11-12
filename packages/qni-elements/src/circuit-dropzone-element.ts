import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller} from '@github/catalyst'
import {iconWires} from './icon'

@controller
export class CircuitDropzoneElement extends HTMLElement {
  @attr occupied = false

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
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
        </style>

        <div id="body"><slot></slot>${this.wireSvg}</div>`,
      this.shadowRoot!
    )
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
