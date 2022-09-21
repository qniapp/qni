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
  | {type: 'GRAB_HANDLE'; x: number; y: number}
  | {type: 'RELEASE_HANDLE'}
  | {type: 'START_RESIZING'}
  | {type: 'END_RESIZING'}
  | {type: 'SNAP_HANDLE'}
  | {type: 'UNSNAP_HANDLE'}

export function ResizeableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Resizeable> & TBase {
  class ResizeableMixinClass extends Base {
    @attr nqubit = 1
    @attr resizeHandleX = 0
    @attr resizeHandleY = 0
    @attr debugResizeable = true
    @attr resizing = false
    @target resizeHandle!: HTMLElement

    private resizeHandleSnappedDropzone!: CircuitDropzoneElement | null | undefined

    private resizeableMachine = createMachine<ResizeableContext, ResizeableEvent>(
      {
        id: 'resizeable',
        initial: 'idle',
        states: {
          idle: {
            entry: ['init'],
            on: {
              SET_INTERACT: {
                target: 'handleGrabbable',
                actions: ['setInteract']
              }
            }
          },
          handleGrabbable: {
            on: {
              GRAB_HANDLE: {
                target: 'handleGrabbed',
                actions: ['grabResizeHandle']
              },
              UNSET_INTERACT: {
                target: 'idle'
              }
            }
          },
          handleGrabbed: {
            on: {
              START_RESIZING: {
                target: 'resizeStart',
                actions: ['startResizing']
              },
              RELEASE_HANDLE: {
                target: 'handleGrabbable',
                actions: ['releaseResizeHandle']
              }
            }
          },
          resizeStart: {
            always: [{target: 'resizing'}]
          },
          resizing: {
            on: {
              SNAP_HANDLE: {
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
            always: [{target: 'handleGrabbable'}]
          }
        }
      },
      {
        actions: {
          init: () => {
            this.dispatchEvent(new Event('resizeable-init', {bubbles: true}))
          },
          setInteract: () => {
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

            const dropzone = this.resizeHandleDropzone
            if (isCircuitDropzoneElement(dropzone)) {
              this.resizeHandleSnappedDropzone = dropzone
            } else {
              this.resizeHandleSnappedDropzone = null
            }
          },
          grabResizeHandle: (_context, event) => {
            if (event.type !== 'GRAB_HANDLE') return

            this.resizing = true
            this.dispatchEvent(new Event('resize-handle-grab', {bubbles: true}))
          },
          releaseResizeHandle: (_context, event) => {
            if (event.type !== 'RELEASE_HANDLE') return

            this.resizing = false
          },
          startResizing: () => {
            this.resizing = true
          },
          snap: () => {
            this.dispatchEvent(new Event('resize-handle-snap', {bubbles: true}))
          },
          endResizing: () => {
            this.resizing = false
            this.moveResizeHandleTo(0, 0)
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
        this.dispatchEvent(new CustomEvent('resize-handle-in-snap-range', {detail: {snapTargetInfo}, bubbles: true}))

        this.moveResizeHandleTo(0, 0)

        const dropzone = this.parentElement
        if (!isCircuitDropzoneElement(dropzone)) {
          throw new Error('ResizeableMixin: parentElement is not CircuitDropzoneElement')
        }

        if (this.resizeHandleSnappedDropzone && this.resizeHandleSnappedDropzone !== this.resizeHandleDropzone) {
          this.resizeableService.send({type: 'UNSNAP_HANDLE'})
        }

        this.resizeableService.send({type: 'SNAP_HANDLE'})
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
      if (event.currentTarget !== this.resizeHandle) return

      this.resizeableService.send({type: 'GRAB_HANDLE', x: event.offsetX, y: event.offsetY})
    }

    private releaseResizeHandle(event: MouseEvent): void {
      if (event.currentTarget !== this.resizeHandle) return

      this.resizeableService.send({type: 'RELEASE_HANDLE'})
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
