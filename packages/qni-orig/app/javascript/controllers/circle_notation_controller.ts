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
    this.drawCircles()
  }

  set nqubit(nqubit: number) {
    this.data.set("nqubit", nqubit.toString())
    this.drawCircles()
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
    this.drawCircles()
    this.updateTooltips(Object.keys(magnitudes).length)
  }

  private setCircleAttributes(
    magnitudes: { [bit: number]: number },
    phases: { [bit: number]: number },
  ) {
    const qubitCircleCount = Object.keys(magnitudes).length
    Array.from(Array(qubitCircleCount).keys()).forEach((c) => {
      const qubitCircle = this.qubitCircleTargets[c]
      const magnitudeEl = qubitCircle.querySelector(
        ".qubit-circle__magnitude",
      ) as HTMLElement
      const phaseEl = qubitCircle.querySelector(
        ".qubit-circle__phase",
      ) as HTMLElement
      if (!magnitudeEl) throw new Error("magnitude element not found")
      if (!phaseEl) throw new Error("phase element not found")

      qubitCircle.setAttribute("data-magnitude", magnitudes[c].toString())
      qubitCircle.setAttribute("data-phase", phases[c].toString())
    })
  }

  private drawCircles() {
    Array.from(Array(2 ** this.nqubit)).map((_, c) => {
      const qubitCircle = this.qubitCircleTargets[c]
      const magnitudeEl = qubitCircle.querySelector(
        ".qubit-circle__magnitude",
      ) as HTMLElement
      const phaseEl = qubitCircle.querySelector(
        ".qubit-circle__phase",
      ) as HTMLElement
      if (!magnitudeEl) throw new Error("magnitude element not found")
      if (!phaseEl) throw new Error("phase element not found")

      const dataMagnitude = qubitCircle.getAttribute("data-magnitude")
      const dataPhase = qubitCircle.getAttribute("data-phase")
      if (!dataMagnitude) return
      if (!dataPhase) return

      const magnitude = parseFloat(dataMagnitude)
      const phase = parseFloat(dataPhase)
      const circleDiameter = qubitCircle.clientWidth
      const diameter = circleDiameter * magnitude

      phaseEl.style.transform = `rotate(${-1 * phase}deg)`

      magnitudeEl.style.width = `${diameter}px`
      magnitudeEl.style.height = `${diameter}px`

      if (magnitude > 0) {
        const phaseMagnitudeEl = qubitCircle.querySelector(
          ".qubit-circle__phase-magnitude",
        ) as HTMLElement
        if (!phaseMagnitudeEl) {
          throw new Error("phase-magnitude element not found")
        }

        phaseMagnitudeEl.style.marginTop = `${
          (circleDiameter - diameter) / 2
        }px`
        phaseMagnitudeEl.style.height = `${diameter / 2}px`
        phaseMagnitudeEl.style.width = `${diameter / 2}px`
      }
    })
  }

  private updateTooltips(qubitCircleCount: number): void {
    Array.from(Array(qubitCircleCount).keys()).forEach((i) => {
      this.addTooltip(this.qubitCircleTargets[i], i)
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
