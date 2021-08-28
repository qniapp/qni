import {
  DisableableMixin,
  DraggableMixin,
  IconableMixin,
  JsonableMixin,
  SizeableMixin,
  WireableMixin,
} from "mixins"
import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller } from "@github/catalyst"
import tippy, { Instance, ReferenceElement, roundArrow } from "tippy.js"

@controller
export class SwapGateElement extends DraggableMixin(
  WireableMixin(
    DisableableMixin(IconableMixin(SizeableMixin(JsonableMixin(HTMLElement)))),
  ),
) {
  @attr iconType = "transparent"

  showGateDescription(): void {
    if ((this as ReferenceElement)._tippy) return

    const content = this.innerHTML.trim()
    if (content === "") return

    const popup = tippy(this, {
      allowHTML: true,
      animation: false,
      arrow: roundArrow + roundArrow,
      delay: 0,
      placement: "right",
      theme: "qni",
      onShow(instance: Instance) {
        instance.setContent(content)
      },
    })
    popup.show()
  }

  toJson(): string {
    return '"Swap"'
  }

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.draggableStyle}

        <div id="body" data-action="mouseenter:swap-gate#showGateDescription">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,
      this.shadowRoot!,
    )
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
