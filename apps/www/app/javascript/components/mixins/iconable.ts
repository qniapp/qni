import { TemplateResult, html } from "@github/jtml"
import { Constructor } from "./constructor"
import { attr } from "@github/catalyst"

export declare class Iconable {
  get iconSvg(): TemplateResult
  get iconStyle(): TemplateResult
}

export function IconableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<Iconable> & TBase {
  class IconableMixinClass extends Base {
    @attr iconType = ""

    get iconSvg(): TemplateResult {
      throw new Error("Not implemented yet")
    }

    get iconStyle(): TemplateResult {
      const baseIconStyle = html`<style>
        #icon {
          position: absolute;
          bottom: 0px;
          left: 0px;
          right: 0px;
          top: 0px;
          height: 100%;
          width: 100%;
          stroke: currentColor;
        }
      </style>`

      let borderRadius
      if (this.iconType === "square") {
        borderRadius = "0.25rem"
      } else if (this.iconType === "circle") {
        borderRadius = "9999px"
      } else if (this.iconType === "transparent") {
        return html`${baseIconStyle}

          <style>
            #icon {
              color: var(--colors-gate, #43c000);
            }

            :host([data-disabled]) #icon {
              color: var(--colors-eel, #4b4b4b);
            }
          </style>`
      } else {
        throw new Error("iconType not set")
      }

      return html`${baseIconStyle}

        <style>
          #icon {
            border-radius: ${borderRadius};
            color: var(--colors-snow, #ffffff);
            background-color: var(--colors-gate, #43c000);
          }

          :host([data-disabled]) #icon {
            background-color: var(--colors-eel, #4b4b4b);
          }
        </style>`
    }
  }

  return IconableMixinClass as Constructor<Iconable> & TBase
}
