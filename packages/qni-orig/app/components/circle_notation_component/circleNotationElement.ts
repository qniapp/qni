import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller, target, targets } from "@github/catalyst"
import {
  initQubitCirclePopup,
  setQubitCirclePopupContent,
} from "qubit_circle_popup/qubitCirclePopup"
import { Complex } from "lib/math"
import { ketDecimal } from "qubit_circle_component/qubitCircleComponent"

@controller
export class CircleNotationElement extends HTMLElement {
  @attr nqubit = 1
  @attr size = ""
  @attr magnitudes = "1.0"
  @attr phases = ""
  @attr multipleQubits = false

  @target popup: HTMLElement
  @targets qubitCircles: HTMLElement[]
  @targets qubitCircleGroups: HTMLElement[]
  @targets visibleQubitCircleGroups: HTMLElement[]

  private amplitudes!: { [ket: number]: Complex }

  setAmplitudes(amplitudes: { [ket: number]: Complex }): void {
    const qubitCircles = this.qubitCircles
    this.amplitudes = amplitudes

    for (const [i, each] of Object.entries(amplitudes)) {
      const qubitCircle = qubitCircles[i]

      const magnitude = each.abs()
      this.setMagnitude(qubitCircle, magnitude)
      if (magnitude === 0) continue

      const phaseDeg = (each.phase() / Math.PI) * 180
      this.setPhase(qubitCircle, phaseDeg)
    }
  }

  setPopupContent(event: MouseEvent): void {
    const qubitCircleEl = event.target as HTMLElement
    const ket = ketDecimal(qubitCircleEl)
    const amplitude = this.amplitudes[ket]

    if (amplitude === undefined) return

    setQubitCirclePopupContent(
      this.popup,
      qubitCircleEl,
      ket,
      amplitude,
      this.nqubit,
    )
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({ mode: "open" })
    this.update()
    this.startQubitCircleVisibilityObserver()
    initQubitCirclePopup(this.qubitCircles)
    if (this.multipleQubits) {
      this.dispatchEvent(
        new Event("circle-notation.loaded", {
          bubbles: true,
        }),
      )
    }
  }

  private startQubitCircleVisibilityObserver(): void {
    if (!this.multipleQubits) return

    const options = {
      root: this,
      threshold: [0, 0.2],
    }
    const callback = (entries: IntersectionObserverEntry[]) => {
      for (const each of entries) {
        const group = each.target
        if (each.intersectionRatio >= 0.2) {
          group.setAttribute(
            "data-targets",
            "circle-notation.qubitCircleGroups circle-notation.visibleQubitCircleGroups",
          )
          this.dispatchEvent(
            new CustomEvent("circle-notation.visibilityChanged", {
              detail: this.visibleQubitCircleKets,
              bubbles: true,
            }),
          )
        } else if (each.intersectionRatio === 0) {
          group.setAttribute(
            "data-targets",
            "circle-notation.qubitCircleGroups",
          )
        }
      }
    }
    const observer = new IntersectionObserver(callback, options)
    for (const each of this.qubitCircleGroups) {
      observer.observe(each)
    }
  }

  private get visibleQubitCircleKets(): number[] {
    return this.visibleQubitCircles.map((each) =>
      parseInt(each.getAttribute("data-ket")!),
    )
  }

  private get visibleQubitCircles(): HTMLElement[] {
    const groups = this.visibleQubitCircleGroups.map(
      (each) =>
        Array.from(each.querySelectorAll(".qubit-circle")) as HTMLElement[],
    )
    return ([] as HTMLElement[]).concat(...groups)
  }

