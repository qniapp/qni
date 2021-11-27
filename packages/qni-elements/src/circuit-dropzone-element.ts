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

@controller
export class CircuitDropzoneElement extends HTMLElement {
  @attr occupied = false
  @attr operationName = ''
  @attr inputWireQuantum = false
  @attr outputWireQuantum = false
  @attr wireTop = false
  @attr wireBottom = false
  @attr shadow = false

  get operation(): Operation | null {
    if (this.childElementCount === 0) {
      return null
    } else if (this.childElementCount === 1) {
      const child = this.children[0]
      if (isOperation(child)) return child
    }

    const children = Array.from(this.children)
    const operations = children.filter(each => isOperation(each)) as Operation[]

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

          #wires {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            height: 100%;
            width: 100%;
          }

          #wire-top,
          #wire-bottom {
            display: none;
          }

          :host([data-wire-top]) #wire-top {
            display: block;
          }

          :host([data-wire-bottom]) #wire-bottom {
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
