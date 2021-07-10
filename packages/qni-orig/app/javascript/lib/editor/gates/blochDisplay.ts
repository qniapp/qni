import { Instructionable } from "./mixins"
import { Mixin } from "ts-mixer"
import { Util } from "lib/base"

export type BlochDisplayInstruction = {
  type: "bloch"
}

export class BlochDisplay extends Mixin(Instructionable) {
  static create(element: Element): BlochDisplay {
    const blochDisplay = new BlochDisplay()
    blochDisplay.assignElement(element)
    return blochDisplay
  }

  draw(x: number, y: number, z: number): void {
    const d = Math.sqrt(x * x + y * y + z * z)
    const ϕ = Math.atan2(y, -x)
    const θ = Math.max(
      0,
      Math.PI / 2 - Math.atan2(-z, Math.sqrt(y * y + x * x)),
    )

    this.d = d
    this.phi = (180 * ϕ) / Math.PI
    this.theta = (180 * θ) / Math.PI
    this.x = -x
    this.y = y
    this.z = -z

    const rotateYDeg = (180 * ϕ) / Math.PI - 180
    const rotateXDeg = (180 * θ) / Math.PI
    this.vectorEl().style.transform = `rotateY(${rotateYDeg}deg) rotateX(${rotateXDeg}deg)`

    this.element.dispatchEvent(
      new CustomEvent("blochDisplayUpdated", { bubbles: false }),
    )
  }

  set d(value: number) {
    this.element.setAttribute(
      "data-bloch-display-d",
      this.round(value).toString(),
    )
  }

  set phi(value: number) {
    this.element.setAttribute(
      "data-bloch-display-phi",
      this.roundDeg(value).toString(),
    )
  }

  set theta(value: number) {
    this.element.setAttribute(
      "data-bloch-display-theta",
      this.roundDeg(value).toString(),
    )
  }

  set x(value: number) {
    this.element.setAttribute(
      "data-bloch-display-x",
      this.round(value).toString(),
    )
  }

  set y(value: number) {
    this.element.setAttribute(
      "data-bloch-display-y",
      this.round(value).toString(),
    )
  }

  set z(value: number) {
    this.element.setAttribute(
      "data-bloch-display-z",
      this.round(value).toString(),
    )
  }

  serialize(): BlochDisplayInstruction {
    return {
      type: "bloch",
    }
  }

  toJson(): string {
    return "\"Bloch\""
  }

  assignElement(element: Element): void {
    this.element = this.validateElementClassName(element, "display:type:bloch")
  }

  private roundDeg(value: number): number {
    return Math.round(value * 100) / 100
  }

  private round(value: number): number {
    return Math.round(value * 100000) / 100000
  }

  private vectorEl(): HTMLElement {
    const el = this.element
      .getElementsByClassName("bloch-display__vector")
      .item(0) as HTMLElement
    Util.notNull(el)

    return el
  }
}
