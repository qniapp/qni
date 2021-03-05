export class Targetable {
  public element!: HTMLElement

  get targets(): number[] {
    const dataTargets = this.element.getAttribute("data-targets")

    if (!dataTargets) return []
    return dataTargets
      .split(",")
      .map((each) => {
        return parseInt(each)
      })
      .sort()
  }

  set targets(targets: number[]) {
    this.element.setAttribute("data-targets", targets.sort().join())
  }
}
