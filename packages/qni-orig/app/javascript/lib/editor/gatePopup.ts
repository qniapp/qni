import tippy, { Instance, Props } from "tippy.js"
import { InternalError } from "lib/error"
import { attributeNameFor, classNameFor, Breakpoint, Util } from "lib/base"
import { parse } from "mathjs"

export class GatePopup {
  onUpdate!: () => void
  popup: Instance<Props> | null | undefined

  show(element: HTMLElement, onUpdate: () => void): void {
    if (Breakpoint.isMobile()) return
    if (element.dataset.gatePopupType === undefined) return
    this.onUpdate = onUpdate

    this.popup = tippy(element, {
      allowHTML: true,
      appendTo: document.body,
      content: this.popupHtml(element),
      duration: [0, 0],
      interactive: true,
      theme: "qni",
      onHidden(instance) {
        instance.destroy()
      },
    })
    this.popup.show()

    if (this.originalValue !== null) this.input.value = this.originalValue
    this.input.addEventListener("keydown", this.inputKeydown.bind(this))
    this.input.focus()
  }

  private get originalValue(): string | null {
    if (this.isSettable) return this.set
    if (this.isIfable) return this.if
    if (this.isPhiable) return this.phi

    throw new Error("Should not reach here")
  }

  private popupHtml(el: HTMLElement): string {
    const type = el.dataset.gatePopupType
    if (type === undefined) throw new Error("gate popup type not set")

    const popupEl = document.getElementById(`gate-popup--${type}`)
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
        if (this.isSettable) this.set = value
        if (this.isIfable) this.if = value
        if (this.isPhiable) this.phi = value
        this.popup?.hide()
        this.onUpdate()
        this.runCircuit()
      } catch (e) {
        Util.notNull(this.popup)
        this.popup.popper.classList.add("gate-popup--error")
      }
    }
  }

  private get isSettable(): boolean {
    return this.popupReferenceEl.classList.contains(
      classNameFor("gate:type:readout"),
    )
  }

  private get set(): string | null {
    return this.popupReferenceEl.getAttribute(
      attributeNameFor("instruction:set"),
    )
  }

  private set set(set: string | null) {
    let labelString

    if (!set || set.trim().length == 0) {
      this.popupReferenceEl.removeAttribute(attributeNameFor("instruction:set"))
      labelString = ""
    } else {
      this.popupReferenceEl.setAttribute(
        attributeNameFor("instruction:set"),
        set,
      )
      labelString = set
    }
    this.dataGateLabel = labelString
  }

  private get isIfable(): boolean {
    return this.popupReferenceEl.classList.contains(
      classNameFor("gate:mixin:ifable"),
    )
  }

  private get if(): string | null {
    return this.popupReferenceEl.getAttribute(
      attributeNameFor("instruction:if"),
    )
  }

  private set if(ifValue: string | null) {
    let labelString

    if (!ifValue || ifValue.trim().length == 0) {
      this.popupReferenceEl.removeAttribute(attributeNameFor("instruction:if"))
      this.popupReferenceEl.classList.remove(
        classNameFor("gate:state:disabled"),
      )
      labelString = ""
    } else {
      this.popupReferenceEl.setAttribute(
        attributeNameFor("instruction:if"),
        ifValue,
      )
      labelString = `if ${ifValue}`
    }
    this.dataGateLabel = labelString
  }

  private get isPhiable(): boolean {
    return this.popupReferenceEl.classList.contains(
      classNameFor("gate:mixin:phiable"),
    )
  }

  private get phi(): string | null {
    return this.popupReferenceEl.getAttribute(
      attributeNameFor("instruction:phi"),
    )
  }

  private set phi(phi: string | null) {
    const phiString = this.validatePhiString(phi)

    this.popupReferenceEl.setAttribute(
      attributeNameFor("instruction:phi"),
      phiString,
    )
    this.dataGateLabel = phiString.replace("pi", "π")
  }

  private set dataGateLabel(label: string) {
    this.popupReferenceEl.dataset.gateLabel = label
  }

  private validatePhiString(phi: string | null): string {
    if (!phi || phi.trim().length == 0) {
      throw new InternalError("Phi not set")
    }
    if (isNaN(parse(phi).evaluate())) {
      throw new InternalError("Invalid phi")
    }

    return phi
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
