import tippy from "tippy.js"
import { Controller } from "stimulus"
import { Util } from "lib/base"

export default class CircleNotationController extends Controller {
  static targets = ["qubitCircle"]
  declare readonly qubitCircleTargets: HTMLElement[]
  declare tooltipEl: HTMLElement

  connect(): void {
    this.tooltipEl = document.getElementById(
      "qubit-circle-tooltip",
    ) as HTMLElement
    Util.notNull(this.tooltipEl)
  }

  incrementNqubit(): void {
    this.data.set("nqubit", (this.nqubit + 1).toString())
  }

  qubitCircleMouseEnter(event: MouseEvent): void {
    const qubitCircleEl = event.target as HTMLElement
    Util.notNull(qubitCircleEl)
    const t = tippy(qubitCircleEl)
    t.setProps({
      allowHTML: true,
      content: this.tooltipContent(qubitCircleEl),
      theme: "qni",
    })
    t.show()
  }

  qubitCircleMouseLeave(event: MouseEvent): void {
    const qubitCircleEl = event.target as HTMLElement
    Util.notNull(qubitCircleEl)
    const t = tippy(qubitCircleEl)
    t.hide()
    t.destroy()
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

  private tooltipContent(el: HTMLElement): string {
    const ket = this.ket(el)
    const magnitude = this.magnitude(el)
    const phase = this.phase(el)

    let html =
      this.tooltipEl.innerHTML +
      `<div class="text-center font-bold">|${ket}&gt;</div>`
    html += `<div>M=${magnitude}</div>`
    if (magnitude > 0) html += `<div>φ=${phase}</div>`
    return html
  }

  private ket(el: HTMLElement): number {
    const dataKet = el.getAttribute("data-ket")
    Util.notNull(dataKet)
    return parseInt(dataKet)
  }

  private magnitude(el: HTMLElement): number {
    const dataMagnitude = el.getAttribute("data-magnitude")
    Util.notNull(dataMagnitude)
    return parseFloat(dataMagnitude)
  }

  private phase(el: HTMLElement): string {
    const dataPhase = el.getAttribute("data-phase")
    Util.notNull(dataPhase)
    return dataPhase
  }
}
