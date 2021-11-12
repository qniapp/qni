import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller} from '@github/catalyst'
import {DisableableMixin} from './mixin/disableable'
import {WireableMixin} from './mixin/wireable'
import {iconHGate} from './icon'

@controller
export class HGateElement extends WireableMixin(DisableableMixin(HTMLElement)) {
  @attr icon = ''

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`${this.iconHtml}`, this.shadowRoot!)
  }

  toJson(): string {
    return '"H"'
  }

  private get iconHtml(): TemplateResult {
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
      </style>

      <div id="icon">${this.iconSvg}</div>`
  }

  private get iconSvg(): Node | TemplateResult | null {
    if (this.icon === '') return html([iconHGate.data] as unknown as TemplateStringsArray)

    const template = document.getElementById(this.icon) as HTMLTemplateElement
    if (template === null) return null

    return template.content.cloneNode(true)
  }
}
