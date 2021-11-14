import {TemplateResult, html} from '@github/jtml'
import {Constructor} from './constructor'
import {attr} from '@github/catalyst'
import {icon} from '../icon'

export declare class Iconable {
  get icon(): string
  set icon(value: string)
  get iconStyle(): TemplateResult
  iconHtml(defaultIcon: icon): TemplateResult
  iconSvg(defaultIcon: icon): Node | TemplateResult | null
}

export function IconableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Iconable> & TBase {
  class IconableMixinClass extends Base {
    @attr icon = ''

    iconSvg(defaultIcon: icon): Node | TemplateResult | null {
      if (this.icon === '') return html([defaultIcon.data] as unknown as TemplateStringsArray)

      const template = document.getElementById(this.icon) as HTMLTemplateElement
      if (template === null) return null

      return template.content.cloneNode(true)
    }

    iconHtml(defaultIcon: icon): TemplateResult {
      return html`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(defaultIcon)}</div>`
    }

    get iconStyle(): TemplateResult {
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
