import {controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {CircleNotationElement} from './circle-notation-element'

@controller
export class CircleNotationPanelElement extends HTMLElement {
  @target circleNotation!: CircleNotationElement

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.renderShadowRoot()
  }

  startBasicCircleNotationMode(): void {
    this.circleNotation.startBasicCircleNotationMode()
  }

  startColorPhaseMode(): void {
    this.circleNotation.startColorPhaseMode()
  }

  private renderShadowRoot(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }
}
