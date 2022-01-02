import noUiSlider, {PipsMode, target as noUiSliderTarget} from 'nouislider'
import {angleDenominator, angleNumerator, piCoefficient, radian, reduceAngle} from '@qni/common'
import tippy, {Instance, Props, roundArrow} from 'tippy.js'
import {DisplaySize} from 'lib'
import Fraction from 'fraction.js'
import {HGateElement} from 'components/hGateElement'
import {MeasurementGateElement} from 'components/measurementGateElement'
import {PhaseGateElement} from 'components/phaseGateElement'
import {RnotGateElement} from 'components/rnotGateElement'
import {RxGateElement} from 'components/rxGateElement'
import {RyGateElement} from 'components/ryGateElement'
import {RzGateElement} from 'components/rzGateElement'
import {Util} from './util'
import {XGateElement} from 'components/xGateElement'

const isPhaseGateElement = (arg: unknown): arg is PhaseGateElement =>
  typeof arg === 'object' && arg !== null && (arg as PhaseGateElement).tagName === 'PHASE-GATE'

const isThetable = (arg: unknown): arg is RxGateElement | RyGateElement | RzGateElement =>
  typeof arg === 'object' &&
  arg !== null &&
  ((arg as RxGateElement).tagName === 'RX-GATE' ||
    (arg as RyGateElement).tagName === 'RY-GATE' ||
    (arg as RzGateElement).tagName === 'RZ-GATE')

const isIfable = (arg: unknown): arg is HGateElement | XGateElement | RnotGateElement =>
  typeof arg === 'object' &&
  arg !== null &&
  ((arg as HGateElement).tagName === 'H-GATE' ||
    (arg as XGateElement).tagName === 'X-GATE' ||
    (arg as RnotGateElement).tagName === 'RNOT-GATE')

const isFlaggable = (arg: unknown): arg is MeasurementGateElement =>
  typeof arg === 'object' && arg !== null && (arg as MeasurementGateElement).tagName === 'MEASUREMENT-GATE'

export class GatePopup {
  onUpdate!: () => void
  popup: Instance<Props> | null | undefined
  currentAngle!: string | null
  currentAngleDenominator!: number | null

  show(element: HTMLElement): void {
    if (DisplaySize.isMobile()) return

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    this.popup = tippy(element, {
      allowHTML: true,
      animation: false,
      appendTo: document.body,
      arrow: roundArrow + roundArrow,
      content: this.popupHtml(element),
      delay: 0,
      hideOnClick: false,
      interactive: true,
      theme: 'qni',
      // trigger: "manual", // debug
      onShow(instance) {
        let originalValue: string | null
        const operation = instance.reference

        if (isFlaggable(operation)) {
          that.input.value = operation.flag
        } else if (isIfable(operation)) {
          that.input.value = operation.if
        } else if (isPhaseGateElement(operation) || isThetable(operation)) {
          if (isPhaseGateElement(operation)) {
            originalValue = operation.phi
          } else if (isThetable(operation)) {
            originalValue = operation.theta
          }
          that.input.value = originalValue!
          that.currentAngleDenominator = angleDenominator(originalValue!)
          that.currentAngle = that.snappedAngle(radian(originalValue!))

          that.createAngleSlider(operation)
        }

        that.input.addEventListener('keydown', that.inputKeydown.bind(that))
      },
      onHide() {
        if (that.isAngleSliderActive()) return false
      },
      onHidden(instance) {
        const operation = instance.reference as HTMLElement

        if (isPhaseGateElement(operation) || isThetable(operation)) {
          that.reduceInstructionAngle(operation)
          that.destroyAngleSlider()
        }
        operation.dispatchEvent(new Event('operation.update', {bubbles: true}))
        instance.destroy()
      }
    })
    this.popup.show()
  }

  private updateInstructionAngle(
    operation: PhaseGateElement | RxGateElement | RyGateElement | RzGateElement,
    angle: string
  ): void {
    this.input.value = angle
    if (isPhaseGateElement(operation)) {
      operation.phi = angle
    } else {
      operation.theta = angle
    }
  }

  private reduceInstructionAngle(operation: PhaseGateElement | RxGateElement | RyGateElement | RzGateElement): void {
    if (isPhaseGateElement(operation)) {
      operation.phi = reduceAngle(operation.phi)
    } else {
      operation.theta = reduceAngle(operation.theta)
    }
  }

  private snappedAngle(angle: number): string {
    Util.notNull(this.currentAngleDenominator)

    const unit = Math.PI / this.currentAngleDenominator
    const i = Math.round(angle / unit)

    return this.beautifyFraction(`${i}π/${this.currentAngleDenominator}`)
  }

  private beautifyFraction(angle: string, reduce = false): string {
    let newAngle: string
    ;(Fraction as any).REDUCE = reduce
    const fraction = new Fraction(piCoefficient(angle))

    const coefficient = fraction.valueOf()
    const d = fraction.d

    if (coefficient === 0) {
      newAngle = '0'
    } else if (coefficient > 2) {
      newAngle = d === 1 ? '2π' : `${2 * d}π/${d}`
    } else if (coefficient < -2) {
      newAngle = d === 1 ? '-2π' : `-${2 * d}π/${d}`
    } else {
      const n = fraction.n
      const sign = fraction.s === -1 ? '-' : ''
      const numerator = n === 1 ? `${sign}π` : `${sign}${n}π`
      newAngle = d === 1 ? `${numerator}` : `${numerator}/${d}`
    }

    return newAngle
  }

