export function testDisableable(operationName) {
  beforeEach(function () {
    const el = document.createElement(operationName)
    document.body.append(el)
  })

  afterEach(function () {
    document.body.textContent = ''
  })

  it('can be disabled', function () {
    const operation = document.querySelector(operationName)
    operation.disable()

    assert(operation.disabled)
    assert(operation.hasAttribute('data-disabled'))
  })

  it('can be enabled', function () {
    const operation = document.querySelector(operationName)
    operation.disable()

    operation.enable()

    assert(operation.enabled)
    assert(!operation.hasAttribute('data-disabled'))
  })
}
