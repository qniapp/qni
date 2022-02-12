import {AngleSliderElement, isAngleSliderElement} from './angle-slider-element'
import {Angleable, Ifable, isAngleable, isIfable} from './mixin'
import {Flaggable, isFlaggable} from './mixin/flaggable'
import {Operation, isPhaseGateElement, isRxGateElement, isRyGateElement, isRzGateElement} from './operation'
import {Util, angleDenominator, isAngleGreaterThan, isAngleLessThan, isValidAngle, reduceAngle} from '@qni/common'
import {attr, controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {isNumeric} from './util'

export class OperationInspectorElement extends HTMLElement {
  @target ifInput!: HTMLInputElement
  @target angleInputLabel!: HTMLLabelElement
  @target angleInput!: HTMLInputElement
  @target angleSlider!: AngleSliderElement
  @target denominatorInput!: HTMLInputElement
  @target denominatorVariableLabel!: HTMLSpanElement
  @target denominatorLabel!: HTMLSpanElement
  @target reduceAngleFractionCheckbox!: HTMLInputElement
  @target flagInput!: HTMLInputElement

  @attr conditionalGatePaneDisabled = true
  @attr anglePaneDisabled = true
  @attr conditionalFlagPaneDisabled = true

  get if(): string {
    return this.ifInput.value
  }

  get angle(): string {
    return this.angleInput.value
  }

  get reducedAngle(): string {
    return reduceAngle(this.angleInput.value)
  }

  get reduceAngleFraction(): boolean {
    return this.reduceAngleFractionCheckbox.checked
  }

  get flag(): string {
    return this.flagInput.value
  }

  set operation(operation: Ifable | Angleable | Flaggable | Operation) {
    this.clear()
    this.disableAllPanes()

    if (isIfable(operation)) {
      this.conditionalGatePaneDisabled = false
      this.ifInput.value = operation.if
    }

    if (isAngleable(operation)) {
      const denominator = angleDenominator(operation.angle)

      if (isPhaseGateElement(operation)) {
        this.angleInputLabel.textContent = '𝜑'
        this.denominatorVariableLabel.textContent = '𝜑'
      } else if (isRxGateElement(operation) || isRyGateElement(operation) || isRzGateElement(operation)) {
        this.angleInputLabel.textContent = '𝛳'
        this.denominatorVariableLabel.textContent = '𝛳'
      }

      this.anglePaneDisabled = false
      this.angleInput.value = operation.angle
      this.backupCurrentPhi()
      this.angleSlider.angle = operation.angle
      this.denominatorInput.value = denominator.toString()
      this.denominatorLabel.textContent = denominator.toString()
      this.backupCurrentDenominator()
      this.reduceAngleFractionCheckbox.checked = operation.reducedAngle !== ''
    }

    if (isFlaggable(operation)) {
      this.conditionalFlagPaneDisabled = false
      this.flagInput.value = operation.flag
    }
  }

  private clear(): void {
    this.ifInput.value = ''
    this.angleInput.value = ''
    this.angleSlider.angle = ''
    this.denominatorInput.value = ''
    this.reduceAngleFractionCheckbox.checked = false
    this.flagInput.value = ''
  }

  disableAllPanes(): void {
    this.conditionalGatePaneDisabled = true
    this.anglePaneDisabled = true
    this.conditionalFlagPaneDisabled = true
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({mode: 'open'})
    this.update()

    this.addEventListener('angle-slider-change', this.changeAngle)
    this.addEventListener('angle-slider-update', this.updateAngle)
    this.ifInput.addEventListener('change', this.changeIf.bind(this))
    this.angleInput.addEventListener('change', this.updateAngleInput.bind(this))
    this.denominatorInput.addEventListener('change', this.changeDenominator.bind(this))
    this.reduceAngleFractionCheckbox.addEventListener('change', this.changeReduceSetting.bind(this))
    this.flagInput.addEventListener('change', this.changeFlag.bind(this))
  }

  update(): void {
    render(html`<slot></slot>`, this.shadowRoot!)
  }

  private changeAngle(event: Event): void {
    const angleSlider = event.target
    if (!isAngleSliderElement(angleSlider)) throw new Error(`${angleSlider} isn't an angle-slider`)

    this.angleInput.value = angleSlider.angle
    this.dispatchEvent(new Event('operation-inspector-angle-change', {bubbles: true}))
  }

  private updateAngle(event: Event): void {
    const angleSlider = event.target
    if (!isAngleSliderElement(angleSlider)) throw new Error(`${angleSlider} isn't an angle-slider`)

    this.angleInput.value = angleSlider.angle
    this.dispatchEvent(new Event('operation-inspector-angle-update', {bubbles: true}))
  }

  private backupCurrentPhi(): void {
    this.angleInput.setAttribute('data-original-value', this.angleInput.value)
  }

  private restoreOriginalPhi(): void {
    const value = this.angleInput.getAttribute('data-original-value')
    Util.notNull(value)

    this.angleInput.value = value
  }

  private changeIf(): void {
    this.dispatchEvent(new Event('operation-inspector-if-change', {bubbles: true}))
  }

  private updateAngleInput(): void {
    const angle = this.angleInput.value

    if (isValidAngle(angle)) {
      let newAngle: string
      const denominator = angleDenominator(angle)
      this.denominatorInput.value = denominator.toString()
      this.denominatorLabel.textContent = denominator.toString()
      this.backupCurrentDenominator()

      if (isAngleLessThan(angle, '-2π')) {
        const numerator = denominator * 2
        newAngle = `-${numerator}π/${denominator}`
        this.angleInput.value = newAngle
      } else if (isAngleGreaterThan(angle, '2π')) {
        const numerator = denominator * 2
        newAngle = `${numerator}π/${denominator}`
        this.angleInput.value = newAngle
      } else {
        newAngle = angle
      }
      this.backupCurrentPhi()
      this.angleSlider.angle = newAngle
      this.dispatchEvent(new Event('operation-inspector-angle-update', {bubbles: true}))
    } else {
      this.restoreOriginalPhi()
    }
  }

  private changeFlag(): void {
    this.dispatchEvent(new Event('operation-inspector-flag-change', {bubbles: true}))
  }

  private backupCurrentDenominator(): void {
    this.denominatorInput.setAttribute('data-original-value', this.denominatorInput.value)
  }

  private restoreOriginalDenominator(): void {
    const value = this.denominatorInput.getAttribute('data-original-value')
    Util.notNull(value)

    this.denominatorInput.value = value
    this.denominatorLabel.textContent = value
  }

  private changeDenominator(): void {
    const denominator = this.denominatorInput.value

    if (isNumeric(denominator) && parseInt(denominator) > 1) {
      this.denominatorLabel.textContent = denominator
      this.angleSlider.denominator = parseInt(denominator)
      this.angleInput.value = this.angleSlider.angle
    } else {
      this.restoreOriginalDenominator()
    }
  }

  private changeReduceSetting(): void {
    this.dispatchEvent(new Event('operation-inspector-angle-update', {bubbles: true}))
  }
}

controller(OperationInspectorElement)
