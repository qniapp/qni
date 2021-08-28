import { TemplateResult, html } from "@github/jtml"
import { Constructor } from "./constructor"
import { attr } from "@github/catalyst"

export declare class Wireable {
  get wireTop(): boolean
  set wireTop(value: boolean)
  get wireBottom(): boolean
  set wireBottom(value: boolean)
  get wiresStyle(): TemplateResult
  get wiresSvg(): TemplateResult
}

export function WireableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<Wireable> & TBase {
  class WireableMixinClass extends Base {
    @attr wireTop = false
    @attr wireTopDisabled = false
    @attr wireBottom = false
    @attr wireBottomDisabled = false

    get wiresStyle(): TemplateResult {
      return html`<style>
        #wires {
          position: absolute;
          bottom: 0px;
          left: 0px;
          right: 0px;
          top: 0px;
          height: 100%;
          width: 100%;
          overflow: visible;
        }

        #wire-top,
        #wire-bottom {
          display: none;
          stroke-width: 4;
        }

        :host([data-wire-top]) #wire-top {
          display: block;
          color: var(--colors-gate, #43c000);
          transform-origin: top;
          transform: translateY(-25%) scaleY(1.5);
        }

        :host([data-wire-top-disabled]) #wire-top {
          display: block;
          color: var(--colors-eel, #4b4b4b);
          transform-origin: top;
          transform: translateY(-25%) scaleY(1.5);
        }

        :host([data-wire-bottom]) #wire-bottom {
          display: block;
          color: var(--colors-gate, #43c000);
          transform-origin: bottom;
          transform: translateY(25%) scaleY(1.5);
        }

        :host([data-wire-bottom-disabled]) #wire-bottom {
          display: block;
          color: var(--colors-eel, #4b4b4b);
          transform-origin: bottom;
          transform: translateY(25%) scaleY(1.5);
        }
      </style>`
    }

    get wiresSvg(): TemplateResult {
      return html`<svg
        id="wires"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          id="wire-top"
          x1="50"
          y1="0"
          x2="50"
          y2="50"
          stroke="currentColor"
          vector-effect="non-scaling-stroke"
        ></line>
        <line
          id="wire-bottom"
          x1="50"
          y1="100"
          x2="50"
          y2="50"
          stroke="currentColor"
          vector-effect="non-scaling-stroke"
        ></line>
      </svg>`
    }
  }

  return WireableMixinClass as Constructor<Wireable> & TBase
}
