import "@interactjs/actions/drag"
import "@interactjs/actions/drop"
import "@interactjs/auto-start"
import "@interactjs/dev-tools"
import "@interactjs/modifiers"
import { TemplateResult, html } from "@github/jtml"
import { isCircuitDropzone, isPaletteDropzone } from "helpers"
import { Breakpoint } from "lib/base"
import { CircuitDropzoneElement } from "circuit_dropzone_component/circuitDropzoneElement"
import { Constructor } from "./constructor"
import { InteractEvent } from "@interactjs/types"
import { PaletteDropzoneElement } from "palette_dropzone_component/paletteDropzoneElement"
import { QuantumCircuitElement } from "quantum_circuit_component/quantumCircuitElement"
import { attr } from "@github/catalyst"
import interact from "@interactjs/interact"

export declare class Draggable {
  get draggableStyle(): TemplateResult
  get snapped(): boolean
  set hoverable(value: boolean)
  set grabbed(value: boolean)
  initDraggable(): void
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
    @attr hoverable = true

    get dropzone(): CircuitDropzoneElement | PaletteDropzoneElement | null {
      const el = this.parentElement
      if (el?.tagName === "CIRCUIT-DROPZONE") {
        return el as CircuitDropzoneElement
      } else if (el?.tagName === "PALETTE-DROPZONE") {
        return el as PaletteDropzoneElement
      }
      return null
    }

    get draggableStyle(): TemplateResult {
      return html`<style>
        :host([data-draggable]) {
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
          border-radius: 0.25rem;
        }

        @media (min-width: 768px) {
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

          :host([data-draggable][data-hoverable]) #body:hover::after,
          :host([data-draggable][data-grabbed]) #body::after {
            opacity: 100;
          }
        }
      </style>`
    }

    initDraggable(): void {
      if (this.isPaletteDraggable) {
        this.draggable = true
        this.snapped = false
      }

      if (!this.draggable) return
      if (Breakpoint.isMobile()) return
      if (interact.isSet(this)) return

      interact(this).draggable({
        onstart: this.startDragging.bind(this),
        onmove: this.dragMove.bind(this),
        onend: this.endDragging.bind(this),
      })

      this.addEventListener("mousedown", this.grab)
      this.addEventListener("mouseup", this.unGrab)
    }

    // actions

    private grab(event: MouseEvent): void {
      if (!this.draggable) return

      this.grabbed = true
      this.dispatchEvent(new Event("draggable.grab", { bubbles: true }))

      if (isPaletteDropzone(this.dropzone)) {
        this.moveToGrabbedPosition(event.offsetX, event.offsetY)
      }

      const snapTargets = this.snapTargets

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
              const dropzone = this.snappedDropzone(snapTarget)!

              this.snapped = true
              dropzone.dispatchEvent(
                new CustomEvent("draggable.snap", {
                  detail: this,
                  bubbles: true,
                }),
              )
            } else {
              if (this.snapped && isCircuitDropzone(this.parentElement)) {
                this.snapped = false
                this.dispatchEvent(
                  new Event("draggable.unsnap", { bubbles: true }),
                )
              }
              this.snapped = false
            }
          },
        },
      })
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

    private unGrab(event: MouseEvent): void {
      if (!this.snapped) {
        this.trash()
        return
      }

      this.grabbed = false
      this.moveTo(0, 0)
      this.dispatchEvent(
        new CustomEvent("draggable.ungrab", {
          detail: { x: event.clientX, y: event.clientY },
          bubbles: true,
        }),
      )
    }

    private get quantumCircuit(): QuantumCircuitElement | null {
      return (
        this.closest("quantum-circuit") ||
        document.querySelector("quantum-circuit")
      )
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

    private startDragging(): void {
      this.dragging = true
    }

    private dragMove(event: Interact.DragEvent): void {
      this.move(event.dx, event.dy)
    }

    private endDragging(event: InteractEvent): void {
      if (!this.snapped) {
        this.trash()
        this.quantumCircuit?.dispatchEvent(
          new CustomEvent("draggable.enddragging", {
            detail: { x: event.clientX, y: event.clientY },
            bubbles: false,
          }),
        )
        return
      }

      this.dragging = false
      this.grabbed = false
      this.moveTo(0, 0)
      this.dispatchEvent(
        new CustomEvent("draggable.enddragging", {
          detail: { x: event.clientX, y: event.clientY },
          bubbles: true,
        }),
      )
    }

    private trash() {
      interact(this).unset()
      this.dispatchEvent(new Event("draggable.trash", { bubbles: true }))
      this.parentElement?.removeChild(this)
    }

    // move element

    private move(dx: number, dy: number): void {
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
