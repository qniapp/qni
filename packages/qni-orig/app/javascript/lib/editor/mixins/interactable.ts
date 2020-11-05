import interact from "interactjs"
import { Elementable } from "lib/mixins"
import { applyMixins } from "lib/base"

export type DragEventHandler = (event: Interact.DragEvent) => void
export type DragEventHandlers = {
  [key: string]: DragEventHandler
}

export type DropEventHandler = (event: Interact.DropEvent) => void
export type DropEventHandlers = {
  [key: string]: DropEventHandler
}

export abstract class Interactable {
  abstract setInteract(handlers: DragEventHandlers | DropEventHandlers): void

  unsetInteract(): void {
    interact(this.element).unset()
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Interactable extends Elementable {}
applyMixins(Interactable, [Elementable])
