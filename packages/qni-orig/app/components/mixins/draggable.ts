import { TemplateResult, html } from "@github/jtml"
import { Constructor } from "./constructor"
import { attr } from "@github/catalyst"

export declare class Draggable {
  get draggableStyle(): TemplateResult
}

export function DraggableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<Draggable> & TBase {
  class DraggableMixinClass extends Base {
    @attr draggable = false

    get draggableStyle(): TemplateResult {
      return html`<style>
        :host([data-draggable]) {
          cursor: grab;
        }

        :host([data-draggable]) #body::after {
          position: absolute;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          height: 100%;
          width: 100%;
          border-color: var(--colors-cardinal, #ff4b4b);
          border-radius: 0.25rem;
          border-style: solid;
          border-width: 2px;
          box-sizing: border-box;
          opacity: 0;
          content: "";
        }

        :host([data-draggable]) #body:hover::after {
          opacity: 100;
        }
      </style>`
    }
  }

  return DraggableMixinClass as Constructor<Draggable> & TBase
}
