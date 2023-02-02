import {DetailedError, Util, angleDenominator, describe, radian as radianOf} from '@qni/common'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {attr, controller} from '@github/catalyst'
import {createMachine, interpret} from 'xstate'
import {html, render} from '@github/jtml'
import {InteractEvent} from '@interactjs/types'
import interact from 'interactjs'

export const isAngleSliderElement = (arg: unknown): arg is AngleSliderElement =>
  arg !== null && arg instanceof AngleSliderElement

type AngleSliderContext = Record<string, never>
type AngleSliderEvent = {type: 'SET_ANGLE'} | {type: 'SET_DENOMINATOR'} | {type: 'START_MOVE'} | {type: 'END_MOVE'}

@controller
export class AngleSliderElement extends HTMLElement {
  @attr angle = ''
  @attr radian = 0
  @attr denominator = 0
  @attr disabled = false
  @attr debug = false

  private snapAngles: {[radian: number]: string} = {}
  private angleSliderMachine = createMachine<AngleSliderContext, AngleSliderEvent>(
    {
      id: 'angle-slider',
      initial: 'idle',
      states: {
        idle: {
          on: {
            START_MOVE: {
              target: 'moving'
            },
            SET_ANGLE: {
              target: 'idle',
              actions: [
                'setDenominatorByAngle',
                'updateSnapAngles',
                'setRadianInAngle',
                'updateHandlePosition',
                'dispatchUpdateEvent'
              ]
            },
            SET_DENOMINATOR: {
              target: 'idle',
              actions: ['validateDenominator', 'updateSnapAngles', 'setAngleInRadian']
            }
          }
        },
        moving: {
          on: {
            SET_ANGLE: {
              target: 'moving',
              actions: ['dispatchChangeEvent']
            },
            END_MOVE: {
              target: 'idle',
              actions: ['dispatchUpdateEvent']
            }
          }
        }
      }
    },
    {
      actions: {
        validateDenominator: () => {
          if (!Number.isInteger(this.denominator) || this.denominator <= 0) {
            throw new DetailedError('Bad denominator', this.denominator)
          }
        },
        setDenominatorByAngle: (_context, event) => {
          if (event.type !== 'SET_ANGLE') return

          this.denominator = angleDenominator(this.angle)
        },
        setAngleInRadian: (_context, event) => {
          if (event.type !== 'SET_DENOMINATOR') return

          const [, angle] = this.findSnapAngle(this.radian)
          this.angle = angle
        },
        setRadianInAngle: (_context, event) => {
          if (event.type !== 'SET_ANGLE') return

          const [radian] = this.findSnapAngle(radianOf(this.angle))
          this.radian = radian
        },
        updateSnapAngles: () => {
          this.updateSnapAngles()
        },
        updateHandlePosition: () => {
          this.left = (this.radian + 2 * Math.PI) / (4 * Math.PI)
        },
        dispatchChangeEvent: () => {
          this.dispatchEvent(new Event('angle-slider-change', {bubbles: true}))
        },
        dispatchUpdateEvent: () => {
          this.dispatchEvent(new Event('angle-slider-update', {bubbles: true}))
        }
      }
    }
  )
  private angleSliderService = interpret(this.angleSliderMachine)
    .onTransition(state => {
      if (this.debug) {
        // eslint-disable-next-line no-console
        console.log(`circuit-step: ${describe(state.value)}`)
      }
    })
    .start()

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return
    if (newValue === null) return

    if (name === 'data-angle' && newValue !== '') {
      this.angleSliderService.send({type: 'SET_ANGLE'})
    }
    if (name === 'data-denominator' && this.shadowRoot !== null) {
      this.angleSliderService.send({type: 'SET_DENOMINATOR'})
    }
  }

  connectedCallback(): void {
    if (this.shadowRoot === null) {
      this.attachShadow({mode: 'open'})
    }
    this.update()
    this.updateSnapAngles()
    this.initInteraction()
  }

  disconnectedCallback(): void {
    interact(this).unset()
  }

  update(): void {
    render(
      html`<style>
        :host {
          display: inline-block;
          position: relative;
          touch-action: none;
        }

        :host::before {
          content: '';
          display: block;
          position: relative;
          top: 0px;
        }
      </style>`,
      this.shadowRoot!
    )
  }

  private initInteraction(): void {
    interact(this).draggable({
      origin: 'self',
      modifiers: [
        interact.modifiers.restrict({
          restriction: 'self'
        })
      ],
      listeners: {
        start: this.startMove.bind(this),
        move: this.move.bind(this),
        end: this.endMove.bind(this)
      }
    })
  }

  private startMove(): void {
    this.angleSliderService.send({type: 'START_MOVE'})
  }

  private move(event: InteractEvent) {
    const sliderWidth = interact.getElementRect(event.target).width
    const proportion = event.pageX / sliderWidth

    this.left = proportion

    const radian = this.proportionToRadian(proportion)
    this.setAttribute('data-radian', radian.toString())

    const [, angle] = this.findSnapAngle(radian)

    if (this.angle !== angle) this.angle = angle
  }

  private endMove(): void {
    this.angleSliderService.send({type: 'END_MOVE'})
  }

  private updateSnapAngles(): void {
    if (this.denominator === 0) return

    const start = -2 * this.denominator
    const end = 2 * this.denominator
    const numerators = new Array(end - start + 1).fill(null).map((_, i) => i + start)

    this.snapAngles = {}
    for (const each of numerators) {
      if (this.denominator === 1) {
        if (each === 0) {
          this.snapAngles[0] = '0'
        } else if (each === 1) {
          this.snapAngles[Math.PI] = 'π'
        } else if (each === -1) {
          this.snapAngles[-1 * Math.PI] = '-π'
        } else {
          this.snapAngles[each * Math.PI] = `${each}π`
        }
      } else {
        if (each === 0) {
          this.snapAngles[0] = '0'
        } else if (each === 1) {
          this.snapAngles[Math.PI / this.denominator] = `π/${this.denominator}`
        } else if (each === -1) {
          this.snapAngles[(-1 * Math.PI) / this.denominator] = `-π/${this.denominator}`
        } else {
          this.snapAngles[(each * Math.PI) / this.denominator] = `${each}π/${this.denominator}`
        }
      }
    }
  }

  private findSnapAngle(rad: number): [number, string] {
    let minDelta = null
    let snapRadian = null
    let snapAngle = null

    for (const each in this.snapAngles) {
      const delta = Math.abs(parseFloat(each) - rad)
      if (minDelta === null || delta < minDelta) {
        minDelta = delta
        snapRadian = parseFloat(each)
        snapAngle = this.snapAngles[each]
      }
    }
    Util.notNull(snapRadian)
    Util.notNull(snapAngle)

    return [snapRadian, snapAngle]
  }

  private proportionToRadian(proportion: number) {
    return (proportion - 0.5) * Math.PI * 4
  }

  private set left(proportion: number) {
    this.style.paddingLeft = `${proportion * 100}%`
  }
}
