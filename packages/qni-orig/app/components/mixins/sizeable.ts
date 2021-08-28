import { TemplateResult, html } from "@github/jtml"
import { Constructor } from "./constructor"
import { attr } from "@github/catalyst"

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
          align-items: center;
          justify-content: center;
        }

        :host([data-size="xs"]) {
          height: 1rem;
          width: 1rem;
        }

        :host([data-size="sm"]) {
          height: 1.5rem;
          width: 1.5rem;
        }

        :host,
        :host([data-size="base"]) {
          height: 2rem;
          width: 2rem;
        }

        :host([data-size="lg"]) {
          height: 2.5rem;
          width: 2.5rem;
        }

        :host([data-size="xl"]) {
          height: 3rem;
          width: 3rem;
        }
      </style>`
    }
  }

  return SizeableMixinClass as Constructor<Sizeable> & TBase
}
