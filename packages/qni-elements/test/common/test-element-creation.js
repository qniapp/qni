export function testElementCreation(operationClass, operationName) {
  it('creates from document.createElement', function () {
    const el = document.createElement(operationName)
    assert.equal(operationName, el.nodeName.toLocaleLowerCase())
    assert(el instanceof operationClass)
  })

  it('creates from constructor', function () {
    const el = new operationClass()
    assert.equal(operationName, el.nodeName.toLocaleLowerCase())
  })
}
