import { html, render } from "@github/jtml"
import { CircuitableMixin } from "./mixins/circuitable"
import { controller } from "@github/catalyst"

@controller
export class CircuitEditorElement extends CircuitableMixin(HTMLElement) {
  connectedCallback(): void {
    this.initCircuitable()
    this.attachShadow({ mode: "open" })
    this.update()

    this.addEventListener("circuit.load", this.resizeCircuit)
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }
}
