import "@interactjs/auto-start"
import "@interactjs/actions/drag"
import "@interactjs/actions/drop"
import "@interactjs/dev-tools"
import interact from "@interactjs/interact"
import { Interactable } from "@interactjs/types"

import { Constructor } from "lib/instructions"
import { Elementable } from "lib/mixins"

export type DragEventHandler = (event: Interact.DragEvent) => void
export type DragEventHandlers = {
  [key: string]: DragEventHandler
}

export type DropEventHandler = (event: Interact.DropEvent) => void
export type DropEventHandlers = {
  [key: string]: DropEventHandler
}

export declare class Dndable {
  unsetInteract(): void
}

export function DndableMixin<TBase extends Constructor<Elementable>>(
  Base: TBase,
): Constructor<Dndable> & TBase {
  class DndableMixinClass extends Base {
    unsetInteract(): void {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const interactable = interact(this.element) as Interactable
      interactable.unset()
    }
  }

  return DndableMixinClass as Constructor<Dndable> & TBase
}
