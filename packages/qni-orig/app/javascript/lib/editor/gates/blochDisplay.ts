import { Instructionable } from "./mixins"
import { Mixin } from "ts-mixer"
import {
  Util,
  instructionNameFor,
  attributeNameFor,
  classNameFor,
} from "lib/base"

export type BlochDisplayInstruction = {
  type: string
}

export class BlochDisplay extends Mixin(Instructionable) {
  constructor(element: HTMLElement | Element) {
    super()
    this.element = this.validateElementClassName(element, "display:bloch")
  }

  draw(x: number, y: number, z: number): void {
    const θ = Math.max(
      0,
      Math.PI / 2 - Math.atan2(-z, Math.sqrt(y * y + x * x)),
    )

    this.d = parseFloat(Math.sqrt(x * x + y * y + z * z).toFixed(4))
    this.phi = (180 * Math.atan2(y, -x)) / Math.PI
    this.theta = (180 * θ) / Math.PI
    this.x = -x
    this.y = y
    this.z = -z

    this.vectorLineEl().style.height = `calc(${(100 * this.d) / 2}% - 3px)`
    this.vectorEndEl().style.bottom = `calc(50% + ${(100 * this.d) / 2}% + 2px)`
    if (this.d != 0) {
      this.vectorEl().style.transform = `rotateY(${
        this.phi - 180
      }deg) rotateX(${this.theta}deg)`
    }

    this.element.dispatchEvent(
      new CustomEvent("blochDisplayUpdated", { bubbles: false }),
    )
  }

  serialize(): BlochDisplayInstruction {
    return {
      type: instructionNameFor("display:bloch"),
    }
  }

  toJson(): string {
    return `"${instructionNameFor("display:bloch")}"`
  }

  private get d(): number {
    const attr = this.element.getAttribute(
      attributeNameFor("instruction:bloch:d"),
    )
    Util.notNull(attr)

    return parseFloat(attr)
  }

  private set d(value: number) {
    this.element.setAttribute(
      attributeNameFor("instruction:bloch:d"),
      value.toString(),
    )
  }

  private get phi(): number {
    const attr = this.element.getAttribute(
      attributeNameFor("instruction:bloch:phi"),
    )
    Util.notNull(attr)

    return parseFloat(attr)
  }

  private set phi(value: number) {
    this.element.setAttribute(
      attributeNameFor("instruction:bloch:phi"),
      value.toString(),
    )
  }

  private get theta(): number {
    const attr = this.element.getAttribute(
      attributeNameFor("instruction:bloch:theta"),
    )
    Util.notNull(attr)

    return parseFloat(attr)
  }

  private set theta(value: number) {
    this.element.setAttribute(
      attributeNameFor("instruction:bloch:theta"),
      value.toString(),
    )
  }

  private set x(value: number) {
    this.element.setAttribute(
      attributeNameFor("instruction:bloch:x"),
      value.toString(),
    )
  }

  private set y(value: number) {
    this.element.setAttribute(
      attributeNameFor("instruction:bloch:y"),
      value.toString(),
    )
  }

  private set z(value: number) {
    this.element.setAttribute(
      attributeNameFor("instruction:bloch:z"),
      value.toString(),
    )
  }

  private vectorEl(): HTMLElement {
    const el = this.element
      .getElementsByClassName(classNameFor("display:bloch:vector"))
      .item(0) as HTMLElement
    Util.notNull(el)

    return el
  }

  private vectorLineEl(): HTMLElement {
    const el = this.element
      .getElementsByClassName(classNameFor("display:bloch:vector:line"))
      .item(0) as HTMLElement
    Util.notNull(el)

    return el
  }

  private vectorEndEl(): HTMLElement {
    const el = this.element
      .getElementsByClassName(classNameFor("display:bloch:vector:end"))
      .item(0) as HTMLElement
    Util.notNull(el)

    return el
  }
}
