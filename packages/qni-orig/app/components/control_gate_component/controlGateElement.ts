import {
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  JsonableMixin,
  SizeableMixin,
  WireableMixin,
} from "mixins"
import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller } from "@github/catalyst"
import tippy, { Instance, ReferenceElement, roundArrow } from "tippy.js"

const css = html`<style>
  :host([data-draggable-source]) #body::after {
    opacity: 100;
    border-color: var(--colors-fox, #ff9600);
  }

  :host([data-draggable-shadow]) #body::after {
    opacity: 100;
    border-color: var(--colors-superposition, #ce82ff);
  }

  #body {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    height: 100%;
    width: 100%;
  }

  :host([data-grabbed]) #body {
    background-color: var(--colors-snow, #ffffff);
  }

  #body:hover::after {
    opacity: 100;
  }

  :host([data-grabbed]) #wires,
  :host([data-draggable-shadow]) #wires {
    display: none;
  }
</style>`

@controller
export class ControlGateElement extends DraggableMixin(
  WireableMixin(
    DisableableMixin(
      IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))),
    ),
  ),
) {
  @attr iconType = "transparent"
  @attr draggableSource = false
  @attr draggableShadow = false
  @attr grabbed = false

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.draggableStyle} ${css}

        <div id="body" data-action="mouseenter:control-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return '"•"'
  }

  get iconSvg(): TemplateResult {
    return html`
      <svg
        id="icon"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
      >
        <circle cx="24" cy="24" r="8" fill="currentColor" />
      </svg>
    `
  }
}
