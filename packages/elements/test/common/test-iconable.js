import {assert} from '@esm-bundle/chai'

export function testIconable(operationName) {
  afterEach(function () {
    document.body.textContent = ''
  })

  it('has an icon', function () {
    const operation = document.createElement(operationName)
    document.body.append(operation)

    const iconSvg = operation.shadowRoot.querySelector('#icon svg')
    assert.isNotNull(iconSvg)
  })
}
