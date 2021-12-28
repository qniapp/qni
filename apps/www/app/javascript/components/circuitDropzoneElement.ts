import '@interactjs/actions/drag'
import '@interactjs/actions/drop'
import '@interactjs/auto-start'
import '@interactjs/dev-tools'
import '@interactjs/modifiers'
import {CircuitOperation, CircuitOperationElement, IGateOperation, I_GATE_OPERATION_TYPE} from '../lib'
import {attr, controller, target} from '@github/catalyst'
import {html, render} from '@github/jtml'
import {CircuitStepElement} from './circuitStepElement'
import {DragAndDroppable} from './mixins/dragAndDroppable'
import {Operation} from './mixins/sizeable'
import interact from '@interactjs/interact'

class IGate {
  serialize(): IGateOperation {
    return {type: I_GATE_OPERATION_TYPE}
  }

  toJson(): string {
    return I_GATE_OPERATION_TYPE
  }
}

const wires = html`<svg id="wires" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
  <line
    id="wire-input"
    x1="0"
    y1="50"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-output"
    x1="50"
    y1="50"
    x2="100"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-top"
    x1="50"
    y1="0"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-bottom"
    x1="50"
    y1="100"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
</svg>`

@controller
export class CircuitDropzoneElement extends HTMLElement {
  @target slotEl: HTMLSlotElement

  @attr size = ''
  @attr inputWireQuantum = false
  @attr outputWireQuantum = false
  @attr wireTop = false
  @attr wireBottom = false
  @attr occupied = false
  @attr draggableTagName = ''
  @attr shadow = false
  @attr childrenLoaded = true
  @attr wireCount = 0

  get draggableElement(): CircuitOperationElement | null {
    const el = this.children[0] as HTMLElement

    if (el === undefined) return null
    if (!(el as unknown as DragAndDroppable).snapped) return null

    return el as CircuitOperationElement
  }

  get circuitStep(): CircuitStepElement | null {
    const el = this.parentElement
    if (el !== null && el.nodeName === 'CIRCUIT-STEP') {
      return el as CircuitStepElement
    }
    return null
  }

  set wireQuantum(value: boolean) {
    this.inputWireQuantum = value
    this.outputWireQuantum = value
  }

  get snapTarget(): {x: number; y: number} {
    const rect = this.getBoundingClientRect()

    return {
      x: window.pageXOffset + rect.left + this.clientWidth / 2,
      y: window.pageYOffset + rect.top + this.clientHeight / 2
    }
  }

  index(): number | null {
    const circuitStep = this.closest('circuit-step') as CircuitStepElement
    if (circuitStep === null) return null

    return circuitStep.dropzoneIndex(this)
  }

  prev(): CircuitDropzoneElement | null {
    const index = this.index()

    if (index === null) return null
    if (this.circuitStep === null) return null

    const prevStep = this.circuitStep.prev()
    if (prevStep === null) return null

    return prevStep.dropzone(index)
  }

  next(): CircuitDropzoneElement | null {
    const index = this.index()

    if (index === null) return null
    if (this.circuitStep === null) return null
    const nextStep = this.circuitStep.next()
    if (nextStep === null) return null

    return nextStep.dropzone(index)
  }

  assign(operation: HTMLElement): void {
    this.append(operation)
    this.occupied = true
  }

  toJson(): string | number {
    const operation = this.draggableElement

    if (operation === null || operation === undefined) {
      return '1'
    } else {
      return operation.toJson()
    }
  }

  connectedCallback(): void {
    this.attachShadow({mode: 'open'})
    this.update()
    this.slotEl.addEventListener('slotchange', this.handleSlotChange.bind(this))
    this.initDropzone()

    this.addEventListener('dragAndDroppable.grab', this.enableDrop)
    this.addEventListener('dragAndDroppable.grab', this.dispatchDropzoneGrabEvent)
    this.addEventListener('dragAndDroppable.enddragging', this.dispatchDropzoneDroppedEvent)
    this.addEventListener('dragAndDroppable.snap', this.snapDraggable)
    this.addEventListener('dragAndDroppable.unsnap', this.unsnapDraggable)
    this.addEventListener('dragAndDroppable.trash', this.clear)
  }

  private clear(event: Event): void {
    const operationEl = (event as CustomEvent).detail.element as HTMLElement

    this.removeChild(operationEl)
  }

  private dispatchDropzoneDroppedEvent(): void {
    this.dispatchEvent(
      new CustomEvent('dropzone.drop', {
        detail: {element: this},
        bubbles: true
      })
    )
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return
    if (this.childElementCount === 0) return

    if (name === 'data-wire-count' && newValue !== null) {
      const operation = this.children[0]
      operation.setAttribute('data-wire-count', newValue)
    }
  }

