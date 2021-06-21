import "@interactjs/auto-start"
import "@interactjs/actions/drag"
import "@interactjs/actions/drop"
import "@interactjs/dev-tools"
import interact from "@interactjs/interact"
import { Interactable } from "@interactjs/types"
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

export class Dndable extends Mixin(Elementable) {
  unsetInteract(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const interactable = interact(this.element) as Interactable
    interactable.unset()
  }
}
