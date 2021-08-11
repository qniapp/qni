import { Util, classNameFor, idFor } from "lib/base"
import { Controller } from "stimulus"
import tippy, { Instance, ReferenceElement, roundArrow } from "tippy.js"

export default class BlochDisplayController extends Controller {
  connect(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    tippy(this.element, {
      allowHTML: true,
      animation: false,
      arrow: roundArrow + roundArrow,
      delay: 0,
      theme: "qni",
      onShow(instance: Instance) {
        if (!that.isCircuitDraggable()) return false
        instance.setContent(that.popupContent())
      },
    })
  }

  disconnect(): void {
    this.popup().destroy()
  }

  updatePopup(): void {
    this.popup().setContent(this.popupContent())
  }

  private popup(): Instance {
    const instance = (this.element as ReferenceElement)._tippy
    Util.notNull(instance)

    return instance
  }

  private popupContent(): string {
    const contentEl = document.getElementById(idFor("display:bloch:popup"))
    Util.notNull(contentEl)

    const dEl = contentEl
      .getElementsByClassName(classNameFor("display:bloch:popup:d"))
      .item(0)
    Util.notNull(dEl)
    const phiEl = contentEl
      .getElementsByClassName(classNameFor("display:bloch:popup:phi"))
      .item(0)
    Util.notNull(phiEl)
    const thetaEl = contentEl
      .getElementsByClassName(classNameFor("display:bloch:popup:theta"))
      .item(0)
    Util.notNull(thetaEl)
    const xEl = contentEl
      .getElementsByClassName(classNameFor("display:bloch:popup:x"))
      .item(0)
    Util.notNull(xEl)
    const yEl = contentEl
      .getElementsByClassName(classNameFor("display:bloch:popup:y"))
      .item(0)
    Util.notNull(yEl)
    const zEl = contentEl
      .getElementsByClassName(classNameFor("display:bloch:popup:z"))
      .item(0)
    Util.notNull(zEl)

    dEl.textContent = this.d
    phiEl.textContent = `${this.phi}°`
    thetaEl.textContent = `${this.theta}°`
    xEl.textContent = this.x
    yEl.textContent = this.y
    zEl.textContent = this.z

    return contentEl.innerHTML
  }

  private get d(): string {
    const d = parseFloat(this.element.getAttribute("data-d") || "NaN")
    return this.forceSignedValue(d).toString()
  }

  private get phi(): string {
    const phi = parseFloat(this.element.getAttribute("data-phi") || "NaN")
    return this.forceSignedAngle(phi).toString()
  }

  private get theta(): string {
    const theta = parseFloat(this.element.getAttribute("data-theta") || "NaN")
    return this.forceSignedAngle(theta).toString()
  }

  private get x(): string {
    const x = parseFloat(this.element.getAttribute("data-x") || "NaN")
    return this.forceSignedValue(x).toString()
  }

  private get y(): string {
    const y = parseFloat(this.element.getAttribute("data-y") || "NaN")
    return this.forceSignedValue(y).toString()
  }

  private get z(): string {
    const z = parseFloat(this.element.getAttribute("data-z") || "NaN")
    return this.forceSignedValue(z).toString()
  }

  private forceSignedValue(value: number): string {
    return (value >= 0 ? "+" : "") + value.toFixed(4)
  }

  private forceSignedAngle(angle: number): string {
    return (angle >= 0 ? "+" : "") + angle.toFixed(2)
  }

  private isCircuitDraggable(): boolean {
    return this.element.classList.contains(
      classNameFor("draggable:type:circuit"),
    )
  }
}
