import {Constructor} from './constructor'

export declare class Hoverable {
  get hoverable(): boolean
  set hoverable(value: boolean)
}

export function HoverableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Hoverable> & TBase {
  class HoverableMixinClass extends Base {
    get hoverable(): boolean {
      return this.hasAttribute('data-hoverable')
    }

    set hoverable(value: boolean) {
      if (value) {
        this.setAttribute('data-hoverable', '')
      } else {
        this.removeAttribute('data-hoverable')
      }
    }
  }

  return HoverableMixinClass as Constructor<Hoverable> & TBase
}
