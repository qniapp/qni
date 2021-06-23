import tippy, {
  createSingleton,
  Instance,
  CreateSingletonInstance,
  Props,
  CreateSingletonProps,
} from "tippy.js"
import { Controller } from "stimulus"
import { Util } from "lib/base"
import emergence from "emergence.js"

export default class CircleNotationController extends Controller {
  static targets = ["qubitCircle"]

  private qubitCircleVisibilityChanged!: boolean
  private visibleQubitCirclesCache!: HTMLElement[]

  private magnitudes!: number[]
  private phases!: number[]

  declare initialized: boolean
  declare readonly qubitCircleTargets: HTMLElement[]
  declare tippyInstances: Instance<Props>[]
  declare tippySingleton: CreateSingletonInstance<CreateSingletonProps<Props>>
  declare popupEl: HTMLElement

  connect(): void {
    this.initialized = false
    this.qubitCircleVisibilityChanged = true
  }

  disconnect(): void {
    if (!this.initialized) return

    this.tippyInstances.forEach((each) => {
      each.destroy()
    })
    this.tippySingleton.destroy()
  }

  incrementNqubit(): void {
    this.data.set("nqubit", (this.nqubit + 1).toString())
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    emergence.engage()
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

  update(magnitudes: number[], phases: number[]): void {
    this.magnitudes = magnitudes
    this.phases = phases

    if (!this.initialized) {
      this.initQubitCircles()
      this.initPopup()
      this.initialized = true
    }
    this.updateQubitCircles()
  }

  private initQubitCircles() {
    const circleNotation = document.getElementById("circle-notation")
    Util.notNull(circleNotation)

    const stateVector = document.createElement("div")
    stateVector.classList.add("state-vector")

    this.qubitCircleGroup(
      [...Array(2 ** this.maxNqubit).keys()],
      (qc64: number[]) => {
        return this.qubitCircleGroup(qc64, (qc32: number[]) => {
          return this.qubitCircleGroup(qc32, (qc16: number[]) => {
            return this.qubitCircleGroup(qc16, (qc8: number[]) => {
              return this.qubitCircleGroup(qc8)
            })
          })
        })
      },
      64,
    ).forEach((each) => {
      stateVector.appendChild(each)
    })

    circleNotation.appendChild(stateVector)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    emergence.init({
      container: circleNotation,
      callback: (_element: unknown, state: string) => {
        if (state === "visible") {
          this.updateQubitCircles()
          this.qubitCircleVisibilityChanged = true
        }
      },
    })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    emergence.engage()
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

  private qubitCircleGroup(
    kets: number[],
    block?: (kets: number[]) => HTMLElement[],
    size: number = kets.length / 2,
  ): HTMLElement[] {
    const arrayChunk = ([...array]: number[], chunkSize = 1): number[][] => {
      return array.reduce(
        (acc, _value, index) =>
          index % chunkSize
            ? acc
            : [...acc, array.slice(index, index + chunkSize)],
        [],
      )
    }

    return arrayChunk(kets, size).map((each) => {
      const group = document.createElement("div")
      group.classList.add(`qubit-circle-group--size${size}`)
      if (size == 4) group.dataset.emergence = "hidden"

      if (block) {
        block(each).forEach((subGroup) => {
          group.appendChild(subGroup)
        })
      } else {
        each.forEach((ket) => {
          group.appendChild(this.qubitCircle(ket))
        })
      }

      return group
    })
  }

  private qubitCircle(ket: number): HTMLElement {
    const template = document.getElementById("qubit-circle-template")
    Util.notNull(template)

    const qubitCircle = template.cloneNode(true) as HTMLElement
    qubitCircle.removeAttribute("id")
    qubitCircle.setAttribute("data-ket", ket.toString())
    qubitCircle.classList.remove("hidden")

    return qubitCircle
  }

  private updateQubitCircles(): void {
    // const t0 = performance.now()

    const qubitCircles = this.visibleQubitCircles()

    for (let i = 0; i < qubitCircles.length; i++) {
      const qc = qubitCircles[i]
      const ket = this.ket(qc)
      const magnitude = this.magnitudes[ket]

      if (magnitude === undefined) break

      qc.setAttribute(
        "data-magnitude-int",
        Math.round(magnitude * 100).toString(),
      )
      if (magnitude !== 0) {
        const phase = this.phases[ket]
        qc.setAttribute("data-phase-int", Math.round(phase).toString())
      }
    }

    // const t1 = performance.now()
    // console.log(Math.floor(t1 - t0).toString() + " ms")
  }

  private popupContent(el: HTMLElement): string {
    const ket = this.ket(el)
    const prob = this.round(this.prob(ket), 5)
    const phase = this.round(this.phases[ket], 2)

    let html =
      this.popupEl.innerHTML +
      `<div class="text-lg">|<span class="font-mono">${ket}</span>&#10217;</div>`
    html += `<ul class="list-none"><li>Prob: <span class="font-bold font-mono">${prob}%</span></li>`
    if (prob > 0) {
      html += `<li>Phase: <span class="font-bold font-mono">${phase}°</span></li>`
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

  private prob(ket: number): number {
    const magnitude = this.magnitudes[ket]
    return magnitude * magnitude * 100
  }

  private visibleQubitCircles(): HTMLElement[] {
    if (!this.qubitCircleVisibilityChanged) {
      return this.visibleQubitCirclesCache
    }

    this.visibleQubitCirclesCache = Array.from(
      this.element.querySelectorAll(
        ".qubit-circle-group--size4[data-emergence='visible'] .qubit-circle",
      ),
    )
    this.qubitCircleVisibilityChanged = false
    return this.visibleQubitCirclesCache
  }

  get maxNqubit(): number {
    const maxNqubit = this.data.get("max-nqubit")
    Util.notNull(maxNqubit)
    return parseInt(maxNqubit)
  }
}
