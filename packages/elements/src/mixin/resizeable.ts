import {createMachine, interpret} from 'xstate'
import {Constructor} from './constructor'
import {attr} from '@github/catalyst'
import {describe} from '@qni/common'

export const isResizeable = (arg: unknown): arg is Resizeable =>
  arg !== undefined && arg !== null && typeof (arg as Resizeable).resizeable === 'boolean'

export declare class Resizeable {
  set resizeable(value: boolean)
  initResizeable(): void
}

type ResizeableContext = Record<string, never>
type ResizeableEvent = {type: 'SET_INTERACT'} | {type: 'UNSET_INTERACT'}

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

    get resizeable(): boolean {
      return this.resizeableService.state !== undefined
    }

    set resizeable(value: boolean) {
      if (value) {
        // eslint-disable-next-line no-console
        console.log('resizeable = true')
        // this.resizeableService.send({type: 'SET_INTERACT'})
      } else {
        // eslint-disable-next-line no-console
        console.log('resizeable = false')
        // this.resizeableService.send({type: 'UNSET_INTERACT'})
      }
    }

    initResizeable(): void {
      if (this.resizeableService.state !== undefined) {
        return
      }

      this.resizeableService.start()
    }
  }

  return ResizeableMixinClass as Constructor<Resizeable> & TBase
}
