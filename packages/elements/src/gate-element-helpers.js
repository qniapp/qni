import {html, render} from '@github/jtml'
import chevronSelectorVerticalIcon from '../icon/chevron_selector_vertical.svg'

function c(element, initResizeable) {
  if (element.shadowRoot !== null) return
  element.attachShadow({mode: 'open'})
  element.update()
  element.initDraggable()
  if (initResizeable) element.initResizeable()
}

export function cD(element) {
  c(element, false)
}

export function cR(element) {
  c(element, true)
}

export function rI(element, icon) {
  render(
    html`<div part="body">${element.iconHtml(icon)}</div>
      <div part="outline"></div>`,
    element.shadowRoot,
  )
}

export function rR(element, icon, resizeHandleTarget) {
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

export function rM(element, icon) {
  render(
    html`<div part="body">
        ${element.iconHtml(icon)}
        <div id="value" part="value"></div>
      </div>
      <div part="outline"></div>`,
    element.shadowRoot,
  )
}

export function rW(element, icon) {
  render(
    html`<div part="body">
        ${element.iconHtml(icon)}
        <div part="value"></div>
      </div>
      <div part="outline"></div>`,
    element.shadowRoot,
  )
}

function t(type, suffix = '') {
  return `"${type}${suffix}"`
}

export function tS(type) {
  return t(type)
}

export function tI(type, condition) {
  return t(type, condition === '' ? '' : `<${condition}`)
}

export function tA(type, angle) {
  return t(type, angle === '' ? '' : `(${angle.replace('/', '_')})`)
}

export function tF(type, flag) {
  return t(type, flag === '' ? '' : `>${flag}`)
}

export function tP(type, span) {
  return t(type, span)
}
