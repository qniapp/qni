import {Constructor} from './constructor'
import {attr} from '@github/catalyst'

export declare class Controllable {
  set controlBits(value: number[])
  get controlBits(): number[]
  get isControlled(): boolean
}

export const isControllable = (arg: unknown): arg is Controllable =>
  typeof arg === 'object' && arg !== null && typeof (arg as Controllable).controlBits === 'object'

export function ControllableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase
): Constructor<Controllable> & TBase {
  class ControllableMixinClass extends Base {
    @attr _controlBits = ''

    set controlBits(controls: number[]) {
      this._controlBits = controls.sort().join()
    }

    get controlBits(): number[] {
      if (this._controlBits === '') return []

      return this._controlBits
        .split(',')
        .map(each => parseInt(each))
        .sort()
    }

    get isControlled(): boolean {
      return this.controlBits.length > 0
    }
  }

  return ControllableMixinClass as Constructor<Controllable> & TBase
}
