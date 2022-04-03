import {ActivateableMixin, DraggableMixin, HelpableMixin, HoverableMixin, IconableMixin, MenuableMixin} from './mixin/'
import {SerializedWrite0GateType, SerializedWrite1GateType} from '@qni/common'
import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import writeGateIcon from '../icon/write-gate.svg'

export class WriteGateElement extends MenuableMixin(
  HelpableMixin(DraggableMixin(IconableMixin(ActivateableMixin(HoverableMixin(HTMLElement)))))
) {
  @attr value = ''

  get operationType(): typeof SerializedWrite0GateType | typeof SerializedWrite1GateType {
    switch (this.value) {
      case '0':
        return SerializedWrite0GateType
      case '1':
        return SerializedWrite1GateType
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
      html`${this.iconHtml(writeGateIcon)}
        <div part="value"></div>`,
      this.shadowRoot!
    )
  }

  toJson(): string {
    return `"|${this.value}>"`
  }
}

controller(WriteGateElement)
