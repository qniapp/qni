import {TemplateResult, html} from '@github/jtml'
import {Constructor} from './constructor'

export declare class Iconable {
  iconHtml(svg: string): TemplateResult
}

export function IconableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Iconable> & TBase {
  class IconableMixinClass extends Base {
    iconHtml(svg: string): TemplateResult {
      return html`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(svg)}</div>`
    }

    private iconSvg(icon: string): TemplateResult {
      return html(([icon] as unknown) as TemplateStringsArray)
    }

    private get iconStyle(): TemplateResult {
      return html`<style>
        #icon {
          position: relative;
          width: 100%;
          height: 100%;
        }

        #icon > svg {
          position: absolute;
          bottom: 0px;
          left: 0px;
          right: 0px;
          top: 0px;
          height: 100%;
          width: 100%;
        }
      </style>`
    }
  }

  return IconableMixinClass as Constructor<Iconable> & TBase
}
