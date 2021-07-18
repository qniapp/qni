import { CircuitDropzone } from "./circuitDropzone"
import { DropEventHandlers } from "./mixins"
import { Elementable } from "lib/mixins"
import { InternalError } from "lib/error"
import { Util, classNameFor } from "lib/base"
import { Instruction, InstructionWithElement } from "lib/instruction"
import {
  Connectable,
  ControlGate,
  Controllable,
  HadamardGate,
  IGate,
  NotGate,
  PhaseGate,
  QubitLabel,
  RootNotGate,
  RxGate,
  RyGate,
  RzGate,
  SwapGate,
  YGate,
  ZGate,
  isConnectable,
  isControllable,
  isTargetable,
} from "lib/instructions"

export class CircuitStep extends Elementable {
  static elementClassName = classNameFor("circuitStep")

  remove(): void {
    if (
      (this.isInCircuitBlockDivider && this.isShadow) ||
      !this.isInCircuitBlockDivider
    ) {
      this.dropzones.forEach((each) => {
        each.unsetInteract()
      })
      this.removeElement()
    }
  }

  private get isInCircuitBlockDivider(): boolean {
    return this.element.closest(".circuit-block-divider") ? true : false
  }

  prependShadow(dropzoneHandlers: DropEventHandlers): void {
    const shadowSourceElement = this.shadowSourceElement.cloneNode(
      true,
    ) as HTMLElement
    shadowSourceElement.classList.remove(
      classNameFor("circuitStep:type:shadowSource"),
    )
    shadowSourceElement.classList.add(classNameFor("circuitStep:type:shadow"))
    const shadow = new CircuitStep(shadowSourceElement)

    this.element.parentNode?.insertBefore(shadow.element, this.element)
    shadow.dropzones.forEach((each) => {
      each.setInteract(dropzoneHandlers)
    })
  }

  updateGateConnections(): void {
    this.resetGateConnections()
    this.updateSwaps()
    this.updateCphases()
    this.updateControls()
  }

  private resetGateConnections() {
    this.dropzones.forEach((each) => {
      if (each.instruction instanceof IGate) {
        each.disconnectFromLowerBit()
        each.disconnectFromUpperBit()
      } else {
        if (isControllable(each.instruction)) {
          each.instruction.controls = []
        }
        if (isTargetable(each.instruction)) {
          each.instruction.targets = []
        }
        if (isConnectable(each.instruction)) {
          each.instruction.disconnectFromLowerBit()
          each.instruction.disconnectFromUpperBit()
        }
      }
    })
  }

  private updateSwaps() {
    const swapGates = this.instructions.filter((each) => {
      return each instanceof SwapGate
    }) as SwapGate[]
    const swapBits = swapGates
      .map((each) => {
        return each.bit
      })
      .sort()

    swapGates.forEach((each) => {
      each.connectWith(swapBits)
      if (swapBits.length == 2) {
        each.targets = swapBits
        each.disabled = false
        this.updateIGateConnections(swapBits)
      } else {
        each.targets = []
        each.disabled = true
      }
    })
  }

  private updateCphases() {
    const phaseGates = this.instructions.filter((each) => {
      return each instanceof PhaseGate
    }) as PhaseGate[]

    phaseGates.forEach((each) => {
      const phaseBits = phaseGates
        .filter((other) => {
          return other.phi === each.phi
        })
        .map((other) => {
          return other.bit
        })
        .sort()
      if (phaseBits.length == 2) {
        each.connectWith(phaseBits)
        each.targets = phaseBits
        this.updateIGateConnections(phaseBits)
      } else {
        each.connectWith([])
        each.targets = []
      }
    })
  }

  private updateControls() {
    const controlGates = this.gatesOf(ControlGate)
    const controllableGates = this.controllableGates
    const toBit = (gate: InstructionWithElement) => {
      return gate.bit
    }
    const controlGateBits = controlGates.map(toBit)
    const controllableGateBits = controllableGates.map(toBit)

    if (controllableGates.length == 0) {
      if (controlGates.length >= 2) {
        controlGates.forEach((each) => {
          each.targets = controlGateBits
          each.connectWith(controlGateBits)
          each.disabled = false
        })
        this.updateIGateConnections(controlGateBits)
      } else {
        controlGates.forEach((each) => {
          each.targets = []
          each.connectWith([])
          each.disabled = true
        })
      }
    } else {
      controlGates.forEach((each) => {
        each.targets = controllableGateBits
        each.connectWith(controlGateBits.concat(controllableGateBits))
        each.disabled = false
      })

      this.updateControlledUConnections(
        this.gatesOf(NotGate),
        controlGateBits,
        controllableGateBits,
      )
      this.updateControlledUConnections(
        this.gatesOf(YGate),
        controlGateBits,
        controllableGateBits,
      )
      this.updateControlledUConnections(
        this.gatesOf(ZGate),
        controlGateBits,
        controllableGateBits,
      )
      this.updateControlledUConnections(
        this.gatesOf(RootNotGate),
        controlGateBits,
        controllableGateBits,
      )
      this.updateControlledUConnections(
        this.gatesOf(HadamardGate),
        controlGateBits,
        controllableGateBits,
      )
      this.updateControlledUConnections(
        this.gatesOf(SwapGate),
        controlGateBits,
        controllableGateBits,
      )
      this.updateControlledUConnections(
        this.gatesOf(PhaseGate),
        controlGateBits,
        controllableGateBits,
      )
      this.updateControlledUConnections(
        this.gatesOf(RxGate),
        controlGateBits,
        controllableGateBits,
      )
      this.updateControlledUConnections(
        this.gatesOf(RyGate),
        controlGateBits,
        controllableGateBits,
      )
      this.updateControlledUConnections(
        this.gatesOf(RzGate),
        controlGateBits,
        controllableGateBits,
      )

      if (controlGateBits.length > 0) {
        this.updateIGateConnections(
          controlGateBits.concat(controllableGateBits),
        )
      }
    }
  }

