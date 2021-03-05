export class Animatable {
  public element!: HTMLElement

  set jello(value: boolean) {
    const classList = this.element.classList
    const jelloClassList = ["animate__animated", "animate__jello"]

    if (value) {
      classList.add(...jelloClassList)
    } else {
      classList.remove(...jelloClassList)
    }
  }
}
