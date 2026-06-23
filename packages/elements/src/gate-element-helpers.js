import {html, render} from '@github/jtml'
import chevronSelectorVerticalIcon from '../icon/chevron_selector_vertical.svg'

function connectGate(element, initResizeable) {
  if (element.shadowRoot !== null) return
  element.attachShadow({mode: 'open'})
  element.update()
  element.initDraggable()
  if (initResizeable) element.initResizeable()
}

export function connectDraggableGate(element) {
  connectGate(element, false)
}

export function connectResizeableGate(element) {
  connectGate(element, true)
}

export function renderIconGate(element, icon) {
  render(
    html`<div part="body">${element.iconHtml(icon)}</div>
      <div part="outline"></div>`,
    element.shadowRoot,
  )
}

export function renderResizeableIconGate(element, icon, resizeHandleTarget) {
  render(
    html`<div part="layout">
        <div part="body">${element.iconHtml(icon)}</div>
        <div class="resize-handle" part="resize-handle" data-target="${resizeHandleTarget}">
          <div part="resize-handle-icon">${element.iconHtml(chevronSelectorVerticalIcon)}</div>
        </div>
      </div>
      <div part="outline"></div>`,
    element.shadowRoot,
  )
}

export function renderMeasurementGate(element, icon) {
  render(
    html`<div part="body">
        ${element.iconHtml(icon)}
        <div id="value" part="value"></div>
      </div>
      <div part="outline"></div>`,
    element.shadowRoot,
  )
}

export function renderWriteGate(element, icon) {
  render(
    html`<div part="body">
        ${element.iconHtml(icon)}
        <div part="value"></div>
      </div>
      <div part="outline"></div>`,
    element.shadowRoot,
  )
}

export function toStaticGateJson(type) {
  return `"${type}"`
}

export function toIfableGateJson(type, condition) {
  if (condition !== '') {
    return `"${type}<${condition}"`
  } else {
    return toStaticGateJson(type)
  }
}

export function toAngleGateJson(type, angle) {
  if (angle === '') {
    return toStaticGateJson(type)
  } else {
    return `"${type}(${angle.replace('/', '_')})"`
  }
}

export function toFlaggedGateJson(type, flag) {
  if (flag === '') {
    return toStaticGateJson(type)
  } else {
    return `"${type}>${flag}"`
  }
}

export function toSpannedGateJson(type, span) {
  return `"${type}${span}"`
}
