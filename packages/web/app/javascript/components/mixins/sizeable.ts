import { TemplateResult, html } from "@github/jtml"
import { Constructor } from "./constructor"
import { attr } from "@github/catalyst"

export class Operation {
  static size = {
    xs: 1,
    sm: 1.5,
    base: 2,
    lg: 2.5,
    xl: 3,
  }
}

export declare class Sizeable {
  get sizeableStyle(): TemplateResult
}

export function SizeableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<Sizeable> & TBase {
  class SizeableMixinClass extends Base {
    @attr size = ""

    get sizeableStyle(): TemplateResult {
      return html`<style>
        :host {
          position: relative;
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
        }
        :host([data-size="xs"]) {
          height: ${Operation.size.xs}rem;
          width: ${Operation.size.xs}rem;
        }
        :host([data-size="sm"]) {
          height: ${Operation.size.sm}rem;
          width: ${Operation.size.sm}rem;
        }
        :host,
        :host([data-size="base"]) {
          height: ${Operation.size.base}rem;
          width: ${Operation.size.base}rem;
        }
        :host([data-size="lg"]) {
          height: ${Operation.size.lg}rem;
          width: ${Operation.size.lg}rem;
        }
        :host([data-size="xl"]) {
          height: ${Operation.size.xl}rem;
          width: ${Operation.size.xl}rem;
        }
        :host([data-wire-count="1"]),
        :host([data-wire-count="2"]) {
          height: ${Operation.size.xl}rem;
          width: ${Operation.size.xl}rem;
        }
        :host([data-wire-count="3"]) {
          height: ${Operation.size.lg}rem;
          width: ${Operation.size.lg}rem;
        }
        :host([data-wire-count="4"]) {
          height: ${Operation.size.base}rem;
          width: ${Operation.size.base}rem;
        }
        :host([data-wire-count="5"]),
        :host([data-wire-count="6"]) {
          height: ${Operation.size.sm}rem;
          width: ${Operation.size.sm}rem;
        }
        :host([data-wire-count="7"]),
        :host([data-wire-count="8"]),
        :host([data-wire-count="9"]),
        :host([data-wire-count="10"]) {
          height: ${Operation.size.xs}rem;
          width: ${Operation.size.xs}rem;
        }
        @media (min-width: 768px) {
          :host,
          :host([data-wire-count="1"]),
          :host([data-wire-count="2"]),
          :host([data-wire-count="3"]),
          :host([data-wire-count="4"]),
          :host([data-wire-count="5"]),
          :host([data-wire-count="6"]),
          :host([data-wire-count="7"]),
          :host([data-wire-count="8"]),
          :host([data-wire-count="9"]),
          :host([data-wire-count="10"]) {
            height: ${Operation.size.base}rem;
            width: ${Operation.size.base}rem;
          }
        }
      </style>`
    }
  }

  return SizeableMixinClass as Constructor<Sizeable> & TBase
}
