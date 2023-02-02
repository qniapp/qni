import {Constructor} from './constructor'
import {attr} from '@github/catalyst'

export declare class Flaggable {
  get flag(): string
  set flag(value: string)
}

export const isFlaggable = (arg: unknown): arg is Flaggable =>
  typeof arg === 'object' && arg !== null && typeof (arg as Flaggable).flag === 'string'

export function FlaggableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Flaggable> & TBase {
  class FlaggableMixinClass extends Base {
    @attr flag = ''
  }

  return FlaggableMixinClass as Constructor<Flaggable> & TBase
}
