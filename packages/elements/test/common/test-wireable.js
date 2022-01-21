import {assert} from '@esm-bundle/chai'

export function testWireableOperation(operationName) {
  afterEach(function () {
    document.body.textContent = ''
  })

  it('connects to lower bit', function () {
    const container = document.createElement('div')
    container.innerHTML = `
<circuit-dropzone>
  <${operationName} data-connect-top></${operationName}>
</circuit-dropzone>`
    document.body.append(container)

    const dropzone = document.querySelector('circuit-dropzone')
    const connectTopSvg = dropzone.shadowRoot.querySelector('#connect-top')

    assert.isNotNull(connectTopSvg)
  })

  it(`connects to lower bit by setting ${operationName}[data-connect-top]`, function () {
    const container = document.createElement('div')
    container.innerHTML = `
<circuit-dropzone>
  <${operationName}></${operationName}>
</circuit-dropzone>`
    document.body.append(container)

    const operation = document.querySelector(operationName)
    operation.setAttribute('data-connect-top', '')

    const dropzone = document.querySelector('circuit-dropzone')
    const connectTopSvg = dropzone.shadowRoot.querySelector('#connect-top')
    assert.isNotNull(connectTopSvg)
  })

  it('connects to upper bit', function () {
    const container = document.createElement('div')
    container.innerHTML = `
<circuit-dropzone>
  <${operationName} data-connect-bottom></${operationName}>
</circuit-dropzone>`
    document.body.append(container)

    const dropzone = document.querySelector('circuit-dropzone')
    const connectBottomSvg = dropzone.shadowRoot.querySelector('#connect-bottom')

    assert.isNotNull(connectBottomSvg)
  })

  it(`connects to upper bit by setting ${operationName}[data-connect-bottom]`, function () {
    const container = document.createElement('div')
    container.innerHTML = `
<circuit-dropzone>
  <${operationName}></${operationName}>
</circuit-dropzone>`
    document.body.append(container)

    const operation = document.querySelector(operationName)
    operation.setAttribute('data-connect-bottom', '')

    const dropzone = document.querySelector('circuit-dropzone')
    const connectBottomSvg = dropzone.shadowRoot.querySelector('#connect-bottom')
    assert.isNotNull(connectBottomSvg)
  })
}
