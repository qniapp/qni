import '@interactjs/actions/drag'
import '@interactjs/actions/drop'
import '@interactjs/auto-start'
import '@interactjs/dev-tools'
import '@interactjs/modifiers'
import {Constructor} from './constructor'
import {InteractEvent} from '@interactjs/types'
import {attr} from '@github/catalyst'
import interact from '@interactjs/interact'

export declare class Draggable {
  get x(): number
  set x(value: number)
  get y(): number
  set y(value: number)
  get draggable(): boolean
  set draggable(value: boolean)
  get grabbed(): boolean
  set grabbed(value: boolean)
  get dragging(): boolean
  set dragging(value: boolean)
  initDraggable(): void
  deinitDraggable(): void
  startDragging(): void
  dragMove(event: InteractEvent): void
  endDragging(): void
  grab(event: MouseEvent): void
  unGrab(): void
  move(dx: number, dy: number): void
  moveTo(x: number, y: number): void
  moveByOffset(offsetX: number, offsetY: number): void
  trash(): void
}

export function DraggableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Draggable> & TBase {
  class DraggableMixinClass extends Base {
    @attr x = 0
    @attr y = 0
    @attr grabbed = false
    @attr dragging = false

    get draggable(): boolean {
      return this.hasAttribute('data-draggable')
    }

    set draggable(value: boolean) {
      if (value) {
        this.setAttribute('data-draggable', '')
        this.initDraggable()
      } else {
        this.removeAttribute('data-draggable')
        this.deinitDraggable()
      }
    }

    initDraggable(): void {
      if (!this.draggable) return
      if (interact.isSet(this)) return

      interact(this).styleCursor(false)
      interact(this).draggable({
        onstart: this.startDragging.bind(this),
        onmove: this.dragMove.bind(this),
        onend: this.endDragging.bind(this)
      })

      this.addEventListener('mousedown', this.grab)
      this.addEventListener('mouseup', this.unGrab)
    }

    deinitDraggable(): void {
      interact(this).unset()

      this.removeEventListener('mousedown', this.grab)
      this.removeEventListener('mouseup', this.unGrab)
    }

    // interactjs handlers

    startDragging(): void {
      this.dragging = true
    }

    dragMove(event: InteractEvent): void {
      this.move(event.dx, event.dy)
    }

    endDragging(): void {
      this.dragging = false
      this.trash()
    }

    // Mouse event handlers

    grab(event: MouseEvent): void {
      this.grabbed = true
      this.dispatchEvent(
        new CustomEvent('operation-grab', {
          detail: {element: this},
          bubbles: true
        })
      )

      this.moveByOffset(event.offsetX, event.offsetY)
    }

    unGrab(): void {
      this.grabbed = false
      this.dragging = false
      this.trash()
    }

    // move operation

    move(dx: number, dy: number): void {
      const x = this.x + dx
      const y = this.y + dy
      this.moveTo(x, y)
    }

    moveTo(x: number, y: number): void {
      this.x = x
      this.y = y
      this.style.transform = `translate(${x}px, ${y}px)`
    }

    moveByOffset(offsetX: number, offsetY: number): void {
      const dx = offsetX - this.clientWidth / 2
      const dy = offsetY - this.clientHeight / 2
      this.move(dx, dy)
    }

    // trash operation

    trash(): void {
      interact(this).unset()
      this.dispatchEvent(
        new CustomEvent('operation-trash', {
          detail: {element: this},
          bubbles: true
        })
      )
    }
  }

  return DraggableMixinClass as Constructor<Draggable> & TBase
}
