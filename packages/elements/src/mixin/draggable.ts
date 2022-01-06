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

type Context = Record<string, never>
interface Schema {
  states: {
    noninteractable: Record<string, never>
    draggable: Record<string, never>
  }
}
type Transitions =
  | {type: 'SET INTERACT'}
  | {type: 'UNSET INTERACT'}
  | {type: 'GRAB'; x: number; y: number}
  | {type: 'UNGRAB'}
  | {type: 'DRAG START'}
  | {type: 'DRAG END'}
  | {type: 'DRAG MOVE'; dx: number; dy: number}

export function DraggableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Draggable> & TBase {
  class DraggableMixinClass extends Base {
    @attr operationX = 0
    @attr operationY = 0
    @attr grabbed = false
    @attr dragging = false
    @attr snapped = false
    @attr bit = -1

    private draggableMachine!: StateMachine<Context, Schema, Transitions> | undefined
    private draggableService!: Interpreter<Context, Schema, Transitions>
    private snappedDropzone!: CircuitDropzoneElement | null | undefined

    set draggable(value: boolean) {
      this.initStateMachine()

      if (value) {
        this.draggableService.send({type: 'SET INTERACT'})
      } else {
        this.draggableService.send({type: 'UNSET INTERACT'})
      }
      this.removeAttribute('data-grabbed')
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

    private initStateMachine(): void {
      if (this.draggableMachine !== undefined) return

      this.draggableMachine = createMachine<Context, Transitions>(
        {
          id: 'draggable',
          initial: 'noninteractable',
          states: {
            noninteractable: {
              on: {
                'SET INTERACT': {target: 'interactable'}
              }
            },
            interactable: {
              type: 'compound',
              initial: 'ungrabbed',
              entry: 'setInteract',
              exit: 'unsetInteract',
              on: {
                'UNSET INTERACT': {target: 'noninteractable'}
              },
              states: {
                ungrabbed: {
                  on: {
                    GRAB: {target: 'grabbed'}
                  }
                },
                grabbed: {
                  type: 'compound',
                  initial: 'nondragging',
                  entry: 'grab',
                  exit: 'ungrab',
                  on: {
                    UNGRAB: {target: 'ungrabbed'}
                  },
                  states: {
                    nondragging: {
                      on: {
                        'DRAG START': {target: 'dragging'}
                      }
                    },
                    dragging: {
                      type: 'compound',
                      initial: 'moving',
                      entry: 'startDragging',
                      exit: 'endDragging',
                      on: {
                        'DRAG END': {target: 'nondragging'}
                      },
                      states: {
                        moving: {
                          entry: 'dragMove',
                          on: {
                            'DRAG MOVE': {target: 'moving'}
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        {
          actions: {
            setInteract: () => {
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
            }
          }
        }
      )

      this.draggableService = interpret(this.draggableMachine)
      this.draggableService.start()
    }

    private deinitDraggable(): void {
      interact(this).unset()
    }

    delete(): void {
      this.deinitDraggable()
      this.dispatchEvent(new Event('operation-delete', {bubbles: true}))
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
