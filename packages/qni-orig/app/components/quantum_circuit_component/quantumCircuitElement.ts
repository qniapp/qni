import { attr, controller, target, targets } from "@github/catalyst"
import { html, render } from "@github/jtml"
import { CircuitStepElement } from "circuit_step_component/circuitStepElement"

@controller
export class QuantumCircuitElement extends HTMLElement {
  @attr json = ""

  @target body: HTMLElement
  @targets circuitSteps: CircuitStepElement[]

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void {
    if (name === "data-json" && oldValue !== newValue && this.body) {
      this.body.innerHTML = ""
      this.body.append(this.circuitStepFragment)
    }
  }

  update(): void {
    render(
      html`<style>
          #body {
            display: flex;
            flex-direction: row;
          }
        </style>

        <div id="body" data-target="quantum-circuit.body">
          <slot></slot>
          ${this.circuitStepFragment}
        </div>`,
      this.shadowRoot!,
    )
  }

  private get circuitStepFragment(): DocumentFragment {
    const frag = document.createDocumentFragment()

    if (this.json === "") return frag

    const jsonData = JSON.parse(this.json)
    for (const step of jsonData.cols) {
      const circuitStep = document.createElement("circuit-step")
      circuitStep.setAttribute("data-targets", "quantum-circuit.circuitSteps")
      for (const instruction of step) {
        const dropzone = document.createElement("circuit-dropzone")
        dropzone.setAttribute("data-targets", "circuit-step.dropzones")

        switch (true) {
          case /^\|0>$/.test(instruction): {
            const writeGate = document.createElement("write-gate")
            writeGate.setAttribute("data-value", "0")
            dropzone.append(writeGate)
            break
          }
          case /^\|1>$/.test(instruction): {
            const writeGate = document.createElement("write-gate")
            writeGate.setAttribute("data-value", "1")
            dropzone.append(writeGate)
            break
          }
          case /^H$/.test(instruction): {
            const hGate = document.createElement("h-gate")
            hGate.setAttribute("data-targets", "circuit-step.controllableGates")
            hGate.setAttribute("data-target", "circuit-dropzone.draggable")
            dropzone.append(hGate)
            break
          }
          case /^X$/.test(instruction): {
            const xGate = document.createElement("x-gate")
            xGate.setAttribute("data-targets", "circuit-step.controllableGates")
            xGate.setAttribute("data-target", "circuit-dropzone.draggable")
            dropzone.append(xGate)
            break
          }
          case /^Y$/.test(instruction): {
            const yGate = document.createElement("y-gate")
            yGate.setAttribute("data-targets", "circuit-step.controllableGates")
            yGate.setAttribute("data-target", "circuit-dropzone.draggable")
            dropzone.append(yGate)
            break
          }
          case /^Z$/.test(instruction): {
            const zGate = document.createElement("z-gate")
            zGate.setAttribute("data-targets", "circuit-step.controllableGates")
            zGate.setAttribute("data-target", "circuit-dropzone.draggable")
            dropzone.append(zGate)
            break
          }
          case /^P$/.test(instruction): {
            const phaseGate = document.createElement("phase-gate")
            phaseGate.setAttribute(
              "data-targets",
              "circuit-step.controllableGates",
            )
            phaseGate.setAttribute("data-target", "circuit-dropzone.draggable")
            dropzone.append(phaseGate)
            break
          }
          case /^P\((.+)\)$/.test(instruction): {
            const phaseGate = document.createElement("phase-gate")
            phaseGate.setAttribute(
              "data-targets",
              "circuit-step.controllableGates",
            )
            phaseGate.setAttribute("data-target", "circuit-dropzone.draggable")
            phaseGate.setAttribute("data-phi", RegExp.$1)
            dropzone.append(phaseGate)
            break
          }
          case /^X\^½$/.test(instruction): {
            const rootNotGate = document.createElement("rnot-gate")
            rootNotGate.setAttribute(
              "data-targets",
              "circuit-step.controllableGates",
            )
            rootNotGate.setAttribute(
              "data-target",
              "circuit-dropzone.draggable",
            )
            dropzone.append(rootNotGate)
            break
          }
          case /^Rx$/.test(instruction): {
            const rxGate = document.createElement("rx-gate")
            rxGate.setAttribute(
              "data-targets",
              "circuit-step.controllableGates",
            )
            rxGate.setAttribute("data-target", "circuit-dropzone.draggable")
            dropzone.append(rxGate)
            break
          }
          case /^Rx\((.+)\)$/.test(instruction): {
            const rxGate = document.createElement("rx-gate")
            rxGate.setAttribute(
              "data-targets",
              "circuit-step.controllableGates",
            )
            rxGate.setAttribute("data-target", "circuit-dropzone.draggable")
            rxGate.setAttribute("data-theta", RegExp.$1)
            dropzone.append(rxGate)
            break
          }
          case /^Ry$/.test(instruction): {
            const ryGate = document.createElement("ry-gate")
            ryGate.setAttribute(
              "data-targets",
              "circuit-step.controllableGates",
            )
            ryGate.setAttribute("data-target", "circuit-dropzone.draggable")
            dropzone.append(ryGate)
            break
          }
          case /^Ry\((.+)\)$/.test(instruction): {
            const ryGate = document.createElement("ry-gate")
            ryGate.setAttribute(
              "data-targets",
              "circuit-step.controllableGates",
            )
            ryGate.setAttribute("data-target", "circuit-dropzone.draggable")
            ryGate.setAttribute("data-theta", RegExp.$1)
            dropzone.append(ryGate)
            break
          }
          case /^Rz$/.test(instruction): {
            const rzGate = document.createElement("rz-gate")
            rzGate.setAttribute(
              "data-targets",
              "circuit-step.controllableGates",
            )
            rzGate.setAttribute("data-target", "circuit-dropzone.draggable")
            dropzone.append(rzGate)
            break
          }
          case /^Rz\((.+)\)$/.test(instruction): {
            const rzGate = document.createElement("rz-gate")
            rzGate.setAttribute(
              "data-targets",
              "circuit-step.controllableGates",
            )
            rzGate.setAttribute("data-target", "circuit-dropzone.draggable")
            rzGate.setAttribute("data-theta", RegExp.$1)
            dropzone.append(rzGate)
            break
          }
          case /^Swap$/.test(instruction): {
            const swapGate = document.createElement("swap-gate")
            swapGate.setAttribute(
              "data-targets",
              "circuit-step.swapGates circuit-step.controllableGates",
            )
            swapGate.setAttribute("data-target", "circuit-dropzone.draggable")
            dropzone.append(swapGate)
            break
          }
          case /^•$/.test(instruction): {
            const controlGate = document.createElement("control-gate")
            controlGate.setAttribute(
              "data-targets",
              "circuit-step.controlGates",
            )
            controlGate.setAttribute(
              "data-target",
              "circuit-dropzone.draggable",
            )
            dropzone.append(controlGate)
            break
          }
          case /^Bloch$/.test(instruction): {
            const blochDisplay = document.createElement("bloch-display")
            dropzone.append(blochDisplay)
            break
          }
          case /^Measure$/.test(instruction): {
            const measureGate = document.createElement("measurement-gate")
            dropzone.append(measureGate)
            break
          }
          default:
        }
        circuitStep.append(dropzone)
      }
      frag.append(circuitStep)
    }
    return frag
  }
}
