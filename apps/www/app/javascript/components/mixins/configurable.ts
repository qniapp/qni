import {Constructor} from './constructor'
import {GatePopup} from 'lib/gatePopup'

export declare class Configurable {
  showRightClickPopup(event: MouseEvent): void
}

export function ConfigurableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase
): Constructor<Configurable> & TBase {
  class ConfigurableMixinClass extends Base {
    showRightClickPopup(event: MouseEvent): void {
      if (event.button !== 2 && !event.ctrlKey) return

      const gatePopup = new GatePopup()
      gatePopup.show(this)
    }
  }

  return ConfigurableMixinClass as Constructor<Configurable> & TBase
}
