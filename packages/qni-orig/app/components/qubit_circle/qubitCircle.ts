import { Util } from "lib/base"

export function setQubitCircleClasses(
  qubitCircles: HTMLElement[],
  magnitudes: { [bit: number]: number },
  phases: { [bit: number]: number },
): void {
  for (let i = 0; i < qubitCircles.length; i++) {
    const qc = qubitCircles[i]
    const ket = ketDecimal(qc)
    const magnitude = magnitudes[ket]

    if (magnitude === undefined) break

    let className = ""
    const magInt = Math.round(magnitude * 100)
    const magRounded =
      magInt < 10 ? (magInt == 0 ? 0 : 10) : Math.round(magInt / 10) * 10
    className += `qubit-circle qubit-circle--magnitude-${magRounded}`

    if (magRounded != 0) {
      const phase = Math.round(phases[ket])
      let phaseRounded = Math.round(phase / 10) * 10
      if (phaseRounded < 0) phaseRounded = 360 + phaseRounded
      className += ` qubit-circle--phase-${phaseRounded.toString()}`
    }

    qc.className = className
  }
}

export function ketDecimal(el: HTMLElement): number {
  const dataKet = el.getAttribute("data-ket")
  Util.notNull(dataKet)

  return parseInt(dataKet)
}
