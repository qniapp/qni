import {Util, describe, emitEvent} from '@qni/common'
import {attr, target} from '@github/catalyst'
import {createMachine, interpret} from 'xstate'
import {Constructor} from './constructor'
import {InteractEvent} from '@interactjs/types'
import interact from 'interactjs'

export const isResizeable = (arg: unknown): arg is Resizeable =>
  arg !== undefined && arg !== null && typeof (arg as Resizeable).resizeable === 'boolean'

export declare class Resizeable {
  set resizeable(value: boolean)
  get resizeHandle(): HTMLElement
  set resizeHandleSnapTargets(values: Array<{x: number; y: number}>)
  get nqubit(): number
  set nqubit(value: number)
  initResizeable(): void
}

type ResizeableContext = Record<string, never>
type ResizeableEvent =
  | {type: 'SET_INTERACT'}
  | {type: 'UNSET_INTERACT'}
  | {type: 'GRAB_RESIZE_HANDLE'; x: number; y: number}
  | {type: 'RELEASE_RESIZE_HANDLE'}
  | {type: 'START_RESIZING'}
  | {type: 'END_RESIZING'}
  | {type: 'RESIZE_HANDLE_SNAP'}

// taken from:
// https://github.com/Microsoft/TypeScript/issues/15480#issuecomment-1245429783
type ArrayOfLength<N extends number, A extends any[] = []> = A['length'] extends N ? A : ArrayOfLength<N, [...A, any]>
type Inc<N extends number> = number & [...ArrayOfLength<N>, any]['length']
type Range<Start extends number, End extends number> = number &
  (Start extends End ? never : Start | Range<Inc<Start>, End>)

