import { DragAndDroppable, Operation, isWireable } from "./mixins"
import { attr, controller, target } from "@github/catalyst"
import { html, render } from "@github/jtml"
import { CircuitBlockElement } from "components/circuitBlockElement"
import { CircuitDropzoneElement } from "components/circuitDropzoneElement"
import { CircuitOperation } from "lib"
import { ControlGateElement } from "components/controlGateElement"
import { HGateElement } from "components/hGateElement"
import { PhaseGateElement } from "components/phaseGateElement"
import { QuantumCircuitElement } from "components/quantumCircuitElement"
import { RnotGateElement } from "components/rnotGateElement"
import { RxGateElement } from "components/rxGateElement"
import { RyGateElement } from "components/ryGateElement"
import { RzGateElement } from "components/rzGateElement"
import { SwapGateElement } from "components/swapGateElement"
import { Util } from "lib/util"
import { XGateElement } from "components/xGateElement"
import { YGateElement } from "components/yGateElement"
import { ZGateElement } from "components/zGateElement"

@controller
export class CircuitStepElement extends HTMLElement {
  @attr active = false
  @attr snap = false
  @attr breakpoint = false
  @attr keep = false
  @attr shadow = false

  @target slotEl: HTMLSlotElement

  get isInBlock(): boolean {
    if (this.closest("circuit-block") === null) {
      return false
    }
    return true
  }

  get block(): CircuitBlockElement {
    const block = this.closest("circuit-block") as CircuitBlockElement

    return block!
  }

  get wireCount(): number {
    return this.dropzones.length
  }

  get qubitCount(): number {
    let qubitCount = this.wireCount
    const dropzones = this.dropzones

    for (let i = qubitCount - 1; i >= 0 && !dropzones[i].occupied; i--) {
      qubitCount--
    }

    return qubitCount
  }

  get dropzones(): CircuitDropzoneElement[] {
    return this.elements<CircuitDropzoneElement>("circuit-dropzone")
  }

  get lastDropzone(): CircuitDropzoneElement {
    return this.dropzones[this.wireCount - 1]
  }

  get isEmpty(): boolean {
    if (this.keep) return false
    return this.dropzones.every((each) => !each.occupied)
  }

  dropzone(n: number): CircuitDropzoneElement {
    const el = this.dropzones[n]
    if (el === undefined) {
      throw new Error("Dropzone not found")
    }

    return el
  }

  dropzoneIndex(dropzone: CircuitDropzoneElement): number | null {
    const index = this.dropzones.indexOf(dropzone)
    if (index === -1) return null
    return index
  }

  bit(
    gate:
      | ControlGateElement
      | HGateElement
      | XGateElement
      | YGateElement
      | ZGateElement
      | PhaseGateElement
      | RnotGateElement
      | RxGateElement
      | RyGateElement
      | RzGateElement
      | SwapGateElement,
  ): number {
    const dropzoneEl = gate.parentElement as unknown as CircuitDropzoneElement
    if (dropzoneEl === null) {
      throw new Error("Dropzone not found")
    }

    return this.dropzones.indexOf(dropzoneEl)
  }

  get index(): number | null {
    const quantumCircuitEl = this.quantumCircuitElement()
    if (quantumCircuitEl === null) return null

    const all = quantumCircuitEl.steps
    const index = all.indexOf(this)

    if (index === -1) {
      throw new Error("circuitStep not found")
    }

    return index
  }

  prev(): CircuitStepElement | null {
    const index = this.index
    if (index === null || index === 0) return null

    const quantumCircuitEl = this.quantumCircuitElement()
    if (quantumCircuitEl === null) return null

    const all = quantumCircuitEl.steps
    return all[index - 1] || null
  }

  next(): CircuitStepElement | null {
    const index = this.index
    if (index === null) return null

    const quantumCircuitEl = this.quantumCircuitElement()
    if (quantumCircuitEl === null) return null

    const all = quantumCircuitEl.steps
    return all[index + 1] || null
  }

  activate(): void {
    this.dispatchEvent(
      new CustomEvent("step.click", {
        detail: { element: this },
        bubbles: true,
      }),
    )
  }

  appendDropzone(): CircuitDropzoneElement {
    const el = document.createElement(
      "circuit-dropzone",
    ) as CircuitDropzoneElement
    this.append(el)
    return el
  }

