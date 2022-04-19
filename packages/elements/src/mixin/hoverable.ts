import {Interpreter, createMachine, interpret} from 'xstate'
import {Constructor} from './constructor'
import {describe} from '@qni/common'

export declare class Hoverable {
  get hoverable(): boolean
  set hoverable(value: boolean)
}

type HoverableContext = Record<string, never>
type HoverableEvent = {type: 'SET_HOVERABLE'} | {type: 'UNSET_HOVERABLE'}

export function HoverableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Hoverable> & TBase {
  class HoverableMixinClass extends Base {
    private hoverableMachine = createMachine<HoverableContext, HoverableEvent>(
      {
        id: 'hoverable',
        initial: 'idle',
        states: {
          idle: {
            always: [
              {target: 'hoverable', cond: 'isHoverable'},
              {target: 'unhoverable', cond: 'isUnhoverable'}
            ]
          },
          hoverable: {
            entry: ['setHoverable'],
            on: {
              UNSET_HOVERABLE: {
                target: 'unhoverable'
              }
            }
          },
          unhoverable: {
            entry: ['unsetHoverable'],
            on: {
              SET_HOVERABLE: {
                target: 'hoverable'
              }
            }
          }
        }
      },
      {
        actions: {
          setHoverable: () => {
            this.setAttribute('data-hoverable', '')
          },
          unsetHoverable: () => {
            this.removeAttribute('data-hoverable')
          }
        },
        guards: {
          isHoverable: () => {
            return this.hoverable
          },
          isUnhoverable: () => {
            return !this.hoverable
          }
        }
      }
    )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public hoverableService!: Interpreter<HoverableContext, any, HoverableEvent>

    get hoverable(): boolean {
      return this.hasAttribute('data-hoverable')
    }

    set hoverable(value: boolean) {
      this.maybeInitHoverableStateMachine()

      if (value) {
        this.hoverableService.send({type: 'SET_HOVERABLE'})
      } else {
        this.hoverableService.send({type: 'UNSET_HOVERABLE'})
      }
    }

    private get debugHoverable(): boolean {
      return this.hasAttribute('data-debug-hoverable')
    }

    private maybeInitHoverableStateMachine(): void {
      if (this.hoverableService !== undefined) return

      this.hoverableService = interpret(this.hoverableMachine)
        .onTransition(state => {
          if (this.debugHoverable) {
            // eslint-disable-next-line no-console
            console.log(`hoverable: ${describe(state.value)}`)
          }
        })
        .start()
    }
  }

  return HoverableMixinClass as Constructor<Hoverable> & TBase
}
