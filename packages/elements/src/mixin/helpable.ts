import {Interpreter, createMachine, interpret} from 'xstate'
import tippy, {Instance, roundArrow} from 'tippy.js'
import {Constructor} from './constructor'
import {attr} from '@github/catalyst'
import {describe} from '@qni/common'

export declare class Helpable {
  initHelp(): void
  showHelp(): void
  disableHelp(): void
  get helpContent(): DocumentFragment | null
}

export const isHelpable = (arg: unknown): arg is Helpable =>
  typeof arg === 'object' && arg !== null && typeof (arg as Helpable).initHelp === 'function'

type HelpableContext = Record<string, never>
type HelpableEvent = {type: 'INIT'} | {type: 'ENABLE'} | {type: 'DISABLE'} | {type: 'SHOW'}

export function HelpableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Helpable> & TBase {
  class HelpableMixinClass extends Base {
    @attr help = true
    @attr helpId = ''
    @attr debugHelpable = false

    private helpableMachine = createMachine<HelpableContext, HelpableEvent>(
      {
        id: 'helpable',
        initial: 'idle',
        states: {
          idle: {
            on: {
              INIT: {
                target: 'initialized',
                actions: ['init']
              }
            }
          },
          initialized: {
            type: 'compound',
            initial: 'unknown',
            states: {
              unknown: {
                always: [
                  {target: 'enabled', cond: 'isEnabled'},
                  {target: 'disabled', cond: 'isDisabled'}
                ]
              },
              enabled: {
                on: {
                  SHOW: {
                    target: 'enabled',
                    actions: ['show']
                  },
                  DISABLE: {
                    target: 'disabled',
                    actions: ['disable', 'destroy']
                  }
                }
              },
              disabled: {
                on: {
                  ENABLE: {
                    target: 'enabled',
                    actions: ['init', 'enable']
                  }
                }
              }
            }
          }
        }
      },
      {
        guards: {
          isEnabled: () => {
            return this.help
          },
          isDisabled: () => {
            return !this.help
          }
        },
        actions: {
          init: () => {
            const helpContent = this.helpContent
            if (helpContent === null) return

            this.popup = tippy(this, {
              allowHTML: true,
              animation: false,
              arrow: roundArrow + roundArrow,
              delay: 0,
              placement: 'auto',
              theme: 'qni',
              // trigger: 'manual', // debug
              onShow(instance: Instance) {
                instance.setContent(helpContent)
              }
            })

            this.addEventListener('mouseenter', this.showHelp)
          },
          show: () => {
            this.popup.show()
          },
          enable: () => {
            this.popup.enable()
            this.help = true
          },
          disable: () => {
            this.popup?.disable()
            this.help = false
          },
          destroy: () => {
            this.popup?.destroy()
          }
        }
      }
    )
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private helpableService!: Interpreter<HelpableContext, any, HelpableEvent>
    private popup!: Instance

    initHelp(): void {
      this.helpableService = interpret(this.helpableMachine)
        .onTransition(state => {
          if (this.debugHelpable) {
            // eslint-disable-next-line no-console
            console.log(`helpable: ${describe(state.value)}`)
          }
        })
        .start()

      this.helpableService.send('INIT')
    }

    showHelp(): void {
      this.helpableService.send('SHOW')
    }

    disableHelp(): void {
      this.helpableService.send('DISABLE')
    }

    get helpContent(): DocumentFragment | null {
      let id: string

      if (this.helpId !== '') {
        id = this.helpId
      } else {
        id = `${this.tagName.toLowerCase()}-help`
      }
      const template = document.getElementById(id) as HTMLTemplateElement
      if (template === null) return null

      return template.content.cloneNode(true) as DocumentFragment
    }
  }

  return HelpableMixinClass as Constructor<Helpable> & TBase
}
