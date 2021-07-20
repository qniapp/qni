import tippy, { Instance, Props, roundArrow } from "tippy.js"
import { Breakpoint, Util } from "lib/base"
import { Instruction } from "lib/instruction"
import {
  isDisableable,
  isFlaggable,
  isIfable,
  isThetable,
} from "lib/instructions"
import { isPhible } from "lib/instructions/phiable"

export class GatePopup {
  onUpdate!: () => void
  popup: Instance<Props> | null | undefined

  show(element: HTMLElement, onUpdate: () => void): void {
    if (Breakpoint.isMobile()) return
    const instruction = Instruction.create(element)
    if (
      !(
        isFlaggable(instruction) ||
        isIfable(instruction) ||
        isThetable(instruction) ||
        isPhible(instruction)
      )
    ) {
      return
    }

    this.onUpdate = onUpdate

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
      onShow() {
        if (that.originalValue !== null) that.input.value = that.originalValue
        that.input.addEventListener("keydown", that.inputKeydown.bind(that))
      },
      onHidden(instance) {
        instance.destroy()
      },
    })
    this.popup.show()
  }

  private get originalValue(): string | null {
    const instruction = Instruction.create(this.popupReferenceEl)

    if (isFlaggable(instruction)) return instruction.flag
    if (
      isIfable(instruction) &&
      !isThetable(instruction) &&
      !isPhible(instruction)
    ) {
      return instruction.if
    }
    if (isThetable(instruction)) return instruction.theta
    if (isPhible(instruction)) return instruction.phi

    throw new Error("Should not reach here")
  }

  private popupHtml(el: HTMLElement): string {
    const instruction = Instruction.create(el)
    let popupType = null

    if (isFlaggable(instruction)) popupType = "flag"
    if (
      isIfable(instruction) &&
      !isThetable(instruction) &&
      !isPhible(instruction)
    ) {
      popupType = "if"
    }
    if (isThetable(instruction)) popupType = "theta"
    if (isPhible(instruction)) popupType = "phi"

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
      const value = this.input.value
      try {
        const instruction = Instruction.create(this.popupReferenceEl)

        if (isFlaggable(instruction)) this.flag = value
        if (
          isIfable(instruction) &&
          !isThetable(instruction) &&
          !isPhible(instruction)
        ) {
          this.if = value
        }
        if (isThetable(instruction)) this.theta = value
        if (isPhible(instruction)) this.phi = value

        this.popup?.hide()
        this.onUpdate()
        this.runCircuit()
      } catch (e) {
        Util.notNull(this.popup)
        this.popup.popper.classList.add("gate-popup--error")
      }
    }
  }

  private set flag(flag: string | null) {
    const instruction = Instruction.create(this.popupReferenceEl)

    if (!flag || flag.trim().length == 0) {
      if (isFlaggable(instruction)) instruction.flag = null
      if (isDisableable(instruction)) instruction.disabled = false
    } else {
      if (isFlaggable(instruction)) instruction.flag = flag
    }
  }

  private set if(ifValue: string | null) {
    const instruction = Instruction.create(this.popupReferenceEl)

    if (!ifValue || ifValue.trim().length == 0) {
      if (isIfable(instruction)) instruction.if = null
      if (isDisableable(instruction)) instruction.disabled = false
    } else {
      if (isIfable(instruction)) instruction.if = ifValue
    }
  }

  private set theta(theta: string | null) {
    const instruction = Instruction.create(this.popupReferenceEl)
    if (isThetable(instruction)) {
      Util.notNull(theta)
      instruction.theta = theta
    } else {
      throw new Error("thetable")
    }
  }

  private set phi(phi: string | null) {
    const instruction = Instruction.create(this.popupReferenceEl)
    if (isPhible(instruction)) {
      Util.notNull(phi)
      instruction.phi = phi
    } else {
      throw new Error("phible")
    }
  }

  private runCircuit(): void {
    this.editorElement.dispatchEvent(new CustomEvent("circuitUpdateEvent"))
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
}
