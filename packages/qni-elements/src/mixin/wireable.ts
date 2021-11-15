import {Constructor} from './constructor'
import {attr} from '@github/catalyst'

export declare class Wireable {
  get wireTop(): boolean
  set wireTop(value: boolean)
  get wireBottom(): boolean
  set wireBottom(value: boolean)
  dispatchWireTopBottomEvent(name: string, oldValue: string | null, newValue: string | null): void
}

export function WireableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Wireable> & TBase {
  class WireableMixinClass extends Base {
    @attr wireTop = false
    @attr wireBottom = false

    dispatchWireTopBottomEvent(name: string, oldValue: string | null, newValue: string | null): void {
      if (oldValue === newValue) return

      if (name === 'data-wire-top') {
        if (newValue !== null) {
          this.dispatchEvent(new Event('operation-wire-top', {bubbles: true}))
        }
      }

      if (name === 'data-wire-bottom') {
        if (newValue !== null) {
          this.dispatchEvent(new Event('operation-wire-bottom', {bubbles: true}))
        }
      }
    }
  }

  return WireableMixinClass as Constructor<Wireable> & TBase
}
