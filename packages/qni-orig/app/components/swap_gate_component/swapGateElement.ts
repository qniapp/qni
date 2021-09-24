import {
  ControllableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  JsonableMixin,
  SizeableMixin,
  TargetableMixin,
  WireableMixin,
} from "mixins"
import { SWAP_GATE_OPERATION_TYPE, SwapGateOperation } from "lib/operation"
import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller } from "@github/catalyst"

@controller
export class SwapGateElement extends DraggableMixin(
  TargetableMixin(
    ControllableMixin(
      WireableMixin(
        DisableableMixin(
          IconableMixin(
            HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement))),
          ),
        ),
      ),
    ),
  ),
) {
  @attr iconType = "transparent"

  static create({
    draggable = false,
  }: Partial<{ draggable: boolean }> = {}): SwapGateElement {
    const el = document.createElement("swap-gate") as SwapGateElement
    el.draggable = draggable
    return el
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({ mode: "open" })
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.draggableStyle}

        <style>
          :host([data-grabbed]) #body {
            background-color: var(--colors-snow, #ffffff);
          }
        </style>

        <div id="body" data-action="mouseenter:swap-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return `"${SWAP_GATE_OPERATION_TYPE}"`
  }

  serialize(): SwapGateOperation {
    const targets = this.targets as [number, number] | []
    if (targets.length !== 2 && targets.length !== 0) {
      throw new Error(`Invalid swap targets: ${this.targets.toString()}`)
    }

    return {
      type: SWAP_GATE_OPERATION_TYPE,
      controls: this.controls,
      targets,
    }
  }

  get iconSvg(): TemplateResult {
    return html`<svg
      id="icon"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>`
  }
}
