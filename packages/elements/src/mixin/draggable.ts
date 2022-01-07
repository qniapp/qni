import {Interpreter, StateMachine, createMachine, interpret} from 'xstate'
import {CircuitDropzoneElement} from '../circuit-dropzone-element'
import {Constructor} from './constructor'
import {InteractEvent} from '@interactjs/types'
import {PaletteDropzoneElement} from '../palette-dropzone-element'
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

type DraggableContext = Record<string, never>
interface Schema {
  states: {
    start: Record<string, never>
    'on dropzone': Record<string, never>
    'not on dropzone': Record<string, never>
    interactable: Record<string, never>
    'on circuit-dropzone': Record<string, never>
    'on palette-dropzone': Record<string, never>
    grabbed: Record<string, never>
    dragging: {
      states: {
        unknown: Record<string, never>
        snapped: Record<string, never>
        unsnapped: Record<string, never>
      }
    }
    dropped: Record<string, never>
    deleted: Record<string, never>
  }
}
type DraggableEvent =
  | {type: 'SET INTERACT'}
  | {type: 'UNSET INTERACT'}
  | {type: 'DELETE'}
  | {type: 'GRAB'; x: number; y: number}
  | {type: 'UNGRAB'}
  | {type: 'DRAG START'}
  | {type: 'DRAG END'}
  | {type: 'DRAG MOVE'; dx: number; dy: number}
  | {type: 'SNAP'; x: number; y: number}
  | {type: 'UNSNAP'}

