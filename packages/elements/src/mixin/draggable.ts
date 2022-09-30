import {Util, describe, emitEvent} from '@qni/common'
import {createMachine, interpret} from 'xstate'
import {CircuitDropzoneElement} from '../circuit-dropzone-element'
import {Constructor} from './constructor'
import {InteractEvent} from '@interactjs/types'
import {PaletteDropzoneElement} from '../palette-dropzone-element'
import {attr} from '@github/catalyst'
import interact from 'interactjs'

export const isDraggable = (arg: unknown): arg is Draggable =>
  arg !== undefined && arg !== null && typeof (arg as Draggable).isDraggable === 'boolean'

export const isCircuitDropzoneElement = (arg: unknown): arg is CircuitDropzoneElement =>
  arg !== undefined && arg !== null && (arg as Element).tagName === 'CIRCUIT-DROPZONE'

export const isPaletteDropzoneElement = (arg: unknown): arg is PaletteDropzoneElement =>
  arg !== undefined && arg !== null && (arg as Element).tagName === 'PALETTE-DROPZONE'

export declare class Draggable {
  get isGrabbable(): boolean
  get operationX(): number
  set operationX(value: number)
  get operationY(): number
  set operationY(value: number)
  get isDraggable(): boolean
  set isDraggable(value: boolean)
  get grabbed(): boolean
  set grabbed(value: boolean)
  get dragging(): boolean
  set dragging(value: boolean)
  get snapped(): boolean
  set snapped(value: boolean)
  get bit(): number
  set bit(value: number)
  get dropzone(): PaletteDropzoneElement | CircuitDropzoneElement | null
  get snapRange(): number
  set snapTargets(value: Array<{x: number; y: number}>)
  initDraggable(): void
}

type DraggableContext = Record<string, never>
type DraggableEvent =
  | {type: 'SET_INTERACT'}
  | {type: 'UNSET_INTERACT'}
  | {type: 'DELETE'}
  | {type: 'GRAB'; x: number; y: number}
  | {type: 'RELEASE'}
  | {type: 'START_DRAGGING'}
  | {type: 'END_DRAGGING'}
  | {type: 'SNAP'}
  | {type: 'UNSNAP'}

