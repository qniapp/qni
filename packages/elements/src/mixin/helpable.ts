import tippy, {Instance, ReferenceElement, roundArrow} from 'tippy.js'
import {Constructor} from './constructor'
import {Util} from '@qni/common'
import {attr} from '@github/catalyst'

export declare class Helpable {
  initHelp(): void
  showHelp(): void
  disableHelp(): void
  get helpContent(): DocumentFragment | null
}

export const isHelpable = (arg: unknown): arg is Helpable =>
  typeof arg === 'object' && arg !== null && typeof (arg as Helpable).initHelp === 'function'

export function HelpableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Helpable> & TBase {
  class HelpableMixinClass extends Base {
    @attr help = true
    @attr helpId = ''

    initHelp(): void {
      this.addEventListener('mouseenter', this.showHelp)
    }

    showHelp(): void {
      if (!this.help) return

      const popupInstance = (this as ReferenceElement)._tippy
      if (popupInstance) return

      const helpContent = this.helpContent
      if (helpContent === null) return

      const popup = tippy(this, {
        allowHTML: true,
        animation: false,
        arrow: roundArrow + roundArrow,
        delay: 0,
        placement: 'right',
        theme: 'qni',
        // trigger: 'manual', // debug
        onShow(instance: Instance) {
          instance.setContent(helpContent)
        }
      })
      popup.show()
    }

    disableHelp(): void {
      this.help = false

      const popupInstance = (this as ReferenceElement)._tippy
      Util.notNull(popupInstance)
      popupInstance.destroy()
    }

    get helpContent(): DocumentFragment | null {
      let id: string

      if (this.helpId !== '') {
        id = this.helpId
      } else {
        id = `${this.tagName.toLowerCase()}-help`
      }
      const template = document.getElementById(id) as HTMLTemplateElement
      if (template === null) return null

      return template.content.cloneNode(true) as DocumentFragment
    }
  }

  return HelpableMixinClass as Constructor<Helpable> & TBase
}