  appendOperation(operation: HTMLElement): void {
    const dropzone = document.createElement(
      "circuit-dropzone",
    ) as CircuitDropzoneElement
    dropzone.append(operation)
    dropzone.occupied = true
    this.append(dropzone)
  }

  remove(): void {
    this.parentElement?.removeChild(this)
  }

  private quantumCircuitElement(): QuantumCircuitElement | null {
    return this.closest("quantum-circuit") as QuantumCircuitElement
  }

  serialize(): CircuitOperation[] {
    return this.dropzones.map((each) => each.serialize())
  }

  toJson(): string {
    const jsons = this.dropzones.map((each) => each.toJson())
    while (jsons.length > 0 && jsons[jsons.length - 1] === "1") {
      jsons.pop()
    }
    if (jsons.length === 0) {
      return "[1]"
    }
    return `[${jsons.join(",")}]`
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void {
    if (oldValue === newValue) return

    if (name === "data-shadow") {
      if (newValue === null) {
        for (const each of this.dropzones) {
          each.shadow = false
        }
      }
    }
  }

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
    this.slotEl.addEventListener("slotchange", this.handleSlotChange.bind(this))
    this.updateConnections()
    this.updateWires()
    this.dispatchStepLoadEvent()

    this.addEventListener("mouseenter", this.dispatchStepMouseenterEvent)
    this.addEventListener("mouseleave", this.dispatchStepMouseleaveEvent)
    this.addEventListener("dropzone.snap", this.dispatchStepMouseenterEvent)
    this.addEventListener("dropzone.snap", this.dispatchStepSnapEvent)
    this.addEventListener("dropzone.unsnap", this.dispatchStepUnsnapEvent)
    this.addEventListener("dropzone.grab", this.dispatchStepSnapEvent)
    this.addEventListener("dropzone.drop", this.dispatchStepDropEvent)
    this.addEventListener("dragAndDroppable.enddragging", this.unsnap)
    this.addEventListener("click", this.activate)
  }

  private dispatchStepLoadEvent(): void {
    this.dispatchEvent(
      new CustomEvent("step.load", {
        detail: { element: this },
        bubbles: true,
      }),
    )
  }

  dispatchStepMouseenterEvent(): void {
    this.dispatchEvent(
      new CustomEvent("step.mouseenter", {
        detail: { element: this },
        bubbles: true,
      }),
    )
  }

  dispatchStepMouseleaveEvent(): void {
    this.dispatchEvent(
      new CustomEvent("step.mouseleave", {
        detail: { element: this },
        bubbles: true,
      }),
    )
  }

  private dispatchStepSnapEvent(event: Event): void {
    const dropzone = (event as CustomEvent).detail
      .element as CircuitDropzoneElement

    this.dispatchEvent(
      new CustomEvent("step.snap", {
        detail: { step: this, dropzone },
        bubbles: true,
      }),
    )
  }

  private dispatchStepUnsnapEvent(event: Event): void {
    const dropzone = (event as CustomEvent).detail
      .element as CircuitDropzoneElement

    this.unsnap()
    this.dispatchEvent(
      new CustomEvent("step.unsnap", {
        detail: { step: this, dropzone },
        bubbles: true,
      }),
    )
  }

  private dispatchStepDropEvent(): void {
    this.dispatchEvent(
      new CustomEvent("step.drop", {
        detail: { element: this },
        bubbles: true,
      }),
    )
  }

  private unsnap(): void {
    this.snap = false
  }

