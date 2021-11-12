import {Constructor} from './constructor'
import {attr} from '@github/catalyst'

export declare class Wireable {
  get connectedToLowerBit(): boolean
  set connectedToLowerBit(value: boolean)
  get connectedToUpperBit(): boolean
  set connectedToUpperBit(value: boolean)
}

export function WireableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Wireable> & TBase {
  class WireableMixinClass extends Base {
    @attr connectedToLowerBit = false
    @attr connectedToUpperBit = false
  }

  return WireableMixinClass as Constructor<Wireable> & TBase
}
