export function testIconable(operationName) {
  afterEach(function () {
    document.body.textContent = ''
  })

  it('default icon', function () {
    const operation = document.createElement(operationName)
    document.body.append(operation)

    const iconSvg = operation.shadowRoot.querySelector('#icon svg')
    assert.isNotNull(iconSvg)
  })

  it(`${operationName}[data-icon]`, function () {
    const container = document.createElement('div')
    container.innerHTML = `
<template id="${operationName}-icon">
   <svg id="custom-icon"></svg>
</template>

<${operationName} data-icon="${operationName}-icon"></${operationName}>`
    document.body.append(container)
    const operation = document.querySelector(operationName)

    const iconSvg = operation.shadowRoot.querySelector('#icon svg')

    assert.isNotNull(iconSvg)
    assert.equal('custom-icon', iconSvg.id)
  })
}
