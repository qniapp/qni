import "@interactjs/actions/drag"
import "@interactjs/actions/drop"
import "@interactjs/auto-start"
import "@interactjs/dev-tools"
import "@interactjs/modifiers"
import { TemplateResult, html } from "@github/jtml"
import { CircuitDropzoneElement } from "circuit_dropzone_component/circuitDropzoneElement"
import { Constructor } from "./constructor"
import { InteractEvent } from "@interactjs/types"
import { PaletteDropzoneElement } from "palette_dropzone_component/paletteDropzoneElement"
import { QuantumCircuitElement } from "quantum_circuit_component/quantumCircuitElement"
import { attr } from "@github/catalyst"
import interact from "@interactjs/interact"

const isCircuitDropzone = (arg: unknown): arg is CircuitDropzoneElement =>
  arg instanceof CircuitDropzoneElement

const isPaletteDropzone = (arg: unknown): arg is PaletteDropzoneElement =>
  arg instanceof PaletteDropzoneElement

export declare class Draggable {
  set draggable(value: boolean)
  get draggableStyle(): TemplateResult
  get dropzone(): CircuitDropzoneElement | null
  get grabbed(): boolean
  get snapped(): boolean
  set snapped(value: boolean)
  initDraggable(): void
  grab(event: MouseEvent): void
  unGrab(): void
  startDragging(): void
  dragMove(event: Interact.DragEvent): void
  move(dx: number, dy: number): void
  moveTo(x: number, y: number): void
}

export function DraggableMixin<TBase extends Constructor<HTMLElement>>(
  Base: TBase,
): Constructor<Draggable> & TBase {
  class DraggableMixinClass extends Base {
    @attr draggable = false
    @attr grabbed = false
    @attr dragging = false
    @attr snapped = true
    @attr draggableX = 0
    @attr draggableY = 0

    get dropzone(): CircuitDropzoneElement | PaletteDropzoneElement | null {
      const el = this.parentElement
      if (el?.nodeName === "CIRCUIT-DROPZONE") {
        return el as CircuitDropzoneElement
      } else if (el?.nodeName === "PALETTE-DROPZONE") {
        return el as PaletteDropzoneElement
      }
      return null
    }

    get draggableStyle(): TemplateResult {
      return html`<style>
        :host([data-draggable]) {
          cursor: grab;
          touch-action: none;
        }

        :host([data-grabbed]) {
          z-index: 50 !important;
        }

        :host(:not([data-snapped])[data-grabbed]) #wires {
          display: none;
        }

        #body {
          height: 100%;
          width: 100%;
        }

        :host([data-draggable]) #body::after {
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

        :host([data-draggable]) #body:hover::after,
        :host([data-draggable][data-grabbed]) #body::after {
          opacity: 100;
        }
      </style>`
    }

    initDraggable(): void {
      if (this.isPaletteDraggable) {
        this.draggable = true
        this.snapped = false
      }

      if (!this.draggable) return
      if (interact.isSet(this)) return

      interact(this).draggable({
        onstart: this.startDragging.bind(this),
        onmove: this.dragMove.bind(this),
        onend: this.endDragging.bind(this),
      })
    }

    // actions

    grab(event: MouseEvent): void {
      if (!this.draggable) return

      const snapTargets = this.snapTargets

      this.grabbed = true
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
              this.snapped = true
              const snapTarget = snapModifier.target.source
              const dropzone = this.snappedDropzone(snapTarget)!
              this.moveToDropzone(dropzone)
            } else {
              if (this.snapped && isCircuitDropzone(this.parentElement)) {
                this.snapped = false
                this.parentElement.unsnap(this as HTMLElement)
              }
              this.snapped = false
            }
          },
        },
      })

      if (isCircuitDropzone(this.dropzone)) {
        this.dropzone.enableDropzone()
      }
      if (isPaletteDropzone(this.dropzone)) {
        this.moveToGrabbedPosition(event.offsetX, event.offsetY)
      }
      this.dispatchEvent(new Event("grabdraggable", { bubbles: true }))
    }

    private get snapTargets(): Array<{ x: number; y: number }> {
      return this.snappableDropzones.map((each) => each.snapTarget)
    }

    private snappedDropzone(snapTarget: {
      x: number
      y: number
    }): CircuitDropzoneElement | null {
      for (const each of this.snappableDropzones) {
        const d = each.snapTarget
        if (d.x === snapTarget.x && d.y === snapTarget.y) return each
      }
      return null
    }

    private get snappableDropzones(): CircuitDropzoneElement[] {
      const dropzones = this.quantumCircuit!.freeDropzones
      if (isCircuitDropzone(this.dropzone)) dropzones.push(this.dropzone)

      return dropzones
    }

    private get isPaletteDraggable(): boolean {
      return isPaletteDropzone(this.dropzone)
    }

    unGrab(): void {
      if (!this.snapped) {
        this.trash()
        return
      }

      this.grabbed = false
      this.moveTo(0, 0)
    }

    private get quantumCircuit(): QuantumCircuitElement | null {
      return document.querySelector("quantum-circuit")
    }

    private snapRange(): number {
      return this.clientWidth
    }

    private moveToGrabbedPosition(offsetX: number, offsetY: number): void {
      const dx = offsetX - this.clientWidth / 2
      const dy = offsetY - this.clientHeight / 2
      this.move(dx, dy)
    }

    // interact.js handlers

    startDragging(): void {
      this.dragging = true
    }

    dragMove(event: Interact.DragEvent): void {
      this.move(event.dx, event.dy)
    }

    endDragging(): void {
      if (!this.snapped) {
        this.trash()
        return
      }

      this.dragging = false
      this.grabbed = false
      this.moveTo(0, 0)
    }

    moveToDropzone(dropzone: CircuitDropzoneElement): void {
      dropzone.snap(this as HTMLElement)
      this.moveTo(0, 0)
    }

    private trash() {
      interact(this).unset()
      this.parentElement?.removeChild(this)
    }

    // move element

    move(dx: number, dy: number): void {
      const x = this.draggableX + dx
      const y = this.draggableY + dy
      this.moveTo(x, y)
    }

    moveTo(x: number, y: number): void {
      this.draggableX = x
      this.draggableY = y
      this.style.transform = `translate(${x}px, ${y}px)`
    }
  }

  return DraggableMixinClass as Constructor<Draggable> & TBase
}
