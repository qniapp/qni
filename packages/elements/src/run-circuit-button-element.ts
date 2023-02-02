import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller, target} from '@github/catalyst'
import {createMachine, interpret} from 'xstate'
import {describe} from '@qni/common'
import reloadIcon from '../icon/reload.svg'
import tailSpinIcon from '../icon/tail-spin.svg'

type RunCircuitButtonContext = Record<string, never>
type RunCircuitButtonEvent = {type: 'FINISH'} | {type: 'CLICK'; clientX: number; clientY: number}

@controller
export class RunCircuitButtonElement extends HTMLElement {
  @attr running = false
  @attr debug = false

  @target body!: HTMLElement
  @target ripple: HTMLElement | undefined

  private runCircuitButtonMachine = createMachine<RunCircuitButtonContext, RunCircuitButtonEvent>(
    {
      id: 'run-circuit-button',
      initial: 'unknown',
      states: {
        unknown: {
          always: [
            {target: 'idle', cond: 'isIdle'},
            {target: 'running', cond: 'isRunning'}
          ]
        },
        idle: {
          on: {
            CLICK: {
              target: 'running',
              actions: ['ripple', 'setRunningTrue', 'dispatchClickEvent']
            }
          }
        },
        running: {
          on: {
            FINISH: {
              target: 'idle',
              actions: ['setRunningFalse']
            }
          }
        }
      }
    },
    {
      actions: {
        setRunningFalse: () => {
          this.running = false
        },
        setRunningTrue: () => {
          this.running = true
        },
        ripple: (_context, event) => {
          if (event.type !== 'CLICK') return
          if (this.ripple) this.ripple.remove()

          const newRipple = document.createElement('span')
          newRipple.id = 'ripple'

          const diameter = Math.max(this.clientWidth, this.clientHeight)
          const radius = diameter / 2
          const rect = this.getBoundingClientRect()
          const left = rect.left + window.pageXOffset
          const top = rect.top + window.pageYOffset

          newRipple.setAttribute('part', 'ripple')
          newRipple.setAttribute('data-target', 'run-circuit-button.ripple')
          newRipple.style.width = newRipple.style.height = `${diameter}px`
          newRipple.style.left = `${event.clientX - (left + radius)}px`
          newRipple.style.top = `${event.clientY - (top + radius)}px`

          this.body.appendChild(newRipple)
        },
        dispatchClickEvent: () => {
          this.dispatchEvent(new Event('run-circuit-button-click', {bubbles: true}))
        }
      },
      guards: {
        isIdle: () => !this.running,
        isRunning: () => this.running
      }
    }
  )
  private runCircuitButtonService = interpret(this.runCircuitButtonMachine).onTransition(state => {
    if (this.debug) {
      // eslint-disable-next-line no-console
      console.log(`run-circuit-button: ${describe(state.value)}`)
    }
  })

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()

    this.runCircuitButtonService.start()

    this.addEventListener('click', this.handleClickEvent)
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return

    if (name === 'data-running' && newValue !== null) {
      this.runCircuitButtonService.send({type: 'FINISH'})
    }
  }

  update(): void {
    render(
      html`<style>
          #body {
            position: relative;
            overflow: hidden;
            border-radius: 9999px;
            height: 100%;
            width: 100%;
          }

          #ripple {
            position: absolute;
            border-radius: 9999px;
            transform: scale(0);
            animation: ripple 400ms linear;
          }

          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        </style>

        <div id="body" part="body" data-target="run-circuit-button.body">${this.reloadIcon} ${this.tailSpinIcon}</div>`,
      this.shadowRoot!
    )
  }

  private handleClickEvent(event: MouseEvent): void {
    this.runCircuitButtonService.send({type: 'CLICK', clientX: event.clientX, clientY: event.clientY})
  }

  private get reloadIcon(): TemplateResult {
    return html([reloadIcon] as unknown as TemplateStringsArray)
  }

  private get tailSpinIcon(): TemplateResult {
    return html([tailSpinIcon] as unknown as TemplateStringsArray)
  }
}