  update(): void {
    render(
      html`<style>
          .qubit-circle-group--size4 {
            display: flex;
            flex-direction: row;
          }

          .qubit-circle-group--size8 {
            display: flex;
            flex-direction: row;
          }

          :host([data-nqubit="3"]) .qubit-circle-group--size8 {
            flex-direction: column;
          }

          @media (min-width: 768px) {
            :host([data-nqubit="3"]) .qubit-circle-group--size8 {
              flex-direction: row;
            }
          }

          .qubit-circle-group--size16 {
            display: flex;
            flex-direction: row;
          }

          @media (min-width: 768px) {
            .qubit-circle-group--size16 {
              flex-direction: row;
            }
          }

          :host([data-nqubit="4"]) .qubit-circle-group--size16 {
            flex-direction: column;
          }

          :host([data-nqubit="4"])
            .qubit-circle-group--size16
            .qubit-circle-group--size8:last-child {
            margin-left: 0;
            margin-top: 0;
          }

          :host([data-nqubit="5"]) .qubit-circle-group--size16 {
            flex-direction: column;
          }

          @media (min-width: 768px) {
            :host([data-nqubit="5"]) .qubit-circle-group--size16 {
              flex-direction: row;
            }
          }

          :host([data-nqubit="5"])
            .qubit-circle-group--size16
            .qubit-circle-group--size8:nth-child(even) {
            margin-left: 0;
          }

          @media (min-width: 768px) {
            :host([data-nqubit="5"])
              .qubit-circle-group--size16
              .qubit-circle-group--size8:nth-child(even) {
              margin-left: 0;
            }
          }

          @media (min-width: 768px) {
            :host([data-nqubit="6"]) .qubit-circle-group--size32 {
              display: flex;
              flex-direction: column;
            }
            :host([data-nqubit="7"]) .qubit-circle-group--size32,
            :host([data-nqubit="8"]) .qubit-circle-group--size32,
            :host([data-nqubit="9"]) .qubit-circle-group--size32,
            :host([data-nqubit="10"]) .qubit-circle-group--size32 {
              display: flex;
              flex-direction: row;
            }
          }

          @media (min-width: 768px) {
            :host([data-nqubit="6"]) .qubit-circle-group--size64,
            :host([data-nqubit="7"]) .qubit-circle-group--size64,
            :host([data-nqubit="8"]) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }

            :host([data-nqubit="9"]) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }

            :host([data-nqubit="10"]) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }
          }

          :host([data-nqubit="1"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-nqubit="1"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-nqubit="1"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-nqubit="1"]) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-nqubit="1"]) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-nqubit="1"]) .qubit-circle-group--size8:nth-of-type(2),
          :host([data-nqubit="1"]) .qubit-circle-group--size4:nth-of-type(2),
          :host([data-nqubit="1"]) .qubit-circle:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-nqubit="2"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-nqubit="2"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-nqubit="2"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-nqubit="2"]) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-nqubit="2"]) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-nqubit="2"]) .qubit-circle-group--size8:nth-of-type(2),
          :host([data-nqubit="2"]) .qubit-circle-group--size4:nth-of-type(2),
          :host([data-nqubit="2"]) .qubit-circle:nth-of-type(n + 5) {
            display: none;
          }

          :host([data-nqubit="3"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-nqubit="3"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-nqubit="3"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-nqubit="3"]) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-nqubit="3"]) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-nqubit="3"]) .qubit-circle-group--size8:nth-of-type(2) {
            display: none;
          }

          :host([data-nqubit="4"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-nqubit="4"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-nqubit="4"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-nqubit="4"]) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-nqubit="4"]) .qubit-circle-group--size16:nth-of-type(2) {
            display: none;
          }

          :host([data-nqubit="5"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-nqubit="5"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-nqubit="5"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-nqubit="5"]) .qubit-circle-group--size32:nth-of-type(2) {
            display: none;
          }

          :host([data-nqubit="6"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-nqubit="6"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-nqubit="6"])
            .qubit-circle-group--size64:nth-of-type(n + 2) {
            display: none;
          }

          :host([data-nqubit="7"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-nqubit="7"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-nqubit="7"])
            .qubit-circle-group--size64:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-nqubit="8"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-nqubit="8"])
            .qubit-circle-group--size128:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-nqubit="9"])
            .qubit-circle-group--size256:nth-of-type(n + 3) {
            display: none;
          }

          #body {
            display: flex;
            flex-direction: row;
          }

          :host([data-multiple-qubits]) #body {
            display: inline-block;
            margin-top: auto;
            margin-bottom: auto;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          @media (min-width: 768px) {
            :host([data-multiple-qubits]) #body {
              display: inline-block;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-top: 1.25rem;
              padding-bottom: 1.25rem;
            }
          }

          .qubit-circle {
            position: relative;
            height: 32px;
            width: 32px;
          }

          #body.size-xs .qubit-circle {
            height: 17px;
            width: 17px;
          }

          #body.size-sm .qubit-circle {
            height: 25px;
            width: 25px;
          }

          #body.size-base .qubit-circle {
            height: 32px;
            width: 32px;
          }

          #body.size-lg .qubit-circle {
            height: 48px;
            width: 48px;
          }

          #body.size-xl .qubit-circle {
            height: 64px;
            width: 64px;
          }

          :host([data-nqubit="1"]:not([data-multiple-qubits])) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          :host([data-nqubit="1"]) .qubit-circle,
          :host([data-nqubit="2"]) .qubit-circle {
            height: 64px;
            width: 64px;
          }

          :host([data-nqubit="3"]) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          @media (min-width: 768px) {
            :host([data-nqubit="3"]) .qubit-circle {
              height: 64px;
              width: 64px;
            }
          }

          :host([data-nqubit="4"]) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          @media (min-width: 768px) {
            :host([data-nqubit="4"]) .qubit-circle {
              height: 48px;
              width: 48px;
            }
          }

          :host([data-nqubit="5"]) .qubit-circle {
            height: 23px;
            width: 23px;
          }

          @media (min-width: 768px) {
            :host([data-nqubit="5"]) .qubit-circle {
              height: 32px;
              width: 32px;
            }
          }

          :host([data-nqubit="6"]) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-nqubit="6"]) .qubit-circle {
              height: 25px;
              width: 25px;
            }
          }

          :host([data-nqubit="7"]) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-nqubit="7"]) .qubit-circle {
              height: 17px;
              width: 17px;
            }
          }

          :host([data-nqubit="8"]) .qubit-circle,
          :host([data-nqubit="9"]) .qubit-circle,
          :host([data-nqubit="10"]) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-nqubit="8"]) .qubit-circle,
            :host([data-nqubit="9"]) .qubit-circle,
            :host([data-nqubit="10"]) .qubit-circle {
              height: 17px;
              width: 17px;
            }
          }

          .qubit-circle__magnitude {
            border-width: 2px;
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
            border-color: #e5e5e5;
            border-style: solid;
          }

          #body.size-xs .qubit-circle__magnitude,
          #body.size-sm .qubit-circle__magnitude {
            border-width: 1px;
          }

          #body.size-base .qubit-circle__magnitude,
          #body.size-lg .qubit-circle__magnitude,
          #body.size-xl .qubit-circle__magnitude {
            border-width: 2px;
          }

          :host([data-nqubit="5"]) .qubit-circle__magnitude,
          :host([data-nqubit="6"]) .qubit-circle__magnitude,
          :host([data-nqubit="7"]) .qubit-circle__magnitude,
          :host([data-nqubit="8"]) .qubit-circle__magnitude,
          :host([data-nqubit="9"]) .qubit-circle__magnitude,
          :host([data-nqubit="10"]) .qubit-circle__magnitude {
            border-width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-nqubit="5"]) .qubit-circle__magnitude {
              border-width: 2px;
            }
          }

          .qubit-circle__magnitude::after {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-radius: 9999px;
            content: "";
            background-color: #1cb0f6;
            transform: scaleX(0) scaleY(0);
            transform-origin: center;
          }

          .qubit-circle[data-rounded-magnitude="0.1"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.1) scaleY(0.1);
          }

          .qubit-circle[data-rounded-magnitude="0.2"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.2) scaleY(0.2);
          }

          .qubit-circle[data-rounded-magnitude="0.3"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.3) scaleY(0.3);
          }

          .qubit-circle[data-rounded-magnitude="0.4"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.4) scaleY(0.4);
          }

          .qubit-circle[data-rounded-magnitude="0.5"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.5) scaleY(0.5);
          }

          .qubit-circle[data-rounded-magnitude="0.6"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.6) scaleY(0.6);
          }

          .qubit-circle[data-rounded-magnitude="0.7"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.7) scaleY(0.7);
          }

          .qubit-circle[data-rounded-magnitude="0.8"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.8) scaleY(0.8);
          }

          .qubit-circle[data-rounded-magnitude="0.9"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.9) scaleY(0.9);
          }

          .qubit-circle[data-rounded-magnitude="1"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(1) scaleY(1);
          }

          .qubit-circle__phase {
            border-width: 2px;
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
            border-color: #777777;
            border-style: solid;
            transform: rotate(0deg);
            transform-origin: center;
          }

          #body.size-xs .qubit-circle__phase,
          #body.size-sm .qubit-circle__phase {
            border-width: 1px;
          }

          #body.size-base .qubit-circle__phase,
          #body.size-lg .qubit-circle__phase,
          #body.size-xl .qubit-circle__phase {
            border-width: 2px;
          }

          :host([data-nqubit="5"]) .qubit-circle__phase,
          :host([data-nqubit="6"]) .qubit-circle__phase,
          :host([data-nqubit="7"]) .qubit-circle__phase,
          :host([data-nqubit="8"]) .qubit-circle__phase,
          :host([data-nqubit="9"]) .qubit-circle__phase,
          :host([data-nqubit="10"]) .qubit-circle__phase {
            border-width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-nqubit="5"]) .qubit-circle__phase {
              border-width: 2px;
            }
          }

          .qubit-circle:not([data-rounded-magnitude]) > .qubit-circle__phase,
          .qubit-circle[data-rounded-magnitude="0"] > .qubit-circle__phase {
            transform: scaleX(0) scaleY(0) !important;
          }

          .qubit-circle[data-rounded-phase="10"] > .qubit-circle__phase {
            transform: rotate(-10deg);
          }

          .qubit-circle[data-rounded-phase="20"] > .qubit-circle__phase {
            transform: rotate(-20deg);
          }

          .qubit-circle[data-rounded-phase="30"] > .qubit-circle__phase {
            transform: rotate(-30deg);
          }

          .qubit-circle[data-rounded-phase="40"] > .qubit-circle__phase {
            transform: rotate(-40deg);
          }

          .qubit-circle[data-rounded-phase="50"] > .qubit-circle__phase {
            transform: rotate(-50deg);
          }

          .qubit-circle[data-rounded-phase="60"] > .qubit-circle__phase {
            transform: rotate(-60deg);
          }

          .qubit-circle[data-rounded-phase="70"] > .qubit-circle__phase {
            transform: rotate(-70deg);
          }

          .qubit-circle[data-rounded-phase="80"] > .qubit-circle__phase {
            transform: rotate(-80deg);
          }

          .qubit-circle[data-rounded-phase="90"] > .qubit-circle__phase {
            transform: rotate(-90deg);
          }

          .qubit-circle[data-rounded-phase="100"] > .qubit-circle__phase {
            transform: rotate(-100deg);
          }

          .qubit-circle[data-rounded-phase="110"] > .qubit-circle__phase {
            transform: rotate(-110deg);
          }

          .qubit-circle[data-rounded-phase="120"] > .qubit-circle__phase {
            transform: rotate(-120deg);
          }

          .qubit-circle[data-rounded-phase="130"] > .qubit-circle__phase {
            transform: rotate(-130deg);
          }

          .qubit-circle[data-rounded-phase="140"] > .qubit-circle__phase {
            transform: rotate(-140deg);
          }

          .qubit-circle[data-rounded-phase="150"] > .qubit-circle__phase {
            transform: rotate(-150deg);
          }

          .qubit-circle[data-rounded-phase="160"] > .qubit-circle__phase {
            transform: rotate(-160deg);
          }

          .qubit-circle[data-rounded-phase="170"] > .qubit-circle__phase {
            transform: rotate(-170deg);
          }

          .qubit-circle[data-rounded-phase="180"] > .qubit-circle__phase {
            transform: rotate(-180deg);
          }

          .qubit-circle[data-rounded-phase="190"] > .qubit-circle__phase {
            transform: rotate(-190deg);
          }

          .qubit-circle[data-rounded-phase="200"] > .qubit-circle__phase {
            transform: rotate(-200deg);
          }

          .qubit-circle[data-rounded-phase="210"] > .qubit-circle__phase {
            transform: rotate(-210deg);
          }

          .qubit-circle[data-rounded-phase="220"] > .qubit-circle__phase {
            transform: rotate(-220deg);
          }

          .qubit-circle[data-rounded-phase="230"] > .qubit-circle__phase {
            transform: rotate(-230deg);
          }

          .qubit-circle[data-rounded-phase="240"] > .qubit-circle__phase {
            transform: rotate(-240deg);
          }

          .qubit-circle[data-rounded-phase="250"] > .qubit-circle__phase {
            transform: rotate(-250deg);
          }

          .qubit-circle[data-rounded-phase="260"] > .qubit-circle__phase {
            transform: rotate(-260deg);
          }

          .qubit-circle[data-rounded-phase="270"] > .qubit-circle__phase {
            transform: rotate(-270deg);
          }

          .qubit-circle[data-rounded-phase="280"] > .qubit-circle__phase {
            transform: rotate(-280deg);
          }

          .qubit-circle[data-rounded-phase="290"] > .qubit-circle__phase {
            transform: rotate(-290deg);
          }

          .qubit-circle[data-rounded-phase="300"] > .qubit-circle__phase {
            transform: rotate(-300deg);
          }

          .qubit-circle[data-rounded-phase="310"] > .qubit-circle__phase {
            transform: rotate(-310deg);
          }

          .qubit-circle[data-rounded-phase="320"] > .qubit-circle__phase {
            transform: rotate(-320deg);
          }

          .qubit-circle[data-rounded-phase="330"] > .qubit-circle__phase {
            transform: rotate(-330deg);
          }

          .qubit-circle[data-rounded-phase="340"] > .qubit-circle__phase {
            transform: rotate(-340deg);
          }

          .qubit-circle[data-rounded-phase="350"] > .qubit-circle__phase {
            transform: rotate(-350deg);
          }

          .qubit-circle[data-rounded-phase="360"] > .qubit-circle__phase {
            transform: rotate(-360deg);
          }

          .qubit-circle__phase::after {
            width: 2px;
            position: absolute;
            top: 0px;
            right: 0px;
            left: 0px;
            background-color: #4b4b4b;
            height: 50%;
            margin-left: auto;
            margin-right: auto;
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            content: "";
          }

          :host([data-nqubit="5"]) .qubit-circle__phase::after,
          :host([data-nqubit="6"]) .qubit-circle__phase::after,
          :host([data-nqubit="7"]) .qubit-circle__phase::after,
          :host([data-nqubit="8"]) .qubit-circle__phase::after,
          :host([data-nqubit="9"]) .qubit-circle__phase::after,
          :host([data-nqubit="10"]) .qubit-circle__phase::after {
            width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-nqubit="5"]) .qubit-circle__phase::after {
              width: 2px;
            }
          }

          #body.size-xs .qubit-circle__phase::after,
          #body.size-sm .qubit-circle__phase::after {
            width: 1px;
          }

          #body.size-base .qubit-circle__phase::after,
          #body.size-lg .qubit-circle__phase::after,
          #body.size-xl .qubit-circle__phase::after {
            width: 2px;
          }

          #popup {
            display: none;
          }
        </style>

        <div id="body" class="${this.classString}">
          ${this.qubitCirclesHtml}
        </div>

        <div
          id="popup"
          class="qubit-circle-popup hidden"
          data-target="circle-notation.popup"
        >
          <div class="qubit-circle-popup__ket">
            |<span class="qubit-circle-popup__ket-binary"></span>⟩ (decimal
            <span class="qubit-circle-popup__ket-decimal"></span>)
          </div>
          <ul class="list-none">
            <li>
              Amplitude: <span class="qubit-circle-popup__amplitude-real"></span
              ><span class="qubit-circle-popup__amplitude-imag"></span>
            </li>
            <li>
              Probability: <span class="qubit-circle-popup__probability"></span>
            </li>
            <li>Phase: <span class="qubit-circle-popup__phase"></span></li>
          </ul>
        </div>`,
      this.shadowRoot!,
    )

    for (const [i, each] of this.magnitudes.split(",").entries()) {
      this.setMagnitude(this.qubitCircles[i], parseFloat(each))
    }
    for (const [i, each] of this.phases.split(",").entries()) {
      this.setPhase(this.qubitCircles[i], parseFloat(each))
    }
  }