  update(): void {
    render(
      html`<style>
          :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          @media (min-width: 768px) {
            :host {
              flex-direction: row;
            }
          }
          :host([data-shadow]) {
            height: 0px;
          }
          @media (min-width: 768px) {
            :host([data-shadow]) {
              height: auto;
              width: 0px;
            }
          }
          #body {
            display: flex;
            flex-direction: row-reverse;
          }
          ::slotted(circuit-dropzone[data-wire-count="1"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="2"]:nth-of-type(n + 2)) {
            margin-right: ${Operation.size.xl / 2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="3"]:nth-of-type(n + 2)) {
            margin-right: ${Operation.size.lg / 2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="4"]:nth-of-type(n + 2)) {
            margin-right: ${Operation.size.base / 2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="5"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="6"]:nth-of-type(n + 2)) {
            margin-right: ${Operation.size.sm / 2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="7"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="8"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="9"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="10"]:nth-of-type(n + 2)) {
            margin-right: ${Operation.size.xs / 2}rem;
          }
          @media (min-width: 768px) {
            #body {
              flex-direction: column;
              padding-top: 1rem;
              padding-bottom: 1rem;
            }
            ::slotted(circuit-dropzone:nth-of-type(n + 2)) {
              margin-top: ${Operation.size.base / 2}rem !important;
              margin-right: 0 !important;
            }
          }
          #breakpoint {
            position: relative;
            min-height: 0px;
            min-width: 100%;
          }
          @media (min-width: 768px) {
            #breakpoint {
              min-height: 100%;
              min-width: 0px;
            }
          }
          #breakpoint-line {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            z-index: 20;
            padding: 2px;
            margin-top: -2px;
            background-color: var(--colors-cardinal, #ff4b4b);
            opacity: 0;
          }
          @media (min-width: 768px) {
            #breakpoint-line {
              margin-top: 0;
              margin-left: -2px;
            }
          }
          :host([data-active]:not([data-breakpoint])) #breakpoint-line {
            opacity: 0.3;
          }
          :host([data-breakpoint]) #breakpoint-line {
            opacity: 0.8;
          }
        </style>

        <div id="body">
          <slot data-target="circuit-step.slotEl"></slot>
        </div>
        <div id="breakpoint">
          <div id="breakpoint-line"></div>
        </div>`,
      this.shadowRoot!,
    )
  }

  private handleSlotChange(): void {
    if (this.shadow) {
      for (const each of this.dropzones) {
        each.shadow = true
      }
    }

    this.updateConnections()
    this.updateWires()
    for (const each of this.dropzones) {
      each.wireCount = this.wireCount
    }
  }

  updateConnections(): void {
    for (const dropzone of this.dropzones) {
      dropzone.wireTop = false
      dropzone.wireBottom = false
      const operation = dropzone.draggableElement
      if (isWireable(operation)) {
        operation.disconnectFromAll()
      }
    }

    // Swap
    if (this.swapGates.length !== 2) {
      for (const each of this.swapGates) {
        each.disable()
      }
    } else {
      const all = this.swapGates
      const swapBits = all.map((each) => this.bit(each))

      for (const swap of all) {
        swap.enable()
        swap.targets = swapBits
        swap.wireTop = all.some((each) => {
          return this.bit(each) < this.bit(swap)
        })
        swap.wireBottom = all.some((each) => {
          return this.bit(each) > this.bit(swap)
        })
      }
      for (const dropzone of this.dropzones) {
        if (dropzone.draggable) continue

        const minBit = Math.min(...swapBits)
        const maxBit = Math.max(...swapBits)

        if (
          minBit < this.dropzones.indexOf(dropzone) &&
          this.dropzones.indexOf(dropzone) < maxBit
        ) {
          dropzone.wireTop = true
          dropzone.wireBottom = true
        }
      }
    }

    // CPHASE
    for (const phaseGate of this.phaseGates) {
      if (phaseGate.phi === "") continue

      const all = this.phaseGates.filter((each) => {
        return each.phi === phaseGate.phi
      })
      for (const cp of all) {
        cp.targets = all.map((each) => this.bit(each))

        cp.wireTop = all.some((each) => {
          return this.bit(each) < this.bit(cp)
        })
        cp.wireBottom = all.some((each) => {
          return this.bit(each) > this.bit(cp)
        })
      }

      for (const dropzone of this.dropzones) {
        if (dropzone.draggable) continue

        const bits = all.map((each) => this.bit(each))
        const minBit = Math.min(...bits)
        const maxBit = Math.max(...bits)

        if (
          minBit < this.dropzones.indexOf(dropzone) &&
          this.dropzones.indexOf(dropzone) < maxBit
        ) {
          dropzone.wireTop = true
          dropzone.wireBottom = true
        }
      }
    }

    if (this.controlGates.length === 0) {
      for (const controllableGate of this.controllableGates) {
        controllableGate.controls = []
      }
      return
    }

    if (this.controlGates.length === 1 && this.controllableGates.length === 0) {
      const controlGate = this.controlGates[0]
      controlGate.disable()
      controlGate.targets = []
      return
    }

    if (this.controllableGates.length === 0) {
      for (const controlGate of this.controlGates) {
        controlGate.enable()
        controlGate.targets = this.controlBits

        controlGate.wireTop = this.controlGates.some((each) => {
          return this.bit(controlGate) > this.bit(each)
        })
        controlGate.wireBottom = this.controlGates.some((each) => {
          return this.bit(controlGate) < this.bit(each)
        })
      }
    } else {
      for (const controllableGate of this.controllableGates) {
        controllableGate.controls = this.controlBits

        controllableGate.wireTop =
          this.controlGates.some((each) => {
            return this.bit(each) < this.bit(controllableGate)
          }) ||
          this.controllableGates.some((each) => {
            return this.bit(each) < this.bit(controllableGate)
          })
        controllableGate.wireBottom =
          this.controlGates.some((each) => {
            return this.bit(each) > this.bit(controllableGate)
          }) ||
          this.controllableGates.some((each) => {
            return this.bit(each) > this.bit(controllableGate)
          })
      }

      for (const controlGate of this.controlGates) {
        controlGate.enable()
        controlGate.targets = this.controllableBits

        controlGate.wireTop =
          this.controllableGates.some((each) => {
            return this.bit(controlGate) > this.bit(each)
          }) ||
          this.controlGates.some((each) => {
            return this.bit(controlGate) > this.bit(each)
          })
        controlGate.wireBottom =
          this.controllableGates.some((each) => {
            return this.bit(controlGate) < this.bit(each)
          }) ||
          this.controlGates.some((each) => {
            return this.bit(controlGate) < this.bit(each)
          })
      }
    }

    for (const dropzone of this.dropzones) {
      if (dropzone.draggable) continue

      const bits = this.controlGates
        .map((each) => this.bit(each))
        .concat(this.controllableGates.map((each) => this.bit(each)))
      const minBit = bits.sort()[0]
      const maxBit = bits.sort().slice(-1)[0]

      if (
        minBit < this.dropzones.indexOf(dropzone) &&
        this.dropzones.indexOf(dropzone) < maxBit
      ) {
        dropzone.wireTop = true
        dropzone.wireBottom = true
      }
    }
  }