export function ResizeableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Resizeable> & TBase {
  class ResizeableMixinClass extends Base {
    @attr nqubit: Range<1, 16> = 1
    @attr resizeHandleX = 0
    @attr resizeHandleY = 0
    @attr debugResizeable = false
    @attr resizing = false
    @target resizeHandle!: HTMLElement

    private resizeableMachine = createMachine<ResizeableContext, ResizeableEvent>(
      {
        id: 'resizeable',
        initial: 'idle',
        states: {
          idle: {
            entry: ['init'],
            on: {
              SET_INTERACT: {
                target: 'resizeHandleGrabbable',
                actions: ['setInteract']
              }
            }
          },
          resizeHandleGrabbable: {
            on: {
              GRAB_RESIZE_HANDLE: {
                target: 'resizeHandleGrabbed',
                actions: ['grabResizeHandle']
              },
              UNSET_INTERACT: {
                target: 'idle'
              }
            }
          },
          resizeHandleGrabbed: {
            on: {
              START_RESIZING: {
                target: 'resizeStart',
                actions: ['startResizing']
              },
              RELEASE_RESIZE_HANDLE: {
                target: 'resizeHandleGrabbable',
                actions: ['releaseResizeHandle']
              }
            }
          },
          resizeStart: {
            always: [{target: 'resizing'}]
          },
          resizing: {
            on: {
              RESIZE_HANDLE_SNAP: {
                target: 'resizing',
                actions: ['emitResizeEvent']
              },
              END_RESIZING: {
                target: 'resizeEnd'
              }
            }
          },
          resizeEnd: {
            entry: ['endResizing'],
            always: [{target: 'resizeHandleGrabbable'}]
          }
        }
      },
      {
        actions: {
          init: () => {
            emitEvent('resizeable:init', {}, this)
          },
          setInteract: (_context, event) => {
            Util.need(event.type === 'SET_INTERACT', 'event type must be SET_INTERACT')
            Util.notNull(this.resizeHandle)

            const interactable = interact(this.resizeHandle)
            interactable.styleCursor(false)
            interactable.on('down', this.grabResizeHandle.bind(this))
            interactable.on('up', this.releaseResizeHandle.bind(this))

            interactable.draggable({
              onstart: this.startResizing.bind(this),
              onmove: this.moveResizeHandle.bind(this),
              onend: this.endResizing.bind(this)
            })
          },
          grabResizeHandle: (_context, event) => {
            Util.need(event.type === 'GRAB_RESIZE_HANDLE', 'event type must be GRAB_RESIZE_HANDLE')

            this.resizing = true
            emitEvent('resizeable:grab-resize-handle', {}, this)
          },
          releaseResizeHandle: (_context, event) => {
            Util.need(event.type === 'RELEASE_RESIZE_HANDLE', 'event type must be RELEASE_RESIZE_HANDLE')

            this.resizing = false
          },
          startResizing: (_context, event) => {
            Util.need(event.type === 'START_RESIZING', 'event type must be START_RESIZING')

            this.resizing = true
          },
          emitResizeEvent: (_context, event) => {
            Util.need(event.type === 'RESIZE_HANDLE_SNAP', 'event type must be RESIZE_HANDLE_SNAP')

            emitEvent('resizeable:resize', {}, this)
          },
          endResizing: () => {
            this.resizing = false
            this.moveResizeHandleTo(0, 0)
            emitEvent('resizeable:end-resizing', {}, this)
          }
        }
      }
    )

    public resizeableService = interpret(this.resizeableMachine).onTransition(state => {
      if (this.debugResizeable) {
        // eslint-disable-next-line no-console
        console.log(`resizeable: ${describe(state.value)}`)
      }
    })

    get resizeable(): boolean {
      return this.resizeableService.state !== undefined
    }

    set resizeable(value: boolean) {
      if (value) {
        this.resizeableService.send({type: 'SET_INTERACT'})
      } else {
        this.resizeableService.send({type: 'UNSET_INTERACT'})
      }
    }

    set resizeHandleSnapTargets(values: Array<{x: number; y: number}>) {
      interact(this.resizeHandle).draggable({
        modifiers: [
          interact.modifiers.snap({
            targets: values,
            relativePoints: [{x: 0.5, y: 0.5}]
          })
        ],
        listeners: {
          move: this.resizeHandleMoveEventListener.bind(this)
        }
      })
    }

    initResizeable(): void {
      if (this.resizeableService.state !== undefined) return

      this.resizeableService.start()
    }

    private resizeHandleMoveEventListener(event: InteractEvent) {
      const snapModifier = event.modifiers![0]
      if (!snapModifier.inRange) return

      const snapTargetInfo = snapModifier.target.source
      emitEvent('resizeable:resize-handle-in-snap-range', {snapTargetInfo}, this)

      this.moveResizeHandleTo(0, 0)
      this.resizeableService.send({type: 'RESIZE_HANDLE_SNAP'})
    }

    private grabResizeHandle(event: MouseEvent): void {
      if (event.currentTarget !== this.resizeHandle) {
        throw new Error('ResizeableMixin: grabResizeHandle: event.currentTarget !== this.resizeHandle')
      }

      this.resizeableService.send({type: 'GRAB_RESIZE_HANDLE', x: event.offsetX, y: event.offsetY})
    }

    private releaseResizeHandle(event: MouseEvent): void {
      if (event.currentTarget !== this.resizeHandle) {
        throw new Error('ResizeableMixin: releaseResizeHandle: event.currentTarget !== this.resizeHandle')
      }

      this.resizeableService.send({type: 'RELEASE_RESIZE_HANDLE'})
    }

    private startResizing(): void {
      this.resizeableService.send({type: 'START_RESIZING'})
    }

    private moveResizeHandle(event: InteractEvent): void {
      const x = this.resizeHandleX + event.dx
      const y = this.resizeHandleY + event.dy
      this.moveResizeHandleTo(x, y)
    }

    private moveResizeHandleTo(x: number, y: number): void {
      this.resizeHandleX = x
      this.resizeHandleY = y
      this.resizeHandle.style.transform = `translate(${x}px, ${y}px)`
    }

    private endResizing(): void {
      this.resizeableService.send({type: 'END_RESIZING'})
    }
  }

  return ResizeableMixinClass as Constructor<Resizeable> & TBase
}
