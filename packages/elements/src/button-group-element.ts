import {controller, targets} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {Util} from '@qni/common'

@controller
export class ButtonGroupElement extends HTMLElement {
  @targets buttons!: HTMLElement[]

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  activateButton(event: Event): void {
    const button = event.currentTarget as HTMLElement
    Util.notNull(button)

    for (const each of this.buttons) {
      each.removeAttribute('data-active')
    }
    button.setAttribute('data-active', '')
  }
}
