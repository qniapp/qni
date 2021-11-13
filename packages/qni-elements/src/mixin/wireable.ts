import {Constructor} from './constructor'
import {attr} from '@github/catalyst'

export declare class Wireable {
  get wireTop(): boolean
  set wireTop(value: boolean)
  get wireBottom(): boolean
  set wireBottom(value: boolean)
}

export function WireableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Wireable> & TBase {
  class WireableMixinClass extends Base {
    @attr wireTop = false
    @attr wireBottom = false
  }

  return WireableMixinClass as Constructor<Wireable> & TBase
}
