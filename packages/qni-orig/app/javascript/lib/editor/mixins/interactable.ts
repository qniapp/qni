import interact from "interactjs"
import { Elementable } from "lib/mixins"
import { Mixin } from "ts-mixer"

export type DragEventHandler = (event: Interact.DragEvent) => void
export type DragEventHandlers = {
  [key: string]: DragEventHandler
}

export type DropEventHandler = (event: Interact.DropEvent) => void
export type DropEventHandlers = {
  [key: string]: DropEventHandler
}

export class Interactable extends Mixin(Elementable) {
  // @ts-ignore: "Abstract methods can only appear within an abstract class"
  // setInteract(handlers: DragEventHandlers | DropEventHandlers): void

  unsetInteract(): void {
    interact(this.element).unset()
  }
}
