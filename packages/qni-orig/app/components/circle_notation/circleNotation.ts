import { Util } from "lib/base"

export function createStateVector(maxNqubit: number): HTMLElement {
  const stateVector = document.createElement("div")
  stateVector.classList.add("state-vector")

  qubitCircleGroup(
    [...Array(2 ** maxNqubit).keys()],
    (qc256: number[]) => {
      return qubitCircleGroup(qc256, (qc128: number[]) => {
        return qubitCircleGroup(qc128, (qc64: number[]) => {
          return qubitCircleGroup(qc64, (qc32: number[]) => {
            return qubitCircleGroup(qc32, (qc16: number[]) => {
              return qubitCircleGroup(qc16, (qc8: number[]) => {
                return qubitCircleGroup(qc8)
              })
            })
          })
        })
      })
    },
    256,
  ).forEach((each) => {
    stateVector.appendChild(each)
  })

  return stateVector
}

export function visibleQubitCircles(circleNotationEl: Element): HTMLElement[] {
  return Array.from(
    circleNotationEl.querySelectorAll(
      ".qubit-circle-group--size64[data-emergence='visible'] .qubit-circle",
    ),
  )
}

function qubitCircleGroup(
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
    if (size == 64) group.dataset.emergence = "hidden"

    if (block) {
      block(each).forEach((subGroup) => {
        group.appendChild(subGroup)
      })
    } else {
      each.forEach((ket) => {
        group.appendChild(newQubitCircleEl(ket))
      })
    }

    return group
  })
}

function newQubitCircleEl(ket: number): HTMLElement {
  const templateEl = document.getElementById("qubit-circle-template")
  Util.notNull(templateEl)

  const el = templateEl.cloneNode(true) as HTMLElement

  el.removeAttribute("id")
  el.setAttribute("data-ket", ket.toString())
  el.classList.remove("hidden")

  return el
}
