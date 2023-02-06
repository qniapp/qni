import {Constructor} from './constructor'
import {attr} from '@github/catalyst'
import {emitEvent} from '@qni/common'

export declare class Activateable {
  get active(): boolean
  set active(value: boolean)
  activate(): void
  deactivate(): void
}

export function ActivateableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<Activateable> & TBase {
  class ActivateableMixinClass extends Base {
    @attr active = false

    activate() {
      this.active = true
      emitEvent('activateable:active', {}, this)
    }

    deactivate() {
      this.active = false
    }
  }

  return ActivateableMixinClass as Constructor<Activateable> & TBase
}
