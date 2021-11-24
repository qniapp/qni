import {AngleSliderElement, isAngleSliderElement} from './angle-slider-element'
import {Operation, isPhaseGateElement} from './operation'
import {angleDenominator, isAngleGreaterThan, isAngleLessThan, isValidAngle, reduceAngle} from './angle-parser'
import {controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {isNumeric} from './util'

@controller
export class OperationInspectorElement extends HTMLElement {
  @target phiInput: HTMLInputElement
  @target angleSlider: AngleSliderElement
  @target denominatorInput: HTMLInputElement
  @target denominatorLabel: HTMLSpanElement
  @target reduceFractionCheckbox: HTMLInputElement
  @target ifInput: HTMLInputElement

  get angle(): string {
    const value = this.phiInput.value

    if (this.reduceFractionCheckbox.checked) {
      return reduceAngle(value)
    } else {
      return value
    }
  }

  get if(): string {
    return this.ifInput.value
  }

  set operation(operation: Operation) {
    if (isPhaseGateElement(operation)) {
      const denominator = angleDenominator(operation.phi)

      this.phiInput.value = operation.phi
      this.backupCurrentPhi()
      this.angleSlider.initWithAngle(operation.phi)
      this.denominatorInput.value = denominator.toString()
      this.denominatorLabel.textContent = denominator.toString()
      this.backupCurrentDenominator()
      this.ifInput.value = operation.if
    }
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()

    this.addEventListener('angle-slider-update', this.updateAngle)
    this.phiInput.addEventListener('change', this.changePhi.bind(this))
    this.denominatorInput.addEventListener('change', this.changeDenominator.bind(this))
    this.reduceFractionCheckbox.addEventListener('change', this.changeReduceSetting.bind(this))
    this.ifInput.addEventListener('change', this.changeIf.bind(this))
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  private updateAngle(event: Event): void {
    const angleSlider = event.target
    if (!isAngleSliderElement(angleSlider)) throw new Error(`${angleSlider} must be an angle-slider`)

    this.phiInput.value = angleSlider.angle
    this.dispatchEvent(new Event('operation-inspector-update-angle', {bubbles: true}))
  }

  private backupCurrentPhi(): void {
    this.phiInput.setAttribute('data-original-value', this.phiInput.value)
  }

  private restoreOriginalPhi(): void {
    this.phiInput.value = this.phiInput.getAttribute('data-original-value')
  }

  private changePhi(): void {
    const phi = this.phiInput.value

    if (isValidAngle(phi)) {
      let newPhi: string
      const denominator = angleDenominator(phi)
      this.denominatorInput.value = denominator.toString()
      this.denominatorLabel.textContent = denominator.toString()
      this.backupCurrentDenominator()

      if (isAngleLessThan(phi, '-2π')) {
        const numerator = denominator * 2
        newPhi = `-${numerator}π/${denominator}`
        this.phiInput.value = newPhi
      } else if (isAngleGreaterThan(phi, '2π')) {
        const numerator = denominator * 2
        newPhi = `${numerator}π/${denominator}`
        this.phiInput.value = newPhi
      } else {
        newPhi = phi
      }
      this.backupCurrentPhi()
      this.angleSlider.initWithAngle(newPhi)
      this.dispatchEvent(new Event('operation-inspector-update-angle', {bubbles: true}))
    } else {
      this.restoreOriginalPhi()
    }
  }

  private changeIf(): void {
    this.dispatchEvent(new Event('operation-inspector-update-if', {bubbles: true}))
  }

  private backupCurrentDenominator(): void {
    this.denominatorInput.setAttribute('data-original-value', this.denominatorInput.value)
  }

  private restoreOriginalDenominator(): void {
    const value = this.denominatorInput.getAttribute('data-original-value')

    this.denominatorInput.value = value
    this.denominatorLabel.textContent = value
  }

  private changeDenominator(): void {
    const denominator = this.denominatorInput.value

    if (isNumeric(denominator) && parseInt(denominator) > 1) {
      this.denominatorLabel.textContent = denominator
      this.angleSlider.denominator = parseInt(denominator)

      const [radian, angle] = this.angleSlider.findSnapAngle(this.angleSlider.radian)
      this.phiInput.value = angle
      this.angleSlider.radian = radian
      this.angleSlider.angle = angle
    } else {
      this.restoreOriginalDenominator()
    }
  }

  private changeReduceSetting(): void {
    this.dispatchEvent(new Event('operation-inspector-update-angle', {bubbles: true}))
  }
}
