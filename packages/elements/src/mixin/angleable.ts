import {Constructor} from './constructor'
import {attr} from '@github/catalyst'

export declare class Angleable {
  get angle(): string
  set angle(value: string)
  get reducedAngle(): string
  set reducedAngle(value: string)
}

export const isAngleable = (arg: unknown): arg is Angleable =>
  typeof arg === 'object' &&
  arg !== null &&
  typeof (arg as Angleable).angle === 'string' &&
  typeof (arg as Angleable).reducedAngle === 'string'

export function AngleableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Angleable> & TBase {
  class AngleableMixinClass extends Base {
    @attr angle = ''
    @attr reducedAngle = ''
  }

  return AngleableMixinClass as Constructor<Angleable> & TBase
}
