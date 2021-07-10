import { Util, classNameFor } from "lib/base"
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
    return `<div class="flex flex-col">
<div class="mb-2">Local state</div>
<div class="whitespace-nowrap">r: <span class="font-bold">${this.d}</span>, ϕ: <span class="font-bold">${this.phi}°</span>, θ: <span class="font-bold">${this.theta}°</span></div>
<div class="whitespace-nowrap">x: <span class="font-bold">${this.x}</span>, y: <span class="font-bold">${this.y}</span>, z: <span class="font-bold">${this.z}</span></div>
</div>`
  }

  private get d(): string {
    return this.data.get("d") || "N/A"
  }

  private get phi(): string {
    return this.data.get("phi") || "N/A"
  }

  private get theta(): string {
    return this.data.get("theta") || "N/A"
  }

  private get x(): string {
    return this.data.get("x") || "N/A"
  }

  private get y(): string {
    return this.data.get("y") || "N/A"
  }

  private get z(): string {
    return this.data.get("z") || "N/A"
  }

  private isCircuitDraggable(): boolean {
    return this.element.classList.contains(
      classNameFor("draggable:type:circuit"),
    )
  }
}
