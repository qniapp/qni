import {
  ControllableMixin,
  DisableableMixin,
  DragAndDroppableMixin,
  HelpableMixin,
  IconableMixin,
  JsonableMixin,
  SizeableMixin,
  TargetableMixin,
  WireableMixin,
} from "./mixins"
import { SWAP_GATE_OPERATION_TYPE, SwapGateOperation } from "../lib"
import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller } from "@github/catalyst"

@controller
export class SwapGateElement extends DragAndDroppableMixin(
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
    dragAndDrop = false,
  }: Partial<{ dragAndDrop: boolean }> = {}): SwapGateElement {
    const el = new SwapGateElement()
    el.dragAndDrop = dragAndDrop
    return el
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({ mode: "open" })
    this.update()
    this.initDragAndDrop()
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle}

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
