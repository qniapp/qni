export function once(element, eventName) {
  return new Promise(resolve => {
    element.addEventListener(eventName, resolve, {once: true})
  })
}
