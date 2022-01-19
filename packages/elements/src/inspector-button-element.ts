import {Angleable, Ifable} from './mixin'
import {Operation, isOperation} from './operation'
import {html, render} from '@github/jtml'
import tippy, {Instance as TippyInstance} from 'tippy.js'
import {Flaggable} from './mixin/flaggable'
import {OperationInspectorElement} from './operation-inspector-element'
import {Util} from '@qni/common'
import {controller} from '@github/catalyst'

export class InspectorButtonElement extends HTMLElement {
  public popup!: TippyInstance

  get isInspectorShown(): boolean {
    return this.popup.state.isVisible
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
    this.initPopup()
    this.addEventListener('mousedown', this.showPopup)
    document.addEventListener('click', this.maybeHidePopup.bind(this))
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  showInspector(operation: Operation): void {
    this.showPopup()
    this.inspector.operation = operation
  }

  showIfInspector(operation: Ifable): void {
    this.showPopup()
    this.inspector.operation = operation
    window.setTimeout(() => {
      this.inspector.ifInput.focus()
    }, 0)
  }

  showAngleInspector(operation: Angleable): void {
    this.showPopup()
    this.inspector.operation = operation
    window.setTimeout(() => {
      this.inspector.angleInput.focus()
    }, 0)
  }

  showFlagInspector(operation: Flaggable): void {
    this.showPopup()
    this.inspector.operation = operation
    window.setTimeout(() => {
      this.inspector.flagInput.focus()
    }, 0)
  }

  get inspector(): OperationInspectorElement {
    const el = this.popup.popper.querySelector('operation-inspector')
    Util.notNull(el)

    return el as OperationInspectorElement
  }

  private initPopup() {
    this.popup = tippy(this, {
      allowHTML: true,
      animation: false,
      arrow: false,
      content: this.popupContent,
      interactive: true,
      offset: [0, 16],
      placement: 'bottom',
      theme: 'operation-inspector',
      trigger: 'manual',
      hideOnClick: false
    })
  }

  private showPopup(): void {
    this.popup.show()
    this.inspector.disableAllPanes()
  }

  private maybeHidePopup(event: Event): void {
    const clickedEl = event.target as HTMLElement

    if (
      !this.popup.popper.contains(clickedEl) &&
      !this.popup.reference.contains(clickedEl) &&
      !isOperation(clickedEl)
    ) {
      this.popup.hide()
    }
  }

  private get popupContent(): DocumentFragment {
    const template = document.querySelector('#operation-inspector-template') as HTMLTemplateElement
    Util.notNull(template)

    const node = template.content.cloneNode(true)
    const content = document.createDocumentFragment()

    render(html`${node}`, content)

    return content
  }
}

controller(InspectorButtonElement)
