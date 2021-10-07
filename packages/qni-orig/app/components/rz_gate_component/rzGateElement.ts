import {
  ConfigurableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  IfableMixin,
  JsonableMixin,
  LabelableMixin,
  SizeableMixin,
  WireableMixin,
} from "mixins"
import { RZ_GATE_OPERATION_TYPE, RzGateOperation } from "lib/operation"
import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller } from "@github/catalyst"
import { ControllableMixin } from "mixins/controllable"
import { TargetableMixin } from "mixins/targetable"

@controller
export class RzGateElement extends ConfigurableMixin(
  DraggableMixin(
    TargetableMixin(
      ControllableMixin(
        WireableMixin(
          LabelableMixin(
            IfableMixin(
              DisableableMixin(
                IconableMixin(
                  HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement))),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  ),
) {
  @attr iconType = "square"
  @attr theta = ""

  static create({
    theta = "π/2",
    draggable = false,
  }: Partial<{ theta: string; draggable: boolean }> = {}): RzGateElement {
    const el = document.createElement("rz-gate") as RzGateElement
    el.theta = theta
    el.draggable = draggable
    return el
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({ mode: "open" })
    this.update()
    this.initDraggable()
    this.addEventListener("mouseenter", this.showHelp)
    this.addEventListener("mousedown", this.showRightClickPopup)
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.draggableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    if (this.theta === "") {
      return `"${RZ_GATE_OPERATION_TYPE}"`
    } else {
      return `"${RZ_GATE_OPERATION_TYPE}(${this.theta.replace("/", "_")})"`
    }
  }

  serialize(): RzGateOperation {
    return {
      type: RZ_GATE_OPERATION_TYPE,
      theta: this.theta.replace("π", "pi"),
      controls: this.controls,
      targets: this.targets,
      if: this.if,
    }
  }

  get iconSvg(): TemplateResult {
    return html`<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002L24.746 35m.073-21.998h9.79M24.747 35h10.074"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`
  }
}
