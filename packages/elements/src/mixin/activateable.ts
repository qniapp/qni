import {Constructor} from './constructor'
import {attr} from '@github/catalyst'
import {emitEvent} from '@qni/common'

export declare class Activateable {
  activate(): void
  deactivate(): void
  get isActive(): boolean
}

export function ActivateableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase
): Constructor<Activateable> & TBase {
  class ActivateableMixinClass extends Base {
    @attr _active = false

    activate() {
      this._active = true
      emitEvent('activateable:active', {}, this)
    }

    deactivate() {
      this._active = false
    }

    get isActive() {
      return this._active
    }
  }

  return ActivateableMixinClass as Constructor<Activateable> & TBase
}
