import tippy from "tippy.js"
import { Controller } from "stimulus"
import { Instance } from "tippy.js"

export default class CircleNotationController extends Controller {
  static targets = ["qubitCircle"]
  declare readonly qubitCircleTargets: HTMLElement[]

  private tippies: { [index: number]: Instance } | undefined

  connect(): void {
    this.tippies = {}
  }

  disconnect(): void {
    if (this.tippies) {
      for (const i in this.tippies) {
        this.tippies[i].destroy()
      }
    }
  }

  incrementNqubit(): void {
    this.data.set("nqubit", (this.nqubit + 1).toString())
  }

  set nqubit(nqubit: number) {
    this.data.set("nqubit", nqubit.toString())
  }

  get nqubit(): number {
    const nqubit = this.data.get("nqubit")

    if (!nqubit) throw new Error("Cannot get data-nqubit")
    return parseInt(nqubit)
  }

  update(
    magnitudes: { [bit: number]: number },
    phases: { [bit: number]: number },
  ): void {
    this.setCircleAttributes(magnitudes, phases)
    this.updateTooltips(Object.keys(magnitudes).length)
  }

  private setCircleAttributes(
    magnitudes: { [bit: number]: number },
    phases: { [bit: number]: number },
  ) {
    const qubitCircleCount = Object.keys(magnitudes).length
    const qubitCircleTargets = this.qubitCircleTargets

    Array.from(Array(qubitCircleCount).keys()).forEach((c) => {
      const qubitCircle = qubitCircleTargets[c]
      qubitCircle.setAttribute(
        "data-magnitude",
        magnitudes[c].toFixed(3).toString(),
      )
      qubitCircle.setAttribute("data-phase", phases[c].toFixed(3).toString())
    })
  }

  private updateTooltips(qubitCircleCount: number): void {
    const qubitCircleTargets = this.qubitCircleTargets

    Array.from(Array(qubitCircleCount).keys()).forEach((i) => {
      this.addTooltip(qubitCircleTargets[i], i)
    })
  }

  private addTooltip(el: HTMLElement, i: number): void {
    if (!this.tippies) this.tippies = {}
    if (!this.tippies[i]) this.tippies[i] = tippy(el)

    this.tippies[i].setProps({
      allowHTML: true,
      content: this.tooltipContent(el),
      theme: "qni",
    })
  }

  private tooltipContent(el: HTMLElement): string {
    const magnitude = this.magnitude(el)
    const phase = this.phase(el)

    let html = this.tooltipEl(el).innerHTML + `<div>M=${magnitude}</div>`
    if (magnitude > 0) html += `<div>φ=${phase}</div>`
    return html
  }

  private magnitude(el: HTMLElement): number {
    const dataMagnitude = el.getAttribute("data-magnitude")

    if (!dataMagnitude) throw new Error("data-magnitude is not set")
    return parseFloat(dataMagnitude)
  }

  private phase(el: HTMLElement): string {
    const dataPhase = el.getAttribute("data-phase")

    if (!dataPhase) throw new Error("data-phase is not set")
    return dataPhase
  }

  private tooltipEl(el: HTMLElement): HTMLElement {
    const tooltipEl = el.getElementsByClassName("qubit-circle__tooltip").item(0)

    if (!tooltipEl) throw new Error("tooltip element not found")
    return tooltipEl as HTMLElement
  }
}
