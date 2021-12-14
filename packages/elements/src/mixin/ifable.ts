import {Constructor} from './constructor'
import {attr} from '@github/catalyst'

export declare class Ifable {
  get if(): string
  set if(value: string)
}

export const isIfable = (arg: unknown): arg is Ifable =>
  typeof arg === 'object' && arg !== null && typeof (arg as Ifable).if === 'string'

export function IfableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Ifable> & TBase {
  class IfableMixinClass extends Base {
    @attr if = ''
  }

  return IfableMixinClass as Constructor<Ifable> & TBase
}
