import { Draggable, isWireable } from "mixins"
import { attr, controller, target } from "@github/catalyst"
import { html, render } from "@github/jtml"
import { CircuitDropzoneElement } from "circuit_dropzone_component/circuitDropzoneElement"
import { CircuitOperation } from "lib/operation"
import { ControlGateElement } from "control_gate_component/controlGateElement"
import { HGateElement } from "h_gate_component/hGateElement"
import { PhaseGateElement } from "phase_gate_component/phaseGateElement"
import { QuantumCircuitElement } from "quantum_circuit_component/quantumCircuitElement"
import { RnotGateElement } from "rnot_gate_component/rnotGateElement"
import { RxGateElement } from "rx_gate_component/rxGateElement"
import { RyGateElement } from "ry_gate_component/ryGateElement"
import { RzGateElement } from "rz_gate_component/rzGateElement"
import { SwapGateElement } from "swap_gate_component/swapGateElement"
import { XGateElement } from "x_gate_component/xGateElement"
import { YGateElement } from "y_gate_component/yGateElement"
import { ZGateElement } from "z_gate_component/zGateElement"

@controller
export class CircuitStepElement extends HTMLElement {
  @attr active = false
  @attr snap = false
  @attr breakpoint = false
  @attr keep = false
  @attr shadow = false

  @target slotEl: HTMLSlotElement

  static createShadow(nqubit: number): CircuitStepElement {
    const el = document.createElement("circuit-step") as CircuitStepElement
    el.shadow = true
    for (let i = 0; i < nqubit; i++) {
      el.appendDropzone()
    }
    return el
  }

  get nqubit(): number {
    return this.dropzones.length
  }

  get dropzones(): CircuitDropzoneElement[] {
    return this.elements<CircuitDropzoneElement>("circuit-dropzone")
  }

  get lastDropzone(): CircuitDropzoneElement {
    return this.dropzones[this.nqubit - 1]
  }

  get isEmpty(): boolean {
    if (this.keep) return false
    return this.dropzones.every((each) => !each.occupied)
  }

  dropzone(n: number): CircuitDropzoneElement | null {
    const el = this.dropzones[n]
    if (el === undefined) return null

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

  index(): number | null {
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
    const index = this.index()
    if (index === null || index === 0) return null

    const quantumCircuitEl = this.quantumCircuitElement()
    if (quantumCircuitEl === null) return null

    const all = quantumCircuitEl.steps
    return all[index - 1] || null
  }

  next(): CircuitStepElement | null {
    const index = this.index()
    if (index === null) return null

    const quantumCircuitEl = this.quantumCircuitElement()
    if (quantumCircuitEl === null) return null

    const all = quantumCircuitEl.steps
    return all[index + 1] || null
  }

  activate(): void {
    this.dispatchEvent(
      new CustomEvent("step.click", { bubbles: true, detail: this }),
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
    this.updateConnections()
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
    this.addSlotChangeEventListener()
    this.updateConnections()
    this.updateWires()

    this.addEventListener("mouseenter", this.dispatchHoverStepEvent)
    this.addEventListener("dropzone.snap", this.dispatchStepSnapEvent)
    this.addEventListener("dropzone.unsnap", this.dispatchStepUnsnapEvent)
    this.addEventListener("dropzone.drop", this.dispatchStepDropEvent)
    this.addEventListener("draggable.grab", this.dispatchStepSnapEvent)
    this.addEventListener("draggable.enddragging", this.unsnap)
    this.addEventListener("click", this.activate)
  }

  private dispatchHoverStepEvent(): void {
    this.dispatchEvent(
      new CustomEvent("step.hover", { detail: this, bubbles: true }),
    )
  }

  private dispatchStepSnapEvent(): void {
    this.dispatchEvent(
      new CustomEvent("step.snap", { detail: this, bubbles: true }),
    )
  }

  private dispatchStepUnsnapEvent(): void {
    this.unsnap()
    this.dispatchEvent(
      new CustomEvent("step.unsnap", { detail: this, bubbles: true }),
    )
  }

  private dispatchStepDropEvent(): void {
    this.dispatchEvent(
      new CustomEvent("step.drop", { detail: this, bubbles: true }),
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
            cursor: pointer;
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

          ::slotted(circuit-dropzone:nth-of-type(n + 2)) {
            margin-right: 1rem;
          }

          @media (min-width: 768px) {
            #body {
              flex-direction: column;
              padding-top: 1rem;
              padding-bottom: 1rem;
            }

            ::slotted(circuit-dropzone:nth-of-type(n + 2)) {
              margin-top: 1rem;
              margin-right: 0;
            }
          }

          :host([data-snap]) #body {
            background-color: rgba(255, 75, 75, 0.1);
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
            z-index: 10;
            padding: 2px;
            margin-left: -2px;
            background-color: var(--colors-cardinal, #ff4b4b);
            opacity: 0;
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

  private addSlotChangeEventListener(): void {
    this.slotEl.addEventListener("slotchange", () => {
      if (this.shadow) {
        for (const each of this.dropzones) {
          each.shadow = true
        }
      }
      this.updateConnections()
      this.updateWires()
    })
  }

  updateConnections(): void {
    for (const dropzone of this.dropzones) {
      dropzone.wireTop = false
      dropzone.wireBottom = false
      const operation = dropzone.operation
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
      for (const swap of all) {
        swap.enable()
        swap.wireTop = all.some((each) => {
          return this.bit(each) < this.bit(swap)
        })
        swap.wireBottom = all.some((each) => {
          return this.bit(each) > this.bit(swap)
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
      return (each as unknown as Draggable).snapped
    })
  }
}