  private popupHtml(el: HTMLElement): string {
    let popupType = null

    // const instruction = Instruction.create(el)
    // let popupType = null

    // if (isFlaggable(instruction)) popupType = "flag"
    // if (
    //   isIfable(instruction) &&
    //   !isThetable(instruction) &&
    //   !isPhaseGateElement(instruction)
    // ) {
    //   popupType = "if"
    // }
    // if (isThetable(instruction)) popupType = "theta"
    // if (isPhaseGateElement(instruction)) popupType = "phi"

    if (isFlaggable(el)) {
      popupType = 'flag'
    } else if (isPhaseGateElement(el)) {
      popupType = 'phi'
    } else if (isThetable(el)) {
      popupType = 'theta'
    } else if (isIfable(el)) {
      popupType = 'if'
    }
    Util.notNull(popupType)

    const popupEl = document.getElementById(`gate-popup--${popupType}`)
    Util.notNull(popupEl)

    return popupEl.innerHTML
  }

  private get input(): HTMLInputElement {
    Util.notNull(this.popup)

    const el = this.popup.popper.getElementsByTagName('input').item(0)
    Util.notNull(el)

    return el
  }

  private inputKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      Util.notNull(this.popup)
      this.popup.popper.classList.remove('gate-popup--error')
      const inputValue = this.input.value

      try {
        // const instruction = Instruction.create(this.popupReferenceEl)
        const operation = this.popupReferenceEl

        // if (isFlaggable(operation)) this.flag = inputValue

        // if (
        //   isIfable(operation) &&
        //   !isThetable(operation) &&
        //   !isPhaseGateElement(operation)
        // ) {
        //   this.if = inputValue
        // }

        if (isFlaggable(operation)) {
          this.flag = inputValue
        } else if (isIfable(operation)) {
          this.if = inputValue
        } else {
          Util.notNull(this.currentAngle)
          Util.notNull(this.currentAngleDenominator)

          let newAngle = inputValue

          if (
            angleNumerator(this.currentAngle) === angleNumerator(inputValue) &&
            this.currentAngleDenominator !== angleDenominator(inputValue)
          ) {
            const m = angleDenominator(inputValue) / this.currentAngleDenominator
            newAngle = `${Math.round(m * angleNumerator(this.currentAngle))}π/${angleDenominator(inputValue)}`
          }

          this.currentAngleDenominator = angleDenominator(inputValue)
          const slider = this.angleSliderEl.noUiSlider
          Util.notNull(slider)
          console.log(`slider set ${radian(newAngle)}`)
          slider.set(radian(newAngle))

          if (isPhaseGateElement(operation)) {
            operation.phi = reduceAngle(newAngle)
          } else if (isThetable(operation)) {
            operation.theta = reduceAngle(newAngle)
          }
        }
        this.runCircuit()
      } catch (e) {
        Util.notNull(this.popup)
        this.popup.popper.classList.add('gate-popup--error')
      }
    }
  }

  private set flag(flag: string | null) {
    const operation = this.popupReferenceEl as MeasurementGateElement

    if (!flag || flag.trim().length === 0) {
      operation.flag = ''
      // if (isDisableable(instruction)) instruction.disabled = false
    } else {
      operation.flag = flag
    }
  }

  private set if(ifValue: string | null) {
    const operation = this.popupReferenceEl
    // const instruction = Instruction.create(this.popupReferenceEl)

    if (!ifValue || ifValue.trim().length === 0) {
      if (isIfable(operation)) {
        operation.if = ''
        operation.disabled = false
      }
    } else {
      if (isIfable(operation)) operation.if = ifValue
    }
  }

  private runCircuit(): void {
    this.popupReferenceEl.dispatchEvent(new Event('operation.popup.change', {bubbles: true}))
  }

  private get popupReferenceEl(): HTMLElement {
    Util.notNull(this.popup)

    return this.popup.reference as HTMLElement
  }

  private get angleSliderEl(): noUiSliderTarget {
    const el = this.popup?.popper.getElementsByClassName('angle-slider').item(0) as HTMLElement
    Util.notNull(el)

    return el
  }

  private createAngleSlider(operation: PhaseGateElement | RxGateElement | RyGateElement | RzGateElement): void {
    let angle: string
    if (isPhaseGateElement(operation)) {
      angle = operation.phi
    } else {
      angle = operation.theta
    }

    const angleSliderEl = this.angleSliderEl
    const filterPips = (value: number) => {
      if (value === 0) return 1
      return value % Math.PI ? -1 : 1
    }
    noUiSlider.create(angleSliderEl, {
      start: radian(angle),
      range: {
        min: -2 * Math.PI,
        max: 2 * Math.PI
      },
      pips: {
        mode: PipsMode.Positions,
        values: [0, 25, 50, 75, 100],
        filter: filterPips,
        format: {
          to: value => {
            const nPi = value / Math.PI
            if (nPi === 0) return '0'
            if (nPi === -1) return '-π'
            if (nPi === 1) return 'π'
            return `${nPi}π`
          }
        }
      },
      cssPrefix: 'angle-slider-'
    })
    angleSliderEl.classList.remove('hidden')

    const slider = angleSliderEl.noUiSlider
    Util.notNull(slider)
    slider.on('update', values => {
      const snappedAngle = this.snappedAngle(parseFloat(values[0] as string))
      if (this.currentAngle !== snappedAngle) {
        this.currentAngle = snappedAngle
        this.updateInstructionAngle(operation, snappedAngle)
        operation.dispatchEvent(new Event('operation.popup.change', {bubbles: true}))
      }
    })
  }

  private destroyAngleSlider(): void {
    this.angleSliderEl.noUiSlider?.destroy()
  }

  private isAngleSliderActive(): boolean {
    return this.popup?.popper.getElementsByClassName('angle-slider-active').item(0) !== null
  }
}
