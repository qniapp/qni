import '@interactjs/actions/drag'
import '@interactjs/actions/drop'
import '@interactjs/auto-start'
import '@interactjs/dev-tools'
import '@interactjs/modifiers'
import {Operation, isOperation} from './operation'
import {TemplateResult, html, render} from '@github/jtml'
import {attr, controller} from '@github/catalyst'
import {Util} from './util'
import {iconWires} from './icon'
import interact from '@interactjs/interact'

export const isCircuitDropzoneElement = (arg: unknown): arg is CircuitDropzoneElement =>
  arg !== undefined && arg !== null && arg instanceof CircuitDropzoneElement

@controller
export class CircuitDropzoneElement extends HTMLElement {
  @attr occupied = false
  @attr operationName = ''
  @attr inputWireQuantum = false
  @attr outputWireQuantum = false
  @attr connectTop = false
  @attr connectBottom = false
  @attr shadow = false

  get noConnections(): boolean {
    return !this.connectTop && !this.connectBottom
  }

  get operation(): Operation | null {
    const children = Array.from(this.children)
    const operations = children.filter((each): each is Operation => isOperation(each))

    if (operations.length === 0) {
      return null
    } else if (operations.length === 1) {
      return operations[0]
    } else {
      throw new Error('circuit-dropzone cannot hold multiple operations.')
    }
  }

  get snapTarget(): {x: number; y: number} {
    const rect = this.getBoundingClientRect()

    return {
      x: window.pageXOffset + rect.left + this.clientWidth / 2,
      y: window.pageYOffset + rect.top + this.clientHeight / 2
    }
  }

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.setOperationAttributes()
    this.initDropzone()

    this.addEventListener('operation-snap', this.snapOperation)
    this.addEventListener('operation-unsnap', this.unsnapOperation)
    this.addEventListener('operation-enddragging', this.dispatchDropEvent)
    this.addEventListener('operation-delete', this.deleteOperation)
  }

  update(): void {
    render(
      html`<style>
          #body {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
          }

          #connect-top,
          #connect-bottom {
            display: none;
          }

          :host([data-connect-top]) #connect-top {
            display: block;
          }

          :host([data-connect-bottom]) #connect-bottom {
            display: block;
          }

          ::slotted(*) {
            position: absolute;
            z-index: 10;
          }
        </style>

        <div id="body"><slot></slot>${this.wireSvg}</div>`,
      this.shadowRoot!
    )
  }

  put(operation: Operation): void {
    this.append(operation)
    this.setOperationAttributes()
  }

  private initDropzone(): void {
    interact(this).dropzone({
      accept: '[data-draggable]',
      overlap: 'center'
    })
  }

  private setOperationAttributes(): void {
    const operation = this.operation

    if (operation === null) {
      this.occupied = false
    } else {
      const dispatchOccupiedEvent = !this.occupied
      this.occupied = true
      this.operationName = operation.tagName.toLocaleLowerCase()
      operation.snapped = true
      if (dispatchOccupiedEvent) this.dispatchEvent(new Event('circuit-dropzone-occupied', {bubbles: true}))
    }
  }

  private snapOperation(): void {
    Util.notNull(this.operation)

    this.occupied = true
    this.operationName = this.operation.tagName.toLocaleLowerCase()
    this.dispatchEvent(new Event('circuit-dropzone-snap', {bubbles: true}))
  }

  private unsnapOperation(): void {
    this.occupied = false
    this.operationName = ''
    this.dispatchEvent(new Event('circuit-dropzone-unsnap', {bubbles: true}))
  }

  private dispatchDropEvent(): void {
    this.dispatchEvent(new Event('circuit-dropzone-drop', {bubbles: true}))
  }

  private deleteOperation(event: Event): void {
    const operation = event.target
    Util.need(isOperation(operation), `${operation} isn't an Operation.`)

    this.occupied = false
    this.operationName = ''
    this.removeChild(operation as Node)
  }

  private get wireSvg(): TemplateResult {
    return html([iconWires.data] as unknown as TemplateStringsArray)
  }
}
