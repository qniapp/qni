import {Constructor} from './constructor'
import {attr} from '@github/catalyst'

export declare class Hoverable {
  get hoverable(): boolean
  set hoverable(value: boolean)
}

export function HoverableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Hoverable> & TBase {
  class HoverableMixinClass extends Base {
    @attr hoverable = false
  }

  return HoverableMixinClass as Constructor<Hoverable> & TBase
}
