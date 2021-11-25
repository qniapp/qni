import {html, render} from '@github/jtml'
// eslint-disable-next-line import/named
import tippy, {Instance as TippyInstance, ReferenceElement as TippyReferenceElement} from 'tippy.js'
import {Constructor} from './constructor'

export declare class Menuable {
  initMenu(): void
  showMenu(): void
  hideMenu(): void
  destroyMenu(): void
  dispatchShowmenuEvent(): void
  get menuContent(): DocumentFragment
  initMenuItems(instance: TippyInstance): void
  showAngleInspector(): void
  showIfInspector(): void
  dispatchOperationDeleteEvent(): void
}

export function MenuableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Menuable> & TBase {
  class MenuableMixinClass extends Base {
    public menu!: TippyInstance

    initMenu(): void {
      const popupInstance = (this as TippyReferenceElement)._tippy
      if (popupInstance) return

      this.addEventListener('click', this.dispatchShowmenuEvent)

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

    destroyMenu(): void {
      const popupInstance = (this as TippyReferenceElement)._tippy
      if (popupInstance === null || popupInstance === undefined) throw new Error('popup instance not found.')

      popupInstance.destroy()
    }

    dispatchShowmenuEvent(): void {
      this.dispatchEvent(new Event('operation-showmenu', {bubbles: true}))
    }

    get menuContent(): DocumentFragment {
      const template = document.getElementById('operation-menu') as HTMLTemplateElement
      if (template === null) throw new Error('template #operation-menu not found.')

      const node = template.content.cloneNode(true)
      const content = document.createDocumentFragment()

      render(html`${node}`, content)

      return content
    }

    initMenuItems(instance: TippyInstance): void {
      const angleMenuItem = instance.popper.querySelector('[data-operation-menu-angle]')
      if (angleMenuItem === null) throw new Error('[data-operation-menu-angle] not found.')

      const anglePopupuInstance = (angleMenuItem as TippyReferenceElement)._tippy
      if (anglePopupuInstance === undefined) {
        tippy(angleMenuItem, {
          animation: false,
          content: 'Change Angle'
        })
        angleMenuItem.addEventListener('mousedown', this.showAngleInspector.bind(this))
      }

      const ifMenuItem = instance.popper.querySelector('[data-operation-menu-if]')
      if (ifMenuItem === null) throw new Error('[data-operation-menu-if] not found.')

      const ifPopupuInstance = (ifMenuItem as TippyReferenceElement)._tippy
      if (ifPopupuInstance === undefined) {
        tippy(ifMenuItem, {
          animation: false,
          content: "Set `if' Condition"
        })
        ifMenuItem.addEventListener('mousedown', this.showIfInspector.bind(this))
      }

      const deleteMenuItem = instance.popper.querySelector('[data-operation-menu-delete]')
      if (deleteMenuItem === null) throw new Error('[data-operation-menu-delete] not found.')

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

    showAngleInspector(): void {
      this.hideMenu()
      this.dispatchEvent(new Event('operation-menu-angle', {bubbles: true}))
    }

    showIfInspector(): void {
      this.hideMenu()
      this.dispatchEvent(new Event('operation-menu-if', {bubbles: true}))
    }

    dispatchOperationDeleteEvent(): void {
      this.dispatchEvent(new Event('operation-delete', {bubbles: true}))
    }
  }

  return MenuableMixinClass as Constructor<Menuable> & TBase
}
