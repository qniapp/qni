import { attributeNameFor } from "lib/base"

export class Controllable {
  public element!: HTMLElement

  get controls(): number[] {
    const dataControls = this.element.getAttribute(
      attributeNameFor("instruction:controls"),
    )

    if (!dataControls) return []
    return dataControls
      .split(",")
      .map((each) => {
        return parseInt(each)
      })
      .sort()
  }

  set controls(controls: number[]) {
    this.element.setAttribute(
      attributeNameFor("instruction:controls"),
      controls.sort().join(),
    )
  }
}