  private updateControlledUConnections<T extends Controllable & Connectable>(
    gates: T[],
    controlGateBits: number[],
    controllableGateBits: number[],
  ) {
    if (controlGateBits.length == 0) return

    gates.forEach((each) => {
      each.controls = controlGateBits
      each.connectWith(controlGateBits.concat(controllableGateBits))
    })
  }

  private updateIGateConnections(targetBits: number[]) {
    const bits = targetBits.sort()

    this.dropzones.forEach((dropzone, i) => {
      if (
        dropzone.instruction instanceof IGate &&
        bits[0] < i &&
        i < bits[bits.length - 1]
      ) {
        dropzone.connectWithLowerBit()
        dropzone.connectWithUpperBit()
      } else {
        dropzone.disconnectFromLowerBit()
        dropzone.disconnectFromUpperBit()
      }
    })
  }

  get index(): number {
    const circuit = this.element.closest(".circuit")
    if (!circuit) throw new Error("circuit element not found")

    const all = Array.from(
      circuit.getElementsByClassName(classNameFor("circuitStep")),
    )
    return all.indexOf(this.element)
  }

  set active(value: boolean) {
    const className = "circuit-breakpoint--active"
    const el = this.element.querySelector(".circuit-breakpoint")
    Util.notNull(el)

    if (value) {
      el.classList.add(className)
    } else {
      el.classList.remove(className)
    }
  }

  isActive(): boolean {
    const className = "circuit-breakpoint--active"
    const el = this.element.querySelector(".circuit-breakpoint")
    Util.notNull(el)

    return el.classList.contains(className)
  }

  set shadow(flag: boolean) {
    this.setClassName("circuitStep:type:shadow", flag)
  }

  get isShadow(): boolean {
    return this.isClassNamed("circuitStep:type:shadow")
  }

  get isEmpty(): boolean {
    return (
      this.dropzones.length != 0 &&
      this.dropzones.filter((each) => {
        return each.isOccupied()
      }).length == 0
    )
  }

  get isDivider(): boolean {
    return this.element.closest(".circuit-block-divider") ? true : false
  }

  set done(flag: boolean) {
    this.setClassName("circuitStep:state:done", flag)
  }

  get isDone(): boolean {
    return this.isClassNamed("circuitStep:state:done")
  }

  get instructions(): Instruction[] {
    const bodyEl = this.element
      .getElementsByClassName("circuit-step__body")
      .item(0)
    if (!bodyEl) {
      throw new Error("circuit-step body element not found")
    }

    return Array.from(bodyEl.children).map((each) => {
      if (each.classList.contains(classNameFor("dropzone:type:circuit"))) {
        return new CircuitDropzone(each).instruction
      } else if (each.classList.contains("instruction")) {
        return new QubitLabel(each)
      } else {
        throw new Error("instruction not found")
      }
    })
  }

  gatesOf<T extends Instruction>(gateClass: {
    new (arg: HTMLElement): T
  }): T[] {
    const isGateClass = (obj: Instruction): obj is T => {
      return obj instanceof gateClass
    }
    return this.instructions.filter(isGateClass)
  }

  get controllableGates(): Instruction[] {
    return this.instructions.filter((each) => {
      return "controls" in each
    })
  }

  get childElements(): Element[] {
    return Array.from(this.bodyEl.children)
  }

  get lastChildElement(): Element {
    return this.childElements[this.childElements.length - 1]
  }

  appendChild(element: Element): void {
    this.bodyEl.appendChild(element)
  }

  private get bodyEl(): Element {
    const className = "circuit-step__body"
    const el = this.element.getElementsByClassName(className).item(0)

    if (!el) throw new Error(`.${className} not found`)
    return el
  }

  get dropzones(): CircuitDropzone[] {
    return Array.from(
      this.element.getElementsByClassName(
        classNameFor("dropzone:type:circuit"),
      ),
    ).map((each) => {
      return new CircuitDropzone(each)
    })
  }

  private get shadowSourceElement(): Element {
    const className = classNameFor("circuitStep:type:shadowSource")
    const el = document.getElementsByClassName(className).item(0)
    if (!el) throw new InternalError(`.${className} not found`)

    return el
  }

  circuitBlock(): Element | null {
    return this.element.closest(".circuit-block")
  }

  toJson(): string {
    const gates = this.instructions
      .map((each) => {
        return each.toJson()
      })
      .join(",")

    return `[${gates}]`
  }
}