  updateWireOfDropzone(index: number): void {
    const dropzone = this.dropzones[index]
    Util.notNull(dropzone)

    dropzone.updateWires()
  }

  updateWires(): void {
    for (const each of this.dropzones) {
      each.updateWires()
    }
  }

  private get controlGates(): ControlGateElement[] {
    return this.snappedDraggables<ControlGateElement>("control-gate")
  }

  private get controlBits(): number[] {
    return this.controlGates.map((each) => this.bit(each))
  }

  private get controllableGates(): Array<
    | HGateElement
    | XGateElement
    | YGateElement
    | ZGateElement
    | PhaseGateElement
    | RnotGateElement
    | RxGateElement
    | RyGateElement
    | RzGateElement
    | SwapGateElement
  > {
    return this.snappedDraggables<
      | HGateElement
      | XGateElement
      | YGateElement
      | ZGateElement
      | PhaseGateElement
      | RnotGateElement
      | RxGateElement
      | RyGateElement
      | RzGateElement
      | SwapGateElement
    >(
      "h-gate,x-gate,y-gate,z-gate,phase-gate,rnot-gate,rx-gate,ry-gate,rz-gate,swap-gate",
    )
  }

  get ifableGates(): Array<HGateElement | XGateElement | RnotGateElement> {
    return this.snappedDraggables<
      HGateElement | XGateElement | RnotGateElement
    >("h-gate,x-gate,rnot-gate")
  }

  private get controllableBits(): number[] {
    return this.controllableGates.map((each) => this.bit(each))
  }

  private get phaseGates(): PhaseGateElement[] {
    return this.snappedDraggables<PhaseGateElement>("phase-gate")
  }

  private get swapGates(): SwapGateElement[] {
    return this.snappedDraggables<SwapGateElement>("swap-gate")
  }

  private elements<T>(selectors: string): T[] {
    return Array.from(this.querySelectorAll(selectors)) as unknown as T[]
  }

  private snappedDraggables<T>(selectors: string): T[] {
    return this.elements<T>(selectors).filter((each) => {
      return (each as unknown as DragAndDroppable).snapped
    })
  }
}
