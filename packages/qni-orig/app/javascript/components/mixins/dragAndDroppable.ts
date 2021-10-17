import "@interactjs/actions/drag"
import "@interactjs/actions/drop"
import "@interactjs/auto-start"
import "@interactjs/dev-tools"
import "@interactjs/modifiers"

import { TemplateResult, html } from "@github/jtml"
import { CircuitDropzoneElement } from "components/circuitDropzoneElement"
import { Constructor } from "./constructor"
import { DisplaySize } from "lib"
import { InteractEvent } from "@interactjs/types"
import { PaletteDropzoneElement } from "components/paletteDropzoneElement"
import { Util } from "lib/base"
import { attr } from "@github/catalyst"
import interact from "interactjs"

const cssStyle = html`<style>
  :host([data-drag-and-drop]) {
    touch-action: none;
  }

  :host([data-grabbed]) {
    z-index: 50 !important;
  }

  :host([data-grabbed]) #body {
    background-color: var(--colors-snow, #ffffff);
  }

  :host(:not([data-snapped])[data-grabbed]) #wires {
    display: none;
  }

  #body {
    height: 100%;
    width: 100%;
    border-radius: 0.25rem;
  }

  @media (min-width: 768px) {
    :host([data-drag-and-drop]) #body::after {
      position: absolute;
      height: 100%;
      width: 100%;
      border-color: var(--colors-cardinal, #ff4b4b);
      border-radius: 0.25rem;
      border-style: solid;
      border-width: 2px;
      box-sizing: border-box;
      opacity: 0;
      content: "";
    }

    :host([data-drag-and-drop][data-hoverable]) #body:hover::after,
    :host([data-drag-and-drop][data-grabbed]) #body::after {
      opacity: 100;
    }
  }
</style>`

const isPaletteDropzone = (arg: unknown): arg is PaletteDropzoneElement =>
  arg instanceof PaletteDropzoneElement

const isCircuitDropzone = (arg: unknown): arg is CircuitDropzoneElement =>
  arg instanceof CircuitDropzoneElement

export declare class DragAndDroppable {
  get dragAndDrop(): boolean
  set dragAndDrop(value: boolean)
  get dragAndDroppableStyle(): TemplateResult
  get snapped(): boolean
  set hoverable(value: boolean)
  set grabbed(value: boolean)
  initDragAndDrop(): void
  setSnapTargets(dropzones: CircuitDropzoneElement[]): void
  moveTo(x: number, y: number): void
}

