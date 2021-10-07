import { Breakpoint, Util, classNameFor } from "lib/base"
import { Complex, PARSE_COMPLEX_TOKEN_MAP_RAD, parseFormula } from "lib/math"
import {
  isDisableable,
  isFlaggable,
  isIfable,
  isPhiable,
  isThetable,
} from "lib/instructions"
import noUiSlider, {
  PipsMode,
  API as noUiSliderApi,
  target as noUiSliderTarget,
} from "nouislider"
import tippy, { Instance, Props, roundArrow } from "tippy.js"
import Fraction from "fraction.js"
import { Instruction } from "lib/operation"
import { RxGateElement } from "rx_gate_component/rxGateElement"
import { RyGateElement } from "ry_gate_component/ryGateElement"
import { RzGateElement } from "rz_gate_component/rzGateElement"

export class GatePopup {
  onUpdate!: () => void
  popup: Instance<Props> | null | undefined
  currentAngle!: string | null
  currentAngleDenominator!: number | null

  show(element: HTMLElement): void {
    if (Breakpoint.isMobile()) return

    // const instruction = Instruction.create(element)
    // if (
    //   !(
    //     isFlaggable(instruction) ||
    //     isIfable(instruction) ||
    //     isThetable(instruction) ||
    //     isPhiable(instruction)
    //   )
    // ) {
    //   return
    // }

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
      theme: "qni",
      // trigger: "manual", // debug
      onShow(instance) {
        const operation = instance.reference as
          | RxGateElement
          | RyGateElement
          | RzGateElement
        const originalValue = operation.getAttribute("data-theta")

        that.input.value = originalValue!.replace(/π/g, "pi")
        that.input.addEventListener("keydown", that.inputKeydown.bind(that))

        const radian = Complex.from(
          parseFormula<number>(
            originalValue!.replace(/π/g, "pi"),
            PARSE_COMPLEX_TOKEN_MAP_RAD,
          ),
        ).real

        that.currentAngleDenominator = that.angleDenominator(originalValue!)
        that.currentAngle = that.snappedAngle(radian)
        that.createAngleSlider(operation)

        // const inst = Instruction.create(instance.reference)
        // if (isPhiable(inst) || isThetable(inst)) {
        //   that.currentAngleDenominator = that.angleDenominator(inst.angle)
        //   that.currentAngle = that.snappedAngle(inst.radian)
        //   that.createAngleSlider(inst)
        // }
      },
      onHide() {
        if (that.isAngleSliderActive()) return false
      },
      onHidden(instance) {
        // const inst = Instruction.create(instance.reference)
        // if (isPhiable(inst) || isThetable(inst)) {
        //   that.reduceInstructionAngle(inst)
        //   that.runCircuit()
        //   that.destroyAngleSlider()
        // }

        const operation = instance.reference as
          | RxGateElement
          | RyGateElement
          | RzGateElement

        that.reduceInstructionAngle(operation)
        that.destroyAngleSlider()
        operation.dispatchEvent(
          new Event("operation.update", { bubbles: true }),
        )
        instance.destroy()
      },
    })
    this.popup.show()
  }

  private updateInstructionAngle(
    operation: RxGateElement | RyGateElement | RzGateElement,
    angle: string,
  ): void {
    this.input.value = angle

    operation.theta = angle.replace(/pi/g, "π")
    // if (isPhiable(instruction)) {
    //   if (instruction.targets.length > 2) {
    //     for (const each of instruction.cphaseTargetInstructions()) {
    //       each.phi = angle
    //     }
    //   } else {
    //     instruction.phi = angle
    //     instruction.circuitDropzone.circuitStep.updateGateConnections()
    //   }
    // } else if (isThetable(instruction)) {
    //   instruction.theta = angle
    // }
  }

  private reduceInstructionAngle(
    operation: RxGateElement | RyGateElement | RzGateElement,
  ): void {
    const angle = this.beautifyFraction(
      operation.theta.replace(/π/g, "pi"),
      true,
    )

    operation.theta = angle.replace(/pi/g, "π")

    // if (isPhiable(instruction)) {
    //   if (instruction.targets.length > 0) {
    //     for (const each of instruction.cphaseTargetInstructions()) {
    //       each.phi = angle
    //     }
    //   } else {
    //     instruction.phi = angle
    //   }
    // } else if (isThetable(instruction)) {
    //   instruction.theta = angle
    // }
  }

  private snappedAngle(angle: number): string {
    Util.notNull(this.currentAngleDenominator)

    const unit = Math.PI / this.currentAngleDenominator
    const i = Math.round(angle / unit)

    return this.beautifyFraction(`${i}pi/${this.currentAngleDenominator}`)
  }

  private beautifyFraction(angle: string, reduce = false): string {
    let newAngle: string
    ;(Fraction as any).REDUCE = reduce
    const fraction = new Fraction(
      angle.replace(/(\d+)pi/g, "$1").replace(/pi/g, "1"),
    )

    const coefficient = fraction.valueOf()
    const d = fraction.d

    if (coefficient === 0) {
      newAngle = "0"
    } else if (coefficient > 2) {
      newAngle = d === 1 ? "2pi" : `${2 * d}pi/${d}`
    } else if (coefficient < -2) {
      newAngle = d === 1 ? "-2pi" : `-${2 * d}pi/${d}`
    } else {
      const n = fraction.n
      const sign = fraction.s === -1 ? "-" : ""
      const numerator = n === 1 ? `${sign}pi` : `${sign}${n}pi`
      newAngle = d === 1 ? `${numerator}` : `${numerator}/${d}`
    }

    return newAngle
  }

  private get originalValue(): string | null {
    const instruction = Instruction.create(this.popupReferenceEl)

    if (isFlaggable(instruction)) return instruction.flag
    if (
      isIfable(instruction) &&
      !isThetable(instruction) &&
      !isPhiable(instruction)
    ) {
      return instruction.if
    }
    if (isThetable(instruction)) return instruction.theta
    if (isPhiable(instruction)) return instruction.phi

    throw new Error("Should not reach here")
  }

  private popupHtml(el: HTMLElement): string {
    // const instruction = Instruction.create(el)
    // let popupType = null

    // if (isFlaggable(instruction)) popupType = "flag"
    // if (
    //   isIfable(instruction) &&
    //   !isThetable(instruction) &&
    //   !isPhiable(instruction)
    // ) {
    //   popupType = "if"
    // }
    // if (isThetable(instruction)) popupType = "theta"
    // if (isPhiable(instruction)) popupType = "phi"

    const popupType = "phi"

    Util.notNull(popupType)

    const popupEl = document.getElementById(`gate-popup--${popupType}`)
    Util.notNull(popupEl)

    return popupEl.innerHTML
  }

  private get input(): HTMLInputElement {
    Util.notNull(this.popup)

    const el = this.popup.popper.getElementsByTagName("input").item(0)
    Util.notNull(el)

    return el
  }

  private inputKeydown(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      Util.notNull(this.popup)
      this.popup.popper.classList.remove("gate-popup--error")
      const inputValue = this.input.value

      try {
        // const instruction = Instruction.create(this.popupReferenceEl)
        const operation = this.popupReferenceEl as
          | RxGateElement
          | RyGateElement
          | RzGateElement

        // if (isFlaggable(operation)) this.flag = inputValue

        // if (
        //   isIfable(operation) &&
        //   !isThetable(operation) &&
        //   !isPhiable(operation)
        // ) {
        //   this.if = inputValue
        // }

        Util.notNull(this.currentAngle)
        Util.notNull(this.currentAngleDenominator)

        let newAngle = inputValue

        if (
          this.angleNumerator(this.currentAngle) ===
            this.angleNumerator(inputValue) &&
          this.currentAngleDenominator !== this.angleDenominator(inputValue)
        ) {
          const m =
            this.angleDenominator(inputValue) / this.currentAngleDenominator
          newAngle = `${Math.round(
            m * this.angleNumerator(this.currentAngle),
          )}pi/${this.angleDenominator(inputValue)}`
        }

        this.currentAngleDenominator = this.angleDenominator(inputValue)
        this.angleSliderEl.noUiSlider?.set(this.radian(newAngle))
        operation.theta = this.beautifyFraction(newAngle, false).replace(
          /pi/g,
          "π",
        )

        // if (isThetable(operation) || isPhiable(operation)) {
        //   Util.notNull(this.currentAngle)
        //   Util.notNull(this.currentAngleDenominator)

        //   let newAngle = inputValue

        //   if (
        //     this.angleNumerator(this.currentAngle) ===
        //       this.angleNumerator(inputValue) &&
        //     this.currentAngleDenominator !== this.angleDenominator(inputValue)
        //   ) {
        //     const m =
        //       this.angleDenominator(inputValue) / this.currentAngleDenominator
        //     newAngle = `${Math.round(
        //       m * this.angleNumerator(this.currentAngle),
        //     )}pi/${this.angleDenominator(inputValue)}`
        //   }

        //   this.currentAngleDenominator = this.angleDenominator(inputValue)
        //   this.angleSliderEl.noUiSlider?.set(this.radian(newAngle))
        //   operation.angle = this.beautifyFraction(newAngle, false)
        // }

        this.runCircuit()
      } catch (e) {
        Util.notNull(this.popup)
        this.popup.popper.classList.add("gate-popup--error")
      }
    }
  }

  private set flag(flag: string | null) {
    const instruction = Instruction.create(this.popupReferenceEl)

    if (!flag || flag.trim().length === 0) {
      if (isFlaggable(instruction)) instruction.flag = null
      if (isDisableable(instruction)) instruction.disabled = false
    } else {
      if (isFlaggable(instruction)) instruction.flag = flag
    }
  }

  private set if(ifValue: string | null) {
    const instruction = Instruction.create(this.popupReferenceEl)

    if (!ifValue || ifValue.trim().length === 0) {
      if (isIfable(instruction)) instruction.if = null
      if (isDisableable(instruction)) instruction.disabled = false
    } else {
      if (isIfable(instruction)) instruction.if = ifValue
    }
  }

  private runCircuit(): void {
    // console.log("runCircuit")
    // this.editorElement.dispatchEvent(new CustomEvent("circuitUpdateEvent"))
  }

  private get popupReferenceEl(): HTMLElement {
    Util.notNull(this.popup)

    return this.popup.reference as HTMLElement
  }

  private get editorElement(): Element {
    const el = this.popupReferenceEl.closest(".editor")
    Util.notNull(el)
    return el
  }

  private get angleSliderEl(): noUiSliderTarget {
    const el = this.popup?.popper
      .getElementsByClassName(classNameFor("angleSlider"))
      .item(0) as HTMLElement
    Util.notNull(el)

    return el
  }

  private createAngleSlider(
    operation: RxGateElement | RyGateElement | RzGateElement,
  ): void {
    const angleSliderEl = this.angleSliderEl
    const filterPips = (value: number) => {
      if (value === 0) return 1
      return value % Math.PI ? -1 : 1
    }
    const radian = Complex.from(
      parseFormula<number>(
        operation.theta.replace(/π/g, "pi"),
        PARSE_COMPLEX_TOKEN_MAP_RAD,
      ),
    ).real

    noUiSlider.create(angleSliderEl, {
      range: {
        min: -2 * Math.PI,
        max: 2 * Math.PI,
      },
      start: radian,
      pips: {
        mode: PipsMode.Positions,
        values: [0, 25, 50, 75, 100],
        filter: filterPips,
        format: {
          to: (value) => {
            const nPi = value / Math.PI
            if (nPi === 0) return "0"
            if (nPi === -1) return "-π"
            if (nPi === 1) return "π"
            return `${nPi}π`
          },
        },
      },
      cssPrefix: `${classNameFor("angleSlider")}-`,
    })
    angleSliderEl.classList.remove("hidden")

    const slider = angleSliderEl.noUiSlider as noUiSliderApi
    slider.on("update", (values) => {
      const snappedAngle = this.snappedAngle(values[0] as number)
      if (this.currentAngle !== snappedAngle) {
        this.currentAngle = snappedAngle
        this.updateInstructionAngle(operation, snappedAngle)
        operation.dispatchEvent(
          new Event("operation.change", { bubbles: true }),
        )
      }
    })
  }

  private destroyAngleSlider(): void {
    this.angleSliderEl.noUiSlider?.destroy()
  }

  private isAngleSliderActive(): boolean {
    return (
      this.popup?.popper
        .getElementsByClassName(classNameFor("angleSlider:state:active"))
        .item(0) !== null
    )
  }

  private radian(angle: string): number {
    const fraction = new Fraction(
      angle.replace(/(\d+)pi/g, "$1").replace(/pi/g, "1"),
    )
    return fraction.valueOf() * Math.PI
  }

  private angleNumerator(angle: string): number {
    ;(Fraction as any).REDUCE = false

    const fraction = new Fraction(
      angle.replace(/(\d+)pi/g, "$1").replace(/pi/g, "1"),
    )
    return fraction.s * fraction.n
  }

  private angleDenominator(angle: string): number {
    ;(Fraction as any).REDUCE = false

    const fraction = new Fraction(
      angle
        .replace(/π/g, "pi")
        .replace(/(\d+)pi/g, "$1")
        .replace(/pi/g, "1"),
    )
    return fraction.d
  }
}
