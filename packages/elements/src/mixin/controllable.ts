import {Constructor} from './constructor'
import {attr} from '@github/catalyst'

export declare class Controllable {
  set controls(value: number[])
  get controls(): number[]
  get isControlled(): boolean
}

export const isControllable = (arg: unknown): arg is Controllable =>
  typeof arg === 'object' && arg !== null && typeof (arg as Controllable).controls === 'object'

export function ControllableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase
): Constructor<Controllable> & TBase {
  class ControllableMixinClass extends Base {
    // todo: _controls → _controlBits
    @attr _controls = ''

    // todo: controls → controlBits
    set controls(controls: number[]) {
      this._controls = controls.sort().join()
    }

    // todo: controls → controlBits
    get controls(): number[] {
      if (this._controls === '') return []

      return this._controls
        .split(',')
        .map(each => parseInt(each))
        .sort()
    }

    get isControlled(): boolean {
      return this.controls.length > 0
    }
  }

  return ControllableMixinClass as Constructor<Controllable> & TBase
}
