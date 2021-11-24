import '@interactjs/actions/drag'
import '@interactjs/actions/drop'
import '@interactjs/auto-start'
import '@interactjs/dev-tools'
import '@interactjs/modifiers'
import {CircuitDropzoneElement} from '../circuit-dropzone-element'
import {Constructor} from './constructor'
import {InteractEvent} from '@interactjs/types'
import {attr} from '@github/catalyst'
import interact from '@interactjs/interact'

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
  initDraggable(): void
  deinitDraggable(): void
  setSnapTargets(dropzones: CircuitDropzoneElement[], wireCount: number): void
  updateSnapTargets(newDropzones: CircuitDropzoneElement[]): void
  startDragging(): void
  dragMove(event: InteractEvent): void
  endDragging(): void
  grab(event: MouseEvent): void
  unGrab(): void
  move(dx: number, dy: number): void
  moveTo(x: number, y: number): void
  moveByOffset(offsetX: number, offsetY: number): void
  delete(): void
}

export function DraggableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Draggable> & TBase {
  class DraggableMixinClass extends Base {
    @attr operationX = 0
    @attr operationY = 0
    @attr grabbed = false
    @attr dragging = false
    @attr snapped = false

    private snapTargetDropzones: {
      [x: number]: {
        [y: number]: {
          dropzone: CircuitDropzoneElement | null
          stepIndex: number | null
          wireIndex: number
        }
      }
    }
    private lastSnappedDropzone: CircuitDropzoneElement | null

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

      const parentElement = this.parentElement
      if (parentElement?.tagName === 'CIRCUIT-DROPZONE') {
        this.lastSnappedDropzone = parentElement as CircuitDropzoneElement
      } else {
        this.lastSnappedDropzone = null
      }

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

    setSnapTargets(dropzones: CircuitDropzoneElement[], wireCount: number) {
      const freeDropzones = dropzones.filter(each => !each.occupied)
      const snapRange = this.offsetWidth
      const snapTargets = []
      this.snapTargetDropzones = {}

      const myDropzone = this.parentElement as CircuitDropzoneElement
      if (myDropzone.tagName === 'CIRCUIT-DROPZONE') freeDropzones.push(myDropzone)

      for (const [i, each] of Object.entries(dropzones)) {
        const dropzoneIndex = parseInt(i)
        const snapTarget = each.snapTarget
        const x = snapTarget.x
        const y = snapTarget.y
        const leftX = x - snapRange * 0.75
        const rightX = x + snapRange * 0.75
        const wireIndex = dropzoneIndex % wireCount

        if (dropzoneIndex < wireCount) {
          snapTargets.push({x: leftX, y})
          if (this.snapTargetDropzones[leftX] === undefined) this.snapTargetDropzones[leftX] = {}
          if (this.snapTargetDropzones[leftX][y] === undefined)
            this.snapTargetDropzones[leftX][y] = {
              dropzone: null,
              stepIndex: -1,
              wireIndex
            }
        }

        snapTargets.push({x: rightX, y})
        if (this.snapTargetDropzones[rightX] === undefined) this.snapTargetDropzones[rightX] = {}
        if (this.snapTargetDropzones[rightX][y] === undefined)
          this.snapTargetDropzones[rightX][y] = {
            dropzone: null,
            stepIndex: Math.floor(dropzoneIndex / wireCount),
            wireIndex
          }

        if (!each.occupied || each === myDropzone) {
          snapTargets.push(snapTarget)
        }

        if (this.snapTargetDropzones[x] === undefined) this.snapTargetDropzones[x] = {}
        if (this.snapTargetDropzones[x][y] === undefined)
          this.snapTargetDropzones[x][y] = {
            dropzone: each,
            stepIndex: null,
            wireIndex
          }
      }

      interact(this).draggable({
        modifiers: [
          interact.modifiers.snap({
            targets: snapTargets,
            range: snapRange,
            relativePoints: [{x: 0.5, y: 0.5}]
          })
        ],
        listeners: {
          move: this.moveEventListener.bind(this)
        }
      })
    }

    updateSnapTargets(newDropzones: CircuitDropzoneElement[]): void {
      const firstDropzone = newDropzones[0]
      if (firstDropzone === null) throw new Error('circuit-dropzone not found.')
      const baseX = firstDropzone.snapTarget.x

      for (const [x, yv] of Object.entries(this.snapTargetDropzones)) {
        if (parseInt(x) <= baseX) continue

        for (const y in yv) {
          const snapTarget = yv[y]
          if (snapTarget.stepIndex === null) continue
          snapTarget.stepIndex += 1
        }
      }

      for (const [i, each] of Object.entries(newDropzones)) {
        const snapTarget = each.snapTarget
        const x = snapTarget.x
        const y = snapTarget.y

        if (this.snapTargetDropzones[x] === undefined) {
          throw new Error(`snapTargetDropzone[${x}] not found.`)
        }
        this.snapTargetDropzones[x][y] = {
          dropzone: each,
          stepIndex: null,
          wireIndex: parseInt(i)
        }
      }
    }

    private moveEventListener(e: InteractEvent) {
      const snapModifier = e.modifiers![0]
      if (snapModifier.inRange) {
        const snapTarget = snapModifier.target.source
        let dropzone = this.snapTargetDropzones[snapTarget.x][snapTarget.y].dropzone

        this.snapped = true

        if (dropzone === null) {
          const snapTargetInfo = this.snapTargetDropzones[snapTarget.x][snapTarget.y]
          this.dispatchEvent(
            new CustomEvent('operation-snap-new', {
              detail: {
                element: this,
                stepIndex: snapTargetInfo.stepIndex,
                wireIndex: snapTargetInfo.wireIndex
              },
              bubbles: true
            })
          )
          dropzone = this.parentElement as CircuitDropzoneElement
          if (dropzone === null) throw new Error('circuit-dropzone not found')
        }

        dropzone.append(this)
        this.moveTo(0, 0)

        if (this.lastSnappedDropzone) {
          this.lastSnappedDropzone.dispatchEvent(new Event('operation-unsnap', {bubbles: true}))
        }

        this.lastSnappedDropzone = dropzone
        this.dispatchEvent(new Event('operation-snap', {bubbles: true}))
      } else {
        this.snapped = false
        if (this.lastSnappedDropzone && this.lastSnappedDropzone.tagName === 'CIRCUIT-DROPZONE') {
          this.dispatchEvent(new Event('operation-unsnap', {bubbles: true}))
        }
      }
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
      this.grabbed = false
      if (this.snapped) {
        this.moveTo(0, 0)
        this.dispatchEvent(new Event('operation-drop', {bubbles: true}))
      }
      this.dispatchEvent(new Event('operation-enddragging', {bubbles: true}))
    }

    // Mouse event handlers

    grab(event: MouseEvent): void {
      this.grabbed = true
      this.dispatchEvent(new Event('operation-grab', {bubbles: true}))

      if (this.parentElement?.tagName === 'PALETTE-DROPZONE') {
        this.snapped = false
        this.moveByOffset(event.offsetX, event.offsetY)
      }
    }

    unGrab(): void {
      this.grabbed = false
      this.dragging = false
      this.dispatchEvent(new Event('operation-ungrab', {bubbles: true}))
      if (!this.snapped) this.delete()
    }

    // move operation

    move(dx: number, dy: number): void {
      const x = this.operationX + dx
      const y = this.operationY + dy
      this.moveTo(x, y)
    }

    moveTo(x: number, y: number): void {
      this.operationX = x
      this.operationY = y
      this.style.transform = `translate(${x}px, ${y}px)`
    }

    moveByOffset(offsetX: number, offsetY: number): void {
      const dx = offsetX - this.clientWidth / 2
      const dy = offsetY - this.clientHeight / 2
      this.move(dx, dy)
    }

    // delete operation

    delete(): void {
      interact(this).unset()
      this.dispatchEvent(new Event('operation-delete', {bubbles: true}))
    }
  }

  return DraggableMixinClass as Constructor<Draggable> & TBase
}
