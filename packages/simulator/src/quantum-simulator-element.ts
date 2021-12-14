import {controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {QuantumCircuitElement} from '@qni/elements'

@controller
export class QuantumSimulatorElement extends HTMLElement {
  @target circuit!: QuantumCircuitElement

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()

    this.addEventListener('circuit-step-snap', this.showActiveStepIndex)
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  private showActiveStepIndex(): void {
    // eslint-disable-next-line no-console
    console.log(this.circuit.activeStepIndex)
  }
}
