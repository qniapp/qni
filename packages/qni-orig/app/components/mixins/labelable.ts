import { TemplateResult, html } from "@github/jtml"
import { Constructor } from "./constructor"

export declare class Labelable {
  get labelStyle(): TemplateResult
}

export function LabelableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<Labelable> & TBase {
  class LabelableMixinClass extends Base {
    get labelStyle(): TemplateResult {
      return html`<style>
        :host::before {
          display: none;
          position: absolute;
          color: var(--colors-wolf, #777777);
          background-color: transparent;
          font-size: 0.75rem;
          line-height: 0.75rem;
          letter-spacing: -0.05em;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
          white-space: nowrap;
          z-index: 10;
          writing-mode: vertical-lr;
        }

        :host([data-snapped])::before {
          display: block;
        }

        /* Ifable */
        :host([data-if]:not([data-if=""]))::before {
          content: "if " attr(data-if);
        }

        @media (min-width: 768px) {
          :host([data-if]:not([data-if=""]))::before {
            writing-mode: horizontal-tb;
          }
        }

        /* Phase gate */
        :host([data-phi]:not([data-phi=""]))::before {
          content: attr(data-phi) "";
        }

        :host([data-phi][data-if]:not([data-phi=""]):not([data-if=""]))::before {
          content: attr(data-phi) " if " attr(data-if);
        }

        @media (min-width: 768px) {
          :host([data-phi]:not([data-phi=""]))::before {
            writing-mode: horizontal-tb;
          }
        }

        /* Rx, Ry, and Rz gate */
        :host([data-theta]:not([data-theta=""]))::before {
          content: attr(data-theta) "";
        }

        :host([data-theta][data-if]:not([data-theta=""]):not([data-if=""]))::before {
          content: attr(data-theta) " if " attr(data-if);
        }

        @media (min-width: 768px) {
          :host([data-theta]:not([data-theta=""]))::before {
            writing-mode: horizontal-tb;
          }
        }

        /* Measurement gate */
        :host([data-flag]:not([data-flag=""]))::before {
          content: attr(data-flag) "";
        }

        @media (min-width: 768px) {
          :host([data-flag]:not([data-flag=""]))::before {
            writing-mode: horizontal-tb;
          }
        }

        :host(:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host(:not([data-wire-top]))::before,
        :host(:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host(:not([data-wire-top-disabled]))::before {
          left: 0px;
        }

        @media (min-width: 768px) {
          :host(:not([data-wire-top]):not([data-wire-bottom]))::before,
          :host(:not([data-wire-top]))::before,
          :host(:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host(:not([data-wire-top-disabled]))::before {
            bottom: 0px;
            left: unset;
          }
        }

        :host([data-size="xs"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="xs"]:not([data-wire-top]))::before,
        :host([data-size="xs"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="xs"]:not([data-wire-top-disabled]))::before {
          margin-bottom: 1.125rem;
        }

        :host([data-size="sm"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="sm"]:not([data-wire-top]))::before,
        :host([data-size="sm"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="sm"]:not([data-wire-top-disabled]))::before {
          margin-bottom: 1.625rem;
        }

        :host(:not([data-wire-top]))::before,
        :host([data-size="base"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="base"]:not([data-wire-top]))::before,
        :host(:not([data-wire-top-disabled]))::before,
        :host([data-size="base"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="base"]:not([data-wire-top-disabled]))::before {
          margin-left: 2.125rem;
        }

        @media (min-width: 768px) {
          :host(:not([data-wire-top]))::before,
          :host([data-size="base"]:not([data-wire-top]):not([data-wire-bottom]))::before,
          :host([data-size="base"]:not([data-wire-top]))::before,
          :host(:not([data-wire-top-disabled]))::before,
          :host([data-size="base"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-size="base"]:not([data-wire-top-disabled]))::before {
            margin-bottom: 2.125rem;
            margin-left: 0;
          }
        }

        :host([data-size="lg"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="lg"]:not([data-wire-top]))::before,
        :host([data-size="lg"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="lg"]:not([data-wire-top-disabled]))::before {
          margin-bottom: 2.625rem;
        }

        :host([data-size="xl"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="xl"]:not([data-wire-top]))::before,
        :host([data-size="xl"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="xl"]:not([data-wire-top-disabled]))::before {
          margin-bottom: 3.125rem;
        }

        :host([data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          right: 0px;
          left: unset;
        }

        @media (min-width: 768px) {
          :host([data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
            top: 0px;
            right: unset;
          }
        }

        :host([data-size="xs"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="xs"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-top: 1.125rem;
        }

        :host([data-size="sm"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="sm"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-top: 1.625rem;
        }

        :host([data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="base"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
        :host([data-size="base"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-right: 2.125rem;
        }

        @media (min-width: 768px) {
          :host([data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-size="base"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-size="base"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
            margin-top: 2.125rem;
            margin-right: 0;
          }
        }

        :host([data-size="lg"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="lg"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-top: 2.625rem;
        }

        :host([data-size="xl"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="xl"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-top: 3.125rem;
        }

        :host([data-wire-top][data-wire-bottom])::before,
        :host([data-wire-top-disabled][data-wire-bottom-disabled])::before {
          text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, -1px 1px 0 #fff,
            1px -1px 0 #fff, 0px 1px 0 #fff, 0-1px 0 #fff, -1px 0 0 #fff,
            1px 0 0 #fff;
          left: 0px;
        }

        @media (min-width: 768px) {
          :host([data-wire-top][data-wire-bottom])::before,
          :host([data-wire-top-disabled][data-wire-bottom-disabled])::before {
            text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, -1px 1px 0 #fff,
              1px -1px 0 #fff, 0px 1px 0 #fff, 0-1px 0 #fff, -1px 0 0 #fff,
              1px 0 0 #fff;
            bottom: 0px;
            left: unset;
          }
        }

        :host([data-size="xs"][data-wire-top][data-wire-bottom])::before,
        :host([data-size="xs"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-bottom: 1.125rem;
        }

        :host([data-size="sm"][data-wire-top][data-wire-bottom])::before,
        :host([data-size="sm"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-bottom: 1.625rem;
        }

        :host([data-wire-top][data-wire-bottom])::before,
        :host([data-size="base"][data-wire-top][data-wire-bottom])::before,
        :host([data-wire-top-disabled][data-wire-bottom-disabled])::before,
        :host([data-size="base"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-left: 2.125rem;
        }

        @media (min-width: 768px) {
          :host([data-wire-top][data-wire-bottom])::before,
          :host([data-size="base"][data-wire-top][data-wire-bottom])::before,
          :host([data-wire-top-disabled][data-wire-bottom-disabled])::before,
          :host([data-size="base"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
            margin-bottom: 2.125rem;
            margin-left: 0;
          }
        }

        :host([data-size="lg"][data-wire-top][data-wire-bottom])::before,
        :host([data-size="lg"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-bottom: 2.625rem;
        }

        :host([data-size="xl"][data-wire-top][data-wire-bottom])::before,
        :host([data-size="xl"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-bottom: 3.125rem;
        }
      </style>`
    }
  }

  return LabelableMixinClass as Constructor<Labelable> & TBase
}