  update(): void {
    render(
      html`<style>
          :host([data-size='xs']) {
            height: 1.5rem;
            width: 1rem;
          }
          :host([data-size='sm']) {
            height: 2.25rem;
            width: 1.5rem;
          }
          :host,
          :host([data-size='base']) {
            height: 3rem;
            width: 2rem;
          }
          :host([data-size='lg']) {
            height: 3.75rem;
            width: 2.5rem;
          }
          :host([data-size='xl']) {
            height: 4.5rem;
            width: 3rem;
          }
          @media (min-width: 768px) {
            :host([data-size='xs']) {
              height: 1rem;
              width: 1.5rem;
            }
            :host([data-size='sm']) {
              height: 1.5rem;
              width: 2.25rem;
            }
            :host,
            :host([data-size='base']) {
              height: 2rem;
              width: 3rem;
            }
            :host([data-size='lg']) {
              height: 2.5rem;
              width: 3.75rem;
            }
            :host([data-size='xl']) {
              height: 3rem;
              width: 4.5rem;
            }
          }
          :host([data-wire-count='1']),
          :host([data-wire-count='2']) {
            height: ${Operation.size.xl * 1.5}rem;
            width: ${Operation.size.xl}rem;
          }
          :host([data-wire-count='3']) {
            height: ${Operation.size.lg * 1.5}rem;
            width: ${Operation.size.lg}rem;
          }
          :host([data-wire-count='4']) {
            height: ${Operation.size.base * 1.5}rem;
            width: ${Operation.size.base}rem;
          }
          :host([data-wire-count='5']),
          :host([data-wire-count='6']) {
            height: ${Operation.size.sm * 1.5}rem;
            width: ${Operation.size.sm}rem;
          }
          :host([data-wire-count='7']),
          :host([data-wire-count='8']),
          :host([data-wire-count='9']),
          :host([data-wire-count='10']) {
            height: ${Operation.size.xs * 1.5}rem;
            width: ${Operation.size.xs}rem;
          }
          @media (min-width: 768px) {
            :host([data-wire-count='1']),
            :host([data-wire-count='2']),
            :host([data-wire-count='3']),
            :host([data-wire-count='4']),
            :host([data-wire-count='5']),
            :host([data-wire-count='6']),
            :host([data-wire-count='7']),
            :host([data-wire-count='8']),
            :host([data-wire-count='9']),
            :host([data-wire-count='10']) {
              height: ${Operation.size.base}rem;
              width: ${Operation.size.base * 1.5}rem;
            }
          }
          :host([data-wire-top]) #wire-top {
            display: block;
            transform-origin: top;
            transform: translateY(-25%) scaleY(1.5);
          }
          :host([data-wire-bottom]) #wire-bottom {
            display: block;
            transform-origin: bottom;
            transform: translateY(25%) scaleY(1.5);
          }
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
            bottom: 0px;
            left: 0px;
            right: 0px;
            top: 0px;
            height: calc(100%);
            width: calc(100%);
            overflow: visible;
            transform: rotate(90deg);
            transform-origin: center;
          }
          :host([data-shadow]) #wires {
            display: none;
          }
          @media (min-width: 768px) {
            #wires {
              transform: rotate(0);
            }
          }
          ::slotted(*) {
            position: absolute;
            z-index: 10;
          }
          #wire-input,
          #wire-output {
            color: var(--colors-wolf, #777777);
          }
          :host(:not([data-input-wire-quantum])) #wire-input,
          :host([data-input-wire-quantum='false']) #wire-input {
            color: var(--colors-swan, #e5e5e5);
          }
          :host(:not([data-output-wire-quantum])) #wire-output,
          :host([data-output-wire-quantum='false']) #wire-output {
            color: var(--colors-swan, #e5e5e5);
          }
          #wire-input {
            transform: translateX(-25%) scaleX(1.5);
            transform-origin: left;
          }
          #wire-output {
            transform: translateX(25%) scaleX(1.5);
            transform-origin: right;
          }
          @media (min-width: 768px) {
            #wire-input,
            #wire-output {
              transform: none;
            }
          }
          :host([data-draggable-tag-name='write-gate'][data-occupied]) #wires > #wire-input,
          :host([data-draggable-tag-name='measurement-gate'][data-occupied]) #wires > #wire-input {
            transform: scaleX(0.75) translateX(-33.3%);
          }
          @media (min-width: 768px) {
            :host([data-draggable-tag-name='write-gate'][data-occupied]) #wires > #wire-input,
            :host([data-draggable-tag-name='measurement-gate'][data-occupied]) #wires > #wire-input {
              transform: scaleX(0.33) translateX(0);
            }
          }
          :host([data-draggable-tag-name='write-gate'][data-occupied]) #wires > #wire-output,
          :host([data-draggable-tag-name='measurement-gate'][data-occupied]) #wires > #wire-output {
            transform: scaleX(0.75) translateX(33.3%);
          }
          @media (min-width: 768px) {
            :host([data-draggable-tag-name='write-gate'][data-occupied]) #wires > #wire-output,
            :host([data-draggable-tag-name='measurement-gate'][data-occupied]) #wires > #wire-output {
              transform: scaleX(0.33) translateX(0);
            }
          }
          #wire-top,
          #wire-bottom {
            color: var(--colors-gate, #43c000);
            stroke-width: 4;
            display: none;
          }
        </style>

        <div id="body" data-target="circuit-dropzone.body">
          <slot data-target="circuit-dropzone.slotEl"></slot>
          ${wires}
        </div>`,
      this.shadowRoot!
    )

    if (this.childElementCount === 1) {
      const operation = this.children[0]

      this.childrenLoaded = false
      this.occupied = true
      this.draggableTagName = operation.tagName.toLowerCase()
    } else if (this.childElementCount > 1) {
      throw new Error('A dropzone cannot hold multiple operations.')
    }
  }

