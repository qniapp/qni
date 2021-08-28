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
import { IfableMixin } from "mixins/ifable"

@controller
export class ZGateElement extends DraggableMixin(
  WireableMixin(
    IfableMixin(
      DisableableMixin(
        IconableMixin(SizeableMixin(JsonableMixin(HTMLElement))),
      ),
    ),
  ),
) {
  @attr iconType = "square"

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
    return '"Z"'
  }

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.ifStyle} ${this.draggableStyle} ${this.disabledStyle}

        <div id="body" data-action="mouseenter:z-gate#showGateDescription">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,
      this.shadowRoot!,
    )
  }

  get iconSvg(): TemplateResult {
    return html`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 13L31 13L17 35L31 35" />
    </svg>`
  }
}
