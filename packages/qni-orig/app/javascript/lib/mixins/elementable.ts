import { InternalError } from "lib/error"
import { classNameFor } from "lib/base"

export class Elementable {
  public element!: HTMLElement

  protected validateElementClassName(
    element: HTMLElement | EventTarget | null | undefined,
    name: string,
  ): HTMLElement {
    if (!element) throw new InternalError("element not set")

    const el = element as HTMLElement
    const className = classNameFor(name)
    const closest = el.closest(`.${className}`)
    if (!closest) throw new Error(`.${className} not found`)
    return closest as HTMLElement
  }

  protected get classList(): DOMTokenList {
    if (!this.element) throw new Error("element is null")

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

  protected fetchElement(name: string): HTMLElement {
    const className = classNameFor(name)
    const el = this.element.getElementsByClassName(className).item(0)

    if (!el) throw new Error(".${className} not found")
    return el as HTMLElement
  }
}
