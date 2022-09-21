import {CircuitDropzoneElement, isCircuitDropzoneElement} from '../circuit-dropzone-element'
import {Util, describe} from '@qni/common'
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
  | {type: 'GRAB'; x: number; y: number}
  | {type: 'RELEASE'}
  | {type: 'START_RESIZING'}
  | {type: 'END_RESIZING'}
  | {type: 'SNAP'}
  | {type: 'UNSNAP'}

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
                target: 'grabbable',
                actions: ['setInteract']
              }
            }
          },
          grabbable: {
            on: {
              GRAB: {
                target: 'grabbed',
                actions: ['grabResizeHandle']
              },
              UNSET_INTERACT: {
                target: 'idle'
              }
            }
          },
          grabbed: {
            on: {
              START_RESIZING: {
                target: 'resizeStart',
                actions: ['startResizing']
              },
              RELEASE: {
                target: 'grabbable',
                actions: ['releaseResizeHandle']
              }
            }
          },
          resizeStart: {
            always: [{target: 'resizing'}]
          },
          resizing: {
            on: {
              END_RESIZING: {
                target: 'resizeEnd'
              }
            }
          },
          resizeEnd: {
            entry: ['endResizing'],
            always: [{target: 'grabbable'}]
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
            if (dropzone) {
              this.resizeHandleSnappedDropzone = dropzone
            } else {
              this.resizeHandleSnappedDropzone = null
            }
          },
          grabResizeHandle: (_context, event) => {
            if (event.type !== 'GRAB') return

            this.resizing = true
            this.dispatchEvent(new Event('resize-handle-grab', {bubbles: true}))
          },
          releaseResizeHandle: (_context, event) => {
            if (event.type !== 'RELEASE') return

            this.resizing = false
          },
          startResizing: () => {
            this.resizing = true
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
            range: this.resizeHandleSnapRange,
            relativePoints: [{x: 0.5, y: 0.5}]
          })
        ],
        listeners: {
          move: this.resizeHandleMoveEventListener.bind(this)
        }
      })
    }

    // これで合ってる?
    get resizeHandleSnapRange(): number {
      return 32
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
          this.resizeableService.send({type: 'UNSNAP'})
        }

        console.log('*** SNAP ***')
        this.resizeableService.send({type: 'SNAP'})
      }
    }

    get resizeHandleDropzone(): CircuitDropzoneElement | null {
      const el = this.parentElement
      Util.notNull(el)

      if (!isCircuitDropzoneElement(el)) {
        throw new Error('ResizeableMixin: parentElement is not CircuitDropzoneElement')
      }

      return el as CircuitDropzoneElement
    }

    initResizeable(): void {
      if (this.resizeableService.state !== undefined) {
        return
      }

      this.resizeableService.start()
    }

    private grabResizeHandle(event: MouseEvent): void {
      if (event.currentTarget !== this.resizeHandle) return

      this.resizeableService.send({type: 'GRAB', x: event.offsetX, y: event.offsetY})
    }

    private releaseResizeHandle(event: MouseEvent): void {
      if (event.currentTarget !== this.resizeHandle) return

      this.resizeableService.send({type: 'RELEASE'})
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
