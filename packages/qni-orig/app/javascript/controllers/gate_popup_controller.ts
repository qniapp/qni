import tippy, { Instance, Props } from "tippy.js"
import { Controller } from "stimulus"
import { InternalError } from "lib/error"
import { attributeNameFor, classNameFor, Breakpoint } from "lib/base"
import { parse } from "mathjs"

export default class GatePopupController extends Controller {
  static targets = ["content", "topLabel", "bottomLabel"]
  declare readonly contentTarget: HTMLInputElement
  declare readonly topLabelTarget: HTMLInputElement
  declare readonly bottomLabelTarget: HTMLInputElement

  private popup: Instance<Props> | undefined

  connect(): void {
    this.element.addEventListener("ShowGatePopupEvent", this.show.bind(this))
  }

  disconnect(): void {
    this.element.removeEventListener("ShowGatePopupEvent", this.show.bind(this))
    this.popup?.destroy()
  }

  show(): void {
    if (Breakpoint.isMobile()) return

    this.popup = tippy(this.element, {
      allowHTML: true,
      content: this.contentTarget.innerHTML,
      duration: [0, 0],
      theme: "light-border",
    })
    this.popup.show()
    if (this.isSettable && this.set) this.input.value = this.set
    if (this.isIfable && this.if) this.input.value = this.if
    if (this.isThetable && this.theta) this.input.value = this.theta
    this.input.addEventListener("keydown", this.inputKeydown.bind(this))
    this.input.focus()
  }

  private get input(): HTMLInputElement {
    const el = this.popup?.popper.getElementsByTagName("input").item(0)
    if (!el) throw new InternalError("input element not found")

    return el
  }

  private inputKeydown(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      const value = this.input.value
      try {
        if (this.isSettable) this.set = value
        if (this.isIfable) this.if = value
        if (this.isThetable) this.theta = value
        this.popup?.hide()
        this.circuitUpdated()
      } catch (e) {
        this.input.classList.add("gate-popup__input--error")
        this.inputError.classList.remove("invisible")
      }
    }
  }

  private get isSettable(): boolean {
    return this.element.classList.contains(classNameFor("gate:type:readout"))
  }

  private get set(): string | null {
    return this.element.getAttribute(attributeNameFor("instruction:set"))
  }

  private set set(set: string | null) {
    let labelString

    if (!set || set.trim().length == 0) {
      this.element.removeAttribute(attributeNameFor("instruction:set"))
      labelString = ""
    } else {
      this.element.setAttribute(attributeNameFor("instruction:set"), set)
      labelString = set
    }

    this.topLabelTarget.innerText = labelString
    this.bottomLabelTarget.innerText = labelString
  }

  private get isIfable(): boolean {
    return this.element.classList.contains(classNameFor("gate:mixin:ifable"))
  }

  private get if(): string | null {
    return this.element.getAttribute(attributeNameFor("instruction:if"))
  }

  private set if(ifValue: string | null) {
    let labelString

    if (!ifValue || ifValue.trim().length == 0) {
      this.element.removeAttribute(attributeNameFor("instruction:if"))
      this.element.classList.remove(classNameFor("gate:state:disabled"))
      labelString = ""
    } else {
      this.element.setAttribute(attributeNameFor("instruction:if"), ifValue)
      labelString = `if ${ifValue}`
    }

    this.topLabelTarget.innerText = labelString
    this.bottomLabelTarget.innerText = labelString
  }

  private get isThetable(): boolean {
    return this.element.classList.contains(classNameFor("gate:mixin:thetable"))
  }

  private get theta(): string | null {
    return this.element.getAttribute(attributeNameFor("instruction:theta"))
  }

  private set theta(theta: string | null) {
    const thetaString = this.validateThetaString(theta)

    this.element.setAttribute(
      attributeNameFor("instruction:theta"),
      thetaString,
    )
    this.topLabelTarget.innerText = thetaString.replace("pi", "π")
    this.bottomLabelTarget.innerText = thetaString.replace("pi", "π")
  }

  private validateThetaString(theta: string | null): string {
    if (!theta || theta.trim().length == 0) {
      throw new InternalError("Theta not set")
    }
    if (isNaN(parse(theta).evaluate())) {
      throw new InternalError("Invalid theta")
    }

    return theta
  }

  private circuitUpdated(): void {
    this.editorElement.dispatchEvent(new CustomEvent("circuitUpdateEvent"))
  }

  private get inputError(): Element {
    const el = this.popup?.popper
      .getElementsByClassName("gate-popup__input-error")
      .item(0)
    if (!el) throw new InternalError("input error element not found")

    return el
  }

  private get editorElement(): Element {
    const el = this.element.closest(".editor")
    if (!el) throw new InternalError("Editor element not found")

    return el
  }
}
