import {html, render} from '@github/jtml'
import tippy, {Instance as TippyInstance, ReferenceElement as TippyReferenceElement} from 'tippy.js'
import {Constructor} from './constructor'
import {Util} from '@qni/common'
import {isAngleable} from './angleable'
import {isFlaggable} from './flaggable'
import {isIfable} from './ifable'

export declare class Menuable {
  initMenu(): void
  showMenu(): void
  hideMenu(): void
}

export const isMenuable = (arg: unknown): arg is Menuable =>
  typeof arg === 'object' && arg !== null && typeof (arg as Menuable).initMenu === 'function'

export function MenuableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Menuable> & TBase {
  class MenuableMixinClass extends Base {
    public menu!: TippyInstance

    initMenu(): void {
      const popupInstance = (this as TippyReferenceElement)._tippy
      if (popupInstance) return

      this.addEventListener('click', this.dispatchShowMenuEvent)

      this.menu = tippy(this, {
        allowHTML: true,
        animation: false,
        arrow: false,
        content: this.menuContent,
        interactive: true,
        offset: [0, 16],
        placement: 'top',
        theme: 'operation-menu',
        trigger: 'manual',
        onShow: this.initMenuItems.bind(this)
      })
    }

    showMenu(): void {
      this.menu.show()
    }

    hideMenu(): void {
      this.menu.hide()
    }

    private destroyMenu(): void {
      const popupInstance = (this as TippyReferenceElement)._tippy
      popupInstance?.destroy()
    }

    private dispatchShowMenuEvent(): void {
      this.dispatchEvent(new Event('operation-show-menu', {bubbles: true}))
    }

    private get menuContent(): DocumentFragment {
      const template = document.getElementById('operation-menu') as HTMLTemplateElement
      Util.notNull(template)

      const node = template.content.cloneNode(true)
      const content = document.createDocumentFragment()

      render(html`${node}`, content)

      return content
    }

    private initMenuItems(instance: TippyInstance): void {
      if (isIfable(instance.reference)) {
        const ifButton = instance.popper.querySelector('button[data-operation-menu-if]') as HTMLButtonElement
        Util.notNull(ifButton)
        ifButton.disabled = false

        const ifTooltip = (ifButton as TippyReferenceElement)._tippy
        if (ifTooltip === undefined) {
          tippy(ifButton, {
            animation: false,
            content: "Set `if' Conditional"
          })
          ifButton.addEventListener('mousedown', this.showIfInspector.bind(this))
        }
      }

      if (isAngleable(instance.reference)) {
        const angleButton = instance.popper.querySelector('button[data-operation-menu-angle]') as HTMLButtonElement
        Util.notNull(angleButton)
        angleButton.disabled = false

        const angleTooltip = (angleButton as TippyReferenceElement)._tippy
        if (angleTooltip === undefined) {
          tippy(angleButton, {
            animation: false,
            content: 'Change Angle'
          })
          angleButton.addEventListener('mousedown', this.showAngleInspector.bind(this))
        }
      }

      if (isFlaggable(instance.reference)) {
        const flagButton = instance.popper.querySelector('button[data-operation-menu-flag]') as HTMLButtonElement
        Util.notNull(flagButton)
        flagButton.disabled = false

        const flagTooltip = (flagButton as TippyReferenceElement)._tippy
        if (flagTooltip === undefined) {
          tippy(flagButton, {
            animation: false,
            content: 'Set Condifitonal Flag'
          })
          flagButton.addEventListener('mousedown', this.showFlagInspector.bind(this))
        }
      }

      const deleteMenuItem = instance.popper.querySelector('[data-operation-menu-delete]')
      Util.notNull(deleteMenuItem)

      const deletePopupuInstance = (deleteMenuItem as TippyReferenceElement)._tippy
      if (deletePopupuInstance === undefined) {
        tippy(deleteMenuItem, {
          animation: false,
          content: 'Delete'
        })
      }
      deleteMenuItem.addEventListener('mousedown', this.destroyMenu.bind(this))
      deleteMenuItem.addEventListener('mousedown', this.dispatchOperationDeleteEvent.bind(this))
    }

    private showIfInspector(): void {
      this.hideMenu()
      this.dispatchEvent(new Event('operation-menu-if', {bubbles: true}))
    }

    private showAngleInspector(): void {
      this.hideMenu()
      this.dispatchEvent(new Event('operation-menu-angle', {bubbles: true}))
    }

    private showFlagInspector(): void {
      this.hideMenu()
      this.dispatchEvent(new Event('operation-menu-flag', {bubbles: true}))
    }

    private dispatchOperationDeleteEvent(): void {
      this.dispatchEvent(new Event('operation-delete', {bubbles: true}))
    }
  }

  return MenuableMixinClass as Constructor<Menuable> & TBase
}
