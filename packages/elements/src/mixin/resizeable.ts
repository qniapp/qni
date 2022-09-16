import {Util, describe} from '@qni/common'
import {attr, target} from '@github/catalyst'
import {createMachine, interpret} from 'xstate'
import {Constructor} from './constructor'

export const isResizeable = (arg: unknown): arg is Resizeable =>
  arg !== undefined && arg !== null && typeof (arg as Resizeable).resizeable === 'boolean'

export declare class Resizeable {
  set resizeable(value: boolean)
  initResizeable(): void
}

type ResizeableContext = Record<string, never>
type ResizeableEvent = {type: 'SET_INTERACT'} | {type: 'UNSET_INTERACT'}

export function ResizeableMixin<TBase extends Constructor<HTMLElement>>(Base: TBase): Constructor<Resizeable> & TBase {
  class ResizeableMixinClass extends Base {
    @attr debugResizeable = true
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
                target: 'grabbable',
                actions: ['setInteract']
              }
            }
          },
          grabbable: {
            on: {
              UNSET_INTERACT: {
                target: 'idle'
              }
            }
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

            // const interactable = interact(this)
            // interactable.styleCursor(false)
            // interactable.on('down', this.grab.bind(this))
            // interactable.on('up', this.release.bind(this))
            // interactable.draggable({
            //   onstart: this.startDragging.bind(this),
            //   onmove: this.dragMove.bind(this),
            //   onend: this.endDragging.bind(this)
            // })

            // const dropzone = this.dropzone
            // if (isCircuitDropzoneElement(dropzone)) {
            //   this.snappedDropzone = dropzone
            // } else {
            //   this.snappedDropzone = null
            // }
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

    initResizeable(): void {
      if (this.resizeableService.state !== undefined) {
        return
      }

      this.resizeableService.start()
    }
  }

  return ResizeableMixinClass as Constructor<Resizeable> & TBase
}
