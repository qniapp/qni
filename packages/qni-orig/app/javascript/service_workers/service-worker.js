import { Circuit } from "lib/circuit.ts"

// var CACHE_VERSION = 'v1';
// var CACHE_NAME = CACHE_VERSION + ':sw-cache-';

function onInstall(event) {
  // console.log('[Serviceworker]', "Installing!", event);
  // event.waitUntil(
  //   caches.open(CACHE_NAME).then(function prefill(cache) {
  //     return cache.addAll([
  //       '<%= asset_pack_path 'application.js' %>',
  //       '<%= asset_pack_path 'application.css' %>',
  //     ]);
  //   })
  // );
}

function onActivate(event) {
  console.log("[Serviceworker]", "Activating!", event)
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {
            // Return true if you want to remove this cache,
            // but remember that caches are shared across
            // the whole origin
            // return cacheName.indexOf(CACHE_VERSION) !== 0;
          })
          .map(function (cacheName) {
            return caches.delete(cacheName)
          }),
      )
    }),
  )
}

// Borrowed from https://github.com/TalAter/UpUp
function onFetch(event) {
  event.respondWith(
    // try to return untouched request from network first
    fetch(event.request).catch(function () {
      // if it fails, try to return request from the cache
      return caches.match(event.request).then(function (response) {
        if (response) {
          return response
        }
        // if not found in cache, return default offline content for navigate requests
        if (
          event.request.mode === "navigate" ||
          (event.request.method === "GET" &&
            event.request.headers.get("accept").includes("text/html"))
        ) {
          console.log("[Serviceworker]", "Fetching offline content", event)
          return caches.match("/offline.html")
        }
      })
    }),
  )
}

function getGate(targets) {
  const targetValues = Array.from(targets.values())
  var gate = "nop"

  if (targets.size > 0 && targetValues[0]) {
    gate = targetValues[0].gate
    if (
      targetValues.every((t) => {
        return t.gate == "control-dot"
      })
    ) {
      gate = "cphase"
    } else if (
      targetValues.filter((t) => {
        return t.gate == "control-dot"
      }).length == 1
    ) {
      if (
        targetValues.some((t) => {
          return t.gate == "not"
        })
      ) {
        gate = "cnot"
      } else if (
        targetValues.some((t) => {
          return t.gate == "up"
        })
      ) {
        gate = "cswap"
      }
    } else if (
      targetValues.filter((t) => {
        return t.gate == "control-dot"
      }).length == 2
    ) {
      if (
        targetValues.some((t) => {
          return t.gate == "not"
        })
      ) {
        gate = "ccnot"
      }
    } else if (
      targetValues.filter((t) => {
        return t.gate == "control-dot"
      }).length == 3
    ) {
      if (
        targetValues.some((t) => {
          return t.gate == "not"
        })
      ) {
        gate = "ccnot"
      }
    } else if (
      targetValues.filter((t) => {
        return t.gate == "control-dot"
      }).length == 4
    ) {
      if (
        targetValues.some((t) => {
          return t.gate == "not"
        })
      ) {
        gate = "ccnot"
      }
    } else if (
      gate == "phase" &&
      targets.size > 1 &&
      targetValues.every((t) => {
        return t.gate == "phase"
      })
    ) {
      gate = "cphase"
    }
  }

  return gate
}

self.addEventListener(
  "message",
  function (e) {
    const nqubit = e.data["nqubit"]
    var circuit = new Circuit("0".repeat(e.data["nqubit"]))
    var magnitudes = {}
    var phases = {}
    var global = {}

    Array.prototype.forEach.call(e.data["steps"], (step, i) => {
      const gate = getGate(step)
      var bits = null
      magnitudes[i] = []
      phases[i] = []

      switch (gate) {
        case "nop": {
          circuit = circuit.nop()
          break
        }
        case "write": {
          const targets = {}
          for (const [bit, entry] of step) {
            targets[bit] = entry.value
          }
          circuit = circuit.write(targets)
          break
        }
        case "readout": {
          const targets = Array.from(step.keys())
          const result = circuit.read(...targets)
          const set = Array.from(step.values())[0]["set"]
          circuit = result.circuit
          bits = result.bits
          if (set) {
            global[set] = bits[0]
          }
          break
        }
        case "not": {
          const cond = Array.from(step.values())[0]["if"]
          if (!cond || global[cond] == 1) {
            const targets = Array.from(step.keys())
            circuit = circuit.x(...targets)
          } else {
            circuit = circuit.nop()
          }
          break
        }
        case "hadamard": {
          const cond = Array.from(step.values())[0]["if"]
          if (!cond || global[cond] == 1) {
            const targets = Array.from(step.keys())
            circuit = circuit.h(...targets)
          } else {
            circuit = circuit.nop()
          }
          break
        }
        case "phase": {
          const targets = Array.from(step.keys())
          const theta = step.get(targets[0]).value
          circuit = circuit.phase(theta, ...targets)
          break
        }
        case "root-not": {
          const targets = Array.from(step.keys())
          circuit = circuit.rnot(...targets)
          break
        }
        case "cnot": {
          const control = Array.from(step.entries()).find(([bit, entry]) => {
            return entry.gate == "control-dot"
          })[0]
          const targets = Array.from(step.entries())
            .filter(([bit, entry]) => {
              return entry.gate != "control-dot"
            })
            .map(([bit, entry]) => {
              return bit
            })
          circuit = circuit.cnot(control, targets)
          break
        }
        case "cphase": {
          const targets = Array.from(step.keys())
          const theta = step.get(targets[0]).value || "pi"
          circuit = circuit.cphase(theta, targets)
          break
        }
        case "swap": {
          const targets = Array.from(step.entries()).map(([bit, entry]) => {
            return bit
          })
          circuit = circuit.swap(...targets)
          break
        }
        case "down": {
          const targets = Array.from(step.entries())
          circuit = circuit.down(targets[0][0])
          break
        }
        case "up": {
          const targets = Array.from(step.entries())
          circuit = circuit.down(targets[0].key)
          break
        }
        case "ccnot": {
          const controls = Array.from(step.entries())
            .filter(([bit, entry]) => {
              return entry.gate == "control-dot"
            })
            .map(([bit, entry]) => {
              return bit
            })
          const targets = Array.from(step.entries()).find(([bit, entry]) => {
            return entry.gate == "not"
          })

          circuit = circuit.ccnot(controls, targets[0])
          break
        }
        case "cswap": {
          const control = Array.from(step.entries()).find(([bit, entry]) => {
            return entry.gate == "control-dot"
          })[0]
          const targets = Array.from(step.entries())
            .filter(([bit, entry]) => {
              return entry.gate != "control-dot"
            })
            .map(([bit, entry]) => {
              return bit
            })
          circuit.cswap(control, targets)
          break
        }
        default:
          alert(`Unknown gate ${gate}`)
      }

      Array.from(Array(2 ** nqubit)).map((_, c) => {
        magnitudes[i].push(circuit.magnitude(c))
        phases[i].push(circuit.degree(c))
      })

      self.postMessage({
        type: "step",
        gate: gate,
        bits: bits,
        step: i,
        magnitudes: magnitudes[i],
        phases: phases[i],
        global: global,
      })
    })

    self.postMessage({ type: "finish" })
  },
  false,
)

self.addEventListener("install", onInstall)
self.addEventListener("activate", onActivate)
self.addEventListener("fetch", onFetch)
