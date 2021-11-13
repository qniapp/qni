export function testWireableOperation(operationName) {
  afterEach(function () {
    document.body.textContent = ''
  })

  it('connects to lower bit', function () {
    const container = document.createElement('div')
    container.innerHTML = `
<circuit-dropzone>
  <${operationName} data-wire-top></${operationName}>
</circuit-dropzone>`
    document.body.append(container)

    const dropzone = document.querySelector('circuit-dropzone')
    const wireTopSvg = dropzone.shadowRoot.querySelector('#wire-top')

    assert.isNotNull(wireTopSvg)
  })

  it('connects to upper bit', function () {
    const container = document.createElement('div')
    container.innerHTML = `
<circuit-dropzone>
  <${operationName} data-wire-bottom></${operationName}>
</circuit-dropzone>`
    document.body.append(container)

    const dropzone = document.querySelector('circuit-dropzone')
    const wireBottomSvg = dropzone.shadowRoot.querySelector('#wire-bottom')

    assert.isNotNull(wireBottomSvg)
  })
}
