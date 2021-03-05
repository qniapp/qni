import { attributeNameFor } from "lib/base"

export class Valueable {
  public element!: HTMLElement

  protected get dataValue(): string | null {
    const attrName = attributeNameFor("instruction:valueable:value")
    return this.element.getAttribute(attrName)
  }

  protected set dataValue(value: string | null) {
    const attrName = attributeNameFor("instruction:valueable:value")
    if (value) {
      this.element.setAttribute(attrName, value)
    } else {
      this.element.removeAttribute(attrName)
    }
  }
}
