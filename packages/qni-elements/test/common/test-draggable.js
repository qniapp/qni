export function testDraggableOperation(operationName) {
  afterEach(function () {
    document.body.textContent = ''
  })

  it(`mousedown ${operationName}`, function () {
    const container = document.createElement('div')
    container.innerHTML = `
<circuit-dropzone>
  <${operationName}></${operationName}>
</circuit-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)

    mousedown(operation)

    assert.isFalse(operation.hasAttribute('data-grabbed'))
  })

  it(`${operationName}[data-draggable] dispatches operation-grab event on mousedown`, function (done) {
    const container = document.createElement('div')
    container.innerHTML = `
<palette-dropzone>
  <${operationName}></${operationName}>
</palette-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)

    operation.addEventListener('operation-grab', () => done())
    mousedown(operation)

    assert.isTrue(operation.hasAttribute('data-grabbed'))
  })

  it(`${operationName}[data-draggable] dispatches operation-ungrab event on mouseup`, function (done) {
    const container = document.createElement('div')
    container.innerHTML = `
<palette-dropzone>
  <${operationName}></${operationName}>
</palette-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)
    mousedown(operation)

    operation.addEventListener('operation-ungrab', () => done())
    mouseup(operation)

    assert.isFalse(operation.hasAttribute('data-grabbed'))
  })

  it(`${operationName}[data-draggable] dispatches operation-delete event when discarding`, function (done) {
    const container = document.createElement('div')
    container.innerHTML = `
<palette-dropzone>
  <${operationName}></${operationName}>
</palette-dropzone>`
    document.body.append(container)
    const operation = document.querySelector(operationName)
    mousedown(operation)

    operation.addEventListener('operation-delete', () => done())
    mouseup(operation)

    assert.isFalse(operation.hasAttribute('data-grabbed'))
  })

  function mousedown(operation) {
    operation.dispatchEvent(new Event('mousedown'))
  }

  function mouseup(operation) {
    operation.dispatchEvent(new Event('mouseup'))
  }
}
