import {CircuitDropzoneElement, PaletteDropzoneElement} from '..'
import {Constructor} from './constructor'
import {InteractEvent} from '@interactjs/types'
import {Util} from '@qni/common'
import {attr} from '@github/catalyst'
import interact from 'interactjs'

const isCircuitDropzoneElement = (arg: unknown): arg is CircuitDropzoneElement =>
  arg !== undefined && arg !== null && (arg as Element).tagName === 'CIRCUIT-DROPZONE'

const isPaletteDropzoneElement = (arg: unknown): arg is PaletteDropzoneElement =>
  arg !== undefined && arg !== null && (arg as Element).tagName === 'PALETTE-DROPZONE'

export declare class Draggable {
  get operationX(): number
  set operationX(value: number)
  get operationY(): number
  set operationY(value: number)
  get draggable(): boolean
  set draggable(value: boolean)
  get grabbed(): boolean
  set grabbed(value: boolean)
  get dragging(): boolean
  set dragging(value: boolean)
  get snapped(): boolean
  set snapped(value: boolean)
  get bit(): number
  set bit(value: number)
  get dropzone(): PaletteDropzoneElement | CircuitDropzoneElement
  get snapRange(): number
  set snapTargets(value: Array<{x: number; y: number}>)
  delete(): void
}

export function DraggableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Draggable> & TBase {
  class DraggableMixinClass extends Base {
    @attr operationX = 0
    @attr operationY = 0
    @attr grabbed = false
    @attr dragging = false
    @attr snapped = false
    @attr bit = -1

    private snappedDropzone!: CircuitDropzoneElement | null

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

    get dropzone(): PaletteDropzoneElement | CircuitDropzoneElement {
      const el = this.parentElement
      Util.notNull(el)
      Util.need(
        isPaletteDropzoneElement(el) || isCircuitDropzoneElement(el),
        'Draggable.dropzone: not palette-dropzone or circuit-dropzone'
      )

      return el as PaletteDropzoneElement | CircuitDropzoneElement
    }

    private initDraggable(): void {
      if (interact.isSet(this)) return

      const dropzone = this.dropzone
      if (isCircuitDropzoneElement(dropzone)) {
        this.snappedDropzone = dropzone
      } else {
        this.snappedDropzone = null
      }

      const interactable = interact(this)
      interactable.styleCursor(false)
      interactable.on('down', this.grab.bind(this))
      interactable.on('up', this.unGrab.bind(this))
      interactable.draggable({
        onstart: this.startDragging.bind(this),
        onmove: this.dragMove.bind(this),
        onend: this.endDragging.bind(this)
      })
    }

    private deinitDraggable(): void {
      interact(this).unset()
    }

    delete(): void {
      this.deinitDraggable()
      this.dispatchEvent(new Event('operation-delete', {bubbles: true}))
    }

    set snapTargets(value: Array<{x: number; y: number}>) {
      interact(this).draggable({
        modifiers: [
          interact.modifiers.snap({
            targets: value,
            range: this.snapRange,
            relativePoints: [{x: 0.5, y: 0.5}]
          })
        ],
        listeners: {
          move: this.moveEventListener.bind(this)
        }
      })
    }

    get snapRange(): number {
      return this.offsetWidth
    }

    private moveEventListener(e: InteractEvent) {
      const snapModifier = e.modifiers![0]

      if (snapModifier.inRange) {
        const snapTargetInfo = snapModifier.target.source
        this.dispatchEvent(new CustomEvent('operation-in-snap-range', {detail: {snapTargetInfo}, bubbles: true}))

        this.moveTo(0, 0)

        if (this.snappedDropzone) {
          this.snappedDropzone.dispatchEvent(new Event('operation-unsnap', {bubbles: true}))
        }

        this.snappedDropzone = this.dropzone as CircuitDropzoneElement
        this.dispatchEvent(new Event('operation-snap', {bubbles: true}))
      } else {
        this.snapped = false
        if (this.snappedDropzone) {
          this.dispatchEvent(new Event('operation-unsnap', {bubbles: true}))
        }
      }
    }

    private grab(event: MouseEvent): void {
      this.grabbed = true
      this.dispatchEvent(new Event('operation-grab', {bubbles: true}))

      if (isPaletteDropzoneElement(this.dropzone)) {
        this.snapped = false
        this.moveByOffset(event.offsetX, event.offsetY)
      }
    }

    private startDragging(): void {
      this.dragging = true
    }

    private dragMove(event: InteractEvent): void {
      this.move(event.dx, event.dy)
    }

    private unGrab(): void {
      this.grabbed = false
      this.dispatchEvent(new Event('operation-ungrab', {bubbles: true}))
      if (!this.snapped && !this.dragging) this.delete()
    }

    private endDragging(): void {
      this.grabbed = false
      this.dragging = false

      this.dispatchEvent(new Event('operation-enddragging', {bubbles: true}))
      if (this.snapped) {
        this.moveTo(0, 0)
        this.dispatchEvent(new Event('operation-drop', {bubbles: true}))
      } else {
        this.delete()
      }
    }

    private move(dx: number, dy: number): void {
      const x = this.operationX + dx
      const y = this.operationY + dy
      this.moveTo(x, y)
    }

    private moveTo(x: number, y: number): void {
      this.operationX = x
      this.operationY = y
      this.style.transform = `translate(${x}px, ${y}px)`
    }

    private moveByOffset(offsetX: number, offsetY: number): void {
      const dx = offsetX - this.clientWidth / 2
      const dy = offsetY - this.clientHeight / 2
      this.move(dx, dy)
    }
  }

  return DraggableMixinClass as Constructor<Draggable> & TBase
}
