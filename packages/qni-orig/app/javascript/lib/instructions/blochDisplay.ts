import { Util, attributeNameFor, classNameFor } from "lib/base"
import { InstructionWithElement } from "./instructionWithElement"

export const BLOCH_DISPLAY_INSTRUCTION_TYPE = "Bloch"

export type BlochDisplayInstruction = {
  type: typeof BLOCH_DISPLAY_INSTRUCTION_TYPE
}

export class BlochDisplay extends InstructionWithElement {
  static readonly elementClassName = classNameFor("display:bloch")

  draw(x: number, y: number, z: number): void {
    const θ = Math.max(0, Math.PI / 2 - Math.atan2(z, Math.sqrt(y * y + x * x)))

    this.d = parseFloat(Math.sqrt(x * x + y * y + z * z).toFixed(4))
    this.phi = (Math.atan2(y, x) * 180) / Math.PI
    this.theta = (180 * θ) / Math.PI
    this.x = x
    this.y = y
    this.z = z

    this.vectorLineEl.style.height = `calc(${(100 * this.d) / 2}% - 3px)`
    this.vectorEndEl.style.bottom = `calc(50% + ${(100 * this.d) / 2}% + 2px)`
    if (this.d != 0) {
      this.vectorEl.style.transform = `rotateY(${this.phi}deg) rotateX(${-this
        .theta}deg)`
    }

    this.element.dispatchEvent(
      new CustomEvent("blochDisplayUpdated", { bubbles: false }),
    )
  }

  serialize(): BlochDisplayInstruction {
    return {
      type: BLOCH_DISPLAY_INSTRUCTION_TYPE,
    }
  }

  toJson(): string {
    return `"${BLOCH_DISPLAY_INSTRUCTION_TYPE}"`
  }

  private set d(value: number) {
    this.setAttribute("instruction:bloch:d", value)
  }

  private get d(): number {
    return parseFloat(this.getAttribute("instruction:bloch:d"))
  }

  private set phi(value: number) {
    this.setAttribute("instruction:bloch:phi", value)
  }

  private get phi(): number {
    return parseFloat(this.getAttribute("instruction:bloch:phi"))
  }

  private set theta(value: number) {
    this.setAttribute("instruction:bloch:theta", value)
  }

  private get theta(): number {
    return parseFloat(this.getAttribute("instruction:bloch:theta"))
  }

  private set x(value: number) {
    this.setAttribute("instruction:bloch:x", value)
  }

  private set y(value: number) {
    this.setAttribute("instruction:bloch:y", value)
  }

  private set z(value: number) {
    this.setAttribute("instruction:bloch:z", value)
  }

  private get vectorLineEl(): HTMLElement {
    return this.getElement("display:bloch:vector:line")
  }

  private get vectorEndEl(): HTMLElement {
    return this.getElement("display:bloch:vector:end")
  }

  private get vectorEl(): HTMLElement {
    return this.getElement("display:bloch:vector")
  }

  private setAttribute(name: string, value: number) {
    this.element.setAttribute(attributeNameFor(name), value.toString())
  }

  private getAttribute(name: string): string {
    const attr = this.element.getAttribute(attributeNameFor(name))
    Util.notNull(attr)

    return attr
  }

  private getElement(name: string): HTMLElement {
    const className = classNameFor(name)
    const el = this.element.getElementsByClassName(className).item(0)
    Util.notNull(el)

    return el as HTMLElement
  }
}