  private setMagnitude(
    qubitCircle: HTMLElement | null | undefined,
    magnitude: number,
  ): void {
    if (qubitCircle === null) return
    if (qubitCircle === undefined) return

    let roundedMag = Math.round(magnitude * 100)
    roundedMag =
      roundedMag < 10
        ? roundedMag === 0
          ? 0
          : 10
        : Math.round(roundedMag / 10) * 10
    roundedMag = roundedMag / 100

    qubitCircle.setAttribute("data-magnitude", magnitude.toString())
    qubitCircle.setAttribute("data-rounded-magnitude", roundedMag.toString())
  }

  private setPhase(
    qubitCircle: HTMLElement | null | undefined,
    phase: number,
  ): void {
    if (qubitCircle === null) return
    if (qubitCircle === undefined) return

    let roundedPhase = Math.round(phase / 10) * 10
    if (roundedPhase < 0) roundedPhase = 360 + roundedPhase

    qubitCircle.setAttribute("data-phase", phase.toString())
    qubitCircle.setAttribute("data-rounded-phase", roundedPhase.toString())
  }

  private get classString(): string {
    const klass = []

    if (this.size === "xs") klass.push("size-xs")
    if (this.size === "sm") klass.push("size-sm")
    if (this.size === "base") klass.push("size-base")
    if (this.size === "lg") klass.push("size-lg")
    if (this.size === "xl") klass.push("size-xl")

    return klass.join(" ")
  }

