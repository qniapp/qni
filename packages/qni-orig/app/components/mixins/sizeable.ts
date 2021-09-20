import { TemplateResult, html } from "@github/jtml"
import { Constructor } from "./constructor"
import { attr } from "@github/catalyst"

export class Operation {
  static size = {
    xs: { height: "1rem", width: "1rem" },
    sm: { height: "1.5rem", width: "1.5rem" },
    base: { height: "2rem", width: "2rem" },
    lg: { height: "2.5rem", width: "2.5rem" },
    xl: { height: "3rem", width: "3rem" },
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
          height: ${Operation.size.xs.height};
          width: ${Operation.size.xs.width};
        }

        :host([data-size="sm"]) {
          height: ${Operation.size.sm.height};
          width: ${Operation.size.sm.width};
        }

        :host,
        :host([data-size="base"]) {
          height: ${Operation.size.base.height};
          width: ${Operation.size.base.width};
        }

        :host([data-size="lg"]) {
          height: ${Operation.size.lg.height};
          width: ${Operation.size.lg.width};
        }

        :host([data-size="xl"]) {
          height: ${Operation.size.xl.height};
          width: ${Operation.size.xl.width};
        }
      </style>`
    }
  }

  return SizeableMixinClass as Constructor<Sizeable> & TBase
}
