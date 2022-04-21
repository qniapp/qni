import {Constructor} from './constructor'
import {attr} from '@github/catalyst'

export declare class Disableable {
  get disabled(): boolean
  set disabled(value: boolean)
  get enabled(): boolean
  enable(): void
  disable(): void
}

export function DisableableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase
): Constructor<Disableable> & TBase {
  class DisableableMixinClass extends Base {
    @attr disabled = false

    get enabled(): boolean {
      return !this.disabled
    }

    enable(): void {
      this.disabled = false
    }

    disable(): void {
      this.disabled = true
    }
  }

  return DisableableMixinClass as Constructor<Disableable> & TBase
}
