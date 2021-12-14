import {ActivateableMixin, DraggableMixin, IconableMixin, MenuableMixin} from './mixin/'
import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {iconWriteGate} from './icon'

export const Write0GateElementType = '|0>'
export const Write1GateElementType = '|1>'

// ??? type: 'Write', value: '0' | '1' のようにする？
export type SerializedWriteGateElement = {
  type: typeof Write0GateElementType | typeof Write1GateElementType
  targets: number[]
}

@controller
export class WriteGateElement extends MenuableMixin(DraggableMixin(IconableMixin(ActivateableMixin(HTMLElement)))) {
  @attr value = ''

  get operationType(): typeof Write0GateElementType | typeof Write1GateElementType {
    switch (this.value) {
      case '0':
        return Write0GateElementType
      case '1':
        return Write1GateElementType
      default:
        throw new Error(`Invalid write value: ${this.value}`)
    }
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()
  }

  update(): void {
    render(
      html`${this.iconHtml(iconWriteGate)}
        <div part="value"></div>`,
      this.shadowRoot!
    )
  }
}
