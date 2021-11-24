import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
// eslint-disable-next-line import/named
import tippy, {Instance as TippyInstance, ReferenceElement as TippyReferenceElement} from 'tippy.js'
import {ActivateableMixin} from './mixin/activateable'
import {DisableableMixin} from './mixin/disableable'
import {DraggableMixin} from './mixin/draggable'
import {IconableMixin} from './mixin/iconable'
import {iconPhaseGate} from './icon'

@controller
export class PhaseGateElement extends DraggableMixin(DisableableMixin(IconableMixin(ActivateableMixin(HTMLElement)))) {
  @attr phi = ''
  @attr if = ''

  private menu: TippyInstance

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.addEventListener('click', this.dispatchShowmenuEvent)
  }

  update(): void {
    render(html`<div part="body">${this.iconHtml(iconPhaseGate)}</div>`, this.shadowRoot!)
  }

  initMenu(): void {
    const popupInstance = (this as TippyReferenceElement)._tippy
    if (popupInstance) return

    this.menu = tippy(this, {
      allowHTML: true,
      animation: false,
      arrow: false,
      content: this.menuContent(),
      interactive: true,
      offset: [0, 16],
      placement: 'top',
      theme: 'operation-menu',
      trigger: 'manual',
      onShow: this.initMenuItems.bind(this)
    })
  }

  destroyMenu(): void {
    const popupInstance = (this as TippyReferenceElement)._tippy
    if (popupInstance === null) throw new Error('popup instance not found.')

    popupInstance.destroy()
  }

  showMenu(): void {
    this.menu.show()
  }

  hideMenu(): void {
    this.menu.hide()
  }

  private menuContent(): DocumentFragment | null {
    const template = document.getElementById('operation-menu') as HTMLTemplateElement
    if (template === null) throw new Error('template #operation-menu not found.')

    const node = template.content.cloneNode(true)
    const content = document.createDocumentFragment()

    render(html`${node}`, content)

    return content
  }

  private initMenuItems(instance: TippyInstance) {
    const angleMenuItem = instance.popper.querySelector('[data-operation-menu-angle]')
    const anglePopupuInstance = (angleMenuItem as TippyReferenceElement)._tippy
    if (anglePopupuInstance === undefined) {
      tippy(angleMenuItem, {
        animation: false,
        content: 'Change Angle'
      })
      angleMenuItem.addEventListener('mousedown', this.showAngleInspector.bind(this))
    }

    const ifMenuItem = instance.popper.querySelector('[data-operation-menu-if]')
    const ifPopupuInstance = (ifMenuItem as TippyReferenceElement)._tippy
    if (ifPopupuInstance === undefined) {
      tippy(ifMenuItem, {
        animation: false,
        content: "Set `if' Condition"
      })
      ifMenuItem.addEventListener('mousedown', this.showIfInspector.bind(this))
    }

    const deleteMenuItem = instance.popper.querySelector('[data-operation-menu-delete]')
    const deletePopupuInstance = (deleteMenuItem as TippyReferenceElement)._tippy
    if (deletePopupuInstance === undefined) {
      tippy(deleteMenuItem, {
        animation: false,
        content: 'Delete'
      })
    }
    deleteMenuItem.addEventListener('mousedown', this.destroyMenu.bind(this))
    deleteMenuItem.addEventListener('mousedown', this.dispatchDeleteEvent.bind(this))
  }

  private dispatchDeleteEvent() {
    this.dispatchEvent(new Event('operation-delete', {bubbles: true}))
  }

  private dispatchShowmenuEvent(): void {
    this.dispatchEvent(new Event('operation-showmenu', {bubbles: true}))
  }

  private showAngleInspector(): void {
    this.hideMenu()
    this.dispatchEvent(new Event('operation-menu-angle', {bubbles: true}))
  }

  private showIfInspector(): void {
    this.hideMenu()
    this.dispatchEvent(new Event('operation-menu-if', {bubbles: true}))
  }
}
