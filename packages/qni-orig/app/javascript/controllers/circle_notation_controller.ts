import tippy, {
  createSingleton,
  Instance,
  CreateSingletonInstance,
  Props,
  CreateSingletonProps,
} from "tippy.js"
import { Controller } from "stimulus"
import { Util } from "lib/base"
import Rails from "@rails/ujs"

export default class CircleNotationController extends Controller {
  static targets = ["qubitCircle"]

  private qubitCircleTargetsCache: HTMLElement[] | undefined

  declare loading: boolean
  declare loaded: boolean
  declare readonly qubitCircleTargets: HTMLElement[]
  declare tippyInstances: Instance<Props>[]
  declare tippySingleton: CreateSingletonInstance<CreateSingletonProps<Props>>
  declare popupEl: HTMLElement

  connect(): void {
    this.loading = false
    this.loaded = false
  }

  disconnect(): void {
    if (!this.loaded) return

    this.tippyInstances.forEach((each) => {
      each.destroy()
    })
    this.tippySingleton.destroy()
  }

  private initPopup(): void {
    this.popupEl = document.getElementById("qubit-circle-popup") as HTMLElement
    Util.notNull(this.popupEl)

    this.tippyInstances = tippy(this.qubitCircleTargets)
    this.tippySingleton = createSingleton(this.tippyInstances, {
      allowHTML: true,
      animation: false,
      delay: 1000,
      moveTransition: "transform 0.2s ease-out",
      theme: "qni",
    })
  }

  incrementNqubit(): void {
    this.data.set("nqubit", (this.nqubit + 1).toString())
  }

  showPopup(event: MouseEvent): void {
    const qubitCircleEl = event.target as HTMLElement
    Util.notNull(qubitCircleEl)

    const tippy = qubitCircleEl._tippy as Instance
    tippy.setContent(this.popupContent(qubitCircleEl))
    this.tippySingleton.show(qubitCircleEl)
  }

  set nqubit(nqubit: number) {
    this.data.set("nqubit", nqubit.toString())
  }

  get nqubit(): number {
    const nqubit = this.data.get("nqubit")
    Util.notNull(nqubit)
    return parseInt(nqubit)
  }

  update(
    magnitudes: { [bit: number]: number },
    phases: { [bit: number]: number },
  ): void {
    if (this.loading) return

    if (this.loaded) {
      this.updateQubitCircles(magnitudes, phases)
    } else {
      this.loading = true
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      Rails.ajax({
        type: "GET",
        url: "/circle_notations",
        dataType: "script",
        success: () => {
          this.initPopup()
          this.loading = false
          this.loaded = true
          this.updateQubitCircles(magnitudes, phases)
        },
      })
    }
  }

  private updateQubitCircles(
    magnitudes: { [bit: number]: number },
    phases: { [bit: number]: number },
  ): void {
    const qubitCircleCount = Object.keys(magnitudes).length

    Array.from(Array(qubitCircleCount).keys()).forEach((c) => {
      const qubitCircle = this.qubitCircles[c]

      const magnitude = magnitudes[c]
      qubitCircle.setAttribute(
        "data-magnitude",
        magnitude.toFixed(5).toString(),
      )
      qubitCircle.setAttribute(
        "data-magnitude-int",
        Math.round(magnitude * 100).toString(),
      )

      if (magnitude !== 0) {
        const phase = phases[c]
        qubitCircle.setAttribute("data-phase", phase.toFixed(3).toString())
        qubitCircle.setAttribute("data-phase-int", Math.round(phase).toString())
      }
    })
  }

  private popupContent(el: HTMLElement): string {
    const prob = this.prob(el)
    const ket = this.ket(el)

    let html =
      this.popupEl.innerHTML +
      `<div class="text-lg">|<span class="font-mono">${ket}</span>&#10217;</div>`
    html += `<ul class="list-none"><li>Prob: <span class="font-bold font-mono">${this.round(
      prob,
      5,
    )}%</span></li>`
    if (prob > 0) {
      html += `<li>Phase: <span class="font-bold font-mono">${this.round(
        this.phase(el),
        2,
      )}°</span></li>`
    } else {
      html += "<li>Phase: <span class=\"font-bold font-mono\">-</span></li>"
    }
    html += "</ul>"
    return html
  }

  private round(n: number, decimal: number): number {
    return Math.round(n * Math.pow(10, decimal)) / Math.pow(10, decimal)
  }

  private ket(el: HTMLElement): number {
    const dataKet = el.getAttribute("data-ket")
    Util.notNull(dataKet)
    return parseInt(dataKet)
  }

  private prob(el: HTMLElement): number {
    const magnitude = this.magnitude(el)
    return magnitude * magnitude * 100
  }

  private magnitude(el: HTMLElement): number {
    const dataMagnitude = el.getAttribute("data-magnitude")
    Util.notNull(dataMagnitude)
    return parseFloat(dataMagnitude)
  }

  private phase(el: HTMLElement): number {
    const dataPhase = el.getAttribute("data-phase")
    Util.notNull(dataPhase)
    return parseFloat(dataPhase)
  }

  private get qubitCircles(): HTMLElement[] {
    this.qubitCircleTargetsCache ||= this.qubitCircleTargets
    return this.qubitCircleTargetsCache
  }
}
