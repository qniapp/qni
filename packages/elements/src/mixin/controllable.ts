import {Constructor} from './constructor'

export declare class Controllable {
  set controls(value: number[])
  set antiControls(value: number[])
  get controls(): number[]
  get antiControls(): number[]
  get isControlled(): boolean
  get isAntiControlled(): boolean
}

export const isControllable = (arg: unknown): arg is Controllable =>
  typeof arg === 'object' && arg !== null && typeof (arg as Controllable).controls === 'object'

export function ControllableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase
): Constructor<Controllable> & TBase {
  class ControllableMixinClass extends Base {
    set controls(controls: number[]) {
      this.setAttribute('data-controls', controls.sort().join())
    }

    set antiControls(antiControls: number[]) {
      this.setAttribute('data-anti-controls', antiControls.sort().join())
    }

    get controls(): number[] {
      const dataControls = this.getAttribute('data-controls')
      if (dataControls === null) return []
      if (dataControls === '') return []

      return dataControls
        .split(',')
        .map(each => parseInt(each))
        .sort()
    }

    get antiControls(): number[] {
      const dataAntiControls = this.getAttribute('data-anti-controls')
      if (dataAntiControls === null) return []
      if (dataAntiControls === '') return []

      return dataAntiControls
        .split(',')
        .map(each => parseInt(each))
        .sort()
    }

    get isControlled(): boolean {
      return this.controls.length > 0
    }

    get isAntiControlled(): boolean {
      return this.antiControls.length > 0
    }
  }

  return ControllableMixinClass as Constructor<Controllable> & TBase
}
