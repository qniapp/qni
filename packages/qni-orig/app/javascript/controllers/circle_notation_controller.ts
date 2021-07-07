import "@interactjs/auto-start"
import "@interactjs/actions/drag"
import "@interactjs/dev-tools"

import { CreateSingletonInstance, CreateSingletonProps, Props } from "tippy.js"

import { Controller } from "stimulus"
import { Util } from "lib/base"
import emergence from "emergence.js"
import { ketDecimal, setQubitCircleClasses } from "qubit_circle/qubitCircle"
import {
  createStateVector,
  visibleQubitCircles,
} from "circle_notation/circleNotation"
import {
  initQubitCirclePopup,
  cleanupPopup,
  setQubitCirclePopupContent,
} from "qubit_circle_popup/qubitCirclePopup"

export default class CircleNotationController extends Controller {
  static targets = ["qubitCircle", "popup"]

  private qubitCircleVisibilityChanged!: boolean
  private visibleQubitCirclesCache!: HTMLElement[]

  private magnitudes!: { [bit: number]: number }
  private phases!: { [bit: number]: number }

  declare initialized: boolean
  declare readonly qubitCircleTargets: HTMLElement[]
  declare readonly popupTarget: HTMLElement
  declare tippySingleton: CreateSingletonInstance<CreateSingletonProps<Props>>

  connect(): void {
    this.initialized = false
    this.qubitCircleVisibilityChanged = true
  }

  disconnect(): void {
    if (!this.initialized) return
    cleanupPopup(this.qubitCircleTargets, this.tippySingleton)
  }

  incrementNqubit(): void {
    this.data.set("nqubit", (this.nqubit + 1).toString())
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    emergence.engage()
  }

  setPopupContent(event: MouseEvent): void {
    const qubitCircleEl = event.target as HTMLElement
    Util.notNull(qubitCircleEl)

    const ket = ketDecimal(qubitCircleEl)
    const magnitude = this.magnitudes[ket]
    const phase = this.phases[ket]

    setQubitCirclePopupContent(
      this.popupTarget,
      qubitCircleEl,
      ket,
      magnitude,
      phase,
      this.nqubit,
    )
  }

  set nqubit(nqubit: number) {
    this.data.set("nqubit", nqubit.toString())
  }

  get nqubit(): number {
    const nqubit = this.data.get("nqubit")
    Util.notNull(nqubit)

    return parseInt(nqubit)
  }

  get maxNqubit(): number {
    const maxNqubit = this.data.get("max-nqubit")
    Util.notNull(maxNqubit)

    return parseInt(maxNqubit)
  }

  update(
    magnitudes: { [bit: number]: number },
    phases: { [bit: number]: number },
  ): void {
    this.magnitudes = magnitudes
    this.phases = phases

    if (!this.initialized) {
      this.initQubitCircles()
      this.tippySingleton = initQubitCirclePopup(this.qubitCircleTargets)
      this.initialized = true
    }
    window.requestAnimationFrame(this.updateQubitCircles.bind(this))
  }

  private initQubitCircles() {
    const stateVector = createStateVector(this.maxNqubit)

    this.element.appendChild(stateVector)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    emergence.init({
      container: this.element,
      callback: (_element: unknown, state: string) => {
        if (state === "visible") {
          this.qubitCircleVisibilityChanged = true
          window.requestAnimationFrame(this.updateQubitCircles.bind(this))
        }
      },
    })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    emergence.engage()
  }

  private updateQubitCircles(): void {
    setQubitCircleClasses(
      this.visibleQubitCircles(),
      this.magnitudes,
      this.phases,
    )
  }

  private visibleQubitCircles(): HTMLElement[] {
    if (!this.qubitCircleVisibilityChanged) {
      return this.visibleQubitCirclesCache
    }

    this.visibleQubitCirclesCache = visibleQubitCircles(this.element)

    this.qubitCircleVisibilityChanged = false
    return this.visibleQubitCirclesCache
  }
}
