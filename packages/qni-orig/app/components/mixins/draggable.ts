import "@interactjs/actions/drag"
import "@interactjs/actions/drop"
import "@interactjs/auto-start"
import "@interactjs/dev-tools"
import "@interactjs/modifiers"
import { TemplateResult, html } from "@github/jtml"
import { CircuitDropzoneElement } from "circuit_dropzone_component/circuitDropzoneElement"
import { Constructor } from "./constructor"
import { Interactable } from "@interactjs/types"
import { QuantumCircuitElement } from "quantum_circuit_component/quantumCircuitElement"
import { attr } from "@github/catalyst"
import interact from "@interactjs/interact"

export declare class Draggable {
  get draggableStyle(): TemplateResult
  get dropzone(): CircuitDropzoneElement | null
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
    @attr draggableX = 0
    @attr draggableY = 0

    get dropzone(): CircuitDropzoneElement | null {
      const el = this.parentElement
      if (el?.nodeName === "CIRCUIT-DROPZONE") {
        return el as CircuitDropzoneElement
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
      if (!this.draggable) return
      if (interact.isSet(this)) return

      const interactable = interact(this) as Interactable
      interactable.draggable({
        onstart: this.startDragging.bind(this),
        onmove: this.dragMove.bind(this),
        onend: this.endDragging.bind(this),
      })
    }

    // actions

    grab(): void {
      if (!this.draggable) return

      this.grabbed = true

      const interactable = interact(this) as Interactable
      interactable.draggable({
        modifiers: [
          interact.modifiers.snap({
            targets: this.snapTargets(),
            range: this.snapRange(),
            relativePoints: [{ x: 0.5, y: 0.5 }],
          }),
        ],
      })
    }

    unGrab(): void {
      this.grabbed = false
      this.moveTo(0, 0)
    }

    private snapTargets(): Array<{ x: number; y: number }> {
      const dropzones = this.quantumCircuit!.freeDropzones
      dropzones.push(this.dropzone!)

      return dropzones.map((each) => {
        return {
          x: each.offsetLeft + each.clientWidth / 2,
          y: each.offsetTop + each.clientHeight / 2,
        }
      })
    }

    private get quantumCircuit(): QuantumCircuitElement | null {
      return this.closest("quantum-circuit")
    }

    private snapRange(): number {
      return this.clientWidth / 2
    }

    // interact.js handlers

    startDragging(): void {
      this.dragging = true
    }

    dragMove(event: Interact.DragEvent): void {
      const x = this.draggableX + event.dx
      const y = this.draggableY + event.dy

      this.moveTo(x, y)
    }

    endDragging(): void {
      this.dragging = false
      this.grabbed = false
      this.moveTo(0, 0)
    }

    // move element

    move(dx: number, dy: number): void {
      const x = this.draggableX + dx
      const y = this.draggableY + dy

      this.moveTo(x, y)
    }

    moveTo(x: number, y: number): void {
      this.style.transform = `translate(${x}px, ${y}px)`
      this.draggableX = x
      this.draggableY = y
    }
  }

  return DraggableMixinClass as Constructor<Draggable> & TBase
}
