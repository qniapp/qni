import '@interactjs/actions/drag'
import '@interactjs/auto-start'
import '@interactjs/dev-tools'
import '@interactjs/modifiers'
import {angleDenominator, radian as radianOf} from './angle-parser'
import {attr, controller} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {InteractEvent} from '@interactjs/types'
import {Util} from './util'
import interact from '@interactjs/interact'

export const isAngleSliderElement = (arg: unknown): arg is AngleSliderElement =>
  arg !== null && arg instanceof AngleSliderElement

@controller
export class AngleSliderElement extends HTMLElement {
  @attr denominator = 0
  @attr disabled = false

  private snapAngles: {[radian: number]: string} = {}

  get angle(): string {
    const value = this.getAttribute('data-angle')
    Util.notNull(value)

    return value
  }

  set angle(value: string) {
    this.setAttribute('data-angle', value)
    this.dispatchEvent(new Event('angle-slider-update', {bubbles: true}))
  }

  get radian(): number {
    const value = this.getAttribute('data-radian')
    Util.notNull(value)

    return parseFloat(value)
  }

  set radian(value: number) {
    this.setAttribute('data-radian', value.toString())
    this.left = (value + 2 * Math.PI) / (4 * Math.PI)
  }

  initWithAngle(angle: string): void {
    this.denominator = angleDenominator(angle)
    this.updateSnapAngles()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [radian, _] = this.findSnapAngle(radianOf(angle))
    this.radian = radian
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return
    if (newValue === null) return

    if (name === 'data-denominator' && this.denominator !== 0) {
      this.updateSnapAngles()
    }
  }

  connectedCallback(): void {
    if (this.shadowRoot === null) {
      this.attachShadow({mode: 'open'})
    }
    this.update()

    this.setAttribute('data-angle', '')
    this.updateSnapAngles()
    this.initInteraction()
  }

  disconnectedCallback(): void {
    interact(this).unset()
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
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
        move: this.move.bind(this)
      }
    })
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

  findSnapAngle(rad: number): [number, string] {
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

  private move(event: InteractEvent) {
    const sliderWidth = interact.getElementRect(event.target).width
    const proportion = event.pageX / sliderWidth

    this.left = proportion

    const radian = this.proportionToRadian(proportion)
    this.setAttribute('data-radian', radian.toString())

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, angle] = this.findSnapAngle(radian)

    if (this.angle !== angle) this.angle = angle
  }

  private proportionToRadian(proportion: number) {
    return (proportion - 0.5) * Math.PI * 4
  }

  private set left(proportion: number) {
    this.style.paddingLeft = `${proportion * 100}%`
  }
}
