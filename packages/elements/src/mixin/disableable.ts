import {Constructor} from './constructor'
import {attr} from '@github/catalyst'

export declare class Disableable {
  get isEnabled(): boolean
  get isDisabled(): boolean
  enable(): void
  disable(): void
}

export function DisableableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase
): Constructor<Disableable> & TBase {
  class DisableableMixinClass extends Base {
    @attr _disabled = false

    get isEnabled(): boolean {
      return !this._disabled
    }

    get isDisabled(): boolean {
      return this._disabled
    }

    enable(): void {
      this._disabled = false
    }

    disable(): void {
      this._disabled = true
    }
  }

  return DisableableMixinClass as Constructor<Disableable> & TBase
}
