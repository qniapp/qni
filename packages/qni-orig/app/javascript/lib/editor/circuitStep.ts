import {
  Connectable,
  ControlGate,
  Controllable,
  HGate,
  IGate,
  PhaseGate,
  QubitLabel,
  RnotGate,
  RxGate,
  RyGate,
  RzGate,
  SwapGate,
  XGate,
  YGate,
  ZGate,
  isConnectable,
  isControllable,
  isTargetable,
} from "lib/instructions"
import { Instruction, InstructionWithElement } from "lib/operation"
import { Util, classNameFor } from "lib/base"
import { CircuitDropzone } from "./circuitDropzone"
import { DropEventHandlers } from "./mixins"
import { Elementable } from "lib/mixins"

export class CircuitStep extends Elementable {
  static readonly elementClassName = classNameFor("circuitStep")

  get index(): number {
    const all = Array.from(
      this.circuitEl.getElementsByClassName(CircuitStep.elementClassName),
    )
    return all.indexOf(this.element)
  }

  set active(value: boolean) {
    const classList = this.circuitBreakpointEl.classList
    const className = classNameFor("circuitBreakpoint:state:active")

    if (value) {
      classList.add(className)
    } else {
      classList.remove(className)
    }
  }

  get active(): boolean {
    return this.circuitBreakpointEl.classList.contains(
      classNameFor("circuitBreakpoint:state:active"),
    )
  }

  get empty(): boolean {
    return (
      this.dropzones.length !== 0 &&
      this.dropzones.filter((each) => {
        return each.occupied
      }).length === 0
    )
  }

  set done(flag: boolean) {
    this.setClassName("circuitStep:state:done", flag)
  }

  get done(): boolean {
    return this.isClassNamed("circuitStep:state:done")
  }

  set shadow(flag: boolean) {
    this.setClassName("circuitStep:type:shadow", flag)
  }

  get shadow(): boolean {
    return this.isClassNamed("circuitStep:type:shadow")
  }

  get instructions(): Instruction[] {
    return Array.from(this.bodyEl.children).map((each) => {
      if (each.classList.contains(classNameFor("dropzone:type:circuit"))) {
        return new CircuitDropzone(each).instruction
      } else if (each.classList.contains(classNameFor("display:qubitLabel"))) {
        return new QubitLabel(each)
      } else {
        throw new Error("unknown element")
      }
    })
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

  get childElements(): HTMLElement[] {
    return Array.from(this.bodyEl.children) as HTMLElement[]
  }

  appendChild(element: Element): void {
    this.bodyEl.appendChild(element)
  }

  circuitBlock(): Element | null {
    return this.element.closest(`.${classNameFor("circuitBlock")}`)
  }

  toJson(): string {
    const instructions = this.instructions
      .map((each) => {
        return each.toJson()
      })
      .join(",")

    return `[${instructions}]`
  }

  updateGateConnections(): void {
    this.resetGateConnections()
    this.updateSwaps()
    this.updateCphases()
    this.updateControls()
  }

  remove(): void {
    if (
      (this.isInCircuitBlockDivider && this.shadow) ||
      !this.isInCircuitBlockDivider
    ) {
      for (const each of this.dropzones) {
        each.unsetInteract()
      }
      this.removeElement()
    }
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
    for (const each of shadow.dropzones) {
      each.setInteract(dropzoneHandlers)
    }
  }

  private get isInCircuitBlockDivider(): boolean {
    return this.element.closest(".circuit-block-divider") ? true : false
  }

  private resetGateConnections() {
    for (const each of this.dropzones) {
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
          each.instruction.disconnectFromAll()
        }
      }
    }
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

    for (const each of swapGates) {
      each.connectWith(swapBits)
      if (swapBits.length === 2) {
        each.targets = swapBits
        each.disabled = false
        this.updateIGateConnections(swapBits)
      } else {
        each.targets = []
        each.disabled = true
      }
    }
  }

  private updateCphases() {
    const phaseGates = this.instructions.filter((each) => {
      return each instanceof PhaseGate
    }) as PhaseGate[]

    for (const each of phaseGates) {
      const phaseBits = phaseGates
        .filter((other) => {
          return other.phi === each.phi
        })
        .map((other) => {
          return other.bit
        })
        .sort()
      if (phaseBits.length === 2) {
        each.connectWith(phaseBits)
        each.targets = phaseBits
        this.updateIGateConnections(phaseBits)
      } else {
        each.connectWith([])
        each.targets = []
      }
    }
  }

  private updateControls() {
    const controlGates = this.gatesOf(ControlGate)
    const controllableGates = this.controllableGates
    const toBit = (gate: InstructionWithElement) => {
      return gate.bit
    }
    const controlGateBits = controlGates.map(toBit)
    const controllableGateBits = controllableGates.map(toBit)

    if (controllableGates.length === 0) {
      if (controlGates.length >= 2) {
        for (const each of controlGates) {
          each.targets = controlGateBits
          each.connectWith(controlGateBits)
          each.disabled = false
        }
        this.updateIGateConnections(controlGateBits)
      } else {
        for (const each of controlGates) {
          each.targets = []
          each.connectWith([])
          each.disabled = true
        }
      }
    } else {
      for (const each of controlGates) {
        each.targets = controllableGateBits
        each.connectWith(controlGateBits.concat(controllableGateBits))
        each.disabled = false
      }

      this.updateControlledUConnections(
        this.gatesOf(XGate),
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
        this.gatesOf(RnotGate),
        controlGateBits,
        controllableGateBits,
      )
      this.updateControlledUConnections(
        this.gatesOf(HGate),
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

  private gatesOf<T extends Instruction>(gateClass: {
    new (arg: HTMLElement): T
  }): T[] {
    const isGateClass = (obj: Instruction): obj is T => {
      return obj instanceof gateClass
    }
    return this.instructions.filter(isGateClass)
  }

  private updateControlledUConnections<T extends Controllable & Connectable>(
    gates: T[],
    controlGateBits: number[],
    controllableGateBits: number[],
  ) {
    if (controlGateBits.length === 0) return

    for (const each of gates) {
      each.controls = controlGateBits
      each.connectWith(controlGateBits.concat(controllableGateBits))
    }
  }

  private updateIGateConnections(targetBits: number[]) {
    const bits = targetBits.sort()

    for (const [i, dropzone] of this.dropzones.entries()) {
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
    }
  }

  private get controllableGates(): Instruction[] {
    return this.instructions.filter((each) => {
      return "controls" in each
    })
  }

  // Elements

  private get circuitEl(): HTMLElement {
    const el = document.getElementById("circuit")
    Util.notNull(el)

    return el
  }

  private get bodyEl(): HTMLElement {
    const el = this.element.querySelector(
      `.${classNameFor("circuitStep:body")}`,
    ) as HTMLElement
    Util.notNull(el)

    return el
  }

  private get circuitBreakpointEl(): HTMLElement {
    const el = this.element.querySelector(
      `.${classNameFor("circuitBreakpoint")}`,
    ) as HTMLElement
    Util.notNull(el)

    return el
  }

  private get shadowSourceElement(): Element {
    const el = this.circuitEl.querySelector(
      `.${classNameFor("circuitStep:type:shadowSource")}`,
    ) as HTMLElement
    Util.notNull(el)

    return el
  }
}
