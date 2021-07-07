import { Util } from "lib/base"
import tippy, {
  CreateSingletonInstance,
  CreateSingletonProps,
  Instance,
  Props,
  ReferenceElement,
  createSingleton,
  roundArrow,
} from "tippy.js"

export function initQubitCirclePopup(
  qubitCircles: HTMLElement[],
): CreateSingletonInstance<CreateSingletonProps<Props>> {
  const tippyInstances = tippy(qubitCircles)
  return createSingleton(tippyInstances, {
    allowHTML: true,
    animation: false,
    arrow: roundArrow + roundArrow,
    delay: 0,
    theme: "qni",
  })
}

export function cleanupPopup(
  qubitCircles: HTMLElement[],
  tippySingleton: CreateSingletonInstance<CreateSingletonProps<Props>>,
): void {
  qubitCircles.forEach((each) => {
    (each as ReferenceElement)._tippy?.destroy()
  })
  tippySingleton.destroy()
}

export function setQubitCirclePopupContent(
  popupEl: HTMLElement,
  qubitCircleEl: HTMLElement,
  ket: number,
  magnitude: number,
  phase: number,
  nqubit: number,
): void {
  const tippy = (qubitCircleEl as ReferenceElement)._tippy as Instance
  tippy.setContent(popupContent(popupEl, ket, magnitude, phase, nqubit))
}

function popupContent(
  popupEl: HTMLElement,
  ket: number,
  magnitude: number,
  phase: number,
  nqubit: number,
): string {
  const probability = round(magnitude * magnitude * 100, 5)
  const phaseRounded = round(phase, 2)

  popupKetBinaryEl(popupEl).textContent = ket.toString(2).padStart(nqubit, "0")
  popupKetDecimalEl(popupEl).textContent = ket.toString()
  popupProbabilityEl(popupEl).textContent = `${probability}%`
  popupPhaseEl(popupEl).textContent = probability > 0 ? `${phaseRounded}°` : "-"

  return popupEl.innerHTML
}

function round(n: number, decimal: number): number {
  return Math.round(n * Math.pow(10, decimal)) / Math.pow(10, decimal)
}

function popupKetBinaryEl(popupEl: HTMLElement): HTMLElement {
  const el = popupEl
    .getElementsByClassName("qubit-circle-popup__ket-binary")
    .item(0) as HTMLElement
  Util.notNull(el)

  return el
}

function popupKetDecimalEl(popupEl: HTMLElement): HTMLElement {
  const el = popupEl
    .getElementsByClassName("qubit-circle-popup__ket-decimal")
    .item(0) as HTMLElement
  Util.notNull(el)

  return el
}

function popupProbabilityEl(popupEl: HTMLElement): HTMLElement {
  const el = popupEl
    .getElementsByClassName("qubit-circle-popup__probability")
    .item(0) as HTMLElement
  Util.notNull(el)

  return el
}

function popupPhaseEl(popupEl: HTMLElement): HTMLElement {
  const el = popupEl
    .getElementsByClassName("qubit-circle-popup__phase")
    .item(0) as HTMLElement
  Util.notNull(el)

  return el
}
