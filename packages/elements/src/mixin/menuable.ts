import {Util, emitEvent} from '@qni/common'
import {html, render} from '@github/jtml'
import tippy, {Instance as TippyInstance, ReferenceElement as TippyReferenceElement} from 'tippy.js'
import {Constructor} from './constructor'
import {isAngleable} from './angleable'
import {isFlaggable} from './flaggable'
import {isIfable} from './ifable'

export declare class Menuable {
  initMenu(): void
  showMenu(): void
  hideMenu(): void
  menu: TippyInstance
}

export const isMenuable = (arg: unknown): arg is Menuable =>
  typeof arg === 'object' && arg !== null && typeof (arg as Menuable).initMenu === 'function'

export function MenuableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Menuable> & TBase {
  class MenuableMixinClass extends Base {
    public menu!: TippyInstance
    private ifTooltip!: TippyInstance | undefined
    private angleTooltip!: TippyInstance | undefined
    private flagTooltip!: TippyInstance | undefined
    private deleteTooltip!: TippyInstance | undefined

    initMenu(): void {
      if (this.menu) return

      if (this.menuContent === null) return

      this.addEventListener('click', this.dispatchShowMenuEvent)

      this.menu = tippy(this, {
        allowHTML: true,
        animation: false,
        arrow: false,
        content: this.menuContent,
        interactive: true,
        appendTo: document.body,
        offset: [0, 16],
        placement: 'top',
        theme: 'operation-menu',
        trigger: 'manual',
        onShow: this.initMenuItems.bind(this),
        onHide: () => {
          this.ifTooltip?.hide()
          this.angleTooltip?.hide()
          this.flagTooltip?.hide()
          this.deleteTooltip?.hide()
        },
      })
    }

    showMenu(): void {
      this.menu.show()
    }

    hideMenu(): void {
      this.menu.hide()
    }

    private destroyMenu(): void {
      this.menu.destroy()
    }

    private dispatchShowMenuEvent(): void {
      emitEvent('menuable:show-menu', {}, this)
    }

    private get menuContent(): DocumentFragment | null {
      const template = document.getElementById('operation-menu') as HTMLTemplateElement
      if (template === null) return null
      if (template.content === undefined) return null

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

        this.ifTooltip = (ifButton as TippyReferenceElement)._tippy
        if (this.ifTooltip === undefined) {
          this.ifTooltip = tippy(ifButton, {
            animation: false,
            content: "Set `if' Conditional",
          })
          ifButton.addEventListener('mousedown', this.showIfInspector.bind(this))
        }
      }

      if (isAngleable(instance.reference)) {
        const angleButton = instance.popper.querySelector('button[data-operation-menu-angle]') as HTMLButtonElement
        Util.notNull(angleButton)
        angleButton.disabled = false

        this.angleTooltip = (angleButton as TippyReferenceElement)._tippy
        if (this.angleTooltip === undefined) {
          this.angleTooltip = tippy(angleButton, {
            animation: false,
            content: 'Change Angle',
          })
          angleButton.addEventListener('mousedown', this.showAngleInspector.bind(this))
        }
      }

      if (isFlaggable(instance.reference)) {
        const flagButton = instance.popper.querySelector('button[data-operation-menu-flag]') as HTMLButtonElement
        Util.notNull(flagButton)
        flagButton.disabled = false

        this.flagTooltip = (flagButton as TippyReferenceElement)._tippy
        if (this.flagTooltip === undefined) {
          this.flagTooltip = tippy(flagButton, {
            animation: false,
            content: 'Set Condifitonal Flag',
          })
          flagButton.addEventListener('mousedown', this.showFlagInspector.bind(this))
        }
      }

      const deleteMenuItem = instance.popper.querySelector('[data-operation-menu-delete]')
      Util.notNull(deleteMenuItem)

      this.deleteTooltip = (deleteMenuItem as TippyReferenceElement)._tippy
      if (this.deleteTooltip === undefined) {
        this.deleteTooltip = tippy(deleteMenuItem, {
          animation: false,
          content: 'Delete',
        })
      }
      deleteMenuItem.addEventListener('mousedown', this.destroyMenu.bind(this))
      deleteMenuItem.addEventListener('mousedown', this.dispatchOperationDeleteEvent.bind(this))
    }

    private showIfInspector(): void {
      this.hideMenu()
      emitEvent('menuable:menu-if', {}, this)
    }

    private showAngleInspector(): void {
      this.hideMenu()
      emitEvent('menuable:menu-angle', {}, this)
    }

    private showFlagInspector(): void {
      this.hideMenu()
      emitEvent('menuable:menu-flag', {}, this)
    }

    private dispatchOperationDeleteEvent(): void {
      emitEvent('menuable:menu-delete', {}, this)
    }
  }

  return MenuableMixinClass as Constructor<Menuable> & TBase
}