export function DraggableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Draggable> & TBase {
  class DraggableMixinClass extends Base {
    @attr operationX = 0
    @attr operationY = 0
    @attr _grabbable = false
    @attr grabbed = false
    @attr dragging = false
    @attr snapped = false
    @attr bit = -1
    @attr debugDraggable = false

    private snappedDropzone!: CircuitDropzoneElement | null | undefined

    private draggableMachine = createMachine<DraggableContext, DraggableEvent>(
      {
        id: 'draggable',
        initial: 'idle',
        states: {
          idle: {
            entry: ['init'],
            on: {
              SET_INTERACT: {
                target: 'grabbable',
                actions: ['setInteract']
              }
            }
          },
          grabbable: {
            entry: ['setGrabbableAttribute'],
            exit: ['unsetGrabbableAttribute'],
            on: {
              GRAB: {
                target: 'grabbed',
                actions: ['grab']
              },
              UNSET_INTERACT: {
                target: 'idle'
              }
            }
          },
          grabbed: {
            on: {
              START_DRAGGING: {
                target: 'dragging',
                actions: ['startDragging']
              },
              RELEASE: [
                {
                  target: 'grabbable',
                  actions: ['release'],
                  cond: 'isOnCircuitDropzone'
                },
                {
                  target: 'deleted',
                  actions: ['release'],
                  cond: 'isOnPaletteDropzone'
                }
              ]
            }
          },
          dragging: {
            type: 'compound',
            initial: 'unknown',
            on: {
              END_DRAGGING: {
                target: 'dropped',
                actions: ['endDragging']
              }
            },
            states: {
              unknown: {
                always: [
                  {target: 'snapped', cond: 'isOnCircuitDropzone'},
                  {target: 'unsnapped', cond: 'isOnPaletteDropzone'}
                ]
              },
              snapped: {
                entry: ['snap'],
                on: {
                  UNSNAP: {
                    target: 'unsnapped'
                  }
                }
              },
              unsnapped: {
                entry: ['unsnap'],
                on: {
                  SNAP: {
                    target: 'snapped'
                  }
                }
              }
            }
          },
          dropped: {
            entry: ['drop'],
            always: [
              {target: 'grabbable', cond: 'isDroppedOnCircuitDropzone'},
              {target: 'deleted', cond: 'isTrashed'}
            ]
          },
          deleted: {
            type: 'final',
            entry: 'delete'
          }
        }
      },
      {
        actions: {
          init: () => {
            emitEvent('draggable:init', {}, this)
          },
          setInteract: (_context, event) => {
            Util.need(event.type === 'SET_INTERACT', 'event type must be SET_INTERACT')

            const interactable = interact(this)
            interactable.styleCursor(false)

            interactable.pointerEvents({
              ignoreFrom: '.resize-handle'
            })
            interactable.on('down', this.grab.bind(this))
            interactable.on('up', this.release.bind(this))

            interactable.draggable({
              onstart: this.startDragging.bind(this),
              onmove: this.dragMove.bind(this),
              onend: this.endDragging.bind(this),
              ignoreFrom: '.resize-handle'
            })

            const dropzone = this.dropzone
            if (isCircuitDropzoneElement(dropzone)) {
              this.snappedDropzone = dropzone
            } else {
              this.snappedDropzone = null
            }
          },
          setGrabbableAttribute: () => {
            this._grabbable = true
          },
          unsetGrabbableAttribute: () => {
            this._grabbable = false
          },
          grab: (_context, event) => {
            Util.need(event.type === 'GRAB', 'event type must be GRAB')
            if (event.type !== 'GRAB') return

            this.grabbed = true
            emitEvent('draggable:grab', {}, this)

            if (isPaletteDropzoneElement(this.dropzone)) {
              this.snapped = false
              this.moveByOffset(event.x, event.y)
              this.classList.remove('qpu-operation-xl')
            }
          },
          release: (_context, event) => {
            Util.need(event.type === 'RELEASE', 'event type must be RELEASE')

            this.grabbed = false
            emitEvent('draggable:release', {}, this)
          },
          startDragging: (_context, event) => {
            Util.need(event.type === 'START_DRAGGING', 'event type must be START_DRAGGING')

            this.dragging = true
          },
          endDragging: (_context, event) => {
            Util.need(event.type === 'END_DRAGGING', 'event type must be END_DRAGGING')

            this.grabbed = false
            this.dragging = false
            emitEvent('draggable:end-dragging', {}, this)
          },
          snap: () => {
            this.snapped = true
            this.snappedDropzone = this.dropzone as CircuitDropzoneElement
            emitEvent('draggable:snap-to-dropzone', {}, this)
          },
          unsnap: () => {
            this.snapped = false
            if (this.snappedDropzone) {
              emitEvent('draggable:unsnap', {}, this.snappedDropzone)
            }
          },
          drop: () => {
            if (!this.snapped) return

            this.moveTo(0, 0)
            emitEvent('draggable:drop', {}, this)
          },
          delete: () => {
            interact(this).unset()
            emitEvent('draggable:delete', {}, this)
          }
        },
        guards: {
          isOnCircuitDropzone: () => {
            return isCircuitDropzoneElement(this.dropzone)
          },
          isOnPaletteDropzone: () => {
            return isPaletteDropzoneElement(this.dropzone)
          },
          isDroppedOnCircuitDropzone: () => {
            return this.snapped && isCircuitDropzoneElement(this.dropzone)
          },
          isTrashed: () => {
            return !this.snapped
          }
        }
      }
    )
    public draggableService = interpret(this.draggableMachine).onTransition(state => {
      if (this.debugDraggable) {
        // eslint-disable-next-line no-console
        console.log(`draggable: ${describe(state.value)}`)
      }
    })

    get isDraggable(): boolean {
      return this.draggableService.state !== undefined
    }

    set isDraggable(value: boolean) {
      if (value) {
        this.draggableService.send({type: 'SET_INTERACT'})
      } else {
        this.draggableService.send({type: 'UNSET_INTERACT'})
      }
    }

    get isGrabbable(): boolean {
      return this._grabbable
    }

    initDraggable(): void {
      if (this.draggableService.state !== undefined) {
        return
      }

      this.draggableService.start()
    }

    get dropzone(): PaletteDropzoneElement | CircuitDropzoneElement | null {
      const el = this.parentElement
      Util.notNull(el)

      if (!isPaletteDropzoneElement(el) && !isCircuitDropzoneElement(el)) {
        return null
      }
      return el as PaletteDropzoneElement | CircuitDropzoneElement
    }

    set snapTargets(values: Array<{x: number; y: number}>) {
      interact(this).draggable({
        modifiers: [
          interact.modifiers.snap({
            targets: values,
            range: this.snapRange
          })
        ],
        listeners: {
          move: this.moveEventListener.bind(this)
        }
      })
    }

    get snapRange(): number {
      return 32
    }

    private moveEventListener(event: InteractEvent) {
      const snapModifier = event.modifiers![0]

      if (snapModifier.inRange) {
        const snapTargetInfo = snapModifier.target.source
        emitEvent('draggable:in-snap-range', {snapTargetInfo}, this)

        this.moveTo(0, 0)

        if (this.snappedDropzone && this.snappedDropzone !== this.dropzone) {
          this.draggableService.send({type: 'UNSNAP'})
        }

        this.draggableService.send({type: 'SNAP'})
      } else {
        if (this.snapped) {
          this.draggableService.send({type: 'UNSNAP'})
        }
      }
    }

    private grab(event: MouseEvent): void {
      this.draggableService.send({type: 'GRAB', x: event.offsetX, y: event.offsetY})
    }

    private release(): void {
      this.draggableService.send({type: 'RELEASE'})
    }

    private startDragging(): void {
      this.draggableService.send({type: 'START_DRAGGING'})
    }

    private endDragging(): void {
      this.draggableService.send({type: 'END_DRAGGING'})
    }

    private dragMove(event: InteractEvent): void {
      this.move(event.dx, event.dy)
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
