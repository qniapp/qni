/**
 * Emit a custom event
 *
 * @param type    The event type
 * @param detail  Any details to pass along with the event
 * @param element The element to attach the event to
 */
export function emitEvent(type: string, detail = {}, element: Node = document): boolean {
  const event = new CustomEvent(type, {
    bubbles: true,
    cancelable: true,
    detail,
  })

  return element.dispatchEvent(event)
}
