import { CircuitDropzone } from "./circuitDropzone"
import { DropEventHandlers } from "./mixins"
import { Elementable } from "lib/mixins"
import { CircuitElement, QubitLabel } from "./gates"
import { InternalError } from "lib/error"
import { Mixin } from "ts-mixer"
import { classNameFor } from "lib/base"

export class CircuitStep extends Mixin(Elementable) {
  static create(element: Element | null): CircuitStep {
    const circuitStep = new CircuitStep()
    circuitStep.assignElement(element)
    return circuitStep
  }

  assignElement(element: Element | null): void {
    this.element = this.validateElementClassName(element, "circuitStep")
  }

  remove(): void {
    if (
      (this.isInCircuitBlockDivider && this.isShadow) ||
      !this.isInCircuitBlockDivider
    ) {
      this.dropzones.forEach((each) => {
        each.unsetInteract()
      })
      this.element.parentNode?.removeChild(this.element)
    }
  }

  private get isInCircuitBlockDivider(): boolean {
    return this.element.closest(".circuit-block-divider") ? true : false
  }

  prependShadow(dropzoneHandlers: DropEventHandlers): void {
    const shadowSourceElement = this.shadowSourceElement.cloneNode(
      true,
    ) as HTMLElement
    shadowSourceElement.classList.remove(
      classNameFor("circuitStep:type:shadowSource"),
    )
    shadowSourceElement.classList.add(classNameFor("circuitStep:type:shadow"))
    const shadow = CircuitStep.create(shadowSourceElement)

    this.element.parentNode?.insertBefore(shadow.element, this.element)
    shadow.dropzones.forEach((each) => {
      each.setInteract(dropzoneHandlers)
    })
  }

  get index(): number {
    const circuit = this.element.closest(".circuit")
    if (!circuit) throw new Error("circuit element not found")

    const all = Array.from(
      circuit.getElementsByClassName(classNameFor("circuitStep")),
    )
    return all.indexOf(this.element)
  }

  set active(value: boolean) {
    const className = "circuit-breakpoint--active"
    const el = this.element.querySelector(".circuit-breakpoint")

    if (!el) {
      throw new Error("breakpoint element not found")
    }
    if (value) {
      el.classList.add(className)
    } else {
      el.classList.remove(className)
    }
  }

  isActive(): boolean {
    const className = "circuit-breakpoint--active"
    const el = this.element.querySelector(".circuit-breakpoint")

    if (!el) {
      throw new Error("breakpoint element not found")
    }

    return el.classList.contains(className)
  }

  set shadow(flag: boolean) {
    this.setClassName("circuitStep:type:shadow", flag)
  }

  get isShadow(): boolean {
    return this.isClassNamed("circuitStep:type:shadow")
  }

  get isEmpty(): boolean {
    return (
      this.dropzones.length != 0 &&
      this.dropzones.filter((each) => {
        return each.isOccupied()
      }).length == 0
    )
  }

  get isDivider(): boolean {
    return this.element.closest(".circuit-block-divider") ? true : false
  }

  set done(flag: boolean) {
    this.setClassName("circuitStep:state:done", flag)
  }

  get isDone(): boolean {
    return this.isClassNamed("circuitStep:state:done")
  }

  get instructions(): CircuitElement[] {
    const bodyEl = this.element
      .getElementsByClassName("circuit-step__body")
      .item(0)
    if (!bodyEl) {
      throw new Error("circuit-step body element not found")
    }

    return Array.from(bodyEl.children).map((each) => {
      if (each.classList.contains(classNameFor("dropzone:type:circuit"))) {
        return CircuitDropzone.create(each).instruction
      } else if (each.classList.contains("instruction")) {
        return QubitLabel.create(each as HTMLElement)
      } else {
        throw new Error("instruction not found")
      }
    })
  }

  gatesOf<T extends CircuitElement>(gateClass: {
    new (arg: HTMLElement): T
  }): T[] {
    const isGateClass = (obj: CircuitElement): obj is T => {
      return obj instanceof gateClass
    }
    return this.instructions.filter(isGateClass)
  }

  get controllableGates(): CircuitElement[] {
    return this.instructions.filter((each) => {
      return "controls" in each
    })
  }

  get childElements(): Element[] {
    return Array.from(this.bodyEl.children)
  }

  get lastChildElement(): Element {
    return this.childElements[this.childElements.length - 1]
  }

  appendChild(element: Element): void {
    this.bodyEl.appendChild(element)
  }

  private get bodyEl(): Element {
    const className = "circuit-step__body"
    const el = this.element.getElementsByClassName(className).item(0)

    if (!el) throw new Error(`.${className} not found`)
    return el
  }

  get dropzones(): CircuitDropzone[] {
    return Array.from(
      this.element.getElementsByClassName(
        classNameFor("dropzone:type:circuit"),
      ),
    ).map((each) => {
      return CircuitDropzone.create(each)
    })
  }

  private get shadowSourceElement(): Element {
    const className = classNameFor("circuitStep:type:shadowSource")
    const el = document.getElementsByClassName(className).item(0)
    if (!el) throw new InternalError(`.${className} not found`)

    return el
  }
}