export function DragAndDroppableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<DragAndDroppable> & TBase {
  class DragAndDroppableMixinClass extends Base {
    @attr dragAndDrop = false
    @attr grabbed = false
    @attr dragging = false
    @attr snapped = true
    @attr positionX = 0
    @attr positionY = 0
    @attr hoverable = true

    get dropzone(): CircuitDropzoneElement | PaletteDropzoneElement | null {
      return this.parentElement as
        | CircuitDropzoneElement
        | PaletteDropzoneElement
    }

    get dragAndDroppableStyle(): TemplateResult {
      return cssStyle
    }

    initDragAndDrop(): void {
      if (this.isPaletteDraggable) {
        this.dragAndDrop = true
        this.snapped = false
      }

      if (!this.dragAndDrop) return
      if (interact.isSet(this)) return

      interact(this).draggable({
        onstart: this.startDragging.bind(this),
        onmove: this.dragMove.bind(this),
        onend: this.endDragging.bind(this),
      })

      this.addEventListener("mousedown", this.grab)
      this.addEventListener("mouseup", this.unGrab)
    }

    private startDragging(): void {
      if (DisplaySize.isMobile()) return

      this.dragging = true
    }

    private dragMove(event: Interact.DragEvent): void {
      if (DisplaySize.isMobile()) return

      this.move(event.dx, event.dy)
    }

    private endDragging(event: InteractEvent): void {
      if (DisplaySize.isMobile()) return

      if (!this.snapped) {
        this.dispatchEvent(
          new CustomEvent("dragAndDroppable.enddragging", {
            detail: { x: event.clientX, y: event.clientY },
            bubbles: true,
          }),
        )
        this.trash()
        return
      }

      this.dragging = false
      this.grabbed = false
      this.moveTo(0, 0)
      this.dispatchEvent(
        new CustomEvent("dragAndDroppable.enddragging", {
          detail: { x: event.clientX, y: event.clientY },
          bubbles: true,
        }),
      )
    }

    private trash() {
      interact(this).unset()
      this.dispatchEvent(new Event("dragAndDroppable.trash", { bubbles: true }))
      this.parentElement?.removeChild(this)
    }

    // Mouse event handlers

    private grab(event: MouseEvent): void {
      if (DisplaySize.isMobile()) return

      this.grabbed = true
      this.dispatchEvent(
        new CustomEvent("dragAndDroppable.grab", {
          detail: this,
          bubbles: true,
        }),
      )

      if (isPaletteDropzone(this.dropzone)) {
        this.moveToGrabbedPosition(event.offsetX, event.offsetY)
      }
    }

    private unGrab(event: MouseEvent): void {
      if (DisplaySize.isMobile()) return

      if (!this.snapped) {
        this.trash()
        return
      }

      this.grabbed = false
      this.moveTo(0, 0)
      this.dispatchEvent(
        new CustomEvent("dragAndDroppable.ungrab", {
          detail: { x: event.clientX, y: event.clientY },
          bubbles: true,
        }),
      )
    }

    setSnapTargets(dropzones: CircuitDropzoneElement[]) {
      const myDropzone = this.dropzone
      const freeDropzones = dropzones

      Util.notNull(myDropzone)
      if (isCircuitDropzone(myDropzone)) freeDropzones.push(myDropzone)

      const snapTargets = freeDropzones.map((each) => each.snapTarget)
      const snappedDropzone = (snapTarget: {
        x: number
        y: number
      }): CircuitDropzoneElement | null => {
        for (const each of freeDropzones) {
          const d = each.snapTarget
          if (d.x === snapTarget.x && d.y === snapTarget.y) return each
        }
        return null
      }

      interact(this).draggable({
        modifiers: [
          interact.modifiers.snap({
            targets: snapTargets,
            range: this.snapRange(),
            relativePoints: [{ x: 0.5, y: 0.5 }],
          }),
        ],
        listeners: {
          move: (e: InteractEvent) => {
            const snapModifier = e.modifiers![0]
            if (snapModifier.inRange) {
              const snapTarget = snapModifier.target.source
              const dropzone = snappedDropzone(snapTarget)
              Util.notNull(dropzone)

              this.snapped = true
              dropzone.dispatchEvent(
                new CustomEvent("dragAndDroppable.snap", {
                  detail: this,
                  bubbles: true,
                }),
              )
            } else {
              if (this.snapped && isCircuitDropzone(this.parentElement)) {
                this.snapped = false
                this.dispatchEvent(
                  new Event("dragAndDroppable.unsnap", { bubbles: true }),
                )
              }
              this.snapped = false
            }
          },
        },
      })
    }

    private get isPaletteDraggable(): boolean {
      return isPaletteDropzone(this.dropzone)
    }

    private snapRange(): number {
      return this.clientWidth
    }

    private moveToGrabbedPosition(offsetX: number, offsetY: number): void {
      const dx = offsetX - this.clientWidth / 2
      const dy = offsetY - this.clientHeight / 2
      this.move(dx, dy)
    }

    // move element

    private move(dx: number, dy: number): void {
      const x = this.positionX + dx
      const y = this.positionY + dy
      this.moveTo(x, y)
    }

    moveTo(x: number, y: number): void {
      this.positionX = x
      this.positionY = y
      this.style.transform = `translate(${x}px, ${y}px)`
    }
  }

  return DragAndDroppableMixinClass as Constructor<DragAndDroppable> & TBase
}
