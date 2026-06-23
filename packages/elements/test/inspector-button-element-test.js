import '../dist/index'
import {assert} from '@esm-bundle/chai'
import {testElementCreation} from './common/test-element-creation'

describe('inspector-button element', function () {
  testElementCreation(window.InspectorButtonElement, 'inspector-button')

  afterEach(function () {
    for (const popup of document.querySelectorAll('[data-tippy-root]')) {
      popup.remove()
    }
    document.body.textContent = ''
  })

  it('survives connect, disconnect, and reconnect', function () {
    appendOperationInspectorTemplate()
    const el = document.createElement('inspector-button')
    el.innerHTML = '<button type="button">Inspect</button>'

    document.body.append(el)
    assert.instanceOf(el.popup, Object)
    assert.isFalse(el.isInspectorShown)

    el.remove()
    document.body.append(el)
    el.dispatchEvent(new MouseEvent('mousedown', {bubbles: true}))

    assert.isTrue(el.isInspectorShown)

    document.body.dispatchEvent(new MouseEvent('click', {bubbles: true}))

    assert.isFalse(el.isInspectorShown)
  })
})

function appendOperationInspectorTemplate() {
  const template = document.createElement('template')
  template.id = 'operation-inspector-template'
  template.innerHTML = `
    <operation-inspector>
      <input data-target="operation-inspector.ifInput" />
      <label data-target="operation-inspector.angleInputLabel"></label>
      <input data-target="operation-inspector.angleInput" />
      <angle-slider data-target="operation-inspector.angleSlider"></angle-slider>
      <input data-target="operation-inspector.denominatorInput" />
      <span data-target="operation-inspector.denominatorVariableLabel"></span>
      <span data-target="operation-inspector.denominatorLabel"></span>
      <input type="checkbox" data-target="operation-inspector.reduceAngleFractionCheckbox" />
      <input data-target="operation-inspector.flagInput" />
    </operation-inspector>
  `
  document.body.append(template)
}
