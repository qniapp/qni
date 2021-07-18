import { Util, classNameFor, DetailedError } from "lib/base"

export class Elementable<T extends typeof Elementable = typeof Elementable> {
  static elementClassName: string

  element: HTMLElement

  constructor(
    element: HTMLElement | Element | EventTarget | Node | null | undefined,
  ) {
    this.element = this.validateInstructionElementClassName(
      element,
      (this.constructor as T).elementClassName,
    )
  }

  protected get classList(): DOMTokenList {
    return this.element.classList
  }

  protected setClassName(name: string, flag: boolean): void {
    const className = classNameFor(name)

    if (flag) {
      this.classList.add(className)
    } else {
      this.classList.remove(className)
    }
  }

  protected isClassNamed(name: string): boolean {
    return this.element.classList.contains(classNameFor(name))
  }

  protected removeElement(): void {
    this.element.parentNode?.removeChild(this.element)
  }

  private validateInstructionElementClassName(
    element: HTMLElement | Element | EventTarget | Node | null | undefined,
    className: string,
  ): HTMLElement {
    Util.notNull(element)
    if (!(element as HTMLElement).classList.contains(className)) {
      throw new DetailedError("Invalid element", { element })
    }

    return element as HTMLElement
  }
}
