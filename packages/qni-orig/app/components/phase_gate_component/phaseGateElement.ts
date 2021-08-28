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
export class PhaseGateElement extends DraggableMixin(
  WireableMixin(
    IfableMixin(
      DisableableMixin(
        IconableMixin(SizeableMixin(JsonableMixin(HTMLElement))),
      ),
    ),
  ),
) {
  @attr iconType = "circle"
  @attr phi = ""

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
    return '"P"'
  }

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.draggableStyle} ${this.disabledStyle} ${this.ifStyle}

        <style>
          :host::before {
            position: absolute;
            bottom: 0px;
            color: var(--colors-wolf, #777777);
            background-color: transparent;
            font-size: 0.75rem;
            line-height: 0.75rem;
            letter-spacing: -0.05em;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            z-index: 10;
            content: attr(data-phi) "";
          }

          :host([data-size="xs"]) #body::before {
            margin-bottom: 1.125rem;
          }

          :host([data-size="sm"]) #body::before {
            margin-bottom: 1.625rem;
          }

          :host::before,
          :host([data-size="base"]) #body::before {
            margin-bottom: 2.125rem;
          }

          :host([data-size="lg"]) #body::before {
            margin-bottom: 2.625rem;
          }

          :host([data-size="xl"]) #body::before {
            margin-bottom: 3.125rem;
          }
        </style>

        <div
          id="body"
          data-phi="${this.phi}"
          data-action="mouseenter:phase-gate#showGateDescription"
        >
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
      <path d="M17 24A7 7 0 1 0 31 24A7 7 0 1 0 17 24M19 34L29 13" />
    </svg>`
  }
}
