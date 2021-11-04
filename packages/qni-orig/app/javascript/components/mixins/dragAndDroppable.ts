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
import { Util } from "lib/util"
import { attr } from "@github/catalyst"
import interact from "@interactjs/interact"

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
  setSnapTargets(dropzones: CircuitDropzoneElement[], wireCount: number): void
  updateSnapTargetInfo(dropzones: CircuitDropzoneElement[]): void
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

    public snapTargetInfo: {
      [x: number]: {
        [y: number]: {
          dropzone: CircuitDropzoneElement | null
          stepIndex: number | null
          wireIndex: number
        }
      }
    }
    private snappedDropzone: CircuitDropzoneElement | null

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

      this.snappedDropzone = this.dropzone as CircuitDropzoneElement

      if (!this.dragAndDrop) return
      if (interact.isSet(this)) return

      interact(this).styleCursor(false)
      interact(this).draggable({
        onstart: this.startDragging.bind(this),
        onmove: this.dragMove.bind(this),
        onend: this.endDragging.bind(this),
      })

      this.addEventListener("mouseenter", this.dispatchMouseenterEvent)
      this.addEventListener("mouseleave", this.dispatchMouseleaveEvent)
      this.addEventListener("mousedown", this.grab)
      this.addEventListener("mouseup", this.unGrab)
    }

    private dispatchMouseenterEvent(): void {
      this.dispatchEvent(
        new CustomEvent("dragAndDroppable.mouseenter", {
          detail: { element: this },
          bubbles: true,
        }),
      )
    }

    private dispatchMouseleaveEvent(): void {
      this.dispatchEvent(
        new CustomEvent("dragAndDroppable.mouseleave", {
          detail: { element: this },
          bubbles: true,
        }),
      )
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
        const dropzone = this.dropzone
        Util.notNull(dropzone)

        this.trash()
        dropzone.dispatchEvent(
          new CustomEvent("dragAndDroppable.enddragging", {
            detail: { x: event.clientX, y: event.clientY },
            bubbles: true,
          }),
        )
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
      this.dispatchEvent(
        new CustomEvent("dragAndDroppable.trash", {
          detail: { element: this },
          bubbles: true,
        }),
      )
    }

    // Mouse event handlers

    private grab(event: MouseEvent): void {
      if (DisplaySize.isMobile()) return

      this.grabbed = true
      this.dispatchEvent(
        new CustomEvent("dragAndDroppable.grab", {
          detail: { element: this },
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
          detail: { element: this, x: event.clientX, y: event.clientY },
          bubbles: true,
        }),
      )
    }

    setSnapTargets(dropzones: CircuitDropzoneElement[], wireCount: number) {
      const myDropzone = this.dropzone
      const freeDropzones = dropzones.filter((each) => !each.occupied)
      const snapTargets = []
      this.snapTargetInfo = {}

      Util.notNull(myDropzone)
      if (isCircuitDropzone(myDropzone)) freeDropzones.push(myDropzone)

      for (const [i, each] of Object.entries(dropzones)) {
        const snapTarget = each.snapTarget
        const x = snapTarget.x
        const y = snapTarget.y
        const leftX = x - this.snapRange() * 0.75
        const rightX = x + this.snapRange() * 0.75
        const wireIndex = parseInt(i) % wireCount

        if (parseInt(i) < wireCount) {
          snapTargets.push({ x: leftX, y })
          if (this.snapTargetInfo[leftX] === undefined)
            this.snapTargetInfo[leftX] = {}
          if (this.snapTargetInfo[leftX][y] === undefined)
            this.snapTargetInfo[leftX][y] = {
              dropzone: null,
              stepIndex: -1,
              wireIndex,
            }
        }

        snapTargets.push({ x: rightX, y })
        if (this.snapTargetInfo[rightX] === undefined)
          this.snapTargetInfo[rightX] = {}
        if (this.snapTargetInfo[rightX][y] === undefined)
          this.snapTargetInfo[rightX][y] = {
            dropzone: null,
            stepIndex: Math.floor(parseInt(i) / wireCount),
            wireIndex,
          }

        if (!each.occupied || each === myDropzone) {
          snapTargets.push(snapTarget)
        }

        if (this.snapTargetInfo[x] === undefined) this.snapTargetInfo[x] = {}
        if (this.snapTargetInfo[x][y] === undefined)
          this.snapTargetInfo[x][y] = {
            dropzone: each,
            stepIndex: null,
            wireIndex,
          }
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
          move: this.moveEventListener.bind(this),
        },
      })
    }

    updateSnapTargetInfo(dropzones: CircuitDropzoneElement[]): void {
      const firstDropzone = dropzones[0]
      const baseX = firstDropzone.snapTarget.x

      for (const [x, yv] of Object.entries(this.snapTargetInfo)) {
        if (parseInt(x) <= baseX) continue

        for (const [_y, v] of Object.entries(yv)) {
          if (v.stepIndex === null) continue
          v.stepIndex += 1
        }
      }

      for (const [i, each] of Object.entries(dropzones)) {
        const snapTarget = each.snapTarget
        const x = snapTarget.x
        const y = snapTarget.y

        this.snapTargetInfo[x][y] = {
          dropzone: each,
          stepIndex: null,
          wireIndex: parseInt(i),
        }
      }
    }

    private moveEventListener(e: InteractEvent) {
      const snapModifier = e.modifiers![0]
      if (snapModifier.inRange) {
        const snapTarget = snapModifier.target.source
        let dropzone = this.snapTargetInfo[snapTarget.x][snapTarget.y].dropzone

        if (this.snappedDropzone) {
          this.snapped = false
          this.snappedDropzone.dispatchEvent(
            new Event("dragAndDroppable.unsnap", { bubbles: true }),
          )
        }

        if (dropzone === null) {
          const snapTargetInfo = this.snapTargetInfo[snapTarget.x][snapTarget.y]

          this.dispatchEvent(
            new CustomEvent("dragAndDroppable.snapToNewDropzone", {
              detail: {
                element: this,
                stepIndex: snapTargetInfo.stepIndex,
                wireIndex: snapTargetInfo.wireIndex,
              },
              bubbles: true,
            }),
          )

          Util.notNull(this.dropzone)
          dropzone = this.dropzone as CircuitDropzoneElement
        }

        this.snappedDropzone = dropzone
        this.snapped = true
        dropzone.dispatchEvent(
          new CustomEvent("dragAndDroppable.snap", {
            detail: { element: this },
            bubbles: true,
          }),
        )
      } else {
        if (this.isLeavingCircuit) {
          this.snapped = false

          this.dispatchEvent(
            new Event("dragAndDroppable.unsnap", { bubbles: true }),
          )
          this.dispatchEvent(
            new Event("dragAndDroppable.leave", { bubbles: true }),
          )
        }
        this.snapped = false
      }
    }

    private get isLeavingCircuit(): boolean {
      return this.snapped && isCircuitDropzone(this.parentElement)
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
