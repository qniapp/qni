import {createMachine, interpret} from 'xstate'
import {Constructor} from './constructor'
import {attr} from '@github/catalyst'
import {describe} from '@qni/common'

export declare class Resizeable {
  initResizeable(): void
}

type ResizeableContext = Record<string, never>
type ResizeableEvent = {type: 'SET_INTERACT'}

export function ResizeableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Resizeable> & TBase {
  class ResizeableMixinClass extends Base {
    @attr debugResizeable = true

    private resizeableMachine = createMachine<ResizeableContext, ResizeableEvent>(
      {
        id: 'resizeable',
        initial: 'idle',
        states: {
          idle: {
            entry: ['init']
          }
        }
      },
      {
        actions: {
          init: () => {
            this.dispatchEvent(new Event('resizeable-init', {bubbles: true}))
          }
        }
      }
    )

    public resizeableService = interpret(this.resizeableMachine).onTransition(state => {
      if (this.debugResizeable) {
        // eslint-disable-next-line no-console
        console.log(`resizeable: ${describe(state.value)}`)
      }
    })

    initResizeable(): void {
      if (this.resizeableService.state !== undefined) {
        return
      }

      this.resizeableService.start()
    }
  }

  return ResizeableMixinClass as Constructor<Resizeable> & TBase
}