export function DraggableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Draggable> & TBase {
  class DraggableMixinClass extends Base {
    @attr operationX = 0
    @attr operationY = 0
    @attr grabbed = false
    @attr dragging = false
    @attr snapped = false
    @attr bit = -1

    private draggableMachine!: StateMachine<DraggableContext, Schema, DraggableEvent> | undefined
    private draggableService!: Interpreter<DraggableContext, Schema, DraggableEvent>
    private snappedDropzone!: CircuitDropzoneElement | null | undefined

    set draggable(value: boolean) {
      this.maybeInitStateMachine()

      if (value) {
        this.draggableService.send({type: 'SET INTERACT'})
      } else {
        this.draggableService.send({type: 'UNSET INTERACT'})
      }
    }

    get dropzone(): PaletteDropzoneElement | CircuitDropzoneElement | null {
      const el = this.parentElement
      Util.notNull(el)

      if (!isPaletteDropzoneElement(el) && !isCircuitDropzoneElement(el)) {
        return null
      }
      return el as PaletteDropzoneElement | CircuitDropzoneElement
    }

    private maybeInitStateMachine(): void {
      if (this.draggableMachine !== undefined) return

      this.draggableMachine = createMachine<DraggableContext, DraggableEvent>(
        {
          id: 'draggable',
          initial: 'start',
          states: {
            start: {
              always: [
                {target: 'on dropzone', cond: 'onDropzone'},
                {target: 'not on dropzone', cond: 'notOnDropzone'}
              ]
            },
            'on dropzone': {
              on: {
                'SET INTERACT': {
                  target: 'interactable',
                  actions: ['setInteract']
                },
                DELETE: {target: 'deleted'}
              }
            },
            'not on dropzone': {
              on: {
                DELETE: {target: 'deleted'}
              }
            },
            interactable: {
              always: [
                {target: 'on circuit-dropzone', cond: 'onCircuitDropzone'},
                {target: 'on palette-dropzone', cond: 'onPaletteDropzone'}
              ]
            },
            'on circuit-dropzone': {
              on: {
                GRAB: {
                  target: 'grabbed',
                  actions: ['grab']
                },
                'UNSET INTERACT': {
                  target: 'on dropzone',
                  actions: ['unsetInteract']
                }
              }
            },
            'on palette-dropzone': {
              on: {
                GRAB: {
                  target: 'grabbed',
                  actions: ['grab']
                },
                'UNSET INTERACT': {
                  target: 'on dropzone',
                  actions: ['unsetInteract']
                }
              }
            },
            grabbed: {
              on: {
                'DRAG START': {
                  target: 'dragging',
                  actions: ['startDragging']
                },
                UNGRAB: {
                  target: 'interactable',
                  actions: ['ungrab']
                },
                DELETE: {target: 'deleted'}
              }
            },
            dragging: {
              type: 'compound',
              initial: 'unknown',
              on: {
                'DRAG MOVE': {
                  target: 'dragging',
                  actions: ['dragMove']
                },
                'DRAG END': {
                  target: 'dropped',
                  actions: ['endDragging']
                }
              },
              states: {
                unknown: {
                  always: [
                    {target: 'snapped', cond: 'onCircuitDropzone'},
                    {target: 'unsnapped', cond: 'onPaletteDropzone'}
                  ]
                },
                snapped: {
                  on: {
                    SNAP: {
                      target: 'snapped',
                      actions: ['snap']
                    },
                    UNSNAP: {
                      target: 'unsnapped',
                      actions: ['unsnap']
                    }
                  }
                },
                unsnapped: {
                  on: {
                    SNAP: {
                      target: 'snapped',
                      actions: ['snap']
                    },
                    UNSNAP: {
                      target: 'unsnapped'
                    }
                  }
                }
              }
            },
            dropped: {
              always: [
                {target: 'on circuit-dropzone', cond: 'droppedOnCircuitDropzone'},
                {target: 'deleted', cond: 'trashed'}
              ]
            },
            deleted: {
              entry: 'delete',
              type: 'final'
            }
          }
        },
        {
          guards: {
            onDropzone: () => {
              return this.dropzone !== null
            },
            notOnDropzone: () => {
              return this.dropzone === null
            },
            onCircuitDropzone: () => {
              return isCircuitDropzoneElement(this.dropzone)
            },
            onPaletteDropzone: () => {
              return isPaletteDropzoneElement(this.dropzone)
            },
            droppedOnCircuitDropzone: () => {
              return this.snapped && isCircuitDropzoneElement(this.dropzone)
            },
            trashed: () => {
              return !this.snapped
            }
          },
          actions: {
            setInteract: () => {
              if (interact.isSet(this)) return

              const interactable = interact(this)
              interactable.styleCursor(false)
              interactable.on('down', this.grab.bind(this))
              interactable.on('up', this.unGrab.bind(this))
              interactable.draggable({
                onstart: this.startDragging.bind(this),
                onmove: this.dragMove.bind(this),
                onend: this.endDragging.bind(this)
              })

              const dropzone = this.dropzone
              if (isCircuitDropzoneElement(dropzone)) {
                this.snappedDropzone = dropzone
              } else {
                this.snappedDropzone = null
              }

              this.setAttribute('data-draggable', '')
            },
            unsetInteract: () => {
              interact(this).unset()
              this.removeAttribute('data-draggable')
            },
            delete: () => {
              interact(this).unset()
              this.dispatchEvent(new Event('operation-delete', {bubbles: true}))
            },
            grab: (_context, event) => {
              if (event.type !== 'GRAB') return

              this.grabbed = true
              this.dispatchEvent(new Event('operation-grab', {bubbles: true}))

              if (isPaletteDropzoneElement(this.dropzone)) {
                this.snapped = false
                this.moveByOffset(event.x, event.y)
              }
            },
            ungrab: () => {
              this.grabbed = false
              this.dispatchEvent(new Event('operation-ungrab', {bubbles: true}))
              if (!this.snapped && !this.dragging) this.delete()
            },
            startDragging: () => {
              this.dragging = true
            },
            endDragging: () => {
              this.grabbed = false
              this.dragging = false

              this.dispatchEvent(new Event('operation-enddragging', {bubbles: true}))
              if (this.snapped) {
                this.moveTo(0, 0)
                this.dispatchEvent(new Event('operation-drop', {bubbles: true}))
              } else {
                this.delete()
              }
            },
            dragMove: (_context, event) => {
              if (event.type !== 'DRAG MOVE') return

              this.move(event.dx, event.dy)
            },
            snap: (_context, event) => {
              if (event.type !== 'SNAP') return

              const snapTargetInfo = {x: event.x, y: event.y}
              this.dispatchEvent(new CustomEvent('operation-in-snap-range', {detail: {snapTargetInfo}, bubbles: true}))

              this.moveTo(0, 0)

              if (this.snappedDropzone) {
                this.snappedDropzone.dispatchEvent(new Event('operation-unsnap', {bubbles: true}))
              }

              this.snappedDropzone = this.dropzone as CircuitDropzoneElement
              this.dispatchEvent(new Event('operation-snap', {bubbles: true}))
            },
            unsnap: () => {
              this.snapped = false
              if (this.snappedDropzone) {
                this.dispatchEvent(new Event('operation-unsnap', {bubbles: true}))
              }
            }
          }
        }
      )

      this.draggableService = interpret(this.draggableMachine) // .onTransition(state => console.log(state.value))
      this.draggableService.start()
    }

    delete(): void {
      this.draggableService.send({type: 'DELETE'})
    }

    set snapTargets(values: Array<{x: number; y: number}>) {
      interact(this).draggable({
        modifiers: [
          interact.modifiers.snap({
            targets: values,
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
        this.draggableService.send({type: 'SNAP', x: snapTargetInfo.x, y: snapTargetInfo.y})
      } else {
        this.draggableService.send({type: 'UNSNAP'})
      }
    }

    private grab(event: MouseEvent): void {
      this.draggableService.send({type: 'GRAB', x: event.offsetX, y: event.offsetY})
    }

    private unGrab(): void {
      this.draggableService.send({type: 'UNGRAB'})
    }

    private startDragging(): void {
      this.draggableService.send({type: 'DRAG START'})
    }

    private endDragging(): void {
      this.draggableService.send({type: 'DRAG END'})
    }

    private dragMove(event: InteractEvent): void {
      this.draggableService.send({type: 'DRAG MOVE', dx: event.dx, dy: event.dy})
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