  private get qubitCirclesHtml(): TemplateResult {
    if (this.multipleQubits) return this.stateVectorHtml(10)

    return html`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`
  }

  private qubitCircleHtml(ket: number): TemplateResult {
    return html`<div
      class="qubit-circle"
      data-ket="${ket}"
      data-action="mouseenter:circle-notation#setPopupContent"
      data-targets="circle-notation.qubitCircles"
    >
      <div class="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase"></div>
    </div>`
  }

  private stateVectorHtml(maxNqubit: number): TemplateResult {
    let stateVector = html``

    const groups = this.qubitCircleGroup(
      [...Array(2 ** maxNqubit).keys()],
      (qc256: number[]) => {
        return this.qubitCircleGroup(qc256, (qc128: number[]) => {
          return this.qubitCircleGroup(qc128, (qc64: number[]) => {
            return this.qubitCircleGroup(qc64, (qc32: number[]) => {
              return this.qubitCircleGroup(qc32, (qc16: number[]) => {
                return this.qubitCircleGroup(qc16, (qc8: number[]) => {
                  return this.qubitCircleGroup(qc8)
                })
              })
            })
          })
        })
      },
      256,
    )

    for (const each of groups) {
      stateVector = html`${stateVector} ${each}`
    }

    return stateVector
  }

  private qubitCircleGroup(
    kets: number[],
    block?: (kets: number[]) => TemplateResult[],
    size: number = kets.length / 2,
  ): TemplateResult[] {
    const arrayChunk = (numbers: number[], chunkSize = 1): number[][] => {
      return numbers.reduce(
        (acc: number[][], _value: number, index: number) =>
          index % chunkSize
            ? acc
            : [...acc, numbers.slice(index, index + chunkSize)],
        [],
      )
    }

    return arrayChunk(kets, size).map((each) => {
      let group = html``

      if (block) {
        for (const subGroup of block(each)) {
          group = html`${group} ${subGroup}`
        }
      } else {
        for (const ket of each) {
          group = html`${group} ${this.qubitCircleHtml(ket)}`
        }
      }

      if (size === 64) {
        return html`<div
          class="qubit-circle-group--size${size}"
          data-targets="circle-notation.qubitCircleGroups"
        >
          ${group}
        </div>`
      } else {
        return html`<div class="qubit-circle-group--size${size}">${group}</div>`
      }
    })
  }
}
