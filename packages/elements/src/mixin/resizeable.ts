import {CircuitDropzoneElement, isCircuitDropzoneElement} from '../circuit-dropzone-element'
import {Util, describe} from '@qni/common'
import {attr, target} from '@github/catalyst'
import {createMachine, interpret} from 'xstate'
import {Constructor} from './constructor'
import {InteractEvent} from '@interactjs/types'
import {PaletteDropzoneElement} from '../palette-dropzone-element'
import interact from 'interactjs'
import {isPaletteDropzoneElement} from './draggable'

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
  | {type: 'SNAP_RESIZE_HANDLE'}

export function ResizeableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Resizeable> & TBase {
  class ResizeableMixinClass extends Base {
    @attr nqubit = 1
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
              SNAP_RESIZE_HANDLE: {
                target: 'resizing',
                actions: ['snap']
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
            this.dispatchEvent(new CustomEvent('resizeable:init', {bubbles: true}))
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
            this.dispatchEvent(new CustomEvent('resizeable:grab-resize-handle', {bubbles: true}))
          },
          releaseResizeHandle: (_context, event) => {
            Util.need(event.type === 'RELEASE_RESIZE_HANDLE', 'event type must be RELEASE_RESIZE_HANDLE')

            this.resizing = false
          },
          startResizing: (_context, event) => {
            Util.need(event.type === 'START_RESIZING', 'event type must be START_RESIZING')

            this.resizing = true
          },
          snap: (_context, event) => {
            Util.need(event.type === 'SNAP_RESIZE_HANDLE', 'event type must be SNAP_RESIZE_HANDLE')

            this.dispatchEvent(new CustomEvent('resizeable:resize', {bubbles: true}))
          },
          endResizing: () => {
            this.resizing = false
            this.moveResizeHandleTo(0, 0)
            this.dispatchEvent(new CustomEvent('resizeable:end-resizing', {bubbles: true}))
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

    private resizeHandleMoveEventListener(event: InteractEvent) {
      const snapModifier = event.modifiers![0]

      if (snapModifier.inRange) {
        const snapTargetInfo = snapModifier.target.source
        this.dispatchEvent(
          new CustomEvent('resizeable:resize-handle-in-snap-range', {detail: {snapTargetInfo}, bubbles: true})
        )

        this.moveResizeHandleTo(0, 0)

        const dropzone = this.parentElement
        if (!isCircuitDropzoneElement(dropzone)) {
          throw new Error('ResizeableMixin: parentElement is not CircuitDropzoneElement')
        }

        this.resizeableService.send({type: 'SNAP_RESIZE_HANDLE'})
      }
    }

    get resizeHandleDropzone(): CircuitDropzoneElement | PaletteDropzoneElement {
      const el = this.parentElement
      Util.notNull(el)

      if (!(isCircuitDropzoneElement(el) || isPaletteDropzoneElement(el))) {
        throw new Error('ResizeableMixin: parentElement is not CircuitDropzoneElement or PaletteDropzoneElement')
      }

      return el as CircuitDropzoneElement | PaletteDropzoneElement
    }

    initResizeable(): void {
      if (this.resizeableService.state !== undefined) {
        return
      }

      this.resizeableService.start()
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
