import {Constructor} from './constructor'

export declare class Activateable {
  get active(): boolean
  set active(value: boolean)
}

export function ActivateableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase
): Constructor<Activateable> & TBase {
  class ActivateableMixinClass extends Base {
    get active(): boolean {
      return this.hasAttribute('data-active')
    }

    set active(value: boolean) {
      if (value) {
        this.setAttribute('data-active', '')
        this.dispatchEvent(new Event('operation-active', {bubbles: true}))
      } else {
        this.removeAttribute('data-active')
      }
    }
  }

  return ActivateableMixinClass as Constructor<Activateable> & TBase
}
