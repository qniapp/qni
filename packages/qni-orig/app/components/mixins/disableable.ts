import { TemplateResult, html } from "@github/jtml"
import { Constructor } from "./constructor"
import { attr } from "@github/catalyst"

export declare class Disableable {
  disable(): void
  enable(): void
  get enabled(): boolean
  get disabled(): boolean
  get disabledStyle(): TemplateResult
}

export function DisableableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<Disableable> & TBase {
  class DisableableMixinClass extends Base {
    @attr disabled = false
    @attr iconType = ""

    disable(): void {
      this.disabled = true
    }

    enable(): void {
      this.disabled = false
    }

    get enabled(): boolean {
      return !this.disabled
    }

    get disabledStyle(): TemplateResult {
      return html`<style>
        :host([data-disabled]) #icon {
          background-color: var(--colors-eel, #4b4b4b);
        }
      </style>`
    }
  }

  return DisableableMixinClass as Constructor<Disableable> & TBase
}