  private handleSlotChange(): void {
    if (this.childElementCount > 1) {
      throw new Error('A dropzone cannot hold multiple operations.')
    } else if (this.childElementCount === 0) {
      this.draggableTagName = ''
      this.occupied = false
      this.enableDrop()
      return
    }

    const operation = this.children[0]
    const nodeName = operation.nodeName

    operation.setAttribute('data-wire-count', this.wireCount.toString())

    if (this.size !== '') {
      operation.setAttribute('data-size', this.size)
    }

    this.draggableTagName = nodeName.toLowerCase()
    this.occupied = true
    this.disableDrop()

    if (this.childrenLoaded) {
      this.dispatchEvent(
        new CustomEvent('dropzone.snap', {
          detail: {element: this},
          bubbles: true
        })
      )
    } else {
      this.childrenLoaded = true
    }

    this.dispatchEvent(
      new CustomEvent('dragAndDroppable.load', {
        detail: {element: operation},
        bubbles: true
      })
    )
  }

  private dispatchDropzoneGrabEvent(): void {
    this.dispatchEvent(
      new CustomEvent('dropzone.grab', {
        detail: {element: this},
        bubbles: true
      })
    )
  }

  private initDropzone(): void {
    interact(this).dropzone({
      accept: '[data-drag-and-drop]',
      overlap: 'center'
    })
  }

  private enableDrop(): void {
    interact(this).dropzone(true)
  }

  private disableDrop(): void {
    interact(this).dropzone(false)
  }

  private snapDraggable(event: Event): void {
    const draggable = (event as CustomEvent).detail.element as DragAndDroppable

    this.append(draggable as unknown as Node)
    draggable.moveTo(0, 0)
  }

  private unsnapDraggable(): void {
    this.draggableTagName = ''
    this.occupied = false
    this.dispatchEvent(
      new CustomEvent('dropzone.unsnap', {
        detail: {element: this},
        bubbles: true
      })
    )
  }

  updateWires(): void {
    const draggableTagName = this.draggableTagName
    const prevDropzone = this.prev()

    if (draggableTagName === 'write-gate') {
      if (prevDropzone === null) {
        this.inputWireQuantum = false
      } else {
        this.inputWireQuantum = prevDropzone.outputWireQuantum
      }
      this.outputWireQuantum = true
    } else if (draggableTagName === 'measurement-gate') {
      if (prevDropzone === null) {
        this.inputWireQuantum = false
      } else {
        this.inputWireQuantum = prevDropzone.outputWireQuantum
      }
      this.outputWireQuantum = false
    } else {
      if (prevDropzone === null) {
        this.inputWireQuantum = false
        this.outputWireQuantum = false
      } else {
        this.inputWireQuantum = prevDropzone.outputWireQuantum
        this.outputWireQuantum = prevDropzone.outputWireQuantum
      }
    }
  }

  remove(): void {
    this.parentElement?.removeChild(this)
  }

  serialize(): CircuitOperation {
    if (this.draggableElement === null) {
      return new IGate().serialize()
    }
    return this.draggableElement.serialize()
  }
}
